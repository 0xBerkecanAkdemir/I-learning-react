import axios from 'axios';

(async() => {
    const {data: users} = await axios (
        ('https://jsonplaceholder.typicode.com/users/1')
    )
    console.log('users', users)
    
    const {data: posts1} = await axios (
        ('https://jsonplaceholder.typicode.com/posts?userId=1')
    )
    console.log('posts1', posts1 )

})();


export default task1;