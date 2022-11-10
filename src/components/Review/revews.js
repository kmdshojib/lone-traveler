import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/userContext'


const Reviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews,setReviews] = useState(null)
    console.log(reviews,user?.email)

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.log(err))
    },[user?.email])

    // const handleUpdate = () => {

    // }

    const handleDelete = id => {
        console.log(id)
        const confirm = window.confirm('Are you sure you want to delete this Review?')
        if (confirm){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE'
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
        <div className="mt-5">
          {
            
            reviews?.map((({name,review,photoUrl,_id})=> (
                <div className="card w-96 bg-base-100 shadow-xl mt-5">
                    <div className="card-body">
                        <div className="flex ">
                            <div className="flex">
                                <img alt="ProfileImage" src={photoUrl} className="w-7 rounded-full"/>
                                <h2 className="card-title ml-3">{name}</h2>
                            </div>
                            <p className="text-end underline text-blue-600 cursor-pointer" onClick={() => handleDelete(_id)}>Delete</p>
                            <p className="text-end underline text-blue-600 cursor-pointer">Edit</p>
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