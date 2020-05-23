import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'

export default function ExamplePanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1>Examples</h1>
            <h2>Jupiter notebook</h2>
            <p style={{fontSize: 20}}> This is a jupiter notebook demonstrating the method execution:</p>
            <p style={{fontSize: 20}}> <a href="https://nbviewer.jupyter.org/github/liel-cohen/CytoMod/blob/master/cytomod_notebook.ipynb">The Jupiter Notebook Example</a></p>  
        
        </div>
    )
}
