import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
export function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="*" element={<Navigate to="/homepage"/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
