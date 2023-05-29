import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductAoID() {
    // const [dataAo,setDataAo] = useState([])
    const {id} =useParams()
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:2002/Detail/`+id);
            console.log(response)
            // setDataAo(response)
        }
        fetchData();
    }, [])
   
    return (
        <div className="product h-[auto] pt-[5rem]">
            <h1>Hello ID</h1>
           
        </div>
    );
}

export default ProductAoID;