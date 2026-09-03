import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { proxyTypeSchema, type ProxyType } from "./proxy-type.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

export type RiskCheckDevice = {
  ipProxyType: ProxyType | null;
  ipSpamListCount: number | null;
  ipTimezoneOffset: string | null;
  riskLevel?: RiskLevel;
  factors?: string[];
};

export const riskCheckDeviceSchema: Schema<RiskCheckDevice> = s.object<RiskCheckDevice>({
  ipProxyType: s.nullable(s.lazy(() => proxyTypeSchema)),
  ipSpamListCount: s.nullable(s.number()),
  ipTimezoneOffset: s.nullable(s.string()),
  riskLevel: s.optional(s.lazy(() => riskLevelSchema)),
  factors: s.optional(s.array(s.string())),
  _keysMap: {
    ipProxyType: "ip_proxy_type",
    ipSpamListCount: "ip_spam_list_count",
    ipTimezoneOffset: "ip_timezone_offset",
    riskLevel: "risk_level",
  },
});
