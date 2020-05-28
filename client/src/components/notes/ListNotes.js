import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { startDeleteNote, startUpdateNote } from '../../redux/actions/notesAction'

function ListNotes(props) {

    const handleDeleteNote = (id) => {
        props.dispatch(startDeleteNote(id))
    }

    const handleStatus = (id,stat) => {
        const status = { completed: !stat }
        props.dispatch(startUpdateNote(id,status))
    }

    return (
        <div>
            <table>
                <tbody>{
                    props.notes.map((note,i) => {
                        const styled = () => {
                            return {textDecorationLine: note.completed ? 'line-through' : 'none'}
                        }
                        return <tr key={i}>
                            <td><input type="checkbox" name="status" id="status" checked={note.completed} onChange={() => {handleStatus(note._id,note.completed)}}/></td>
                            <td style={styled()}>{note.title}</td>
                            <td style={styled()}>{note.description}</td>
                            <td style={styled()}>{ props.categories && props.categories.find(cat => note.category === cat._id).name }</td>
                            <td style={styled()}>{moment(note.createdAt).format('LL')}</td>
                            <td>{note.pictures && note.pictures.map((pic,i) =>{
                                return <img key={i} src={pic.url} alt={pic.name} width='100' height='100' onClick={() => {window.open(pic.url)}}/>
                            })}</td>
                            <td><button onClick={() => {handleDeleteNote(note._id)}}>Remove</button></td>
                        </tr>
                    })
                }</tbody>
            </table>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        notes: state.notes
    }
}

export default connect(mapStateToProps)(ListNotes)