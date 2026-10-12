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

/** Result summary object specifying values for `email` attributes of risk check. */
export type RiskCheckEmail = {
  /** SMTP-MX check to confirm the email address exists if known. */
  isDeliverable: RiskCheckEmailIsDeliverableStatus;
  /** Count of all known breaches of this email address if known. */
  breachCount: number | null;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  firstBreachedAt: string | null;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  lastBreachedAt: string | null;
  /** A date in the format YYYY-MM-DD (RFC 3339 Section 5.6). */
  domainRegisteredAt: string | null;
  /**
   * Indicates whether the email address domain is a free provider such as Gmail or Hotmail if
   * known.
   */
  domainIsFreeProvider: RiskCheckEmailDomainIsFreeProvider;
  /**
   * Indicates whether the email address domain is custom if known, i.e. a company domain and not
   * free or disposable.
   */
  domainIsCustom: RiskCheckEmailDomainIsCustom;
  /**
   * Indicates whether the email domain is listed as disposable if known. Disposable domains are
   * often used to create email addresses that are part of a fake set of user details.
   */
  domainIsDisposable: RiskCheckEmailDomainIsDisposable;
  /**
   * Indicates whether the email address top level domain, which is the last part of the domain, is
   * fraudulent or risky if known. In most cases, a suspicious top level domain is also associated
   * with a disposable or high-risk domain.
   */
  topLevelDomainIsSuspicious: RiskCheckEmailTopLevelDomainIsSuspicious;
  /** Indicates whether the email address domain is an educational institution domain if known. */
  isEdu: RiskCheckEmailIsEdu;
  /** Indicates whether the email address includes the date of birth or year of birth if known. */
  includesDateOfBirth: RiskCheckEmailIncludesDateOfBirth;
  /**
   * Indicates whether the provided name matches the email address according to the KYC
   * name-matches-email inference result if known.
   *
   * `match` - "The email's name identifiers match the user's name."
   *
   * `partial_match` - "The email's name identifiers partially match the user's name."
   *
   * `no_match` - "The email's name identifiers do not match the user's name."
   *
   * `indeterminate` - "The email does not contain any name identifiers, and a match could not be
   * determined."
   *
   * `no_input` - "The user's profile does not contain the required user inputs to determine a
   * match."
   *
   * `no_data` - "Field could not be verified against available sources."
   */
  name: RiskCheckEmailName;
  /**
   * A list of online services where this email address has been detected to have accounts or other
   * activity.
   */
  linkedServices: RiskCheckLinkedService[];
  /** Risk level for the given risk check type. */
  riskLevel?: RiskLevel;
  /**
   * List of factors, when available, that contribute towards the risk level of the given risk check
   * type.
   */
  factors?: string[];
};

export const riskCheckEmailSchema: Schema<RiskCheckEmail> = s.object<RiskCheckEmail>({
  isDeliverable: riskCheckEmailIsDeliverableStatusSchema,
  breachCount: s.nullable(s.int()),
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
