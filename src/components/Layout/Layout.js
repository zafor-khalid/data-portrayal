import NavigationBar from "../NavigationBar/NavigationBar";


export default function Layout({ children }) {
    return (
        <div className='container'>
            <NavigationBar />
            <main>{children}</main>

        </div>
    )
}