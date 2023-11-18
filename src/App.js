import  useState  from "react";
function App()
{
  const [inputs,setinputs]=useState({})

  const handleChange=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setinputs(values =>({...values,[name]:value}))
  }

  const handleSubmit=(event)=>{
     event.preventDefault()
     alert(inputs)
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="username"
             value={inputs.username||''}
             onChange={handleChange}
      />
      <input type="text"
      
             name="age"
             value={inputs.age||''}
             onChange={handleChange}
      />
      <button>submit</button>
    </form>
  )
}
export default App;