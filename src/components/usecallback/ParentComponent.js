import React, { useState, useCallback, useMemo } from "react";
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

    const AgeCount = useMemo(() => (
        <Count text="Age" count={age} />
    ), [age]);

    const SalaryCount = useMemo(() => (
        <Count text="Salary" count={salary} />
    ), [salary]);

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
           {AgeCount}
           <Button handleClick={incrementAge}>Increment Age</Button>
           {SalaryCount}
           <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent;