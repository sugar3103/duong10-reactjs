import React, {useState} from 'react';


export default function SearchItem() {
    const [item, setItem] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(item)
    }
    const onItemChange = (e) => {
        setItem(e.target.value)
    }
    return (
        <div className="shop-widget">
            <h3 className="shop-title">Search by</h3>
            <form action="#" className="shop-search" onSubmit={onSubmit}>
                <input onChange={onItemChange} type="text" placeholder="Your keyword...." />
                <button><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}