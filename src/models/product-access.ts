import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The product access being requested. Used to allow or disallow product access across all accounts.
 * If unset, defaults to all products allowed.
 */
export type ProductAccess = {
  /**
   * Allow access to statements. Only used by certain partners. If relevant to the partner and
   * unset, defaults to `true`.
   *
   * @default true
   */
  statements?: boolean | null;
  /**
   * Allow access to the Identity product (name, email, phone, address). Only used by certain
   * partners. If relevant to the partner and unset, defaults to `true`.
   *
   * @default true
   */
  identity?: boolean | null;
  /**
   * Allow access to account number details. Only used by certain partners. If relevant to the
   * partner and unset, defaults to `true`.
   *
   * @default true
   */
  auth?: boolean | null;
  /**
   * Allow access to transaction details. Only used by certain partners. If relevant to the partner
   * and unset, defaults to `true`.
   *
   * @default true
   */
  transactions?: boolean | null;
  /**
   * Allow access to `accounts_details_transactions`. Only used by certain partners. If relevant to
   * the partner and unset, defaults to `true`.
   *
   * @default true
   */
  accountsDetailsTransactions?: boolean | null;
  /**
   * Allow access to `accounts_routing_number`. Only used by certain partners. If relevant to the
   * partner and unset, defaults to `true`.
   *
   * @default true
   */
  accountsRoutingNumber?: boolean | null;
  /**
   * Allow access to `accounts_statements`. Only used by certain partners. If relevant to the
   * partner and unset, defaults to `true`.
   *
   * @default true
   */
  accountsStatements?: boolean | null;
  /**
   * Allow access to `accounts_tax_statements`. Only used by certain partners. If relevant to the
   * partner and unset, defaults to `true`.
   *
   * @default true
   */
  accountsTaxStatements?: boolean | null;
  /**
   * Allow access to `customers_profiles`. Only used by certain partners. If relevant to the partner
   * and unset, defaults to `true`.
   *
   * @default true
   */
  customersProfiles?: boolean | null;
};

export const productAccessSchema: Schema<ProductAccess> = s.object<ProductAccess>({
  statements: s.defaulted(s.nullable(s.boolean()), true),
  identity: s.defaulted(s.nullable(s.boolean()), true),
  auth: s.defaulted(s.nullable(s.boolean()), true),
  transactions: s.defaulted(s.nullable(s.boolean()), true),
  accountsDetailsTransactions: s.defaulted(s.nullable(s.boolean()), true),
  accountsRoutingNumber: s.defaulted(s.nullable(s.boolean()), true),
  accountsStatements: s.defaulted(s.nullable(s.boolean()), true),
  accountsTaxStatements: s.defaulted(s.nullable(s.boolean()), true),
  customersProfiles: s.defaulted(s.nullable(s.boolean()), true),
  _keysMap: {
    accountsDetailsTransactions: "accounts_details_transactions",
    accountsRoutingNumber: "accounts_routing_number",
    accountsStatements: "accounts_statements",
    accountsTaxStatements: "accounts_tax_statements",
    customersProfiles: "customers_profiles",
  },
});
