import { setDataRedux } from "../controler/redux/action";
import { store } from "../controler/redux/store/configureStore";
import { useSelector } from 'react-redux';
import {getCategory} from "../pages/api";
import Category from "./category/[id]";

const setStateRedux = ()=>store.getState()
export const refreshDataGlobal = async()=>{
    const data = await getCategory();
    store.dispatch(setDataRedux(data));
}

export const refreshInitState=()=>{
    // refreshProduct()
    // refreshCategory()
}

