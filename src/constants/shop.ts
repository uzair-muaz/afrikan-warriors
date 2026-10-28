export type ShopProduct = {
  id: string;
  name: string;
  description: string;
  collection: "Apparel" | "Posters" | "Show" | "Collectables";
  /**
   * Pence in GBP. Null until a retail price is agreed.
   * Checkout ignores a product until this is set and purchasable is true.
   */
  pricePence: number | null;
  /** Shown only before a price is set. */
  priceLabel: string;
  sizes?: readonly string[];
  image: string;
  imageAlt: string;
  /** Included in the live shop only when the shop flag is also on. */
  purchasable: boolean;
};

export const deliveryCountries = [
  "United Kingdom",
  "Ireland",
  "International",
] as const;

export const shopCollections = [
  "All",
  "Apparel",
  "Posters",
  "Show",
  "Collectables",
] as const;

export type ShopCollection = (typeof shopCollections)[number];

const apparelSizes = ["S", "M", "L", "XL", "XXL"] as const;

export const shopProducts: ShopProduct[] = [
  {
    id: "aw-tshirt",
    name: "Afrikan Warriors T-shirt",
    description:
      "Official Afrikan Warriors designs for fans, performers and supporters.",
    collection: "Apparel",
    pricePence: null,
    priceLabel: "Price at launch",
    sizes: apparelSizes,
    image: "/media/v1/source/09-handstand.jpg",
    imageAlt: "Two Afrikan Warriors performers in a handstand balance",
    purchasable: false,
  },
  {
    id: "aw-hoodie",
    name: "Afrikan Warriors Hoodie",
    description: "Stay warm. Represent the Warriors.",
    collection: "Apparel",
    pricePence: null,
    priceLabel: "Price at launch",
    sizes: apparelSizes,
    image: "/media/v1/source/03-fire-limbo.jpg",
    imageAlt: "A performer moving through a fire limbo",
    purchasable: false,
  },
  {
    id: "aw-cap",
    name: "Afrikan Warriors Cap",
    description: "The Afrikan Warriors look wherever you go.",
    collection: "Apparel",
    pricePence: null,
    priceLabel: "Price at launch",
    sizes: ["One size"],
    image: "/media/v1/source/11-jungle-warriors.jpg",
    imageAlt: "Afrikan Warriors performers in front of a painted jungle set",
    purchasable: false,
  },
  {
    id: "aw-poster",
    name: "Afrikan Warriors Poster",
    description: "Bring the energy of the stage into your home.",
    collection: "Posters",
    pricePence: null,
    priceLabel: "Price at launch",
    image: "/media/v1/source/10-company-audience.jpg",
    imageAlt: "The company on a theatre stage in front of an audience",
    purchasable: false,
  },
  {
    id: "tokomile-tshirt",
    name: "Tokomile T-shirt",
    description: "Official merchandise from the flagship theatre production.",
    collection: "Show",
    pricePence: null,
    priceLabel: "Price at launch",
    sizes: apparelSizes,
    image: "/media/v1/source/07-theatre-dance.jpg",
    imageAlt: "Dancers and musicians on the Tokomile stage",
    purchasable: false,
  },
  {
    id: "tokomile-poster",
    name: "Tokomile Poster",
    description: "A stage print from the Kingdom of Zaramu.",
    collection: "Show",
    pricePence: null,
    priceLabel: "Price at launch",
    image: "/media/v1/source/04-tokomile-kingdom.jpg",
    imageAlt: "Tokomile company on the kingdom set",
    purchasable: false,
  },
  {
    id: "signed-photograph",
    name: "Signed Photograph",
    description:
      "A company still, signed. Each piece is confirmed with the artists before it ships.",
    collection: "Collectables",
    pricePence: null,
    priceLabel: "Price at launch",
    image: "/media/v1/home/ensemble.png",
    imageAlt: "Afrikan Warriors holding a flyer in a stage pyramid",
    purchasable: false,
  },
  {
    id: "limited-edition",
    name: "Limited Edition",
    description:
      "Small runs and special releases. The first pieces are announced to the mailing list.",
    collection: "Collectables",
    pricePence: null,
    priceLabel: "Price at launch",
    image: "/media/v1/source/06-freedom-vocal.jpg",
    imageAlt: "Lead performer singing with the company under gold light",
    purchasable: false,
  },
];
