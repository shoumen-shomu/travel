import { featuredData } from "../components/data/FeaturedData";
import tourData from "../components/data/TourData";
import Banner from "../layouts/home/Banner";
import Featured from "../layouts/home/Featured";

const Home = () => {
  return (
    <>
      <Banner />
      <Featured featuredData={featuredData} tourData={tourData} />
    </>
  );
};
export default Home;
