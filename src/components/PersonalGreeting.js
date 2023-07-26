// import React, { useState } from 'react';

// const PersonalGreeting= () => {
//   const [name, setName] = useState('');
//   const [greeting, setGreeting] = useState('');

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setGreeting(`Hello, ${name}!`);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter your name:
//           <input type="text" value={name} onChange={handleChange} />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//       {greeting && <p>{greeting}</p>}
//     </div>
//   );
// };

// export default PersonalGreeting;



import React,{useState} from "react";

const App = () => {
  let [inputtext, setinputtext]=useState();
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter Your name:</p>
        <input type="text" onChange={(e)=>(setinputtext(e.target.value))}/>


        {
          inputtext && <p>Hello {inputtext}!</p>
        }
    </div>
  )
}

export default App