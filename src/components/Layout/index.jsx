// import Footer from "../Footer"
import Header from "../Header"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container mx-auto px-2 sm:px-6 lg:px-8">
                {children}
            </main>
            {/* <Footer /> */}
        </>
    )
}


Layout.propTypes = {
    children: PropTypes.ReactNode,
}

export default Layout