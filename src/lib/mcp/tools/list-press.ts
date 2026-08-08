import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { en } from "../../../i18n/translations/en";

export default defineTool({
  name: "list_press",
  title: "List press and media",
  description:
    "List press mentions, interviews, conference lectures and publications featuring Prof. Barbash, optionally filtered by category.",
  inputSchema: {
    category: z
      .enum(["Interviews", "Publications", "Conferences", "News"])
      .optional()
      .describe("Optional category filter. Omit to return all items."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const items = category
      ? en.press.items.filter((item) => item.category === category)
      : en.press.items;
    const result = { count: items.length, items };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});