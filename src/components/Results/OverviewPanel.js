import React, { useState, useEffect} from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'
import ImageView from './ImageView';
import AbsModulesView from './AbsModulesView';
import AdjModulesView from './AdjModulesView';
import NoResults from './NoResults';


export default function OverviewPanel(props) {
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

 
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>           
                 <h1>Overview for project {props.id}</h1>
                 { hasResults && 
                <React.Fragment>
                 <h2>Modules</h2>
                 {rows.map(row =>                  
                    <AbsModulesView results = {props.results} row = {row} />
                    )
                }
                {rows.map(row =>    
                    <AdjModulesView results = {props.results} row = {row} />
                    )
                }
                
                
                <h2>Figures</h2>
                <h4>To download an output you can click on it!</h4>  
                  <table>
                  <tbody>
                {rows.map(row =>                  
                    
                    <ImageView results = {props.results} row = {row} location = 'overview'/>

                    )
                }
                </tbody>
                </table>
                </React.Fragment>
                }
                {error && 
                <NoResults/>
                }
        </div>
    )
}
