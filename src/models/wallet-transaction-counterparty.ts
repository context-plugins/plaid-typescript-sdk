import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";
import {
  walletTransactionCounterpartyNumbersSchema,
  type WalletTransactionCounterpartyNumbers,
} from "./wallet-transaction-counterparty-numbers.js";

/** An object representing the e-wallet transaction's counterparty */
export type WalletTransactionCounterparty = {
  /** The name of the counterparty */
  name: string;
  /** The counterparty's bank account numbers. Exactly one of IBAN or Bacs data is required. */
  numbers: WalletTransactionCounterpartyNumbers;
  /**
   * The optional address of the payment recipient's bank account. Required by most institutions
   * outside of the UK.
   */
  address?: PaymentInitiationAddress | null;
  /**
   * The counterparty's birthdate, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD)
   * format.
   */
  dateOfBirth?: string | null;
};

export const walletTransactionCounterpartySchema: Schema<WalletTransactionCounterparty> =
  s.object<WalletTransactionCounterparty>({
    name: s.string(),
    numbers: walletTransactionCounterpartyNumbersSchema,
    address: s.optionalNullable(s.lazy(() => paymentInitiationAddressSchema)),
    dateOfBirth: s.optionalNullable(s.dateOnly()),
    _keysMap: {
      dateOfBirth: "date_of_birth",
    },
  });
