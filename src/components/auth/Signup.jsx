import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import  {siginupValidation} from "../../helpers/validate";
import Instance from "../../config/Instance";
function SignUp() {
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone:"",
      password: "",
    },
    validate :siginupValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      await Instance.post('/scout/scoutSignup',{values}).then((res)=>{
        navigate('/')
      }).catch((error)=>{
        console.log(error)
        toast.error(error.response.data.error)
      })
    },
  });
  return (
    <div>
     
        <Toaster position="top-center" ></Toaster>
      <body class="antialiased bg-gradient-to-br from-green-100 to-white">
        <div class="container px-6 mx-auto">
          <div class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
            <div class="flex flex-col w-full">
              <div>
                <svg
                  class="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="/src/assets/images/goly.png"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h1 class="text-5xl text-gray-800 font-bold">
                {" "}
                Your journey starts here
              </h1>
              <p class="w-5/12 mx-auto md:mx-0 text-gray-500">
                We Never Stop Dreaming Big{" "}
              </p>
            </div>
            <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
              <div class="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                <h2 class="text-2xl font-bold text-gray-800 text-left mb-5">
                Sign Up
                </h2>
                <form  class="w-full" onSubmit={Formik.handleSubmit}>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="username" class="text-gray-500 mb-2">
                      Username
                    </label>
                    <input
                    {...Formik.getFieldProps('fullname')}
                      type="fullname"
                      id="fullname"
                      placeholder="Please insert your username"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="email" class="text-gray-500 mb-2">
                      Enter Email
                    </label>
                    <input
                    {...Formik.getFieldProps('email')}
                      type="email"
                      id="email"
                      placeholder="Please insert your Email"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="phone" class="text-gray-500 mb-2">
                     Phone Number
                    </label>
                    <input
                    {...Formik.getFieldProps('phone')}
                      type="phone"
                      id="phone"
                      placeholder="Please insert your phone number"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="input" class="flex flex-col w-full my-5">
                    <label for="password" class="text-gray-500 mb-2">
                      Password
                    </label>
                    <input
                    {...Formik.getFieldProps('password')}
                      type="password"
                      id="password"
                      placeholder="Please insert your password"
                      class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                    />
                  </div>
                  <div id="button" class="flex flex-col w-full my-5">
                    <button
                      type="submit  "
                      class="w-full py-4 bg-green-600/50 hover:translate-x-3.5 rounded-lg text-green-100" 
                    >
                        Sign Up
                    </button>
                    <div class="flex justify-evenly mt-5">
                      {/* <a
                        href="#"
                        class="w-full text-center font-medium text-gray-500"
                      >
                        Recover password!
                      </a> */}
                      <a
                        href=""
                        onClick={()=>{navigate('/')}}
                        class="w-full text-center font-medium text-gray-500" 
                      >
                        alredy  have an account
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default SignUp;
