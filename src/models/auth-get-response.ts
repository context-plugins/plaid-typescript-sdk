import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { authGetNumbersSchema, type AuthGetNumbers } from "./auth-get-numbers.js";
import { itemSchema, type Item } from "./item.js";

/** AuthGetResponse defines the response schema for `/auth/get` */
export type AuthGetResponse = {
  /** The `accounts` for which numbers are being retrieved. */
  accounts: Account[];
  /**
   * An object containing identifying numbers used for making electronic transfers to and from the
   * `accounts`. The identifying number type (ACH, EFT, IBAN, or Bacs) used will depend on the
   * country of the account. An account may have more than one number type. If a particular
   * identifying number type is not used by any `accounts` for which data has been requested, the
   * array for that type will be empty.
   */
  numbers: AuthGetNumbers;
  /** Metadata about the Item. */
  item: Item;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const authGetResponseSchema: Schema<AuthGetResponse> = s.object<AuthGetResponse>({
  accounts: s.array(s.lazy(() => accountSchema)),
  numbers: authGetNumbersSchema,
  item: itemSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
