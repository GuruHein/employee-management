import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const UpdateEmployee = (props) => {

    const [employee, setEmployee] = React.useState(props.employee)
    console.log("State", employee)

    const handleChange = (e) => {
        const {name, value} = e.target
        setEmployee(prevState => ({...prevState, [name]: value}))
    }

    return (
        <>
            <button className="border-2 border-zinc-600 rounded-md w-[100px]" onClick={props.handleOpen}>
                update me
            </button>
            <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box 
            className='w-[500px] bg-white rounded-lg shadow-xl absolute top-[30%] left-[40%] flex flex-col justify-center items-center gap-3 py-3'> 
                <Typography variant="h5">Update Employee</Typography>
                <TextField id="outlined-basic" label="Image" variant="outlined" className='w-[300px]' value={employee.image} name="image" onChange={handleChange}/>
                <TextField id="outlined-basic" label="Name" variant="outlined" className='w-[300px]' value={employee.name} name="name" onChange={handleChange}/>
                <TextField id="outlined-basic" label="Role" variant="outlined" className='w-[300px]' value={employee.role} name="role" onChange={handleChange}/>
                <Box display="flex" gap={4}>
                    <Button variant="outlined" onClick={props.handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={() => props.btnFunction(employee)} >Update</Button>
                </Box>
            </Box>
            </Modal>
        </>
    )
}
 
export default UpdateEmployee;