import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listProceduresTool from "./tools/list-procedures";
import getExpertiseTool from "./tools/get-expertise";
import getCvTool from "./tools/get-cv";
import getResearchTool from "./tools/get-research";
import listPressTool from "./tools/list-press";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "barbash-legacy",
  title: "Barbash Legacy",
  version: "0.1.0",
  instructions:
    "Public tools for the professional site of Prof. Israel M. Barbash, MD, Director of Cath Lab Services at the Leviev Heart Center, Sheba Medical Center. Use `get_profile` for biography and career, `list_procedures` for the catheterization procedures offered, `get_expertise` for clinical specializations, `get_cv` for awards, patents, grants and publication stats, `get_research` for research impact and outcomes, `list_press` for media and conference appearances, and `get_contact` for practice location and contact details. All data is public website content.",
  tools: [
    getProfileTool,
    listProceduresTool,
    getExpertiseTool,
    getCvTool,
    getResearchTool,
    listPressTool,
    getContactTool,
  ],
});