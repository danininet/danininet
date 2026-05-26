export type AffiliateStatus = "owned" | "approved" | "approved-selective" | "review" | "needs-verification" | "rejected";
export type AffiliateRisk = "low" | "medium" | "high";

export type AffiliateProduct = {
  id: string;
  name: string;
  brand: string;
  type: "owned" | "affiliate" | "partner";
  category: string;
  status: AffiliateStatus;
  public: boolean;
  markets: string[];
  audience: string[];
  methodFit: "high" | "medium" | "low";
  riskLevel: AffiliateRisk;
  link?: string;
  disclosureRequired: boolean;
  disclaimerTypes: ("affiliate" | "ai-assisted" | "health" | "digital-product" | "general")[];
  summary: string;
  notes: string;
};

export const affiliateProducts: AffiliateProduct[] = [
  {
    id: "digitalna-prodaja-lokacije",
    name: "Digitalna prodaja lokacije",
    brand: "DaniniNet",
    type: "owned",
    category: "digital-product",
    status: "owned",
    public: true,
    markets: ["DACH", "Balkan", "Global"],
    audience: ["vlasnici lokacija", "agenti", "mali investitori", "digitalni marketari"],
    methodFit: "high",
    riskLevel: "low",
    link: "/proizvodi/digitalna-prodaja-lokacije",
    disclosureRequired: true,
    disclaimerTypes: ["digital-product", "ai-assisted", "general"],
    summary: "Glavni DaniniNet PDF + Bonus Pack artifact za digitalni gateway, javni sloj, brief, lead tok i trust granice.",
    notes: "Flagship proizvod. Ne obećava prodaju, profit, investitore ili dozvole.",
  },
  {
    id: "daninilans",
    name: "DaniniLans",
    brand: "DaniniLans",
    type: "owned",
    category: "health-water-lifestyle",
    status: "owned",
    public: true,
    markets: ["DACH", "Balkan"],
    audience: ["zdrav stil života", "voda", "hidratacija", "ishrana", "navike"],
    methodFit: "high",
    riskLevel: "medium",
    link: "/proizvodi/daninilans",
    disclosureRequired: true,
    disclaimerTypes: ["health", "ai-assisted", "affiliate"],
    summary: "Rebranding NutriLans materijala u DaniniLans health/water artifact sloj za vodu, hidrataciju, ishranu i odgovorne preporuke.",
    notes: "Health sadržaj mora imati jasan disclaimer: nije medicinski savet, dijagnoza ili terapija.",
  },
  {
    id: "hostinger",
    name: "Hostinger",
    brand: "Hostinger",
    type: "affiliate",
    category: "hosting-domains-websites",
    status: "approved",
    public: true,
    markets: ["DACH", "Balkan", "Global"],
    audience: ["blogeri", "affiliate početnici", "mali biznisi", "digitalni kreatori"],
    methodFit: "high",
    riskLevel: "low",
    link: "PASTE_HOSTINGER_AFFILIATE_LINK_HERE",
    disclosureRequired: true,
    disclaimerTypes: ["affiliate", "digital-product"],
    summary: "Hosting/domen preporuka za blog, affiliate sajt, landing page i digitalnu infrastrukturu.",
    notes: "Dobar DaniniNet fit. Bez .env; link se menja u registry fajlu.",
  },
  {
    id: "amazon-partnernet",
    name: "Amazon PartnerNet selektivne preporuke",
    brand: "Amazon",
    type: "affiliate",
    category: "curated-products",
    status: "approved-selective",
    public: true,
    markets: ["DACH"],
    audience: ["DaniniLans čitaoci", "blogeri", "digitalni kreatori", "zdrav rad za računarom"],
    methodFit: "medium",
    riskLevel: "medium",
    link: "PASTE_AMAZON_STORE_OR_TRACKING_LINK_HERE",
    disclosureRequired: true,
    disclaimerTypes: ["affiliate", "health", "general"],
    summary: "Samo kurirane evergreen kategorije: voda/filteri, creator setup, ergonomija i knjige. Ne praviti generički katalog.",
    notes: "Svaka health/water preporuka mora biti bez medicinskih tvrdnji i uz disclaimer.",
  },
  {
    id: "wellan",
    name: "WELLAN / WELLAN 2000",
    brand: "WELLAN",
    type: "partner",
    category: "water-treatment",
    status: "review",
    public: true,
    markets: ["DACH", "Balkan"],
    audience: ["voda", "kamenac", "kućni sistemi", "objekti"],
    methodFit: "medium",
    riskLevel: "medium",
    link: "PASTE_WELLAN_LINK_HERE",
    disclosureRequired: true,
    disclaimerTypes: ["affiliate", "health", "general"],
    summary: "Water-treatment pravac za DaniniLans, uz stroge granice i proveru tvrdnji.",
    notes: "Koristiti neutralan jezik: alternativne tehnologije, proveriti dokumentaciju, nije zamena za laboratorijsko testiranje vode.",
  },
  {
    id: "umh",
    name: "UMH Wasserveredelung",
    brand: "UMH",
    type: "partner",
    category: "water-treatment",
    status: "review",
    public: true,
    markets: ["DACH"],
    audience: ["voda", "hidratacija", "water-tech"],
    methodFit: "medium",
    riskLevel: "medium",
    link: "PASTE_UMH_LINK_HERE",
    disclosureRequired: true,
    disclaimerTypes: ["affiliate", "health", "general"],
    summary: "UMH kao review water-tech pravac za DaniniLans, ne kao medicinska tvrdnja.",
    notes: "Bez tvrdnji o lečenju, terapiji ili garantovanom zdravstvenom efektu.",
  },
  {
    id: "angela-sukau",
    name: "Angela Sukau",
    brand: "Angela Sukau",
    type: "affiliate",
    category: "affiliate-education",
    status: "review",
    public: false,
    markets: ["DACH"],
    audience: ["affiliate početnici", "online edukacija"],
    methodFit: "medium",
    riskLevel: "medium",
    link: "PASTE_ANGELA_SUKAU_LINK_HERE",
    disclosureRequired: true,
    disclaimerTypes: ["affiliate", "general"],
    summary: "U review statusu dok se ne proveri konkretna ponuda, ton, uslovi i tvrdnje.",
    notes: "Ne ide javno dok se ne potvrdi da nema quick-money/guru narativa.",
  },
  {
    id: "gruene-perle",
    name: "Grüne Perle",
    brand: "Grüne Perle",
    type: "affiliate",
    category: "needs-classification",
    status: "needs-verification",
    public: false,
    markets: ["DACH"],
    audience: ["to be verified"],
    methodFit: "low",
    riskLevel: "medium",
    link: "PASTE_GRUENE_PERLE_LINK_HERE",
    disclosureRequired: true,
    disclaimerTypes: ["affiliate", "general"],
    summary: "Naziv/link treba potvrditi pre javne preporuke.",
    notes: "Bez javnog CTA dok ne postoji tačan link i definicija proizvoda.",
  },
  {
    id: "gunnar-kessler",
    name: "Gunnar Kessler",
    brand: "Gunnar Kessler",
    type: "affiliate",
    category: "affiliate-education",
    status: "rejected",
    public: false,
    markets: ["DACH"],
    audience: ["not-public"],
    methodFit: "low",
    riskLevel: "high",
    disclosureRequired: true,
    disclaimerTypes: ["affiliate", "general"],
    summary: "Izbačen iz DaniniNet javnih preporuka.",
    notes: "Ne koristiti zbog guru/quick-money/trust rizika.",
  },
];

export const publicAffiliateProducts = affiliateProducts.filter((product) => product.public && product.status !== "rejected");

export function getAffiliateProduct(id: string) {
  return affiliateProducts.find((product) => product.id === id);
}
