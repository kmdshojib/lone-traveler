import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const Card = ({name,title,iamgeUrl,description,price}) => {
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl mt-10">
        <figure><img className='card-img' src={iamgeUrl} alt={title}/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}...<Link>Show more</Link> </p>
            <p>Price:{price}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card