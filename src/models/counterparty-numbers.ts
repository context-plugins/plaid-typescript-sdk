import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterpartyNumbersBacsSchema, type CounterpartyNumbersBacs } from "./counterparty-numbers-bacs.js";
import {
  counterpartyNumbersInternationalSchema,
  type CounterpartyNumbersInternational,
} from "./counterparty-numbers-international.js";

/**
 * Account numbers associated with the counterparty, when available. This field is currently only
 * filled in for select financial institutions in Europe.
 */
export type CounterpartyNumbers = {
  /** Identifying information for a UK bank account via Bacs. */
  bacs?: CounterpartyNumbersBacs | null;
  /** Account numbers using the International Bank Account Number and BIC/SWIFT code format. */
  international?: CounterpartyNumbersInternational | null;
};

export const counterpartyNumbersSchema: Schema<CounterpartyNumbers> = s.object<CounterpartyNumbers>({
  bacs: s.optionalNullable(s.lazy(() => counterpartyNumbersBacsSchema)),
  international: s.optionalNullable(s.lazy(() => counterpartyNumbersInternationalSchema)),
});
