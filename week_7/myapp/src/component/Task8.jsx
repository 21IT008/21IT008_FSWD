import React ,{useState} from 'react'

const Task8 = () => {

  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')

  function validateForm() {

    if (Username.length == 0 ) {
      
      alert('Invalid Form, UserName can not be empty')
      return
    }

    if(Username) {
      for(let i = 0; i < Username.length;i++) {
        if(Username[i] == ' ' || Username[i] == '.' || Username[i] == ','){
          alert('Invalid Username ')
          return
        }
      }
    }

   if (Password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }

    

    let countUpperCase = 0
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialCharacters = 0

    for (let i = 0; i < Password.length; i++) {
      const specialChars = ['!','@','#','$','%','^','&','*']

      if (specialChars.includes(Password[i])) {
        
        countSpecialCharacters++
      } else if (!isNaN(Password[i] * 1)) {
        
        countDigit++
      } else {
        if (Password[i] == Password[i].toUpperCase()) {
          
          countUpperCase++
        }
        if (Password[i] == Password[i].toLowerCase()) {
          
          countLowerCase++
        }
      }
    }

    if (countLowerCase == 0) {
      
      alert('Invalid Form, 0 lower case characters in password')
      return
    }

    if (countUpperCase == 0) {
      
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit == 0) {
      
      alert('Invalid Form, 0 digit characters in password')
      return
    }

    if (countSpecialCharacters == 0) {
      
      alert('Invalid Form, 0 special characters in password')
      return
    }

    alert('Form is valid')
  }

  return (
    <>
    <h1>Task8</h1>
    <div className='login'>
    <div>
      <label>Username :-</label>
        <input type='text' className='uname' onChange={(e)=>setUsername(e.target.value)}/>
      
      <label>Password :-</label>
        <input type='password' className='pass' onChange={(e)=>setPassword(e.target.value)}/>
      
    </div>
    <button className='btn' onClick={validateForm}>Login</button>
    </div>
    
    </>
  )
}

export default Task8
