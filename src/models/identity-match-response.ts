import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentityMatchScoreSchema,
  type AccountIdentityMatchScore,
} from "./account-identity-match-score.js";
import { itemSchema, type Item } from "./item.js";

/** IdentityMatchResponse defines the response schema for `/identity/match` */
export type IdentityMatchResponse = {
  /** The accounts for which Identity match has been requested */
  accounts: AccountIdentityMatchScore[];
  /** Metadata about the Item. */
  item: Item;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const identityMatchResponseSchema: Schema<IdentityMatchResponse> = s.object<IdentityMatchResponse>({
  accounts: s.array(s.lazy(() => accountIdentityMatchScoreSchema)),
  item: itemSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
