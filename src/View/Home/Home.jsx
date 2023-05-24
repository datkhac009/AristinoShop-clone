import '../style.css'
function Home() {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="header-logo">
                   <img src='src/assets/logo.png' alt='Img'/>
                </div>
                <ul className="header-menu">
                    <li>
                    <p>Thương hiệu</p>
                    <ul className="sub-menu">
                        <li>Tin tức ARISTINO</li>
                        <li>Phong cách ARISTINO</li>
                        <li>Báo chí nói về chúng tôi</li>
                        <li>Ưu đãi liên kết</li>
                        <li>Đôi cách yêu thương</li>
                        <li>Tuyển dụng</li>
                    </ul>
                    </li>
                    <li>
                    <p>Sản phẩm</p>
                    <ul className="sub-menu">
                        <li>Tin tức ARISTINO</li>
                        <li>Phong cách ARISTINO</li>
                        <li>Báo chí nói về chúng tôi</li>
                        <li>Ưu đãi liên kết</li>
                        <li>Đôi cách yêu thương</li>
                        <li>Tuyển dụng</li>
                    </ul>
                    </li>
                    <li>Phụ kiện</li>
                    <li>Bộ sưu tập</li>
                    <li>Cửa hàng</li>
                    <li>3D Shopping</li>
                    <li>OUTLET STORE</li>
                </ul>
                <div className="header-sreach-cart">
                    <input type="text" name="sreach" placeholder="Tìm kiếm" />
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;