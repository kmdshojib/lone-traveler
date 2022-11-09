import React from 'react'

const Addservice = () => {
  return (
    <div className='grid place-items-center mt-20'>
        <div className="card login-card flex justify-center">
        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="servicename" className="block ">Service Name</label>
                    <input type="text" name="servicename" id="name" placeholder="Please enter Service Name" className="w-full px-4 py-3 rounded-md"  required/>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="servicetitle" className="block ">Service Title</label>
                    <input type="text" name="servicetitle" id="email" placeholder="Please enter Service Title" className="w-full px-4 py-3 rounded-md"  required/>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="servicetitle" className="block ">Service Photo</label>
                    <input type="text" name="servicetitle" id="email" placeholder="Please enter Service Photo Url" className="w-full px-4 py-3 rounded-md"  required/>
                </div>
                <div className="space-y-1 text-sm">
                    <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                </div>
                <button className="block w-full p-3 text-center rounded-sm btn btn-primary">Add Service</button>
            </form>
        </div>
    </div>
    
  )
}

export default Addservice