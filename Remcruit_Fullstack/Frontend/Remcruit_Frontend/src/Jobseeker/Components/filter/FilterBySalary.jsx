import React, { useState } from 'react';
import './filtersalary.css';

const FilterbySalary = ({ onFilter }) => {
  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 100000 });

  const handleSalaryChange = (event) => {
    const newSalary = parseFloat(event.target.value);
    setSalaryRange({ ...salaryRange, min: newSalary });
  };

  return (
    <div className="filter-container">
      
      <div>
        <label>Salary:</label>
        <input
          type="range"
          min={0}
          max={100000}
          step={1000}
          value={salaryRange.min}
          onChange={handleSalaryChange}
        />
        <span>{salaryRange.min}</span> - <span>{salaryRange.max}</span>
      </div>
    </div>
  );
};

export default FilterbySalary;
