import { defineTool } from "@lovable.dev/mcp-js";
import { en } from "../../../i18n/translations/en";

export default defineTool({
  name: "get_expertise",
  title: "Get areas of expertise",
  description:
    "Get Prof. Barbash's clinical areas of expertise (TAVR/TAVI, structural heart, complex coronary interventions, cardiovascular big data & AI) with descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const result = { areas: en.expertise.cards };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});