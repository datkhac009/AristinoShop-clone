import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style.scss'
import { Icon } from '@iconify/react';

function ProductAoID() {
    const [dataAo, setDataAo] = useState({})
    const [loading, setLoading] = useState(false)
    const [selectedValue, setSelectedValue] = useState('');
    const[count,setCount] = useState(0)
    const { id } = useParams()
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:2002/Ao_somi_Detail/` + id);
            console.log(response)
            setDataAo(response.data)
            setLoading(true)
        }
        fetchData();
    }, [])
    if (loading !== true) {
        return <div>Loading...</div>
    }
    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const Tang = () => {
        setCount(count + 1)
    } 
    const Giam = () => {
        setCount(count - 1)
        if(count === 0){
            const countmoi = 0
            setCount(countmoi)
        }
    } 
    return (
        <div className="product h-[auto] pt-[7rem]">

            <div className="product-items">
                <div className="product-img">
                <img src={dataAo.img} />
                </div>
                <div className="product-title leading-8">
                    <p>{dataAo.name}</p>
                    <p>{dataAo.price}đ</p>
                    <p>Chọn size <span>(Hướng dẫn chọn size)</span></p>
                    <div className="checkbox-size">
                        <label>
                            <input type="radio"
                                value="39"
                                checked={selectedValue === '39'}
                                onChange={(event)=>handleRadioChange(event)}
                            />
                            39
                        </label>
                        <label>
                            <input type="radio"
                                value="40"
                                checked={selectedValue === '40'}
                                onChange={(event)=>handleRadioChange(event)}
                            />
                            40
                        </label>
                        <label>
                            <input type="radio"
                                value="41"
                                checked={selectedValue === '41'}
                                onChange={(event)=>handleRadioChange(event)}
                            />
                            41
                        </label>
                        <label>
                            <input type="radio"
                                value="42"
                                checked={selectedValue === '42'}
                                onChange={(event)=>handleRadioChange(event)}
                            />
                            42
                        </label>
                        <label>
                            <input type="radio"
                                value="43"
                                checked={selectedValue === '43'}
                                onChange={(event)=>handleRadioChange(event)}
                            />
                            43
                        </label>
                    </div>
                    <div className="product-count flex gap-3">
                        <p>Số lượng</p>
                        <div className="input-group">
                            <button onClick={()=>Giam()}>-</button>
                            <input type="text" value={count} placeholder="Số" onChange={(e)=>setCount(e.target.value)}/>
                            <button onClick={()=>Tang()}>+</button>
                        </div>
                    </div>
                    <div className="addcart">
                        <button><Icon icon="icon-park-outline:shopping" style={{border:"none"}} width="30" height="30"/> Thêm vào giỏ hàng</button>
                        <button className="text-gray-50">Mua ngay</button>
                    </div>
                </div>
            </div>
            <div className="product-details">
                <h3>Thông tin sản phẩm</h3>
                <span className="hr"></span>
                <p>FORM DÁNG:{dataAo.product_information.form}</p>
                <p>THIẾT KẾ:<br/>
                {dataAo.product_information.design}
                </p>
                <p>CHẤT LIỆU:<br/>
                {dataAo.product_information.material}
                </p>
                <p>MÀU SẮC:{dataAo.product_information.color}</p>
            </div>
        </div>
    );
}

export default ProductAoID;