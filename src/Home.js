import { useState } from "react";

const Home = () => {
  //   let name = "Njonge";
  const [name, setName] = useState("Fred");
  const [age, setAge] = useState(21);
  //   A hook start with use

  const handleClick = () => {
    setName("Njonge");
    setAge(32);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Home;
