import Login from "./components/Container/Login/LoginComponent";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Container/Main/MainComponent";
import Calendar from "./components/Container/Calendar/CalendarComponent";
import TopNav from "./components/Container/Nav/TopNavComponent";
import Planner from "./components/Container/Planner/PlannerComponent";
import MainCam from "./components/Container/MainCam/MainCamera";
import UserPageMain from "./components/Container/UserPageMain/UserPageMainComponent";
import UserPageEdit from "./components/Container/UserPageEdit/UserPageEditComponent";
import UserMeasurement from "./components/Container/UserMeasurement/UserMeasurementComponent";
import StudyGroup from "./components/Container/StudyGroup/studyGroup";
import CalendarBody from "./components/Container/Calendar/CalendarBody";
import UserDday from "./components/Container/UserDday/UserDdayComponent";
import RoomCreate from "./components/Container/StudyGroup/roomCreate";
import RoomUpdate from "./components/Container/StudyGroup/roomUpdate";
import UserPose from "./components/Container/UserPose/UserPoseComponent"
import { BottomBody } from "./components/Presenter/Nav/TopNavPresenter";
import StudyRoom from "./components/Container/StudyGroup/StudyRoom";


function App() {
  return (
    <>
      <TopNav />
      <BottomBody>
        <Routes>  {/* Router 설정하기위해 기존의 App파일을 다음과 같이 설정함  */}
          <Route exact path="/" element={<Main/>} />
          <Route path="/Calendar" element={<Calendar/>} />
          <Route path="/Planner" element={< Planner/>}/>
          <Route path="/MainCam" element={< MainCam/>}/>
          <Route path="/UserPageMain" element={<UserPageMain/>}/>
          <Route path="/UserPageEdit" element={<UserPageEdit/>}/>
          <Route path="/UserMeasurement" element={<UserMeasurement/>}/>
          <Route path="/StudyGroup" element={<StudyGroup/>}/>
          <Route path="/RoomCreate" element={<RoomCreate/>}/>
          <Route path="/StudyGroup/RoomUpdate" element={<RoomUpdate/>}/>
          <Route path="/UserDday" element={<UserDday/>}/>
          <Route path="/UserPose" element={<UserPose/>}/>
          <Route path="/StudyRoom/:roomID" element={<StudyRoom />} />
          <Route path="/Login" element={<Login />}/>
        </Routes>
      </BottomBody>

      {/* <ChakraProvider>
        <Main/>
        <Login />
      </ChakraProvider> */}
    </>
  );
}

export default App;
