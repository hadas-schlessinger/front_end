import React, { Fragment } from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'
import { Tab } from 'semantic-ui-react'
import ResultsSchema from './ResultsSchema'


export default function ModelsClusteringPanel(props) {
    const panes = [
        {
          menuItem: 'Absolute Cytokines',
          render: () => <Tab.Pane>{< ResultsSchema id = {props.id} 
          results = {props.results} 
          panel={'Clustering'}
          state={'Absolute'}
          location={'clustering_abs'}
          overview={<Fragment>Pairwise correlation plot and clustering dendrograms of the data. First figure demonstartes the chosen number of modules according to the' <a href="https://rss.onlinelibrary.wiley.com/doi/abs/10.1111/1467-9868.00293"> Tibshirani gap statistic</a>, the second figure points on the correlations between each pair of cytokines. The last figure presents the final modules based on the number of times that each pair of cytokines were clusters together among 1000 runs</Fragment>}/ >}</Tab.Pane>,
        },
        {
          menuItem: 'Adjusted Cytokines',
          render: () => <Tab.Pane>{< ResultsSchema id = {props.id} 
          results = {props.results} 
          panel={'Clustering'}
          state={'Adjusted'}
          location={'clustering_adj'}
          overview={<Fragment>Pairwise correlation plot and clustering dendrograms of the data. First figure demonstartes the chosen number of modules according to the' <a href="https://rss.onlinelibrary.wiley.com/doi/abs/10.1111/1467-9868.00293"> Tibshirani gap statistic</a>, the second figure points on the correlations between each pair of cytokines. The last figure presents the final modules based on the number of times that each pair of cytokines were clusters together among 1000 runs</Fragment>}/ >}</Tab.Pane>,
        },
       
      ]

    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
         <Tab panes={panes} />
        </div>
    )
}
