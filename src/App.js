import "./App.css";
import IndexRoutes from "./Routes/IndexRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <IndexRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
