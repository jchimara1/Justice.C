
import React from "react";

function CardContainer({ children }) {
    return (
        <div style={{ border: "2px solid", padding: "20px" }}>
            {children}
        </div>
    );
}

export default CardContainer;