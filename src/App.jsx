import { useState } from 'react'

import './App.css'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseTable from '../components/ExpenseTable'
import expenseData from '../expenseData'
import { useLocalStorage } from '../hooks/useLocalStorage'

function App() {
   const [expense, setexpense] = useLocalStorage('expense',{
      title: "",
      category: "",
      amount: "",
    });
  const [expenses, setexpenses] = useLocalStorage('expenses',expenseData)
  const [editingRowId,seteditingRowId]=useLocalStorage('editingRowId','')
  
 

  return (
    <>
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
       <ExpenseForm setexpenses={setexpenses} expense={expense} setexpense={setexpense} editingRowId={editingRowId}  seteditingRowId={seteditingRowId} />
       <ExpenseTable expenses={expenses} setexpenses={setexpenses} setexpense={setexpense} seteditingRowId={seteditingRowId}/>
       
      </div>
    </main>
    </>
  )
}

export default App
