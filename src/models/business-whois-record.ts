import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** WHOIS metadata for the business website domain. */
export type BusinessWhoisRecord = {
  /** An ISO8601 formatted timestamp. */
  domainCreatedAt: Date | null;
  /** An ISO8601 formatted timestamp. */
  domainUpdatedAt: Date | null;
  /** An ISO8601 formatted timestamp. */
  domainExpiresAt: Date | null;
  /** Domain registrar. */
  registrar: string | null;
};

export const businessWhoisRecordSchema: Schema<BusinessWhoisRecord> = s.object<BusinessWhoisRecord>({
  domainCreatedAt: s.nullable(s.dateTime()),
  domainUpdatedAt: s.nullable(s.dateTime()),
  domainExpiresAt: s.nullable(s.dateTime()),
  registrar: s.nullable(s.string()),
  _keysMap: {
    domainCreatedAt: "domain_created_at",
    domainUpdatedAt: "domain_updated_at",
    domainExpiresAt: "domain_expires_at",
  },
});
