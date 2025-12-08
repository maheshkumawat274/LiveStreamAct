import { Contact } from "../../components/contact/Contact"
import { FAQs } from "../../components/home/Faq"
import { HowItWorks } from "../../components/home/Process"
import { Testimonials } from "../../components/home/Testimonials"


const ProcessPage = () => {
  return (
    <>
     <HowItWorks/>
     <Testimonials/>
     <Contact/>
     <FAQs/>
    </>
  )
}

export default ProcessPage