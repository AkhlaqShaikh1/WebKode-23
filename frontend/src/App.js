import Calendar from "./components/calendar/Calendar";
import Membership from "./components/membership/Membership";
import RegistrationForm from "./components/register/RegistrationForm";
import AuthContextProvider from './Context/AuthContext'
import PrivateRoute from './components/Routing/PrivateRoute';
import Main from "./components/Home/Main";
import Home from "./components/GeneralScreens/Home"
import LoginScreen from "./components/AuthScreens/LoginScreen"
import AddStory from './components/StoryScreens/AddStory';
import DetailStory from './components/StoryScreens/DetailStory';
import Header from './components/GeneralScreens/Header';
import Footer from './components/GeneralScreens/Footer';
import Profile from './components/ProfileScreens/Profile';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import EventDetailPage from "./components/eventdetails/EventDetails";
import Communities from "./components/communities/Communities";
import NotFound from './components/GeneralScreens/NotFound';
function App() {

  return (
        <Router>

              <div className="App">
              <ToastContainer />
                    <Routes>
                          
                          <Route path="/" element={<LayoutsWithHeader />}>
                          <Route path='*' element={<NotFound />} />
                                <Route path='/blog' element={<PrivateRoute />}>
                                      <Route path='/blog' element={<Home />} />
                                </Route>


                                <Route exact path="/story/:slug" element={<DetailStory />} />

                                <Route exact path='/addstory' element={<PrivateRoute />}>
                                      <Route exact path='/addstory' element={<AddStory />} />
                                </Route>

                                <Route exact path='/profile' element={<PrivateRoute />}>
                                      <Route exact path='/profile' element={<Profile />} />
                                </Route>

                                

                                

                                <Route exact path='/story/:slug/like' element={<PrivateRoute />}>
                                      <Route exact path='/story/:slug/like' element={<DetailStory />} />
                                </Route>

                                

                                <Route exact path='/story/:slug/delete' element={<PrivateRoute />}>
                                      <Route exact path='/story/:slug/delete' element={<DetailStory />} />
                                </Route>
                                <Route exact path='/story/:slug/addComment' element={<PrivateRoute />}>
                                      <Route exact path='/story/:slug/addComment' element={<DetailStory />} />
                                </Route>

                                {/*  */}

                          </Route>

                          <Route exact path="/login" element={<LoginScreen />} />
                          <Route index element={<Main/>}></Route>
                        <Route exact path="/membership" element={<Membership/>}></Route>
                        <Route exact path='/registeration/:type' element={<RegistrationForm/>}></Route>
                        <Route exact path="/calendar" element={<Calendar/>}></Route>
                        <Route exact path="/leaderboard" element={<LeaderBoard/>}></Route>
                        <Route exact path="/leaderboard" element={<LeaderBoard/>}></Route>
                        <Route exact path="/event/detail" element={<EventDetailPage/>}></Route>
                        <Route exact path="/communities/:name" element={<Communities/>}></Route>



                    </Routes>

              </div>

        </Router>

  );

}

const LayoutsWithHeader = () => {
  return (
        <>
        <AuthContextProvider>
              <Header />
              {/* <NavBar/> */}
              <Outlet />
              <Footer /></AuthContextProvider>
        </>
  );
}
export default App;
