import React from 'react'
import TableViewer from 'react-js-table-with-csv-dl';
import PreperTable from '../../services/PreperTable'

export default function AbsModulesView(props) {
    if(props.results.absolute[props.row]!=null){
        const ModelStr = props.results.absolute[props.row]
        const AbsModules = ModelStr.substring(0,ModelStr.length-2).split("]")
        console.log(AbsModules)
        return (
            
            <React.Fragment>
            <h3>Absolute Module</h3>
            <TableViewer
            content={PreperTable(AbsModules)}
            headers={["Module", "Cytokines"]}
            // minHeight={0}
            // maxHeight={400}
            activateDownloadButton={true}
            filename='Absolute Models.csv'
            />

                </React.Fragment>
        )
    }
    return(
        <p></p>
    )
}


                