import { useEffect, useState } from "react";
import Email from "./components/flow.jsx/Email";
import Password from "./components/flow.jsx/Password";
import Code from "./components/flow.jsx/Code";
import "./App.css";

function App() {
  const [togglePass, setTogglePass] = useState(false);

  const [toggleCode, setToggleCode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
      {toggleCode ? (
        <div className="bg">
          <Code 
            emailValue={email} 
          />
        </div>
=======
>>>>>>> Stashed changes
      {togglePass ? (
        <Password
          email={email}
          toggle={togglePass}
          setToggleCode={setTogglePass}
          password={password}
          setPassword={setPassword}
        />
<<<<<<< Updated upstream
=======
>>>>>>> 6d96c250b4edbb927fc7c624308432453dda5333
>>>>>>> Stashed changes
      ) : (
        <div className="bg">
          {toggleCode ? (
            <Code
              email={email}
              setToggle={setTogglePass}
              toggle={togglePass}
            />
          ) : (
            <Email
              email={email}
              setEmail={setEmail}
              toggle={toggleCode}
              setToggle={setToggleCode}
            />
          )}
        </div>
      )}
    </>
  );
}

export default App;
