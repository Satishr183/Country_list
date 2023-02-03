import {useState} from 'react'
import Data from './data'
import {Button,Form} from 'react-bootstrap'


function App() {

  const[countryid, setCountryid]=useState('');
  const [state,setState]=useState([])
  const[stateid, setStateid]= useState('');

  const handlecounty=(e)=>{
    const getcountryId= e.target.value;
    const getStatedata= Data.find(country=>country.country_id===getcountryId).states;
    setState(getStatedata);
    setCountryid(getcountryId);
  // console.log(getStatedata);
  }

  const handlestate = (e)=>{
    const stateid= e.target.value;
    //console.log(stateid);
    setStateid(stateid);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Country id : "+countryid+ " And State id : "+ stateid);
    }

  return (
    <div style={{width:"90%", margin:"1rem auto"}}>
      <Form onSubmit={handleSubmit}>
      
    <Form.Select onChange={(e)=>handlecounty(e)} style={{marginBottom:"1rem"}}>
    <option value="">--Select Country--</option>
      {Data.map((items,index)=>{
       return <option value={items.country_id} key={index}>{ items.country_name }</option>
      })}
    </Form.Select>
   

    
    <Form.Select onChange={(e)=>handlestate(e)} style={{marginBottom:"1rem"}}>
    <option value="">--Select State--</option>
      {state.map((items,index)=>{
       return <option value={items.state_id} key={index}>{ items.state_name }</option>
      })}
    </Form.Select>
  
     
   <Button type='submit'variant='outline-success'>Submit</Button>
                    
    </Form>

    </div>
  )
}

export default App