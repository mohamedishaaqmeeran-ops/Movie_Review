import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Pages/Footer";
const Home_Wrapper = () => {
  return (
    <div>

      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home_Wrapper;