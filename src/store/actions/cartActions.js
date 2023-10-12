export const ADD_TO_CART_FOR_CaLL = "ADD_TO_CART_FOR_CaLL"
export const REMOVE_FROM_CART_FOR_CaLL = "REMOVE_FROM_CART_FOR_CaLL"

export function addToCartForCall(call) { 
   return {
        type : ADD_TO_CART_FOR_CaLL,
        payload : call
   }
}
   export function removeFromCartForCall(call) { 
    return {
         type : REMOVE_FROM_CART_FOR_CaLL,
         payload : call
    }

 


}



















////Reducerlara gonderdigin operasyoneller, redux gönderilen action hnagi state'in icinde var ben onu tetikleyeyim diyor.
