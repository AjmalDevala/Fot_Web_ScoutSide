import axios from "axios"
import { Navigate } from "react-router-dom"
import Instance from "./src/config/Instance"

const protectedRoutes = ({ children }) => {
    const token = localStorage.getItem("token")
    if(token){
        Instance
        .get("/scout/verifyScout",
        {headers : {
          Authorization : "Bearer " + localStorage.getItem("token"),
      }})
        .then((response) => { 
          const scout = response.data.scout
          if(scout.status === "Pending"){
            localStorage.clear()
            window.location.reload()
            return <Navigate to = {"/"} replace = {true}></Navigate>

          }else{
            return children
          }
        })
       
    }else{

        return <Navigate to = {"/"} replace = {true}></Navigate>
    }

   return children
    
}

export default protectedRoutes