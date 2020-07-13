import React from 'react'
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
             <p style={{fontSize: 20}}> 
                CytoMod — a modular data driven approach to identify cytokine modules and assess their associations with clinical phenotypes. 
                Traditionally, associations between cytokine data and clinical phenotypes are tested directly using univariate models. 
                CytoMod independently uses absolute cytokine profiles (1) or adjusted cytokine profiles (2) to generate cytokine modules (3)-sets of co-signaling cytokines within a given cohort. 
                Modules are generated using unsupervised hierarchical clustering. Associations (6) are then tested between module levels (5) and clinical phenotypes. 
                By significantly reducing the number of associations tested, CytoMod increases the statistical power to detect associations. 
                By comparing modules across datasets, CytoMod can also identify “cores” of cytokines that consistently co-signal together <a href="https://www.frontiersin.org/articles/10.3389/fimmu.2019.01338/">(Cohen et al., 2019)</a>   
                 </p>
                 <p style={{textAlign:'center'}}><img src={methodFlow} alt="The flow as presented in the article"/></p>;  
                 </td>
                 
               </tr>
            </table>
                     
            
            <h2><span >Further Explanation</span></h2>
            <p style={{fontSize: 20}} className="pt-running-text">
            Since analyzing large number of cytokines requires multiple hypothesizes, which reduces statistical power to detect associations, Cohen et al developed CytoMod a computational approach, for analyzing and identifying cytokines modules with statistical efficiency (Cohen et al., 2019). 
            The method allows analyzing both raw and normalized cytokine profiles. 
            Each of these may uncover different associations with clinical outcomes. 
            The approach has been applied to three data sets of natural influenza infection, which included samples from different compartments - blood/airway/nasal). 
            Here is a summary of the CytoMod approach:

            </p> 
            <h3 style={{color: '#0B7478', fontSize: 20}}>Step 1: Adjust the cytokines concentrations in order to isolate their relative concentration</h3>
            <p style={{fontSize: 20}} className="pt-running-text">
            Cytokines are adjusted by regressing each cytokine level against the average cytokine level of the subject across all cytokines.  
            </p> 
            <h3 style={{color: '#0B7478', fontSize: 20}}>Step 2: Preform Complete-linkage agglomerative hierarchical clustering </h3>
            <p style={{fontSize: 20}} className="pt-running-text">
            Clustering is performed in order to create cytokines modules and is based on the pairwise correlations between. 
            The clustering algorithm iteratively groups cytokines that possess similar patterns. 
            The results are presented in a dendrogram, which obtain the hierarchical sub-groups and the data distribution. 
            The similarity matrix was calculated separately for each compartment in each dataset. 
            In addition, in order to identify cross-subjects cytokine modules, it is performed over cytokines. 
            Due to sensitivity issues, the algorithm contains a bootstrapping mechanism (1000 repetitions of the clustering procedure with different subsets of the same data), in which the number of times that each pair of cytokines were clustered in the same group. The final clustering is performed on this matrix. 
            The hyper parameter K is chosen using the “gap-statistic” heuristic method. This process creates a cluster of K cytokines modules. 
            Finally, a subject-specific score for each module is calculated as the mean value of all cytokines in the same module (after standardization).
            </p> 
            <h3 style={{color: '#0B7478', fontSize: 20}}> Step 3: Assess associations between modules to the clinical phenotypes </h3>
            <p style={{fontSize: 20}} className="pt-running-text">
            After standardization of the data, a regression model for each outcome column is calculated - i.e. these step performs a logistic regression (for binary outcomes) or linear regression (for continues outcomes). 
            A separate run was performed for each dataset, compartment and cytokines expressions (adjusted/absolute). 
            Thus, the coefficients (\beta_i\ ), describing the associations between individual cytokines/cytokine modules to the symptom, were composed for each run. 
            In addition, the correlations were evaluated using two common multiplicity adjustment methods: (1) False-discovery rate (FDR, Benjamini Hochberg procedure (significant when q ≤ 0.2) and (2) Family-wise error rate (FWER) using the Bonferroni-Holm method - a with p ≤ 0.05). 
            Hence, the coefficients were the value symbolizing the relationships between cytokines (modules/absolute) and the outcomes and these values’ p-values were adjusted by two different corrections.
            </p> 
            
        </div>
    )
}
