import Image from 'next/image';
import React from 'react';


const LinkTile = (props: {src: any, alt: string}) => {
    return ( 
        <a href='#' className='link-tile'>
            <Image src={props.src} alt={props.alt} className='link-tile-img'/>
        </a>
     );
}
 
export default LinkTile;