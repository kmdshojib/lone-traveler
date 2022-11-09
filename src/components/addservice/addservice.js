import React from 'react'
import './adddescription.css'

const Addservice = () => {
    const handleSubmitService =(event)=>{
        event.preventDefault();
        const form = event.target
        const serviceName = form.servicename.value
        const serviceTitle =  form.servicetitle.value
        const servicePhotoUrl = form.servicePhotoUrl.value
        const servicedescription =  form.servicedescription.value
        console.log(serviceName,serviceTitle,servicePhotoUrl,servicedescription)
    }
    return (

        <div onSubmit={handleSubmitService} className='grid place-items-center mt-20'>
            <div className="card login-card flex justify-center">
            <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="servicename" className="block ">Service Name</label>
                        <input type="text" name="servicename"  placeholder="Please enter Service Name" className="w-full px-4 py-3 rounded-md"  required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="servicetitle" className="block ">Service Title</label>
                        <input type="text" name="servicetitle"  placeholder="Please enter Service Title" className="w-full px-4 py-3 rounded-md"  required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="servicePhotoUrl" className="block ">Service Photo</label>
                        <input type="text" name="servicePhotoUrl" placeholder="Please enter Service Photo Url" className="w-full px-4 py-3 rounded-md"  required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="servicedescription" className="block ">Service Description</label>
                        <input type="text" name="servicedescription" className="description-input w-full textarea textarea-bordered" placeholder="Add a Description" />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm btn btn-primary">Add Service</button>
                </form>
            </div>
        </div>
    
  )
}

export default Addservice