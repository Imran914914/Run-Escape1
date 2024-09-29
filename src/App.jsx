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
      {toggleCode ? (
        <Code emailValaue={email} />
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
      )}
    </>
  );
}

export default App;
