import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkSessionSuccessMetadataSchema,
  type LinkSessionSuccessMetadata,
} from "./link-session-success-metadata.js";

/**
 * An object representing an [onSuccess](https://plaid.com/docs/link/web/#onsuccess) callback from
 * Link. This field is returned only for legacy integrations and is deprecated in favor of
 * [`results.item_add_results`](https://plaid.com/docs/api/link/#link-token-get-response-link-sessions-results-item-add-results)
 * which can support multiple public tokens in a single Link session, for flows such as multi-Item
 * Link. If you are receiving `on_success`, contact your account manager to migrate to
 * `results.item_add_results` instead.
 */
export type LinkSessionSuccess = {
  /** Displayed once a user has successfully linked their Item. */
  publicToken: string;
  /** Displayed once a user has successfully linked their Item. */
  metadata: LinkSessionSuccessMetadata | null;
};

export const linkSessionSuccessSchema: Schema<LinkSessionSuccess> = s.object<LinkSessionSuccess>({
  publicToken: s.string(),
  metadata: s.nullable(s.lazy(() => linkSessionSuccessMetadataSchema)),
  _keysMap: {
    publicToken: "public_token",
  },
});
