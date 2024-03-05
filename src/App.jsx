
import './App.css'
import Navbar from "./pages/navbar";
import Herosection from "./pages/herosection";
import Product from './pages/product';
import Footer from './pages/footer';

function App() {

  return (
    <>

      <div className='max-w-[1280px] mx-auto '>
        <Navbar />
        <Herosection />
        <Product />
        <Footer />
      </div>




    </>
  )
}

export default App
