import React, { useContext, useState } from 'react'
import noteContext from '../context/note/noteContext';

export default function Addnote() {
    
    const context = useContext(noteContext)
    const {addnote} = context

    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: ""
    })
    const handleClick = (e) =>{
        e.preventDefault()
        addnote(note.title, note.description, note.tag)
        setNote({title: "", description: "", tag: ""})
    }

    const handleChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <>
    <h2>Create your notes here...</h2>
    <form action="">
        <div className="box">
            <label >Title</label>
            <input type="text" value={note.title} name='title' id='title' onChange={handleChange} />
        </div>
        <div className="box">
            <label >Description</label>
            <input type="text" value={note.description} name='description' id='description' onChange={handleChange} />
        </div>
        <div className="box">
            <label >Tag</label>
            <input type="text" value={note.tag} name='tag' id='tag' onChange={handleChange} />
        </div>

        <button
            disabled={note.title.length < 3 || note.description.length < 3 || note.tag.length < 3}
            type="submit"
            onClick={handleClick}
            style={{
                color: 'black',
                backgroundColor:
                note.title.length < 3 || note.description.length < 3 || note.tag.length < 3
                    ? '#ccc' 
                    : '#27e727', 
                cursor:
                note.title.length < 3 || note.description.length < 3 || note.tag.length < 3
                    ? 'not-allowed'
                    : 'pointer',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
            }}
            >
            Add note
            </button>

    </form>
    </>
  )
}
