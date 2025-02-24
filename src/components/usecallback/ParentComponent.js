import Button from "./Button";
import Title from "./Title";
import Count from "./Count";
import { useState } from "react";

const ParentComponent = () =>{
    const [age,setAge] = useState(25);
    const [salary,setSalary] = useState(50000);

    const incrementAge = () =>{
        setAge( age+1)
    }

   const incrementSalary = () => {
        setSalary(salary +1000);
    }

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
           <Count text={'Age'} count={age} />
           <Button handleClieck={incrementAge} > Increment Age </Button>
           <Count text={'Salary'} count={salary} />
           <Button handleClieck={incrementSalary} > Increment Age </Button>
        </div>
    )
}

export default ParentComponent;