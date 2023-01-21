import React from 'react'

export default function Navbar(props) {
    return (
        <div className='navbar--container'>
           
            <div className='middle--container'>
                <img src={props.img} alt="" className="nav--image" />
            </div>
            <span className='nav--p'>MY TRAVEL JOURNAL</span>

        </div>
    )
}