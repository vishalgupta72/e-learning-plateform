import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import "./MyProgress.css";
import { Circle } from "rc-progress";

const MyProgress = () => {
  const percent = 50;

  const getStrokeColor = (percent) => {
    if (percent < 20) return "#FF0000"; // Red for less than 20%
    if (percent <= 60) return "#FFFF00"; // Yellow for 20% to 60%
    return "#00FF00"; // Green for greater than 60%
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h1>Progress</h1>
      </div>

      <div className="progress-grid">
        <div className="progress-card">
          <h2>Statistics</h2>
          <div className="statistics-card">
            <div className="circle-wrapper">
              <Circle
                percent={percent}
                strokeWidth={4}
                trailWidth={4}
                strokeColor={getStrokeColor(percent)}
              />
              <div className="percentage-text">{percent}%</div>
            </div>
          </div>
          <div className="progress-text">
            <span>25% completed</span>
            <span>25% in progress</span>
            <span>50% to begin</span>
          </div>
        </div>

        <div className="progress-card skills-card">
          <h2>Skills</h2>
          <div className="skills-list">
            <img
              src="https://crowdforthink.com/assets/uploads/blogs/582d8348873b7e0fdfaa78320dd3b918.jpg"
              alt="Skill 1"
            />
            <img
              src="https://almablog-media.s3.ap-south-1.amazonaws.com/MERN_Stack_9437df2ba9_62af1dd3fc.png"
              alt="Skill 2"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7MbYziWmZARspWiNAlShKkZdDkfiKH5_Lw&s"
              alt="Skill 3"
            />
            {/* Add more skill icons as needed */}
          </div>
        </div>

        <div className="progress-card awards-card">
          <h2>Awards</h2>
          <div className="award-details">
            <FontAwesomeIcon icon={faTrophy} className="achievement-icon" />{" "}
            <div className="award-description">
              <p>Level</p>
              <span>
                Congratulations! You've reached a new level in the course:
                Maritime Basics.
              </span>
              <div className="progress-bar">
                <div className="progress-level" style={{ width: "60%" }}></div>
              </div>
              <p>60 / 100</p>
            </div>
          </div>
        </div>
      </div>

      <div className="courses-section">
        <h2>My Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <img
              src="https://bunny-wp-pullzone-stjik7d26w.b-cdn.net/wp-content/uploads/2021/01/IMG-1450-edited-2048x1152.jpg"
              alt="Navigation & Seamanship"
              className="course-image"
            />
            <h3>Navigation & Seamanship</h3>
            <p>10 videos | 6 lessons</p>
            <button className="start-button">Start</button>
          </div>
          <div className="course-card">
            <img
              src="https://wp-website.safetyculture.com/wp-content/uploads/sites/3/2023/11/Maritime-Safety-featured.jpg"
              alt="Maritime Safety"
              className="course-image"
            />
            <h3>Maritime Safety</h3>
            <p>12 videos | 4 lessons</p>
            <button className="start-button">Start</button>
          </div>
          <div className="course-card">
            <img
              src="https://www.girikmaritime.com/wp-content/uploads/2023/05/ERRM-1Image.jpg"
              alt="Engine Room Management"
              className="course-image"
            />
            <h3>Engine Room Management</h3>
            <p>6 videos | 12 lessons</p>
            <button className="start-button">Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProgress;
