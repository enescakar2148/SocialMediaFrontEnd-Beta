import React from "react";
import "../../css/global.css";
import "../../css/leftSection.css";
import pp1 from "../../images/pp_1.png";
import pp2 from "../../images/pp_2.png";

export default function LeftSection() {
  return (
    <div className="left-wrapper">
      {/* Teams */}
      <div className="teams-wrapper">
        <h1 id="teams-title">Teams</h1>
        <div className="teams-content">
          <div className="team"></div>
          <div className="team"></div>
          <div className="team"></div>
        </div>
      </div>

      {/* Friends */}
      <div className="friends-wrapper">
        <h1 id="friends-title">Friends</h1>
        <div className="friends-content">
          <div className="friend">
            <img src={pp1} className="friend-pp" alt="Friends Profile Image"/>
            <h3 className="friend-user-name">Emre Akın</h3>
          </div>
          <div className="friend">
            <img src={pp2} className="friend-pp" alt="Friends Profile Image"/>
            <h3 className="friend-user-name">Selman Köse</h3>
          </div>
        </div>
      </div>

      {/* Suggesiton for You */}
      <div className="suggestion-wrapper">
        <h1 id="suggestion-title">Suggestion For You</h1>
        <div className="suggestion-content">
          <div className="suggestion">
            <img src={pp1} className="suggestion-pp" alt="Profile Image"/>
            <h3 className="suggestion-user-name">Emre Akın</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
