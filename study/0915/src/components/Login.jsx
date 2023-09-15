import { useState } from "react";

export default function Login({ onLogin }) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
  
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (id === "" || pw === "") {
          alert("아이디 또는 비밀번호를 입력하세요.");
        } else {
            onLogin(id, pw);
        }
      };
  
    const handleLoginInput = (e) => {
      setId(e.target.value)
    };
  
    const handlePasswordInput = (e) => {
      setPw(e.target.value)
    };

    return (
        <form onSubmit={handleLoginSubmit}>
          <label>
            아이디 : <input type="text" onChange={handleLoginInput} />
          </label>
          <br/>
          <label>
            비밀번호 :
            <input type="password" onChange={handlePasswordInput} />
          </label>
          <button type="submit">로그인</button>
        </form>
      );
}
