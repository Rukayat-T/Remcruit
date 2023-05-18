

const FilterByAvailability = () => {
  return (
    <div className="mb-5">
      <h1 className="py-2">
        {" "}
        <span className="text-purple">Availability</span>
      </h1>
      <div>
        <div className="flex items-center gap-8 mb-2">
          <label class="input-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>{" "}
          Remote
        </div>
        <div className="flex items-center gap-8 mb-2">
          <label class="input-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>{" "}
          Urgent
        </div>
        <div className="flex items-center gap-8">
          <label class="input-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>{" "}
          Full-Time
        </div>
      </div>
    </div>
  );
};

export default FilterByAvailability;
