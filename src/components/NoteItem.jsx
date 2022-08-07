import NoteColor from './button/NoteColor.jsx'
import Archive from './button/Archive.jsx'
import Delete from './button/Delete.jsx'
const NoteItem = ({title, body, id, archived, onDelete, onArchive,color}) => {
    return (
        <div className="note-item" style={{backgroundColor:`#${color}`}}>
            <div className="note-txt">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <div className="btn-note-icon">
                <Archive onArchive={onArchive}
                id={id}/>
                <Delete onDelete={onDelete}
                id={id} /> 
            </div>
        </div>
    )
}

export default NoteItem;