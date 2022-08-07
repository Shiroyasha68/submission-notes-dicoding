import NoteItem from './NoteItem.jsx';
const NoteArchive = ({getInitialData, onDelete, onArchive}) => {
    const archivedData = getInitialData.filter(item => item.archived == true);
    return(
        <div className="notes-archive">
            <h1>Arsip</h1>
            <div className="note-items">
            {archivedData.length >0 
                ? archivedData.map(item => 
                    <NoteItem title ={item.title}
                    body={item.body}
                    id={item.id}
                    color={item.color} 
                    onDelete={onDelete}
                    onArchive ={onArchive}
                    />)
                    : <h3>Arsip kosong</h3>
                    }       
            </div>
        </div>
    )
}

export default NoteArchive;