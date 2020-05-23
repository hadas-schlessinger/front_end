import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'

export default function ContactPanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
        <h1>Contact details</h1>
        <h2>Lab information</h2>
        <h3>Address</h3>
        <p style={{fontSize: 20, marginLeft: 2}}>Faculty of Health Sciences</p>
        <p style={{fontSize: 20, marginLeft: 2}}>Dept. of Microbiology, Immunology and Genetics</p>
        <p style={{fontSize: 20, marginLeft: 2}}>National Institute for Biotechnology in the Negev</p>
        <p style={{fontSize: 20, marginLeft: 2}}>Bldg. 41, Room 105</p>
        <p style={{fontSize: 20, marginLeft: 2}}>Ben-Gurion University of the Negev,</p>
        <p style={{fontSize: 20, marginLeft: 2}}>P.O.B. 653, Be'er-Sheva 84105, Israel</p>
        <p> </p>
        <p> </p>
        <p> </p>
        <h3>Contact</h3>
        <p style={{fontSize: 20, marginLeft: 2}}>Email:  hertzlabbgu@gmail.com</p>
        <p style={{fontSize: 20, marginLeft: 2}}> Office: +972-8-642-8856</p>
        <p style={{fontSize: 20, marginLeft: 2}}> Cell:   +972-58-44-90-888</p>
        <p style={{fontSize: 20, marginLeft: 2}}> US:     +1-206-388-6320</p>
        <p style={{fontSize: 20, marginLeft: 2}}>Fax:    +972-8-6477626</p>

                                    
        <h4 style={{fontSize: 20}}>Hertz Lab develops computational and experimental tools to study the underlying mechanisms that govern the adaptive immune response in both natural infection and vaccination</h4>
         <p style={{fontSize: 20}}> <a href="https://www.hertz-lab.org/">The Lab Web Page</a></p>  
        </div>
    )
}
