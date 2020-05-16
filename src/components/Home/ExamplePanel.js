import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'

export default function ExamplePanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <p style={{fontSize: 20}} className="pt-running-text"> <a href="https://nbviewer.jupyter.org/github/liel-cohen/CytoMod/blob/master/cytomod_notebook.ipynb">The Jupiter Notebook Example</a></p>  
        </div>
    )
}
