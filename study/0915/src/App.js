import Login from "./components/Login";
import Homepage from "./components/Homepage";
import { useState } from "react";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (id, pw) => {
    if (id === user.idUser && pw === user.pwUser) {
      setIsLoggedIn(true); 
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.'); 
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Homepage />
      ) : (
        <Login onLogin={handleLogin} /> 
      )}
    </div>
  );
}

export default App;
