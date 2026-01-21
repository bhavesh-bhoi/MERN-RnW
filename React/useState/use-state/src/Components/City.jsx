import { useState } from "react";

function City() {
  const [city, setCity] = useState();
  return (
    <div>
      <hr />
      <h1>Dropdown Example</h1>

      <h3>Selected City : {city}</h3>

      <select
        name=""
        id=""
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="" selected>
          Select City
        </option>
        <option value="Mumbai">Mumbai</option>
        <option value="Banglore">Banglore</option>
        <option value="Delhi">Delhi</option>
        <option value="Ahemdabad">Ahemdabad</option>
        <option value="Gudgaon">Gudgaon</option>
        <option value="Hydrabad">Hydrabad</option>
      </select>
    </div>
  );
}

export default City;
