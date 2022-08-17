setTimeout(() =>{
    console.log('2 saniye sonra ekrana gelir')
}, 2000);

setInterval(() =>{
    console.log('her saniye çalışır')
}, 1000);

const sayHi = (cb) => {
    cb();
}
sayHi(() => {
    console.log('hello');
})

import fetch from 'node-fetch';
import axios from 'axios';

/* 
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

*/
/* 2.YÖNTEM DAHA TEMİZ 
async function getData(){
    const users = await (
    await fetch('https://jsonplaceholder.typicode.com/todos/users')
    ).json();
    console.log(users);

    const post1 = await (
        await fetch('https://jsonplaceholder.typicode.com/todos/posts/1')
        ).json();
        console.log(post1);

    const post2 = await (
        await fetch('https://jsonplaceholder.typicode.com/todos/posts/2')
    ).json();
        console.log(post2);
}

getData();
*/

/* 3. YÖNTEM ANONİM FONKSİYON TANIMLAMA
(async () => {
        const users = await (
            await fetch('https://jsonplaceholder.typicode.com/todos/users')
            ).json();
            console.log(users);
    
        const post1 = await (
            await fetch('https://jsonplaceholder.typicode.com/todos/posts/1')
            ).json();
            console.log(post1);
    
        const post2 = await (
            await fetch('https://jsonplaceholder.typicode.com/todos/posts/2')
        ).json();
            console.log(post2);
})();
*/

/* 4.YÖNTEM AXİOS
(async () => {
    const {data: users} = await axios (
        ('https://jsonplaceholder.typicode.com/todos/users')
        );
        console.log(users);

    const {data: post1} = await axios (
        ('https://jsonplaceholder.typicode.com/todos/posts/1')
        );
        console.log(post1);

    const {data: post2} = await axios (
        ('https://jsonplaceholder.typicode.com/todos/posts/2')
    );
        console.log(post2);
})();
*/
// PROMİSE
const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if (number === 1){
            resolve ({text :'selam'});
        }
            reject ('bir problem oluştu');
        })
}
getComments(2) /* 2 dersem 1 e eşit olmadığı için catch e düşer 1 dersem eşit olduğu için then e düşer selam der */
.then((data) => console.log(data))
.catch((e) => console.log(e));