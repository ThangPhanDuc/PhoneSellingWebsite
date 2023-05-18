export const viewProduct = (action, product)=>{
    return{
        type:"viewProduct",
        product:product,
        action:action
    }
}

export const changeProduct = (action, product)=>{
    return{
        type:"changeProduct",
        product:product,
        action:action
    }
}

export const addProduct = (action)=>{
    return{
        type:"addProduct",
        action:action
    }
}
export const deleteProduct = (id)=>{
    return{
        type:"deleteProduct",
        id:id
    }
}