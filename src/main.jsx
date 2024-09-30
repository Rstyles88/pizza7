import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext";  // Importa el proveedor del contexto
import "./index.css";  // Asegúrate de que este archivo exista
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <UserProvider>  {/* Envuelve la aplicación */}
    <App />
  </UserProvider>
);
