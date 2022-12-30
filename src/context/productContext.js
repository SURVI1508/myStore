import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reduces/productReducer";

const AppContext = createContext();   // ======> 1//

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isSinglLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    singleProduct: {},
};

const AppProvider = ({ children }) => {                                     //  ======> 2  //
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };


    // 2nd api for singleProduct
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGL_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGL_RPRODUCT_DATA", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SINGL_ERROR" });
        }
    }
    // 2nd api for singleProduct


    useEffect(() => {
        getProducts(API);
    }, []);


    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
    );
};

// custom hooks
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };