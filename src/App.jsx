
import './App.css'
import Navbar from "./pages/navbar";
import Herosection from "./pages/herosection";
import Product from './pages/product';
import Footer from './pages/footer';
import Product_page from './pages/sub_pages/product_page';
import ActiveSlider from './pages/component/product/ActiveSlider';


function App() {

  return (
    <>

      <div className='max-w-[1280px] mx-auto bg-gradient-to-b from-zinc-50 via-yellow-100 to-lime-100'>
        <Navbar />
        <Herosection />
        <Product />
        <Footer />
        {/* <Product_page /> */}

        {/* <ActiveSlider /> */}
        
      </div>





    </>
  )
}

export default App
