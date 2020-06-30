import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'
import ServerFlow from "./ServerFlow.png"
import Results from "./Results.png"


export default function WelcomePanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1><span style={{color: '#0FA6AB'}}>Welcome to CytoMod</span></h1>
            <p style={{fontSize: 20}} className="pt-running-text">
            This server will allow you to generate the CytoMod method output. 
            CytoMod is a Modular Cytokine Analysis Method to identify sets of co-signaling cytokines <a href="https://www.frontiersin.org/articles/10.3389/fimmu.2019.01338/">(Cohen et al., 2019)</a>
            </p> 
            <p style={{fontSize: 20}} className="pt-running-text">
            CytoMod uses a data driven approach for grouping cytokines into modules, which increases the statistical power of detecting associations between cytokine levels and clinical phenotypes. 
            In addition, it was used to identify cores of co-signaling cytokines following influenza infection across three different cohorts. 
            CytoMod can be applied to any cytokine dataset, and only requires the cytokines measurements and optionally some clinical outcomes. 
            </p> 
            <p style={{fontSize: 20}} className="pt-running-text">The method's code holds the  <a href="https://github.com/liel-cohen/CytoMod/blob/master/LICENSE">MIT License</a></p>
            <h2>The Server Main Flow:</h2>
            <img src={ServerFlow} alt="The server flow" width={700} height={700} />;
            <p style={{fontSize: 20}} className="pt-running-text">After generating the method, results tab will present several tabs:</p>
            <img src={Results} alt="Results tab" width={1200} height={700} />;
            <p style={{fontSize: 20}} className="pt-running-text">Results will also be available for download!</p>


           {/* <p style={{color: '#0B7478', fontSize: 22}}>This server was published on XXX - see the paper <a href="">here</a></p> */}
        </div>
    )
}






