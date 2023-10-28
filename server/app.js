const express = require('express');
const { collection } = require('../server/mongodb.js');
const cors = require('cors');

const app = express();
const {generateFile} = require('./generateFile.js');

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check= await collection.findOne({email:email,password:password})

        if (check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data = {
        email:email,
        password:password
    }

    try{
        const check= await collection.findOne({email:email,password:password})

        if (check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/run", async(req,res) => {
    const {language, code} = req.body;

    if (code == undefined) {
        return res.status(404).json({ success: false, error: "Empty code"});
    }
    try {
        const filePath = await generateFile(language, code);
        const output = await execute(filePath);
        res.json({ filePath, output });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
})

app.listen(8000,()=>{
    console.log("Server is listening on port 5000!");
})