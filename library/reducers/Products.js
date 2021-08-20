import PRODUCTS from '../../data/DummyData'
import Product from '../../models/Product';
import { DELETE_PRODUCT,CREATE_PRODUCT} from '../actions/Products'

const initialState={
    availableBooks:PRODUCTS,
    userBooks:PRODUCTS.filter(prod=>prod.bookid==='u4')
}

//function
export default(state=initialState,action)=>{
    switch(action.type){
        case CREATE_PRODUCT:
            const newProduct=new Product(
            new Date().toString(),
            'u1',
            action.productData.title,
            action.productData.authorname,
            action.productData.genre,
            action.productData.language,
            action.productData.imageurl,
            action.productData.details,
            );
            return{
                ...state,
                availableBooks:state.availableBooks.concat(newProduct),
                userBooks:state.userBooks.concat(newProduct)
           
            }
        case DELETE_PRODUCT:
        return{
            ...state,
            userBooks:state.userBooks.filter(
                product=>product.id!==action.pid),
                availableBooks:state.availableBooks.filter(
                    product=>product.id!==action.pid),
        }
    }
    return state
       
    
};