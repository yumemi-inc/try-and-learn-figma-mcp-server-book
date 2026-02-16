import {
  Footer,
  PricingCard,
  PricingCardSkeleton,
  pricingPlanToPricingCardProps,
} from "compositions";
import { usePricing } from "data";
import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import {
  Accordion,
  AccordionItem,
  Button,
  ButtonGroup,
  Logo,
  Navigation,
  NavigationPill,
  TextContentHeading,
  TextContentTitle,
  TextLink,
} from "primitives";
import { useState } from "react";
import "./MyLandingPage.css";

const NAV_ITEMS = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Community", href: "#community" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Link", href: "#" },
] as const;

export function MyLandingPage() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const flexGap = isMobile ? "600" : "1200";
  const { monthlyPlans, annualPlans, currentPlan, setCurrentPlan, isLoading } =
    usePricing();
  const [pricingInterval, setPricingInterval] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const options = pricingInterval === "monthly" ? monthlyPlans : annualPlans;

  return (
    <div className="my-landing-page">
      <Section
        elementType="header"
        padding={sectionPadding}
        variant="subtle"
        className="my-landing-page__header"
      >
        <Flex
          container
          alignPrimary="space-between"
          alignSecondary="center"
          gap="400"
        >
          <Logo className="my-landing-page__logo" />
          <Navigation direction="row" className="my-landing-page__nav">
            {NAV_ITEMS.map(({ label, href }) => (
              <TextLink key={label} href={href} className="my-landing-page__nav-link">
                {label}
              </TextLink>
            ))}
          </Navigation>
          <ButtonGroup align="end" className="my-landing-page__header-actions">
            <Button variant="subtle" href="#signin">
              Sign in
            </Button>
            <Button variant="primary" href="#register">
              Register
            </Button>
          </ButtonGroup>
        </Flex>
      </Section>

      <Section padding={sectionPadding} variant="stroke" className="my-landing-page__hero">
        <Flex
          container
          direction="column"
          alignPrimary="center"
          alignSecondary="center"
          gap={flexGap}
        >
          <TextContentTitle
            align="center"
            title="Title"
            subtitle="Subtitle"
          />
        </Flex>
      </Section>

      <Section
        padding={sectionPadding}
        variant="stroke"
        className="my-landing-page__pricing"
      >
        <Flex container gap={flexGap} direction="column" alignSecondary="stretch">
          <FlexItem>
            <Flex alignPrimary="center">
              <Navigation direction="row">
                <NavigationPill
                  onPress={() => setPricingInterval("monthly")}
                  isSelected={pricingInterval === "monthly"}
                >
                  Monthly
                </NavigationPill>
                <NavigationPill
                  onPress={() => setPricingInterval("yearly")}
                  isSelected={pricingInterval === "yearly"}
                >
                  Yearly
                </NavigationPill>
                <NavigationPill onPress={() => {}} isSelected={false}>
                  Link
                </NavigationPill>
              </Navigation>
            </Flex>
          </FlexItem>
          <FlexItem>
            <Flex wrap type="third" gap="1200">
              {isLoading ? (
                <>
                  <PricingCardSkeleton size={isMobile ? "small" : "large"} />
                  <PricingCardSkeleton size={isMobile ? "small" : "large"} />
                  <PricingCardSkeleton size={isMobile ? "small" : "large"} />
                </>
              ) : (
                options.map((option, i) => {
                  const props = pricingPlanToPricingCardProps(
                    option,
                    i,
                    currentPlan,
                    setCurrentPlan,
                  );
                  return (
                    <PricingCard
                      key={option.sku}
                      {...props}
                      size={isMobile ? "small" : "large"}
                    />
                  );
                })
              )}
            </Flex>
          </FlexItem>
        </Flex>
      </Section>

      <Section
        padding={sectionPadding}
        variant="neutral"
        className="my-landing-page__faq"
      >
        <Flex container direction="column" alignSecondary="stretch" gap={flexGap}>
          <TextContentHeading
            align="center"
            heading="Heading"
            subheading="Subheading"
          />
          <Flex container type="third" alignPrimary="center">
            <FlexItem size="major">
              <Accordion>
                <AccordionItem title="Title">
                  Answer the frequently asked question in a simple sentence, a
                  longish paragraph, or even in a list.
                </AccordionItem>
                <AccordionItem title="Title">Answer content.</AccordionItem>
                <AccordionItem title="Title">Answer content.</AccordionItem>
                <AccordionItem title="Title">Answer content.</AccordionItem>
              </Accordion>
            </FlexItem>
          </Flex>
        </Flex>
      </Section>

      <Footer />
    </div>
  );
}
