import React from "react";

export const Row = ({ children }) => {
    return (
        <div className="row flex">
            {children}
        </div>
    );
};

export const Col = ({ children }) => {
    return (
        <div className="col">
            <div>{children}</div>
        </div>
    );
};
