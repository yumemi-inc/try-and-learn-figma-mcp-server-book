import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "primitives";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "SDS Primitives/Alert",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryAlertInfo: StoryObj<typeof Alert> = {
  name: "Info",
  args: {
    children: "アラートメッセージの内容をここに表示します。",
    variant: "info",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
  render: (args) => <Alert {...args} />,
};

export const StoryAlertWarning: StoryObj<typeof Alert> = {
  name: "Warning",
  args: {
    children: "注意や確認が必要な内容に使用します。",
    variant: "warning",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
  render: (args) => <Alert {...args} />,
};
