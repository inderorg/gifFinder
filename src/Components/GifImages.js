import React from 'react';
import '../index.css';

const GifImages = props =>(
    <div>
       {
        props.gifImg.map((image) => {
            return (
              <div className="imagList" key={image.id}>
                <img src={image.images.downsized.url} alt={image.title}/>
                <p>{image.title}</p>
              </div>
            )
            
            
        })
      }
    </div>
)

export default GifImages;