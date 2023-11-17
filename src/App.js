
import './App.css';
import Name from './component/Name';
import Usestate from './component/Usestate';
import Liftingstateup from './component/Liftingstateup';
import { useState } from 'react';
import Displaycounter from './component/redux/Displaycounter';
import Controls from './component/redux/Controls';
import { useSelector } from 'react-redux';
import Privacymessage from './component/redux/Privacymessage';

function App() {
  const privacy=useSelector(store=>store.privacy)
 const [data ,setData]=useState("parent data transerfering from parent to child")
  function getdata(a){
    console.log(a)
getdata(a)
  }
 
  return (
  <>
<Name name='tiger'  src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcREj22c-wMNL5IDmU99v8G7voUl17Yxm0JJqMLqttdPT4DnaB99zqVK7HWiNzjP3aZnzCEf-ikAqb2yiDk" alt=""  /> 
<Usestate></Usestate>
<h1>{data}</h1>
<Liftingstateup getdata={setData}></Liftingstateup>
{privacy?<Privacymessage/>:<Displaycounter/>}

<Controls></Controls>
  </>
  );
}

export default App;
