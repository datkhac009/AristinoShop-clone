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
import Menu from './../Navbar/menu';
import Footer from './../Footer/footer';

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
                    pagination={{
                        type: "progressbar",
                    }}
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
                    pagination={{
                        type: "progressbar",
                    }}
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
                        <img src={imgproductnew[3].img} />
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
           
        </div>
    );
}

export default Home;