let heading = React.createElement(
    "h1",
    {
id:"heading"
    },
    "Hello Gautam"
)
console.log(heading)   // returns object
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)