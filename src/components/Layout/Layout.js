import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { useState, useEffect, useContext } from "react";
import Contexts from '../Contexts/Contexts';
import ComponentCard from "../ComponentCard/ComponentCard";
import dataContext from '../Contexts/Contexts';
import { stylesContext } from "../Contexts/Contexts";
import FooterCard from "../Shared/Footer/FooterCard";

export default function Layout({ children }) {
    const [styles, setStyles] = useContext(stylesContext);
    const commonStyles = {
        backgroundColor: styles?.style?.['background-color'],
        color: styles?.style?.['text-color'],
        fontFamily: styles?.style?.['text-font']
    }

    return (
        
            <div className='container' style={commonStyles}>
                <NavigationBar />
                <main>{children}</main>
                <ComponentCard />
                <FooterCard />
            </div>
      
    )
}


