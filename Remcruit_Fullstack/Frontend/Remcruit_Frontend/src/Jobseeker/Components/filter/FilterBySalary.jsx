import { useState } from "react";

const FilterBySalary = () => {
  const [salary, setSalary] = useState(0);

  const handleInput = (e) => {
    setSalary(e.target.value);
  };

  return (
    <div className="mb-5">
      <h1 className="py-2">
        {" "}
        <span className="text-purple">Salary</span> : {salary},000
      </h1>
      <input
        type="range"
        min="0"
        max="100"
        value={salary}
        className="range range-xs range-warning md:w-96 lg:md:w-96 xl:w-96"
        onInput={handleInput}
      />
    </div>
  );
};

export default FilterBySalary;
