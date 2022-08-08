import {useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function UserDetails(){
    const [users,setUsers] = useState({});
    const {userId} = useParams();
    const isCreate = !userId;
    useEffect(()=>{
        if(userId){
            axios.get(`http://localhost:3001/api/users/${userId}`) .then(res => {
                setUsers(res.data);
            })
                .catch(err => {
                    throw err;
                });
        }
    },[])
        const handleChange = (e) =>{
        setUsers({
            ...users,
            [e.target.name]:e.target.value
        })
        };

        const handleSubmit = (e) =>{
            e.preventDefault();
            axios.post("http://localhost:3001/api/users", users)
                .then(res => {
                    alert(
                        `${isCreate ? "Create" : "Edit"} user ${JSON.stringify(
                            res.data
                        )} successfully!!!`
                    );
                })
                .catch(err => {
                    throw err;
                });
        }
    return(
        <div>
            <h1>User details</h1>
            <form>
                <div>
                    <label>Id</label>
                    <input name="id" value={users.id || ""} onChange={handleChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" value={users.name || ""} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )

}
export default UserDetails