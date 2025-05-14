import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Autho,Home,Orders} from "./pages";
import Header from "./components/shared/Header";
import Tables from './pages/Tables';
import Menu from "./pages/Menu";

function App() {
  

  return (
    <>
    <Header/>
      <Router>
        <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/auth" element={<Autho />}/>
        <Route path ="/orders" element={<Orders />}/>
        <Route path="/tables" element={<Tables/>}/>
        <Route path="/menu" element={<Menu/>}/>

        <Route path="*" element={<div>Not Found</div>}/>

        </Routes>
      </Router>
    
    </>
  )
}

export default App
