import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'
import { Tab } from 'semantic-ui-react'
import ResultsSchema from './ResultsSchema'

export default function ModelsCorrelationPanel(props) {
    const panes = [
        {
          menuItem: 'Absolute Cytokines',
          render: () => <Tab.Pane>{< ResultsSchema id = {props.id} 
          results = {props.results} 
          panel={'Modules Correlation'}
          state={'Absolute'}
          location={'correlation_abs'}/ >}</Tab.Pane>,
        },
        {
          menuItem: 'Adjusted Cytokines',
          render: () => <Tab.Pane>{< ResultsSchema id = {props.id}
          results = {props.results} 
          panel={'Modules Correlation'}
          state={'Adjusted'}
          location={'correlation_adj'}/ >}</Tab.Pane>,
        },
       
      ]

    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>



         <Tab panes={panes} />

        </div>
    )
}
