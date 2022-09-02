import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (type, msg) => {
        setAlert({
            type: type,
            message: msg,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2500);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#212529";
            document.body.style.color = "white";
            showAlert("success", "Dark mode has been enabled");
            // document.title = "TextUtils - Dark Mode";
            /* 
        setInterval(() => {
            document.title = "Download TextUtils Now!";
        }, 2000);
        setInterval(() => {
            document.title = "TextUtils";
        }, 1500); 
      */
        } else {
            setMode("light");
            document.body.style.backgroundColor = "#f8f9fa";
            document.body.style.color = "black";
            showAlert("success", "Light mode has been enabled");
        }
    };
    return (
        <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="my-3">
                <TextForm
                    showAlert={showAlert}
                    text="Enter the Text Below"
                    mode={mode}
                />
            </div>
        </>
    );
}

export default App;
