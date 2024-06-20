import "./styles/App.scss";
import Form from "./components/form";
import Tabs from "./components/tabs";
import { UserProvider } from "./components/context/UserContext";
import { TabsProvider } from "./components/context/TabsContext";
import { Users } from "./components/users";
import FetchedMemberCard from "./components/fetchedMemberCard";

export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <TabsProvider>
          <Tabs />
          <Users />
          <Form />
          <FetchedMemberCard />
        </TabsProvider>
      </UserProvider>
    </div>
  );
}
