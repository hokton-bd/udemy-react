import { render } from "@testing-library/react";

function App() {
  return (
    <div>
      <Meow />
      <Meow />
      <Meow />
      <Meow />
    </div>
  );
}

const Meow = () => {
     return <div>Meow</div>
    
}

export default App;
