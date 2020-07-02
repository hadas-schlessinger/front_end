import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'
import { Tab } from 'semantic-ui-react'
import ResultsSchema from './ResultsSchema'

export default function OutcomAnalysis(props) {
    const panes = [
        {
          menuItem: 'Absolute Cytokines',
          render: () => <Tab.Pane>{< ResultsSchema id = {props.id}
          results = {props.results} 
          panel={'Outcome Analysis'}
          state={'Absolute'}
          location={'outcome_abs'}
          overview={'Associations of cytokine modules, and individual cytokines with clinical phenotypes'}/ >}</Tab.Pane>,
        },
        {
          menuItem: 'Adjusted Cytokines',
          render: () => <Tab.Pane>{< ResultsSchema id = {props.id}
          results = {props.results} 
          panel={'Outcome Analysis'}
          state={'Adjusted'}
          location={'outcome_adj'}
          overview={'Associations of cytokine modules, and individual cytokines with clinical phenotypes'}/ >}</Tab.Pane>,
        },
       
      ]

    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>



         <Tab panes={panes} />

        </div>
    )
}
