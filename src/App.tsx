import MainUi from "./pages/ui"
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
     <Routes>
      <Route path="/*" element={<MainUi/>}/>
     </Routes>
    </>
  )
}

export default App