const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = async(filepath, user_input) => {
    const jobId = path.basename(filepath).split(".")[0];
    const outPath = path.join(outputPath, `${jobId}.exe`);
    const inputPath = path.join(outputPath, `${jobId}.txt`);
    
    
    await fs.promises.writeFile(inputPath, user_input);
    console.log("Filepath:",filepath);
    console.log("Outpath:",outPath);
    console.log("inputPath:",inputPath);    

    return new Promise((resolve, reject) => {
        if (fs.existsSync(outPath)) {
            fs.unlinkSync(outPath);
        }

        const compilecmnd = `g++ ${filepath} -o ${outPath}`;
        const executecmnd = `${outPath} < ${inputPath}`;

        exec(compilecmnd, (err, stdout, stderr) => {
            console.log("Compilation stdout:", stdout);
            console.log("Compilation stderr:", stderr);
            if (err) {
              reject(err);
            } else {
              exec(executecmnd, (err, stdout, stderr) => {
                console.log("Execution stdout:", stdout);
                console.log("Execution stderr:", stderr);
                if (err) {
                  if (err.code === 124) {
                    console.log(err.message); 
                    reject(new Error('Compilation timed out.'));
                  } else {
                    console.log(err.message);
                    reject(err);
                  }
                } else {
                  resolve(stdout);
                }
              });
            }
        });
    });
};

module.exports = {
    executeCpp,
};
