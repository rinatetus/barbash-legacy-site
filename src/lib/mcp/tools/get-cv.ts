import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { en } from "../../../i18n/translations/en";

export default defineTool({
  name: "get_cv",
  title: "Get CV",
  description:
    "Get Prof. Barbash's curriculum vitae sections: patents, awards & honors, research grants, professional memberships, journal reviewer roles and publications summary.",
  inputSchema: {
    section: z
      .string()
      .optional()
      .describe("Optional case-insensitive section title filter, e.g. 'Awards' or 'Patents'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ section }) => {
    const query = section?.trim().toLowerCase();
    const sections = query
      ? en.about.cvSections.filter((s) => s.title.toLowerCase().includes(query))
      : en.about.cvSections;
    const result = { milestones: en.about.milestones, sections };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});