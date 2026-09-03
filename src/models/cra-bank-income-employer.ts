import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraBankIncomeEmployer = {
  name: string | null;
};

export const craBankIncomeEmployerSchema: Schema<CraBankIncomeEmployer> = s.object<CraBankIncomeEmployer>({
  name: s.nullable(s.string()),
});
