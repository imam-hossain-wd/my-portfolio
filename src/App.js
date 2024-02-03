import { BrowserRouter } from "react-router-dom";
import MainHome from "./components/Home/MainHome/MainHome";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/footer/Footer";

function App() {
  return (
      <BrowserRouter >
      <Toaster/>
      <div className="w-full lg:w-[90%] mx-auto">
      <MainHome />
      </div>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
