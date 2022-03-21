function Meme() {

    function handleClick() {
        console.log("I was clicked")
    }

    return (
        <div className="Meme">
            <div className="Inputs-div">
                <input type="text" placeholder="Top text"/>
                <input type="text" placeholder="Bottom text"/>
            </div>
            <button onClick={handleClick} >Get a new meme image 🖼</button>
        </div>
    )
}

export default Meme;