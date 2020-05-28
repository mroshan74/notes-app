const initialStateNotes = []

const notesReducer = (state = initialStateNotes, action) => {
  switch (action.type) {
    case 'SET_NOTE' : {
      return state.concat(action.payload)
    }
    case 'ADD_NOTE' : {
      return state.concat(action.payload)
    }
    case 'DELETE_NOTE' : {
      return state.filter(note => note._id !== action.payload )
    }
    case 'UPDATE_NOTE' : {
      return state.map(note => {
        if(note._id === action.payload.id)
          return Object.assign({}, note, action.payload.data)
        else
          return Object.assign({}, note)
      })
    }
    default: {
      return [...state]
    }
  }
}

export default notesReducer
