import React from 'react'
import AddNote from './AddNote'
import ListNotes from './ListNotes'

function NoteManager() {
    return (
        <div>
            <h1>Notes</h1>
            <ListNotes />
            <AddNote />
        </div>
    )
}

export default NoteManager