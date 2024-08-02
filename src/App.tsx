import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormBuilderDashboard from "./pages/FormBuilderDashboard";
import NotFound from "./pages/NotFound";
import FormBuilder from "./pages/FormBuilder.js";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<FormBuilderDashboard />} />
        <Route path="/create-form/:id" element={<FormBuilder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
