import { Contact } from "../../components/contact/Contact"
import { FAQs } from "../../components/home/Faq"
import { Pricing } from "../../components/home/Pricing"


const PricingPage = () => {
  return (
    <>
     <div>
      <Pricing/>
      <Contact/>
      <FAQs/>
     </div>
    </>
  )
}

export default PricingPage