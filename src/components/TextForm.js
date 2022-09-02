import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleClickUp = () => {
        let newT = text.toUpperCase();
        setText(newT);
        props.showAlert("success", "Converted to Uppercase!");
    };

    const handleClickDown = () => {
        let newT = text.toLowerCase();
        setText(newT);
        props.showAlert("success", "Converted to Lowercase!");
    };

    const handleClickTitle = () => {
        let t = text.split(" ");
        let res = "";
        t.forEach((word) => {
            res += word.slice(0, 1).toUpperCase() + word.substring(1) + " ";
        });
        setText(res);
        props.showAlert("success", "Converted to Sentence case!");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("success", "Copied to Clipboard");
    };

    const handlePaste = () => {
        navigator.clipboard.readText().then((data) => {
            setText(data);
        });
    };

    const handleExtra = () => {
        let newStr = text.split(/[ ]+/);
        setText(newStr.join(" "));
        props.showAlert("success", "Extra Spaces Removed!");
    };

    const handleClickSpace = () => {
        let t = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] === " ") continue;
            t += text[i];
        }
        setText(t);
        props.showAlert("success", "Removed Spaces!");
    };

    const handleClickCls = () => {
        setText("");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div
                className="container"
                style={{ color: props.mode === "light" ? "black" : "white" }}
            >
                <h1>{props.text}</h1>
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor:
                            props.mode === "dark" ? "#212529" : "white",
                        color: props.mode === "dark" ? "white" : "black",
                    }}
                    id="exampleFormControlTextarea1"
                    rows="6"
                ></textarea>
                <br />
                <button
                    type="submit"
                    onClick={handleClickUp}
                    className="btn btn-primary mx-1 my-1"
                >
                    Uppercase
                </button>
                <button
                    type="submit"
                    onClick={handleClickDown}
                    className="btn btn-primary mx-1 my-1"
                >
                    Lowercase
                </button>
                <button
                    type="submit"
                    onClick={handleClickTitle}
                    className="btn btn-info mx-1 my-1"
                >
                    Sentence Case
                </button>
                <button
                    type="submit"
                    onClick={handleClickSpace}
                    className="btn btn-danger mx-1 my-1"
                >
                    Remove Spaces
                </button>
                <button
                    type="submit"
                    onClick={handleExtra}
                    className="btn btn-danger mx-1 my-1"
                >
                    Remove Extra Spaces
                </button>
                <button
                    type="submit"
                    onClick={handleCopy}
                    className="btn btn-success mx-1 my-1"
                >
                    Copy Text
                </button>
                <button
                    type="submit"
                    onClick={handlePaste}
                    className="btn btn-warning mx-1 my-1"
                >
                    Paste Text
                </button>
                <button
                    type="submit"
                    onClick={handleClickCls}
                    className="btn btn-danger mx-1 my-1"
                >
                    Clear Text
                </button>
            </div>
            <div className="container">
                <hr />
                <h2>Your Text Summary</h2>
                <p>
                    {
                        text.split(/\s+/).filter((elem) => {
                            return elem.length !== 0;
                        }).length
                    }{" "}
                    Words and {text.length} Characters
                </p>
                <p>
                    {0.005 *
                        text.split(" ").filter((el) => {
                            return el.length !== 0;
                        }).length}{" "}
                    Minutes to read
                </p>
                <h3>Preview</h3>
                <p>
                    {text.length > 0 ? text : "Enter something to preview here"}
                </p>
            </div>
        </>
    );
}

TextForm.propTypes = { text: PropTypes.string };
