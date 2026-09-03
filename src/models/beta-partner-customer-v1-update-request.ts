import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerBankAddendumAcceptanceSchema,
  type PartnerEndCustomerBankAddendumAcceptance,
} from "./partner-end-customer-bank-addendum-acceptance.js";
import {
  partnerEndCustomerQuestionnairesSchema,
  type PartnerEndCustomerQuestionnaires,
} from "./partner-end-customer-questionnaires.js";

export type BetaPartnerCustomerV1UpdateRequest = {
  clientId?: string;
  secret?: string;
  endCustomerClientId: string;
  legalEntityName?: string;
  redirectUris?: string[];
  bankAddendumAcceptance?: PartnerEndCustomerBankAddendumAcceptance;
  questionnaires?: PartnerEndCustomerQuestionnaires;
};

export const betaPartnerCustomerV1UpdateRequestSchema: Schema<BetaPartnerCustomerV1UpdateRequest> =
  s.object<BetaPartnerCustomerV1UpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    endCustomerClientId: s.string(),
    legalEntityName: s.optional(s.string()),
    redirectUris: s.optional(s.array(s.string())),
    bankAddendumAcceptance: s.optional(s.lazy(() => partnerEndCustomerBankAddendumAcceptanceSchema)),
    questionnaires: s.optional(s.lazy(() => partnerEndCustomerQuestionnairesSchema)),
    _keysMap: {
      clientId: "client_id",
      endCustomerClientId: "end_customer_client_id",
      legalEntityName: "legal_entity_name",
      redirectUris: "redirect_uris",
      bankAddendumAcceptance: "bank_addendum_acceptance",
    },
  });
