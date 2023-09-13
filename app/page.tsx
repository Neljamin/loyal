import { createClient } from "contentful";
import LoyaltyCards from "./components/LoyaltyCards";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: process.env.CONTENTFUL_DELIVERY_KEY ?? "",
});

export default async function Home() {
  const loyaltyCards = await client
    .getEntries({
      // TODO move to types
      content_type: "loyaltyCard",
    })
    .then((entry) => entry)
    .catch((err) => console.log(err));

  return (
    <main className="h-screen flex flex-col">
      <LoyaltyCards loyaltyCards={loyaltyCards} />
    </main>
  );
}
