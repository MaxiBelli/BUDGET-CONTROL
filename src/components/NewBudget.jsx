// eslint-disable-next-line no-unused-vars
import React from "react";


const NewBudget = () => {


   return (
      <div className='budget-container container shadow'>
         <form  action="" className='form'>
            <div className='field'>
               <label>Define Budget</label>
               <input type="number" className='new-budget' placeholder='Add your budget' />
            </div>
            <input type="submit" value='Add' />
         
         </form>
      </div>
   )
}

export default NewBudget;