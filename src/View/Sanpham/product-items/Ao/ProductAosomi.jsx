import { Link } from "react-router-dom";
import '../style.scss'
function ProductAosomi(props) {
    const { dataAosomi } = props
    return (
        <>
            <div className="breadcrumb">
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to='/sanpham'>Sản phẩm</Link>
            </div>
            <div className="product-items">
                {
                    dataAosomi.map((el, idx) => {
                        return <div key={idx} className="product-listitems">
                            <Link to={`/sanpham/${idx+1}`}> <img src={el.img} /></Link>
                            <Link to={`/sanpham/${idx+1}`}><p>{el.name}</p></Link>
                            <h4>{el.price} Đ</h4>

                        </div>
                    })
                }
            </div>
        </>
    );
}

export default ProductAosomi;