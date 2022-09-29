const addToDb=(value)=>{

    localStorage.setItem('Item',JSON.stringify(value))
}
const getstoreCart=()=>{
    let storeCart=localStorage.getItem('Item');
     let storeCarts;
    if(storeCart){
       storeCarts=JSON.parse(storeCart)

    }else{
        storeCarts=0
    }
    return storeCarts;
}
export {addToDb,getstoreCart}