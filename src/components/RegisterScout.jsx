import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Instance from "../config/Instance";
const token = localStorage.getItem("token");

function RegisterScout() {
  const [profile, setProfile] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [dateOfBirth, setDataofbirth] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [experience, setExperience] = useState("");
  const [currentClub, setCurrentClub] = useState("");
  const [pastClub, setPastclub] = useState("");
  const [language, setLanguage] = useState("");
  const [awards, setAwards] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    showProfile();
  }, []);

  const showProfile = async () => {
    await Instance
      .get("/scout/showProfile", {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then((res) => {
        res.data.updation && toast.success("updation successful");
        setDataofbirth(res.data.scoutData.dateOfBirth);
        setAge(res.data.scoutData.age);
        setProfileUrl(res.data.scoutData.profileUrl);
        setNationality(res.data.scoutData.nationality);
        setExperience(res.data.scoutData.experience);
        setCurrentClub(res.data.scoutData.currentClub);
        setPastclub(res.data.scoutData.pastClub);
        setLanguage(res.data.scoutData.language);
        setAwards(res.data.scoutData.awards);
        setAddress(res.data.scoutData.address);
        setDescription(res.data.scoutData.description);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
      });
  };

  //creating area

  const cloudAPI = "dqrsgqgot";
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", profile);
    formData.append("upload_preset", "fotwebcloud");
    await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`,
        formData
      )
      .then(async (res) => {
        const profileUrl = res.data.secure_url;
        const token = localStorage.getItem("token");
        await Instance
          .post(
            `/scout/scoutRegister`,
            {
              profileUrl,
              dateOfBirth,
              age,
              nationality,
              experience,
              currentClub,
              pastClub,
              language,
              awards,
              address,
              description,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            if (response.data.scout.status=="Pending") {
              navigate("/waiting",{replace:true});
            }else{
              toast.success("Profile Added Successfully");
              navigate("/home")
            }
          })
          .catch((error) => {
            if (error.response) {
              toast.error(error.response.data.error);
            } else {
              toast.error(error.message);
            }
          });
      });
  };
  return (
    <div className="max-w-2xl mx-auto bg-white mt-3 mb-3 p-10 outline-double">
      <Toaster position="top-center"></Toaster>
      <h1 className="text-4xl text-opacity-10 ">Pleace fill the form</h1>
      <p className="text-sm mt-2">
        A football scout attends football matches on the behalf of clubs to
        collect intelligence
      </p>
      <form onSubmit={handleUpload}>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-black">
              Profile
            </label>
            <div className="mt-1 flex justify-center px-3  pb-4 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="flex justify-center">
                  <img
                    class="w-20 border-4 border-white rounded-full"
                    src={profileUrl}
                    alt="Add"
                  />
                </div>{" "}
                <div className="flex text-sm text-gray-600">
                  <label
                    for="file-upload"
                    className="relative cursor-pointer bg-blackrounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="text-justify ">Upload a your photo</span>
                    <input
                      onChange={(e) => {
                        setProfile(e.target.files[0]);
                      }}
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

  
          {dateOfBirth.length >1 ? (
                
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    Date of birth
                  </label>
                  <input
                    value={dateOfBirth}
                    onChange={(e) => {
                      setDataofbirth(e.target.value);
                    }}
                    id=""
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
              ) : (
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    Date of birth
                  </label>
                  <input
                    value={dateOfBirth}
                    onChange={(e) => {
                      setDataofbirth(e.target.value);
                    }}
                    id=""
                    type="date"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
              )}
          
   


          <div>
            <label
              for="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Age
            </label>
            <input
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="nationality"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nationality
            </label>
            <input
              value={nationality}
              onChange={(e) => {
                setNationality(e.target.value);
              }}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="experience"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Scouting Experience
            </label>
            <input
              value={experience}
              onChange={(e) => {
                setExperience(e.target.value);
              }}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="years"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Current club
            </label>
            <input
              value={currentClub}
              onChange={(e) => {
                setCurrentClub(e.target.value);
              }}
              type="text"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="past club"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Past Club
            </label>
            <input
              value={pastClub}
              onChange={(e) => {
                setPastclub(e.target.value);
              }}
              type="text"
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="past club"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Languages
            </label>
            <input
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
              type="text"
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="Awards"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Awards
          </label>
          <input
            value={awards}
            onChange={(e) => {
              setAwards(e.target.value);
            }}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            className="text-dark dark:text-gray-200"
            for="passwordConfirmation"
          >
            ADDRESS
          </label>
          <textarea
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            id="textarea"
            type="textarea"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>
        <div>
          <label
            className="text-dark dark:text-gray-200"
            for="passwordConfirmation"
          >
            About you
          </label>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            id="textarea"
            type="textarea"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>
        <div className="flex items-start mb-6"></div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <div className="flex items-end mb-6"></div>
      </form>
      {/* <button
        onClick={() => {
          navigate("/home");
        }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Skip
      </button> */}
    </div>
  );
}

export default RegisterScout;
