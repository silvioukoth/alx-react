import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'


const CourseList = () => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFisrtCell="Available Cousres" />
        <CousreList isHeader={true} textFirstCell="Course name" textSecondCell="credit" />
      </thead>
      <tbody>
        <CourseListRow isHeader={false} textFirstCell="ES6" tesxtSecondCell="60" />
        <CourseListRow isHeader={false} textFirstCell="webpack" textSecondCell="20" />
        <CourseListRow isHeader={false} textFirstCell="React" textSecondCell="40" />
      </tbody>
    </table>
  );
}