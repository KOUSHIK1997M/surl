import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Main/Home/Home'
import About from "./components/Main/About_Us/About";
import Blogs from "./components/Main/Blogs/Blogs";
import Careers from "./components/Main/Careers/Careers";
import Contacts from "./components/Main/Contacts_Us/Contacts";
import HelpCenter from "./components/Main/Help_Center/Help_Center";
import Investers from "./components/Main/Investers/Investers";
import NotFound from './components/PageNotFound/PageNotFound';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import datas from './LocalData/data.json'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path="/careers" exact element={<Careers />} />
        <Route path="/contact" exact element={<Contacts />} />
        <Route path="/help-center" exact element={<HelpCenter />} />
				<Route path="/investers" exact element={<Investers  />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer foonav={datas.foonav} />
    </BrowserRouter>
  );
}

export default App;
