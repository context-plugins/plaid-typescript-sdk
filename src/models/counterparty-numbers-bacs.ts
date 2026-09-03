import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CounterpartyNumbersBacs = {
  account?: string | null;
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
