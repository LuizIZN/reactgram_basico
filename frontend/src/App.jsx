/* eslint-disable no-unused-vars */
import "./App.css";

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Profile from "./pages/Profile/Profile";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Hooks
import { useAuth } from "./hooks/useAuth";
import EditProfile from "./pages/EditProfile/EditProfile";
import Photo from "./pages/Photo/Photo";
import Search from "./pages/Search/Search";

function App() {
  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={auth ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={auth ? <EditProfile /> : <Navigate to="/login" />}
            />
            <Route
              path="/users/:id"
              element={auth ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path="/photos/:id"
              element={auth ? <Photo /> : <Navigate to="/login" />}
            />
            <Route
              path="/search"
              element={auth ? <Search /> : <Navigate to="/login" />}
            />
            <Route
              path="/register"
              element={!auth ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!auth ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
