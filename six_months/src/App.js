import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import "./App.css";

//
import Home from "./components/landing/landing.js";
import ErrorPage from "./components/error/error";
import Wordle from "./components/wordle/wordle.js";

const solution = "zebra";

const router = createBrowserRouter([
  {
    path: "GF/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "GF/wordle",
    element: <Wordle solution={solution} />,
    errorElement: <ErrorPage />,
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
