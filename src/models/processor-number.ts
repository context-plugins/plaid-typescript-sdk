import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numbersAchNullableSchema, type NumbersAchNullable } from "./numbers-ach-nullable.js";
import { numbersBacsNullableSchema, type NumbersBacsNullable } from "./numbers-bacs-nullable.js";
import { numbersEftNullableSchema, type NumbersEftNullable } from "./numbers-eft-nullable.js";
import {
  numbersInternationalNullableSchema,
  type NumbersInternationalNullable,
} from "./numbers-international-nullable.js";

export type ProcessorNumber = {
  ach?: NumbersAchNullable | null;
  eft?: NumbersEftNullable | null;
  international?: NumbersInternationalNullable | null;
  bacs?: NumbersBacsNullable | null;
};

export const processorNumberSchema: Schema<ProcessorNumber> = s.object<ProcessorNumber>({
  ach: s.optionalNullable(s.lazy(() => numbersAchNullableSchema)),
  eft: s.optionalNullable(s.lazy(() => numbersEftNullableSchema)),
  international: s.optionalNullable(s.lazy(() => numbersInternationalNullableSchema)),
  bacs: s.optionalNullable(s.lazy(() => numbersBacsNullableSchema)),
});
