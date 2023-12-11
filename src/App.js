import { BrowserRouter } from "react-router-dom";
import MainHome from "./components/Home/MainHome/MainHome";

function App() {
  return (
    <section className="w-[96%] mx-auto" >
      <BrowserRouter >
      <MainHome />
      </BrowserRouter>
    </section>
  );
}

export default App;
