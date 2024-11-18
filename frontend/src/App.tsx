import "./styles.css";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="bg-yellow-100 min-h-screen">
      <nav className="flex bg-blue-400 justify-between items-center p-4">
        <h1 className="text-white text-xl font-bold">Finsight</h1>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Sign In
          </button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Register
          </button>
        </div>
      </nav>
      {/* <Login /> */}
      <Registration />
    </div>
  );
}

export default App;
