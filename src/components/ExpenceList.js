import React,{Fragment} from 'react'
import Item from './ExpenceItem'
import {MdDelete} from 'react-icons/md'

const ExpenceList = ({editItem, delItem,expenses,HandleClear }) => {
    return (
        <Fragment>
            <ul className="list"> 
                {expenses.map(exp => (
                 <Item exp={exp} key={exp.id} delItem={delItem} editItem={editItem}  /> 
            ))}
            </ul>
            {expenses.length > 0 && <button onClick={HandleClear} className="btn">
            Clear expenses
            <MdDelete className="btn-icons"/>
            </button>}
        </Fragment>
    )
}

export default ExpenceList
