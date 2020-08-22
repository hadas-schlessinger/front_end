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
<p>Please note - returning to the upload data tab will delete the tuned parameters.</p>
<h2>Method parameters</h2>
        <h3>Select Cytokines</h3>
            <p>List of cytokines to be analyzed. 
               Cytokine names should be separated by commas (i.e. cy1, cy2, ..., cyN). Also, column names shouldn’t contain commas.
               If left empty, all cytokines in the cytokine data file will be included.</p>
            <label>Cytokines</label>
             <input type="text" name="cytokines" placeholder="List of cytokines" onChange={event => setCytokines(event.target.value)}/ >
        <h3>Luminex</h3>
            <p> Check this box if your data is in Luminex™ format. You must verify that all values in your Luminex output file are numeric.  </p> 
            <input type="checkbox" name="luminex" onChange={event => setLuminex(event.target.value)}/>
            <label>luminex</label>
        <h3>Maximal number of modules (k)</h3>
            <p>Select the maximal number of modules allowed. Default is set to 6 clusters. The method will test all modules combinations up to the specified number (1 module, 2 modules...K modules)</p>
            <label>Max K</label>
            <input type="number" name="max_testing_k" placeholder="6" onChange={event => setK(event.target.value)}/>
        <h3>Log transformation on cytokine data</h3>
            <p>Check this box if you want to log-transform your data (see further explanation on this <a href="https://en.wikipedia.org/wiki/Data_transformation_(statistics)"> Wikipedia</a> page)</p>
            <p>Please note - the specific transformation is log(x+1)</p>
            <input type="checkbox" name="log_transform" onChange={event => setLogCytokines(event.target.value)}/>
            <label>log transformation</label>     
       
        <h3>Name of the compartment</h3>
            <p>Optional. Insert the name of compartment from which cytokines were extracted, e.g., serum, nasel, etc. This will be used for generating figures.</p>
            <label>Name Compartment</label>
            <input type="text" name="name_compartment" placeholder="Plasma, Nasal Wash" onChange={event => setComperament(event.target.value)}/>
        {patients && 
        <Fragment >
        <h2>Sample Demographics and Clinical Outcomes Parameters (optional)</h2>
        <b>Please set these parmeters only if you uploaded a sample demographics and clinical outcomes/phenotypes file and specified outcome columns. These parameters will be ignored if no such file was uploaded</b>
        <h3>Outcomes</h3>
            <p>Optional. If your data contains clinical output columns (e.g. hospitalization, disease severity), you can list these here. This will allow the method to also analyze associations between cytokine modules and these outcomes. The chosen outcome columns should be binary or continues (numeric) variables.
                Column names should be separated by commas (i.e. outcome1, outcome2, ..., outcomeN). Also, column names shouldn’t contain commas.
            Note - binary and continues variables should be analyzed separately (two runs, one for binary variables and one for continuous variables)</p>
            <label>Outcomes</label>
            <input type="text" name="outcomes" placeholder="outcome variables" onChange={event => setOutcomes(event.target.value)}/>
        <h3> Covariates</h3>
            <p>Optional. Names of additional columns that are covariate variables within the demographics and clinical outcomes/phenotypes file. These will be used in the regression models for outcome analysis. Leave empty if no output columns are provided. Categorial variables should be inserted as dummy variables (see further information on <a href="https://en.wikipedia.org/wiki/Dummy_variable_(statistics)"> Wikipedia</a>).</p>
            <label>Covariates</label>
            <input type="text" name="covariates" placeholder="Age" onChange={event => setCovariates(event.target.value)}/>
        <h3>Patients data attributes to perform log function on</h3>
            <p>List with names of covariate columns to be log-transformed. The chosen columns should be numeric. Column names should be separated by commas (i.e. covariate1, covariate2, ..., covariateN). Also, column names shouldn’t contain commas.
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
