import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const componentsDidMount = () =>{
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                axios.get('http://localhost:3001/api/users').then(res=>{
                    resolve(res)
                }).catch(err => reject(err))
            },2000)
        })
    }
    useEffect(()=>{
        setLoading(!loading)
        componentsDidMount().then(res=>{
            setUsers(res.data)
        }).catch(err => {
            console.log(err)}).finally(()=>{
                setLoading(false)
        })
    },[])
    console.log(users+'12');
    return (
        <div className="App">
            {loading && (<p>Loading</p>)}
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            {users.map(user =>(
                <tr key={user.id}>
                    <Link to={`/user/${user.id}`}> <a><td>{user.name}</td></a></Link>
                </tr>
            ))}
        </div>
    );
}
export default Users