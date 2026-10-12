import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { processorNumberSchema, type ProcessorNumber } from "./processor-number.js";

/** ProcessorAuthGetResponse defines the response schema for `/processor/auth/get` */
export type ProcessorAuthGetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * An object containing identifying numbers used for making electronic transfers to and from the
   * `account`. The identifying number type (ACH, EFT, IBAN, or Bacs) used will depend on the
   * country of the account. An account may have more than one number type. If a particular
   * identifying number type is not used by the `account` for which auth data has been requested, a
   * null value will be returned.
   */
  numbers: ProcessorNumber;
  /** A single account at a financial institution. */
  account: Account;
};

export const processorAuthGetResponseSchema: Schema<ProcessorAuthGetResponse> =
  s.object<ProcessorAuthGetResponse>({
    requestId: s.string(),
    numbers: processorNumberSchema,
    account: accountSchema,
    _keysMap: {
      requestId: "request_id",
    },
  });
