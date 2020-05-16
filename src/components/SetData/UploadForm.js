import React, { useState } from "react";
import * as Upload from "../../services/Upload"
import { useHistory } from "react-router-dom";
import transperantBackground from '../../transperantBackground.png'


export default function UploadForm({onSetName}) {
  const [name, setName] = useState("");
  const [cytokinesFile, setCytokines] = useState(null)
  const [patientsFile, setPatients] = useState(null)
  const [success, setSuccess] = useState(false)
  const [Cytoerror, setCytoError] = useState(false);
  const [Nameerror, setNameError] = useState(false);
  const [id, setID] = useState('');
  const history = useHistory();


  async function onSubmit(event) {
    setNameError(false);
    setCytoError(false);
    event.preventDefault();
    const result = Upload.upload(name, cytokinesFile, patientsFile)
      .then((response) => {
        setNameError(false);
        setCytoError(false);
        onSetName(name, response.data.id)
        setSuccess(true);
      })
      .catch((e) => {
        if(e.message == 'Request failed with status code 403')
          setNameError(true)
        else
          setCytoError(true);
      });
  }

  function navigateTo(route) {
    history.push(`/${route}`);
  }

  return (
    <div style={{backgroundImage: `url(${transperantBackground})`}}>
        <h1>Upload your data</h1>
        <p>Please upload 2 excel files:
            one for the cytokins raw data and the other one for the patients data
        </p>
        <form>
        <h3>Project Name:</h3>
            <p>Insert the name of the data/chort</p> 
            <label> Name: </label>
          <input type="text" name="name_data" placeholder="Your project name" onChange={event => setName(event.target.value)}/>
          {Nameerror && <medium className='error'>please insert your project's name</medium>}
          <h3>Cytokines Data:</h3>
          <p>
          <label> Cytokines Data: </label>
            <input type = "file" name = "cytokines" onChange={event => setCytokines(event.target.files[0])} />
          </p>
          {Cytoerror && <medium className='error'>please insert cytokine data</medium>}
          <h3>Patients Data:</h3>
            <p>
            <label>Patients Data:</label>
              <input type = "file" name = "patients" onChange={event => setPatients(event.target.files[0])} />
            </p>
            <input type="submit" value="Submit" onClick={(event) => onSubmit(event)} />
            {/* {success &&  <div style={{color: '#0B7478'}}>SUCCESS! your data was uploaded. please set your params</div>}  */}
            {success &&  navigateTo("set/parameters")}  
    
            
            </form>
        </div>
  );
}

