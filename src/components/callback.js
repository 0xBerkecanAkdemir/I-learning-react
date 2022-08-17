setTimeout(() =>{
    console.log('merhaba')
}, 2000);

setInterval(() =>{
    console.log('ben her saniye çalışırım')
}, 1000);

import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/todos/users')
.then((data) => data.json())
.then((users) => {
    console.log('users yüklendi', users);

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(() => data.json())
    .then((post) => {
        console.log('post 1 yüklendi', post);
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(() => data.json())
        .then((data) => {
            console.log('post2 yüklendi', data);
        })
    }) 
});
