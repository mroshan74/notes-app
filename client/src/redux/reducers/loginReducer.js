const initialStateLogin = {
  _id: '',
  username: '',
  email: '',
}

const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case 'SET_USER_DATA': {
      return Object.assign({}, state, {
        _id: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
      })
    }
    case 'CLEAR_USER_DATA': {
      return Object.assign({}, state, {
        _id: '',
        username: '',
        email: '',
      })
    }
    default: {
      return { ...state }
    }
  }
}

export default loginReducer
