import { Outlet } from "react-router-dom"
import Header from "../component/header/header"
import Footer from "../component/footer/footer"

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;