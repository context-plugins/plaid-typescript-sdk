import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkSessionExitMetadataInstitutionSchema,
  type LinkSessionExitMetadataInstitution,
} from "./link-session-exit-metadata-institution.js";
import { status2Schema, type Status2 } from "./status2.js";

export type LinkSessionExitMetadata = {
  institution?: LinkSessionExitMetadataInstitution | null;
  status?: Status2;
  linkSessionId?: string;
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
