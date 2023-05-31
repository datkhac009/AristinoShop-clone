
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductItems from './product-items/ProductItems';
function Product() {


    const [loading, setLoading] = useState(false)
    const [dataAllAo,setDataAllAo] = useState({})



    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:2002/Ao_somi_Detail`);
            console.log(response)
            setDataAllAo(response)
            setLoading(true)
        }
        fetchData();
    }, [])

    
    if (loading !== true) {
        return <div>Loading...</div>
    }


    return (
        <div className="product h-[auto] pt-[5rem]">
            <ProductItems dataAllAos={dataAllAo}/>
        </div>
    );
}

export default Product;