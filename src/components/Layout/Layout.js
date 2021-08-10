import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { useContext } from "react";
import { stylesContext } from "../Contexts/Contexts";
import FooterCard from "../Shared/Footer/FooterCard";

export default function Layout({ children }) {
    const [styles, setStyles] = useContext(stylesContext);
    const commonStyles = {
        backgroundColor: styles?.style?.['background-color'],
        color: styles?.style?.['text-color'],
        fontFamily: styles?.style?.['text-font'],
        paddingBottom: '50px',
    }

    return (
        
            <div className='container' style={commonStyles}>
                <NavigationBar />
                <main>{children}</main>
                <FooterCard />
            </div>
      
    )
}


