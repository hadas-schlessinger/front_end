import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'

export default function ContactPanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
        <h1>Contact details</h1>
        <h2>Lab information</h2>
        <p style={{fontSize: 20}}>Faculty of Health Sciences</p>
        <p style={{fontSize: 20}}>Dept. of Microbiology, Immunology and Genetics</p>
        <p style={{fontSize: 20}}>National Institute for Biotechnology in the Negev</p>
        <p style={{fontSize: 20}}>Bldg. 41, Room 105</p>
        <p style={{fontSize: 20}}>Ben-Gurion University of the Negev,</p>
        <p style={{fontSize: 20}}>P.O.B. 653, Be'er-Sheva 84105, Israel</p>
        <p></p>
        <p></p>
        <p style={{fontSize: 20}}>Email:  hertzlabbgu@gmail.com</p>
        <p style={{fontSize: 20}}> Office: +972-8-642-8856</p>
        <p style={{fontSize: 20}}> Cell:   +972-58-44-90-888</p>
        <p style={{fontSize: 20}}> US:     +1-206-388-6320</p>
        <p style={{fontSize: 20}}>Fax:    +972-8-6477626</p>

                                    
        <h4 style={{fontSize: 20}}>Hertz Lab develops computational and experimental tools to study the underlying mechanisms that govern the adaptive immune response in both natural infection and vaccination</h4>
         <p style={{fontSize: 20}}> <a href="https://www.hertz-lab.org/">The Lab Web Page</a></p>  
        </div>
    )
}
