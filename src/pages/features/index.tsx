import { Contact } from "../../components/contact/Contact"
import { FAQs } from "../../components/home/Faq"
import { Features } from "../../components/home/Features"
import { OTTSolution } from "../../components/home/OTTsection"
import { Specialization } from "../../components/home/Specailzation"
import { WhoWeAre } from "../../components/home/WhoWeAre"

const FeaturesPage = () => {
  return (
    <>
     <WhoWeAre/>
     <Features/>
     <OTTSolution/>
     <Specialization/>
     <Contact/>
     <FAQs/>
    </>
  )
}

export default FeaturesPage