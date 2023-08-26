import React, { useState } from 'react';

function Buttoncheckbox() {
  // useState hook to maintain the checkbox status
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    console.log(event.target.checked)
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleCheckboxChange}
      />
      <label>Enable Button</label>

      <br />

      {/* Button is disabled if checkbox is not checked */}
      <button disabled={!isChecked}>
        Click me
      </button>
    </div>
  );
}

export default Buttoncheckbox;
