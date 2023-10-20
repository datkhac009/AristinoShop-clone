import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css'
import '../View/style.css'
import Home from './../View/Home/Home';
import Menu from './../View/Navbar/menu';
import Product from './../View/Sanpham/product';
import Footer from './../View/Footer/footer';
import ProductAoID from '../View/Sanpham/product-items/Ao/ProductAoID';
function Mainlayout() {
    return (
        <div>
            <BrowserRouter>
                <div className="header  max-[600px]:text-center">
                    <Menu />
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sanpham' element={<Product />} />
                    <Route path='/sanpham/:id' element={<ProductAoID />} />
                    {/* <Route path='/test' element={<Test/>}/> */}
                </Routes>
                <div className="footer max-[600px]:p-0">
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Mainlayout;