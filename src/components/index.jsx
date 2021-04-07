import Nav from "./navBar";
import Header from "./header";
import PreLoader from "./preloader";
import FeatureSmall from "./featureSmall/featureSmall";
import FeatureBig from "./featureBig/featureBig";
import Parallax from "./parallax";
import Testimonial from "./testimonial";
import Pricing from "./pricing";
import Counter from "./counter";
import Blog from "./blog";
import Contact from "./contact";
import Footer from "./footer";



function Main(){
    return(<div>
        <PreLoader/>
        <Nav/>
        <Header/>
        <FeatureSmall/>
        <FeatureBig/>
        <Parallax/>
        <Testimonial/>
        <Pricing/>
        <Counter/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>)
}

export default Main;