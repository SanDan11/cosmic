import React from "react";

import "../styles/AreaStyles/Forest.css"



function Forest( {setCurrentArea} ) {
    return (<div className="forest-container">
        <h1>You Are in a forest</h1>
        <div className="p-container">
        <p>You enter a landing zone and the area is clear</p>
        <p>You start by looking around getting a senese of direction</p>
        </div>



        <button className="button-north" onClick={() => setCurrentArea("town")}>North</button>
        <button className="button-east" onClick={() => setCurrentArea("cave")}>East</button>
        <button className="button-west">West</button>
    </div>);
}

export default Forest