import axios from 'axios'
const getToken = localStorage.getItem('token')

//------- get 
export const setCategory = (data) => {
    return { type: 'SET_CATEGORY', payload: data }
}

export const startCategory = () => {
    return(dispatch) => {
        axios.get('/categories',{ headers:{ 'x-auth': getToken }})
            .then((response) => {
                console.log('[PROMISE-cat-get]',response.data)
                const list = response.data
                dispatch(setCategory(list))
            })
            .catch(err => console.log(err))
    }
}

//------- create
export const addCategory = (data) => {
    return { type: 'ADD_CATEGORY', payload: data }
}

export const startAddCategory = (fData) => {
    return(dispatch) => {
        axios.post('/categories',fData,{ headers:{ 'x-auth': getToken }})
            .then((response) => {
                console.log('[PROMISE-cat-add]',response.data)
                const data = response.data
                dispatch(addCategory(data))
            })
            .catch(err => console.log(err))
    }
}

//------- destroy
export const deleteCategory = (id) => {
    return { type: 'DELETE_CATEGORY', payload: id }
}

export const startDeleteCategory = (id) => {
    return(dispatch) => {
        axios.delete(`/categories/${id}`,{ headers:{ 'x-auth': getToken }})
            .then((response) => {
                console.log('[PROMISE-cat-del]',response.data)
                dispatch(deleteCategory(id))
            })
            .catch(err => console.log(err))
    }
}

//------- edit 
export const editCategory = (id,data) => {
    return { type: 'EDIT_CATEGORY', payload: {id ,data} }
}

export const startEditCategory = (id,fData) => {
    return(dispatch) => {
        axios.put(`/categories/${id}`, fData, { headers:{ 'x-auth': getToken }})
            .then((response) => {
                console.log('[PROMISE-cat-get]',response.data)
                const pData = response.data
                dispatch(setCategory(id, pData))
            })
            .catch(err => console.log(err))
    }
}

