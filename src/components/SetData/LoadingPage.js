import React from 'react'

export default function LoadingPage() {
    return (
        <div>
           <h3 style = {{textAlign: 'center'}}>Please wait while the server calculates the method</h3> 
           <h4 style = {{textAlign: 'center'}}>Note - this might take ~10 minutes </h4>
           <h4 style = {{textAlign: 'center'}}>To view the results automatically, please do not refresh this page</h4>
           <h4 style = {{textAlign: 'center'}}>We recommend to not refresh the page. Exit this page will keep the job running, however, you will not be able to track if something went wrong with the run </h4>
           <h4 style = {{textAlign: 'center'}}>In order to view the results in a later time, please save the ID number</h4> 
           <React.Fragment>
            <div className='loader'></div>
            <div style={{ textAlign: "center" }}>Calculating...</div>
            </React.Fragment>
        </div>
    )
}
