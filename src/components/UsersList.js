import { useState, useEffect } from 'react'
const UsersList = () => {
    const [usersList, setUsersList] = useState([]);
    const [skip, setSkip] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await fetch(`https://dummyjson.com/users?limit=20&$skip=${skip}`);
        // console.log('data.json ',await response.json())
        const list = await response.json();
        console.log(list)
        setUsersList(prev => [...prev, ...list.users]);
        //  setSkip(list.skip)
        setTotal(list.total)
        console.log('usersList ', usersList)
        console.log('total ', total) 
    }
    return (
        <div className='users-container'>
            <h2>Users List ({usersList.length} / {total}) </h2>
            <ul style={{listStyle:'none',padding:'0'}}>
                {
                    usersList.map((user, index) => {
                        return <li key={index} style={{ListStyle:'none',display:'flex',justifyContent:'space-between',padding:'0 10px', borderBottom: '1px solid #ccc'}}>({index+1}) {user.firstName + '  ' + user.lastName} - {user.email}</li>
                    })
                }
            </ul>
        </div>
    )

}

export default UsersList;