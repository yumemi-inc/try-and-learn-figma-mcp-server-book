import type { Meta, StoryObj } from "@storybook/react";
import { PricingProvider } from "data";
import { MyLandingPage } from "../../examples/MyLandingPage";

const meta: Meta<typeof MyLandingPage> = {
  component: MyLandingPage,
  title: "SDS Pages/MyLandingPage",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <PricingProvider>
        <Story />
      </PricingProvider>
    ),
  ],
};
export default meta;

export const Default: StoryObj<typeof MyLandingPage> = {
  name: "MyLandingPage",
  render: () => <MyLandingPage />,
};
