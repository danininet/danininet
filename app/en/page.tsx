import HomePage from "../[locale]/page";

export default function EnHomePage() {
  return <HomePage params={Promise.resolve({ locale: "en" })} />;
}
