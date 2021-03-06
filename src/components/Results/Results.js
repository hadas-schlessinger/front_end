import React, {useState, useEffect} from 'react'
import OverviewPanel from './OverviewPanel'
import ModelsClusteringPanel from './ModelsClusteringPanel'
import ModelsCorrelationPanel from './ModelsCorrelationPanel'
import OutcomAnalysis from './OutcomAnalysis'
import { Tab } from 'semantic-ui-react'
import AllResults from '../Results/AllResults'
import * as ResultsService from '../../services/ResultsService'
import beckgroungTransperant from '../../beckgroungTransperant.png'



export default function Results({state}) {
  const [oldProject, setOldProjec] = useState(false)
  const [error, setError] = useState(false)
  const [data, setdata] = useState('')
  const [gotResults, setGotResults] = useState(false)
  const [name, setName] = useState("")
  const [id, setID] = useState("")
  const [calculation, setCalculation] = useState(false)

  
  function onSubmit() {
    setError(false)
    setCalculation(true)
    results(id)

  }


  const results = (id) => {
    if(id != null ){
      ResultsService.getResults(id).then((response) =>{
        const data = response.data
        setdata(data)
        setError(false)
        setOldProjec(false)
        setGotResults(true)
        setCalculation(false)

    
      }).catch((e)=>{
        console.log(e)
        setCalculation(false)
        setError(true)
  
      })
    }
  }
    
  useEffect(() => {
    console.log({state: state})
    if(state==null && name == "")
    {   
        setOldProjec(true)

    }
    else if(state.name != null && state.id != null){
      setName(state.name)
      setID(state.id)
      results(state.id)

    }
    else if(id != ""){
      results(id)
    }
    
    return () => {
     
    }
  }, [])

  const panes = [
      { menuItem: 'Overview', render: () => <Tab.Pane>{< OverviewPanel id = {id} results = {data}/ >}</Tab.Pane> },
      { menuItem: 'Modules Identification', render: () => <Tab.Pane>{< ModelsClusteringPanel id = {id} results = {data}/>}</Tab.Pane> },
      { menuItem: 'Module Correlations', render: () => <Tab.Pane>{< ModelsCorrelationPanel id = {id} results = {data}/>}</Tab.Pane> },
      { menuItem: 'Associations to Outcomes', render: () => <Tab.Pane>{< OutcomAnalysis id = {id} results = {data}/>}</Tab.Pane> },
      { menuItem: 'All Results', render: () => <Tab.Pane>{< AllResults id = {id} results = {data}/>}</Tab.Pane> }]
  



return ( 
 
    <div>
      {oldProject && 
    <Tab style={{fontSize: 20}} 
      menu={{ fluid: true, vertical: true, tabular: true }} 
      grid={{paneWidth: 14, tabWidth: 2}} 
      panes={[
        {menuItem: 'Previous Results', render: () => <Tab.Pane>{ <div style={{backgroundImage: `url(${beckgroungTransperant})`}} >
        <form>
        <h3>Results for previous project</h3>
          <p>Please insert your previous project run ID (was given during the run execution)</p>
          <p>Please note - the results will only be shown if the analysis occured in the past week</p>
        <label>Id</label>
        <input type="text" name="id" placeholder="id" onChange={event => setID(event.target.value)}/ >            </form>
        <p></p>
        <input type="submit" value="Submit" onClick={(event) => onSubmit(event)}/>
        <p>Clicking the "Submit" button, will return previous run results. Loading the results might take several seconds.</p>
        </div>}</Tab.Pane>}]}
      />               
               
                }
        
      {(gotResults) && 
      <Tab style={{fontSize: 20}} 
      menu={{ fluid: true, vertical: true, tabular: true }} 
      grid={{paneWidth: 14, tabWidth: 2}} 
      panes={panes}
      />
    }
      {calculation && <React.Fragment>
        <div className='loader'></div>

            <div style={{ textAlign: "center" }}>Please wait while the results are loaded...</div>
            </React.Fragment>}
      {error &&  <h3 style = {{ textAlign: "center" }} className='error'>Can't find the ID, please insert another project ID</h3>}
    </div>
    
    )
}






   


