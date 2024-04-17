import { PluginCreator } from "tailwindcss/types/config";

const attributes = ["aria-expanded", "aria-hidden"];

const ariaPlugin: PluginCreator = ({ matchVariant, addVariant }) => {
  for (const attribute of attributes) {
    addVariant(attribute, `[${attribute}="true"]&`);
    matchVariant(
      "group",
      (_, { modifier }) =>
        modifier ? `:merge(.group\\/${modifier})[${attribute}="true"] &` : `:merge(.group)[${attribute}="true"] &`,
      {
        values: { [attribute]: attribute },
      }
    );
    matchVariant(
      "peer",
      (_, { modifier }) =>
        modifier ? `:merge(.peer\\/${modifier})[${name}="true"] ~ &` : `:merge(.peer)[${name}="true"] ~ &`,
      {
        values: { [attribute]: attribute },
      }
    );
  }
};

export default ariaPlugin;
