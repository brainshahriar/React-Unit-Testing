import React from "react";

const Form: React.FC = () => {
  return (
    <div data-testid="custom-id">
      <div>
        <label htmlFor="name">Email</label>
      </div>
      <div>
        <label htmlFor="bio">Password</label>
      </div>
      <input placeholder="Input" type="text" id="name" value="shahriar" onChange={()=>{}} />
      <input placeholder="Input Again" type="checkbox" id="terms" />
      <button type="submit">Confirm identity</button>
    </div>
  );
};

export default Form;
