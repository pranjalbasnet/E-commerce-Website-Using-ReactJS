export const initialState = {
    review: [],
    basket: [],
    delivery: [],
    search: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    switch (action.type) {

      case "ADD_TO_REVIEW":
        return{
          ...state,
          review: [...state.review, action.item],
        };

        case 'REMOVE_FROM_REVIEW':
        return {
          ...state,
          review: []
        };

        case "ADD_TO_DELIVERY":
          return{
            ...state,
            delivery: [...state.delivery, action.item],
          };

        case 'EMPTY_DELIVERY':
        return {
          ...state,
          delivery: []
        };

        case "ADD_TO_SEARCH":
        return{
          ...state,
          search: [...state.search, action.item],
        };

        case 'EMPTY_SEARCH':
        return {
          ...state,
          search: []
        };

      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        };
  
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;