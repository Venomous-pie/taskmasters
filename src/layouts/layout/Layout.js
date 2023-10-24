import LandingNavbar from '../navbar/LandingNavbar';
import Content from '../content/Content';
import Footer from '../footer/Footer';

const Layout = () => {
    return (
        <div className="Layout">
            <LandingNavbar/>
            <Content/>
            <Footer/>
        </div>
    )
}
export default Layout;