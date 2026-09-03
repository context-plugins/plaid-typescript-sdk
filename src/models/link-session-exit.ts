import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { linkSessionExitMetadataSchema, type LinkSessionExitMetadata } from "./link-session-exit-metadata.js";

export type LinkSessionExit = {
  error: Error | null;
  metadata: LinkSessionExitMetadata | null;
};

export const linkSessionExitSchema: Schema<LinkSessionExit> = s.object<LinkSessionExit>({
  error: s.nullable(s.lazy(() => errorSchema)),
  metadata: s.nullable(s.lazy(() => linkSessionExitMetadataSchema)),
});
