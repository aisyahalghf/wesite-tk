import Navbar from "./Component/Navbar";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <div>
        <div className=" sticky top-0 bg-white shadow shadow-slate200 z-50 ">
          <Navbar />
        </div>
        <LandingPage />
        <div className=" bg-[#1a1a1a]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
