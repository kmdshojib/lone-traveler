import React from 'react'
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const serviceDetails = useLoaderData()
    console.log(serviceDetails)
    return (
      <div>ServicesDetails</div>
    )
}
export default ServicesDetails