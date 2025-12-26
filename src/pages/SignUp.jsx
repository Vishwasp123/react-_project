import React, { useState } from "react";
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css";
import { Eye, EyeOff } from "lucide-react";

// import singup api form sevices/auth_api 

import {signUP} from "../services/auth_api"
import { useNavigate, Link } from "react-router-dom";

function SignUp() {

//show Password hide password ke liey
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //error handling show error in filed wiese
  // [] backend se errros [] me aa rahi he 

  const [errors, setErrors] = useState([])


// submit from singup 
  const SingUpForm = async(e) => {
    e.preventDefault(); 
      
    try{
      await signUP(user);  //API call ho rahi he signup vali
      navigate("/login"); 
    } catch(error){

      const apiErrors = error.response?.data?.errors;

      if(apiErrors){
        setErrors(apiErrors)
      }
 
    }
  };
  
//Imp only one state  for form
  const [user,setUser] = useState({
    username: "",  
    email: "", 
    password: "", 
    password_confirmation: "", 
    phone_number: ""

  });

  // handle input changes

  const onChange = (e) => {
    const {name, value} = e.target
    setUser(prev => ({...prev, [name]: value}))
  }


  // phone number because phone number are different 
  const onPhoneChange = (value) => {
    setUser(prev => ({ ...prev, phone_number: `+${value} `}));
  };


  return (
    <>
     <div className="relative min-h-screen">
        {/* backgroung images */}
        <div className="min-h-[57vh] bg-cover bg-center "
          style={{ backgroundImage: "url('Rectangle.png')" }}>
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
            SIGN IN
          </button>
        </div>

       {/* Overlay */}
      
       <div className= "absolute top-0 left-0 w-full z-30 flex justify-center mt-15   ">       
          {/* CARD UI HERE */}
             
          <form onSubmit={SingUpForm}  noValidate className="bg-white shadow-2xl rounded-sm p-13 items-center"> 

            <h2 className="text-2xl font-semibold text-center mb-1">
              Sign up to Qpay
            </h2>

            <p className="text-center text-sm mb-6 text-gray-400">
              Quick & Simple way to Automate your payment
            </p>

            {/* User Name */}
           <div className="mb-4 border rounded-sm group focus-within:border-black">
              <label className="block text-xs text-gray-500 px-2 font-normal  group-focus-within:text-black
              group-focus-within:text-xl">
                USER NAME
              </label>

              <input
                type="text"
                name="username"
                value={user.username}
                onChange={onChange}
                placeholder="John"
                className="w-full px-3 py-2 mt-1 focus:outline-none"
              />
              {errors.username && (
                <p className="text-red-500 text-base mt-1 ml-2 ">
                  {errors.username[0]}
                </p>
              )}
            </div>



            {/* Phone number */}
            <div className="mb-4 border  rounded-sm group focus:outline-none focus:border-black">
              <label className="block text-xs text-gray-500 px-2 font-normal  group-focus-within:text-black
              group-focus-within:text-xl">Phone Number</label>
                        
              <PhoneInput
                country="in"
                value={user.phone_number}
                onChange={onPhoneChange}
                enableSearch
                countryCodeEditable={false}
                inputProps={{
                  name: "phone_number",
                  "data-testid": "phone-input"
                }}
                containerClass="w-full"
                inputClass="!w-full !border-0 !outline-none"
                buttonClass="!border-0"
              />
             {errors.phone_number && (
                <ul className="mt-1 ml-2">
                  {errors.phone_number.map((msg, index) => (
                    <li
                      key={index}
                      className="text-red-500 text-base"
                    >
                      {msg}
                    </li>
                  ))}
                </ul>
              )}

            </div>
            
                

            {/* Email */}
            <div className="mb-4 border  rounded-sm group focus:outline-none focus:border-black">
              <label className="block text-xs text-gray-500 px-2 font-normal  group-focus-within:text-black
              group-focus-within:text-xl">EMAIL ADDRESS</label>

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={onChange}
                placeholder="Email Address"
                className="w-full  px-3 py-2 mt-1 focus:outline-none "
                />
                

             {errors.email && (
                <p className="text-red-500 text-base mt-1 ml-2 ">
                  {errors.email[0]}
                </p>
              )}
              
            </div>



            {/* Password */}
            <div className="mb-4 border rounded-sm group focus:outline-none focus-within:border-black relative">
              <label
                className="block text-xs text-gray-500 px-2 font-normal
                group-focus-within:text-black  group-focus-within:text-xl"
              >Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={onChange}
                placeholder="Enter Password"
                className="w-full px-3 py-2 pr-12 mt-1 focus:outline-none"
              />

              {errors.password && (
                <p className="text-red-500 text-base mt-1 ml-2 ">
                  {errors.password[0]}
                </p>
              )}

              {/*  Eye icon inside  password input */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-6.25 text-gray-500 hover:text-black mb-3"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Confirmation */}
            <div className="mb-4 border  rounded-sm group focus:outline-none focus:border-black">
              <label className="block text-xs text-gray-500 px-2 font-normal  group-focus-within:text-black
              group-focus-within:text-xl"> Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                value={user.password_confirmation}
                onChange={onChange}
                placeholder="Confirm Password"
                className="w-full  px-3 py-2 mt-1 focus:outline-none"
              />
              {errors.password_confirmation && (
                <p className="text-red-500 text-base mt-1 ml-2 ">
                  {errors.password_confirmation[0]}
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mb-5 text-xs text-gray-600">
              <input type="checkbox" />
              <span>
                I agree to the <u>Terms</u> and <u>Privacy Policy</u>
              </span>
            </div>

            {/* Button Submit */}
            <button  type="submit" className="w-full bg-black text-white py-2 text-sm hover:bg-gray-900 transition hover:text-xl">
              CREATE AN ACCOUNT
            </button>

            {/* Divider */}
            <div className="flex items-center my-5">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-3 text-xs text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 ">
              <div className="w-9 h-9   bg-gray-100 flex items-center justify-center cursor-pointer">
                <img src="https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png" className="w-6 h-auto transition-transform duration-300 ease-in-out hover:scale-200" alt="" />
              </div>
              <div className="w-9 h-9 bg-gray-100 flex items-center justify-center cursor-pointer">
                <img src="https://www.freeiconspng.com/uploads/apple-icon-4.png" className="w-10 h-auto transition-transform duration-300 ease-in-out hover:scale-200" alt="" />
              </div>
              <div className="w-9 h-9  bg-gray-100 flex items-center justify-center cursor-pointer">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/042/148/655/small/facebook-logo-facebook-social-media-icon-free-png.png" className="w-10 h-auto transition-transform duration-300 ease-in-out hover:scale-200" alt="" />
              </div>
            </div>
          </form>
          
        </div>  
     </div>
    </>
   
  );
}

export default SignUp;