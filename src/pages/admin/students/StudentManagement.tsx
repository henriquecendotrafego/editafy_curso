import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentList from './StudentList';
import StudentDetails from './StudentDetails';
import StudentProgress from './StudentProgress';

export default function StudentManagement() {
  return (
    <Routes>
      <Route index element={<StudentList />} />
      <Route path=":id" element={<StudentDetails />} />
      <Route path=":id/progress" element={<StudentProgress />} />
    </Routes>
  );
}