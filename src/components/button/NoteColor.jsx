import {colorNotes} from '../../index.js';
import {useState} from 'react';
const NoteColor = ({addColorFun}) => {
    const [colorVal, setColorVal] = useState(false);
    const visibility = () => {
        if (colorVal) {
            return {
                opacity: 1
            }
        }
        else {
            return {
                opacity: 0
            }
        }
    }
    const pickColorBtn = () => {
        if (colorVal == false) {
            setColorVal(true)
        }
        else {
            setColorVal(false)
        }
    }
    return (
        <>
            <div className="color-picker" style={visibility()}>
                <div style={{backgroundColor: '#277BC0'}} onClick={() => addColorFun('277BC0')} ></div>
                <div  style={{backgroundColor: '#FFB200'}} onClick={()=> addColorFun('FFB200')}></div>
                <div style={{backgroundColor: '#C21010'}} onClick={()=> addColorFun('C21010')}></div>
                <div  style={{backgroundColor: '#FA2FB5'}} onClick={()=> addColorFun('FA2FB5')}></div>
                <div  style={{backgroundColor: '#5BB318'}} onClick={()=> addColorFun('5BB318')}></div>
                <div style={{backgroundColor: '#61481C'}} onClick={()=> addColorFun('61481C')}></div>
            </div>
            <img src="./images/ic_sharp-color-lens.svg"  alt="" className="note-color" onClick={pickColorBtn}/>
        </>
    )
}

export default NoteColor;