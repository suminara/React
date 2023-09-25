import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 비동기 작업을 수행하는 함수 (예: API 호출)
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('데이터를 불러오는 중 에러 발생: ', error);
        setLoading(false);
      }
    }

    fetchUsers();
  }, []); // 의존성 배열이 비어있으므로 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.

  return (
    <div>
      <h1>사용자 목록</h1>
      {loading ? (
        <p>데이터를 불러오는 중...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
