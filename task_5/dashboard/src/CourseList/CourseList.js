import React from 'react';
import CousreListRow from './CourseListRow';
import CourseShape from '.CourseShape';
import propTypes from 'prop-types';
import './CourseList.css';


const CourseList = ({ CourseList }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available Courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody id="CourseBody">
        // check if courses is empty
        {listCourses.length === 0 && (
          <tr>
            <td>
              No course avalaible yet
            </td>
          </tr>
        )}
        // render listCourses
        {listCourses.map(course => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
        ))}
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: propTypes.array
}

export default CousreLis;