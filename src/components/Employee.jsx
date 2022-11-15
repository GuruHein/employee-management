import * as React from 'react';
import UpdateEmployee from './UpdateEmployee'


const Employee = (props) => {
    return ( 
        <div className="flex justify-center w-[370px] shadow-xl rounded-lg py-4 px-2 mb-5">
            <img src={props.employee.image} alt="" width='100px' className="rounded-full"/>
            <div className="p-2 flex flex-col gap-2 items-center">
                <h4 className="font-bold text-2xl">{props.employee.name}</h4>
                <p className="font-semibold text-lg">{props.employee.role}</p>
                <UpdateEmployee 
                employee={props.employee} 
                btnFunction={props.updateEmployee} 
                handleClose={props.handleClose}
                handleOpen={props.handleOpen}
                open={props.open}
                />
            </div>
        </div>
     );
}
 
export default Employee;