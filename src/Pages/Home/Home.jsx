import Banner from "../../Components/Banner/Banner";
import LatestNews from "../../Components/LatestNews/LatestNews";
import Products from "../../Components/Products/Products";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;