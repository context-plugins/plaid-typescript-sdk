import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankEmployer = {
  name: string;
};

export const creditBankEmployerSchema: Schema<CreditBankEmployer> = s.object<CreditBankEmployer>({
  name: s.string(),
});
