import "./App.css";
import PostJob from "./containners/Company/PostJob";
import Profile from "./containners/Company/Profile";
import Vacancies from "./containners/Company/Vacancies";
import Signin from "./containners/Signin/Signin";
import SignUp from "./containners/SignUp/SignUp";
import AllJobs from "./containners/Student/AllJobs";
import StudentProfile from "./containners/Student/StudentProfile";

function App() {
  return (
    <div className="App">
      {/* <Signin /> */}
      <SignUp />
      {/* <Vacancies /> */}
      {/* <Profile /> */}
      {/* <PostJob /> */}
      {/* <StudentProfile /> */}
      {/* <AllJobs /> */}
    </div>
  );
}

export default App;
