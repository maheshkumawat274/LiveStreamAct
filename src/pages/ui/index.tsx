import { Contact } from "../../components/Contact"
import { FAQs } from "../../components/Faq"
import { Features } from "../../components/Features"
import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Header"
import { Hero } from "../../components/HeroSection"
import { OTTSolution } from "../../components/OTTsection"
import { Pricing } from "../../components/Pricing"
import { HowItWorks } from "../../components/Process"
import { Specialization } from "../../components/Specailzation"
import { Testimonials } from "../../components/Testimonials"
import { WhoWeAre } from "../../components/WhoWeAre"


const MainUi = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <WhoWeAre/>
     <Features/>
     <OTTSolution/>
     <Specialization/>
     <Pricing/>
     <HowItWorks/>
     <Testimonials/>
     <Contact/>
     <FAQs/>
     <Footer/>
    </>
  )
}

export default MainUi