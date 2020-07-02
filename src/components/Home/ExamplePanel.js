import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'
import { Table } from 'semantic-ui-react'

export default function ExamplePanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
            <h1>Examples</h1>
            <h2>Method run example</h2>
            <p style={{fontSize: 20}}>The following example presents how to run the method:</p>
            <Table celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell> <h3>The data files</h3></Table.Cell>
        <Table.Cell>	            <p style={{fontSize: 20}}>Two files were inserted, one for cytokine measurments and another for outcome measurments. The files can be seen in the method <a href="https://github.com/hadas-schlessinger/CytoMod/tree/master/app/static/b3462340-bc90-11ea-871f-0242ac120002/data_files">git repository</a></p>
</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> <h3> The parameters</h3></Table.Cell>
        <Table.Cell>            <p style={{fontSize: 20}}>Project Name was set as "Example", Compartment was set as "Plasma", Luminex and Log transformation were not marked, Max K was set to 6 clusters, Age was defined as a Covariate and was not log transformed, outcomes 1-3 were chosen for the analysis, all cytokines were analyzed</p>
	</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><h3> The results</h3>
</Table.Cell>
        <Table.Cell>         <p style={{fontSize: 20}}>The results can be seen in the Results tab using the ID: b3462340-bc90-11ea-871f-0242ac120002 </p>
	</Table.Cell>
      </Table.Row>
    </Table.Body>
    </Table>
        

            <h2>Jupiter notebook</h2>
            <p style={{fontSize: 20}}> <a href="https://nbviewer.jupyter.org/github/liel-cohen/CytoMod/blob/master/cytomod_notebook.ipynb">Click here</a> to view a jupiter notebook which demonstrates the method execution</p>
            
        </div>
    )
}
