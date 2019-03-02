
const reducer = ( state= [], action) => {
    // console.log(state, 'state', action, 'action');
    
      switch (action.type) {
  
        case 'ADD_MODEL':
          return [
          ...state,
          action.payload
        ] 
          
          default: 
              return state
      }
  }
  
  export default reducer
