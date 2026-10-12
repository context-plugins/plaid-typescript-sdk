import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  numbersInternationalIbanSchema,
  type NumbersInternationalIban,
} from "./numbers-international-iban.js";
import { recipientBacsSchema, type RecipientBacs } from "./recipient-bacs.js";

/** An object representing the e-wallet account numbers */
export type WalletNumbers = {
  /**
   * An object containing a Bacs account number and sort code. If an IBAN is not provided or if you
   * need to accept domestic GBP-denominated payments, Bacs data is required.
   */
  bacs?: RecipientBacs | null;
  /** Account numbers using the International Bank Account Number and BIC/SWIFT code format. */
  international?: NumbersInternationalIban | null;
};

export const walletNumbersSchema: Schema<WalletNumbers> = s.object<WalletNumbers>({
  bacs: s.optionalNullable(s.lazy(() => recipientBacsSchema)),
  international: s.optionalNullable(s.lazy(() => numbersInternationalIbanSchema)),
});
