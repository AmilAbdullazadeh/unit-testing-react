import "./App.css";
import Users from "./components/Users";

function App() {
  const users = [
    { id: 1, name: "John", age: 15 },
    { id: 2, name: "Kelly", age: 20 },
  ];

  return (
    <div className="App">
      {/* <Users /> */}
      {users.map((user) => (
        <Users user={user} />
      ))}
    </div>
  );
}

export default App;
