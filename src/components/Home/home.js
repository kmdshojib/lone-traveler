import React from 'react'
import { Link, useLoaderData, useNavigate} from 'react-router-dom'
import Card from "../card/card"
import "./home.css"

const Home = () => {
    const serviceData = useLoaderData()
    console.log(serviceData)
    const navigate = useNavigate()
    return (
        <div>
            {/* slider */}
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt="img-silder" src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full image-size" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img alt="img-silder" src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full image-size" />
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
            <div id="slide4" className="carousel-item relative w-full">
                <img alt="img-silder" src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
            {/* service secttion */}
            <h1 className="text-2xl text-center">Services that I provide</h1>
            <div className='container mx-auto px-4 flex justify-around'>
               {
                    serviceData.map(({_id,iamgeUrl,price,name,decription}) =>{
                        const cardDescription = decription?.length >100 && decription?.split("",100)
                        return <Card 
                                key={_id}
                                name={name}
                                iamgeUrl={iamgeUrl}
                                price={price}
                                description={cardDescription}
                            />
               })
               }
            </div>
            <div className="flex justify-center mt-10 mb-10">
                <button className="btn btn-primary" onClick={()=>navigate("/allservices")}>All services</button>
            </div>
        </div>
    )
}

export default Home