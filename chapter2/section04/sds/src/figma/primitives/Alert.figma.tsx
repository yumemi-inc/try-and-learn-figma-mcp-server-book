import figma from "@figma/code-connect";
import { Alert } from "primitives";

figma.connect(Alert, "<FIGMA_ALERT_ALERT>", {
  props: {
    variant: figma.enum("Variant", {
      Info: "info",
      Warning: "warning",
    }),
    children: figma.string("Message"),
  },
  example: ({ children, variant, ...props }) => (
    <Alert variant={variant} {...props}>
      {children}
    </Alert>
  ),
});
