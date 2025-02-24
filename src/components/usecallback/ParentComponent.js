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
        <div style={{display:'flex',textAlign:'center'}}>
           <Title/>
           <Count text={'Age'} count={age} />
           <Button handleClieck={incrementAge} > Increment Age </Button>
           <Count text={'Salary'} count={salary} />
           <Button handleClieck={incrementSalary} > Increment Age </Button>

        </div>
    )
}

export default ParentComponent;