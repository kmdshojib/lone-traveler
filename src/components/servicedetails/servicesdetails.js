import React from 'react'
import { useLoaderData } from 'react-router-dom';
import './service.css'


const ServicesDetails = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails)
   const {name,iamgeUrl,price,decription} = serviceDetails
    return (
      <div>
        <div className='service-card container mx-auto flex justify-center flex-col'>
               <img alt='img' src={iamgeUrl}  className=""/>
               <h2 className='font-semibold text-2xl'>{name}</h2>
               <p className=''>Price:{price}</p>
               <p className=''>{decription}</p>
          </div>
          
        </div>
    )
}
export default ServicesDetails