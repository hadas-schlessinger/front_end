import React, {useState, Fragment} from 'react'
import * as SetParams from  '../../services/SetParams'
import transperantBackground from '../../transperantBackground.png'
import Calculating from './Calculating';


export default function ParametersForm(props) {
  const [comperament, setComperament] = useState("")
  const [luminex, setLuminex] = useState(false)
  const [logCytokines, setLogCytokines] = useState(false)
  const [k, setK] = useState(6)
  const [outcomes, setOutcomes] = useState("")
  const [covariates, setCovariates] = useState("")
  const [logColumns, setLogColumns] = useState("")
  const [cytokines, setCytokines] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false);
  const [formID, setId] = useState(props.id)
  const [patients, setPatients] = useState(props.outcomes)


  async function onSubmit(event) {
    event.preventDefault();   
    SetParams.setParameters(props.id, props.projectName, comperament, luminex, logCytokines, k, outcomes, covariates, logColumns, cytokines).then(
        (response) => {
        const id = response.data.id.id
        setId({id})
        setError(false)
        setSuccess(true)
        }).catch((error) => {
        setError(true)
        console.log(error)
      })
      
  }
  

return (
<div style={{backgroundImage: `url(${transperantBackground})`}}> 
{!success && <div>
 <h1>Settings</h1>
 <form action="/generate" method="post">
<h2>Input Parameters for Project {props.projectName} </h2>
<h2>Method parameters</h2>
        <h3>Cytokines to Analyze</h3>
            <p>List of cytokines to be analyzed. If None, will analyze all cytokines in the cytokine data file</p>
            <label>Cytokines</label>
             <input type="text" name="cytokines" placeholder="List of cytokines" onChange={event => setCytokines(event.target.value)}/ >
        <h3>Luminex</h3>
            <p> Mark this if your file is a luminex measurements file. Note - if you are using luminex directly, please make sure all value are specific.
                if a value is not mentioned as numeric, please change it to a chosen real number  </p> 
            <input type="checkbox" name="luminex" onChange={event => setLuminex(event.target.value)}/>
            <label>luminex</label>
        <h3>Max Number of Clusters (k)</h3>
            <p>The maximal number of clusters that can be chosen. The defualt value is 6 clusters</p>
            <label>Max K</label>
            <input type="number" name="max_testing_k" placeholder="6" onChange={event => setK(event.target.value)}/>
        <h3>Log Transformation on Cytokines Data</h3>
            <p>Marking this will generate log transformation on the cytokine data</p>
            <input type="checkbox" name="log_transform" onChange={event => setLogCytokines(event.target.value)}/>
            <label>log transformation</label>     
       
        <h3>Name of the compartment</h3>
            <p>Insert the name of compartment from which cytokines were extracted, e.g., serum, nasel, etc</p>
            <label>Name Compartment</label>
            <input type="text" name="name_compartment" placeholder="Plasma, Nasal Wash" onChange={event => setComperament(event.target.value)}/>
        {patients && 
        <Fragment >
        <h2>Sample Demographics and Clinical Outcomes Parameters (optional)</h2>
        <b>Please insert the following parameters only if you uploaded sample demographics and clinical outcomes data</b>
        <h3>Outcomes</h3>
            <p>Optional. Names of outcome variables from the patients data data-frame to be analyzed.
            If list is left empty, will not perform the associations to outcomes analysis.
            To insert more then one column, please split the column names with ", " (i.e - outcome1, outcome2, ..., outcomeN)
            Note - binary and continues variables should be analyzed separately (two runs, one for binary variables and one for continues variables)</p>
            <label>Outcomes</label>
            <input type="text" name="outcomes" placeholder="outcome variables" onChange={event => setOutcomes(event.target.value)}/>
        <h3> Covariates</h3>
            <p>Optional. Names of covariate variables (columns) from the patients_data.xlsx data-frame
            to be controlled for in the regression models. If list is left empty (i.e., []),
            will not controll the associations to outcomes analysis with any covariate variables</p>
            <label>Covariates</label>
            <input type="text" name="covariates" placeholder="Age" onChange={event => setCovariates(event.target.value)}/>
        <h3>Patients data attributes to perform log function on</h3>
            <p>List with names of covariate columns to be log-transformed.
            If there are no columns you wish to transform, leave empty </p>
            <label>Columns for log</label>
            <input type="text" name="log_column_names" placeholder="Age" onChange={event => setLogColumns(event.target.value)}/>
            </Fragment>
            }
        
    </form>
    <p></p>
        <input type="submit" value="Submit" onClick={(event) => onSubmit(event)}/>
        <p>Clicking the "Submit" button, will run the CytoMod analysis</p>
        </div>
        }
        {error && <medium className='error'>Something went wrong - please go back to the upload tab and insert your data and project name</medium>}
        {success && <Calculating projectName = {props.projectName} formID={formID} / >   }  

</div>

    )
}
