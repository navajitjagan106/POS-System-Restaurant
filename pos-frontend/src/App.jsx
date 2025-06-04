import { BrowserRouter as Router,Routes,Route, useLocation, Navigate } from "react-router-dom";
import { Autho,Home,Orders} from "./pages";
import Header from "./components/shared/Header";
import Tables from './pages/Tables';
import Menu from "./pages/Menu";
import { useSelector } from "react-redux";
import useLoadData from "./hooks/useLoadData";
import FullScreenLoader from "./components/shared/FullScreenLoader";
import DashBoard from "./pages/DashBoard";

function Layout(){
   const location=useLocation()
    const isLoading=useLoadData();
  const hideheaderRoute=["/auth"]
  const {isAuth}=useSelector(state=>state.user);
  
  if(isLoading) return <FullScreenLoader/>
  return(
    <>
   {!hideheaderRoute.includes(location.pathname)&&<Header/>}
        <Routes>
        <Route path ="/" element={<ProtectedRoutes>
          <Home />
        </ProtectedRoutes>}/>

        <Route path ="/auth" element={isAuth?<Navigate to="/"/>:<Autho />}/>

        <Route path ="/orders" element={<ProtectedRoutes>
          <Orders />
        </ProtectedRoutes>}/>

        <Route path="/tables" element={<ProtectedRoutes>
          <Tables/>
        </ProtectedRoutes>}/>

        <Route path="/menu" element={
      <ProtectedRoutes>
         <Menu/>
        </ProtectedRoutes>}/>

         <Route path="/dashboard" element={
      <ProtectedRoutes>
         <DashBoard/>
        </ProtectedRoutes>}/>

        <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
        </>
  )
}
function ProtectedRoutes({children}){
  const{isAuth}=useSelector(state=>state.user)
  if(!isAuth){
    return <Navigate to="/auth"/>
  }
  return children
}


function App() {
  return (
    <>
      <Router>
        <Layout/>
      </Router>
    </>
  )
}

export default App
