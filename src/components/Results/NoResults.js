import React from 'react'
import no_result_found from '../../no_result_found.png'

export default function NoResults() { 

        return (
            <div>
            <h3>There were no results for this section, please try again to run the method</h3>
            <img src={no_result_found}></img>
            </div>
        )
    }
 

