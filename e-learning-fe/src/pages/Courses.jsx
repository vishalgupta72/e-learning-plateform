import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';
import CourseDetail from './CourseDetail';
const Courses = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Navigation & Seamanship",
      description: "Master the fundamentals of maritime navigation and seamanship.",
      category: "Navigation",
      image: "https://bunny-wp-pullzone-stjik7d26w.b-cdn.net/wp-content/uploads/2021/01/IMG-1450-edited-2048x1152.jpg",
      price: "$199",
      videos: 10,
      lessons: 6,
    },
    {
      id: 2,
      title: "Maritime Safety",
      description: "Learn the essential safety protocols and regulations in the maritime industry.",
      category: "Safety",
      image: "https://wp-website.safetyculture.com/wp-content/uploads/sites/3/2023/11/Maritime-Safety-featured.jpg",
      price: "$149",
      videos: 12,
      lessons: 4,
    },
    {
      id: 3,
      title: "Engine Room Management",
      description: "Gain in-depth knowledge of engine room operations and maintenance.",
      category: "Engineering",
      image: "https://www.girikmaritime.com/wp-content/uploads/2023/05/ERRM-1Image.jpg",
      price: "$299",
      videos: 8,
      lessons: 10,
    },
    {
      id: 4,
      title: "Maritime Law",
      description: "Understand the legal aspects of maritime operations.",
      category: "Law",
      image: "https://blog.seaplify.com/wp-content/uploads/2023/12/Maritime-Law-Principles-1600x800.webp",
      price: "$249",
      videos: 9,
      lessons: 7,
    },
    {
      id: 5,
      title: "Environmental Awareness",
      description: "Learn about marine environmental regulations and practices.",
      category: "Environment",
      image: "https://miro.medium.com/v2/resize:fit:1000/1*Cnb77NWpiIMBWgC9ChPW2w.jpeg",
      price: "$99",
      videos: 6,
      lessons: 5,
    },
  ];

  return (
    <div className="courses-container">
      <header className="courses-header">
        <h1>Our Courses</h1>
        <p>Explore our wide range of courses designed to enhance your maritime skills and knowledge.</p>
      </header>

      <section className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-details">
                <p><strong>Category:</strong> {course.category}</p>
                <p><strong>Videos:</strong> {course.videos}</p>
                <p><strong>Lessons:</strong> {course.lessons}</p>
                <div className="course-price">{course.price}</div>
              </div>
              
              <Link to={`/course/${course.id}`} className="course-button">Learn More</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Courses;
