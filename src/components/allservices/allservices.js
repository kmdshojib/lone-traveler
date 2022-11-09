import React from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { PhotoView } from 'react-photo-view';


const AllServices = () => {
    const serviceData = useLoaderData()
    const navigate = useNavigate()
    return (
        <div className="container mx-auto px-5 grid grid-cols-3">
            {
                    serviceData.map(({_id,iamgeUrl,price,name,decription,title}) =>{
                        const descriptionLength = decription?.length >100 && decription?.split("",100)
                        return (
                            <div key={_id}>
                                <div className="card w-96 bg-base-100 shadow-xl mt-10">
                                <figure>
                                    <PhotoView key={title} src={iamgeUrl}>
                                        <img className='card-img' src={iamgeUrl} alt={title}/>
                                    </PhotoView>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p>{descriptionLength}...<Link to={`/servicedetails/${_id}`} className='text-blue-500'>Show more</Link> </p>
                                    <p>Price: {price}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={()=>navigate(`/servicedetails/${_id}`)}>Details</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        )
               })
            }
        </div>
    )
}

export default AllServices