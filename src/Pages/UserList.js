import React, { useEffect, useState } from "react";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);

 

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              
              <th>Email</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                 <td>{user.email}</td>
             
                
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UserList;
