import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'

export default function ExamplePanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1>Examples</h1>
            <h2>Jupiter notebook executing the method:</h2>
            <p style={{fontSize: 20}}> <a href="https://nbviewer.jupyter.org/github/liel-cohen/CytoMod/blob/master/cytomod_notebook.ipynb">The Jupiter Notebook Example</a></p>  
        
        </div>
    )
}
