import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'

export default function ContactPanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
        <h1>Contact details</h1>
        <h2>Lab information</h2>
        <h3>Address</h3>
        <p style={{fontSize: 20, marginLeft: 2}}> 
        <p>The Hertz Lab</p>
        <p>Faculty of Health Sciences</p>
        <p>Dept. of Microbiology, Immunology and Genetics</p>
        <p>National Institute for Biotechnology in the Negev</p>
        <p>Bldg. 41, Room 105</p>
        <p>Ben-Gurion University of the Negev,</p>
        <p>P.O.B. 653, Be'er-Sheva 84105, Israel</p>
        </p>
        <h3>Contact</h3>
        <p style={{fontSize: 20, marginLeft: 2}}>
        <p>Email:  hertzlabbgu@gmail.com</p>
        <p> Office: +972-8-642-8856</p>
        <p> Cell:   +972-58-44-90-888</p>
        <p> US:     +1-206-388-6320</p>
        <p>Fax:    +972-8-6477626 </p>
        </p>
                                  
        <h4 style={{fontSize: 20}}>The Hertz lab develops computational and experimental tools to study the underlying mechanisms that govern the adaptive immune response in both natural infection and vaccination</h4>
         <p style={{fontSize: 20}}> <a href="https://www.hertz-lab.org/">The Lab Web Page</a></p>  
        </div>
    )
}
