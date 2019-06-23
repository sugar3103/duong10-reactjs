import React from 'react';
import Headers from '../Headers';
import Footers from '../Footers';


export default function Layout(props, {name}){
    return(
        <>
            <Headers name={name}/>
            {props.children}
            <Footers />
        </>
    )

}