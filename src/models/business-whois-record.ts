import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessWhoisRecord = {
  domainCreatedAt: Date | null;
  domainUpdatedAt: Date | null;
  domainExpiresAt: Date | null;
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
