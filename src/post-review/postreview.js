import React, { useContext } from 'react'
import { AuthContext } from '../context/userContext'

const PostReview = () => {
    const {user} = useContext(AuthContext)
    const handleReview = e =>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleReview}>
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                <input type="email" defaultValue={user?.email} placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
            </div>
            <button type="submit"></button>
        </form>
    </div>
  )
}

export default PostReview