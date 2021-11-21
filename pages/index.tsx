import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import productCat from './components/productCat'
import { getCategory,getCategoryDetail } from './api'

import { setDataRedux } from '../controler/redux/action'

const Home: NextPage = (props) => {
  console.log(props.data);
  return (
    <div>
    {props.data.map(productCat)}
    </div>
  )
}

export async function getStaticProps(context:any) {
  const category = await getCategory()
  return {
      props:{
          data: category
      },
  }
  // const categoryDetail = await getCategoryDetail()
  // return {
  //     props:{
  //         data: categoryDetail
  //     },
  // }

}

export default Home
