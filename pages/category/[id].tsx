// import { getStaticProps } from "next"
import { GetStaticPaths } from "next"
import { getCategory,getCategoryDetail } from "../api"
import { iCategory } from "../interface"
import productCat from "../components/productCat"

function Category() {
    //props
    //console.log(props);
    return (
        <div>
        {/* <div>ID: {props.detail.category_id}</div> */}
        ssss
        </div>
    )
  }

export async function getStaticPaths() {
const data = await getCategory()
const paths = data.map((item:iCategory) => {
    return { 
        params:{id:item.category_id.toString()}
    }
    }) 
    //console.log(paths);
    return { paths, fallback: false }
}

export async function getStaticProps(context:any) {
    const categoryDetail = await getCategoryDetail(context.params.id);
    //console.log(categoryDetail);
    return {
        props:{
            detail: categoryDetail
        },
    }
}


export default Category
