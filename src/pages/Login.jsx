import { useState } from "react";
import {login} from "../services/auth_api"

import {useNavigate} from "react-router-dom"
import Socialicon from "../components/Socialicon"



export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate(); 

  //error handling show errros 

  const [error, setError] = useState("")


  //only one state for login form 
  const[user, setUser] = useState({
    email: "", 
    password: ""
  })

  //login form submit 
  const LoginForm = async(e) => {
    e.preventDefault(); 

    try{
      await login(user); //login api call ho rahi he 
      navigate("/");
    } catch(err){
      const apiError =  err.response?.data?.errors;
      console.log("LOGIN ERROR:", err.response?.data);
      if(apiError){
        setError(apiError)
      }
    }
  }


  //handle input chnages 

  const onChange = (e) => {
    const {name, value} = e.target 
    setUser(prev => ({...prev, [name]: value }))
  }


  //errror handling 


  //onclick handling
   const handleForgotClick = () => {
    navigate("/forgot_password");
  };



  return (
    <>
     <div className="relative min-h-screen">
        {/* backgroung images */}
        <div className="min-h-[57vh] bg-cover bg-center "
          style={{ backgroundImage: "url('/SignUpBg.png')" }}>
        </div>

         {/* Navbar overlay */}
         <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-20">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <h1 className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white text-xl font-zen">
              QP
            </h1>
            <p className="font-zen text-xl text-black">
              QPAY
            </p>
          </div>

          {/* RIGHT SIDE */}
          <button className="border border-black px-4 py-1 text-sm font-medium text-black hover:text-blue-600 transition">
            SIGN UP
          </button>
        </div>

       {/* Overlay */}
      
        <div className= "absolute top-0 left-0 w-full  z-30 flex  justify-center mt-15 ">
          
          {/* CARD UI HERE */}
          <div className="my-30">            
            <form onSubmit = {LoginForm} className=" bg-white shadow-2xl rounded-sm p-13  items-center"> 

            <h2 className="text-2xl font-semibold text-center mb-1">
             Log In to Qpay
            </h2>

            <p className="text-center text-sm mb-6 text-gray-400">
              Quick & Simple way to Automate your payment
            </p>


            {/* Email */}
            <div className="mb-4  rounded-sm group focus:outline-none focus:border-black  ">
              <label className="block text-xs text-gray-500 px-2 font-normal  group-focus-within:text-black
              group-focus-within:text-xl">EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={onChange}
                placeholder="Email Address"
                className="w-full  px-3 py-2 mt-1 "
              />
            </div>

            {/* Password */}
            <div className="mb-4  rounded-sm group focus:outline-none focus:border-black">
              <label className="block text-xs text-gray-500 px-2 font-normal  group-focus-within:text-black
              group-focus-within:text-xl">PASSWORD</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChange}
                placeholder="******"
                className="w-full  px-3 py-2 mt-1 "
              />
              {error?.base && (
                <ul className="mt-1 ml-2">
                  {error.base.map((msg, index) => (
                    <li key={index} className="text-red-700 text-base">
                      {msg}
                    </li>
                  ))}
                </ul>
              )}
            </div>


            {/* Checkbox */}
            <div className="flex items-center justify-between mb-5 text-xs text-gray-600">
              <div>
                <input type="checkbox" />
                <span>
                <u className="hover:text-lg"> Remenber me</u> 
                </span>
              </div>
              <span onClick={handleForgotClick} className="ml-12 hover:text-lg"><u>Forgit Password?</u></span>
            </div>

            {/* Button */}
            <button  type="submit" className="w-full bg-black text-white py-2 text-sm hover:bg-gray-900 transition hover:text-xl">
               PROCEED
            </button>

            {/* Divider */}
            <div className="flex items-center my-5">
              <div className="flex-1 h-px "></div>
              <span className="px-3 text-xs text-gray-500">OR USE</span>
              <div className="flex-1 h-px "></div>
            </div>

            {/* Social Icons */}
            <Socialicon />
            </form> 
          </div>        
        </div>  
     </div>
    </>
      
  );
}
