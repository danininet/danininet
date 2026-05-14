import HomePage from "../[locale]/page";

export default function DeHomePage() {
  return <HomePage params={Promise.resolve({ locale: "de" })} />;
}
