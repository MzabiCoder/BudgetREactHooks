import React,{Fragment} from 'react'
import Item from './ExpenceItem'
import {MdDelete} from 'react-icons/md'

const ExpenceList = ({ selItem,expenses,HandleClear }) => {
    return (
        <Fragment>
            <ul className="list"> 
                {expenses.map(exp => (
                 <Item exp={exp} key={exp.id} selItem={selItem}  /> 
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
