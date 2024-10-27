import "./App.css";
import LoginBackground from "./components/Login/LoginBackground";
import Provider from "./context/provider";

function App() {
  return (
    <Provider>
      <div>
        <LoginBackground />
      </div>
    </Provider>
  );
}

export default App;
