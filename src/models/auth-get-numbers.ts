import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numbersAchSchema, type NumbersAch } from "./numbers-ach.js";
import { numbersBacsSchema, type NumbersBacs } from "./numbers-bacs.js";
import { numbersEftSchema, type NumbersEft } from "./numbers-eft.js";
import { numbersInternationalSchema, type NumbersInternational } from "./numbers-international.js";

/**
 * An object containing identifying numbers used for making electronic transfers to and from the
 * `accounts`. The identifying number type (ACH, EFT, IBAN, or Bacs) used will depend on the country
 * of the account. An account may have more than one number type. If a particular identifying number
 * type is not used by any `accounts` for which data has been requested, the array for that type
 * will be empty.
 */
export type AuthGetNumbers = {
  /** An array of ACH numbers identifying accounts. */
  ach: NumbersAch[];
  /** An array of EFT numbers identifying accounts. */
  eft: NumbersEft[];
  /** An array of IBAN numbers identifying accounts. */
  international: NumbersInternational[];
  /** An array of Bacs numbers identifying accounts. */
  bacs: NumbersBacs[];
};

export const authGetNumbersSchema: Schema<AuthGetNumbers> = s.object<AuthGetNumbers>({
  ach: s.array(s.lazy(() => numbersAchSchema)),
  eft: s.array(s.lazy(() => numbersEftSchema)),
  international: s.array(s.lazy(() => numbersInternationalSchema)),
  bacs: s.array(s.lazy(() => numbersBacsSchema)),
});
