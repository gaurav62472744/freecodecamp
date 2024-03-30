import React, { useState, useEffect } from 'react';
import './coursepage.css'; // Import CSS file

const Coursepage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch courses data
    const fetchCourses = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          throw new Error('Authorization token not found');
        }

        const response = await fetch('https://freecodecamp-gamma.vercel.app/courseRoute', {
          headers: {
            Authorization: token
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="course-container">
      <h2>Course Page</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="course-card-container">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p>Price: ${course.price}</p>
              <p>Duration: {course.Duration}</p>
              <p>Description: {course.description}</p>
              <p>Category: {course.category}</p>
              <p>Rating: {course.rating.rate}/5 ({course.rating.review} reviews)</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Coursepage;
