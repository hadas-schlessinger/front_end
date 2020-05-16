import React from 'react'
import TableViewer from 'react-js-table-with-csv-dl';
import PreperTable from '../../services/PreperTable'

export default function AbsModulesView(props) {
    
    if(props.results.adjusted[props.row]!=null){
        const ModelStr = props.results.adjusted[props.row]
        const AdjModules = ModelStr.substring(0,ModelStr.length-2).split("]")
        return (
            
            <React.Fragment>
            <h3>Adjusted Module</h3>
            <TableViewer
            content={PreperTable(AdjModules)}
            headers={["Module", "Cytokines"]}
            // minHeight={0}
            // maxHeight={400}
            activateDownloadButton={true}
            filename='Adjusted Models.csv'
            />
                </React.Fragment>
        )
    }
    return(
        <p></p>
    )
}


                