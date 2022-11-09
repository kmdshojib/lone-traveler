import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/userContext'


const Reviews = () => {
    const {user} = useContext(AuthContext)
    const [review,setReview] = useState({})

    useContext(()=>{
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
        .catch(err => console.log(err))
    },[user?.email])

    return (
        <div>Reviews</div>
    )
}

export default Reviews