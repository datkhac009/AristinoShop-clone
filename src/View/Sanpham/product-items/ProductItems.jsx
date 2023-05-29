import ProductAosomi from "./Ao/ProductAosomi";
import './style.scss'
function ProductItems(props) {
    console.log(props)
    return (
        <>   
            <ProductAosomi dataAosomi={props.dataAllAos.Ao_somi}/>
        </>
    );
}

export default ProductItems;