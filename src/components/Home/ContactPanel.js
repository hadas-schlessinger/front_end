import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'

export default function ContactPanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
        <h1>Contact details</h1>
        <h2>Lab information</h2>
        <p style={{fontSize: 20}}>Faculty of Health Sciences
                                    Dept. of Microbiology, Immunology and Genetics
                                    National Institute for Biotechnology in the Negev
                                    Bldg. 41, Room 105
                                    Ben-Gurion University of the Negev,
                                    P.O.B. 653, Be'er-Sheva 84105, Israel
                                    
                                    
                                    Email:  hertzlabbgu@gmail.com
                                    Office: +972-8-642-8856
                                    Cell:   +972-58-44-90-888
                                    US:     +1-206-388-6320
                                    Fax:    +972-8-6477626 </p>
        <h3 style={{fontSize: 20}}>Hertz Lab develops computational and experimental tools to study the underlying mechanisms that govern the adaptive immune response in both natural infection and vaccination</h3>
         <p style={{fontSize: 20}}> <a href="https://www.hertz-lab.org/">The Lab Web Page</a></p>  
        </div>
    )
}
