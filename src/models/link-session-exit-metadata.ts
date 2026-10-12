import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkSessionExitMetadataInstitutionSchema,
  type LinkSessionExitMetadataInstitution,
} from "./link-session-exit-metadata-institution.js";
import { status2Schema, type Status2 } from "./status2.js";

/** Displayed if a user exits Link without successfully linking an Item. */
export type LinkSessionExitMetadata = {
  /**
   * An institution object. If the Item was created via Same-Day or Instant micro-deposit
   * verification, will be `null`.
   */
  institution?: LinkSessionExitMetadataInstitution | null;
  /** The point at which the user exited the Link flow. One of the following values. */
  status?: Status2;
  /**
   * A unique identifier associated with a user's actions and events through the Link flow. Include
   * this identifier when opening a support ticket for faster turnaround.
   */
  linkSessionId?: string;
  /**
   * The request ID for the last request made by Link. This can be shared with Plaid support to
   * expedite investigation.
   */
  requestId?: string;
};

export const linkSessionExitMetadataSchema: Schema<LinkSessionExitMetadata> =
  s.object<LinkSessionExitMetadata>({
    institution: s.optionalNullable(s.lazy(() => linkSessionExitMetadataInstitutionSchema)),
    status: s.optional(s.lazy(() => status2Schema)),
    linkSessionId: s.optional(s.string()),
    requestId: s.optional(s.string()),
    _keysMap: {
      linkSessionId: "link_session_id",
      requestId: "request_id",
    },
  });
