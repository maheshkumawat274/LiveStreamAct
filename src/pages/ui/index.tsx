import { Contact } from "../../components/contact/Contact"
import { FAQs } from "../../components/home/Faq"
import { Features } from "../../components/home/Features"
import { Hero } from "../../components/home/HeroSection"
import { OTTSolution } from "../../components/home/OTTsection"
import { Pricing } from "../../components/home/Pricing"
import { HowItWorks } from "../../components/home/Process"
import { Specialization } from "../../components/home/Specailzation"
import { Testimonials } from "../../components/home/Testimonials"
import { WhoWeAre } from "../../components/home/WhoWeAre"


const MainUi = () => {
  return (
    <>
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
    </>
  )
}

export default MainUi