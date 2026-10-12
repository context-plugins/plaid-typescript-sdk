import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { proxyTypeSchema, type ProxyType } from "./proxy-type.js";
import { riskLevelSchema, type RiskLevel } from "./risk-level.js";

/** Result summary object specifying values for `device` attributes of risk check. */
export type RiskCheckDevice = {
  /**
   * An enum indicating whether a network proxy is present and if so what type it is.
   *
   * `none_detected` indicates the user is not on a detectable proxy network.
   *
   * `tor` indicates the user was using a Tor browser, which sends encrypted traffic on a
   * decentralized network and is somewhat similar to a VPN (Virtual Private Network).
   *
   * `vpn` indicates the user is on a VPN (Virtual Private Network)
   *
   * `web_proxy` indicates the user is on a web proxy server, which may allow them to conceal
   * information such as their IP address or other identifying information.
   *
   * `public_proxy` indicates the user is on a public web proxy server, which is similar to a web
   * proxy but can be shared by multiple users. This may allow multiple users to appear as if they
   * have the same IP address for instance.
   */
  ipProxyType: ProxyType | null;
  /** Count of spam lists the IP address is associated with if known. */
  ipSpamListCount: number | null;
  /** UTC offset of the timezone associated with the IP address. */
  ipTimezoneOffset: string | null;
  /** Risk level for the given risk check type. */
  riskLevel?: RiskLevel;
  /**
   * List of factors, when available, that contribute towards the risk level of the given risk check
   * type.
   */
  factors?: string[];
};

export const riskCheckDeviceSchema: Schema<RiskCheckDevice> = s.object<RiskCheckDevice>({
  ipProxyType: s.nullable(s.lazy(() => proxyTypeSchema)),
  ipSpamListCount: s.nullable(s.int()),
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
