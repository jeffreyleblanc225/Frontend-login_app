import React from "react";
import "./LoginAttemptList.css";

const LoginAttemptList = (props) => {
  const { recentActivity } = props;

  return (
    <div className="Attempt-List-Main">
      <ul>
        {recentActivity.map((event, index) => (
          <li key={index} className={event.success ? "success" : "failure"}>
            {event.type === "login"
              ? event.success
                ? event.login + " logged in successfully"
                : event.login + " failed to log in"
              : event.login + " logged out successfully"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoginAttemptList;