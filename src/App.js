import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RecentActivityList from "./LoginAttemptList";

const testUsers = [
  { login: "user1", password: "pass1" },
  { login: "user2", password: "pass2" },
  { login: "user3", password: "pass3" }
];

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);

  const handleSubmit = (event) => {
    const login = event.login;
    const password = event.password;

    if (currentUser && currentUser.login === login) {
      setRecentActivity((prevRecentActivity) => [
        { login, success: false, type: "login" },
        ...prevRecentActivity,
      ]);
      alert("This user is already logged in. Please log out before trying to log in again.");
    }  else {
      const validUser = testUsers.find((user) => user.login === login && user.password === password);
      if (validUser) {
        setCurrentUser({ login, password });
        setRecentActivity((prevRecentActivity) => [
          { login, success: true, type: "login" },
          ...prevRecentActivity,
        ]);
      } else {
        setRecentActivity((prevRecentActivity) => [
          { login, success: false, type: "login" },
          ...prevRecentActivity,
        ]);
        alert("Invalid login or password. Please try again.");
      }
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();
    setCurrentUser(null);
    setRecentActivity((prevRecentActivity) => [
      { login: currentUser.login, success: true, type: "logout" },
      ...prevRecentActivity,
    ]);
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.login}!</p>
          <button onClick={handleLogout}>Logout</button>
          <RecentActivityList recentActivity={recentActivity} />
        </div>
      ) : (
        <LoginForm currentUser={currentUser}
          testUsernamesAndPasswords={testUsers}
          setCurrentUser={setCurrentUser}
          onSubmit={handleSubmit}
        />
      )}

    </div>
  );
};

export default App;