import ComponentCard from "../ComponentCard/ComponentCard";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
// import { stylesContext } from '../../components/Contexts/Contexts';
import { useState, useEffect } from "react";

export default function Layout({ children }) {
    const [styles, setStyles] = useState();

    useEffect(() => {
        fetch('https://api.npoint.io/836be77be325d0a34bd8')
            .then(res => res.json())
            .then(data => {
                setStyles(data);
            })
    }, [setStyles])
    // console.log(styles?.style?.["card-font"])
    const customStyles = {
        backgroundColor: styles?.style["background-color"],
        color: styles?.style["text-color"],
        fontFamily: styles?.style["text-font"]
    }
    const cardStyles = {
        fontFamily: styles?.style["card-font"], 
        color: styles?.style["card-text-color"], 
        backgroundColor: styles?.style["card-background-color"]
    }
    return (
        <div className='container' style={customStyles}>
            <NavigationBar />
            <main>{children}</main>
            <ComponentCard style={cardStyles} />
            aaa
        </div>
    )
}


