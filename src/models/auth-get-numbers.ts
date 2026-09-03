import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numbersAchSchema, type NumbersAch } from "./numbers-ach.js";
import { numbersBacsSchema, type NumbersBacs } from "./numbers-bacs.js";
import { numbersEftSchema, type NumbersEft } from "./numbers-eft.js";
import { numbersInternationalSchema, type NumbersInternational } from "./numbers-international.js";

export type AuthGetNumbers = {
  ach: NumbersAch[];
  eft: NumbersEft[];
  international: NumbersInternational[];
  bacs: NumbersBacs[];
};

export const authGetNumbersSchema: Schema<AuthGetNumbers> = s.object<AuthGetNumbers>({
  ach: s.array(s.lazy(() => numbersAchSchema)),
  eft: s.array(s.lazy(() => numbersEftSchema)),
  international: s.array(s.lazy(() => numbersInternationalSchema)),
  bacs: s.array(s.lazy(() => numbersBacsSchema)),
});
