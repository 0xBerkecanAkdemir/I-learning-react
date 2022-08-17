import {useState, useEffect} from 'react';

function UseEffect(){
const [number, setNumber] = useState(0);

useEffect(() => {
    console.log('component mount edildi');

    const interval = setInterval(() => {
        setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(interval);

},[]);

useEffect(() => {
    console.log('bilgi güncellendi');
});

useEffect(() => {
    console.log('number state güncellendi');
},[number]);

return (
<div> 
<h1> {number} </h1>
<button onClick={() => setNumber(number +1)}>CLİCK +</button>

</div>
);
}
export default UseEffect;