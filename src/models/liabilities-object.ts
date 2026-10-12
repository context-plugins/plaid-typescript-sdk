import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditCardLiabilitySchema, type CreditCardLiability } from "./credit-card-liability.js";
import { mortgageLiabilitySchema, type MortgageLiability } from "./mortgage-liability.js";
import { studentLoanSchema, type StudentLoan } from "./student-loan.js";

/** An object containing liability accounts */
export type LiabilitiesObject = {
  /** The credit accounts returned. */
  credit: CreditCardLiability[] | null;
  /** The mortgage accounts returned. */
  mortgage: MortgageLiability[] | null;
  /** The student loan accounts returned. */
  student: StudentLoan[] | null;
};

export const liabilitiesObjectSchema: Schema<LiabilitiesObject> = s.object<LiabilitiesObject>({
  credit: s.nullable(s.array(s.lazy(() => creditCardLiabilitySchema))),
  mortgage: s.nullable(s.array(s.lazy(() => mortgageLiabilitySchema))),
  student: s.nullable(s.array(s.lazy(() => studentLoanSchema))),
});
