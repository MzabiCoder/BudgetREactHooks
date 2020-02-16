import React from 'react'
import {MdSend} from 'react-icons/md'

const ExpenseForm = ({edit,charge,amount,handleSubmit,handleCharge,handleamount}) => {

   
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input type="text" onChange={handleCharge} value={charge} name="charge" id="charge" className="form-control"  placeholder="exp rent"/>
                </div>

                <div className="form-group">
                <label htmlFor="charge">Amount</label>
                    <input type="number" onChange={handleamount} value={amount} name="amount"  id="amount" className="form-control"  placeholder="exp amount"/>
            </div>
            </div>
            <button type="submit" className="btn">
                {edit ? "Submit":"Edit"}
            <MdSend className="btn-icon"/>
            </button>
        </form>
    )
}

export default ExpenseForm