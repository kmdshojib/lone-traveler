import React, { useContext,useState,useEffect } from "react"
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/userContext";
import useTitle from "../../hooks/usetitle";
import "./service.css"


const ServicesDetails = () => {
    const {user} = useContext(AuthContext)
    const serviceDetails = useLoaderData()
    const [allReviews, setAllReviews] = useState(null)

    const navigate = useNavigate()
    useTitle("Service Details")
    const handleNavate = () =>{
      toast.warning("Please Login to add your review!")
      navigate("/login")
    }

    useEffect(()=>{
      fetch("https://travelia-server-kmdshojib.vercel.app/allreviews")
      .then(response => response.json())
      .then(data => {
        const filtered = data.filter(review => review?.name === serviceDetails.name)
        setAllReviews(filtered)
      })
      .catch(err => console.error(err))
    },[serviceDetails])

    console.log(serviceDetails)
    const {name,iamgeUrl,price,decription} = serviceDetails

    const handleReviewSubmit = (e) => {
      const form = e.target
      const review = form.review.value
      const email = form.email.value
      const serviceName = form.name.value

      const reviewData = {
        review: review,
        email: email,
        name: serviceName,
        userName:user.displayName,
        photoUrl: user.photoURL

      }
      fetch("https://travelia-server-kmdshojib.vercel.app/addReview",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(reviewData)
    })
    .then(res => res.json())
    .then((data) => {
      data && form.reset()
      window.reload()
    })
    .catch(err => console.error(err))
    }
    
    return (
      <div>
        <div className="service-card container mx-auto flex justify-center flex-col">
               <img alt="img" src={iamgeUrl}  className=""/>
               <h2 className="font-semibold text-2xl m-5">{name}</h2>
               <p className="m-5 font-bold">Price: ${price}</p>
               <p className="m-5 mb-10">{decription}</p>
          </div>
          {/* Review section */}
          {
            (user && user?.uid) ?
            <div className="flex justify-center mt-10 mb-10">
            <form onSubmit={handleReviewSubmit}>
              <div className="space-y-1 text-sm mb-5">
                <label className="" htmlFor="review">Review: </label>
                <input type="text" name="review" className="ml-10 w-60 px-4 py-3 rounded-md textarea textarea-bordered" placeholder="Please Put your Review" required/>
              </div>
              <div className="space-y-1 text-sm mb-5">
                <label className="" htmlFor="name">Service Name: </label>
                <input type="text" name="name" defaultValue={name} className="w-60 px-4 py-3 rounded-md textarea textarea-bordered" placeholder="Please Put your Review"/>
              </div>
              <div className="space-y-1 text-sm mb-5">
                <label className="" htmlFor="email">User Email: </label>
                <input type="text" name="email" defaultValue={user?.email} className="ml-4 w-60 px-4 py-3 rounded-md textarea textarea-bordered" placeholder="Please Put your Review"/>
              </div>
              <button  className="ml-20 mt-4 btn btn-primary" type="submit">Confirm Review</button>
            </form>
            {/* */}
          </div>
          :
          <div className="flex justify-center mt-10 mb-10">
            <button  className="btn btn-primary" onClick={handleNavate}>Add a review</button> 
          </div>
          }
          {/* Reviews */}
          <div className="container mx-auto grid grid-cols-3 ml-10 sm:grid-cols-3 mb-10">
            {
              allReviews?.map(review => (
                <div key={review._id} className="card w-96 bg-base-100 shadow-xl mt-5">
                      <div className="card-body">
                          <div className="flex ">
                              <div className="flex">
                                  <img alt="img" src={review?.photoUrl} className="w-7 rounded-full"/>
                                  <h2 className="card-title ml-3">{review?.userName}</h2>
                              </div>
                          </div>
                          <p>{review?.name}</p>
                          <p>{review?.review}</p>
                          <div className="card-actions justify-end">
                          </div>
                      </div>
                  </div>
              ))
            }
            </div>
        </div>
    )
}
export default ServicesDetails