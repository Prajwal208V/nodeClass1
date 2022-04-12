import { useEffect, useState} from "react";
import axios from 'axios';

const url="http://localhost:5000/students";
const App=()=>{
    const[students, setStudent]=useState([]);

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setStudent([...students, ...response.data])
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);

    const httpPost=()=>{
        const query={
            name:"king",
            age:15,
            from:"USA",
        }
        axios.post(url,query)
        .then((response)=>{
            console.log(response);
        })
    }

    return(
        <>
          {students.map((student,index)=>{
              return (<p key={index}>name: {student.name} | age: {student.age} | from: {student.from}</p>);
          })}
          <h1>Hello!</h1>
          <button onClick={httpPost} >POST</button>
        </>
    )
}

export default App;