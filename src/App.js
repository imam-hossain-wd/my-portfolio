import { BrowserRouter } from "react-router-dom";
import MainHome from "./components/Home/MainHome/MainHome";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <section className="w-full lg:w-[90%] mx-auto" >
      <BrowserRouter >
      <Toaster/>
      <MainHome />
      </BrowserRouter>
    </section>
  );
}

export default App;
