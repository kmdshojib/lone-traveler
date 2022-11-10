import React from 'react'
import { PhotoView } from 'react-photo-view'
import { Link, useLoaderData, useNavigate} from 'react-router-dom'

import "./home.css"


const Home = () => {
    const serviceData = useLoaderData()
    const navigate = useNavigate()
    return (
        <div>
            {/* slider */}
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt="img-silder" src="https://images.pexels.com/photos/7539771/pexels-photo-7539771.jpeg?cs=srgb&dl=pexels-roman-odintsov-7539771.jpg&fm=jpg&_gl=1*1bn4xfx*_ga*MTcyOTgyNTMwNi4xNjY4MDg5NTA0*_ga_8JE65Q40S6*MTY2ODA4OTUwNS4xLjEuMTY2ODA4OTY1MS4wLjAuMA.." className="w-full image-size" />
               
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img alt="img-silder" src="https://images.pexels.com/photos/2418400/pexels-photo-2418400.jpeg?cs=srgb&dl=pexels-abhinav-atwal-2418400.jpg&fm=jpg&_gl=1*1waelha*_ga*MTcyOTgyNTMwNi4xNjY4MDg5NTA0*_ga_8JE65Q40S6*MTY2ODA4OTUwNS4xLjEuMTY2ODA4OTUzMC4wLjAuMA.." className="w-full image-size" />
                <p className="absolute text-abs text-2xl font-bold ">"Travel is the healthiest addiction"</p>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img alt="img-silder" src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full image-size" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            
        </div>
            {/* service secttion */}
            <h1 className="mt-10 text-2xl text-center font-bold">Services</h1>
            <div className='container mx-auto px-4 grid grid-cols-3 resposive-cards'>
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
            <div className="flex justify-center mt-10 mb-10">
                <button className="btn btn-primary" onClick={()=>navigate("/allservices")}>All services</button>
            </div>
            {/* palaces to visit*/}
            <div className="container mx-auto px-4 flex justify-around mt-20 md:flex-col sm:flex-col explore">
                <div className="mt-40">
                    <p>LET THE JOURNEY BEGIN</p>
                    <h1 className="mt-10 text-5xl font-bold">Explore Now</h1>
                    <p className='mt-5 text-w'>
                    See the world. It's more fantastic than any dream made or paid for in factories. Ask for no guarantees, ask for no security.
                    In any case, a little danger is a small price to pay for ridding a place of tourists.
                    </p>
                    <button className='btn btn-primary mt-10 sm:mb-10 explore-btn'>Explore Now</button>
                </div>
               <div>
                    <div>
                        <img className="rounded" alt="travel" src="https://demo.sociolib.com/tracks/wp-content/uploads/sites/4/2021/09/mapping.jpg"/>
                    </div>
               </div>
            </div>
            {/* Exlpore Dream discover */}
            <div className="background-image flex justify-around mt-20">
                <div>
                    <h1 className="font-black text-5xl underline mb-8">Dream.</h1>
                    <h1 className="font-black text-5xl underline mb-8">Explore.</h1>
                    <h1 className="font-black text-5xl underline mb-8">Discover.</h1>
                </div>
                <div>
                    <button className="btn mt-20">Let's go</button>
                </div>
            </div>
        </div>
    )
}

export default Home