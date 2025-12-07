import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/header/Header";
import { PrivacyPolicy } from "./components/policy/PrivacyPolicy";
import { RefundPolicy } from "./components/policy/RefundPolicy";
import { TermsConditions } from "./components/policy/TermCondition";
import ScrollTop from "./components/ScrollTop";
import MainUi from "./pages/ui"
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
     <div>
      <Navbar/>
      <ScrollTop/>
      <Routes>
      <Route path="/" element={<MainUi/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/refund-policy" element={<RefundPolicy/>}/>
      <Route path="/terms-conditions" element={<TermsConditions/>}/>
     </Routes>
     <Footer/>
     </div>
    </>
  )
}

export default App