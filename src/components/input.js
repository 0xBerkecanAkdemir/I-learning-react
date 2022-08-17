import {useState} from 'react';

function InputExample(){
const [name, setName] = useState('');
const [surname, setSurName] = useState('');
const onChangeName = (event) => setName (event.target.value);
const onChangeSurName = (event) => setSurName (event.target.value);

return (
<div> 
Please enter a name <br />
<input value={name} onChange={onChangeName}></input>
<br></br>
Please enter a surname <br />
<input value={surname} onChange={onChangeSurName}></input>
</div>
);
}
export default InputExample;