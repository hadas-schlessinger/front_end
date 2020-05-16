import React, { useState, useEffect} from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'
import AbsModulesView from './AbsModulesView';
import AdjModulesView from './AdjModulesView';
import ResultsSchema from './ResultsSchema'
import JSZip from "jszip";
import { saveAs } from 'file-saver';
import NoResults from './NoResults';
import decoder from '../../services/ImageDecoder'


export default function AllResults(props) {
    const [hasResults, sethasResults] = useState(false)
    const [rows, setrows] = useState([])
    const [error, setErrror] = useState(false)

    useEffect(() => {
        if(props.results!=''){
            sethasResults(true)
            setrows(Object.keys(props.results.image))
                      
        }
        else{
            setErrror(true)
        }
        return () => {     
        }
    }, [])

    // async function onSubmit(event) {
    //     event.preventDefault();
    //     let zip = new JSZip();
    //     let folder = zip.folder('results');

    //     /* Add the image to the folder */
    //     rows.map((row) =>{
    //         if(props.results.type[row]=='image'){
    //             folder.file(`${decoder(props.results.image[row])}.png`)
    //         }                
    //     }  
           
    //      ) 
        

    //     /* Generate a zip file asynchronously and trigger the download */
    //     folder.generateAsync({ type: "blob" }).then(content => saveAs(content, "files"));
   
          
    //   }

    
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}> 
                <h1>All results for Project {props.id}</h1>  
                {error && <NoResults/>}
                {hasResults &&
                <React.Fragment>
                 {/* <input type="submit" value="Download Results Zip File" onClick={(event) => onSubmit(event)}/>       */}
                 <h1>The Modules for the Project</h1>
                 {rows.map(row =>                  
                    <AbsModulesView results = {props.results} row = {row} />
                    )
                }
                {rows.map(row =>    
                    <AdjModulesView results = {props.results} row = {row} />
                    )
                }                 
                < ResultsSchema id = {''} 
          results = {props.results} 
          panel={'Overview'}
          state={'All'}
          location={'overview'}/ >
                < ResultsSchema id = {''} 
          results = {props.results} 
          panel={'Clustering'}
          state={'Absolute'}
          location={'clustering_abs'}/ >
              < ResultsSchema id = {''} 
          results = {props.results} 
          panel={'Clustering'}
          state={'Adjusted'}
          location={'clustering_adj'}/ >
              < ResultsSchema id = {''} 
          results = {props.results} 
          panel={'Modules Correlation'}
          state={'Absolute'}
          location={'correlation_abs'}/ >
              < ResultsSchema id = {''}
          results = {props.results} 
          panel={'Modules Correlation'}
          state={'Adjusted'}
          location={'correlation_adj'}/ >
              < ResultsSchema id = {''}
          results = {props.results} 
          panel={'Outcome Analysis'}
          state={'Absolute'}
          location={'outcome_abs'}/ >
              < ResultsSchema id = {''}
          results = {props.results} 
          panel={'Outcome Analysis'}
          state={'Adjusted'}
          location={'outcome_adj'}/ >
        </React.Fragment>

                }
               
        </div>
    )
}
