const initialStateCategory = []

const categoriesReducer = (state = initialStateCategory, action) => {
  switch (action.type) {
    case 'SET_CATEGORY': {
      return state.concat(action.payload)
    }
    case 'ADD_CATEGORY': {
      return state.concat(action.payload)
    }
    case 'DELETE_CATEGORY': {
      return state.filter(cat => cat._id !== action.payload)
    }
    case 'EDIT_CATEGORY': {
      return state.map(cat => {
        if(cat._id === action.payload.id){
          return Object.assign({}, cat, action.payload.data)
        }
        else{
          return Object.assign({},cat)
        }
      })
    }
    default: {
      return [...state]
    }
  }
}

export default categoriesReducer
