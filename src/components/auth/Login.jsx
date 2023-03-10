import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { loginValidation } from "../../helpers/validate";
import Instance from "../../config/Instance";

function Login() {
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      await Instance.post("/scout/scoutLogin", { values })
        .then((res) => {
          let { token } = res.data;
          const scout=res.data.scout.status
          localStorage.setItem("token", token);
          localStorage.setItem("fullname", res.data.scout.fullname);
          localStorage.setItem("scoutId", res.data.scout._id);
          if(scout=="Pending"){
              navigate("/register");
          }else{
              navigate("/home",{replace:true});
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.error);
        });
    },
  });

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-[url('/images/playerlogin.jpg')] ">
      <Toaster position="top-center"></Toaster>
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          Get started today
        </h1>
        

        <form
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
          onClick={Formik.handleSubmit}
          >
          <p className="text-lg font-medium">Sign in to your account</p>

          <div>
            <label for="email" className="text-sm font-medium">
              Email
            </label>

            <div className="relative mt-1">
              <input
                {...Formik.getFieldProps("email")}
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" className="text-sm font-medium">
              Password
            </label>

            <div className="relative mt-1">
              <input
                {...Formik.getFieldProps("password")}
                type="password"
                id="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <a
              onClick={() => {
                navigate("/signup");
              }}
              className="underline"
              href=""
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
