import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../style.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

function Home() {
    const [dataHome, setDataHome] = useState({})
    const [loading, setLoading] = useState(false)
    const [imgbanner, setImgbanner] = useState({})
    const [imgproducthot, setImgproducthot] = useState({})
    const [imgproductnew, setImgproductnew] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:2002/Homepage`);
            console.log(response.data)
            setDataHome(response.data)
            setImgbanner(response.data.Home_img)
            setImgproducthot(response.data.Home_carousel_img)
            setImgproductnew(response.data.Home_carousel_productNew)
            setLoading(true)
        }
        fetchData();
    }, [])
    if (loading !== true) {
        return <div>Loading...</div>
    }
    const prevTang = () => {
        if (currentIndex < imgbanner.length - 1) {
            const newIndex = currentIndex + 1
            console.log(newIndex)
            console.log(imgbanner.length)
            setCurrentIndex(newIndex)
        }
        else {
            const newIndex = 0
            setCurrentIndex(newIndex)
        }
    }
    const prevGiam = () => {
        if (currentIndex > imgbanner.length - 1) {
            const newIndex = currentIndex - 1
            console.log(newIndex)
            console.log(imgbanner.length)
            setCurrentIndex(newIndex)
        }
        else {
            let newIndex = currentIndex - 1 !== 0 ? currentIndex - 1 : 0
            if (newIndex < 0) {
                newIndex = imgbanner.length - 1
            }
            setCurrentIndex(newIndex)
            console.log(newIndex)
        }
    }
    return (

        <div className="wrapper">
            {
                console.log(currentIndex)
            }
            <div className="header">
                <div className="header-logo">
                    <img src='src/assets/logo.png' alt='Img' />
                </div>
                <ul className="header-menu">
                    <li>
                        <p>Thương hiệu</p>
                        <ul className="sub-menu">
                            <li><Link to='/test'>Tin tức ARISTINO</Link></li>
                            <li><Link to='/'>Phong cách ARISTINO</Link></li>
                            <li><Link to='/'>Báo chí nói về chúng tôi</Link></li>
                            <li><Link to='/'>Ưu đãi liên kết</Link></li>
                            <li><Link to='/'>Đôi cách yêu thương</Link></li>
                            <li><Link to='/'>Tuyển dụng</Link></li>
                        </ul>
                    </li>
                    <li>
                        <p>Sản phẩm</p>
                        <ul className="sub-menu">
                            <li><Link to='/'>Tin tức ARISTINO</Link></li>
                            <li><Link to='/'>Phong cách ARISTINO</Link></li>
                            <li><Link to='/'>Báo chí nói về chúng tôi</Link></li>
                            <li><Link to='/'>Ưu đãi liên kết</Link></li>
                            <li><Link to='/'>Đôi cách yêu thương</Link></li>
                            <li><Link to='/'>Tuyển dụng</Link></li>
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
            <div className='banner'>
                <div className="h-[780px] w-full m-auto pb-16 relative">
                    <div style={{ backgroundImage: `url(${imgbanner[currentIndex].img})` }} className="w-full h-full bg-center bg-cover duration-500"></div>
                </div>
                <div>
                    <Icon icon="tabler:chevron-right" onClick={prevTang} className='icon-tang' />
                </div>
                <div>
                    <Icon icon="tabler:chevron-left" onClick={prevGiam} className='icon-giam' />
                </div>
            </div>
            <div className='product-hot'>
                <h3>DANH MỤC NỔI BẬT</h3>
                <Swiper

                    centeredSlides={true}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                        },
                    }}
                    scrollbar={true}
                    navigation={true}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={imgproducthot[0].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproducthot[0].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproducthot[1].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproducthot[2].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproducthot[3].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproducthot[4].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproducthot[5].img} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='banner-main'>
                <div className="h-[780px] w-full m-auto pb-16 relative">
                    <div style={{ backgroundImage: `url(${imgbanner[2].img})` }} className="w-full h-full  bg-center bg-cover duration-500"></div>
                </div>
            </div>
            <div className='product-new'>
                <h3>SẢN PHẨM MỚI</h3>
                <Swiper
                    centeredSlides={true}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                        },
                    }}
                    scrollbar={true}
                    navigation={true}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img 
                        src={imgproductnew[0].img} 
                        
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproductnew[0].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproductnew[1].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproductnew[2].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproductnew[3].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproductnew[4].img} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgproducthot[5].img} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="footer">
                <div className='footer-row-1fr'>
                    <div className='footer-col'>
                        <div className='footer-col-1fr'>
                            <h4>VỀ CHÚNG TÔI</h4>
                            <p>Câu chuyện thương hiệu</p>
                            <p>Đôi Cánh Yêu Thương</p>
                            <p>Tin tức</p>
                            <p>Tuyển dụng</p>
                            <p>Liên hệ</p>
                        </div>
                        <div className='footer-col-1fr'>
                            <h4>CHÍNH SÁCH BÁN HÀNG</h4>
                            <p>Chính sách đổi hàng</p>
                            <p>Chính sách bảo hành</p>
                            <p>Chính sách hội viên</p>
                            <p>Chính sách giao nhận</p>
                            <p>Hướng dẫn mua hàng</p>
                            <p>Chính sách bảo mật</p>
                        </div>
                        <div className='footer-col-1fr'>
                            <h4>TƯ VẤN</h4>
                            <p>Tư vấn phong cách</p>
                            <p>Tư vấn chọn size</p>
                            <p>Hỏi đáp</p>

                        </div>
                        <div className='footer-col-1fr'>
                            <h4>THEO DÕI BẢN TIN CỦA CHÚNG TÔI</h4>
                            <div className='register'>
                                <input type='text' placeholder='Nhập email của bạn' />
                                <button>Đăng ký</button>
                            </div>
                            <p>Kết nối với chúng tôi</p>
                            <div className='link flex'>
                                <p>fb</p>
                                <p>tw</p>
                                <p>ig</p>
                                <p>p</p>
                                <p>yt</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-row-1fr'>
                    <div className='footer-col'>
                        <div className='footer-col-1fr'>
                            <p>CÔNG TY CỔ PHẦN ĐẦU TƯ K&G VIỆT NAM</p>
                            <p>Trụ sở chính: Tầng 11 khối A, tòa nhà Sông Đà, đường Phạm Hùng, Phường Mỹ Đình 1, Quận Nam Từ Liêm, Thành phố Hà Nội, Việt Nam</p>
                            <p>Giấy chứng nhận Đăng ký Kinh doanh số 0105911105 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 08/06/2012 và sửa đổi lần thứ 10 ngày 05/05/2022</p>
                        </div>
                        <div className='footer-col-1fr'>
                            <p>Phương thức thanh toán</p>
                            <img src='src/assets/payment.png' alt='img'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;