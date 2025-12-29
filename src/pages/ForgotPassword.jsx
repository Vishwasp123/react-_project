import React from 'react'

function ForgotPassword() {
  return (
   <>

      <div className='relative min-h-screen'>

        {/* --------------backgroundImage---------- */}

        <div className="min-h-[57vh] bg-cover bg-center "
          style={{ backgroundImage: "url('/SignUpBg.png')" }}>
        </div> 

        {/* -------------- overlay------------  */}
        <div className='absolute top-0 left-0 w-full z-30 flex justify-center mt-'>
          <form className='bg-white shadow-2xl rounded-sm p-13 items-center'>
              
            <div>
              {/* -----Heading label---- */}
              <h1 className='text-2xl font-semibold text-center mb-1'>Forgot Password</h1>
              <p className='text-center text-sm text-gray-400'>Quick & Simple way to Automate your payment</p>


                {/* -------New Password------ */}
              <div className='mb-4 rounded-sm m-5 group focus:outline-none focus:border-black'>
                <label className='block text-xs text-gray-800 px-2 font-normal  group-focus-within:text-black
              group-focus-within:text-lg '>New Password</label>
                <input 
                  type="new_password"
                  name="new_password"
                  value = "new_password"
                  onChange = "OnChange"
                  placeholder='new_password'
                  className='w-full px-3 py-2 mt-1'
                />

              </div>
                
                
              {/* -------New Password Confirmation------ */}


              <div className='mb-4 rounded-sm m-5 group focus:outline-none focus:border-black '>
                <label className='block text-xs text-gray-800 px-2 font-normal  group-focus-within:text-black
              group-focus-within:text-lg '>New Password Confirmation</label>
                <input 
                  type="new_password_confirmation"
                  name="new_password_confirmation"
                  value = "new_password_confirmation"
                  onChange = "OnChange"
                  placeholder='new_password_confirmation'
                  className='w-full px-3 py-2 mt-1'
                />
              </div>



              {/* submit  */}
              <button type='submit' className='w-full bg-black text-white py-2 text-sm hover:bg-gray-900 mx-5 rounded-full hover:text-xl'>
                PROCEED

              </button>
            </div>
          </form>

        </div>
        
      </div>
   </>
   
  )
}

export default ForgotPassword
