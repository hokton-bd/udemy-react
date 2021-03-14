// import { render } from "@testing-library/react";
import PropTypes from 'prop-types';

function App() {
  const profiles = [

    {
      name: "Taro",
      age: 10
    },

    {
      name: "Hokuto",
      age: 24
    },

  ]
  return (

    <div>
        {
          profiles.map((profile, index) => {
            return <User name={profile.name} age={profile.age} key={index} />
          })
        }
      </div>
    );

}

const User = (props) => {
     return <div>This is {props.name}, and I am {props.age} years old.</div>
    
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  
}

export default App;
