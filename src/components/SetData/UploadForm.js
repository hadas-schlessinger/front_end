import React, { useState } from "react";
import * as Upload from "../../services/Upload"
import { useHistory } from "react-router-dom";
import transperantBackground from '../../transperantBackground.png'
import { Label,Table } from 'semantic-ui-react'


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
        <p>Please upload 2 excel files: one for the cytokines raw data and the other one for the patients’ data. 
          For outcome analysis, patients’ data must be inserted as an additional file.
          Please note that all of the data you provide will not be shared with anyone and will not be deleted from the server within 1 week of upload.
        </p>
        <form>
        <h3>Project Name:</h3>
            <p>Insert the name of the data/chort</p> 
            <label> Name: </label>
          <input type="text" name="name_data" placeholder="Your project name" onChange={event => setName(event.target.value)}/>
          {Nameerror && <medium className='error'>please insert your project's name</medium>}
          <h3>Cytokines Data:</h3>
          <p>
          <p>Insert cytokines data file. The file should be in .xlsx format and all values should be numeric. i.e - if cutokines values are below or above the normal values and presented as ">", a numeric value should be inserted instead.</p> 
          <p>If the data was collected using Luminex, the Luminex output file can be inserted. However, it should be marked in the right place when setting the analysis parameters. The values should also be numeric only in this case</p> 
          <p>Each column should correspond to a different cytokine value and each row corresponds to the cytokine profile of a single subject</p>
          <p>The first column should be the subject IDs or a numerical index</p>
          <p>For example:</p>
          <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>cy1</Table.HeaderCell>
        <Table.HeaderCell>cy2</Table.HeaderCell>
        <Table.HeaderCell>cy3</Table.HeaderCell>
        <Table.HeaderCell>cy4</Table.HeaderCell>
        <Table.HeaderCell>cy5</Table.HeaderCell>
        <Table.HeaderCell>cy6</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1001</Table.Cell>
        <Table.Cell>	2.36921</Table.Cell>
        <Table.Cell>	2.52244</Table.Cell>
        <Table.Cell>	1.45636</Table.Cell>
        <Table.Cell>	-0.3279</Table.Cell>
        <Table.Cell>	1.9278</Table.Cell>
        <Table.Cell>	1.47041</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1002</Table.Cell>
        <Table.Cell>3.10856	</Table.Cell>
        <Table.Cell>2.54900	</Table.Cell>
        <Table.Cell>1.48932	</Table.Cell>
        <Table.Cell>2.03742	</Table.Cell>
        <Table.Cell>	2.37657</Table.Cell>
        <Table.Cell>	2.0934</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1003</Table.Cell>
        <Table.Cell>2.60097	</Table.Cell>
        <Table.Cell>1.60086	</Table.Cell>
        <Table.Cell>	-0.3279</Table.Cell>
        <Table.Cell>1.95453	</Table.Cell>
        <Table.Cell>	2.19863</Table.Cell>
        <Table.Cell>	1.88473</Table.Cell>
      </Table.Row>
    </Table.Body>
    </Table>
          <label> Cytokines Data: </label>
           <input type = "file" name = "cytokines" onChange={event => setCytokines(event.target.files[0])} />
          </p>
          {Cytoerror && <medium className='error'>please insert cytokine data</medium>}
          <h3>Sample Demographics and Clinical Outcomes (Optional):</h3>
            <p>
            <p>Upload a de-identified patient data file. The file should be in .xlsx format. Please make sure no personal identifiable information (e.g. patient name, id number) is uploaded within this file. </p> 
            <p>This table should contain clinical outcomes/phenotypes (e.g. hospitalization, disesase severity) and any additional demographic data that you would like the computational model to consider when assessing associations of cytokine modules and clinical outcomes/phenotypes. </p>
            <p> Important: make sure binary outcome columns only contain 0/1 values.or True/False values. Entries with unknown values should be left empty or (NA) File can have multiple clinical outcomes/phenotype columns as well as multiple demographic columns.The first column of this file should be the sample id (de-identified)   or a numerical index. Here is an example format </p>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Out1</Table.HeaderCell>
        <Table.HeaderCell>Out2</Table.HeaderCell>
        <Table.HeaderCell>Out3</Table.HeaderCell>
        <Table.HeaderCell>Out4</Table.HeaderCell>
        <Table.HeaderCell>Binary Out</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1001</Table.Cell>
        <Table.Cell>	241.5</Table.Cell>
        <Table.Cell>	135</Table.Cell>
        <Table.Cell>	72</Table.Cell>
        <Table.Cell>	34.5</Table.Cell>
        <Table.Cell>	1</Table.Cell>
        <Table.Cell>	9.1</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1002</Table.Cell>
        <Table.Cell>	</Table.Cell>
        <Table.Cell>	</Table.Cell>
        <Table.Cell>	</Table.Cell>
        <Table.Cell>	</Table.Cell>
        <Table.Cell>	0</Table.Cell>
        <Table.Cell>	36.6</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1003</Table.Cell>
        <Table.Cell>179	</Table.Cell>
        <Table.Cell>114	</Table.Cell>
        <Table.Cell>	65</Table.Cell>
        <Table.Cell>0	</Table.Cell>
        <Table.Cell>	0</Table.Cell>
        <Table.Cell>	47.2</Table.Cell>
      </Table.Row>
    </Table.Body>
    </Table>
 
            <label>Demographics and Clinical Outcomes Data:</label>
            <input type = "file" name = "patients" onChange={event => setPatients(event.target.files[0])} />
            </p>
            <input type="submit" value="Submit" onClick={(event) => onSubmit(event)} />
            {/* {success &&  <div style={{color: '#0B7478'}}>SUCCESS! your data was uploaded. please set your params</div>}  */}
            {success &&  navigateTo("set/parameters")}  
    
            
            </form>
        </div>
  );
}

