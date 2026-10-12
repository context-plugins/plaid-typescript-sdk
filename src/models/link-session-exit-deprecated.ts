import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { linkSessionExitMetadataSchema, type LinkSessionExitMetadata } from "./link-session-exit-metadata.js";

/**
 * An object representing an [onExit](https://plaid.com/docs/link/web/#onexit) callback from Link.
 * This field is returned only for legacy implementations and has been deprecated in favor of
 * [`exit`](https://plaid.com/docs/api/link/#link-token-get-response-link-sessions-exit), for
 * improved naming consistency. If you are receiving this field, contact your account manager to
 * migrate to the newer `exit` field.
 */
export type LinkSessionExitDeprecated = {
  /**
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error: Error | null;
  /** Displayed if a user exits Link without successfully linking an Item. */
  metadata: LinkSessionExitMetadata | null;
};

export const linkSessionExitDeprecatedSchema: Schema<LinkSessionExitDeprecated> =
  s.object<LinkSessionExitDeprecated>({
    error: s.nullable(s.lazy(() => errorSchema)),
    metadata: s.nullable(s.lazy(() => linkSessionExitMetadataSchema)),
  });
