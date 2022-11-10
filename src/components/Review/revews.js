import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/userContext'
import useTitle from '../../hooks/usetitle'


const Reviews = () => {
    const {user,logOut} = useContext(AuthContext)
    const [reviews,setReviews] = useState(null)
    
    useTitle("Reviews")

    // fetch data and verfy JWT 
   
    useEffect(()=>{
        fetch(`https://travelia-server-kmdshojib.vercel.app/reviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403){
                logOut();
            }
            return res.json()
        })
        .then(data => setReviews(data))
        .catch(err => console.log(err))
    },[user?.email,logOut])

    // **** updating Review ********////////

    const handleUpdate = (id) => {
        const getReview = window.prompt("Please Update your Review")

        if (getReview) {
            fetch(`https://travelia-server-kmdshojib.vercel.app/reviews/${id}`,{
                method:"PATCH",
                headers:{
                    "content-type": "application/json",
                    authorization:`Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({review:getReview})
            })
            .then(res => res.json())
            .then(data => {
                data.acknowledged && 
                fetch(`https://travelia-server-kmdshojib.vercel.app/reviews?email=${user?.email}`,{
                    headers:{
                    authorization:`Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(res => res.json())
                .then(data => setReviews(data))
                .catch(err => console.log(err))
            })
            .catch(err => console.error(err))
        }
    }
    // deleting a review  /////

    const handleDelete = id => {
        console.log(id)
        const confirm = window.confirm('Are you sure you want to delete this Review?')
        if (confirm){
            fetch(`https://travelia-server-kmdshojib.vercel.app/reviews/${id}`,{
                method: 'DELETE',
                authorization:`Bearer ${localStorage.getItem("token")}`
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0) {
                    alert("Delete Successfully")
                    const remaining = reviews.filter(review => review._id !== id)
                    setReviews(remaining)
                }
            })
            .catch(err => console.error(err))
        }
    }

    return (
        <div className="mt-5 container mx-auto grid grid-cols-3 review-hight mb-5 ml-5 resposive-cards">
          {
            
            reviews?.map((({name,review,photoUrl,_id})=> (
                <div key={_id} className="card w-96 bg-base-100 shadow-xl mt-5">
                    <div className="card-body">
                        <div className="flex ">
                            <div className="flex">
                                <img alt="img" src={photoUrl} className="w-7 rounded-full"/>
                                <h2 className="card-title ml-3">{name}</h2>
                            </div>
                            <p className="text-end underline text-blue-600 cursor-pointer" onClick={() => handleDelete(_id)}>Delete</p>
                            <p className="ml-3 text-end underline text-blue-600 cursor-pointer" onClick={()=> handleUpdate(_id)}>Edit</p>
                        </div>
                        <p>{review}</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            )))
          }
            
        </div>
    )
}

export default Reviews