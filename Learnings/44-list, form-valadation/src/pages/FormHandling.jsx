//FIRST METHOD -1

// import React from "react";

// function FormHandling() {

//   const SubmitHandler = (e) => {
//     e.preventDefault();
//     const {name, email, number} = e.target

//     const user = {
//       name: name.value,
//       email: email.value,
//       number: number.value,
//     };
//     console.log(user);
//   };

//   return (
//     <form onSubmit={SubmitHandler}>
//       <input  type="text" name="name" placeholder="Enter Name" autoFocus />
//       <br />
//       <br />
//       <input type="email" name="email" placeholder="Enter Email" /> <br />
//       <br />
//       <input type="number" name="number" placeholder="mobile" />
//       <br /> <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormHandling;

//SECOND METHOD-2
import React from "react";
import { useState } from "react";

function FormHandling() {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(FormData);
  };

  return (
    <form onSubmit={SubmitHandler}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={FormData.name}
        onChange={handleInputChange}
        required
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={FormData.email}
        onChange={handleInputChange}
        required
      />{" "}
      <br />
      <br />
      <input
        type="number"
        name="number"
        placeholder="mobile"
        value={FormData.number}
        onChange={handleInputChange}
        required
      />
      <br /> <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormHandling;
