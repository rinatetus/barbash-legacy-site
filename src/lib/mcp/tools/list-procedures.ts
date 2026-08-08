import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { en } from "../../../i18n/translations/en";

const categories = en.procedures.categories;
type CategoryKey = keyof typeof categories;

export default defineTool({
  name: "list_procedures",
  title: "List procedures",
  description:
    "List the cardiac catheterization procedures performed by Prof. Barbash's team, optionally filtered to a single category.",
  inputSchema: {
    category: z
      .enum(["diagnostic", "coronary", "structural", "hemodynamic", "peripheral"])
      .optional()
      .describe("Optional category filter. Omit to return all categories."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const keys = (category ? [category] : Object.keys(categories)) as CategoryKey[];
    const result = {
      heading: en.procedures.subheading,
      categories: keys.map((key) => ({
        key,
        title: categories[key].title,
        procedures: categories[key].items,
      })),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});