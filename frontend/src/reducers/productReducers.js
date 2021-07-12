export const productReducer = (state = { products:[]}, action ) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST': 
        return {loading: true, products: []}
        case 'PRODUCT_LIST_SUCCESS': 
        return {loading: true, products: action.payload }
        case 'PRODUCT_LIST_REQUEST': 
        return {loading: true, products: []}
    }

}