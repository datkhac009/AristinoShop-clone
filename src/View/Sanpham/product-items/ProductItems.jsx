import ProductAosomi from "./Ao/ProductAosomi";
import './style.scss'
function ProductItems(props) {
    console.log(props)
    return (
        <>   
            <ProductAosomi dataAosomi={props.dataAllAos.data}/>
        </>
    );
}

export default ProductItems;