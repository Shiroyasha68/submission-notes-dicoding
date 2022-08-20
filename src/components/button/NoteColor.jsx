import {colorNotes} from '../../index.js';
import {useState} from 'react';
import {motion} from 'framer-motion';

const NoteColor = ({addColorFun}) => {
    const [isOpen, setIsOpen] = useState(false);
    const  variants = {
        open: {visibility: "visible", width:"100%", transition: { staggerChildren:1, duration:1, type: 'easein'}},
        close: {visibility: "hidden"}
    }
    const item = {
        open: {opacity: 1},
        close: {opacity: 0}
    }
    return (
        <>
            <motion.div className="color-picker" variants={variants} animate={isOpen? "open" : "close"} initial={{width: 0}}>
                <motion.div style={{backgroundColor: '#277BC0'}} onClick={() => addColorFun('277BC0')}  ></motion.div>
                <motion.div  style={{backgroundColor: '#FFB200'}} onClick={()=> addColorFun('FFB200')} ></motion.div>
                <motion.div style={{backgroundColor: '#C21010'}} onClick={()=> addColorFun('C21010')} ></motion.div>
                <motion.div  style={{backgroundColor: '#FA2FB5'}} onClick={()=> addColorFun('FA2FB5')} ></motion.div>
                <motion.div  style={{backgroundColor: '#5BB318'}} onClick={()=> addColorFun('5BB318')} ></motion.div>
                <motion.div style={{backgroundColor: '#61481C'}} onClick={()=> addColorFun('61481C')}></motion.div>
            </motion.div>
            <img src="./images/ic_sharp-color-lens.svg"  alt="" className="note-color" onClick={() => setIsOpen(isOpen => !isOpen)}/>
        </>
    )
}

export default NoteColor;