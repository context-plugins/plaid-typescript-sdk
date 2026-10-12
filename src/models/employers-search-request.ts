import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** EmployersSearchRequest defines the request schema for `/employers/search`. */
export type EmployersSearchRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The employer name to be searched for. */
  query: string;
  /**
   * The Plaid products the returned employers should support. Currently, this field must be set to
   * `"deposit_switch"`.
   */
  products: string[];
};

export const employersSearchRequestSchema: Schema<EmployersSearchRequest> = s.object<EmployersSearchRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  query: s.string(),
  products: s.array(s.string()),
  _keysMap: {
    clientId: "client_id",
  },
});
