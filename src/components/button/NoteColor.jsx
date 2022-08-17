import {colorNotes} from '../../index.js';
const NoteColor = ({addColorFun}) => {
    const randomColorPicker = () => {
        const randomIndex = Math.floor(Math.random() * colorNotes.length);
        const item = colorNotes[randomIndex];
        addColorFun(item);
    }
    return (
        <>
            <img src="./images/ic_sharp-color-lens.svg"  alt="" className="note-color" onClick={randomColorPicker}/>
        </>
    )
}

export default NoteColor;