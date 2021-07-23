import axios from 'axios'
import  { CART_ADD_ITEM} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({ 
        type: CART_ADD_ITEM, 
        paylaod: { 
            product: data._id, 
            name: data.name, 
            image: data.image, 
            price: data.price, 
            countinStock: data.countinStock, 
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}