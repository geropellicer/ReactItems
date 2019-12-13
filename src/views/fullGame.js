import React,{useEffect, useState} from "react";
import { setState } from "expect/build/jestMatchersObject";

const FullGame = (props) => {
    const {slug, id} = props.match.params;

    const [gameItem, setGameItem] = useState([]);

    useEffect( () => {
        getItem();
    }, []);

    const getItem = async () => {
        const rawData = await fetch("https://rawg-video-games-database.p.rapidapi.com/games/3498", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "c26edb61e6mshfb6142e8021ef4ep134f88jsn26007ace5643"
            }
        })

        const jsonData = await rawData.json();
        console.log(jsonData);
        setGameItem(jsonData);
    }

    console.log(props);
    return(
        <div>

        <h1>{slug}</h1>
        <h1>{id}</h1>
        </div>
    );
};

export default FullGame;