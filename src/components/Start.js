import React from "react";

import "../styles/Start.css"

function StartMenu({ setIsGameStarted }) {
    return (
        <div className="menu-container">
            <h1>Cosmic Commando</h1>
            <button className="start-button" onClick={() => setIsGameStarted(true)}>
                Start
            </button>

        </div>

    );
}

export default StartMenu;