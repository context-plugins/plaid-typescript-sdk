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

export type WalletTransactionCounterparty = {
  name: string;
  numbers: WalletTransactionCounterpartyNumbers;
  address?: PaymentInitiationAddress | null;
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
