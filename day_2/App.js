import React from "react";

import  ReactDOM  from "react-dom";

const Title = () => {
    return (
        <h1>Title</h1>
    )
}

const HedingComponent = () => {
    return (
        <div>
            {
                Title()
            }
          
        <Title/>
            <h1>functional component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HedingComponent/>)

