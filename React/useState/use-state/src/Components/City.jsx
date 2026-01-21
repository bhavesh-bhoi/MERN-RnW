// import { useState } from "react";

// function City() {
//   const [city, setCity] = useState();
//   return (
//     <div>
//       <hr />
//       <h1>Dropdown Example</h1>

//       <h3>Selected City : {city}</h3>

//       <select
//         name=""
//         id=""
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       >
//         <option value="" selected disabled>
//           Select City
//         </option>
//         <option value="Mumbai">Mumbai</option>
//         <option value="Banglore">Banglore</option>
//         <option value="Delhi">Delhi</option>
//         <option value="Ahemdabad">Ahemdabad</option>
//         <option value="Gudgaon">Gudgaon</option>
//         <option value="Hydrabad">Hydrabad</option>
//       </select>
//     </div>
//   );
// }

// export default City;

import { useState } from "react";

function City() {
  const city = [
    "Mumbai",
    "Banglore",
    "Delhi",
    "Ahemdabad",
    "Gudgaon",
    "Hydrabad",
    "Other",
  ];
  const [index, setIndex] = useState(0);
  return (
    <div>
      <hr />
      <h1>Dropdown Example</h1>

      <h3>
        Selected City :{" "}
        {city[index] === "Other" ? alert("No City Available") : city[index]}
      </h3>

      <button onClick={() => setIndex((prev) => (prev + 1) % city.length)}>
        Change City
      </button>
    </div>
  );
}

export default City;
