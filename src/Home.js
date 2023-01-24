const Home = () => {
  const handleClick = (e) => {
    console.log("hello, Njonge", e);
  };

  const handleClickAgain = (name, e) => {
    console.log(`hello ${name}`, e.target);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={(e) => handleClickAgain("Njonge Fred", e)}>
        Click me Again
      </button>
    </div>
  );
};

export default Home;
