export const DELETE_PRODUCT='DELETE_PRODUCT';
export const CREATE_PRODUCT='CREATE_PRODUCT';

export const deleteProduct =productId=>{
    return{
        type:DELETE_PRODUCT,pid:productId
    }
};

export const createProduct=(title,authorname,genre,language,imageurl,details)=>{
    return{
        type:CREATE_PRODUCT,productData:{
           
            title,
            authorname,
            genre,
            language,
            imageurl,
            details
        }
    }
}