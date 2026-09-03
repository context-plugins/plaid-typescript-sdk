import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkSessionSuccessMetadataSchema,
  type LinkSessionSuccessMetadata,
} from "./link-session-success-metadata.js";

export type LinkSessionSuccess = {
  publicToken: string;
  metadata: LinkSessionSuccessMetadata | null;
};

export const linkSessionSuccessSchema: Schema<LinkSessionSuccess> = s.object<LinkSessionSuccess>({
  publicToken: s.string(),
  metadata: s.nullable(s.lazy(() => linkSessionSuccessMetadataSchema)),
  _keysMap: {
    publicToken: "public_token",
  },
});
