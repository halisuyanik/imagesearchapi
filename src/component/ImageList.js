import React from 'react';


const ImageList=(props)=>{
    const images=props.images.map(image=>{
        return <img key={image.id} src={image.webformatURL} alt=''/>
    });
    return(
        <div className='ui segment inverted small images'>
            {images}
        </div>
    )
}

export default ImageList