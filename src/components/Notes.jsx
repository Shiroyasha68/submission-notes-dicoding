import NoteItem from './NoteItem.jsx'
const Notes = ({getInitialData, onDelete, onArchive}) => {
    const notesData = getInitialData.filter(item => item.archived == false);
    return (
        <div className="notes">
            <h1>Catatan</h1>
            <div className="note-items">   
            {notesData.length >0 
                ? notesData.map(item => 
                    <NoteItem title ={item.title}
                    body={item.body}
                    id={item.id}
                    color={item.color} 
                    onDelete={onDelete}
                    onArchive ={onArchive}
                    />)
                    : <h3>catatan kosong</h3>
                    }        
             
            </div>
        </div>
    )
}

export default Notes;