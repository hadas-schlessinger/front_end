import React from 'react'
import beckgroungTransperant from '../../beckgroungTransperant.png'

export default function ContactPanel() {
    return (
        <div style={{backgroundImage: `url(${beckgroungTransperant})`}}>
         <p style={{fontSize: 20}} className="pt-running-text"> <a href="https://www.hertz-lab.org/">The Lab Web Page</a></p>  
        </div>
    )
}
