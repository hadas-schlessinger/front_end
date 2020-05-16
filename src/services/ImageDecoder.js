import React from 'react'

export default function decoder(img){
    if(img != 'not'){
        var image = new Image();
    var cleanImange = img.substring(2, img.length - 1)
    image.src = `data:image/png;base64,${cleanImange}`;
    return(image.src)
    }
    else{
        return('')
    }
}

