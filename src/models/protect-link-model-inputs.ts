import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectLinkModelInputs = {
  linkSessionId: string;
  requireExtractedData?: boolean;
};

export const protectLinkModelInputsSchema: Schema<ProtectLinkModelInputs> = s.object<ProtectLinkModelInputs>({
  linkSessionId: s.string(),
  requireExtractedData: s.optional(s.boolean()),
  _keysMap: {
    linkSessionId: "link_session_id",
    requireExtractedData: "require_extracted_data",
  },
});
