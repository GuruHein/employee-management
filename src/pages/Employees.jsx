import * as React from 'react';
import Employee from '../components/Employee'
import AddEmployee from '../components/AddEmployee'
import employeesData from '../data/employee'

function Employees() {
  const [employees, setEmployees] = React.useState(employeesData)
  const [newEmployee, setNewEmployee] = React.useState({
    image: "",
    name: "",
    role: ""
  })
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenAdd = () => {setOpenAdd(true); setOpenUpdate(false)};
  const handleCloseAdd = () => setOpenAdd(false);
  const handleOpenUpdate = () => {setOpenUpdate(true); setOpenAdd(false)};
  const handleCloseUpdate = () => setOpenUpdate(false);

  const updateEmployee = (newEmployee) => {
    handleCloseUpdate()
    setEmployees(prevState => prevState.map(employee => {
      if (employee.id === newEmployee.id) {
        return newEmployee
      }
      return employee
    }))
    console.log("Updated")
  }

  const addEmployee = (newEmployee) => {
    handleCloseAdd()
    const employee = {
      ...newEmployee,
      id: employees.length + 1
    }
    setEmployees(prevState => [...prevState, employee])
    console.log(employees)
    console.log("Added")
  }

  const handleChange = (e) => {
      const {name, value} = e.target
      setNewEmployee(prevState => ({...prevState, [name]: value}))
  }

  return (
    <div
      className="flex flex-col justify-center items-center"
    > 
      <div className="App flex p-5 justify-between flex-wrap items-center gap-2 ">
        {
          employees.map((employee, index) => {
            return <Employee 
                    employee={employee} 
                    key={index}
                    updateEmployee={updateEmployee}
                    handleClose={handleCloseUpdate}
                    handleOpen={handleOpenUpdate}
                    open={openUpdate}
                    />
          })
        }
      </div>
      <AddEmployee 
          employee={newEmployee} 
          btnFunction={addEmployee} 
          handleChange={handleChange}
          handleClose={handleCloseAdd}
          handleOpen={handleOpenAdd}
          open={openAdd}
      />
    </div>
  );
}

export default Employees;
