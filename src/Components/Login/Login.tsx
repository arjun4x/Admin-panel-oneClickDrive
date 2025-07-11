'use client'

import { useRouter } from 'next/navigation' 
import React ,{useState}from 'react'
import { useForm } from 'react-hook-form';
import  Alert  from '@/Components/Common/Alert';
type FormValues = {
  username: string;
  email: string;
  password: string;
};




function Login() {



 const [showAlert,setShowAlert] = useState<boolean>(false);
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
      const router = useRouter()

    const onSubmit = async (data: FormValues) => {
      debugger
    console.log('Form submitted:', data);
   if (data.username === 'admin' && data.password === 'admin123' && data.email === "admin@oneClickDrive.com") {
        await fetch('/api/login', { method: 'POST' });
        
        router.push('/dashboard');
      }else{
        setShowAlert(true);

      }
  };

  


  return (
<> <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"  onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Username</label>
            <input
              type="text"
              // name="username"
                  {...register('username', {
              required: 'Username is required',
              minLength: { value: 3, message: 'Minimum 3 characters' },
            })}
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
              
            />
             {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
               {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email',
              },
            })}
              // name="email"
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
              
            />
               {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
                {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Minimum 6 characters' },
                          })}

              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
              
            />
             {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            // onClick={handleRedirection}
          >
            {isSubmitting ? 'Signing In....' : 'Sign In'}
          </button>
        </form>
      </div>

      {showAlert && <Alert message="Sorry,You are not Authorized" type="failed"  showAlert={showAlert} setShowAlert={setShowAlert}/>}
</>
   
  )
}

export default Login