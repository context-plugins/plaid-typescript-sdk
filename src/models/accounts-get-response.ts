import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { itemSchema, type Item } from "./item.js";

/**
 * AccountsGetResponse defines the response schema for `/accounts/get` and `/accounts/balance/get`.
 */
export type AccountsGetResponse = {
  /**
   * An array of financial institution accounts associated with the Item. If `/accounts/balance/get`
   * was called, each account will include real-time balance information.
   */
  accounts: Account[];
  /** Metadata about the Item. */
  item: Item;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const accountsGetResponseSchema: Schema<AccountsGetResponse> = s.object<AccountsGetResponse>({
  accounts: s.array(s.lazy(() => accountSchema)),
  item: itemSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
