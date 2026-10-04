
import { featuredData } from "../components/data/FeaturedData";
import Banner from "../layouts/home/Banner";
import Featured from "../layouts/home/Featured";



const Home = () => {
  return (
    <>
      <Banner />
      <Featured data={featuredData}/>
     
    
      
    </>
  );
};
export default Home;
