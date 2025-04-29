import React from 'react'

export default function ContextMenu({menuPosition,setmenuPosition,rowID,setexpenses,setexpense,expenses,seteditingRowId}) {
  if(!menuPosition.left) return
  return (
    <div className="context-menu" style={{...menuPosition}}>
            <div
            onClick={()=>{
              
             const{title,category,amount}=expenses.find((expense)=>expense.id === rowID)
             setexpense({title,category,amount});
             seteditingRowId(rowID)
               setmenuPosition({})
            }}
            >Edit</div>
            <div
             onClick={()=>{
              setexpenses((prevstate)=>
              prevstate.filter((expence)=>expence.id !== rowID))
               setmenuPosition({})

            }}
            >Delete</div>
        </div>
  )
}
