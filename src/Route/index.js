import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Component/Layout/Index";
import Analytics from "../Pages/Analytics/Index";
import UploadBasicInformation from "../Pages/Authentication/BasicInformation";
import ChoosePlans from "../Pages/Authentication/Chooseplans";
import Login from "../Pages/Authentication/login";
import Register from "../Pages/Authentication/register";
import UploadCertifications from "../Pages/Authentication/uploadCertifications";
import UploadProfessionalInfo from "../Pages/Authentication/uploadProfessionalinfo";
import Chats from "../Pages/Chats/Index";
import CoTeacher from "../Pages/Co-Teacher/Index";
import Coteacheradd from "../Pages/Coteacheradd/Index";
import AllCourses from "../Pages/Courses/AllCourses/AllCourses";
import CourseOverview from "../Pages/Courses/CourseOverview";
import Notifications from "../Pages/Courses/CourseOverview/Notifications/Notifications";
import Dashboard from "../Pages/Dashboard/index";
import AllScheduled from "../Pages/LiveCoachingCall/AllScheduled";
import ChargePerHour from "../Pages/LiveCoachingCall/ChargePerHour";
import HourPerDay from "../Pages/LiveCoachingCall/HourPerDay";
import SetupLivecoachingCall from "../Pages/LiveCoachingCall/Index";
import ScheduleDay from "../Pages/LiveCoachingCall/ScheduledDay";
import Daylist from "../Pages/LiveCoachingCall/Daylist";
import MettingToDo from "../Pages/MettingToDo/Index";
import Requests from "../Pages/Request/Index";
import ProfileLandingPage from "../Pages/Settings/Landing-Page-Design/Index";
import Notification from "../Pages/Settings/Notification/Index";
import Personal_Info from "../Pages/Settings/Personal-Info/Index";
import PrivacyAndPlans from "../Pages/Settings/Privacy & Plans/Index";
import StudentEnrollmentList from "../Pages/StudentEnrollment/StudentEnrollment";
import EnrolledStudentProfile from "../Pages/StudentProfile/Index";
import TeachersProfile from "../Pages/TeacherProfile/Index";
import UploadNewCourse from "../Pages/UploadNewCourse/Index";
import QuizBox from "../Pages/UploadNewCourse/Quiz/QuizBox/Quizbox";
import QuizQuestion from "../Pages/UploadNewCourse/Quiz/QuizQuestion/Index";
import WeeklyChoachingCall from "../Pages/WeeklyChoachingCall/Index";
import PrivateRoute from "./PrivateRoute";
import AddQuiz from "../Pages/UploadNewCourse/Quiz/AddQuiz/AddQuiz";
import EditQuiz from "../Pages/UploadNewCourse/Quiz/QuizBox/EditQuiz";
import EditQuestion from "../Pages/UploadNewCourse/Quiz/QuizQuestion/EditQuestion";
import CourseInfo from "../Pages/Courses/CourseOverview/CourseInfo/CourseInfo";
import AllQuiz from "../Pages/Courses/CourseOverview/Quiz/AllQuiz";
import QandA from "../Pages/Courses/CourseOverview/Q&A/Q&A";
import Announcement from "../Pages/Courses/CourseOverview/Announcement/Announcement";
import Overview from "../Pages/Courses/CourseOverview/Overview";
import RootPath from "./RootPath";
import QuestionList from "../Pages/Courses/CourseOverview/Q&A/QuestionList";
import AllReply from "../Pages/Courses/CourseOverview/Q&A/AllReply";
import EventLayout from "../Component/Layout/EventLayout";
import VideoCalling from "../Pages/VideoCalling/Index";
import LandingPage from "../Pages/LandingPage/Index";
import Home from "../Pages/Home/Index";
import Createevents from "../Pages/Events/Createevent";
import Showevents from "../Pages/Events/Showevent";
// import Sessionsnormalevent from "../Pages/Events/Sessionsnormalevent";
import Sessionsnormalevent from "../Pages/Events/Sessionsnormalevent";
import Boothadd from "../Pages/Events/Boothadd";
export default function IndexRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPath />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register/:id" element={<Register />} />
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route path="/choose_plans" element={<ChoosePlans />} />
          <Route path="/upload_basic_information" element={<UploadBasicInformation />} />
          <Route path="/upload_professional_info" element={<UploadProfessionalInfo />} />

          <Route path="/upload_certification" element={<UploadCertifications />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/createevents" element={<Createevents />} />
              <Route path="/manage-events" element={<Showevents />} />
              <Route path="/sessionsnormalevent" element={<Sessionsnormalevent />} />
              <Route path="/add-event-booths" element={<Boothadd />} />

              <Route path="/" element={<RootPath />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/all-courses" element={<AllCourses />} />
              <Route path="/course_overview/:slug" element={<CourseOverview />}>
                <Route index element={<Overview />} />
                <Route path="overview" element={<Overview />} />
                <Route path="course_info" element={<CourseInfo />} />
                <Route path="quiz" element={<AllQuiz />} />
                <Route path="add-quiz" element={<QuizBox />} />
                <Route path="Q&A" element={<QandA />}>
                  <Route index element={<QuestionList />} />
                  <Route path="all_reply/:id" element={<AllReply />} />
                </Route>
                <Route path="annoucement" element={<Announcement />} />
                <Route path="notification" element={<Notifications />} />
              </Route>
              <Route path="/add_course/" element={<UploadNewCourse />}>
                <Route index element={<AddQuiz />} />
                <Route path="add-quiz" element={<QuizBox />} />
                <Route path="add-quiz/:id" element={<QuizQuestion />} />
                <Route path="edit-quiz/:id" element={<EditQuiz />} />
                <Route path="edit-question/:id" element={<EditQuestion />} />
              </Route>

              {/* <Route path="/quiz_question" element={<QuizQuestion/>}/> */}
              <Route path="/student_enrollment_list" element={<StudentEnrollmentList />} />
              <Route path="/enrolled_student_profile/:id" element={<EnrolledStudentProfile />} />
              <Route path="/live_coaching_call" element={<SetupLivecoachingCall />} />
              <Route path="/hour_per_day" element={<HourPerDay />} />
              <Route path="/charge_per_hour" element={<ChargePerHour />} />
              <Route path="/scheduled_day" element={<ScheduleDay />} />
              <Route path="/Daylist" element={<Daylist />} />
              <Route path="/all_scheduled_day" element={<AllScheduled />} />
              <Route path="/metting_to_do" element={<MettingToDo />} />
              <Route path="/chat" element={<Chats />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/co_teachers" element={<CoTeacher />} />
              <Route path="/coteacheradd" element={<Coteacheradd />} />
              <Route path="/co_teachers/teacher_profile/:id" element={<TeachersProfile />} />

              <Route path="/weekly_live_chocaing" element={<WeeklyChoachingCall />} />
              <Route path="/personal_info" element={<Personal_Info />} />
              <Route path="/notification" element={<Notification />} />

              <Route path="/privacy_and_plans" element={<PrivacyAndPlans />} />
              <Route path="/profile_landing_page" element={<ProfileLandingPage />} />
            </Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<EventLayout />}>
              <Route path="/video_calling/:id" element={<VideoCalling />} />
            </Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/edit_landing_page" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
