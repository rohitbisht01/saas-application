export const subscriptionTiers = {
  Free: {
    name: "Free",
    priceInCents: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 500,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
    // stripPriceId: undefined,
  },
  Basic: {
    name: "Basic",
    priceInCents: 1000, // $10.00
    maxNumberOfProducts: 5,
    maxNumberOfVisits: 2000,
    canAccessAnalytics: true,
    canCustomizeBanner: false,
    canRemoveBranding: false,
    // stripPriceId: env.BASIC_PLAN_STRIPE_PRICE_ID,
  },
  Standard: {
    name: "Standard",
    priceInCents: 2500, // $25.00
    maxNumberOfProducts: 10,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: false,
    // stripPriceId: env.STANDARD_PLAN_STRIPE_PRICE_ID,
  },
  Premium: {
    name: "Premium",
    priceInCents: 5000, // $50.00
    maxNumberOfProducts: 20,
    maxNumberOfVisits: 10000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
    // stripPriceId: env.PREMIUM_PLAN_STRIPE_PRICE_ID,
  },
};

export const subscriptionTiersInOrder = [
  subscriptionTiers.Free,
  subscriptionTiers.Basic,
  subscriptionTiers.Standard,
  subscriptionTiers.Premium,
] as const;
