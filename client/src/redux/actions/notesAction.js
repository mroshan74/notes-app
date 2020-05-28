import axios from 'axios'
const getToken = localStorage.getItem('token')

//------------get
export const setNote = (data) => {
  return { type: 'SET_NOTE', payload: data }
} 

export const startNote = (data) => {
  return (dispatch) => {
    axios.get('/notes',{headers: {'x-auth': getToken}})
      .then((response) => {
        console.log('[PROMISE-notes-get]',response.data)
        const list = response.data
        dispatch(setNote(list))
      })
      .catch(err => console.log(err))
  }
}

//------------ create/post
export const addNote = (data) => {
  return { type: 'ADD_NOTE', payload: data }
}

export const startAddNote = (data) => {
    return (dispatch) => {
        axios.post('/notes', data, {
          headers: {
            'x-auth': getToken
          }
        })
        .then((response) => {
            console.log('[PROMISE-note-add]',response.data)
            const add = response.data
            dispatch(addNote(add))
        })
        .catch((err) => console.log(err))
    }
}

//-----------------delete
export const deleteNote = (id) => {
  return { type:'DELETE_NOTE', payload: id }
}

export const startDeleteNote = (id) => {
  return(dispatch) => {
    axios
      .delete(`/notes/${id}`, {
        headers: {
          'x-auth': getToken,
        }
      })
      .then((response) => {
        console.log('[promise-del-note]', response.data)
        dispatch(deleteNote(id))
      })
      .catch((err) => console.log(err))
  }
}

//------------------------ update
export const updateNote = (id,data) => {
  return { type: 'UPDATE_NOTE', payload: { id, data } }
}

export const startUpdateNote = (id,upData) => {
  return (dispatch) => {
    axios
      .put(`/notes/${id}`,upData, {
        headers: {
          'x-auth': getToken,
        },
      })
      .then((response) => {
        console.log('[promise-update-note]', response.data)
        const newData = response.data
        dispatch(updateNote(id,newData))
      })
      .catch((err) => console.log(err))
  }
}