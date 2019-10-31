import React, {useCallback, useState} from "react";
import "./base.css";
import SongList from "./SongList/SongList";

interface Props {

}

const Main = (props: Props) => {

    const [greeting, setGreeting] = useState("Hello World");
    const click = useCallback((e: any) => {
        setGreeting("Welcome");
    }, [greeting]);

    return (
        <div className="main-panel">
            <h1 onClick={click} className="bg-black">{greeting}</h1>
            <SongList/>
        </div>
    );
};

export default Main;
