
import TextList from "./components/TextList";
import SloganMaker from "./components/SloganMaker";
import Overlap from "./components/TopSection";
import MidSection from "./components/MidSection";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <>

      <Overlap/>
      <MidSection/>
      <div className="pl-[63px] pt-10">
      <h3 className="font-bold text-2xl ">Try our other free Products</h3>
      </div>
      
      <ProductGrid/>
      <Footer/>

      
    </>
  );
}

export default App;
