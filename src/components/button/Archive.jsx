const Archive = ({id, onArchive}) => {
    return (
        <>
        <img src="./images/archive.svg" alt="" className="note-archive" onClick={() => onArchive(id)}/>
        </>
    )
}

export default Archive;