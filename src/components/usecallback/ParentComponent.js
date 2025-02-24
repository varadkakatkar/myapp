import React, { useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./Count";

const ParentComponent = () =>{
    const [age,setAge] = useState(25);
    const [salary,setSalary] = useState(50000);

    const incrementAge = useCallback(() =>{
        setAge(prevAge => prevAge + 1);
    }, []);

   const incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1000);
    }, []);

    const AgeButton = React.memo(({ onClick }) => (
        <Button handleClick={onClick}>Increment Age</Button>
    ));

    const SalaryButton = React.memo(({ onClick }) => (
        <Button handleClick={onClick}>Increment Salary</Button>
    ));

    const AgeCount = React.memo(({ count }) => (
        <Count text="Age" count={count} />
    ));

    const SalaryCount = React.memo(({ count }) => (
        <Count text="Salary" count={count} />
    ));

    return (
        <div style={{ display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '30px',
            padding: '40px',
            backgroundColor: '#f5f5f5',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            margin: '40px auto'}}>
           <Title/>
           <AgeCount count={age} />
           <AgeButton onClick={incrementAge} />
           <SalaryCount count={salary} />
           <SalaryButton onClick={incrementSalary} />
        </div>
    )
}

export default ParentComponent;