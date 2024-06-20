import ShowNameList from "./name";
import UserData from "./tabel";


export default function App() {
  let appName = "My app";


  return (
    <div>
      <h1>{appName}</h1>
      <UserData />
      <ShowNameList />
    </div>
  );
}
