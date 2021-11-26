import { useState } from "react";

export default function HookCounterThree() {
  // state variable can be a string, number, boolean, an object or even an array.
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <form>
      <label>Name:</label>

      {/* 
      Class State merged the state, but useState don't. We have to do manually

      <input
        type="text"
        value={name.firstName}
        onChange={(e) =>
          setName({ firstName: e.target.value })
        }
      />
      <label>Last Name:</label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) =>
          setName({ lastName: e.target.value })
        }
      />
     */}

      <input
        type="text"
        value={name.firstName}
        onChange={(e) =>
          setName({ ...name, firstName: e.target.value })
        }
      />
      <label>Last Name:</label>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) =>
          setName({ ...name, lastName: e.target.value })
        }
      />

      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>

      <p>{JSON.stringify(name)}</p>
    </form>
  );
}
