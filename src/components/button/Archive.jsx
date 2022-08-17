const Archive = ({id, onArchive}) => {
    return (
        <>
        <img src="./images/bx_archive-out.svg" alt="" className="note-archive" onClick={() => onArchive(id)}/>
        </>
    )
}

export default Archive;