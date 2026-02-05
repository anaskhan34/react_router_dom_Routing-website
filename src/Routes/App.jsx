import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact, contactData } from "../pages/Contact";
import { Movie } from "../pages/Movie";
import AppLayout from "../components/Layout/AppLayout";
import { ErrorPage } from "../pages/ErrorPage";
import { getApiData } from "../components/Api/GetApiData";
import { getMovieDetails } from "../components/Api/GetMovieDetails";
import { MovieDetails } from "../components/UI/MovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getApiData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
