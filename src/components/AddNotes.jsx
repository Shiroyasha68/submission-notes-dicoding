import NoteColor from './button/NoteColor.jsx';
import Archive from './button/Archive.jsx';
import {useState} from 'react';
const AddNotes = ({addNotes}) => {
    const [addTitle, setAddTitle] = useState();
    const [addBody, setAddbody] = useState();
    const [charLimit, setCharLimit] = useState(0);
    const [colorPicker, setColorPicker] = useState('f77f00');
    const addTitleFun = (e) => {
        setAddTitle(event.target.value.slice(0, 50));
        setCharLimit(event.target.value.length);
    }
    const charValue = () => {
        if(charLimit > 50) {
            return 'Karakter maksimal 50';
        }
        else {
            return charLimit;
        }
    }
    const addbodyFun = (e) => {
        setAddbody(event.target.value);
    }
    const addColorFun = (color) => {
        setColorPicker(color)
        console.log(color);
    }
    const myStyle ={
        backgroundColor:`#${colorPicker}`
    }
    const addNotesFun = () => {
        const newObj = {
            id: +new Date(),
            title: addTitle,
            body: addBody,
            createdAt: new Date(),
            color: colorPicker,
            archived: false,
        }
       addNotes(newObj);
       setAddTitle('');
       setAddbody('');
       setCharLimit(0);
    }
    return (
        <div className="add-notes" style={myStyle}>
            <div className="rounded">{charValue()}</div>
            <input type="text" name="" className="input-title" placeholder="Judul" onChange={addTitleFun} value={addTitle} style={myStyle}/><br />
            <textarea name="" id="" cols="30" rows="4" placeholder="Catatan" onChange={addbodyFun} value={addBody} style={myStyle} />
            <div className="button-area">
                <div className="btn-logo">
                    <NoteColor addColorFun={addColorFun} />
                </div>
                <div className="btn-submit">
                    <button className="submit-note" onClick={addNotesFun} style={myStyle}>Simpan</button>
                    <button className="cancel-note" style={myStyle}>Batalkan</button>
                </div>
            </div>
        </div>
    )
}

export default AddNotes;