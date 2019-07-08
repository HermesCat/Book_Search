import React from "react";
import "./style.css";


function Page_Wrapper(props) {
    return (
        <>
            <div className="page_wrapper">
                {props.children};
            </div>
        </>
    );
}

export default Page_Wrapper;