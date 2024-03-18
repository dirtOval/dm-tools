const TableInfo = () => {
  //these top options are going to need to be
  //populated based on info about the table.
  //for instance, i'm going to need to make
  //a function that calculates what the dice
  //options are for a given table
  //e.g. 20 items on encounter table,
  //options are 1d20 or 2d10
  //
  return (
    <div className="table-info">

      <div className="table-option on-hit">
        <label htmlFor="selector-dice">On Hit:</label>
        <select id="selector-dice">
          <option selected>1d12 + 1d8</option>
          <option>2d10</option>
        </select>
      </div>

      <div className="table-option">
        <label htmlFor="freq-dc">1d20 on</label>
        <input type="number" id="freq-dc" value="18"/>
      </div>

      <div className="table-option">
        <span>Every <input type="number" value="1"/> Hours</span>
      </div>

      <div className="table-option table-lock">
        <label for="lock">Lock?</label>
        <input id="lock" type="checkbox" />
      </div>
    </div>
    
  )
}

export default TableInfo;