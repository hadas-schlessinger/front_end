import React from 'react'
import * as classNames from "classnames";
import methodFlow from './methodFlow.jpg';
import transperantBackground from '../../transperantBackground.png'


export default function MethodExplanationPanel() {
    return (
        <div style={{backgroundImage: `url(${transperantBackground})`}}>
            <h1><span style={{color: '#0FA6AB'}}>The Method</span></h1>
            <table>
            <tr>
            <td style={{verticalAlign: 'top'}}>
             <h2 >General Overview</h2> 
             <p style={{fontSize: 20}}> CytoMod—a modular data driven approach to identify 
                cytokine modules and assess their associations with clinical phenotypes. 
                 Traditionally, associations between cytokine data (1) and clinical phenotypes (5) 
                 are tested directly using univariate models. 
                 CytoMod independently uses absolute cytokine profiles (1) or adjusted cytokine profiles (2) 
                 to generate cytokine modules (3)-sets of co-signaling cytokines within a given cohort. 
                 Modules are generated using unsupervised hierarchical clustering. 
                 Associations are then tested between module levels (4) and clinical phenotypes (5). 
                 By significantly reducing the number of associations tested CytoMod increases the statistical 
                 power to detect associations. 
                 By comparing modules across datasets, CytoMod can also identify “cores” of cytokines that consistently 
                 co-signal together. <a href="https://www.frontiersin.org/articles/10.3389/fimmu.2019.01338/">(Cohen et al., 2019)</a>   
                 </p></td>
                 <td><img src={methodFlow} alt="The flow as presented in the article" />;</td>
            </tr>
            </table>
            
            <h2><span >Further Explanation</span></h2>
            <p style={{fontSize: 20}} className="pt-running-text">
            Since analyzing large amount of cytokines requires multiple hypothesizes, which under takes the statistical power of the analysis, Cohen et al developed a computational approach, names CytoMod, for analyzing and identifying cytokines modules with statistical efficiency (Cohen et al., 2019).  
            The method is composed from two parallel pipelines, containing several identical stages but on different data appearance - absolute values and adjusted values of cytokines concentrations. The motivation for also using the adjusted values was to discover hidden relationships by disabling the noise of the whole immune system reaction (which is typically high while dealing with attackers). 
            The approach has been applied on three data sets (divided into six overall groups, differ in the sampling compartments - blood/airway/nasal) concerning influenza patients. Here by a summary of the approach.
            </p> 
            <h3 style={{color: '#0B7478', fontSize: 20}}>Step 1: Adjust the cytokines concentrations in order to isolate their relative concentration</h3>
            <p style={{fontSize: 20}} className="pt-running-text">
            The adjustment calculations are: first step is to create a vector of cytokines mean concertation for each subject (sample). 
            Then, calculate a regression model for each 𝑐𝑦𝑡𝑜𝑘𝑖𝑛𝑒𝑗, using the mean vecto.  
            Finally, By subtracting the predicted value (regression outcome) from the true value (sample value) the 𝑐𝑦𝑡𝑜𝑘𝑖𝑛𝑒𝑗_𝐴𝑑𝑗𝑢𝑠𝑡𝑒𝑑 (adjusted outcome) is created.
            </p> 
            <h3 style={{color: '#0B7478', fontSize: 20}}>Step 2: Preform Complete-linkage agglomerative hierarchical clustering </h3>
            <p style={{fontSize: 20}} className="pt-running-text">
            The clustering was performed in order to create cytokines modules and was based on the cytokines pairwise correlations (the distance metric). 
            Resembling to HCA, the algorithm ﻿iteratively group cytokines that possess similar patterns. 
            The results are presented in a dendrogram, which obtain the hierarchical sub-groups and the data distribution. 
            The similarity matrix was calculated separately for each compartment in each dataset. In addition, in order to identify cross-subjects cytokine modules, it was performed over cytokines. 
            Due to sensitivity issues, the algorithm contained bootstrapping mechanism (1000 repetitions of the clustering procedure with different subsets of the same data), which counted the number of times that each pair of cytokines were clustered in the same group. Hence, the final clustering was performed on this matrix. The hyper parameter K was chosen using the “gap statistic” heuristic method. 
            The clustering created K cytokines modules. Finally, a subject-specific score for each module was calculated as the mean value of all cytokines in the same module (after standardization). 
            </p> 
            <h3 style={{color: '#0B7478', fontSize: 20}}> Step 3: Assess associations between modules to the clinical phenotypes </h3>
            <p style={{fontSize: 20}} className="pt-running-text">
            After standardization of the data, a regression model for each outcome column was calculated - i.e. the first step was to perform a logistic regression (for binary outcomes) or linear regression (for continues outcomes). 
            The regression was enrolled over all the previous step modules. For each dataset, compartment and cytokines expressions (adjusted/absolute), the coefficients (𝛽_𝑖), describing the associations between individual cytokines/cytokine modules to the symptom, were separate from each other. 
            In addition, the coefficients were pronounced using two adjusted p-values: 
            1. false-discovery rate (FDR, Benjamini Hochberg procedure, significant when q ≤ 0.2) 
            2. Family-wise error rate (FWER, Bonferroni-Holm method, more stringent, significant when p ≤ 0.05). 
            Both are fitted to handle multiple hypothesis tests. 
            Hence, the coefficients were the value symbolizing the relationships between cytokines (modules/absolute) and the outcomes and these values’ p-values were adjusted by two different corrections.
            </p> 
            
        </div>
    )
}
