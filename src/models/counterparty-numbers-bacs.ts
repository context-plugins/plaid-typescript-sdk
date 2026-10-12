import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifying information for a UK bank account via Bacs. */
export type CounterpartyNumbersBacs = {
  /** The Bacs account number for the account. */
  account?: string | null;
  /** The Bacs sort code for the account. */
  sortCode?: string | null;
};

export const counterpartyNumbersBacsSchema: Schema<CounterpartyNumbersBacs> =
  s.object<CounterpartyNumbersBacs>({
    account: s.optionalNullable(s.string()),
    sortCode: s.optionalNullable(s.string()),
    _keysMap: {
      sortCode: "sort_code",
    },
  });
