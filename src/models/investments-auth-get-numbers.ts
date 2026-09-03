import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numbersAcatsSchema, type NumbersAcats } from "./numbers-acats.js";
import { numbersAtonSchema, type NumbersAton } from "./numbers-aton.js";
import { numbersRetirement401KSchema, type NumbersRetirement401K } from "./numbers-retirement401-k.js";

export type InvestmentsAuthGetNumbers = {
  acats?: NumbersAcats[];
  aton?: NumbersAton[];
  retirement401K?: NumbersRetirement401K[];
};

export const investmentsAuthGetNumbersSchema: Schema<InvestmentsAuthGetNumbers> =
  s.object<InvestmentsAuthGetNumbers>({
    acats: s.optional(s.array(s.lazy(() => numbersAcatsSchema))),
    aton: s.optional(s.array(s.lazy(() => numbersAtonSchema))),
    retirement401K: s.optional(s.array(s.lazy(() => numbersRetirement401KSchema))),
    _keysMap: {
      retirement401K: "retirement_401k",
    },
  });
