

const Filters = ({ 
    filter, 
    setFilter 
}) => {
    
  return (

    <div className="filters shadow container">
      <form>
        <div className="field">
          <label>Filter Expenses</label>

          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">-- All Categories --</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="home">Home</option>
            <option value="leisure">Leisure</option>
            <option value="miscellaneous">Miscellaneous Expenses</option>
            <option value="saving">Saving</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
