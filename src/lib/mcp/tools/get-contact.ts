import { defineTool } from "@lovable.dev/mcp-js";
import { en } from "../../../i18n/translations/en";

export default defineTool({
  name: "get_contact",
  title: "Get contact information",
  description:
    "Get public contact details for Prof. Barbash's practice: heart center, medical center, location and languages spoken.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const result = {
      heartCenter: en.contact.heartCenter,
      medicalCenter: en.contact.shebaCenter,
      location: en.contact.location,
      languages: en.contact.languages,
      website: "https://barbash-legacy-site.lovable.app",
      note: "Use the contact form on the website to send a message.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});