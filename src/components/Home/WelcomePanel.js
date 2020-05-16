import React from 'react'
import * as classNames from "classnames";
import beckgroungTransperant from '../../beckgroungTransperant.png'


export default function WelcomePanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1><span style={{color: '#0FA6AB'}}>Welcome to Cytomod</span></h1>
            <p style={{fontSize: 20}} className="pt-running-text">
            This server will allow you to generate the cytomod method output. 
            Cytomod is a Modular Cytokine Analysis Method to identify sets of co-signaling cytokines
            </p> 
            <p style={{color: '#0B7478', fontSize: 22}}>This server is based on an approach article found <a href="https://www.frontiersin.org/articles/10.3389/fimmu.2019.01338/">here</a></p>
            <p style={{fontSize: 20}} className="pt-running-text">
            In general, the approach, first of her kind, increases the statistical power of cytokines analysis and was demonstrated as efficient in discovering cytokine modules that are significantly associated with clinical phenotypes (sometimes even stronger than the individual cytokines).
            In addition, it identified cores of co-signaling cytokines and therefore portrayed complex signaling structures. 
            Moreover, the method can be applied on any dataset since it requires only the cytokines measurements and optionally the outcomes. 
            Furthermore, the approach can also be seen as a dimensionality reduction method. However, it is different than other such methods (PCA, LDA and more, usually lower the dimension by creating new features) since it retains the ability to discover fundamental biological insights.
            </p> 
            <p style={{color: '#0B7478', fontSize: 22}}>This server was published on XXX - see the paper <a href="">here</a></p>
        </div>
    )
}






