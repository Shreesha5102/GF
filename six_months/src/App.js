import { RouterProvider, createHashRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import "./App.css";

//
import Home from "./components/landing/landing.js";
import ErrorPage from "./components/error/error";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
