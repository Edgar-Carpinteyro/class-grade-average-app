import React, { useState, useEffect } from 'react';

function ClassAverage({ updatedData }) {
    // Calculates class average
    const calculateClassAverage = () => {
        let average = 0;

        for (let student of updatedData) {
        //Adds the student averages and divides it by the number of students
        average += student.grade_average / updatedData.length;
      }
      return average;
    };


    const [classAverage, setClassAverage] = useState(null);

    useEffect(() => {
      const average = calculateClassAverage();
      setClassAverage(average);
    }, [updatedData]);

    // When button is clicked, update class average state
    // const handleCalculateAverage = () => {
    //     const average = calculateClassAverage();
    //     setClassAverage(average);
    // };

    return (
      <div>
          {/* <button onClick={handleCalculateAverage}>Calculate Class Average</button> */}
          {classAverage && <h3>The classroom average is {classAverage}</h3>}
      </div> 
    );
}

export default ClassAverage