import useInput from "../hooks/useInput";

export default function UserForm() {
  const [firstName, bindFirstName, resetFirstName] =
    useInput("");

  const [lastName, bindLastName, resetLastName] =
    useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            autoFocus={true}
            // Replace value={firstName} and onChange={e => setFistName(e.target.value)}
            {...bindFirstName}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            // Replace value={lastName} and onChange={e => setLastName(e.target.value)}
            {...bindLastName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
