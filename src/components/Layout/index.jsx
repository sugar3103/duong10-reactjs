import React from 'react';
import Headers from '../Headers';
import Footers from '../Footers';


export default function Layout(props){
    return(
        <>
            <Headers {...props}/>
            {props.children}
            <Footers />
        </>
    )

}