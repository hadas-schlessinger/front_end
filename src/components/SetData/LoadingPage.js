import React from 'react'

export default function LoadingPage() {
    return (
        <div>
           <h3 style = {{textAlign: 'center'}}>please wait while the server calculates the method</h3> 
           <h4 style = {{textAlign: 'center'}}>Note - this might take ~10 minutes, please do not refresh this page</h4> 
           <React.Fragment>
            <div className='loader'></div>
            <div style={{ textAlign: "center" }}>Calculating...</div>
            </React.Fragment>
        </div>
    )
}
