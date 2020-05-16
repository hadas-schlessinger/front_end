import React from 'react'
import decoder from '../../services/ImageDecoder'

export default function ImageView(props) { 

  
    if(props.results.location[props.row]==props.location){
        if(props.results.type[props.row]=='image')
        return (
            <React.Fragment>
                <tr>
                <td>
                <h3>Image: {props.results.headline[props.row]}</h3>
                <p>Explanation: {props.results.explanation[props.row]}</p>
                <a download = {String(props.results.headline[props.row]) + '.png'} href= {decoder(props.results.image[props.row])} title={props.results.headline[props.row]} >                    
                <img src = {decoder(props.results.image[props.row])} width = {props.results.width[props.row]} height = {props.results.height[props.row]}/></a>
                </td>
                </tr>
    
                
                </React.Fragment>

        )
    }
    return(
        <p></p>
    )
        
   }

