import React, { useState, useEffect } from "react"; 

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("component mounted");
    }, []);

    function Increment() {
        if (count < 20) {
            setCount(count + 1);
        }
    }

    function Decrement() {
        if (count > 0) {  // Common button styling
            setCount(count - 1);
        }
    }

    function Multiply() {
        if (count * 2 <= 20) {
            setCount(count * 2);
        } else {
            setCount(20); 
        }
    }

    function Reset() {
        setCount(0);
    }

    const buttonStyle = {
        padding: "10px 20px",
        margin: "5px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        color: "white",
        fontWeight: "bold",
        transition: "background-color 0.2s"
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "50px" }}>
            {/* Dynamic color for the text based on the count value */}
            <h1 style={{ fontSize: "48px", color: count === 20 ? "#dc3545" : "#333" }}>
                {count}
            </h1>
            
            <button 
                onClick={Increment} 
                style={{ ...buttonStyle, backgroundColor: "#28a745" }}
            >
                Increment
            </button>
            
            <button 
                onClick={Decrement} 
                style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
            >
                Decrement
            </button>
            
            <button 
                onClick={Multiply} 
                style={{ ...buttonStyle, backgroundColor: "#007bff" }} 
            >
                Multiply (x2)
            </button>
            
            <button 
                onClick={Reset} 
                style={{ ...buttonStyle, backgroundColor: "#6c757d" }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;