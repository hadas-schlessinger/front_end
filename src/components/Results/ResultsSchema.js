import React, { useState, useEffect} from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'
import ImageView from './ImageView';
import NoResults from './NoResults';



export default function ResultsSchema(props) {
    const [hasResults, sethasResults] = useState(false)
    const [NoFigures, setNoFigures] = useState(false)
    const [rows, setrows] = useState(Object.keys(props.results.image))
    const [calculation, setCalculation] = useState(true)

    const hasFigure = () =>{
        if(props.results!=''){
            let counter = 0
            for(const row of rows) {
                if(props.results.location[row]==props.location){
                    counter=counter+1
                }
            }
            console.log(counter)
            if (counter==0){
                setNoFigures(true)
            }
            setCalculation(false)
                      
        }
       
    }

    useEffect(() => {
        if(props.results!=''){
            setrows(Object.keys(props.results.image)) 
            sethasResults(true)
        }
        hasFigure()
        return () => {     
        }
    }, [])

 
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>           
                 <h1>{props.panel} Results for {props.state} Cytokines for the {props.id} Project </h1>
                <h3>{props.overview}</h3>
                {calculation && <React.Fragment>
                    <div className='loader'></div>

            <div style={{ textAlign: "center" }}>Please wait while the results are loaded...</div>
            </React.Fragment>}
                { hasResults && 
                <React.Fragment>
                <h4> Click on any figure to download </h4>  
                <h2>Figures</h2>
                  <table>
                  <tbody>
                {rows.map(row =>                  
                    
                    <ImageView results = {props.results} row = {row} location = {props.location}/>

                    )
                }
                </tbody>
                </table>
                </React.Fragment>
                }
                 { NoFigures &&  <NoResults />
                
                }
        </div>
    )
}
