const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true;
            });

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        ////////////////////////////////////////////////////////////////////////////////

        case "SET_SINGL_LOADING":
            return {
                ...state,
                isSinglLoading: true,
            };

        case "SET_SINGL_RPRODUCT_DATA":
            return {
                ...state,
                isSinglLoading: false,
                singlProduct: action.payload,
            };

        case "SINGL_ERROR":
            return {
                ...state,
                isSinglLoading: false,
                isError: true,
            };

        default:
            return state;
    }
};

export default ProductReducer;