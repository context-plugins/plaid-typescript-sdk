import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerCraUseCaseSchema,
  type PartnerEndCustomerCraUseCase,
} from "./partner-end-customer-cra-use-case.js";

/** The list of use cases associated with a given permissible purpose. */
export type PartnerEndCustomerCraUseCases = {
  /** List of use cases for the given permissible purpose. */
  useCases?: PartnerEndCustomerCraUseCase[];
};

export const partnerEndCustomerCraUseCasesSchema: Schema<PartnerEndCustomerCraUseCases> =
  s.object<PartnerEndCustomerCraUseCases>({
    useCases: s.optional(s.array(s.lazy(() => partnerEndCustomerCraUseCaseSchema))),
    _keysMap: {
      useCases: "use_cases",
    },
  });
