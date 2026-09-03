import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  riskCheckEmailDomainIsCustomSchema,
  type RiskCheckEmailDomainIsCustom,
} from "./risk-check-email-domain-is-custom.js";
import {
  riskCheckEmailDomainIsDisposableSchema,
  type RiskCheckEmailDomainIsDisposable,
} from "./risk-check-email-domain-is-disposable.js";
import {
  riskCheckEmailDomainIsFreeProviderSchema,
  type RiskCheckEmailDomainIsFreeProvider,
} from "./risk-check-email-domain-is-free-provider.js";
import {
  riskCheckEmailIncludesDateOfBirthSchema,
  type RiskCheckEmailIncludesDateOfBirth,
} from "./risk-check-email-includes-date-of-birth.js";
import {
  riskCheckEmailIsDeliverableStatusSchema,
  type RiskCheckEmailIsDeliverableStatus,
} from "./risk-check-email-is-deliverable-status.js";
import { riskCheckEmailIsEduSchema, type RiskCheckEmailIsEdu } from "./risk-check-email-is-edu.js";
import { riskCheckEmailNameSchema, type RiskCheckEmailName } from "./risk-check-email-name.js";
import {
  riskCheckEmailTopLevelDomainIsSuspiciousSchema,
  type RiskCheckEmailTopLevelDomainIsSuspicious,
} from "./risk-check-email-top-level-domain-is-suspicious.js";
import { riskCheckLinkedServiceSchema, type RiskCheckLinkedService } from "./risk-check-linked-service.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

export type RiskCheckEmail = {
  isDeliverable: RiskCheckEmailIsDeliverableStatus;
  breachCount: number | null;
  firstBreachedAt: string | null;
  lastBreachedAt: string | null;
  domainRegisteredAt: string | null;
  domainIsFreeProvider: RiskCheckEmailDomainIsFreeProvider;
  domainIsCustom: RiskCheckEmailDomainIsCustom;
  domainIsDisposable: RiskCheckEmailDomainIsDisposable;
  topLevelDomainIsSuspicious: RiskCheckEmailTopLevelDomainIsSuspicious;
  isEdu: RiskCheckEmailIsEdu;
  includesDateOfBirth: RiskCheckEmailIncludesDateOfBirth;
  name: RiskCheckEmailName;
  linkedServices: RiskCheckLinkedService[];
  riskLevel?: RiskLevel;
  factors?: string[];
};

export const riskCheckEmailSchema: Schema<RiskCheckEmail> = s.object<RiskCheckEmail>({
  isDeliverable: riskCheckEmailIsDeliverableStatusSchema,
  breachCount: s.nullable(s.number()),
  firstBreachedAt: s.nullable(s.dateOnly()),
  lastBreachedAt: s.nullable(s.dateOnly()),
  domainRegisteredAt: s.nullable(s.dateOnly()),
  domainIsFreeProvider: riskCheckEmailDomainIsFreeProviderSchema,
  domainIsCustom: riskCheckEmailDomainIsCustomSchema,
  domainIsDisposable: riskCheckEmailDomainIsDisposableSchema,
  topLevelDomainIsSuspicious: riskCheckEmailTopLevelDomainIsSuspiciousSchema,
  isEdu: riskCheckEmailIsEduSchema,
  includesDateOfBirth: riskCheckEmailIncludesDateOfBirthSchema,
  name: riskCheckEmailNameSchema,
  linkedServices: s.array(s.lazy(() => riskCheckLinkedServiceSchema)),
  riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
  factors: s.optional(s.array(s.string())),
  _keysMap: {
    isDeliverable: "is_deliverable",
    breachCount: "breach_count",
    firstBreachedAt: "first_breached_at",
    lastBreachedAt: "last_breached_at",
    domainRegisteredAt: "domain_registered_at",
    domainIsFreeProvider: "domain_is_free_provider",
    domainIsCustom: "domain_is_custom",
    domainIsDisposable: "domain_is_disposable",
    topLevelDomainIsSuspicious: "top_level_domain_is_suspicious",
    isEdu: "is_edu",
    includesDateOfBirth: "includes_date_of_birth",
    linkedServices: "linked_services",
    riskLevel: "risk_level",
  },
});
