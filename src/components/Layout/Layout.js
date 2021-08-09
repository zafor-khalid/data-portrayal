import ComponentCard from "../ComponentCard/ComponentCard";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";


export default function Layout({ children }) {
    return (
        <div className='container'>
            <NavigationBar />
            <main>{children}</main>
            <ComponentCard />
        </div>
    )
}

