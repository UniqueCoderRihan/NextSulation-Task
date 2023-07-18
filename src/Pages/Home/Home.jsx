import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import LatestNews from "../../Components/LatestNews/LatestNews";
import Products from "../../Components/Products/Products";
import Blogs from "../Blogs/Blogs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <LatestNews></LatestNews>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;