import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const location = useLocation()

    return (
        <div className="homepage">

            <h1>Hello {location.state.id}, Welcome to the Online Compilation platform</h1>
            <textarea rows = '20' cols = '75' className="textarea" > </textarea>
        </div>
    )
}

export default Home;