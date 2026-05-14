import HomePage from "../[locale]/page";

export default function SrHomePage() {
  return <HomePage params={Promise.resolve({ locale: "sr" })} />;
}
