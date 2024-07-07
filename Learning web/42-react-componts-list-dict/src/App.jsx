import ShowNameList from "./componts/NameList";
import UserData from "./componts/UserData";


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
