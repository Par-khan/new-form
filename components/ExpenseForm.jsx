import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

export default function ExpenseForm({
  setexpenses,
  setexpense,
  expense,
  editingRowId,
  seteditingRowId,
}) {
  const validatedata = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 3, message: "Title should be at Least 3 character long" },
    ],
    category: [{ required: true, message: "Please Select category" }],
    amount: [
      { required: true, message: "Please enter amount" },
      { type: "number", message: "Amount must be a number" },
    ],
  };
  const [error, seterror] = useState({});
  const validate = (Formdata) => {
    const errordata = {};
    Object.entries(Formdata).forEach(([key, value]) => {
      validatedata[key].some((rule) => {
        if (rule.required && !value) {
          errordata[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < 3) {
          errordata[key] = rule.message;
          return true;
        }
        if (rule.type && !/^\d+(\.\d+)?$/.test(value)) {
          errordata[key] = rule.message;
          return true;
        }
      });
    });
    seterror(errordata);
    return errordata;
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const ValidationResult = validate(expense);

    if (Object.keys(ValidationResult).length) return;

    if (editingRowId) {
      setexpenses((prevsate) =>
        prevsate.map((prevexpense) => {
          if (prevexpense.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return prevexpense;
        })
      );
      setexpense({
        title: "",
        category: "",
        amount: "",
      });
      seteditingRowId("");
      return;
    }
    setexpenses((prevstate) => [
      ...prevstate,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setexpense({
      title: "",
      category: "",
      amount: "",
    });
  };
  const handelChange = (e) => {
    const { name, value } = e.target;
    setexpense((prevstate) => ({ ...prevstate, [name]: value }));
    seterror({});
  };

  return (
    <form className="expense-form" onSubmit={handleSumbit}>
      <Input
        lable="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handelChange}
        error={error.title}
      />
      <Select
        lable="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handelChange}
        defaultoption="Select Category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        error={error.category}
      />
      <Input
        lable="amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handelChange}
        error={error.amount}
      />

      <button className="add-btn">{editingRowId ? "save" : "Add"}</button>
    </form>
  );
}
