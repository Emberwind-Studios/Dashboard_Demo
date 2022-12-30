import "./App.css";
import NavigationDrawer from "./components/navigationDrawer/NavigationDrawer";
import LoginPage from "./pages/LoginPage";

function App() {
  let loggedIn: boolean = false;

  if (loggedIn) {
    return <NavigationDrawer />;
  } else {
    return <LoginPage />;
  }
}

export default App;
