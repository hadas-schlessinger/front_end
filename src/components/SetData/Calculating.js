import React,  {useState, useEffect} from 'react'
import LoadingPage from './LoadingPage';
import { useHistory } from "react-router-dom";
import * as SetParams from  '../../services/SetParams'



export default function Calculating(props) {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false);
  const [error_msg, setErrorMsg] = useState(false);
  const history = useHistory();

    const request = () => {
      if(props.projectName==null || props.formID==null)
      {
        navigateTo("set")
      }
      SetParams.methodStatus(props.projectName, props.formID.id).then((response) =>{
        console.log({status: response.data.status});
        if (response.data.status == "DATA ERROR"){
          setErrorMsg(response.data.message)
          setError(true)
       }
       if (response.data.status == "RUN TIME ERROR"){
        setErrorMsg(response.data.message)
        setError(true)
     }
        if (response.data.status == "DONE"){
          setSuccess(true)
          navigateTo("results")
       }
      
      }).catch((e)=>{
        console.log(e)
      })
  }
      

useEffect(() => {
  const interval = setInterval(() => {
    request()
    }, 1000*60)  
  return () => {
    clearInterval(interval)
  }
}, [])     
       

     function navigateTo(serviceName) {
       const state = {'name': props.projectName, 'id': props.formID.id}
       history.push(`/${serviceName}`, state);
  }
    
      return (
        <div style={{height: '100%', width:'100%'}}>
            {!error &&
            <React.Fragment>
               <h2 style={{color: '#194d33', fontSize: 20, textAlign: 'center'}}>Your project ID is: </h2>
               <h2 style={{textTransform: 'lowercase', color: '#194d33', fontSize: 20, textAlign: 'center'}}>{props.formID.id} </h2>
               <h2 style={{color: '#194d33', fontSize: 20, textAlign: 'center'}}>Your project name is {props.projectName} </h2>
               <LoadingPage/>
            </React.Fragment>
            }
            {success &&  navigateTo("results")}
          {error && <React.Fragment><h3 className='error' style={{fontSize: 20, textAlign: 'center'}}>Someting is wrong! </h3>
          <h3 className='error' style={{fontSize: 20, textAlign: 'center'}}> Error message: {error_msg}</h3> 
          <p></p></React.Fragment>
}  
        </div>
    )
}
