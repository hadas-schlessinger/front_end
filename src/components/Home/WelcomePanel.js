import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'
import ServerFlow3 from "./ServerFlow3.png"
import Results3 from "./Results3.png"


export default function WelcomePanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1><span style={{color: '#0FA6AB'}}>Welcome to CytoMod</span></h1>
            <p style={{fontSize: 20}} className="pt-running-text">
            Cytomod is a computational method for analysis of cytokine profiles based on identifying sets of co-signaling cytokines (<a href="https://www.frontiersin.org/articles/10.3389/fimmu.2019.01338/">Cohen et al., 2019</a>, 
            <a href="https://www.frontiersin.org/articles/10.3389/fimmu.2017.01423/full"> Fiore-Gartland et al., 2017</a>)
            </p> 
            <p style={{fontSize: 20}} className="pt-running-text">
            CytoMod uses a data driven approach for grouping cytokines into modules - sets of co-signaling cytokines. Such modules may provide insights 
            into the cytokine signaling network underlying a specific immune context, and also allow to increase the statistical power to detect associations
            between cytokine levels and clinical phenotypes.
            </p> 
            <p style={{fontSize: 20}} className="pt-running-text">
            This server allows running CytoMod on your cytokine profile dataset of choice. 
            CytoMod can be applied to any cytokine dataset, and only requires the cytokines measurements and optionally some clinical outcomes.
            The data can be provided either directly as Luminex output files, or as an excel file (see example formats in the "Example" tab on the left bar).   
            Uploaded data and result files are saved for 7 days, after which they are deleted from the server. 
            </p>
            <h3 >To run the method click on the Run tab above and follow instructions within. The results tab can allow you to retrieve your results, which will be stored on the server for 7 days. To follow an example, please click on the "Example" tab, found on the left bar </h3>
            <p>  </p>
            <h2>Main server workflow:</h2>
            <img src={ServerFlow3} alt="The server flow" class="center" />;
            <p style={{fontSize: 14}} className="pt-running-text" class='center'>The application operates as a three steps pipeline: (1) the user uploads his data using two files - a cytokines measurements file and a clinical measurements outcome file (not mandatory), (2) the user specifies the cytokines and outcomes he wishes to analyze, and can also tune the default statistical parameters according to his specific research (number of clusters K, log transformations,  covariates variables) and (3) The method is activated and the user can view and download the results. The method activation is done by pressing a single button and the results are kept with a unique ID for a week, so the user can visit the results again, without the need to re-run the analysis. The results and data cannot be accessed by other users. In addition, the method can be executed without any outcome variables, so only cytokines modules will be discovered without clinical associations.</p>
            <p style={{fontSize: 20}} className="pt-running-text">After generating the method, results tab will present several sections:</p>
            <img src={Results3} alt="Results tab" class="center"/>;
            <p style={{fontSize: 14}} className="pt-running-text" class='center'>Main results presented by the Cytomod server: (Left) The clustering tab. Clustering results are presented using the correlation matrix between cytokines, as well as the dendrogram produced in the clustering process.  Clusters (i.e. cytokine modules) are presented as different colors on the y-axis color bar. The lower figure demonstrates the amount of times that each pair of cytokines were cluster together. (Center) The module inner-correlation tab includes images presenting the correlation within each created module. The image shown presents inner correlations inside module 1 from the left image. (Right) The outcome analysis tab. Associations are shown between cytokines and cytokine modules and the clinical phenotypes. The heatmap colors indicates the direction and magnitude of the regression coefficient. Only associations with false-discovery rate (FDR)-adjusted q-value ≤ 0.2 are colored. Asterisks indicate family-wise error rate (FWER)-adjusted p-values with ***, **, and * indicating p ≤ 0.0005, 0.005, and 0.05, respectively. The user can set analysis hyper parameters (like number of clusters, or execution of log-transformation pre-processing) and see how they affect analysis results.
</p>
            <p style={{fontSize: 20}} className="pt-running-text">Results will also be available for download.</p>

            <p style={{fontSize: 20}} className="pt-running-text">The method's code holds the  <a href="https://github.com/liel-cohen/CytoMod/blob/master/LICENSE">MIT License</a></p>


           {/* <p style={{color: '#0B7478', fontSize: 22}}>This server was published on XXX - see the paper <a href="">here</a></p> */}
        </div>
    )
}






