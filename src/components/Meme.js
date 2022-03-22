import React from "react";
import memesData from "../memesData";

function Meme() {

    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    function randomNumber() {
        return Math.floor(Math.random() * memesData.data.memes.length)
    }

    function handleClick() {
        setMemeImage(memesData.data.memes[randomNumber()].url)
    }

    return (
        <div className="Meme">
            <div className="Inputs-div">
                <input type="text" placeholder="Top text"/>
                <input type="text" placeholder="Bottom text"/>
            </div>
            <button onClick={handleClick} >Get a new meme image 🖼</button>
            <img src={memeImage}/>
        </div>
    )
}

export default Meme;