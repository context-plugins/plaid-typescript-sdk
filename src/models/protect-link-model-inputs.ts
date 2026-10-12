import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Inputs for link session Trust Index models. */
export type ProtectLinkModelInputs = {
  /**
   * A unique identifier for the Link session, used to compute a Trust Index score and fraud
   * attributes.
   */
  linkSessionId: string;
  /**
   * Controls whether transaction extraction must be complete before scoring. If `false` (default),
   * returns a score whether or not transaction extraction is complete, as long as the link session
   * is finished; if data has been extracted it will still be included in the score computation. If
   * `true`, returns HTTP 400 with `error_type` = `INVALID_REQUEST` and `error_code` =
   * `FAILED_PRECONDITION` if extraction is still in progress; once data is ready a score will be
   * returned normally.
   */
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
