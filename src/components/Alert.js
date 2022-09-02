import React from "react";

function Alert(props) {
    return (
        <div style={{ height: "50px" }}>
            {/* extra div to avoid cumulative layout shift */}
            {props.alert && (
                <div
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                    role="alert"
                >
                    {props.alert.message}
                </div>
            )}
        </div>
    );
}

export default Alert;
