import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numbersAchNullableSchema, type NumbersAchNullable } from "./numbers-ach-nullable.js";
import { numbersBacsNullableSchema, type NumbersBacsNullable } from "./numbers-bacs-nullable.js";
import { numbersEftNullableSchema, type NumbersEftNullable } from "./numbers-eft-nullable.js";
import {
  numbersInternationalNullableSchema,
  type NumbersInternationalNullable,
} from "./numbers-international-nullable.js";

/**
 * An object containing identifying numbers used for making electronic transfers to and from the
 * `account`. The identifying number type (ACH, EFT, IBAN, or Bacs) used will depend on the country
 * of the account. An account may have more than one number type. If a particular identifying number
 * type is not used by the `account` for which auth data has been requested, a null value will be
 * returned.
 */
export type ProcessorNumber = {
  /**
   * Identifying information for transferring money to or from a US account via ACH or wire
   * transfer.
   */
  ach?: NumbersAchNullable | null;
  /** Identifying information for transferring money to or from a Canadian bank account via EFT. */
  eft?: NumbersEftNullable | null;
  /**
   * Identifying information for transferring money to or from an international bank account via
   * wire transfer.
   */
  international?: NumbersInternationalNullable | null;
  /** Identifying information for transferring money to or from a UK bank account via Bacs. */
  bacs?: NumbersBacsNullable | null;
};

export const processorNumberSchema: Schema<ProcessorNumber> = s.object<ProcessorNumber>({
  ach: s.optionalNullable(s.lazy(() => numbersAchNullableSchema)),
  eft: s.optionalNullable(s.lazy(() => numbersEftNullableSchema)),
  international: s.optionalNullable(s.lazy(() => numbersInternationalNullableSchema)),
  bacs: s.optionalNullable(s.lazy(() => numbersBacsNullableSchema)),
});
