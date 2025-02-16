import birdeye from "@/assets/integrations/birdeye.png"
import cin7 from "@/assets/integrations/cin7.png"
import easyship from "@/assets/integrations/easyship.png"
import freshdesk from "@/assets/integrations/freshdesk.png"
import mailchimp from "@/assets/integrations/mailchimp.png"
import simple_texting from "@/assets/integrations/simple_texting.png"
import square from "@/assets/integrations/square.png"
import stripe from "@/assets/integrations/stripe.png"
import zapier from "@/assets/integrations/zapier.png"
import { StaticImageData } from "next/image";

interface integrationsProps {
  name: string;
  desciption: string;
  image: StaticImageData;
}

const integrations: integrationsProps[] = [
  {
    name: "Stripe",
    desciption: "Your number 1 developer payment solution on the GO!",
    image: stripe
  },
  {
    name: "Square",
    desciption: "Fast and secure payment with ease worldwide.",
    image: square
  },
  {
    name: "Cin7",
    desciption: "Manage your inventory from anywhere, anytime.",
    image: cin7
  },
  {
    name: "Fresh desk",
    desciption: "Provide fast customer support services with ease",
    image: freshdesk
  },
  {
    name: "Simple Texting",
    desciption: "Text messaging has never got easy with simple texting",
    image: simple_texting
  },
  {
    name: "Mail Chimp",
    desciption: "The best email marketing service provider",
    image: mailchimp
  },
  {
    name: "Zapier",
    desciption: "It has never been easy to manage users until Zapier",
    image: zapier
  },
  {
    name: "Bird Eye",
    desciption: "The best notifications management tool.",
    image: birdeye
  },
  {
    name: "Easy Ship",
    desciption: "Ship anywhere around the world with just a button click",
    image: easyship
  },
]


export {integrations}