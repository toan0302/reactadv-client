//import { useRouter } from "next/router";
import { iCategory } from "../interface";
import { getCategory,getCategoryDetail } from "../api";

const  productCat = (category:iCategory)=>{
    // const router = useRouter()
    return (
        <div key={category.category_id}>
        <div>category_id: {category.category_id}</div>
        <div>name: {category.name}</div>
        <div>image: {category.image}</div>
        <div>date_added: {category.date_added}</div>
        <hr></hr>
        </div>
    )
}
export default productCat;
