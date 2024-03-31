import { useState } from "react";
import StudentData from "./StudentData";
import StudentTable from "./StudentTable";
import ClassAverage from "./ClassAverage";

function UpdatedGrade() {
    const [updatedData, setUpdatedData] = useState([...StudentData]);
  
    function postGrade() {
      const studentId = parseInt(prompt("Please enter the student's ID:"));
      const newGrade = parseFloat(prompt("Enter the new grade:"));
  
      const updatedStudents = updatedData.map((student) => {
        if (student.id === studentId) {
          return { ...student, grade_average: newGrade };
        }
        return student;
      });
  
      setUpdatedData(updatedStudents);
    }
  
    return (
      <div>
        <h1>Class Grade Average</h1>
        <table id="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Grade Level</th>
              <th>Grade Average</th>
            </tr>
          </thead>
          <StudentTable studentData={updatedData} />
        </table>

        <button onClick={postGrade}>Update Grade</button>

        <ClassAverage updatedData={updatedData}/>

      </div>
    );
  }

export default UpdatedGrade;