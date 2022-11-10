import React, { useContext } from "react"
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/userContext";
import "./service.css"


const ServicesDetails = () => {
    const {user} = useContext(AuthContext)
    const serviceDetails = useLoaderData()
    console.log(serviceDetails)
    const {name,iamgeUrl,price,decription} = serviceDetails
    const handleReviewSubmit = (e) => {
      e.preventDefault()
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
      fetch("http://localhost:5000/addReview",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(reviewData)
    })
    .then(res => res.json())
    .then((data) => data && form.reset())
    .catch(err => console.error(err))
    }
    return (
      <div>
        <div className="service-card container mx-auto flex justify-center flex-col">
               <img alt="img" src={iamgeUrl}  className=""/>
               <h2 className="font-semibold text-2xl">{name}</h2>
               <p className="">Price:{price}</p>
               <p className="">{decription}</p>
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
            <button  className="btn btn-primary">Add a review</button> 
          </div>
          
          }
        </div>
    )
}
export default ServicesDetails