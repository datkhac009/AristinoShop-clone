
function footer() {
    return (
        <>
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
        </>
    );
}

export default footer;