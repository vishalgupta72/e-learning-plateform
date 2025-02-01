import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';

import {useNavigate} from 'react-router-dom'
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import MyProgress from './pages/MyProgress';
import Contact from './pages/Contact';
// import {useDispatch, useSelector} from 'react-redux'

function App() {
  function DynamicRoutic(){
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    // const user = useSelector(state=>state.userReducer); 
    // console.log(user)

    useEffect(() => {
      const userData = localStorage.getItem("user");

      if(userData){
        // dispatch({type: "LOGIN_SUCCESS", payload: userData});
        navigate("/");
      }
      else{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        // dispatch({type: "LOGIN_ERROR"});
        navigate("/login");
      }
    }, []);

    return(
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/singup" element={<Signup />}></Route>

      <Route exact path="/courses" element={<Courses />}></Route>
      <Route path="/course/:courseId" element={<CourseDetail />} />
      <Route exact path="/myprogess" element={<MyProgress />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
    </Routes>
    )

  }
  return (
    <div className='bg-color'>
    
      <Router>
      <Navbar />
       <DynamicRoutic/>
      </Router>
    </div>
  );
}

export default App;
