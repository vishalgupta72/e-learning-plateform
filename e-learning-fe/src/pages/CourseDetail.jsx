import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css'

const CourseDetail = (props) => {
  const { courseId } = useParams();

  // Fetch or look up the course by courseId from a data source
  const course = {
    id: 1,
    title: "Navigation & Seamanship",
    description: "Master the fundamentals of maritime navigation and seamanship.",
    category: "Navigation",
    image: "https://bunny-wp-pullzone-stjik7d26w.b-cdn.net/wp-content/uploads/2021/01/IMG-1450-edited-2048x1152.jpg",
    price: "$199",
    videos: 10,
    lessons: 6,
    details: "This course offers an in-depth understanding of maritime navigation techniques, including the use of modern navigational aids, charts, and piloting techniques..."
  };

  return (
    <div className="course-detail-container">
      <img src={props.img} alt={props.title} className="course-detail-image" />
      <div className="course-detail-info">
        <h1>{props.title}</h1>
        <p><strong>Category:</strong> {props.category}</p>
        <p><strong>Price:</strong> {props.price}</p>
        <p><strong>Videos:</strong> {props.videos}</p>
        <p><strong>Lessons:</strong> {props.lessons}</p>
        <p>{props.details}</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default CourseDetail;
