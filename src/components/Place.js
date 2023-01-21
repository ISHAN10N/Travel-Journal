import React from 'react'
export default function Place(props) {
    return (
        <div className='place--container'>
            <div className='left--container'>
                <img src={props.details.imageUrl} alt="error load" className='left--image' />
            </div>
            <div className='right--container'>
                <div className='first--container'>
                    <div className='icon'>
                        <img src={props.pointer} alt='your image is here' className='city--image' />
                        <span className='city--name'>{props.details.location}</span>
                        <a className='map--link' href={props.details.googleMapsUrl}>View on google maps </a>

                    </div>


                </div>
                <div className='heading--part'>
                    <h1 className='main--h1'>{props.details.title}</h1>
                </div>
                <div className='content--part'>
                    <h4>{props.details.startDate}</h4>
                    <h5>{props.details.endDate}</h5>
                    <p>{props.details.description}</p>
                </div>
            </div>
        </div>

    )
}