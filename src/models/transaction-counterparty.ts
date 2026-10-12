import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { counterpartyNumbersSchema, type CounterpartyNumbers } from "./counterparty-numbers.js";
import { counterpartyTypeSchema, type CounterpartyType } from "./counterparty-type.js";

/**
 * The counterparty, such as the merchant or financial institution, is extracted by Plaid from the
 * raw description.
 */
export type TransactionCounterparty = {
  /**
   * The name of the counterparty, such as the merchant or the financial institution, as extracted
   * by Plaid from the raw description.
   */
  name: string;
  /** A unique, stable, Plaid-generated ID that maps to the counterparty. */
  entityId?: string | null;
  /**
   * The counterparty type.
   *
   * `merchant`: a provider of goods or services for purchase `financial_institution`: a financial
   * entity (bank, credit union, BNPL, fintech) `payment_app`: a transfer or P2P app (e.g. Zelle)
   * `marketplace`: a marketplace (e.g. DoorDash, Google Play Store) `payment_terminal`: a
   * point-of-sale payment terminal (e.g. Square, Toast) `income_source`: the payer in an income
   * transaction (e.g., an employer, client, or government agency)
   */
  type: CounterpartyType;
  /** The website associated with the counterparty. */
  website: string | null;
  /**
   * The URL of a logo associated with the counterparty, if available. The logo will always be a
   * 100×100 pixel PNG file.
   */
  logoUrl: string | null;
  /**
   * A description of how confident we are that the provided counterparty is involved in the
   * transaction.
   *
   * `VERY_HIGH`: We recognize this counterparty and we are more than 98% confident that it is
   * involved in this transaction. `HIGH`: We recognize this counterparty and we are more than 90%
   * confident that it is involved in this transaction. `MEDIUM`: We are moderately confident that
   * this counterparty was involved in this transaction, but some details may differ from our
   * records. `LOW`: We didn't find a matching counterparty in our records, so we are returning a
   * cleansed name parsed out of the request description. `UNKNOWN`: We don't know the confidence
   * level for this counterparty.
   */
  confidenceLevel?: string | null;
  /**
   * Account numbers associated with the counterparty, when available. This field is currently only
   * filled in for select financial institutions in Europe.
   */
  accountNumbers?: CounterpartyNumbers | null;
};

export const transactionCounterpartySchema: Schema<TransactionCounterparty> =
  s.object<TransactionCounterparty>({
    name: s.string(),
    entityId: s.optionalNullable(s.string()),
    type: counterpartyTypeSchema,
    website: s.nullable(s.string()),
    logoUrl: s.nullable(s.string()),
    confidenceLevel: s.optionalNullable(s.string()),
    accountNumbers: s.optionalNullable(s.lazy(() => counterpartyNumbersSchema)),
    _keysMap: {
      entityId: "entity_id",
      logoUrl: "logo_url",
      confidenceLevel: "confidence_level",
      accountNumbers: "account_numbers",
    },
  });
