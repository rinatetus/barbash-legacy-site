import { defineTool } from "@lovable.dev/mcp-js";
import { en } from "../../../i18n/translations/en";

export default defineTool({
  name: "get_research",
  title: "Get research and outcomes",
  description:
    "Get research impact for Prof. Barbash: citation and publication stats, research highlights (National TAVR Registry, transcaval access, AI/microRNA biomarkers) and quality-metric timeline.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const result = {
      stats: en.research.stats.map(([value, label]) => ({ value, label })),
      highlights: en.research.highlights,
      qualityTimeline: en.research.timeline,
      wartimeResilience: {
        summary: en.resilience.body,
        closing: en.resilience.closing,
      },
    };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});