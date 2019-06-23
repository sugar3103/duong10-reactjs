import React from 'react';
import Headers from '../Headers';
import Footers from '../Footers';


export default function Layout(props){
    return(
        <>
            <Headers name={props.name} img_url={props.img_url} price={props.price} 
                      final_price={props.final_price}/>
            {props.children}
            <Footers />
        </>
    )

}