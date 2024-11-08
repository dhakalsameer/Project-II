import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Label, TextInput, Button, Spinner, Alert } from 'flowbite-react'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/user.js'
import { useDispatch, useSelector } from 'react-redux'

export const SignIn = () => {

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleChange = (e) => {
     setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password){
       return dispatch(signInFailure("Please fill in all fields"));
    }

    try {
      
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if(data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if(res.ok) {
        dispatch(signInSuccess(data))
         navigate("/");
      }

    } catch (error) {
      dispatch(signInFailure(error.message));
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
          This is a demo project.You can sign in with your email and password with Google.     
        </p>

          </div>
          {/* Right */}
          <div className='flex-1'>
             <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

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
                placeholder='********'
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
                    ) : ("Sign In")
                  }
               </Button>

             </form>
             <div className='flex gap-2 text-sm mt-5'>
              <span>Don't have an account?</span>
              <Link to="/sign-up" className='text-blue-500'>
                Sign Up
              </Link>
             </div>

             {errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
             )}

          </div>
        </div>
    </div>
  )
}

export default SignIn;
