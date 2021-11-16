import React from "react";
// import spinner from "../public/spinner.gif";

const Spinner = () => {
    return (
        <img
            src='/spinner.gif'
            style={{ width: "200px", margin: "auto", display: "block" }}
            alt="Loading"
        />
    );
};

export default Spinner;