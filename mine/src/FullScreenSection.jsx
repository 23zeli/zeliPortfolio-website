import * as React from "react";

const FullScreenSection = ({ children, isDarkBackGround }) => {
    return(
        <div 
            backgroundColor={backgroundColor}
            color={isDarkBackGround ? "white" : "black"}
        >
            <div maxWidth="1280px" minHeight="100vh" >
                {children}
            </div>
        </div>
    )
}

export default FullScreenSection