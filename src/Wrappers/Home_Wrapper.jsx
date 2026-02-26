import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Home_Wrapper = () => {
  return (
    <div>
      
      <NavBar/>
      <Outlet />
      
    </div>
  )
}

export default Home_Wrapper;