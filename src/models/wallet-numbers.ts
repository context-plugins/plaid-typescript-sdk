import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  numbersInternationalIbanSchema,
  type NumbersInternationalIban,
} from "./numbers-international-iban.js";
import { recipientBacsSchema, type RecipientBacs } from "./recipient-bacs.js";

export type WalletNumbers = {
  bacs?: RecipientBacs | null;
  international?: NumbersInternationalIban | null;
};

export const walletNumbersSchema: Schema<WalletNumbers> = s.object<WalletNumbers>({
  bacs: s.optionalNullable(s.lazy(() => recipientBacsSchema)),
  international: s.optionalNullable(s.lazy(() => numbersInternationalIbanSchema)),
});
