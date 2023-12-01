import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import KitchenPage from "./pages/KitchenPage/KitchenPage";
import WithdrawalPage from "./pages/WithdrawalPage/WithdrawalPage";
export function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="*" element={<Navigate to="/homepage"/>}/>
        <Route path="/kitchen" element={<KitchenPage/>}/>
        <Route path="/withdrawal" element={<WithdrawalPage/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
