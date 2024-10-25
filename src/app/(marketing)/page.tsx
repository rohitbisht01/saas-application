import { Button } from "@/components/ui/button";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { SignUpButton } from "@clerk/nextjs";
import { CheckIcon, MoveRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center text-center text-balance gap-8 flex-col px-8">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Price Smarter, Sell bigger
        </h1>
        <p className="text-xl lg:text-3xl max-w-screen-xl">
          Optimize your product pricing across countries to maximize sales,
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>

        <SignUpButton>
          <Button className="flex gap-2 rounded-md text-lg p-6">
            Get started for free
            <MoveRight />
          </Button>
        </SignUpButton>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lx:grid-cols-5 gap-16">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div className="md:max-xl:hidden">1</div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-8 py-16 bg-gray-100">
        <h2 className="text-3xl text-center text-balance font-semibold mb-8">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tiers) => (
            <PricingCard key={tiers.name} {...tiers} />
          ))}
        </div>
      </section>

      <footer className="container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <Link href={"/"}>
          <BrandLogo />
        </Link>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                {
                  label: "Pretty Discounts",
                  href: "#",
                },
                {
                  label: "Discount API",
                  href: "#",
                },
                {
                  label: "Pretty Discounts",
                  href: "#",
                },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Solutions"
              links={[
                {
                  label: "Pretty Discounts",
                  href: "#",
                },
                {
                  label: "Discount API",
                  href: "#",
                },
                {
                  label: "Pretty Discounts",
                  href: "#",
                },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

const PricingCard = ({
  name,
  priceInCents,
  maxNumberOfProducts,
  maxNumberOfVisits,
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
}: (typeof subscriptionTiersInOrder)[number]) => {
  const isMostPopular = name === "Standard";

  return (
    <Card>
      <CardHeader>
        <div className="font-semibold mb-8 text-purple-500">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="text-lg w-full rounded-md"
            variant={isMostPopular ? "mostPopular" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Features className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Features>
        <Features>Pretty Deal Discounts</Features>
        {canCustomizeBanner && <Features>Banner Customization</Features>}
        {canAccessAnalytics && <Features>Advanced Analytics</Features>}
        {canRemoveBranding && <Features>Remove Pretty Deal branding</Features>}
      </CardFooter>
    </Card>
  );
};

const Features = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 rounded-full p-0.5 bg-purple-500 text-white" />
      <span>{children}</span>
    </div>
  );
};

const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
