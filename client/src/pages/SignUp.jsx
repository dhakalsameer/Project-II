import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Label, TextInput, Button, Spinner } from 'flowbite-react'

export const SignUp = () => {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
     setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password){
       return setErrorMessage("All fields are required");
    }

    try {
      
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if(data.success === false) {
        return setErrorMessage(data.message);
      }

      setLoading(false);

      if(res.ok) {
         navigate("/sign-in");
      }

    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }

  };

  console.log(formData);

  return (
    <div className='min-h-screen mt-20'>
        <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10'>
          {/* Left */}
          <div className='flex-1'>
          <Link
          to="/"
          className="font-bold dark:text-white text-4xl"
        
        >
             <span className="px-2 py-1 bg-gradient-to-r from-sky-400 via-sky-400 to-purple-500 rounded-lg text-white">
              TECH
             </span>
             BLOG
        </Link>
        <p className='text-sm mt-5'>
          This is a demo project.You can sign up with your email and password with Google.     
        </p>

          </div>
          {/* Right */}
          <div className='flex-1'>
             <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

              <div>
              <Label value="Your username"/>
              <TextInput 
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
              </div>

              <div>
              <Label value="Your email"/>
              <TextInput 
                type='email'
                placeholder='someone@gmail.com'
                id='email'
                onChange={handleChange}
              />
              </div>

              <div>
              <Label value="Your password"/>
              <TextInput 
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
              </div>

              <Button 
                   className="
                   bg-gradient-to-r from-purple-950 to-sky-400 text-white  
                   hover:from-gray-600 hover:to-purple-600 
                   active:from-gray-900 active:to-purple-700
                 "
                type="submit"
                disabled={loading}
                >
                  {
                    loading ? (
                      <>
                      <Spinner size="sm" />
                      <span className='pl-3'>Loading...</span>
                      </>
                    ) : ("Sign Up")
                  }
               </Button>

             </form>
             <div className='flex gap-2 text-sm mt-5'>
              <span>Already have an account?</span>
              <Link to="/sign-in" className='text-blue-500'>
                Sign In
              </Link>
             </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp
