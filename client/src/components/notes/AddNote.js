import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startAddNote } from '../../redux/actions/notesAction'

class AddNote extends Component {
  state = {
      title: '',
      description: '',
      completed: false,
      category: '',
      pic: null,
      selectedImg: []
  }

  fileSelectedHandler = (e) => {
    //console.log(e.target.files)
    const pic = e.target.files
    const selectedImg = []
    for(let i = 0; i < pic.length; i++){
      selectedImg.push({
        'url': URL.createObjectURL(pic[i]),
        'alt': pic[i].name
      })
      //console.log('localImg ===>',selectedImg)
    }
    this.setState({
      pic,
      selectedImg 
      //URL.createObjectURL(e.target.files),
      //selectedImgAlt: e.target.files.name
    })
  }
  handelChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {title,pic,category,description} = this.state
    if(!title || !category){
      alert('Title/Category cannot be empty')
    }else{
      let fd = new FormData()
      fd.append('title',title)
      fd.append('category',category)
      fd.append('description', description)
      //fd.append('pic',pic, pic.name)
      // const str = []
      // for(let i =0 ;i< pic.length; i++){
      //   str.push(['pic',pic[i],pic[i].name])
      // }
      //console.log('result',str)
      if(pic)
      {
          for(let i =0 ;i< pic.length; i++){
          fd.append('pic',pic[i])
        }
      }
      //console.log('pics*******',[...pic])
      //fd.append('pic',[...pic])
      console.log(fd)
      this.props.dispatch(startAddNote(fd))
      this.setState({
        title: '',
        description: '',
        category: '',
        pic: null,
        selectedImg: [],
      })
    }
  }
  render() {
    return (
      <div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
        <form className='form-note' onSubmit={this.handleSubmit} encType='multipart/form-data'>
          <h2>Add Note</h2>
          <input
            type='text'
            name='title'
            id='title'
            value={this.state.title}
            onChange={this.handelChange}
            placeholder='Title'
          />
          <br />
          <br />
          <textarea
            name='description'
            id='description'
            cols='30'
            rows='10'
            value={this.state.description}
            onChange={this.handelChange}
            placeholder='Description'
          />
          <br />
          <br />
          <select
            name='category'
            id='category'
            value={this.state.category}
            onChange={this.handelChange}
          >
            <option value='select'>---select---</option>
            {this.props.categories.map((ele, i) => {
              return (
                <option key={i} value={`${ele._id}`}>
                  {ele.name}
                </option>
              )
            })}
          </select>
          <br />
          <br />
          <input type='file' name='pic' onChange={this.fileSelectedHandler} multiple />
          <br />
          <br />
          {this.state.pic && this.state.selectedImg.map((img,i) => {
            return (
              <img
                key = {i}
                className='select-img'
                src={img.url}
                alt={img.alt}
                width='300'
                height='300'
              />
            )
          })}
          <br/><br/>
          <input type='submit' value='Add Note' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(AddNote)
