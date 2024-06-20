let userdata = [
    { id: 1, name: "nikhil", age: 20, passion: "coding" },
    { id: 2, name: "nikhil", age: 20, passion: "coding" },
    { id: 3, name: "nikhil", age: 20, passion: "coding" },
    { id: 4, name: "nikhil", age: 20, passion: "coding" },
    { id: 5, name: "nikhil", age: 20, passion: "coding" },
    { id: 6, name: "nikhil", age: 20, passion: "coding" },
];

export default function UserData() {
    let users = userdata.map((user) => (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.passion}</td>
        </tr>
    ));

    return (
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Passion</th>
                    </tr>
                </thead>
                <tbody>{users}</tbody>
            </table>
        </div>
    );
}
