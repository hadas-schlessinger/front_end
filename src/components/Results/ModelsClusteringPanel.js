import React from 'react'
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
          location={'clustering_abs'}/ >}</Tab.Pane>,
        },
        {
          menuItem: 'Adjusted Cytokines',
          render: () => <Tab.Pane>{< ResultsSchema id = {props.id} 
          results = {props.results} 
          panel={'Clustering'}
          state={'Adjusted'}
          location={'clustering_adj'}/ >}</Tab.Pane>,
        },
       
      ]

    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
         <Tab panes={panes} />
        </div>
    )
}
