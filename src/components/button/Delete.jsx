const Delete = ({id, onDelete}) => {
    return (
        <>
        <img src="./images/bx_trash.svg" alt="" className="note-delete" onClick ={() => onDelete(id)} />
        </>
    )
}
export default Delete;