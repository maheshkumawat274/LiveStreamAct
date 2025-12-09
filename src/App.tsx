
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/header/Header";
import { PrivacyPolicy } from "./components/policy/PrivacyPolicy";
import { RefundPolicy } from "./components/policy/RefundPolicy";
import { TermsConditions } from "./components/policy/TermCondition";
import ScrollTop from "./components/ScrollTop";
import ContactPage from "./pages/contact";
import FeaturesPage from "./pages/features";
import MainUi from "./pages/home"
import { Route, Routes } from "react-router-dom";
import PricingPage from "./pages/pricing";
import ProcessPage from "./pages/process";
import ContactPurchasePage from "./pages/contactpurchase";
import PopupModal from "./components/popup/PopupModel";
import { PopupProvider } from "./components/popup/PopupProvider";
const App = () => {

  return (
    <>
     <PopupProvider>
     <div>
      <Navbar/>
      <ScrollTop/>
      <Routes>
      <Route path="/" element={<MainUi/>}/>
      <Route path="/features" element={<FeaturesPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/process" element={<ProcessPage/>}/>
      <Route path="/contact-us" element={<ContactPage/>}/>
      <Route path="/contact-purchase" element={<ContactPurchasePage/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/refund-policy" element={<RefundPolicy/>}/>
      <Route path="/terms-conditions" element={<TermsConditions/>}/>
     </Routes>
     <Footer/>
     <PopupModal/>

     </div>
    </PopupProvider>
    </>
  )
}

export default App