import { defineTool } from "@lovable.dev/mcp-js";
import { en } from "../../../i18n/translations/en";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get the public profile of Prof. Israel M. Barbash, MD: name, title, institution, biography, career milestones and philosophy.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: en.hero.name,
      title: en.hero.title,
      institution: en.hero.institution,
      tagline: en.hero.tagline,
      biography: en.about.bio,
      milestones: en.about.milestones,
      institutions: en.institutions.items,
      philosophy: en.philosophy.quote,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});