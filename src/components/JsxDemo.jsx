export default function JsxDemo(){
    const name = "Maria Fernanda Toledo"
    return (
    <>
        {/* This Heading uses JS expression to render the name in uppercase */}
        <h2 className="demo-heading">{ name.toUpperCase()}</h2>
        <br />
        <label htmlFor="username">Enter Username:</label>
        <input id="username" type="text" />
    </>
    )
    }

