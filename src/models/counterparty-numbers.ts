import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterpartyNumbersBacsSchema, type CounterpartyNumbersBacs } from "./counterparty-numbers-bacs.js";
import {
  counterpartyNumbersInternationalSchema,
  type CounterpartyNumbersInternational,
} from "./counterparty-numbers-international.js";

export type CounterpartyNumbers = {
  bacs?: CounterpartyNumbersBacs | null;
  international?: CounterpartyNumbersInternational | null;
};

export const counterpartyNumbersSchema: Schema<CounterpartyNumbers> = s.object<CounterpartyNumbers>({
  bacs: s.optionalNullable(s.lazy(() => counterpartyNumbersBacsSchema)),
  international: s.optionalNullable(s.lazy(() => counterpartyNumbersInternationalSchema)),
});
