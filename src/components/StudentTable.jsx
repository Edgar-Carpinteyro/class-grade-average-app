import React from "react";

export default function StudentTable({ studentData }) {
    return (
      <tbody key="tableBody">
        {studentData.map((student) => (
          <tr key={student.name}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.grade_level}</td>
            <td>{student.grade_average}</td>
          </tr>
        ))}
      </tbody>
    );
  }