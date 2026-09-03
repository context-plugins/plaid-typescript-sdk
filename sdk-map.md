<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — The Plaid API (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | The Plaid API |
| Package | `the-plaid-api` |
| Package version | `2020-09-14_1.708.0` |
| API spec version | `2020-09-14_1.708.0` |
| Import specifier | `the-plaid-api` — the package root is the **only** entry. Deep imports (`the-plaid-api/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/the-plaid-api/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { ServerEnvironment, ThePlaidApiClient } from "the-plaid-api";

const client = new ThePlaidApiClient({
  serverEnvironment: ServerEnvironment.Production,
  clientId: "YOUR_API_KEY",
  secret: "YOUR_API_KEY",
  plaidVersion: "YOUR_API_KEY",
  oauth2: { clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET" },
});
```

The only constructor is `new ThePlaidApiClient(clientOptions: Partial<ClientOptions> = {})`, so `new ThePlaidApiClient()` is valid. 335 operations are methods on the client itself.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `clientId` | `TokenProvider \| undefined` | unset |
| `secret` | `TokenProvider \| undefined` | unset |
| `plaidVersion` | `TokenProvider \| undefined` | unset |
| `oauth2` | `OAuth2ClientCredentials \| undefined` | unset |
| `oauth2Strategy` | `OAuth2TokenStrategy<OAuth2ClientCredentials> \| undefined` | the built-in grant |

The 5 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `ThePlaidApiError` set. `ThePlaidApiError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `ThePlaidApiError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.accountsBalanceGet({ body });
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof ThePlaidApiError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **335 operations**, **289** declare typed error bodies and **46** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (1 group, 335 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `client` (ungrouped) | 335 | [map/operations/client.md](map/operations/client.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type AamvaAnalysis, aamvaAnalysisSchema } from "the-plaid-api";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 1750 | `src/models/` |
| Enums (open; const companion plus schema) | 354 | `src/models/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AamvaDetailedMatchResult` | `Match` to `"match"` · `PartialMatch` to `"partial_match"` · `NoMatch` to `"no_match"` · `NoData` to `"no_data"` | `aamvaDetailedMatchResultSchema` |
| `AamvaMatchResult` | `Match` to `"match"` · `NoMatch` to `"no_match"` · `NoData` to `"no_data"` | `aamvaMatchResultSchema` |
| `AchClass` | `Ccd` to `"ccd"` · `Ppd` to `"ppd"` · `Tel` to `"tel"` · `Web` to `"web"` | `achClassSchema` |
| `AccountSelectionCardinality` | `SingleSelect` to `"SINGLE_SELECT"` · `MultiSelect` to `"MULTI_SELECT"` · `All` to `"ALL"` | `accountSelectionCardinalitySchema` |
| `AccountSubtype` | `_401A` to `"401a"` · `_401K` to `"401k"` · `_403B` to `"403B"` · `_457B` to `"457b"` · `_529` to `"529"` · `Auto` to `"auto"` · `Brokerage` to `"brokerage"` · `Business` to `"business"` · `CashIsa` to `"cash isa"` · `CashManagement` to `"cash management"` · `Cd` to `"cd"` · `Checking` to `"checking"` · `Commercial` to `"commercial"` · `Construction` to `"construction"` · `Consumer` to `"consumer"` · `CreditCard` to `"credit card"` · `CryptoExchange` to `"crypto exchange"` · `Ebt` to `"ebt"` · `EducationSavingsAccount` to `"education savings account"` · `Fhsa` to `"fhsa"` · `FixedAnnuity` to `"fixed annuity"` · `Gic` to `"gic"` · `HealthReimbursementArrangement` to `"health reimbursement arrangement"` · `HomeEquity` to `"home equity"` · `Hsa` to `"hsa"` · `Isa` to `"isa"` · `Ira` to `"ira"` · `Keogh` to `"keogh"` · `Lif` to `"lif"` · `LifeInsurance` to `"life insurance"` · `LimitedPurposeChecking` to `"limited purpose checking"` · `LineOfCredit` to `"line of credit"` · `Lira` to `"lira"` · `Loan` to `"loan"` · `Lrif` to `"lrif"` · `Lrsp` to `"lrsp"` · `MoneyMarket` to `"money market"` · `Mortgage` to `"mortgage"` · `MutualFund` to `"mutual fund"` · `NonCustodialWallet` to `"non-custodial wallet"` · `NonTaxableBrokerageAccount` to `"non-taxable brokerage account"` · `Other` to `"other"` · `OtherInsurance` to `"other insurance"` · `OtherAnnuity` to `"other annuity"` · `Overdraft` to `"overdraft"` · `Paypal` to `"paypal"` · `Payroll` to `"payroll"` · `Pension` to `"pension"` · `Prepaid` to `"prepaid"` · `Prif` to `"prif"` · `ProfitSharingPlan` to `"profit sharing plan"` · `Qshr` to `"qshr"` · `Rdsp` to `"rdsp"` · `Resp` to `"resp"` · `Retirement` to `"retirement"` · `Rlif` to `"rlif"` · `Roth` to `"roth"` · `Roth401K` to `"roth 401k"` · `Roth403B` to `"roth 403B"` · `Roth457B` to `"roth 457b"` · `RothPension` to `"roth pension"` · `RothProfitSharingPlan` to `"roth profit sharing plan"` · `RothThriftSavingsPlan` to `"roth thrift savings plan"` · `Rrif` to `"rrif"` · `Rrsp` to `"rrsp"` · `Sarsep` to `"sarsep"` · `Savings` to `"savings"` · `SepIra` to `"sep ira"` · `SimpleIra` to `"simple ira"` · `Sipp` to `"sipp"` · `StockPlan` to `"stock plan"` · `Student` to `"student"` · `ThriftSavingsPlan` to `"thrift savings plan"` · `Tfsa` to `"tfsa"` · `Trust` to `"trust"` · `Ugma` to `"ugma"` · `Utma` to `"utma"` · `VariableAnnuity` to `"variable annuity"` | `accountSubtypeSchema` |
| `AccountType` | `Investment` to `"investment"` · `Credit` to `"credit"` · `Depository` to `"depository"` · `Loan` to `"loan"` · `Brokerage` to `"brokerage"` · `Other` to `"other"` | `accountTypeSchema` |
| `ActionState` | `Unknown` to `"UNKNOWN"` · `Attempt` to `"ATTEMPT"` · `Success` to `"SUCCESS"` · `Failure` to `"FAILURE"` · `Skipped` to `"SKIPPED"` | `actionStateSchema` |
| `ActivityType` | `Unknown` to `"UNKNOWN"` · `ItemCreate` to `"ITEM_CREATE"` · `ItemImport` to `"ITEM_IMPORT"` · `ItemUpdate` to `"ITEM_UPDATE"` · `ItemUnlink` to `"ITEM_UNLINK"` · `PortalUnlink` to `"PORTAL_UNLINK"` · `PortalItemsDelete` to `"PORTAL_ITEMS_DELETE"` · `ItemRemove` to `"ITEM_REMOVE"` · `InvariantCheckerDeletion` to `"INVARIANT_CHECKER_DELETION"` · `ScopesUpdate` to `"SCOPES_UPDATE"` | `activityTypeSchema` |
| `AddressPurposeLabel` | `Residential` to `"residential"` · `Commercial` to `"commercial"` · `NoData` to `"no_data"` | `addressPurposeLabelSchema` |
| `AprType` | `BalanceTransferApr` to `"balance_transfer_apr"` · `CashApr` to `"cash_apr"` · `PurchaseApr` to `"purchase_apr"` · `Special` to `"special"` | `aprTypeSchema` |
| `AssetEmployerSponsoredIndicator` | `Yes` to `"Yes"` · `No` to `"No"` | `assetEmployerSponsoredIndicatorSchema` |
| `AssetHoldingRestrictedIndicator` | `Yes` to `"Yes"` · `No` to `"No"` | `assetHoldingRestrictedIndicatorSchema` |
| `AssetHoldingType` | `Bond` to `"Bond"` · `Stock` to `"Stock"` · `Crypto` to `"Crypto"` · `Other` to `"Other"` | `assetHoldingTypeSchema` |
| `AssetInvestmentTransactionType` | `Buy` to `"Buy"` · `Sell` to `"Sell"` · `Dividends` to `"Dividends"` · `Interest` to `"Interest"` · `Transfers` to `"Transfers"` · `Reinvestments` to `"Reinvestments"` · `FundsReceived` to `"FundsReceived"` · `Other` to `"Other"` | `assetInvestmentTransactionTypeSchema` |
| `AssetReportAddOns` | `Investments` to `"investments"` · `FastAssets` to `"fast_assets"` | `assetReportAddOnsSchema` |
| `AssetReportTransactionType` | `Digital` to `"digital"` · `Place` to `"place"` · `Special` to `"special"` · `Unresolved` to `"unresolved"` | `assetReportTransactionTypeSchema` |
| `AssetReportType` | `Full` to `"FULL"` · `Fast` to `"FAST"` | `assetReportTypeSchema` |
| `AssetRetirementIndicator` | `Yes` to `"Yes"` · `No` to `"No"` | `assetRetirementIndicatorSchema` |
| `AssetTransactionCategoryType` | `AtmFee` to `"ATMFee"` · `Advertising` to `"Advertising"` · `AirTravel` to `"AirTravel"` · `AlcoholBars` to `"AlcoholBars"` · `Allowance` to `"Allowance"` · `Amusement` to `"Amusement"` · `Arts` to `"Arts"` · `AutoTransport` to `"AutoTransport"` · `AutoInsurance` to `"AutoInsurance"` · `AutoPayment` to `"AutoPayment"` · `BabySupplies` to `"BabySupplies"` · `BabysitterDaycare` to `"BabysitterDaycare"` · `BankFee` to `"BankFee"` · `BillsUtilities` to `"BillsUtilities"` · `Bonus` to `"Bonus"` · `BooksSupplies` to `"BooksSupplies"` · `BusinessServices` to `"Business Services"` · `Buy` to `"Buy"` · `CashAtm` to `"CashATM"` · `Charity` to `"Charity"` · `Check` to `"Check"` · `ChildSupport` to `"ChildSupport"` · `Clothing` to `"Clothing"` · `CoffeeShops` to `"CoffeeShops"` · `CreditCardPayment` to `"CreditCardPayment"` · `Dentist` to `"Dentist"` · `Doctor` to `"Doctor"` · `Education` to `"Education"` · `ElectronicsSoftware` to `"ElectronicsSoftware"` · `Entertainment` to `"Entertainment"` · `Eyecare` to `"Eyecare"` · `FastFood` to `"FastFood"` · `FederalTax` to `"FederalTax"` · `FeesCharges` to `"FeesCharges"` · `FinanceCharge` to `"FinanceCharge"` · `Financial` to `"Financial"` · `FinancialAdvisor` to `"FinancialAdvisor"` · `FoodDining` to `"FoodDining"` · `Furnishings` to `"Furnishings"` · `GasFuel` to `"GasFuel"` · `GiftsDonations` to `"GiftsDonations"` · `Groceries` to `"Groceries"` · `Gym` to `"Gym"` · `Hair` to `"Hair"` · `HealthFitness` to `"HealthFitness"` · `HealthInsurance` to `"HealthInsurance"` · `Hobbies` to `"Hobbies"` · `Home` to `"Home"` · `HomeImprovement` to `"HomeImprovement"` · `HomeInsurance` to `"HomeInsurance"` · `HomePhone` to `"HomePhone"` · `HomeServices` to `"HomeServices"` · `HomeSupplies` to `"HomeSupplies"` · `Hotel` to `"Hotel"` · `Income` to `"Income"` · `InterestIncome` to `"InterestIncome"` · `Internet` to `"Internet"` · `Investments` to `"Investments"` · `Kids` to `"Kids"` · `KidsActivities` to `"KidsActivities"` · `LateFee` to `"LateFee"` · `Laundry` to `"Laundry"` · `LawnGarden` to `"LawnGarden"` · `Legal` to `"Legal"` · `LifeInsurance` to `"LifeInsurance"` · `LoanInsurance` to `"LoanInsurance"` · `LoanPayment` to `"LoanPayment"` · `Loans` to `"Loans"` · `MobilePhone` to `"MobilePhone"` · `MortgageRent` to `"MortgageRent"` · `MoviesDvDs` to `"MoviesDVDs"` · `Music` to `"Music"` · `NewspapersMagazines` to `"NewspapersMagazines"` · `OfficeSupplies` to `"OfficeSupplies"` · `Parking` to `"Parking"` · `Paycheck` to `"Paycheck"` · `PersonalCare` to `"PersonalCare"` · `PetFoodSupplies` to `"PetFoodSupplies"` · `PetGrooming` to `"PetGrooming"` · `Pets` to `"Pets"` · `Pharmacy` to `"Pharmacy"` · `Printing` to `"Printing"` · `PropertyTax` to `"Property Tax"` · `PublicTransportation` to `"Public Transportation"` · `Reimbursement` to `"Reimbursement"` · `RentalCarTaxi` to `"RentalCarTaxi"` · `Restaurants` to `"Restaurants"` · `SalesTax` to `"SalesTax"` · `ServiceParts` to `"ServiceParts"` · `ServiceFee` to `"ServiceFee"` · `Shipping` to `"Shipping"` · `Shopping` to `"Shopping"` · `SpaMassage` to `"SpaMassage"` · `SportingGoods` to `"SportingGoods"` · `Sports` to `"Sports"` · `StateTax` to `"StateTax"` · `StudentLoan` to `"Student Loan"` · `Taxes` to `"Taxes"` · `Television` to `"Television"` · `Toys` to `"Toys"` · `Transfer` to `"Transfer"` · `Travel` to `"Travel"` · `Tuition` to `"Tuition"` · `Uncategorized` to `"Uncategorized"` · `Utilities` to `"Utilities"` · `Vacation` to `"Vacation"` · `Veterinary` to `"Veterinary"` | `assetTransactionCategoryTypeSchema` |
| `AssetTransactionType` | `Credit` to `"Credit"` · `Debit` to `"Debit"` | `assetTransactionTypeSchema` |
| `AssetType` | `CheckingAccount` to `"CheckingAccount"` · `SavingsAccount` to `"SavingsAccount"` · `Investment` to `"Investment"` · `MoneyMarketFund` to `"MoneyMarketFund"` · `Other` to `"Other"` | `assetTypeSchema` |
| `AuthUpdateTypes` | `AccountNumber` to `"ACCOUNT_NUMBER"` · `RoutingNumber` to `"ROUTING_NUMBER"` | `authUpdateTypesSchema` |
| `BankIncomeCompleteResult` | `Success` to `"SUCCESS"` · `Failure` to `"FAILURE"` | `bankIncomeCompleteResultSchema` |
| `BankIncomeRefreshCompleteResult` | `Success` to `"SUCCESS"` · `Failure` to `"FAILURE"` | `bankIncomeRefreshCompleteResultSchema` |
| `BankTransferDirection` | `Outbound` to `"outbound"` · `Inbound` to `"inbound"` | `bankTransferDirectionSchema` |
| `BankTransferEventListBankTransferType` | `Debit` to `"debit"` · `Credit` to `"credit"` | `bankTransferEventListBankTransferTypeSchema` |
| `BankTransferEventListDirection` | `Inbound` to `"inbound"` · `Outbound` to `"outbound"` | `bankTransferEventListDirectionSchema` |
| `BankTransferEventType` | `Pending` to `"pending"` · `Cancelled` to `"cancelled"` · `Failed` to `"failed"` · `Posted` to `"posted"` · `Reversed` to `"reversed"` | `bankTransferEventTypeSchema` |
| `BankTransferNetwork` | `Ach` to `"ach"` · `SameDayAch` to `"same-day-ach"` · `Wire` to `"wire"` | `bankTransferNetworkSchema` |
| `BankTransferStatus` | `Pending` to `"pending"` · `Posted` to `"posted"` · `Cancelled` to `"cancelled"` · `Failed` to `"failed"` · `Reversed` to `"reversed"` | `bankTransferStatusSchema` |
| `BankTransferType` | `Debit` to `"debit"` · `Credit` to `"credit"` | `bankTransferTypeSchema` |
| `BaseReportTransactionType` | `Digital` to `"digital"` · `Place` to `"place"` · `Special` to `"special"` · `Unresolved` to `"unresolved"` | `baseReportTransactionTypeSchema` |
| `BaseReportWarningCode` | `IdentityUnavailable` to `"IDENTITY_UNAVAILABLE"` · `TransactionsUnavailable` to `"TRANSACTIONS_UNAVAILABLE"` · `UserFraudAlert` to `"USER_FRAUD_ALERT"` | `baseReportWarningCodeSchema` |
| `BeaconAccountRiskEvaluateEvaluationReason` | `Onboarding` to `"ONBOARDING"` · `NewAccount` to `"NEW_ACCOUNT"` · `InformationChange` to `"INFORMATION_CHANGE"` · `DormantUser` to `"DORMANT_USER"` · `Other` to `"OTHER"` | `beaconAccountRiskEvaluateEvaluationReasonSchema` |
| `BeaconAuditTrailSource` | `Dashboard` to `"dashboard"` · `Api` to `"api"` · `System` to `"system"` · `BulkImport` to `"bulk_import"` | `beaconAuditTrailSourceSchema` |
| `BeaconMatchSummaryCode` | `Match` to `"match"` · `PartialMatch` to `"partial_match"` · `NoMatch` to `"no_match"` · `NoData` to `"no_data"` | `beaconMatchSummaryCodeSchema` |
| `BeaconReportCreateType` | `FirstParty` to `"first_party"` · `Stolen` to `"stolen"` · `Synthetic` to `"synthetic"` · `AccountTakeover` to `"account_takeover"` · `DataBreach` to `"data_breach"` · `Unknown` to `"unknown"` | `beaconReportCreateTypeSchema` |
| `BeaconReportType` | `FirstParty` to `"first_party"` · `Stolen` to `"stolen"` · `Synthetic` to `"synthetic"` · `AccountTakeover` to `"account_takeover"` · `DataBreach` to `"data_breach"` · `Unknown` to `"unknown"` | `beaconReportTypeSchema` |
| `BeaconUserStatus` | `Rejected` to `"rejected"` · `PendingReview` to `"pending_review"` · `Cleared` to `"cleared"` | `beaconUserStatusSchema` |
| `BusinessCheckBooleanStatus` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `businessCheckBooleanStatusSchema` |
| `BusinessEntityType` | `SoleProprietorship` to `"sole_proprietorship"` · `GeneralPartnership` to `"general_partnership"` · `Llc` to `"llc"` · `Llp` to `"llp"` · `Lllp` to `"lllp"` · `Lp` to `"lp"` · `CCorporation` to `"c_corporation"` · `SCorporation` to `"s_corporation"` · `BCorporation` to `"b_corporation"` · `Nonprofit` to `"nonprofit"` · `Cooperative` to `"cooperative"` · `Trust` to `"trust"` · `ProfessionalAssociation` to `"professional_association"` · `ProfessionalCorporation` to `"professional_corporation"` · `TradeName` to `"trade_name"` · `Bank` to `"bank"` · `CreditUnion` to `"credit_union"` · `Insurance` to `"insurance"` · `Other` to `"other"` · `Unknown` to `"unknown"` | `businessEntityTypeSchema` |
| `BusinessVerificationStatus` | `Active` to `"active"` · `Success` to `"success"` · `Failed` to `"failed"` | `businessVerificationStatusSchema` |
| `BusinessVerificationStatusOverall` | `Active` to `"active"` · `Success` to `"success"` · `Failed` to `"failed"` | `businessVerificationStatusOverallSchema` |
| `BusinessVerificationStatusRiskCheck` | `Active` to `"active"` · `Success` to `"success"` · `Failed` to `"failed"` | `businessVerificationStatusRiskCheckSchema` |
| `BusinessVerificationStatusWebPresenceCheck` | `Active` to `"active"` · `Success` to `"success"` · `Failed` to `"failed"` · `NotApplicable` to `"not_applicable"` | `businessVerificationStatusWebPresenceCheckSchema` |
| `BusinessWebsiteBuildStatus` | `ComingSoon` to `"coming_soon"` · `Active` to `"active"` · `Inactive` to `"inactive"` | `businessWebsiteBuildStatusSchema` |
| `BuyType` | `Assignment` to `"assignment"` · `Contribution` to `"contribution"` · `Buy` to `"buy"` · `BuyToCover` to `"buy to cover"` · `DividendReinvestment` to `"dividend reinvestment"` · `InterestReinvestment` to `"interest reinvestment"` · `LongTermCapitalGainReinvestment` to `"long-term capital gain reinvestment"` · `ShortTermCapitalGainReinvestment` to `"short-term capital gain reinvestment"` | `buyTypeSchema` |
| `CashFlowInsight` | `LargeDepositDetected` to `"LARGE_DEPOSIT_DETECTED"` · `LowBalanceDetected` to `"LOW_BALANCE_DETECTED"` · `NewLoanPaymentDetected` to `"NEW_LOAN_PAYMENT_DETECTED"` · `NsfOverdraftDetected` to `"NSF_OVERDRAFT_DETECTED"` | `cashFlowInsightSchema` |
| `CashFlowUpdatesEventWebhookCodes` | `LargeDepositDetected` to `"LARGE_DEPOSIT_DETECTED"` · `LowBalanceDetected` to `"LOW_BALANCE_DETECTED"` · `NewLoanPaymentDetected` to `"NEW_LOAN_PAYMENT_DETECTED"` · `NsfOverdraftDetected` to `"NSF_OVERDRAFT_DETECTED"` | `cashFlowUpdatesEventWebhookCodesSchema` |
| `CashType` | `AccountFee` to `"account fee"` · `Contribution` to `"contribution"` · `Deposit` to `"deposit"` · `Dividend` to `"dividend"` · `StockDistribution` to `"stock distribution"` · `Interest` to `"interest"` · `LegalFee` to `"legal fee"` · `LongTermCapitalGain` to `"long-term capital gain"` · `ManagementFee` to `"management fee"` · `MarginExpense` to `"margin expense"` · `NonQualifiedDividend` to `"non-qualified dividend"` · `NonResidentTax` to `"non-resident tax"` · `PendingCredit` to `"pending credit"` · `PendingDebit` to `"pending debit"` · `QualifiedDividend` to `"qualified dividend"` · `ShortTermCapitalGain` to `"short-term capital gain"` · `Tax` to `"tax"` · `TaxWithheld` to `"tax withheld"` · `TransferFee` to `"transfer fee"` · `TrustFee` to `"trust fee"` · `UnqualifiedGain` to `"unqualified gain"` · `Withdrawal` to `"withdrawal"` | `cashTypeSchema` |
| `CashflowAttributesVersion` | `V10` to `"v1.0"` · `V20` to `"v2.0"` · `Cfi1` to `"CFI1"` | `cashflowAttributesVersionSchema` |
| `CheckReportWarningCode` | `IdentityUnavailable` to `"IDENTITY_UNAVAILABLE"` · `TransactionsUnavailable` to `"TRANSACTIONS_UNAVAILABLE"` · `UserFraudAlert` to `"USER_FRAUD_ALERT"` | `checkReportWarningCodeSchema` |
| `ConsentEventCode` | `UserAgreement` to `"USER_AGREEMENT"` · `UseCases` to `"USE_CASES"` · `DataScopes` to `"DATA_SCOPES"` · `AccountScopes` to `"ACCOUNT_SCOPES"` · `Revocation` to `"REVOCATION"` | `consentEventCodeSchema` |
| `ConsentEventInitiator` | `Plaid` to `"PLAID"` · `DataProvider` to `"DATA_PROVIDER"` · `Customer` to `"CUSTOMER"` · `EndUser` to `"END_USER"` | `consentEventInitiatorSchema` |
| `ConsentEventType` | `ConsentGranted` to `"CONSENT_GRANTED"` · `ConsentRevoked` to `"CONSENT_REVOKED"` · `ConsentUpdated` to `"CONSENT_UPDATED"` | `consentEventTypeSchema` |
| `ConsentedDataScope` | `AccountBalanceInfo` to `"account_balance_info"` · `ContactInfo` to `"contact_info"` · `AccountRoutingNumber` to `"account_routing_number"` · `Transactions` to `"transactions"` · `CreditLoanInfo` to `"credit_loan_info"` · `Investments` to `"investments"` · `PayrollInfo` to `"payroll_info"` · `IncomeVerificationPaystubsInfo` to `"income_verification_paystubs_info"` · `IncomeVerificationW2SInfo` to `"income_verification_w2s_info"` · `IncomeVerificationBankStatements` to `"income_verification_bank_statements"` · `IncomeVerificationEmploymentInfo` to `"income_verification_employment_info"` · `BankStatements` to `"bank_statements"` · `RiskInfo` to `"risk_info"` · `NetworkInsightsLite` to `"network_insights_lite"` · `FraudInfo` to `"fraud_info"` | `consentedDataScopeSchema` |
| `ConsumerReportCategory` | `Transaction` to `"TRANSACTION"` · `Balance` to `"BALANCE"` · `Identity` to `"IDENTITY"` · `Other` to `"OTHER"` | `consumerReportCategorySchema` |
| `ConsumerReportPermissiblePurpose` | `AccountReviewCredit` to `"ACCOUNT_REVIEW_CREDIT"` · `AccountReviewNonCredit` to `"ACCOUNT_REVIEW_NON_CREDIT"` · `ExtensionOfCredit` to `"EXTENSION_OF_CREDIT"` · `LegitimateBusinessNeedTenantScreening` to `"LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING"` · `LegitimateBusinessNeedOther` to `"LEGITIMATE_BUSINESS_NEED_OTHER"` · `WrittenInstructionPrequalification` to `"WRITTEN_INSTRUCTION_PREQUALIFICATION"` · `WrittenInstructionOther` to `"WRITTEN_INSTRUCTION_OTHER"` · `EligibilityForGovtBenefits` to `"ELIGIBILITY_FOR_GOVT_BENEFITS"` | `consumerReportPermissiblePurposeSchema` |
| `ContentTypes` | `ApplicationPdf` to `"application/pdf"` · `ImageGif` to `"image/gif"` · `ImageJpeg` to `"image/jpeg"` · `ImageTiff` to `"image/tiff"` · `ImagePng` to `"image/png"` · `ApplicationJson` to `"application/json"` | `contentTypesSchema` |
| `CounterpartyType` | `Merchant` to `"merchant"` · `FinancialInstitution` to `"financial_institution"` · `PaymentApp` to `"payment_app"` · `Marketplace` to `"marketplace"` · `PaymentTerminal` to `"payment_terminal"` · `IncomeSource` to `"income_source"` | `counterpartyTypeSchema` |
| `CountryCode` | `Us` to `"US"` · `Gb` to `"GB"` · `Es` to `"ES"` · `Nl` to `"NL"` · `Fr` to `"FR"` · `Ie` to `"IE"` · `Ca` to `"CA"` · `De` to `"DE"` · `It` to `"IT"` · `Pl` to `"PL"` · `Dk` to `"DK"` · `No` to `"NO"` · `Se` to `"SE"` · `Ee` to `"EE"` · `Lt` to `"LT"` · `Lv` to `"LV"` · `Pt` to `"PT"` · `Be` to `"BE"` · `At` to `"AT"` · `Fi` to `"FI"` | `countryCodeSchema` |
| `CraBankIncomeBonusType` | `BonusIncluded` to `"BONUS_INCLUDED"` · `BonusOnly` to `"BONUS_ONLY"` | `craBankIncomeBonusTypeSchema` |
| `CraBankIncomeCompleteResult` | `Success` to `"SUCCESS"` · `Failure` to `"FAILURE"` | `craBankIncomeCompleteResultSchema` |
| `CraBankIncomeStatus` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` · `Unknown` to `"UNKNOWN"` | `craBankIncomeStatusSchema` |
| `CraBankIncomeWarningCode` | `IdentityUnavailable` to `"IDENTITY_UNAVAILABLE"` · `TransactionsUnavailable` to `"TRANSACTIONS_UNAVAILABLE"` · `ReportDeleted` to `"REPORT_DELETED"` · `DataUnavailable` to `"DATA_UNAVAILABLE"` | `craBankIncomeWarningCodeSchema` |
| `CraCheckReportPermissiblePurpose` | `AccountReviewCredit` to `"ACCOUNT_REVIEW_CREDIT"` · `WrittenInstructionOther` to `"WRITTEN_INSTRUCTION_OTHER"` | `craCheckReportPermissiblePurposeSchema` |
| `CraCheckReportVerificationGetReportType` | `Voa` to `"VOA"` · `EmploymentRefresh` to `"EMPLOYMENT_REFRESH"` · `Income` to `"INCOME"` | `craCheckReportVerificationGetReportTypeSchema` |
| `CraCheckReportVerificationPdfReportType` | `Voa` to `"voa"` · `EmploymentRefresh` to `"employment_refresh"` · `Income` to `"income"` | `craCheckReportVerificationPdfReportTypeSchema` |
| `CraCreditProfileInquiryType` | `SoftInquiry` to `"SOFT_INQUIRY"` · `StandardInquiry` to `"STANDARD_INQUIRY"` | `craCreditProfileInquiryTypeSchema` |
| `CraCreditProfileReportType` | `Qualify` to `"QUALIFY"` | `craCreditProfileReportTypeSchema` |
| `CraCreditProfileReportVersion` | `V1` to `"v1"` | `craCreditProfileReportVersionSchema` |
| `CraLoanApplicationDecision` | `Approved` to `"APPROVED"` · `Declined` to `"DECLINED"` · `Other` to `"OTHER"` | `craLoanApplicationDecisionSchema` |
| `CraLoanPaymentSchedule` | `Daily` to `"DAILY"` · `Weekly` to `"WEEKLY"` · `Biweekly` to `"BIWEEKLY"` · `Monthly` to `"MONTHLY"` · `Quarterly` to `"QUARTERLY"` · `Annually` to `"ANNUALLY"` · `Other` to `"OTHER"` | `craLoanPaymentScheduleSchema` |
| `CraLoanStatus` | `Approved` to `"APPROVED"` · `Declined` to `"DECLINED"` · `Booked` to `"BOOKED"` · `Current` to `"CURRENT"` · `Delinquent` to `"DELINQUENT"` · `Default` to `"DEFAULT"` · `ChargedOff` to `"CHARGED_OFF"` · `Transferred` to `"TRANSFERRED"` · `PaidOff` to `"PAID_OFF"` · `Other` to `"OTHER"` | `craLoanStatusSchema` |
| `CraLoanType` | `Personal` to `"PERSONAL"` · `CreditCard` to `"CREDIT_CARD"` · `Business` to `"BUSINESS"` · `Mortgage` to `"MORTGAGE"` · `Auto` to `"AUTO"` · `Payday` to `"PAYDAY"` · `Student` to `"STUDENT"` · `HomeEquity` to `"HOME_EQUITY"` · `Other` to `"OTHER"` | `craLoanTypeSchema` |
| `CraPdfAddOns` | `CraIncomeInsights` to `"cra_income_insights"` · `CraPartnerInsights` to `"cra_partner_insights"` | `craPdfAddOnsSchema` |
| `CraPartnerInsightsBaseFicoScoreVersion` | `_8` to `"8"` · `_9` to `"9"` · `_10` to `"10"` · `_10T` to `"10T"` | `craPartnerInsightsBaseFicoScoreVersionSchema` |
| `CraPartnerInsightsBureau` | `Equifax` to `"EQUIFAX"` · `Experian` to `"EXPERIAN"` · `Transunion` to `"TRANSUNION"` | `craPartnerInsightsBureauSchema` |
| `CraPartnerInsightsUltraFicoScoreVersion` | `_10` to `"1.0"` | `craPartnerInsightsUltraFicoScoreVersionSchema` |
| `CraReportDecisionStage` | `Prequalification` to `"PREQUALIFICATION"` · `Decisioning` to `"DECISIONING"` · `Servicing` to `"SERVICING"` | `craReportDecisionStageSchema` |
| `CraReportScope` | `PlaidNetwork` to `"PLAID_NETWORK"` · `ClientUser` to `"CLIENT_USER"` | `craReportScopeSchema` |
| `CraUserTier` | `Free` to `"free"` · `Paid` to `"paid"` | `craUserTierSchema` |
| `CraVerificationIncomePayFrequency` | `Weekly` to `"WEEKLY"` · `Biweekly` to `"BIWEEKLY"` · `SemiMonthly` to `"SEMI_MONTHLY"` · `Monthly` to `"MONTHLY"` · `Daily` to `"DAILY"` · `Unknown` to `"UNKNOWN"` | `craVerificationIncomePayFrequencySchema` |
| `CraVerificationIncomeStatus` | `Active` to `"ACTIVE"` · `Inactive` to `"INACTIVE"` · `Unknown` to `"UNKNOWN"` | `craVerificationIncomeStatusSchema` |
| `CreditAchClass` | `Ccd` to `"ccd"` · `Ppd` to `"ppd"` · `Web` to `"web"` | `creditAchClassSchema` |
| `CreditAccount` | `CreditCard` to `"credit card"` · `Paypal` to `"paypal"` | `creditAccountSchema` |
| `CreditAccountSubtype` | `CreditCard` to `"credit card"` · `Paypal` to `"paypal"` · `All` to `"all"` | `creditAccountSubtypeSchema` |
| `CreditBankEmploymentWarningType` | `BankEmploymentWarning` to `"BANK_EMPLOYMENT_WARNING"` | `creditBankEmploymentWarningTypeSchema` |
| `CreditBankIncomeAccountType` | `Depository` to `"depository"` | `creditBankIncomeAccountTypeSchema` |
| `CreditBankIncomeCategory` | `Salary` to `"SALARY"` · `Unemployment` to `"UNEMPLOYMENT"` · `Cash` to `"CASH"` · `GigEconomy` to `"GIG_ECONOMY"` · `Rental` to `"RENTAL"` · `ChildSupport` to `"CHILD_SUPPORT"` · `Military` to `"MILITARY"` · `Retirement` to `"RETIREMENT"` · `LongTermDisability` to `"LONG_TERM_DISABILITY"` · `BankInterest` to `"BANK_INTEREST"` · `CashDeposit` to `"CASH_DEPOSIT"` · `TransferFromApplication` to `"TRANSFER_FROM_APPLICATION"` · `TaxRefund` to `"TAX_REFUND"` · `BenefitOther` to `"BENEFIT_OTHER"` · `Other` to `"OTHER"` | `creditBankIncomeCategorySchema` |
| `CreditBankIncomeErrorType` | `InternalServerError` to `"INTERNAL_SERVER_ERROR"` · `InsufficientCredentials` to `"INSUFFICIENT_CREDENTIALS"` · `ItemLocked` to `"ITEM_LOCKED"` · `UserSetupRequired` to `"USER_SETUP_REQUIRED"` · `CountryNotSupported` to `"COUNTRY_NOT_SUPPORTED"` · `InstitutionDown` to `"INSTITUTION_DOWN"` · `InstitutionNoLongerSupported` to `"INSTITUTION_NO_LONGER_SUPPORTED"` · `InstitutionNotResponding` to `"INSTITUTION_NOT_RESPONDING"` · `InvalidCredentials` to `"INVALID_CREDENTIALS"` · `InvalidMfa` to `"INVALID_MFA"` · `InvalidSendMethod` to `"INVALID_SEND_METHOD"` · `ItemLoginRequired` to `"ITEM_LOGIN_REQUIRED"` · `MfaNotSupported` to `"MFA_NOT_SUPPORTED"` · `NoAccounts` to `"NO_ACCOUNTS"` · `ItemNotSupported` to `"ITEM_NOT_SUPPORTED"` · `AccessNotGranted` to `"ACCESS_NOT_GRANTED"` | `creditBankIncomeErrorTypeSchema` |
| `CreditBankIncomePayFrequency` | `Weekly` to `"WEEKLY"` · `Biweekly` to `"BIWEEKLY"` · `SemiMonthly` to `"SEMI_MONTHLY"` · `Monthly` to `"MONTHLY"` · `Daily` to `"DAILY"` · `Unknown` to `"UNKNOWN"` | `creditBankIncomePayFrequencySchema` |
| `CreditBankIncomeWarningCode` | `IdentityUnavailable` to `"IDENTITY_UNAVAILABLE"` · `TransactionsUnavailable` to `"TRANSACTIONS_UNAVAILABLE"` · `ItemUnapproved` to `"ITEM_UNAPPROVED"` · `ReportDeleted` to `"REPORT_DELETED"` · `DataUnavailable` to `"DATA_UNAVAILABLE"` | `creditBankIncomeWarningCodeSchema` |
| `CreditBankIncomeWarningType` | `BankIncomeWarning` to `"BANK_INCOME_WARNING"` | `creditBankIncomeWarningTypeSchema` |
| `CreditPayStubPayBasisType` | `Salary` to `"SALARY"` · `Hourly` to `"HOURLY"` · `Commission` to `"COMMISSION"` | `creditPayStubPayBasisTypeSchema` |
| `CreditSessionBankEmploymentStatus` | `Approved` to `"APPROVED"` · `NoEmployersFound` to `"NO_EMPLOYERS_FOUND"` · `EmployerNotListed` to `"EMPLOYER_NOT_LISTED"` · `Started` to `"STARTED"` · `InternalError` to `"INTERNAL_ERROR"` | `creditSessionBankEmploymentStatusSchema` |
| `CreditSessionBankIncomeStatus` | `Approved` to `"APPROVED"` · `NoDepositsFound` to `"NO_DEPOSITS_FOUND"` · `UserReportedNoIncome` to `"USER_REPORTED_NO_INCOME"` · `Started` to `"STARTED"` · `InternalError` to `"INTERNAL_ERROR"` | `creditSessionBankIncomeStatusSchema` |
| `DashboardUserStatus` | `Invited` to `"invited"` · `Active` to `"active"` · `Deactivated` to `"deactivated"` | `dashboardUserStatusSchema` |
| `DataSources` | `Institution` to `"INSTITUTION"` · `InstitutionMask` to `"INSTITUTION_MASK"` · `User` to `"USER"` | `dataSourcesSchema` |
| `DepositoryAccount` | `CashManagement` to `"cash management"` · `Cd` to `"cd"` · `Checking` to `"checking"` · `Ebt` to `"ebt"` · `Hsa` to `"hsa"` · `LimitedPurposeChecking` to `"limited purpose checking"` · `MoneyMarket` to `"money market"` · `Paypal` to `"paypal"` · `Prepaid` to `"prepaid"` · `Savings` to `"savings"` | `depositoryAccountSchema` |
| `DepositoryAccountSubtype` | `Checking` to `"checking"` · `Savings` to `"savings"` · `Hsa` to `"hsa"` · `Cd` to `"cd"` · `MoneyMarket` to `"money market"` · `Paypal` to `"paypal"` · `Prepaid` to `"prepaid"` · `CashManagement` to `"cash management"` · `Ebt` to `"ebt"` · `LimitedPurposeChecking` to `"limited purpose checking"` · `All` to `"all"` | `depositoryAccountSubtypeSchema` |
| `DocType` | `Unknown` to `"UNKNOWN"` · `DocumentTypePaystub` to `"DOCUMENT_TYPE_PAYSTUB"` · `DocumentTypeBankStatement` to `"DOCUMENT_TYPE_BANK_STATEMENT"` · `DocumentTypeUsTaxW2` to `"DOCUMENT_TYPE_US_TAX_W2"` · `DocumentTypeUsMilitaryEras` to `"DOCUMENT_TYPE_US_MILITARY_ERAS"` · `DocumentTypeUsMilitaryLes` to `"DOCUMENT_TYPE_US_MILITARY_LES"` · `DocumentTypeUsMilitaryCles` to `"DOCUMENT_TYPE_US_MILITARY_CLES"` · `DocumentTypeGig` to `"DOCUMENT_TYPE_GIG"` · `DocumentTypeNone` to `"DOCUMENT_TYPE_NONE"` · `DocumentTypeUsTax1099Misc` to `"DOCUMENT_TYPE_US_TAX_1099_MISC"` · `DocumentTypeUsTax1099K` to `"DOCUMENT_TYPE_US_TAX_1099_K"` · `DocumentTypePlaidGeneratedPaystubPdf` to `"DOCUMENT_TYPE_PLAID_GENERATED_PAYSTUB_PDF"` · `DocumentTypeUsStudentI20` to `"DOCUMENT_TYPE_US_STUDENT_I20"` | `docTypeSchema` |
| `DocumentAuthenticityMatchCode` | `Match` to `"match"` · `PartialMatch` to `"partial_match"` · `NoMatch` to `"no_match"` · `NoData` to `"no_data"` | `documentAuthenticityMatchCodeSchema` |
| `DocumentDateOfBirthMatchCode` | `Match` to `"match"` · `PartialMatch` to `"partial_match"` · `NoMatch` to `"no_match"` · `NoData` to `"no_data"` | `documentDateOfBirthMatchCodeSchema` |
| `DocumentNameMatchCode` | `Match` to `"match"` · `PartialMatch` to `"partial_match"` · `NoMatch` to `"no_match"` · `NoData` to `"no_data"` | `documentNameMatchCodeSchema` |
| `DocumentStatus` | `Success` to `"success"` · `Failed` to `"failed"` · `ManuallyApproved` to `"manually_approved"` | `documentStatusSchema` |
| `EarningsBreakdownCanonicalDescription` | `Bonus` to `"BONUS"` · `Commission` to `"COMMISSION"` · `Overtime` to `"OVERTIME"` · `PaidTimeOff` to `"PAID TIME OFF"` · `RegularPay` to `"REGULAR PAY"` · `Vacation` to `"VACATION"` · `BasicAllowanceHousing` to `"BASIC ALLOWANCE HOUSING"` · `BasicAllowanceSubsistence` to `"BASIC ALLOWANCE SUBSISTENCE"` · `Other` to `"OTHER"` | `earningsBreakdownCanonicalDescriptionSchema` |
| `EmploymentSourceType` | `Bank` to `"bank"` · `Payroll` to `"payroll"` | `employmentSourceTypeSchema` |
| `EmploymentVerificationStatus` | `EmploymentStatusActive` to `"EMPLOYMENT_STATUS_ACTIVE"` · `EmploymentStatusInactive` to `"EMPLOYMENT_STATUS_INACTIVE"` | `employmentVerificationStatusSchema` |
| `EnrichTransactionDirection` | `Inflow` to `"INFLOW"` · `Outflow` to `"OUTFLOW"` | `enrichTransactionDirectionSchema` |
| `EntityDocumentType` | `Bik` to `"bik"` · `BusinessNumber` to `"business_number"` · `Imo` to `"imo"` · `Other` to `"other"` · `Swift` to `"swift"` · `TaxId` to `"tax_id"` | `entityDocumentTypeSchema` |
| `EntityWatchlistCode` | `CaCon` to `"CA_CON"` · `EuCon` to `"EU_CON"` · `IzSoe` to `"IZ_SOE"` · `IzUnc` to `"IZ_UNC"` · `IzWbk` to `"IZ_WBK"` · `UsCap` to `"US_CAP"` · `UsFse` to `"US_FSE"` · `UsMbs` to `"US_MBS"` · `UsSdn` to `"US_SDN"` · `UsSsi` to `"US_SSI"` · `UsCmc` to `"US_CMC"` · `UsUvl` to `"US_UVL"` · `UsSam` to `"US_SAM"` · `UsTel` to `"US_TEL"` · `AuCon` to `"AU_CON"` · `UkHmc` to `"UK_HMC"` | `entityWatchlistCodeSchema` |
| `ExpirationDate` | `NotExpired` to `"not_expired"` · `Expired` to `"expired"` · `NoData` to `"no_data"` | `expirationDateSchema` |
| `FdxConsentGrantStatus` | `Active` to `"ACTIVE"` · `Revoked` to `"REVOKED"` · `Expired` to `"EXPIRED"` | `fdxConsentGrantStatusSchema` |
| `FdxConsentResourceType` | `Account` to `"ACCOUNT"` · `Customer` to `"CUSTOMER"` · `Document` to `"DOCUMENT"` | `fdxConsentResourceTypeSchema` |
| `FdxDataCluster` | `AccountBasic` to `"ACCOUNT_BASIC"` · `AccountDetailed` to `"ACCOUNT_DETAILED"` · `AccountPayments` to `"ACCOUNT_PAYMENTS"` · `Bills` to `"BILLS"` · `CustomerContact` to `"CUSTOMER_CONTACT"` · `CustomerPersonal` to `"CUSTOMER_PERSONAL"` · `Images` to `"IMAGES"` · `Investments` to `"INVESTMENTS"` · `Notifications` to `"NOTIFICATIONS"` · `PaymentSupport` to `"PAYMENT_SUPPORT"` · `Rewards` to `"REWARDS"` · `Statements` to `"STATEMENTS"` · `Tax` to `"TAX"` · `Transactions` to `"TRANSACTIONS"` · `Balances` to `"BALANCES"` · `ScheduledPayments` to `"SCHEDULED_PAYMENTS"` | `fdxDataClusterSchema` |
| `FdxEventStatus` | `Active` to `"ACTIVE"` · `Expired` to `"EXPIRED"` · `Revoked` to `"REVOKED"` · `Suspended` to `"SUSPENDED"` | `fdxEventStatusSchema` |
| `FdxUpdateReason` | `BusinessRule` to `"BUSINESS_RULE"` · `SecurityEvent` to `"SECURITY_EVENT"` · `UserAction` to `"USER_ACTION"` · `Other` to `"OTHER"` | `fdxUpdateReasonSchema` |
| `FdxHateoasLinkAction` | `Get` to `"GET"` · `Post` to `"POST"` · `Patch` to `"PATCH"` · `Delete` to `"DELETE"` · `Put` to `"PUT"` | `fdxHateoasLinkActionSchema` |
| `FeeType` | `AccountFee` to `"account fee"` · `Adjustment` to `"adjustment"` · `Dividend` to `"dividend"` · `Interest` to `"interest"` · `InterestReceivable` to `"interest receivable"` · `LongTermCapitalGain` to `"long-term capital gain"` · `LegalFee` to `"legal fee"` · `ManagementFee` to `"management fee"` · `MarginExpense` to `"margin expense"` · `NonQualifiedDividend` to `"non-qualified dividend"` · `NonResidentTax` to `"non-resident tax"` · `QualifiedDividend` to `"qualified dividend"` · `ReturnOfPrincipal` to `"return of principal"` · `ShortTermCapitalGain` to `"short-term capital gain"` · `StockDistribution` to `"stock distribution"` · `Tax` to `"tax"` · `TaxWithheld` to `"tax withheld"` · `TransferFee` to `"transfer fee"` · `TrustFee` to `"trust fee"` · `UnqualifiedGain` to `"unqualified gain"` | `feeTypeSchema` |
| `FlowType` | `FlexibleAuth` to `"FLEXIBLE_AUTH"` | `flowTypeSchema` |
| `Form1099Type` | `Form1099TypeUnknown` to `"FORM_1099_TYPE_UNKNOWN"` · `Form1099TypeMisc` to `"FORM_1099_TYPE_MISC"` · `Form1099TypeK` to `"FORM_1099_TYPE_K"` | `form1099TypeSchema` |
| `FraudCheckOutcome` | `Success` to `"success"` · `Failed` to `"failed"` | `fraudCheckOutcomeSchema` |
| `FraudCheckOutcomeWithNoData` | `Success` to `"success"` · `Failed` to `"failed"` · `NoData` to `"no_data"` | `fraudCheckOutcomeWithNoDataSchema` |
| `GseReportType` | `Voa` to `"VOA"` · `EmploymentRefresh` to `"EMPLOYMENT_REFRESH"` | `gseReportTypeSchema` |
| `HiddenMatchSummaryCode` | `Match` to `"match"` · `PartialMatch` to `"partial_match"` · `NoMatch` to `"no_match"` · `NoData` to `"no_data"` · `NoInput` to `"no_input"` | `hiddenMatchSummaryCodeSchema` |
| `HolderCategory` | `Business` to `"business"` · `Personal` to `"personal"` · `Unrecognized` to `"unrecognized"` | `holderCategorySchema` |
| `HoldingTaxLotPositionType` | `Long` to `"LONG"` · `Short` to `"SHORT"` | `holdingTaxLotPositionTypeSchema` |
| `HostedLinkDeliveryMethod` | `Sms` to `"sms"` · `Email` to `"email"` | `hostedLinkDeliveryMethodSchema` |
| `HumanReviewStatus` | `Success` to `"success"` · `Failed` to `"failed"` · `NoData` to `"no_data"` | `humanReviewStatusSchema` |
| `IdNumberType` | `ArDni` to `"ar_dni"` · `AuDriversLicense` to `"au_drivers_license"` · `AuPassport` to `"au_passport"` · `BrCpf` to `"br_cpf"` · `CaSin` to `"ca_sin"` · `ClRun` to `"cl_run"` · `CnResidentCard` to `"cn_resident_card"` · `CoNit` to `"co_nit"` · `DkCpr` to `"dk_cpr"` · `EgNationalId` to `"eg_national_id"` · `EsDni` to `"es_dni"` · `EsNie` to `"es_nie"` · `HkHkid` to `"hk_hkid"` · `InPan` to `"in_pan"` · `InEpic` to `"in_epic"` · `ItCf` to `"it_cf"` · `JoCivilId` to `"jo_civil_id"` · `JpMyNumber` to `"jp_my_number"` · `KeHudumaNamba` to `"ke_huduma_namba"` · `KwCivilId` to `"kw_civil_id"` · `MxCurp` to `"mx_curp"` · `MxRfc` to `"mx_rfc"` · `MyNric` to `"my_nric"` · `NgNin` to `"ng_nin"` · `NzDriversLicense` to `"nz_drivers_license"` · `OmCivilId` to `"om_civil_id"` · `PhPsn` to `"ph_psn"` · `PlPesel` to `"pl_pesel"` · `RoCnp` to `"ro_cnp"` · `SaNationalId` to `"sa_national_id"` · `SePin` to `"se_pin"` · `SgNric` to `"sg_nric"` · `TrTcKimlik` to `"tr_tc_kimlik"` · `UsSsn` to `"us_ssn"` · `UsSsnLast4` to `"us_ssn_last_4"` · `ZaSmartId` to `"za_smart_id"` | `idNumberTypeSchema` |
| `IsoCurrencyCode` | `Gbp` to `"GBP"` · `Eur` to `"EUR"` | `isoCurrencyCodeSchema` |
| `IsoCurrencyCode1` | `Usd` to `"USD"` | `isoCurrencyCode1Schema` |
| `IdentityUpdateTypes` | `Phones` to `"PHONES"` · `Addresses` to `"ADDRESSES"` · `Emails` to `"EMAILS"` · `Names` to `"NAMES"` | `identityUpdateTypesSchema` |
| `IdentityVerificationAutofillStatus` | `Success` to `"success"` · `Failed` to `"failed"` | `identityVerificationAutofillStatusSchema` |
| `IdentityVerificationStatus` | `Active` to `"active"` · `Success` to `"success"` · `Failed` to `"failed"` · `Expired` to `"expired"` · `Canceled` to `"canceled"` · `PendingReview` to `"pending_review"` | `identityVerificationStatusSchema` |
| `IdentityVerificationStepStatus` | `Success` to `"success"` · `Active` to `"active"` · `Failed` to `"failed"` · `WaitingForPrerequisite` to `"waiting_for_prerequisite"` · `NotApplicable` to `"not_applicable"` · `Skipped` to `"skipped"` · `Expired` to `"expired"` · `Canceled` to `"canceled"` · `PendingReview` to `"pending_review"` · `ManuallyApproved` to `"manually_approved"` · `ManuallyRejected` to `"manually_rejected"` | `identityVerificationStepStatusSchema` |
| `ImageQuality` | `High` to `"high"` · `Medium` to `"medium"` · `Low` to `"low"` | `imageQualitySchema` |
| `ImageQualityOutcome` | `Success` to `"success"` · `Failed` to `"failed"` | `imageQualityOutcomeSchema` |
| `IncomeBreakdownType` | `Bonus` to `"bonus"` · `Overtime` to `"overtime"` · `Regular` to `"regular"` | `incomeBreakdownTypeSchema` |
| `IncomeInsightsVersion` | `Ii2` to `"II2"` | `incomeInsightsVersionSchema` |
| `IncomeVerificationDocParsingConfig` | `Ocr` to `"ocr"` · `RiskSignals` to `"risk_signals"` | `incomeVerificationDocParsingConfigSchema` |
| `IncomeVerificationPayrollFlowType` | `PayrollDigitalIncome` to `"payroll_digital_income"` · `PayrollDocumentIncome` to `"payroll_document_income"` | `incomeVerificationPayrollFlowTypeSchema` |
| `IncomeVerificationPrecheckConfidence` | `High` to `"HIGH"` · `Low` to `"LOW"` · `Unknown` to `"UNKNOWN"` | `incomeVerificationPrecheckConfidenceSchema` |
| `IncomeVerificationSourceType` | `Bank` to `"bank"` · `Payroll` to `"payroll"` | `incomeVerificationSourceTypeSchema` |
| `IndividualWatchlistCode` | `AuCon` to `"AU_CON"` · `CaCon` to `"CA_CON"` · `EuCon` to `"EU_CON"` · `IzCia` to `"IZ_CIA"` · `IzIpl` to `"IZ_IPL"` · `IzPep` to `"IZ_PEP"` · `IzUnc` to `"IZ_UNC"` · `IzWbk` to `"IZ_WBK"` · `UkHmc` to `"UK_HMC"` · `UsDpl` to `"US_DPL"` · `UsDtc` to `"US_DTC"` · `UsFbi` to `"US_FBI"` · `UsFse` to `"US_FSE"` · `UsIsn` to `"US_ISN"` · `UsMbs` to `"US_MBS"` · `UsPlc` to `"US_PLC"` · `UsSam` to `"US_SAM"` · `UsSdn` to `"US_SDN"` · `UsSsi` to `"US_SSI"` · `SgSof` to `"SG_SOF"` · `TrTwl` to `"TR_TWL"` · `TrDfd` to `"TR_DFD"` · `TrFor` to `"TR_FOR"` · `TrWmd` to `"TR_WMD"` · `TrCmb` to `"TR_CMB"` | `individualWatchlistCodeSchema` |
| `InvestmentAccountSubtype` | `_529` to `"529"` · `_401A` to `"401a"` · `_401K` to `"401k"` · `_403B` to `"403B"` · `_457B` to `"457b"` · `Brokerage` to `"brokerage"` · `CashIsa` to `"cash isa"` · `CryptoExchange` to `"crypto exchange"` · `EducationSavingsAccount` to `"education savings account"` · `Fhsa` to `"fhsa"` · `FixedAnnuity` to `"fixed annuity"` · `Gic` to `"gic"` · `HealthReimbursementArrangement` to `"health reimbursement arrangement"` · `Hsa` to `"hsa"` · `Ira` to `"ira"` · `Isa` to `"isa"` · `Keogh` to `"keogh"` · `Lif` to `"lif"` · `LifeInsurance` to `"life insurance"` · `LineOfCredit` to `"line of credit"` · `Lira` to `"lira"` · `Lrif` to `"lrif"` · `Lrsp` to `"lrsp"` · `MutualFund` to `"mutual fund"` · `NonCustodialWallet` to `"non-custodial wallet"` · `NonTaxableBrokerageAccount` to `"non-taxable brokerage account"` · `Other` to `"other"` · `OtherAnnuity` to `"other annuity"` · `OtherInsurance` to `"other insurance"` · `Pension` to `"pension"` · `Prif` to `"prif"` · `ProfitSharingPlan` to `"profit sharing plan"` · `Qshr` to `"qshr"` · `Rdsp` to `"rdsp"` · `Resp` to `"resp"` · `Retirement` to `"retirement"` · `Rlif` to `"rlif"` · `Roth` to `"roth"` · `Roth401K` to `"roth 401k"` · `Roth403B` to `"roth 403B"` · `Roth457B` to `"roth 457b"` · `RothPension` to `"roth pension"` · `RothProfitSharingPlan` to `"roth profit sharing plan"` · `RothThriftSavingsPlan` to `"roth thrift savings plan"` · `Rrif` to `"rrif"` · `Rrsp` to `"rrsp"` · `Sarsep` to `"sarsep"` · `SepIra` to `"sep ira"` · `SimpleIra` to `"simple ira"` · `Sipp` to `"sipp"` · `StockPlan` to `"stock plan"` · `ThriftSavingsPlan` to `"thrift savings plan"` · `Tfsa` to `"tfsa"` · `Trust` to `"trust"` · `Ugma` to `"ugma"` · `Utma` to `"utma"` · `VariableAnnuity` to `"variable annuity"` · `All` to `"all"` | `investmentAccountSubtypeSchema` |
| `InvestmentAccountSubtype1` | `_401A` to `"401a"` · `_401K` to `"401k"` · `_403B` to `"403B"` · `_457B` to `"457b"` · `_529` to `"529"` · `Brokerage` to `"brokerage"` · `CashIsa` to `"cash isa"` · `CryptoExchange` to `"crypto exchange"` · `EducationSavingsAccount` to `"education savings account"` · `Fhsa` to `"fhsa"` · `FixedAnnuity` to `"fixed annuity"` · `Gic` to `"gic"` · `HealthReimbursementArrangement` to `"health reimbursement arrangement"` · `Hsa` to `"hsa"` · `Ira` to `"ira"` · `Isa` to `"isa"` · `Keogh` to `"keogh"` · `Lif` to `"lif"` · `LifeInsurance` to `"life insurance"` · `LineOfCredit` to `"line of credit"` · `Lira` to `"lira"` · `Lrif` to `"lrif"` · `Lrsp` to `"lrsp"` · `MutualFund` to `"mutual fund"` · `NonCustodialWallet` to `"non-custodial wallet"` · `NonTaxableBrokerageAccount` to `"non-taxable brokerage account"` · `Other` to `"other"` · `OtherAnnuity` to `"other annuity"` · `OtherInsurance` to `"other insurance"` · `Pension` to `"pension"` · `Prif` to `"prif"` · `ProfitSharingPlan` to `"profit sharing plan"` · `Qshr` to `"qshr"` · `Rdsp` to `"rdsp"` · `Resp` to `"resp"` · `Retirement` to `"retirement"` · `Rlif` to `"rlif"` · `Roth` to `"roth"` · `Roth401K` to `"roth 401k"` · `Roth403B` to `"roth 403B"` · `Roth457B` to `"roth 457b"` · `RothPension` to `"roth pension"` · `RothProfitSharingPlan` to `"roth profit sharing plan"` · `RothThriftSavingsPlan` to `"roth thrift savings plan"` · `Rrif` to `"rrif"` · `Rrsp` to `"rrsp"` · `Sarsep` to `"sarsep"` · `SepIra` to `"sep ira"` · `SimpleIra` to `"simple ira"` · `Sipp` to `"sipp"` · `StockPlan` to `"stock plan"` · `Tfsa` to `"tfsa"` · `ThriftSavingsPlan` to `"thrift savings plan"` · `Trust` to `"trust"` · `Ugma` to `"ugma"` · `Utma` to `"utma"` · `VariableAnnuity` to `"variable annuity"` | `investmentAccountSubtype1Schema` |
| `InvestmentTransactionSubtype` | `AccountFee` to `"account fee"` · `Adjustment` to `"adjustment"` · `Assignment` to `"assignment"` · `Buy` to `"buy"` · `BuyToCover` to `"buy to cover"` · `Contribution` to `"contribution"` · `Deposit` to `"deposit"` · `Distribution` to `"distribution"` · `Dividend` to `"dividend"` · `DividendReinvestment` to `"dividend reinvestment"` · `Exercise` to `"exercise"` · `Expire` to `"expire"` · `FundFee` to `"fund fee"` · `Interest` to `"interest"` · `InterestReceivable` to `"interest receivable"` · `InterestReinvestment` to `"interest reinvestment"` · `LegalFee` to `"legal fee"` · `LoanPayment` to `"loan payment"` · `LongTermCapitalGain` to `"long-term capital gain"` · `LongTermCapitalGainReinvestment` to `"long-term capital gain reinvestment"` · `ManagementFee` to `"management fee"` · `MarginExpense` to `"margin expense"` · `Merger` to `"merger"` · `MiscellaneousFee` to `"miscellaneous fee"` · `NonQualifiedDividend` to `"non-qualified dividend"` · `NonResidentTax` to `"non-resident tax"` · `PendingCredit` to `"pending credit"` · `PendingDebit` to `"pending debit"` · `QualifiedDividend` to `"qualified dividend"` · `Rebalance` to `"rebalance"` · `ReturnOfPrincipal` to `"return of principal"` · `Request` to `"request"` · `Sell` to `"sell"` · `SellShort` to `"sell short"` · `Send` to `"send"` · `ShortTermCapitalGain` to `"short-term capital gain"` · `ShortTermCapitalGainReinvestment` to `"short-term capital gain reinvestment"` · `SpinOff` to `"spin off"` · `Split` to `"split"` · `StockDistribution` to `"stock distribution"` · `Tax` to `"tax"` · `TaxWithheld` to `"tax withheld"` · `Trade` to `"trade"` · `Transfer` to `"transfer"` · `TransferFee` to `"transfer fee"` · `TrustFee` to `"trust fee"` · `UnqualifiedGain` to `"unqualified gain"` · `Withdrawal` to `"withdrawal"` | `investmentTransactionSubtypeSchema` |
| `InvestmentTransactionType` | `Buy` to `"buy"` · `Sell` to `"sell"` · `Cancel` to `"cancel"` · `Cash` to `"cash"` · `Fee` to `"fee"` · `Transfer` to `"transfer"` | `investmentTransactionTypeSchema` |
| `IssuesStatus` | `Reported` to `"REPORTED"` · `AwaitingResolution` to `"AWAITING_RESOLUTION"` · `FixInProgress` to `"FIX_IN_PROGRESS"` · `FixPendingValidation` to `"FIX_PENDING_VALIDATION"` · `CannotFix` to `"CANNOT_FIX"` · `Resolved` to `"RESOLVED"` | `issuesStatusSchema` |
| `IssuingCountry` | `Match` to `"match"` · `NoMatch` to `"no_match"` | `issuingCountrySchema` |
| `ItemAuthMethod` | `InstantAuth` to `"INSTANT_AUTH"` · `InstantMatch` to `"INSTANT_MATCH"` · `AutomatedMicrodeposits` to `"AUTOMATED_MICRODEPOSITS"` · `SameDayMicrodeposits` to `"SAME_DAY_MICRODEPOSITS"` · `InstantMicrodeposits` to `"INSTANT_MICRODEPOSITS"` · `DatabaseMatch` to `"DATABASE_MATCH"` · `DatabaseInsights` to `"DATABASE_INSIGHTS"` · `TransferMigrated` to `"TRANSFER_MIGRATED"` · `InvestmentsFallback` to `"INVESTMENTS_FALLBACK"` | `itemAuthMethodSchema` |
| `ItemCreateAuthentication` | `Unknown` to `"UNKNOWN"` · `DataPartner` to `"DATA_PARTNER"` · `Plaid` to `"PLAID"` | `itemCreateAuthenticationSchema` |
| `ItemRemoveReasonCode` | `FraudFirstParty` to `"FRAUD_FIRST_PARTY"` · `FraudFalseIdentity` to `"FRAUD_FALSE_IDENTITY"` · `FraudAbuse` to `"FRAUD_ABUSE"` · `FraudOther` to `"FRAUD_OTHER"` · `ConnectionIsNonFunctional` to `"CONNECTION_IS_NON_FUNCTIONAL"` · `Other` to `"OTHER"` | `itemRemoveReasonCodeSchema` |
| `LedgerEventSourceType` | `Transfer` to `"TRANSFER"` · `Sweep` to `"SWEEP"` · `Refund` to `"REFUND"` | `ledgerEventSourceTypeSchema` |
| `LimitedPurposeType` | `RentMortgage` to `"RENT_MORTGAGE"` | `limitedPurposeTypeSchema` |
| `LinkDeliveryDeliveryMethod` | `Sms` to `"SMS"` · `Email` to `"EMAIL"` | `linkDeliveryDeliveryMethodSchema` |
| `LinkDeliverySessionStatus` | `Created` to `"CREATED"` · `Opened` to `"OPENED"` · `Exited` to `"EXITED"` · `Completed` to `"COMPLETED"` · `Expired` to `"EXPIRED"` | `linkDeliverySessionStatusSchema` |
| `LinkDeliveryVerificationStatus` | `AutomaticallyVerified` to `"automatically_verified"` · `PendingAutomaticVerification` to `"pending_automatic_verification"` · `PendingManualVerification` to `"pending_manual_verification"` · `ManuallyVerified` to `"manually_verified"` · `VerificationExpired` to `"verification_expired"` · `VerificationFailed` to `"verification_failed"` · `Unsent` to `"unsent"` · `DatabaseMatched` to `"database_matched"` · `DatabaseInsightsPending` to `"database_insights_pending"` | `linkDeliveryVerificationStatusSchema` |
| `LinkDeliveryWebhookCallbackType` | `OnSuccess` to `"ON_SUCCESS"` · `OnEvent` to `"ON_EVENT"` · `OnExit` to `"ON_EXIT"` | `linkDeliveryWebhookCallbackTypeSchema` |
| `LinkDeliveryWebhookCommunicationMethod` | `Sms` to `"SMS"` · `Email` to `"EMAIL"` | `linkDeliveryWebhookCommunicationMethodSchema` |
| `LinkDeliveryWebhookDeliveryStatus` | `Success` to `"SUCCESS"` · `Failure` to `"FAILURE"` | `linkDeliveryWebhookDeliveryStatusSchema` |
| `LinkEventName` | `BankIncomeInsightsCompleted` to `"BANK_INCOME_INSIGHTS_COMPLETED"` · `CloseOauth` to `"CLOSE_OAUTH"` · `Error` to `"ERROR"` · `Exit` to `"EXIT"` · `FailOauth` to `"FAIL_OAUTH"` · `Handoff` to `"HANDOFF"` · `IssueFollowed` to `"ISSUE_FOLLOWED"` · `Open` to `"OPEN"` · `OpenMyPlaid` to `"OPEN_MY_PLAID"` · `OpenOauth` to `"OPEN_OAUTH"` · `SearchInstitution` to `"SEARCH_INSTITUTION"` · `SelectAuthType` to `"SELECT_AUTH_TYPE"` · `SelectBrand` to `"SELECT_BRAND"` · `SelectDegradedInstitution` to `"SELECT_DEGRADED_INSTITUTION"` · `SelectDownInstitution` to `"SELECT_DOWN_INSTITUTION"` · `SelectFilteredInstitution` to `"SELECT_FILTERED_INSTITUTION"` · `SelectInstitution` to `"SELECT_INSTITUTION"` · `SubmitAccountNumber` to `"SUBMIT_ACCOUNT_NUMBER"` · `SubmitCredentials` to `"SUBMIT_CREDENTIALS"` · `SubmitDocuments` to `"SUBMIT_DOCUMENTS"` · `SubmitDocumentsError` to `"SUBMIT_DOCUMENTS_ERROR"` · `SubmitDocumentsSuccess` to `"SUBMIT_DOCUMENTS_SUCCESS"` · `SubmitMfa` to `"SUBMIT_MFA"` · `SubmitRoutingNumber` to `"SUBMIT_ROUTING_NUMBER"` · `TransitionView` to `"TRANSITION_VIEW"` · `ViewDataTypes` to `"VIEW_DATA_TYPES"` | `linkEventNameSchema` |
| `LinkSessionSuccessMetadataTransferStatus` | `Complete` to `"COMPLETE"` · `Incomplete` to `"INCOMPLETE"` | `linkSessionSuccessMetadataTransferStatusSchema` |
| `LinkTokenCreateRequestAppearanceMode` | `Light` to `"LIGHT"` · `Dark` to `"DARK"` · `System` to `"SYSTEM"` | `linkTokenCreateRequestAppearanceModeSchema` |
| `LoanAccount` | `Auto` to `"auto"` · `Business` to `"business"` · `Commercial` to `"commercial"` · `Construction` to `"construction"` · `Consumer` to `"consumer"` · `HomeEquity` to `"home equity"` · `LineOfCredit` to `"line of credit"` · `Loan` to `"loan"` · `Mortgage` to `"mortgage"` · `Other` to `"other"` · `Overdraft` to `"overdraft"` · `Student` to `"student"` | `loanAccountSchema` |
| `LoanAccountSubtype` | `Auto` to `"auto"` · `Business` to `"business"` · `Commercial` to `"commercial"` · `Construction` to `"construction"` · `Consumer` to `"consumer"` · `HomeEquity` to `"home equity"` · `Loan` to `"loan"` · `Mortgage` to `"mortgage"` · `Overdraft` to `"overdraft"` · `LineOfCredit` to `"line of credit"` · `Student` to `"student"` · `Other` to `"other"` · `All` to `"all"` | `loanAccountSubtypeSchema` |
| `LoanIdentifierType` | `LenderLoan` to `"LenderLoan"` · `UniversalLoan` to `"UniversalLoan"` | `loanIdentifierTypeSchema` |
| `MatchSummaryCode` | `Match` to `"match"` · `PartialMatch` to `"partial_match"` · `NoMatch` to `"no_match"` · `NoData` to `"no_data"` · `NoInput` to `"no_input"` | `matchSummaryCodeSchema` |
| `MonitoringConsumerReportPermissiblePurpose` | `AccountReviewCredit` to `"ACCOUNT_REVIEW_CREDIT"` · `WrittenInstructionOther` to `"WRITTEN_INSTRUCTION_OTHER"` | `monitoringConsumerReportPermissiblePurposeSchema` |
| `MonitoringInsightsStatus` | `Available` to `"AVAILABLE"` · `Failed` to `"FAILED"` | `monitoringInsightsStatusSchema` |
| `MonitoringItemStatusCode` | `Available` to `"AVAILABLE"` · `Failed` to `"FAILED"` · `Pending` to `"PENDING"` | `monitoringItemStatusCodeSchema` |
| `NetworkInsightsVersion` | `Ni1` to `"NI1"` | `networkInsightsVersionSchema` |
| `NetworkStatusGetResponseNetworkStatus` | `Unknown` to `"UNKNOWN"` · `ReturningUser` to `"RETURNING_USER"` | `networkStatusGetResponseNetworkStatusSchema` |
| `NotificationCategory` | `Security` to `"SECURITY"` · `Maintenance` to `"MAINTENANCE"` · `Fraud` to `"FRAUD"` · `Consent` to `"CONSENT"` · `NewData` to `"NEW_DATA"` · `TokenizedAccountNumber` to `"TOKENIZED_ACCOUNT_NUMBER"` | `notificationCategorySchema` |
| `NotificationPayloadIdType` | `Account` to `"ACCOUNT"` · `Customer` to `"CUSTOMER"` · `Party` to `"PARTY"` · `Maintenance` to `"MAINTENANCE"` · `Consent` to `"CONSENT"` | `notificationPayloadIdTypeSchema` |
| `NotificationPriority` | `High` to `"HIGH"` · `Medium` to `"MEDIUM"` · `Low` to `"LOW"` | `notificationPrioritySchema` |
| `NotificationSeverity` | `Emergency` to `"EMERGENCY"` · `Alert` to `"ALERT"` · `Warning` to `"WARNING"` · `Notice` to `"NOTICE"` · `Info` to `"INFO"` | `notificationSeveritySchema` |
| `NotificationType` | `AccountTakeover` to `"ACCOUNT_TAKEOVER"` · `AddressChanged` to `"ADDRESS_CHANGED"` · `Balance` to `"BALANCE"` · `ConsentExpired` to `"CONSENT_EXPIRED"` · `ConsentGranted` to `"CONSENT_GRANTED"` · `ConsentRevoked` to `"CONSENT_REVOKED"` · `ConsentUpdated` to `"CONSENT_UPDATED"` · `Custom` to `"CUSTOM"` · `MfaTargetChanged` to `"MFA_TARGET_CHANGED"` · `PhoneChanged` to `"PHONE_CHANGED"` · `PlannedOutage` to `"PLANNED_OUTAGE"` · `Risk` to `"RISK"` · `Service` to `"SERVICE"` · `SuspectedIncident` to `"SUSPECTED_INCIDENT"` · `TanActivated` to `"TAN_ACTIVATED"` · `TanCreated` to `"TAN_CREATED"` · `TanRevoked` to `"TAN_REVOKED"` · `TanSuspended` to `"TAN_SUSPENDED"` | `notificationTypeSchema` |
| `OAuthErrorCode` | `InvalidRequest` to `"invalid_request"` · `InvalidClient` to `"invalid_client"` · `InvalidGrant` to `"invalid_grant"` · `UnauthorizedClient` to `"unauthorized_client"` · `InvalidScope` to `"invalid_scope"` · `UnsupportedGrantType` to `"unsupported_grant_type"` | `oAuthErrorCodeSchema` |
| `OAuthGrantType` | `RefreshToken` to `"refresh_token"` · `UrnIetfParamsOauthGrantTypeTokenExchange` to `"urn:ietf:params:oauth:grant-type:token-exchange"` · `ClientCredentials` to `"client_credentials"` | `oAuthGrantTypeSchema` |
| `OAuthSubjectTokenType` | `UrnPlaidParamsTokensUser` to `"urn:plaid:params:tokens:user"` · `UrnPlaidParamsOauthUserToken` to `"urn:plaid:params:oauth:user-token"` · `UrnPlaidParamsCreditMultiUser` to `"urn:plaid:params:credit:multi-user"` | `oAuthSubjectTokenTypeSchema` |
| `OmittableTransferType` | `Debit` to `"debit"` · `Credit` to `"credit"` | `omittableTransferTypeSchema` |
| `OriginatorExpectedTransferFrequency` | `OncePerMonth` to `"once_per_month"` · `TwicePerMonth` to `"twice_per_month"` · `OncePerWeek` to `"once_per_week"` · `Daily` to `"daily"` | `originatorExpectedTransferFrequencySchema` |
| `OtherAccountSubtype` | `Other` to `"other"` · `All` to `"all"` | `otherAccountSubtypeSchema` |
| `OverrideAccountType` | `Investment` to `"investment"` · `Credit` to `"credit"` · `Depository` to `"depository"` · `Loan` to `"loan"` · `Payroll` to `"payroll"` · `Other` to `"other"` | `overrideAccountTypeSchema` |
| `OwnershipType` | `Individual` to `"individual"` · `Joint` to `"joint"` · `Association` to `"association"` · `Trust` to `"trust"` | `ownershipTypeSchema` |
| `PoBoxStatus` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `poBoxStatusSchema` |
| `PartnerEndCustomerCraUseCase` | `CreditUnderwriting` to `"CREDIT_UNDERWRITING"` · `TenantScreening` to `"TENANT_SCREENING"` · `InvestorOrServicerOfCredit` to `"INVESTOR_OR_SERVICER_OF_CREDIT"` · `Utilities` to `"UTILITIES"` · `BankAccountOpening` to `"BANK_ACCOUNT_OPENING"` · `IdentityVerificationFraudPrevention` to `"IDENTITY_VERIFICATION_FRAUD_PREVENTION"` · `CollectionsDebtRecovery` to `"COLLECTIONS_DEBT_RECOVERY"` | `partnerEndCustomerCraUseCaseSchema` |
| `PartnerEndCustomerFlowdownStatus` | `NotStarted` to `"NOT_STARTED"` · `InReview` to `"IN_REVIEW"` · `Negotiation` to `"NEGOTIATION"` · `Complete` to `"COMPLETE"` | `partnerEndCustomerFlowdownStatusSchema` |
| `PartnerEndCustomerOAuthInstitutionApplicationStatus` | `NotStarted` to `"NOT_STARTED"` · `Processing` to `"PROCESSING"` · `Approved` to `"APPROVED"` · `Enabled` to `"ENABLED"` · `AttentionRequired` to `"ATTENTION_REQUIRED"` | `partnerEndCustomerOAuthInstitutionApplicationStatusSchema` |
| `PartnerEndCustomerOAuthStatusUpdatedValues` | `NotStarted` to `"not-started"` · `Processing` to `"processing"` · `Approved` to `"approved"` · `Enabled` to `"enabled"` · `AttentionRequired` to `"attention-required"` | `partnerEndCustomerOAuthStatusUpdatedValuesSchema` |
| `PartnerEndCustomerQuestionnaireStatus` | `NotStarted` to `"NOT_STARTED"` · `Received` to `"RECEIVED"` · `Complete` to `"COMPLETE"` | `partnerEndCustomerQuestionnaireStatusSchema` |
| `PartnerEndCustomerRequirementDue` | `LegalEntityName` to `"legal_entity_name"` · `Website` to `"website"` · `ApplicationName` to `"application_name"` · `IsDiligenceAttested` to `"is_diligence_attested"` · `TechnicalContact` to `"technical_contact"` · `BillingContact` to `"billing_contact"` · `Address` to `"address"` · `BankAddendumAcceptance` to `"bank_addendum_acceptance"` · `QuestionnairesCra` to `"questionnaires.cra"` | `partnerEndCustomerRequirementDueSchema` |
| `PartnerEndCustomerStatus` | `UnderReview` to `"UNDER_REVIEW"` · `PendingEnablement` to `"PENDING_ENABLEMENT"` · `Active` to `"ACTIVE"` · `Denied` to `"DENIED"` · `MoreInformationNeeded` to `"MORE_INFORMATION_NEEDED"` | `partnerEndCustomerStatusSchema` |
| `PartyRegistry` | `Fdx` to `"FDX"` · `Gleif` to `"GLEIF"` · `Icann` to `"ICANN"` · `Private` to `"PRIVATE"` | `partyRegistrySchema` |
| `PartyType` | `DataAccessPlatform` to `"DATA_ACCESS_PLATFORM"` · `DataProvider` to `"DATA_PROVIDER"` · `DataRecipient` to `"DATA_RECIPIENT"` · `Individual` to `"INDIVIDUAL"` · `Merchant` to `"MERCHANT"` · `Vendor` to `"VENDOR"` | `partyTypeSchema` |
| `PartyRoleType` | `Borrower` to `"Borrower"` | `partyRoleTypeSchema` |
| `PayFrequencyValue` | `Monthly` to `"monthly"` · `Semimonthly` to `"semimonthly"` · `Weekly` to `"weekly"` · `Biweekly` to `"biweekly"` · `Unknown` to `"unknown"` | `payFrequencyValueSchema` |
| `PayPeriodDetailsPayFrequency` | `PayFrequencyUnknown` to `"PAY_FREQUENCY_UNKNOWN"` · `PayFrequencyWeekly` to `"PAY_FREQUENCY_WEEKLY"` · `PayFrequencyBiweekly` to `"PAY_FREQUENCY_BIWEEKLY"` · `PayFrequencySemimonthly` to `"PAY_FREQUENCY_SEMIMONTHLY"` · `PayFrequencyMonthly` to `"PAY_FREQUENCY_MONTHLY"` | `payPeriodDetailsPayFrequencySchema` |
| `PaymentAmountCurrency` | `Gbp` to `"GBP"` · `Eur` to `"EUR"` · `Pln` to `"PLN"` · `Sek` to `"SEK"` · `Dkk` to `"DKK"` · `Nok` to `"NOK"` | `paymentAmountCurrencySchema` |
| `PaymentChannel` | `Online` to `"online"` · `InStore` to `"in store"` · `Other` to `"other"` | `paymentChannelSchema` |
| `PaymentConsentPeriodicAlignment` | `Calendar` to `"CALENDAR"` · `Consent` to `"CONSENT"` | `paymentConsentPeriodicAlignmentSchema` |
| `PaymentConsentPeriodicInterval` | `Day` to `"DAY"` · `Week` to `"WEEK"` · `Month` to `"MONTH"` · `Year` to `"YEAR"` | `paymentConsentPeriodicIntervalSchema` |
| `PaymentInitiationConsentProcessingMode` | `Async` to `"ASYNC"` · `Immediate` to `"IMMEDIATE"` | `paymentInitiationConsentProcessingModeSchema` |
| `PaymentInitiationConsentScope` | `MeToMe` to `"ME_TO_ME"` · `External` to `"EXTERNAL"` | `paymentInitiationConsentScopeSchema` |
| `PaymentInitiationConsentStatus` | `Unauthorised` to `"UNAUTHORISED"` · `Authorised` to `"AUTHORISED"` · `Revoked` to `"REVOKED"` · `Rejected` to `"REJECTED"` · `Expired` to `"EXPIRED"` | `paymentInitiationConsentStatusSchema` |
| `PaymentInitiationConsentType` | `Sweeping` to `"SWEEPING"` · `Commercial` to `"COMMERCIAL"` | `paymentInitiationConsentTypeSchema` |
| `PaymentInitiationPaymentCreateStatus` | `PaymentStatusInputNeeded` to `"PAYMENT_STATUS_INPUT_NEEDED"` | `paymentInitiationPaymentCreateStatusSchema` |
| `PaymentInitiationPaymentStatus` | `PaymentStatusInputNeeded` to `"PAYMENT_STATUS_INPUT_NEEDED"` · `PaymentStatusProcessing` to `"PAYMENT_STATUS_PROCESSING"` · `PaymentStatusInitiated` to `"PAYMENT_STATUS_INITIATED"` · `PaymentStatusCompleted` to `"PAYMENT_STATUS_COMPLETED"` · `PaymentStatusInsufficientFunds` to `"PAYMENT_STATUS_INSUFFICIENT_FUNDS"` · `PaymentStatusFailed` to `"PAYMENT_STATUS_FAILED"` · `PaymentStatusBlocked` to `"PAYMENT_STATUS_BLOCKED"` · `PaymentStatusUnknown` to `"PAYMENT_STATUS_UNKNOWN"` · `PaymentStatusExecuted` to `"PAYMENT_STATUS_EXECUTED"` · `PaymentStatusSettled` to `"PAYMENT_STATUS_SETTLED"` · `PaymentStatusAuthorising` to `"PAYMENT_STATUS_AUTHORISING"` · `PaymentStatusCancelled` to `"PAYMENT_STATUS_CANCELLED"` · `PaymentStatusEstablished` to `"PAYMENT_STATUS_ESTABLISHED"` · `PaymentStatusRejected` to `"PAYMENT_STATUS_REJECTED"` | `paymentInitiationPaymentStatusSchema` |
| `PaymentProfileStatus` | `Pending` to `"PENDING"` · `Ready` to `"READY"` · `Removed` to `"REMOVED"` | `paymentProfileStatusSchema` |
| `PaymentScheduleInterval` | `Weekly` to `"WEEKLY"` · `Monthly` to `"MONTHLY"` | `paymentScheduleIntervalSchema` |
| `PaymentScheme` | `LocalDefault` to `"LOCAL_DEFAULT"` · `LocalInstant` to `"LOCAL_INSTANT"` · `SepaCreditTransfer` to `"SEPA_CREDIT_TRANSFER"` · `SepaCreditTransferInstant` to `"SEPA_CREDIT_TRANSFER_INSTANT"` | `paymentSchemeSchema` |
| `PayrollAccount` | `Payroll` to `"payroll"` | `payrollAccountSchema` |
| `PaystubPayFrequency` | `Monthly` to `"MONTHLY"` · `BiWeekly` to `"BI-WEEKLY"` · `Weekly` to `"WEEKLY"` · `SemiMonthly` to `"SEMI-MONTHLY"` | `paystubPayFrequencySchema` |
| `PendingDisconnectWebhookReason` | `InstitutionMigration` to `"INSTITUTION_MIGRATION"` · `InstitutionTokenExpiration` to `"INSTITUTION_TOKEN_EXPIRATION"` | `pendingDisconnectWebhookReasonSchema` |
| `PersonalFinanceCategoryVersion` | `V1` to `"v1"` · `V2` to `"v2"` | `personalFinanceCategoryVersionSchema` |
| `PhoneType` | `Phone` to `"phone"` · `Fax` to `"fax"` | `phoneTypeSchema` |
| `PhysicalDocumentCategory` | `DriversLicense` to `"drivers_license"` · `IdCard` to `"id_card"` · `Passport` to `"passport"` · `ResidencePermitCard` to `"residence_permit_card"` · `ResidentCard` to `"resident_card"` · `Visa` to `"visa"` | `physicalDocumentCategorySchema` |
| `PlaidErrorType` | `InvalidRequest` to `"INVALID_REQUEST"` · `InvalidResult` to `"INVALID_RESULT"` · `InvalidInput` to `"INVALID_INPUT"` · `InstitutionError` to `"INSTITUTION_ERROR"` · `RateLimitExceeded` to `"RATE_LIMIT_EXCEEDED"` · `ApiError` to `"API_ERROR"` · `ItemError` to `"ITEM_ERROR"` · `AssetReportError` to `"ASSET_REPORT_ERROR"` · `BaseReportError` to `"BASE_REPORT_ERROR"` · `RecaptchaError` to `"RECAPTCHA_ERROR"` · `OauthError` to `"OAUTH_ERROR"` · `PaymentError` to `"PAYMENT_ERROR"` · `BankTransferError` to `"BANK_TRANSFER_ERROR"` · `IncomeVerificationError` to `"INCOME_VERIFICATION_ERROR"` · `MicrodepositsError` to `"MICRODEPOSITS_ERROR"` · `SandboxError` to `"SANDBOX_ERROR"` · `PartnerError` to `"PARTNER_ERROR"` · `SignalError` to `"SIGNAL_ERROR"` · `TransactionsError` to `"TRANSACTIONS_ERROR"` · `TransactionError` to `"TRANSACTION_ERROR"` · `TransferError` to `"TRANSFER_ERROR"` · `CheckReportError` to `"CHECK_REPORT_ERROR"` · `ConsumerReportError` to `"CONSUMER_REPORT_ERROR"` · `UserError` to `"USER_ERROR"` · `IdempotencyError` to `"IDEMPOTENCY_ERROR"` · `AssetsError` to `"ASSETS_ERROR"` · `CraMonitoringError` to `"CRA_MONITORING_ERROR"` · `CreditProfileReportError` to `"CREDIT_PROFILE_REPORT_ERROR"` · `EncompassError` to `"ENCOMPASS_ERROR"` · `EnrichError` to `"ENRICH_ERROR"` · `FraudInsightsError` to `"FRAUD_INSIGHTS_ERROR"` · `FreddieMacError` to `"FREDDIE_MAC_ERROR"` · `LinkDeliveryError` to `"LINK_DELIVERY_ERROR"` · `ProfileError` to `"PROFILE_ERROR"` · `RecurringTransactionsError` to `"RECURRING_TRANSACTIONS_ERROR"` · `StatementsError` to `"STATEMENTS_ERROR"` · `TransferRecurringError` to `"TRANSFER_RECURRING_ERROR"` · `TransferRefundError` to `"TRANSFER_REFUND_ERROR"` | `plaidErrorTypeSchema` |
| `PlaidLendScoreVersion` | `V10` to `"v1.0"` · `V20` to `"v2.0"` · `Ls1` to `"LS1"` | `plaidLendScoreVersionSchema` |
| `PrismCashScoreVersion` | `_41` to `"4.1"` · `_4` to `"4"` · `_3Lite` to `"3_lite"` · `_3` to `"3"` | `prismCashScoreVersionSchema` |
| `PrismDetectVersion` | `_41` to `"4.1"` · `_4` to `"4"` | `prismDetectVersionSchema` |
| `PrismExtendVersion` | `_41` to `"4.1"` · `_4` to `"4"` | `prismExtendVersionSchema` |
| `PrismFirstDetectVersion` | `_3` to `"3"` | `prismFirstDetectVersionSchema` |
| `PrismInsightsVersion` | `_41` to `"4.1"` · `_4` to `"4"` · `_3` to `"3"` | `prismInsightsVersionSchema` |
| `Processor` | `Dwolla` to `"dwolla"` · `Galileo` to `"galileo"` · `ModernTreasury` to `"modern_treasury"` · `Ocrolus` to `"ocrolus"` · `Vesta` to `"vesta"` · `Drivewealth` to `"drivewealth"` · `Vopay` to `"vopay"` · `Achq` to `"achq"` · `Check` to `"check"` · `Checkbook` to `"checkbook"` · `Circle` to `"circle"` · `SilaMoney` to `"sila_money"` · `Rize` to `"rize"` · `SvbApi` to `"svb_api"` · `Unit` to `"unit"` · `Wyre` to `"wyre"` · `Lithic` to `"lithic"` · `Alpaca` to `"alpaca"` · `Astra` to `"astra"` · `Moov` to `"moov"` · `TreasuryPrime` to `"treasury_prime"` · `Marqeta` to `"marqeta"` · `Checkout` to `"checkout"` · `Solid` to `"solid"` · `Highnote` to `"highnote"` · `Gemini` to `"gemini"` · `ApexClearing` to `"apex_clearing"` · `Gusto` to `"gusto"` · `Adyen` to `"adyen"` · `Atomic` to `"atomic"` · `I2C` to `"i2c"` · `Wepay` to `"wepay"` · `Riskified` to `"riskified"` · `Utb` to `"utb"` · `AdpRoll` to `"adp_roll"` · `FortressTrust` to `"fortress_trust"` · `Bond` to `"bond"` · `Bakkt` to `"bakkt"` · `Teal` to `"teal"` · `ZeroHash` to `"zero_hash"` · `TabaPay` to `"taba_pay"` · `Knot` to `"knot"` · `Sardine` to `"sardine"` · `Alloy` to `"alloy"` · `Finix` to `"finix"` · `Nuvei` to `"nuvei"` · `Layer` to `"layer"` · `Boom` to `"boom"` · `Paynote` to `"paynote"` · `Stake` to `"stake"` · `Wedbush` to `"wedbush"` · `Esusu` to `"esusu"` · `Ansa` to `"ansa"` · `Scribeup` to `"scribeup"` · `Straddle` to `"straddle"` · `Loanpro` to `"loanpro"` · `BloomCredit` to `"bloom_credit"` · `Sfox` to `"sfox"` · `Brale` to `"brale"` · `Parafin` to `"parafin"` · `Cardless` to `"cardless"` · `OpenLedger` to `"open_ledger"` · `Valon` to `"valon"` · `Gainbridge` to `"gainbridge"` · `Cardlytics` to `"cardlytics"` · `Pinwheel` to `"pinwheel"` · `ThreadBank` to `"thread_bank"` · `Array` to `"array"` · `Fiant` to `"fiant"` · `Oatfi` to `"oatfi"` · `Curinos` to `"curinos"` · `Frame` to `"frame"` · `Interchecks` to `"interchecks"` · `Interchange` to `"interchange"` · `Atomicfi` to `"atomicfi"` · `Pay` to `"pay"` · `Natural` to `"natural"` · `Kanmon` to `"kanmon"` · `Kick` to `"kick"` · `Increase` to `"increase"` | `processorSchema` |
| `Products` | `Assets` to `"assets"` · `Auth` to `"auth"` · `Balance` to `"balance"` · `BalancePlus` to `"balance_plus"` · `Beacon` to `"beacon"` · `Identity` to `"identity"` · `IdentityMatch` to `"identity_match"` · `Investments` to `"investments"` · `InvestmentsAuth` to `"investments_auth"` · `Liabilities` to `"liabilities"` · `PaymentInitiation` to `"payment_initiation"` · `IdentityVerification` to `"identity_verification"` · `Transactions` to `"transactions"` · `CreditDetails` to `"credit_details"` · `Income` to `"income"` · `IncomeVerification` to `"income_verification"` · `StandingOrders` to `"standing_orders"` · `Transfer` to `"transfer"` · `Employment` to `"employment"` · `RecurringTransactions` to `"recurring_transactions"` · `TransactionsRefresh` to `"transactions_refresh"` · `Signal` to `"signal"` · `Statements` to `"statements"` · `ProcessorPayments` to `"processor_payments"` · `ProcessorIdentity` to `"processor_identity"` · `Profile` to `"profile"` · `CraBaseReport` to `"cra_base_report"` · `CraIncomeInsights` to `"cra_income_insights"` · `CraPartnerInsights` to `"cra_partner_insights"` · `CraNetworkInsights` to `"cra_network_insights"` · `CraCashflowInsights` to `"cra_cashflow_insights"` · `CraMonitoring` to `"cra_monitoring"` · `CraLendScore` to `"cra_lend_score"` · `CraPlaidCreditScore` to `"cra_plaid_credit_score"` · `CraQualify` to `"cra_qualify"` · `Layer` to `"layer"` · `PayByBank` to `"pay_by_bank"` · `ProtectLinkedBank` to `"protect_linked_bank"` · `ProtectTransactions` to `"protect_transactions"` | `productsSchema` |
| `ProductsTerminateReasonCode` | `FraudFirstParty` to `"FRAUD_FIRST_PARTY"` · `FraudFalseIdentity` to `"FRAUD_FALSE_IDENTITY"` · `FraudAbuse` to `"FRAUD_ABUSE"` · `FraudOther` to `"FRAUD_OTHER"` · `FraudTransaction` to `"FRAUD_TRANSACTION"` · `ConsumerLoanPaidOff` to `"CONSUMER_LOAN_PAID_OFF"` · `ConsumerAccountClosed` to `"CONSUMER_ACCOUNT_CLOSED"` · `ConsumerChargeOff` to `"CONSUMER_CHARGE_OFF"` · `ConsumerPaymentMethodSwitched` to `"CONSUMER_PAYMENT_METHOD_SWITCHED"` · `UserOffboarding` to `"USER_OFFBOARDING"` · `DuplicateItem` to `"DUPLICATE_ITEM"` · `BillingTermination` to `"BILLING_TERMINATION"` · `Other` to `"OTHER"` | `productsTerminateReasonCodeSchema` |
| `ProgramNameSensitivity` | `Coarse` to `"coarse"` · `Balanced` to `"balanced"` · `Strict` to `"strict"` · `Exact` to `"exact"` | `programNameSensitivitySchema` |
| `ProtectReportConfidence` | `Confirmed` to `"CONFIRMED"` · `Suspected` to `"SUSPECTED"` | `protectReportConfidenceSchema` |
| `ProtectReportSource` | `InternalReview` to `"INTERNAL_REVIEW"` · `UserSelfReported` to `"USER_SELF_REPORTED"` · `BankFeedback` to `"BANK_FEEDBACK"` · `NetworkFeedback` to `"NETWORK_FEEDBACK"` · `AutomatedSystem` to `"AUTOMATED_SYSTEM"` · `ThirdPartyAlert` to `"THIRD_PARTY_ALERT"` · `Other` to `"OTHER"` | `protectReportSourceSchema` |
| `ProtectReportType` | `UserAccountTakeover` to `"USER_ACCOUNT_TAKEOVER"` · `FalseIdentity` to `"FALSE_IDENTITY"` · `StolenIdentity` to `"STOLEN_IDENTITY"` · `SyntheticIdentity` to `"SYNTHETIC_IDENTITY"` · `MultipleUserAccounts` to `"MULTIPLE_USER_ACCOUNTS"` · `ScamVictim` to `"SCAM_VICTIM"` · `BankAccountTakeover` to `"BANK_ACCOUNT_TAKEOVER"` · `BankConnectionRevoked` to `"BANK_CONNECTION_REVOKED"` · `CardTesting` to `"CARD_TESTING"` · `UnauthorizedTransaction` to `"UNAUTHORIZED_TRANSACTION"` · `CardChargeback` to `"CARD_CHARGEBACK"` · `AchReturn` to `"ACH_RETURN"` · `Dispute` to `"DISPUTE"` · `FirstPartyFraud` to `"FIRST_PARTY_FRAUD"` · `MissedPayment` to `"MISSED_PAYMENT"` · `LoanStacking` to `"LOAN_STACKING"` · `MoneyLaundering` to `"MONEY_LAUNDERING"` · `NoFraud` to `"NO_FRAUD"` · `Other` to `"OTHER"` | `protectReportTypeSchema` |
| `ProxyType` | `NoneDetected` to `"none_detected"` · `Tor` to `"tor"` · `Vpn` to `"vpn"` · `WebProxy` to `"web_proxy"` · `PublicProxy` to `"public_proxy"` | `proxyTypeSchema` |
| `ReasonCode` | `Ac03` to `"AC03"` · `Am09` to `"AM09"` · `Cust` to `"CUST"` · `Dupl` to `"DUPL"` · `Frad` to `"FRAD"` · `Tech` to `"TECH"` · `Upay` to `"UPAY"` · `Ac14` to `"AC14"` · `Am06` to `"AM06"` · `Be05` to `"BE05"` · `Focr` to `"FOCR"` · `Ms02` to `"MS02"` · `Ms03` to `"MS03"` · `Rr04` to `"RR04"` · `Ruta` to `"RUTA"` | `reasonCodeSchema` |
| `RecommendationString` | `Recommended` to `"RECOMMENDED"` · `NotRecommended` to `"NOT_RECOMMENDED"` · `Unknown` to `"UNKNOWN"` | `recommendationStringSchema` |
| `RecurringTransactionFrequency` | `Unknown` to `"UNKNOWN"` · `Weekly` to `"WEEKLY"` · `Biweekly` to `"BIWEEKLY"` · `SemiMonthly` to `"SEMI_MONTHLY"` · `Monthly` to `"MONTHLY"` · `Annually` to `"ANNUALLY"` | `recurringTransactionFrequencySchema` |
| `RefreshInterval` | `Normal` to `"NORMAL"` · `Delayed` to `"DELAYED"` · `Stopped` to `"STOPPED"` | `refreshIntervalSchema` |
| `ReportType` | `Asset` to `"asset"` | `reportTypeSchema` |
| `RerouteToCredentials` | `Off` to `"OFF"` · `Optional` to `"OPTIONAL"` · `Forced` to `"FORCED"` | `rerouteToCredentialsSchema` |
| `RiskCheckBehaviorBotDetectedLabel` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `riskCheckBehaviorBotDetectedLabelSchema` |
| `RiskCheckBehaviorFraudRingDetectedLabel` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `riskCheckBehaviorFraudRingDetectedLabelSchema` |
| `RiskCheckBehaviorUserInteractionsLabel` | `Genuine` to `"genuine"` · `Neutral` to `"neutral"` · `Risky` to `"risky"` · `NoData` to `"no_data"` | `riskCheckBehaviorUserInteractionsLabelSchema` |
| `RiskCheckEmailDomainIsCustom` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `riskCheckEmailDomainIsCustomSchema` |
| `RiskCheckEmailDomainIsDisposable` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `riskCheckEmailDomainIsDisposableSchema` |
| `RiskCheckEmailDomainIsFreeProvider` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `riskCheckEmailDomainIsFreeProviderSchema` |
| `RiskCheckEmailIncludesDateOfBirth` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `riskCheckEmailIncludesDateOfBirthSchema` |
| `RiskCheckEmailIsDeliverableStatus` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `riskCheckEmailIsDeliverableStatusSchema` |
| `RiskCheckEmailIsEdu` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `riskCheckEmailIsEduSchema` |
| `RiskCheckEmailName` | `NoInput` to `"no_input"` · `Indeterminate` to `"indeterminate"` · `NoMatch` to `"no_match"` · `PartialMatch` to `"partial_match"` · `Match` to `"match"` · `NoData` to `"no_data"` | `riskCheckEmailNameSchema` |
| `RiskCheckEmailTopLevelDomainIsSuspicious` | `Yes` to `"yes"` · `No` to `"no"` · `NoData` to `"no_data"` | `riskCheckEmailTopLevelDomainIsSuspiciousSchema` |
| `RiskCheckLinkedService` | `Aboutme` to `"aboutme"` · `Adobe` to `"adobe"` · `AdultSites` to `"adult_sites"` · `Airbnb` to `"airbnb"` · `Altbalaji` to `"altbalaji"` · `Amazon` to `"amazon"` · `Apple` to `"apple"` · `Archiveorg` to `"archiveorg"` · `Atlassian` to `"atlassian"` · `Bitmoji` to `"bitmoji"` · `Bodybuilding` to `"bodybuilding"` · `Booking` to `"booking"` · `Bukalapak` to `"bukalapak"` · `Codecademy` to `"codecademy"` · `Deliveroo` to `"deliveroo"` · `Diigo` to `"diigo"` · `Discord` to `"discord"` · `Disneyplus` to `"disneyplus"` · `Duolingo` to `"duolingo"` · `Ebay` to `"ebay"` · `Envato` to `"envato"` · `Eventbrite` to `"eventbrite"` · `Evernote` to `"evernote"` · `Facebook` to `"facebook"` · `Firefox` to `"firefox"` · `Flickr` to `"flickr"` · `Flipkart` to `"flipkart"` · `Foursquare` to `"foursquare"` · `Freelancer` to `"freelancer"` · `Gaana` to `"gaana"` · `Giphy` to `"giphy"` · `Github` to `"github"` · `Google` to `"google"` · `Gravatar` to `"gravatar"` · `Hubspot` to `"hubspot"` · `Imgur` to `"imgur"` · `Instagram` to `"instagram"` · `Jdid` to `"jdid"` · `Kakao` to `"kakao"` · `Kommo` to `"kommo"` · `Komoot` to `"komoot"` · `Lastfm` to `"lastfm"` · `Lazada` to `"lazada"` · `Line` to `"line"` · `Linkedin` to `"linkedin"` · `Mailru` to `"mailru"` · `Microsoft` to `"microsoft"` · `Myspace` to `"myspace"` · `Netflix` to `"netflix"` · `Nike` to `"nike"` · `Ok` to `"ok"` · `Patreon` to `"patreon"` · `Pinterest` to `"pinterest"` · `Plurk` to `"plurk"` · `Quora` to `"quora"` · `Qzone` to `"qzone"` · `Rambler` to `"rambler"` · `Rappi` to `"rappi"` · `Replit` to `"replit"` · `Samsung` to `"samsung"` · `Seoclerks` to `"seoclerks"` · `Shopclues` to `"shopclues"` · `Skype` to `"skype"` · `Snapchat` to `"snapchat"` · `Snapdeal` to `"snapdeal"` · `Soundcloud` to `"soundcloud"` · `Spotify` to `"spotify"` · `Starz` to `"starz"` · `Strava` to `"strava"` · `Taringa` to `"taringa"` · `Telegram` to `"telegram"` · `Tiki` to `"tiki"` · `Tokopedia` to `"tokopedia"` · `Treehouse` to `"treehouse"` · `Tumblr` to `"tumblr"` · `Twitter` to `"twitter"` · `Venmo` to `"venmo"` · `Viber` to `"viber"` · `Vimeo` to `"vimeo"` · `Vivino` to `"vivino"` · `Vkontakte` to `"vkontakte"` · `Wattpad` to `"wattpad"` · `Weibo` to `"weibo"` · `Whatsapp` to `"whatsapp"` · `Wordpress` to `"wordpress"` · `Xing` to `"xing"` · `Yahoo` to `"yahoo"` · `Yandex` to `"yandex"` · `Zalo` to `"zalo"` · `Zoho` to `"zoho"` | `riskCheckLinkedServiceSchema` |
| `RiskLevel` | `Low` to `"low"` · `Medium` to `"medium"` · `High` to `"high"` | `riskLevelSchema` |
| `RiskLevelWithNoData` | `Low` to `"low"` · `Medium` to `"medium"` · `High` to `"high"` · `NoData` to `"no_data"` | `riskLevelWithNoDataSchema` |
| `RiskSignalDocumentStatus` | `Processing` to `"PROCESSING"` · `ProcessingComplete` to `"PROCESSING_COMPLETE"` · `ProcessingError` to `"PROCESSING_ERROR"` · `PasswordProtected` to `"PASSWORD_PROTECTED"` · `VirusDetected` to `"VIRUS_DETECTED"` | `riskSignalDocumentStatusSchema` |
| `RiskSignalDocumentType` | `Unknown` to `"UNKNOWN"` · `BankStatement` to `"BANK_STATEMENT"` · `BenefitsStatement` to `"BENEFITS_STATEMENT"` · `BusinessFiling` to `"BUSINESS_FILING"` · `Check` to `"CHECK"` · `DrivingLicense` to `"DRIVING_LICENSE"` · `FinancialStatement` to `"FINANCIAL_STATEMENT"` · `Invoice` to `"INVOICE"` · `Payslip` to `"PAYSLIP"` · `SocialSecurityCard` to `"SOCIAL_SECURITY_CARD"` · `TaxForm` to `"TAX_FORM"` · `UtilityBill` to `"UTILITY_BILL"` | `riskSignalDocumentTypeSchema` |
| `RiskSignalFileType` | `Unknown` to `"UNKNOWN"` · `ImagePdf` to `"IMAGE_PDF"` · `ScanOcr` to `"SCAN_OCR"` · `TruePdf` to `"TRUE_PDF"` · `Image` to `"IMAGE"` · `MixedPagePdf` to `"MIXED_PAGE_PDF"` · `EmptyPdf` to `"EMPTY_PDF"` · `FlattenedPdf` to `"FLATTENED_PDF"` | `riskSignalFileTypeSchema` |
| `RuleResult` | `Accept` to `"ACCEPT"` · `Reroute` to `"REROUTE"` · `Review` to `"REVIEW"` | `ruleResultSchema` |
| `SmsVerificationStatus` | `Pending` to `"pending"` · `Success` to `"success"` · `Failed` to `"failed"` · `Canceled` to `"canceled"` | `smsVerificationStatusSchema` |
| `SandboxBankIncomeWebhookFireRequestWebhookCode` | `BankIncomeRefreshUpdate` to `"BANK_INCOME_REFRESH_UPDATE"` · `BankIncomeRefreshComplete` to `"BANK_INCOME_REFRESH_COMPLETE"` | `sandboxBankIncomeWebhookFireRequestWebhookCodeSchema` |
| `SandboxIncomeWebhookFireRequestWebhookCode` | `IncomeVerification` to `"INCOME_VERIFICATION"` · `IncomeVerificationRiskSignals` to `"INCOME_VERIFICATION_RISK_SIGNALS"` | `sandboxIncomeWebhookFireRequestWebhookCodeSchema` |
| `SandboxTransferRfpSimulateAction` | `Approve` to `"approve"` · `Reject` to `"reject"` | `sandboxTransferRfpSimulateActionSchema` |
| `ScopesContext` | `Enrollment` to `"ENROLLMENT"` · `Portal` to `"PORTAL"` | `scopesContextSchema` |
| `SelfieAgeCheckStatus` | `Match` to `"match"` · `Warning` to `"warning"` · `NoMatch` to `"no_match"` · `NoData` to `"no_data"` | `selfieAgeCheckStatusSchema` |
| `SelfieAnalysisDocumentComparison` | `Match` to `"match"` · `NoMatch` to `"no_match"` · `NoInput` to `"no_input"` | `selfieAnalysisDocumentComparisonSchema` |
| `SelfieAnalysisFacialAnalysisOutcome` | `Success` to `"success"` · `Failed` to `"failed"` | `selfieAnalysisFacialAnalysisOutcomeSchema` |
| `SelfieAnalysisLivenessCheck` | `Success` to `"success"` · `Failed` to `"failed"` | `selfieAnalysisLivenessCheckSchema` |
| `SelfieCheckStatus` | `Success` to `"success"` · `Failed` to `"failed"` | `selfieCheckStatusSchema` |
| `SelfieStatus` | `Success` to `"success"` · `Failed` to `"failed"` | `selfieStatusSchema` |
| `SellType` | `Distribution` to `"distribution"` · `Exercise` to `"exercise"` · `Sell` to `"sell"` · `SellShort` to `"sell short"` | `sellTypeSchema` |
| `ServiceProductFulfillmentIdentifier` | `Voa` to `"VOA"` · `Voe` to `"VOE"` | `serviceProductFulfillmentIdentifierSchema` |
| `SignalDecisionOutcome` | `Approve` to `"APPROVE"` · `Review` to `"REVIEW"` · `Reject` to `"REJECT"` · `TakeOtherRiskMeasures` to `"TAKE_OTHER_RISK_MEASURES"` · `NotEvaluated` to `"NOT_EVALUATED"` | `signalDecisionOutcomeSchema` |
| `SignalPaymentMethod` | `SameDayAch` to `"SAME_DAY_ACH"` · `NextDayAch` to `"NEXT_DAY_ACH"` · `StandardAch` to `"STANDARD_ACH"` · `MultiplePaymentMethods` to `"MULTIPLE_PAYMENT_METHODS"` | `signalPaymentMethodSchema` |
| `SignalScheduleDefaultPaymentMethod` | `SameDayAch` to `"SAME_DAY_ACH"` · `StandardAch` to `"STANDARD_ACH"` · `MultiplePaymentMethods` to `"MULTIPLE_PAYMENT_METHODS"` | `signalScheduleDefaultPaymentMethodSchema` |
| `Source` | `Dashboard` to `"dashboard"` · `Link` to `"link"` · `Api` to `"api"` · `System` to `"system"` · `Retro` to `"retro"` | `sourceSchema` |
| `StandaloneInvestmentTransactionTransferType` | `Assignment` to `"assignment"` · `Adjustment` to `"adjustment"` · `Exercise` to `"exercise"` · `Expire` to `"expire"` · `Merger` to `"merger"` · `Request` to `"request"` · `Send` to `"send"` · `SpinOff` to `"spin off"` · `Split` to `"split"` · `Trade` to `"trade"` · `Transfer` to `"transfer"` | `standaloneInvestmentTransactionTransferTypeSchema` |
| `StatementsRefreshCompleteResult` | `Success` to `"SUCCESS"` · `Failure` to `"FAILURE"` | `statementsRefreshCompleteResultSchema` |
| `Status1` | `Investigating` to `"INVESTIGATING"` · `Identified` to `"IDENTIFIED"` · `Scheduled` to `"SCHEDULED"` · `Resolved` to `"RESOLVED"` · `Unknown` to `"UNKNOWN"` | `status1Schema` |
| `Status4` | `Healthy` to `"HEALTHY"` · `Degraded` to `"DEGRADED"` · `Down` to `"DOWN"` | `status4Schema` |
| `Strategy` | `Reset` to `"reset"` · `Incomplete` to `"incomplete"` · `Infer` to `"infer"` · `Custom` to `"custom"` | `strategySchema` |
| `SweepStatus` | `Pending` to `"pending"` · `Posted` to `"posted"` · `Settled` to `"settled"` · `FundsAvailable` to `"funds_available"` · `Returned` to `"returned"` · `Failed` to `"failed"` | `sweepStatusSchema` |
| `SweepTrigger` | `Manual` to `"manual"` · `Incoming` to `"incoming"` · `BalanceThreshold` to `"balance_threshold"` · `AutomaticAggregate` to `"automatic_aggregate"` | `sweepTriggerSchema` |
| `TaxpayerIdentifierType` | `IndividualTaxpayerIdentificationNumber` to `"IndividualTaxpayerIdentificationNumber"` · `SocialSecurityNumber` to `"SocialSecurityNumber"` | `taxpayerIdentifierTypeSchema` |
| `TotalCanonicalDescription` | `Bonus` to `"BONUS"` · `Commission` to `"COMMISSION"` · `Overtime` to `"OVERTIME"` · `PaidTimeOff` to `"PAID TIME OFF"` · `RegularPay` to `"REGULAR PAY"` · `Vacation` to `"VACATION"` · `EmployeeMedicare` to `"EMPLOYEE MEDICARE"` · `Fica` to `"FICA"` · `SocialSecurityEmployeeTax` to `"SOCIAL SECURITY EMPLOYEE TAX"` · `Medical` to `"MEDICAL"` · `Vision` to `"VISION"` · `Dental` to `"DENTAL"` · `NetPay` to `"NET PAY"` · `Taxes` to `"TAXES"` · `NotFound` to `"NOT_FOUND"` · `Other` to `"OTHER"` | `totalCanonicalDescriptionSchema` |
| `TransactionPaymentChannel` | `Online` to `"online"` · `InStore` to `"in store"` · `Other` to `"other"` | `transactionPaymentChannelSchema` |
| `TransactionStreamStatus` | `Unknown` to `"UNKNOWN"` · `Mature` to `"MATURE"` · `EarlyDetection` to `"EARLY_DETECTION"` · `Tombstoned` to `"TOMBSTONED"` | `transactionStreamStatusSchema` |
| `TransactionType` | `Digital` to `"digital"` · `Place` to `"place"` · `Special` to `"special"` · `Unresolved` to `"unresolved"` | `transactionTypeSchema` |
| `TransactionsRuleField` | `TransactionId` to `"TRANSACTION_ID"` · `MerchantName` to `"MERCHANT_NAME"` | `transactionsRuleFieldSchema` |
| `TransactionsRuleType` | `ExactMatch` to `"EXACT_MATCH"` · `SubstringMatch` to `"SUBSTRING_MATCH"` | `transactionsRuleTypeSchema` |
| `TransactionsUpdateStatus` | `TransactionsUpdateStatusUnknown` to `"TRANSACTIONS_UPDATE_STATUS_UNKNOWN"` · `NotReady` to `"NOT_READY"` · `InitialUpdateComplete` to `"INITIAL_UPDATE_COMPLETE"` · `HistoricalUpdateComplete` to `"HISTORICAL_UPDATE_COMPLETE"` | `transactionsUpdateStatusSchema` |
| `TransferAchNetwork` | `Ach` to `"ach"` · `SameDayAch` to `"same-day-ach"` | `transferAchNetworkSchema` |
| `TransferAuthorizationDecision` | `Approved` to `"approved"` · `Declined` to `"declined"` · `UserActionRequired` to `"user_action_required"` | `transferAuthorizationDecisionSchema` |
| `TransferAuthorizationDecisionRationaleCode` | `Nsf` to `"NSF"` · `Risk` to `"RISK"` · `TransferLimitReached` to `"TRANSFER_LIMIT_REACHED"` · `ManuallyVerifiedItem` to `"MANUALLY_VERIFIED_ITEM"` · `ItemLoginRequired` to `"ITEM_LOGIN_REQUIRED"` · `PaymentProfileLoginRequired` to `"PAYMENT_PROFILE_LOGIN_REQUIRED"` · `Error` to `"ERROR"` · `MigratedAccountItem` to `"MIGRATED_ACCOUNT_ITEM"` · `Admin` to `"ADMIN"` · `Fraud` to `"FRAUD"` | `transferAuthorizationDecisionRationaleCodeSchema` |
| `TransferAuthorizationGuaranteeDecision` | `Guaranteed` to `"GUARANTEED"` · `NotGuaranteed` to `"NOT_GUARANTEED"` | `transferAuthorizationGuaranteeDecisionSchema` |
| `TransferAuthorizationGuaranteeDecisionRationaleCode` | `ReturnBank` to `"RETURN_BANK"` · `ReturnCustomer` to `"RETURN_CUSTOMER"` · `GuaranteeLimitReached` to `"GUARANTEE_LIMIT_REACHED"` · `RiskEstimateUnavailable` to `"RISK_ESTIMATE_UNAVAILABLE"` · `RequiredParamMissing` to `"REQUIRED_PARAM_MISSING"` | `transferAuthorizationGuaranteeDecisionRationaleCodeSchema` |
| `TransferAuthorizationRiskLevel` | `HighRisk` to `"HIGH_RISK"` · `MediumHighRisk` to `"MEDIUM_HIGH_RISK"` · `MediumRisk` to `"MEDIUM_RISK"` · `MediumLowRisk` to `"MEDIUM_LOW_RISK"` · `LowRisk` to `"LOW_RISK"` | `transferAuthorizationRiskLevelSchema` |
| `TransferBalanceType` | `PrefundedRtpCredits` to `"prefunded_rtp_credits"` · `PrefundedAchCredits` to `"prefunded_ach_credits"` | `transferBalanceTypeSchema` |
| `TransferCreditFundsSource` | `Sweep` to `"sweep"` · `PrefundedRtpCredits` to `"prefunded_rtp_credits"` · `PrefundedAchCredits` to `"prefunded_ach_credits"` | `transferCreditFundsSourceSchema` |
| `TransferDiligenceStatus` | `NotSubmitted` to `"not_submitted"` · `Submitted` to `"submitted"` · `UnderReview` to `"under_review"` · `Approved` to `"approved"` · `Denied` to `"denied"` · `MoreInformationRequired` to `"more_information_required"` | `transferDiligenceStatusSchema` |
| `TransferEventListTransferType` | `Debit` to `"debit"` · `Credit` to `"credit"` | `transferEventListTransferTypeSchema` |
| `TransferEventType` | `Pending` to `"pending"` · `Cancelled` to `"cancelled"` · `Failed` to `"failed"` · `Posted` to `"posted"` · `Settled` to `"settled"` · `FundsAvailable` to `"funds_available"` · `Guaranteed` to `"guaranteed"` · `Returned` to `"returned"` · `GuaranteeReimbursed` to `"guarantee_reimbursed"` · `ClientReturnRecovered` to `"client_return_recovered"` · `PlaidReturnRecovered` to `"plaid_return_recovered"` · `Swept` to `"swept"` · `SweptSettled` to `"swept_settled"` · `ReturnSwept` to `"return_swept"` · `SweepPending` to `"sweep.pending"` · `SweepPosted` to `"sweep.posted"` · `SweepSettled` to `"sweep.settled"` · `SweepReturned` to `"sweep.returned"` · `SweepFailed` to `"sweep.failed"` · `SweepFundsAvailable` to `"sweep.funds_available"` · `RefundPending` to `"refund.pending"` · `RefundCancelled` to `"refund.cancelled"` · `RefundFailed` to `"refund.failed"` · `RefundPosted` to `"refund.posted"` · `RefundSettled` to `"refund.settled"` · `RefundReturned` to `"refund.returned"` · `RefundSwept` to `"refund.swept"` · `RefundReturnSwept` to `"refund.return_swept"` | `transferEventTypeSchema` |
| `TransferGuaranteeOutcome` | `FullInstant` to `"FULL_INSTANT"` · `PartialInstantOnly` to `"PARTIAL_INSTANT_ONLY"` · `PartialInstantWithObservationWindow` to `"PARTIAL_INSTANT_WITH_OBSERVATION_WINDOW"` · `NotGuaranteed` to `"NOT_GUARANTEED"` | `transferGuaranteeOutcomeSchema` |
| `TransferIntentAuthorizationDecision` | `Approved` to `"APPROVED"` · `Declined` to `"DECLINED"` | `transferIntentAuthorizationDecisionSchema` |
| `TransferIntentCreateMode` | `Payment` to `"PAYMENT"` · `Disbursement` to `"DISBURSEMENT"` | `transferIntentCreateModeSchema` |
| `TransferIntentCreateNetwork` | `Ach` to `"ach"` · `SameDayAch` to `"same-day-ach"` · `Rtp` to `"rtp"` | `transferIntentCreateNetworkSchema` |
| `TransferIntentStatus` | `Pending` to `"PENDING"` · `Succeeded` to `"SUCCEEDED"` · `Failed` to `"FAILED"` | `transferIntentStatusSchema` |
| `TransferLedgerSweepSimulateEventType` | `SweepPosted` to `"sweep.posted"` · `SweepSettled` to `"sweep.settled"` · `SweepReturned` to `"sweep.returned"` · `SweepFailed` to `"sweep.failed"` | `transferLedgerSweepSimulateEventTypeSchema` |
| `TransferNetwork` | `Ach` to `"ach"` · `SameDayAch` to `"same-day-ach"` · `Rtp` to `"rtp"` · `Wire` to `"wire"` · `Rfp` to `"rfp"` | `transferNetworkSchema` |
| `TransferRecurringNetwork` | `Ach` to `"ach"` · `SameDayAch` to `"same-day-ach"` · `Rtp` to `"rtp"` | `transferRecurringNetworkSchema` |
| `TransferRecurringStatus` | `Active` to `"active"` · `Cancelled` to `"cancelled"` · `Expired` to `"expired"` | `transferRecurringStatusSchema` |
| `TransferRefundStatus` | `Pending` to `"pending"` · `Posted` to `"posted"` · `Cancelled` to `"cancelled"` · `Failed` to `"failed"` · `Settled` to `"settled"` · `Returned` to `"returned"` | `transferRefundStatusSchema` |
| `TransferScheduleIntervalUnit` | `Week` to `"week"` · `Month` to `"month"` | `transferScheduleIntervalUnitSchema` |
| `TransferStatus` | `Pending` to `"pending"` · `Posted` to `"posted"` · `Settled` to `"settled"` · `FundsAvailable` to `"funds_available"` · `Cancelled` to `"cancelled"` · `Failed` to `"failed"` · `Returned` to `"returned"` | `transferStatusSchema` |
| `TransferSweepStatus` | `Unswept` to `"unswept"` · `Swept` to `"swept"` · `SweptSettled` to `"swept_settled"` · `ReturnSwept` to `"return_swept"` | `transferSweepStatusSchema` |
| `TransferType` | `Debit` to `"debit"` · `Credit` to `"credit"` | `transferTypeSchema` |
| `Type` | `Home` to `"home"` · `Work` to `"work"` · `Office` to `"office"` · `Mobile` to `"mobile"` · `Mobile1` to `"mobile1"` · `Other` to `"other"` | `typeSchema` |
| `Type1` | `Primary` to `"primary"` · `Secondary` to `"secondary"` · `Other` to `"other"` | `type1Schema` |
| `Type2` | `Cancelled` to `"cancelled"` · `ChargedOff` to `"charged off"` · `Claim` to `"claim"` · `Consolidated` to `"consolidated"` · `Deferment` to `"deferment"` · `Delinquent` to `"delinquent"` · `Discharged` to `"discharged"` · `Extension` to `"extension"` · `Forbearance` to `"forbearance"` · `InGrace` to `"in grace"` · `InMilitary` to `"in military"` · `InSchool` to `"in school"` · `NotFullyDisbursed` to `"not fully disbursed"` · `Other` to `"other"` · `PaidInFull` to `"paid in full"` · `Refunded` to `"refunded"` · `Repayment` to `"repayment"` · `Transferred` to `"transferred"` · `PendingIdr` to `"pending idr"` | `type2Schema` |
| `Type3` | `ExtendedGraduated` to `"extended graduated"` · `ExtendedStandard` to `"extended standard"` · `Graduated` to `"graduated"` · `IncomeContingentRepayment` to `"income-contingent repayment"` · `IncomeBasedRepayment` to `"income-based repayment"` · `IncomeSensitiveRepayment` to `"income-sensitive repayment"` · `InterestOnly` to `"interest only"` · `Other` to `"other"` · `PayAsYouEarn` to `"pay as you earn"` · `RevisedPayAsYouEarn` to `"revised pay as you earn"` · `Standard` to `"standard"` · `SavingOnAValuableEducation` to `"saving on a valuable education"` | `type3Schema` |
| `Type4` | `Payout` to `"PAYOUT"` · `Return` to `"RETURN"` · `Refund` to `"REFUND"` · `FundsSweep` to `"FUNDS_SWEEP"` | `type4Schema` |
| `Type5` | `BankTransfer` to `"BANK_TRANSFER"` · `Payout` to `"PAYOUT"` · `PisPayIn` to `"PIS_PAY_IN"` · `Refund` to `"REFUND"` · `FundsSweep` to `"FUNDS_SWEEP"` · `Return` to `"RETURN"` · `Recall` to `"RECALL"` · `AccountFunding` to `"ACCOUNT_FUNDING"` · `AutoRefund` to `"AUTO_REFUND"` | `type5Schema` |
| `UnofficialCurrencyCodeList` | `Ada` to `"ADA"` · `Bat` to `"BAT"` · `Bch` to `"BCH"` · `Bnb` to `"BNB"` · `Btc` to `"BTC"` · `Btg` to `"BTG"` · `Bsv` to `"BSV"` · `Cnh` to `"CNH"` · `Dash` to `"DASH"` · `Doge` to `"DOGE"` · `Etc` to `"ETC"` · `Eth` to `"ETH"` · `Gbx` to `"GBX"` · `Lsk` to `"LSK"` · `Neo` to `"NEO"` · `Omg` to `"OMG"` · `Qtum` to `"QTUM"` · `Usdt` to `"USDT"` · `Xlm` to `"XLM"` · `Xmr` to `"XMR"` · `Xrp` to `"XRP"` · `Zec` to `"ZEC"` · `Zrx` to `"ZRX"` | `unofficialCurrencyCodeListSchema` |
| `UpdateType` | `Background` to `"background"` · `UserPresentRequired` to `"user_present_required"` | `updateTypeSchema` |
| `UserBasedProducts` | `CraBaseReport` to `"cra_base_report"` · `CraIncomeInsights` to `"cra_income_insights"` · `CraPartnerInsights` to `"cra_partner_insights"` · `CraNetworkInsights` to `"cra_network_insights"` · `CraCashflowInsights` to `"cra_cashflow_insights"` · `CraMonitoring` to `"cra_monitoring"` · `CraLendScore` to `"cra_lend_score"` · `CraPlaidCreditScore` to `"cra_plaid_credit_score"` · `Investments` to `"investments"` · `Liabilities` to `"liabilities"` · `ProtectLinkedBank` to `"protect_linked_bank"` · `ProtectTransactions` to `"protect_transactions"` · `Transactions` to `"transactions"` | `userBasedProductsSchema` |
| `UserStatedIncomeSourceCategory` | `Other` to `"OTHER"` · `Salary` to `"SALARY"` · `Unemployment` to `"UNEMPLOYMENT"` · `Cash` to `"CASH"` · `GigEconomy` to `"GIG_ECONOMY"` · `Rental` to `"RENTAL"` · `ChildSupport` to `"CHILD_SUPPORT"` · `Military` to `"MILITARY"` · `Retirement` to `"RETIREMENT"` · `LongTermDisability` to `"LONG_TERM_DISABILITY"` · `BankInterest` to `"BANK_INTEREST"` | `userStatedIncomeSourceCategorySchema` |
| `UserStatedIncomeSourceFrequency` | `Unknown` to `"UNKNOWN"` · `Weekly` to `"WEEKLY"` · `Biweekly` to `"BIWEEKLY"` · `SemiMonthly` to `"SEMI_MONTHLY"` · `Monthly` to `"MONTHLY"` | `userStatedIncomeSourceFrequencySchema` |
| `UserStatedIncomeSourcePayType` | `Unknown` to `"UNKNOWN"` · `Gross` to `"GROSS"` · `Net` to `"NET"` | `userStatedIncomeSourcePayTypeSchema` |
| `VerificationInsightsAccountNumberFormat` | `Valid` to `"valid"` · `Invalid` to `"invalid"` · `Unknown` to `"unknown"` | `verificationInsightsAccountNumberFormatSchema` |
| `VerificationRefreshStatus` | `VerificationRefreshStatusUserPresenceRequired` to `"VERIFICATION_REFRESH_STATUS_USER_PRESENCE_REQUIRED"` · `VerificationRefreshSuccessful` to `"VERIFICATION_REFRESH_SUCCESSFUL"` · `VerificationRefreshNotFound` to `"VERIFICATION_REFRESH_NOT_FOUND"` | `verificationRefreshStatusSchema` |
| `VerificationStatus` | `Verified` to `"VERIFIED"` · `Unverified` to `"UNVERIFIED"` · `NeedsInfo` to `"NEEDS_INFO"` · `UnableToVerify` to `"UNABLE_TO_VERIFY"` · `Unknown` to `"UNKNOWN"` | `verificationStatusSchema` |
| `VerificationStatus1` | `AutomaticallyVerified` to `"automatically_verified"` · `VerificationExpired` to `"verification_expired"` | `verificationStatus1Schema` |
| `VerificationStatus3` | `VerificationStatusProcessingComplete` to `"VERIFICATION_STATUS_PROCESSING_COMPLETE"` · `VerificationStatusProcessingFailed` to `"VERIFICATION_STATUS_PROCESSING_FAILED"` · `VerificationStatusPendingApproval` to `"VERIFICATION_STATUS_PENDING_APPROVAL"` | `verificationStatus3Schema` |
| `VerificationStatus4` | `AutomaticallyVerified` to `"automatically_verified"` · `PendingAutomaticVerification` to `"pending_automatic_verification"` · `PendingManualVerification` to `"pending_manual_verification"` · `ManuallyVerified` to `"manually_verified"` · `VerificationExpired` to `"verification_expired"` · `VerificationFailed` to `"verification_failed"` · `DatabaseMatched` to `"database_matched"` | `verificationStatus4Schema` |
| `VerificationStatus5` | `AutomaticallyVerified` to `"automatically_verified"` · `PendingAutomaticVerification` to `"pending_automatic_verification"` · `PendingManualVerification` to `"pending_manual_verification"` · `Unsent` to `"unsent"` · `ManuallyVerified` to `"manually_verified"` · `VerificationExpired` to `"verification_expired"` · `VerificationFailed` to `"verification_failed"` · `DatabaseMatched` to `"database_matched"` · `DatabaseInsightsPass` to `"database_insights_pass"` · `DatabaseInsightsPassWithCaution` to `"database_insights_pass_with_caution"` · `DatabaseInsightsFail` to `"database_insights_fail"` | `verificationStatus5Schema` |
| `VerifySmsDetailsStatus` | `Success` to `"success"` · `Failed` to `"failed"` | `verifySmsDetailsStatusSchema` |
| `WalletPaymentScheme` | `FasterPayments` to `"FASTER_PAYMENTS"` · `SepaCreditTransfer` to `"SEPA_CREDIT_TRANSFER"` · `SepaCreditTransferInstant` to `"SEPA_CREDIT_TRANSFER_INSTANT"` | `walletPaymentSchemeSchema` |
| `WalletStatus` | `Unknown` to `"UNKNOWN"` · `Active` to `"ACTIVE"` · `Closed` to `"CLOSED"` | `walletStatusSchema` |
| `WalletTransactionFailureReason` | `ExternalSystem` to `"EXTERNAL_SYSTEM"` · `Expired` to `"EXPIRED"` · `Cancelled` to `"CANCELLED"` · `Invalid` to `"INVALID"` · `AccountInvalid` to `"ACCOUNT_INVALID"` · `AuthenticationFailed` to `"AUTHENTICATION_FAILED"` · `Unknown` to `"UNKNOWN"` | `walletTransactionFailureReasonSchema` |
| `WalletTransactionPayeeVerificationStatus` | `FullMatch` to `"FULL_MATCH"` · `PartialMatch` to `"PARTIAL_MATCH"` · `NoMatch` to `"NO_MATCH"` · `Error` to `"ERROR"` · `CheckNotPossible` to `"CHECK_NOT_POSSIBLE"` | `walletTransactionPayeeVerificationStatusSchema` |
| `WalletTransactionStatus` | `Authorising` to `"AUTHORISING"` · `Initiated` to `"INITIATED"` · `Executed` to `"EXECUTED"` · `Settled` to `"SETTLED"` · `Blocked` to `"BLOCKED"` · `Failed` to `"FAILED"` | `walletTransactionStatusSchema` |
| `WarningCode` | `OwnersUnavailable` to `"OWNERS_UNAVAILABLE"` · `InvestmentsUnavailable` to `"INVESTMENTS_UNAVAILABLE"` · `TransactionsUnavailable` to `"TRANSACTIONS_UNAVAILABLE"` · `BankIncomeInsightsInsufficientData` to `"BANK_INCOME_INSIGHTS_INSUFFICIENT_DATA"` · `BankIncomeInsightsIncomplete` to `"BANK_INCOME_INSIGHTS_INCOMPLETE"` · `BankIncomeInsightsStatusInProgress` to `"BANK_INCOME_INSIGHTS_STATUS_IN_PROGRESS"` · `BankIncomeInsightsInternalError` to `"BANK_INCOME_INSIGHTS_INTERNAL_ERROR"` · `BankIncomeInsightsMismatchedDaysRequested` to `"BANK_INCOME_INSIGHTS_MISMATCHED_DAYS_REQUESTED"` | `warningCodeSchema` |
| `WatchlistScreeningDocumentType` | `BirthCertificate` to `"birth_certificate"` · `DriversLicense` to `"drivers_license"` · `ImmigrationNumber` to `"immigration_number"` · `MilitaryId` to `"military_id"` · `Other` to `"other"` · `Passport` to `"passport"` · `PersonalIdentification` to `"personal_identification"` · `RationCard` to `"ration_card"` · `Ssn` to `"ssn"` · `StudentId` to `"student_id"` · `TaxId` to `"tax_id"` · `TravelDocument` to `"travel_document"` · `VoterId` to `"voter_id"` | `watchlistScreeningDocumentTypeSchema` |
| `WatchlistScreeningEntityUpdateRequestResettableField` | `Assignee` to `"assignee"` | `watchlistScreeningEntityUpdateRequestResettableFieldSchema` |
| `WatchlistScreeningHitStatus` | `Confirmed` to `"confirmed"` · `PendingReview` to `"pending_review"` · `Dismissed` to `"dismissed"` | `watchlistScreeningHitStatusSchema` |
| `WatchlistScreeningIndividualUpdateRequestResettableField` | `Assignee` to `"assignee"` | `watchlistScreeningIndividualUpdateRequestResettableFieldSchema` |
| `WatchlistScreeningStatus` | `Rejected` to `"rejected"` · `PendingReview` to `"pending_review"` · `Cleared` to `"cleared"` | `watchlistScreeningStatusSchema` |
| `WeakAliasDetermination` | `None` to `"none"` · `Source` to `"source"` · `Plaid` to `"plaid"` | `weakAliasDeterminationSchema` |
| `WebhookCode` | `DefaultUpdate` to `"DEFAULT_UPDATE"` · `NewAccountsAvailable` to `"NEW_ACCOUNTS_AVAILABLE"` · `SmsMicrodepositsVerification` to `"SMS_MICRODEPOSITS_VERIFICATION"` · `AuthorizationGranted` to `"AUTHORIZATION_GRANTED"` · `UserPermissionRevoked` to `"USER_PERMISSION_REVOKED"` · `UserAccountRevoked` to `"USER_ACCOUNT_REVOKED"` · `PendingDisconnect` to `"PENDING_DISCONNECT"` · `RecurringTransactionsUpdate` to `"RECURRING_TRANSACTIONS_UPDATE"` · `LoginRepaired` to `"LOGIN_REPAIRED"` · `SyncUpdatesAvailable` to `"SYNC_UPDATES_AVAILABLE"` · `ProductReady` to `"PRODUCT_READY"` · `Error` to `"ERROR"` | `webhookCodeSchema` |
| `WebhookEnvironmentValues` | `Sandbox` to `"sandbox"` · `Production` to `"production"` | `webhookEnvironmentValuesSchema` |
| `WebhookType` | `Auth` to `"AUTH"` · `Holdings` to `"HOLDINGS"` · `InvestmentsTransactions` to `"INVESTMENTS_TRANSACTIONS"` · `Item` to `"ITEM"` · `Liabilities` to `"LIABILITIES"` · `Transactions` to `"TRANSACTIONS"` · `Assets` to `"ASSETS"` | `webhookTypeSchema` |
| `YieldRateType` | `Coupon` to `"coupon"` · `CouponEquivalent` to `"coupon_equivalent"` · `Discount` to `"discount"` · `Yield` to `"yield"` | `yieldRateTypeSchema` |
| `Purpose` | `DueDiligence` to `"DUE_DILIGENCE"` | `purposeSchema` |
| `TransactionCode` | `Adjustment` to `"adjustment"` · `Atm` to `"atm"` · `BankCharge` to `"bank charge"` · `BillPayment` to `"bill payment"` · `Cash` to `"cash"` · `CashAdvance` to `"cash advance"` · `Cashback` to `"cashback"` · `Cheque` to `"cheque"` · `DirectDebit` to `"direct debit"` · `Interest` to `"interest"` · `LateFee` to `"late fee"` · `MembershipFee` to `"membership fee"` · `Payment` to `"payment"` · `Purchase` to `"purchase"` · `Refund` to `"refund"` · `ReturnedItemFee` to `"returned item fee"` · `StandingOrder` to `"standing order"` · `Transfer` to `"transfer"` | `transactionCodeSchema` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `AamvaAnalysis` | `isVerified` | `is_verified` |
| `AamvaAnalysis` | `idNumber` | `id_number` |
| `AamvaAnalysis` | `idIssueDate` | `id_issue_date` |
| `AamvaAnalysis` | `idExpirationDate` | `id_expiration_date` |
| `AamvaAnalysis` | `postalCode` | `postal_code` |
| `AamvaAnalysis` | `dateOfBirth` | `date_of_birth` |
| `AamvaAnalysis` | `eyeColor` | `eye_color` |
| `AamvaAnalysis` | `firstName` | `first_name` |
| `AamvaAnalysis` | `middleName` | `middle_name` |
| `AamvaAnalysis` | `lastName` | `last_name` |
| `Apr` | `aprPercentage` | `apr_percentage` |
| `Apr` | `aprType` | `apr_type` |
| `Apr` | `balanceSubjectToApr` | `balance_subject_to_apr` |
| `Apr` | `interestChargeAmount` | `interest_charge_amount` |
| `Account` | `accountId` | `account_id` |
| `Account` | `officialName` | `official_name` |
| `Account` | `verificationStatus` | `verification_status` |
| `Account` | `verificationName` | `verification_name` |
| `Account` | `verificationInsights` | `verification_insights` |
| `Account` | `persistentAccountId` | `persistent_account_id` |
| `Account` | `holderCategory` | `holder_category` |
| `AccountAccess` | `uniqueId` | `unique_id` |
| `AccountAccess` | `accountProductAccess` | `account_product_access` |
| `AccountAssets` | `accountId` | `account_id` |
| `AccountAssets` | `officialName` | `official_name` |
| `AccountAssets` | `verificationStatus` | `verification_status` |
| `AccountAssets` | `persistentAccountId` | `persistent_account_id` |
| `AccountAssets` | `daysAvailable` | `days_available` |
| `AccountAssets` | `ownershipType` | `ownership_type` |
| `AccountAssets` | `historicalBalances` | `historical_balances` |
| `AccountAssets` | `accountInsights` | `account_insights` |
| `AccountBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `AccountBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `AccountBalance` | `lastUpdatedDatetime` | `last_updated_datetime` |
| `AccountBalance1` | `isoCurrencyCode` | `iso_currency_code` |
| `AccountBalance1` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `AccountBalance1` | `lastUpdatedDatetime` | `last_updated_datetime` |
| `AccountBalance1` | `marginLoanAmount` | `margin_loan_amount` |
| `AccountIdentity` | `accountId` | `account_id` |
| `AccountIdentity` | `officialName` | `official_name` |
| `AccountIdentity` | `verificationStatus` | `verification_status` |
| `AccountIdentity` | `verificationName` | `verification_name` |
| `AccountIdentity` | `verificationInsights` | `verification_insights` |
| `AccountIdentity` | `persistentAccountId` | `persistent_account_id` |
| `AccountIdentity` | `holderCategory` | `holder_category` |
| `AccountIdentityDocumentUpload` | `accountId` | `account_id` |
| `AccountIdentityDocumentUpload` | `officialName` | `official_name` |
| `AccountIdentityDocumentUpload` | `verificationStatus` | `verification_status` |
| `AccountIdentityDocumentUpload` | `verificationName` | `verification_name` |
| `AccountIdentityDocumentUpload` | `verificationInsights` | `verification_insights` |
| `AccountIdentityDocumentUpload` | `persistentAccountId` | `persistent_account_id` |
| `AccountIdentityDocumentUpload` | `holderCategory` | `holder_category` |
| `AccountIdentityMatchScore` | `accountId` | `account_id` |
| `AccountIdentityMatchScore` | `officialName` | `official_name` |
| `AccountIdentityMatchScore` | `verificationStatus` | `verification_status` |
| `AccountIdentityMatchScore` | `verificationName` | `verification_name` |
| `AccountIdentityMatchScore` | `verificationInsights` | `verification_insights` |
| `AccountIdentityMatchScore` | `persistentAccountId` | `persistent_account_id` |
| `AccountIdentityMatchScore` | `holderCategory` | `holder_category` |
| `AccountIdentityMatchScore` | `legalName` | `legal_name` |
| `AccountIdentityMatchScore` | `phoneNumber` | `phone_number` |
| `AccountIdentityMatchScore` | `emailAddress` | `email_address` |
| `AccountNullable` | `accountId` | `account_id` |
| `AccountNullable` | `officialName` | `official_name` |
| `AccountNullable` | `verificationStatus` | `verification_status` |
| `AccountNullable` | `verificationName` | `verification_name` |
| `AccountNullable` | `verificationInsights` | `verification_insights` |
| `AccountNullable` | `persistentAccountId` | `persistent_account_id` |
| `AccountNullable` | `holderCategory` | `holder_category` |
| `AccountProductAccess` | `accountData` | `account_data` |
| `AccountProductAccess` | `taxDocuments` | `tax_documents` |
| `AccountProductAccessNullable` | `accountData` | `account_data` |
| `AccountProductAccessNullable` | `taxDocuments` | `tax_documents` |
| `AccountVerificationInsightsPreviousReturns` | `hasPreviousAdministrativeReturn` | `has_previous_administrative_return` |
| `AccountsBalanceGetRequest` | `accessToken` | `access_token` |
| `AccountsBalanceGetRequest` | `clientId` | `client_id` |
| `AccountsBalanceGetRequestOptions` | `accountIds` | `account_ids` |
| `AccountsBalanceGetRequestOptions` | `minLastUpdatedDatetime` | `min_last_updated_datetime` |
| `AccountsGetRequest` | `clientId` | `client_id` |
| `AccountsGetRequest` | `accessToken` | `access_token` |
| `AccountsGetRequestOptions` | `accountIds` | `account_ids` |
| `AccountsGetResponse` | `requestId` | `request_id` |
| `Activity` | `initiatedDate` | `initiated_date` |
| `Activity` | `targetApplicationId` | `target_application_id` |
| `Address1` | `postalCode` | `postal_code` |
| `AddressData` | `postalCode` | `postal_code` |
| `AddressDataNotRequired` | `postalCode` | `postal_code` |
| `AddressDataNullable` | `postalCode` | `postal_code` |
| `AddressDataNullableNoRequiredFields` | `postalCode` | `postal_code` |
| `AddressMatchScore` | `isPostalCodeMatch` | `is_postal_code_match` |
| `AmountWithCurrency` | `isoCurrencyCode` | `iso_currency_code` |
| `AmountWithCurrency` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `AmountWithCurrencyWithMonthlyAverage` | `isoCurrencyCode` | `iso_currency_code` |
| `AmountWithCurrencyWithMonthlyAverage` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `Application` | `applicationId` | `application_id` |
| `Application` | `displayName` | `display_name` |
| `Application` | `joinDate` | `join_date` |
| `Application` | `logoUrl` | `logo_url` |
| `Application` | `applicationUrl` | `application_url` |
| `Application` | `reasonForAccess` | `reason_for_access` |
| `Application` | `useCase` | `use_case` |
| `Application` | `companyLegalName` | `company_legal_name` |
| `Application` | `postalCode` | `postal_code` |
| `Application` | `countryCode` | `country_code` |
| `ApplicationGetRequest` | `clientId` | `client_id` |
| `ApplicationGetRequest` | `applicationId` | `application_id` |
| `ApplicationGetResponse` | `requestId` | `request_id` |
| `Asset` | `assetDetail` | `ASSET_DETAIL` |
| `Asset` | `assetOwners` | `ASSET_OWNERS` |
| `Asset` | `assetHolder` | `ASSET_HOLDER` |
| `Asset` | `assetTransactions` | `ASSET_TRANSACTIONS` |
| `Asset` | `validationSources` | `VALIDATION_SOURCES` |
| `AssetDetail` | `assetUniqueIdentifier` | `AssetUniqueIdentifier` |
| `AssetDetail` | `assetAccountIdentifier` | `AssetAccountIdentifier` |
| `AssetDetail` | `assetAsOfDate` | `AssetAsOfDate` |
| `AssetDetail` | `assetDescription` | `AssetDescription` |
| `AssetDetail` | `assetAvailableBalanceAmount` | `AssetAvailableBalanceAmount` |
| `AssetDetail` | `assetCurrentBalanceAmount` | `AssetCurrentBalanceAmount` |
| `AssetDetail` | `assetHoldingBalanceAmount` | `AssetHoldingBalanceAmount` |
| `AssetDetail` | `assetHoldingBalanceNetMarginAmount` | `AssetHoldingBalanceNetMarginAmount` |
| `AssetDetail` | `assetBondsBalanceAmount` | `AssetBondsBalanceAmount` |
| `AssetDetail` | `assetStocksBalanceAmount` | `AssetStocksBalanceAmount` |
| `AssetDetail` | `assetCryptoBalanceAmount` | `AssetCryptoBalanceAmount` |
| `AssetDetail` | `assetOtherBalanceAmount` | `AssetOtherBalanceAmount` |
| `AssetDetail` | `assetMarginAmountBalance` | `AssetMarginAmountBalance` |
| `AssetDetail` | `assetAvailableCashBalanceAmount` | `AssetAvailableCashBalanceAmount` |
| `AssetDetail` | `assetCashBalanceAmount` | `AssetCashBalanceAmount` |
| `AssetDetail` | `assetType` | `AssetType` |
| `AssetDetail` | `assetTypeAdditionalDescription` | `AssetTypeAdditionalDescription` |
| `AssetDetail` | `assetDaysRequestedCount` | `AssetDaysRequestedCount` |
| `AssetDetail` | `assetOwnershipType` | `AssetOwnershipType` |
| `AssetDetail` | `assetRetirementIndicator` | `AssetRetirementIndicator` |
| `AssetDetail` | `assetEmployerSponsoredIndicator` | `AssetEmployerSponsoredIndicator` |
| `AssetHolder` | `name` | `NAME` |
| `AssetHolderName` | `fullName` | `FullName` |
| `AssetHolding` | `assetHoldingId` | `AssetHoldingID` |
| `AssetHolding` | `currency` | `Currency` |
| `AssetHolding` | `assetHoldingDescription` | `AssetHoldingDescription` |
| `AssetHolding` | `assetHoldingSymbol` | `AssetHoldingSymbol` |
| `AssetHolding` | `assetHoldingSecurityName` | `AssetHoldingSecurityName` |
| `AssetHolding` | `assetHoldingUnits` | `AssetHoldingUnits` |
| `AssetHolding` | `assetHoldingMarketValueAmount` | `AssetHoldingMarketValueAmount` |
| `AssetHolding` | `assetHoldingCurrentPriceAmount` | `AssetHoldingCurrentPriceAmount` |
| `AssetHolding` | `assetHoldingType` | `AssetHoldingType` |
| `AssetHolding` | `assetHoldingRestrictedIndicator` | `AssetHoldingRestrictedIndicator` |
| `AssetHolding` | `assetHoldingVestedAmount` | `AssetHoldingVestedAmount` |
| `AssetHoldings` | `assetHolding` | `ASSET_HOLDING` |
| `AssetOwner` | `assetOwnerText` | `AssetOwnerText` |
| `AssetOwners` | `assetOwner` | `ASSET_OWNER` |
| `AssetReport` | `assetReportId` | `asset_report_id` |
| `AssetReport` | `clientReportId` | `client_report_id` |
| `AssetReport` | `dateGenerated` | `date_generated` |
| `AssetReport` | `daysRequested` | `days_requested` |
| `AssetReportAccountBalance` | `marginLoanAmount` | `margin_loan_amount` |
| `AssetReportAccountBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `AssetReportAccountBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `AssetReportAccountBalance` | `lastUpdatedDatetime` | `last_updated_datetime` |
| `AssetReportAuditCopyCreateRequest` | `clientId` | `client_id` |
| `AssetReportAuditCopyCreateRequest` | `assetReportToken` | `asset_report_token` |
| `AssetReportAuditCopyCreateRequest` | `auditorId` | `auditor_id` |
| `AssetReportAuditCopyCreateResponse` | `auditCopyToken` | `audit_copy_token` |
| `AssetReportAuditCopyCreateResponse` | `requestId` | `request_id` |
| `AssetReportAuditCopyGetRequest` | `clientId` | `client_id` |
| `AssetReportAuditCopyGetRequest` | `auditCopyToken` | `audit_copy_token` |
| `AssetReportAuditCopyPdfGetRequest` | `clientId` | `client_id` |
| `AssetReportAuditCopyPdfGetRequest` | `auditCopyToken` | `audit_copy_token` |
| `AssetReportAuditCopyRemoveRequest` | `clientId` | `client_id` |
| `AssetReportAuditCopyRemoveRequest` | `auditCopyToken` | `audit_copy_token` |
| `AssetReportAuditCopyRemoveResponse` | `requestId` | `request_id` |
| `AssetReportCreateRequest` | `clientId` | `client_id` |
| `AssetReportCreateRequest` | `accessTokens` | `access_tokens` |
| `AssetReportCreateRequest` | `daysRequested` | `days_requested` |
| `AssetReportCreateRequestOptions` | `clientReportId` | `client_report_id` |
| `AssetReportCreateRequestOptions` | `includeFastReport` | `include_fast_report` |
| `AssetReportCreateRequestOptions` | `addOns` | `add_ons` |
| `AssetReportCreateRequestOptions` | `requireAllItems` | `require_all_items` |
| `AssetReportCreateResponse` | `assetReportToken` | `asset_report_token` |
| `AssetReportCreateResponse` | `assetReportId` | `asset_report_id` |
| `AssetReportCreateResponse` | `requestId` | `request_id` |
| `AssetReportFilterRequest` | `clientId` | `client_id` |
| `AssetReportFilterRequest` | `assetReportToken` | `asset_report_token` |
| `AssetReportFilterRequest` | `accountIdsToExclude` | `account_ids_to_exclude` |
| `AssetReportFilterResponse` | `assetReportToken` | `asset_report_token` |
| `AssetReportFilterResponse` | `assetReportId` | `asset_report_id` |
| `AssetReportFilterResponse` | `requestId` | `request_id` |
| `AssetReportFreddie` | `loans` | `LOANS` |
| `AssetReportFreddie` | `parties` | `PARTIES` |
| `AssetReportFreddie` | `services` | `SERVICES` |
| `AssetReportFreddieGetRequest` | `auditCopyToken` | `audit_copy_token` |
| `AssetReportFreddieGetRequest` | `clientId` | `client_id` |
| `AssetReportFreddieGetResponse` | `deal` | `DEAL` |
| `AssetReportFreddieGetResponse` | `requestId` | `request_id` |
| `AssetReportFreddieGetResponse` | `schemaVersion` | `SchemaVersion` |
| `AssetReportGetRequest` | `clientId` | `client_id` |
| `AssetReportGetRequest` | `assetReportToken` | `asset_report_token` |
| `AssetReportGetRequest` | `userToken` | `user_token` |
| `AssetReportGetRequest` | `includeInsights` | `include_insights` |
| `AssetReportGetRequest` | `fastReport` | `fast_report` |
| `AssetReportGetRequestOptions` | `daysToInclude` | `days_to_include` |
| `AssetReportGetResponse` | `requestId` | `request_id` |
| `AssetReportInvestmentHolding` | `accountId` | `account_id` |
| `AssetReportInvestmentHolding` | `securityId` | `security_id` |
| `AssetReportInvestmentHolding` | `tickerSymbol` | `ticker_symbol` |
| `AssetReportInvestmentHolding` | `institutionPrice` | `institution_price` |
| `AssetReportInvestmentHolding` | `institutionPriceAsOf` | `institution_price_as_of` |
| `AssetReportInvestmentHolding` | `institutionValue` | `institution_value` |
| `AssetReportInvestmentHolding` | `costBasis` | `cost_basis` |
| `AssetReportInvestmentHolding` | `isoCurrencyCode` | `iso_currency_code` |
| `AssetReportInvestmentHolding` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `AssetReportInvestmentSecurity` | `securityId` | `security_id` |
| `AssetReportInvestmentSecurity` | `tickerSymbol` | `ticker_symbol` |
| `AssetReportInvestmentTransaction` | `investmentTransactionId` | `investment_transaction_id` |
| `AssetReportInvestmentTransaction` | `accountId` | `account_id` |
| `AssetReportInvestmentTransaction` | `securityId` | `security_id` |
| `AssetReportInvestmentTransaction` | `vestedQuantity` | `vested_quantity` |
| `AssetReportInvestmentTransaction` | `vestedValue` | `vested_value` |
| `AssetReportInvestmentTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `AssetReportInvestmentTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `AssetReportItem` | `itemId` | `item_id` |
| `AssetReportItem` | `institutionName` | `institution_name` |
| `AssetReportItem` | `institutionId` | `institution_id` |
| `AssetReportItem` | `dateLastUpdated` | `date_last_updated` |
| `AssetReportPdfGetRequest` | `clientId` | `client_id` |
| `AssetReportPdfGetRequest` | `assetReportToken` | `asset_report_token` |
| `AssetReportPdfGetRequestOptions` | `daysToInclude` | `days_to_include` |
| `AssetReportRefreshRequest` | `clientId` | `client_id` |
| `AssetReportRefreshRequest` | `assetReportToken` | `asset_report_token` |
| `AssetReportRefreshRequest` | `daysRequested` | `days_requested` |
| `AssetReportRefreshRequestOptions` | `clientReportId` | `client_report_id` |
| `AssetReportRefreshResponse` | `assetReportId` | `asset_report_id` |
| `AssetReportRefreshResponse` | `assetReportToken` | `asset_report_token` |
| `AssetReportRefreshResponse` | `requestId` | `request_id` |
| `AssetReportRemoveRequest` | `clientId` | `client_id` |
| `AssetReportRemoveRequest` | `assetReportToken` | `asset_report_token` |
| `AssetReportRemoveResponse` | `requestId` | `request_id` |
| `AssetReportTransaction` | `accountId` | `account_id` |
| `AssetReportTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `AssetReportTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `AssetReportTransaction` | `originalDescription` | `original_description` |
| `AssetReportTransaction` | `categoryId` | `category_id` |
| `AssetReportTransaction` | `creditCategory` | `credit_category` |
| `AssetReportTransaction` | `checkNumber` | `check_number` |
| `AssetReportTransaction` | `dateTransacted` | `date_transacted` |
| `AssetReportTransaction` | `merchantName` | `merchant_name` |
| `AssetReportTransaction` | `paymentMeta` | `payment_meta` |
| `AssetReportTransaction` | `pendingTransactionId` | `pending_transaction_id` |
| `AssetReportTransaction` | `accountOwner` | `account_owner` |
| `AssetReportTransaction` | `transactionId` | `transaction_id` |
| `AssetReportTransaction` | `transactionType` | `transaction_type` |
| `AssetReportTransaction` | `incomeSourceId` | `income_source_id` |
| `AssetReportUser` | `clientUserId` | `client_user_id` |
| `AssetReportUser` | `firstName` | `first_name` |
| `AssetReportUser` | `middleName` | `middle_name` |
| `AssetReportUser` | `lastName` | `last_name` |
| `AssetReportUser` | `phoneNumber` | `phone_number` |
| `AssetTransaction` | `assetTransactionDetail` | `ASSET_TRANSACTION_DETAIL` |
| `AssetTransaction` | `assetTransactionDescripton` | `ASSET_TRANSACTION_DESCRIPTON` |
| `AssetTransactionDescription` | `assetTransactionDescription` | `AssetTransactionDescription` |
| `AssetTransactionDetail` | `assetTransactionUniqueIdentifier` | `AssetTransactionUniqueIdentifier` |
| `AssetTransactionDetail` | `assetTransactionAmount` | `AssetTransactionAmount` |
| `AssetTransactionDetail` | `assetTransactionDate` | `AssetTransactionDate` |
| `AssetTransactionDetail` | `assetTransactionPostDate` | `AssetTransactionPostDate` |
| `AssetTransactionDetail` | `assetTransactionType` | `AssetTransactionType` |
| `AssetTransactionDetail` | `assetInvestmentTransactionType` | `AssetInvestmentTransactionType` |
| `AssetTransactionDetail` | `assetTransactionPaidByName` | `AssetTransactionPaidByName` |
| `AssetTransactionDetail` | `assetTransactionPaidToName` | `AssetTransactionPaidToName` |
| `AssetTransactionDetail` | `assetTransactionTypeAdditionalDescription` | `AssetTransactionTypeAdditionalDescription` |
| `AssetTransactionDetail` | `assetInvestmentTransactionTypeDescription` | `AssetInvestmentTransactionTypeDescription` |
| `AssetTransactionDetail` | `assetTransactionCategoryType` | `AssetTransactionCategoryType` |
| `AssetTransactionDetail` | `financialInstitutionTransactionIdentifier` | `FinancialInstitutionTransactionIdentifier` |
| `AssetTransactions` | `assetTransaction` | `ASSET_TRANSACTION` |
| `Assets` | `asset` | `ASSET` |
| `AssetsErrorWebhook` | `webhookType` | `webhook_type` |
| `AssetsErrorWebhook` | `webhookCode` | `webhook_code` |
| `AssetsErrorWebhook` | `assetReportId` | `asset_report_id` |
| `AssetsErrorWebhook` | `userId` | `user_id` |
| `AssetsProductReadyWebhook` | `webhookType` | `webhook_type` |
| `AssetsProductReadyWebhook` | `webhookCode` | `webhook_code` |
| `AssetsProductReadyWebhook` | `assetReportId` | `asset_report_id` |
| `AssetsProductReadyWebhook` | `userId` | `user_id` |
| `AssetsProductReadyWebhook` | `reportType` | `report_type` |
| `AuthDefaultUpdateWebhook` | `webhookType` | `webhook_type` |
| `AuthDefaultUpdateWebhook` | `webhookCode` | `webhook_code` |
| `AuthDefaultUpdateWebhook` | `itemId` | `item_id` |
| `AuthDefaultUpdateWebhook` | `accountIdsWithNewAuth` | `account_ids_with_new_auth` |
| `AuthDefaultUpdateWebhook` | `accountIdsWithUpdatedAuth` | `account_ids_with_updated_auth` |
| `AuthGetRequest` | `clientId` | `client_id` |
| `AuthGetRequest` | `accessToken` | `access_token` |
| `AuthGetRequestOptions` | `accountIds` | `account_ids` |
| `AuthGetResponse` | `requestId` | `request_id` |
| `AuthMetadata` | `supportedMethods` | `supported_methods` |
| `AuthSupportedMethods` | `instantAuth` | `instant_auth` |
| `AuthSupportedMethods` | `instantMatch` | `instant_match` |
| `AuthSupportedMethods` | `automatedMicroDeposits` | `automated_micro_deposits` |
| `AuthSupportedMethods` | `instantMicroDeposits` | `instant_micro_deposits` |
| `AuthVerifyRequest` | `clientId` | `client_id` |
| `AuthVerifyRequest` | `legalName` | `legal_name` |
| `AuthVerifyResponse` | `requestId` | `request_id` |
| `AuthVerifyResponse` | `itemId` | `item_id` |
| `AuthVerifyResponse` | `verificationStatus` | `verification_status` |
| `AuthVerifyResponse` | `verificationInsights` | `verification_insights` |
| `AuthorizationGuaranteeScheduleItem` | `observationWindowBusinessDays` | `observation_window_business_days` |
| `AutomaticallyVerifiedWebhook` | `webhookType` | `webhook_type` |
| `AutomaticallyVerifiedWebhook` | `webhookCode` | `webhook_code` |
| `AutomaticallyVerifiedWebhook` | `accountId` | `account_id` |
| `AutomaticallyVerifiedWebhook` | `itemId` | `item_id` |
| `BankIncomeCompleteWebhook` | `webhookType` | `webhook_type` |
| `BankIncomeCompleteWebhook` | `webhookCode` | `webhook_code` |
| `BankIncomeCompleteWebhook` | `userId` | `user_id` |
| `BankIncomeRefreshCompleteWebhook` | `webhookType` | `webhook_type` |
| `BankIncomeRefreshCompleteWebhook` | `webhookCode` | `webhook_code` |
| `BankIncomeRefreshCompleteWebhook` | `userId` | `user_id` |
| `BankIncomeRefreshUpdateWebhook` | `webhookType` | `webhook_type` |
| `BankIncomeRefreshUpdateWebhook` | `webhookCode` | `webhook_code` |
| `BankIncomeRefreshUpdateWebhook` | `userId` | `user_id` |
| `BankInitiatedReturnRisk` | `riskTier` | `risk_tier` |
| `BankPenaltiesIndicators` | `isoCurrencyCode` | `iso_currency_code` |
| `BankPenaltiesIndicators` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `BankPenaltiesIndicators` | `monthlyAverage` | `monthly_average` |
| `BankPenaltiesIndicators` | `categoryDetails` | `category_details` |
| `BankPenaltiesIndicators` | `transactionsCount` | `transactions_count` |
| `BankPenaltiesIndicators` | `monthlySummaries` | `monthly_summaries` |
| `BankPenaltiesIndicators` | `daysSinceLastOccurrence` | `days_since_last_occurrence` |
| `BankPenaltiesIndicators` | `percentageOfIncome` | `percentage_of_income` |
| `BankTransfer` | `achClass` | `ach_class` |
| `BankTransfer` | `accountId` | `account_id` |
| `BankTransfer` | `isoCurrencyCode` | `iso_currency_code` |
| `BankTransfer` | `failureReason` | `failure_reason` |
| `BankTransfer` | `customTag` | `custom_tag` |
| `BankTransfer` | `originationAccountId` | `origination_account_id` |
| `BankTransferBalanceGetRequest` | `clientId` | `client_id` |
| `BankTransferBalanceGetRequest` | `originationAccountId` | `origination_account_id` |
| `BankTransferBalanceGetResponse` | `originationAccountId` | `origination_account_id` |
| `BankTransferBalanceGetResponse` | `requestId` | `request_id` |
| `BankTransferCancelRequest` | `clientId` | `client_id` |
| `BankTransferCancelRequest` | `bankTransferId` | `bank_transfer_id` |
| `BankTransferCancelResponse` | `requestId` | `request_id` |
| `BankTransferCreateRequest` | `clientId` | `client_id` |
| `BankTransferCreateRequest` | `idempotencyKey` | `idempotency_key` |
| `BankTransferCreateRequest` | `accessToken` | `access_token` |
| `BankTransferCreateRequest` | `accountId` | `account_id` |
| `BankTransferCreateRequest` | `isoCurrencyCode` | `iso_currency_code` |
| `BankTransferCreateRequest` | `achClass` | `ach_class` |
| `BankTransferCreateRequest` | `customTag` | `custom_tag` |
| `BankTransferCreateRequest` | `originationAccountId` | `origination_account_id` |
| `BankTransferCreateResponse` | `bankTransfer` | `bank_transfer` |
| `BankTransferCreateResponse` | `requestId` | `request_id` |
| `BankTransferEvent` | `eventId` | `event_id` |
| `BankTransferEvent` | `eventType` | `event_type` |
| `BankTransferEvent` | `accountId` | `account_id` |
| `BankTransferEvent` | `bankTransferId` | `bank_transfer_id` |
| `BankTransferEvent` | `originationAccountId` | `origination_account_id` |
| `BankTransferEvent` | `bankTransferType` | `bank_transfer_type` |
| `BankTransferEvent` | `bankTransferAmount` | `bank_transfer_amount` |
| `BankTransferEvent` | `bankTransferIsoCurrencyCode` | `bank_transfer_iso_currency_code` |
| `BankTransferEvent` | `failureReason` | `failure_reason` |
| `BankTransferEvent` | `receiverDetails` | `receiver_details` |
| `BankTransferEventListRequest` | `clientId` | `client_id` |
| `BankTransferEventListRequest` | `startDate` | `start_date` |
| `BankTransferEventListRequest` | `endDate` | `end_date` |
| `BankTransferEventListRequest` | `bankTransferId` | `bank_transfer_id` |
| `BankTransferEventListRequest` | `accountId` | `account_id` |
| `BankTransferEventListRequest` | `bankTransferType` | `bank_transfer_type` |
| `BankTransferEventListRequest` | `eventTypes` | `event_types` |
| `BankTransferEventListRequest` | `originationAccountId` | `origination_account_id` |
| `BankTransferEventListResponse` | `bankTransferEvents` | `bank_transfer_events` |
| `BankTransferEventListResponse` | `requestId` | `request_id` |
| `BankTransferEventSyncRequest` | `clientId` | `client_id` |
| `BankTransferEventSyncRequest` | `afterId` | `after_id` |
| `BankTransferEventSyncResponse` | `bankTransferEvents` | `bank_transfer_events` |
| `BankTransferEventSyncResponse` | `requestId` | `request_id` |
| `BankTransferFailure` | `achReturnCode` | `ach_return_code` |
| `BankTransferGetRequest` | `clientId` | `client_id` |
| `BankTransferGetRequest` | `bankTransferId` | `bank_transfer_id` |
| `BankTransferGetResponse` | `bankTransfer` | `bank_transfer` |
| `BankTransferGetResponse` | `requestId` | `request_id` |
| `BankTransferListRequest` | `clientId` | `client_id` |
| `BankTransferListRequest` | `startDate` | `start_date` |
| `BankTransferListRequest` | `endDate` | `end_date` |
| `BankTransferListRequest` | `originationAccountId` | `origination_account_id` |
| `BankTransferListResponse` | `bankTransfers` | `bank_transfers` |
| `BankTransferListResponse` | `requestId` | `request_id` |
| `BankTransferMigrateAccountRequest` | `clientId` | `client_id` |
| `BankTransferMigrateAccountRequest` | `accountNumber` | `account_number` |
| `BankTransferMigrateAccountRequest` | `routingNumber` | `routing_number` |
| `BankTransferMigrateAccountRequest` | `wireRoutingNumber` | `wire_routing_number` |
| `BankTransferMigrateAccountRequest` | `accountType` | `account_type` |
| `BankTransferMigrateAccountResponse` | `accessToken` | `access_token` |
| `BankTransferMigrateAccountResponse` | `accountId` | `account_id` |
| `BankTransferMigrateAccountResponse` | `requestId` | `request_id` |
| `BankTransferSweep` | `createdAt` | `created_at` |
| `BankTransferSweep` | `isoCurrencyCode` | `iso_currency_code` |
| `BankTransferSweepGetRequest` | `clientId` | `client_id` |
| `BankTransferSweepGetRequest` | `sweepId` | `sweep_id` |
| `BankTransferSweepGetResponse` | `requestId` | `request_id` |
| `BankTransferSweepListRequest` | `clientId` | `client_id` |
| `BankTransferSweepListRequest` | `originationAccountId` | `origination_account_id` |
| `BankTransferSweepListRequest` | `startTime` | `start_time` |
| `BankTransferSweepListRequest` | `endTime` | `end_time` |
| `BankTransferSweepListResponse` | `requestId` | `request_id` |
| `BankTransferUser` | `legalName` | `legal_name` |
| `BankTransferUser` | `emailAddress` | `email_address` |
| `BankTransferUser` | `routingNumber` | `routing_number` |
| `BankTransfersEventsUpdateWebhook` | `webhookType` | `webhook_type` |
| `BankTransfersEventsUpdateWebhook` | `webhookCode` | `webhook_code` |
| `BankTransfersEventsUpdateWebhookForAuth` | `webhookType` | `webhook_type` |
| `BankTransfersEventsUpdateWebhookForAuth` | `webhookCode` | `webhook_code` |
| `BaseReport` | `reportId` | `report_id` |
| `BaseReport` | `dateGenerated` | `date_generated` |
| `BaseReport` | `daysRequested` | `days_requested` |
| `BaseReport` | `clientReportId` | `client_report_id` |
| `BaseReportAccount` | `accountId` | `account_id` |
| `BaseReportAccount` | `consumerDisputes` | `consumer_disputes` |
| `BaseReportAccount` | `officialName` | `official_name` |
| `BaseReportAccount` | `daysAvailable` | `days_available` |
| `BaseReportAccount` | `ownershipType` | `ownership_type` |
| `BaseReportAccount` | `historicalBalances` | `historical_balances` |
| `BaseReportAccount` | `accountInsights` | `account_insights` |
| `BaseReportAccountBalances` | `isoCurrencyCode` | `iso_currency_code` |
| `BaseReportAccountBalances` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `BaseReportAccountBalances` | `lastUpdatedDatetime` | `last_updated_datetime` |
| `BaseReportAccountBalances` | `averageBalance` | `average_balance` |
| `BaseReportAccountBalances` | `averageMonthlyBalances` | `average_monthly_balances` |
| `BaseReportAccountBalances` | `mostRecentThirtyDayAverageBalance` | `most_recent_thirty_day_average_balance` |
| `BaseReportAccountInsights` | `oldestTransactionDate` | `oldest_transaction_date` |
| `BaseReportAccountInsights` | `mostRecentTransactionDate` | `most_recent_transaction_date` |
| `BaseReportAccountInsights` | `daysAvailable` | `days_available` |
| `BaseReportAccountInsights` | `averageDaysBetweenTransactions` | `average_days_between_transactions` |
| `BaseReportAccountInsights` | `longestGapsBetweenTransactions` | `longest_gaps_between_transactions` |
| `BaseReportAccountInsights` | `numberOfInflows` | `number_of_inflows` |
| `BaseReportAccountInsights` | `averageInflowAmounts` | `average_inflow_amounts` |
| `BaseReportAccountInsights` | `numberOfOutflows` | `number_of_outflows` |
| `BaseReportAccountInsights` | `averageOutflowAmounts` | `average_outflow_amounts` |
| `BaseReportAccountInsights` | `numberOfDaysNoTransactions` | `number_of_days_no_transactions` |
| `BaseReportAccountMetadata` | `startDate` | `start_date` |
| `BaseReportAccountMetadata` | `endDate` | `end_date` |
| `BaseReportAttributes` | `isPrimaryAccount` | `is_primary_account` |
| `BaseReportAttributes` | `primaryAccountScore` | `primary_account_score` |
| `BaseReportAttributes` | `nsfOverdraftTransactionsCount` | `nsf_overdraft_transactions_count` |
| `BaseReportAttributes` | `nsfOverdraftTransactionsCount30D` | `nsf_overdraft_transactions_count_30d` |
| `BaseReportAttributes` | `nsfOverdraftTransactionsCount60D` | `nsf_overdraft_transactions_count_60d` |
| `BaseReportAttributes` | `nsfOverdraftTransactionsCount90D` | `nsf_overdraft_transactions_count_90d` |
| `BaseReportAttributes` | `totalInflowAmount` | `total_inflow_amount` |
| `BaseReportAttributes` | `totalInflowAmount30D` | `total_inflow_amount_30d` |
| `BaseReportAttributes` | `totalInflowAmount60D` | `total_inflow_amount_60d` |
| `BaseReportAttributes` | `totalInflowAmount90D` | `total_inflow_amount_90d` |
| `BaseReportAttributes` | `totalOutflowAmount` | `total_outflow_amount` |
| `BaseReportAttributes` | `totalOutflowAmount30D` | `total_outflow_amount_30d` |
| `BaseReportAttributes` | `totalOutflowAmount60D` | `total_outflow_amount_60d` |
| `BaseReportAttributes` | `totalOutflowAmount90D` | `total_outflow_amount_90d` |
| `BaseReportAverageFlowInsights` | `startDate` | `start_date` |
| `BaseReportAverageFlowInsights` | `endDate` | `end_date` |
| `BaseReportAverageFlowInsights` | `totalAmount` | `total_amount` |
| `BaseReportAverageMonthlyBalances` | `startDate` | `start_date` |
| `BaseReportAverageMonthlyBalances` | `endDate` | `end_date` |
| `BaseReportAverageMonthlyBalances` | `averageBalance` | `average_balance` |
| `BaseReportHistoricalBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `BaseReportHistoricalBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `BaseReportInvestmentHolding` | `accountId` | `account_id` |
| `BaseReportInvestmentHolding` | `securityId` | `security_id` |
| `BaseReportInvestmentHolding` | `institutionPrice` | `institution_price` |
| `BaseReportInvestmentHolding` | `institutionPriceAsOf` | `institution_price_as_of` |
| `BaseReportInvestmentHolding` | `institutionValue` | `institution_value` |
| `BaseReportInvestmentHolding` | `costBasis` | `cost_basis` |
| `BaseReportInvestmentHolding` | `isoCurrencyCode` | `iso_currency_code` |
| `BaseReportInvestmentHolding` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `BaseReportInvestmentSecurity` | `securityId` | `security_id` |
| `BaseReportInvestmentSecurity` | `institutionSecurityId` | `institution_security_id` |
| `BaseReportInvestmentSecurity` | `institutionId` | `institution_id` |
| `BaseReportInvestmentSecurity` | `tickerSymbol` | `ticker_symbol` |
| `BaseReportInvestmentTransaction` | `investmentTransactionId` | `investment_transaction_id` |
| `BaseReportInvestmentTransaction` | `accountId` | `account_id` |
| `BaseReportInvestmentTransaction` | `securityId` | `security_id` |
| `BaseReportInvestmentTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `BaseReportInvestmentTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `BaseReportInvestments` | `investmentTransactions` | `investment_transactions` |
| `BaseReportItem` | `institutionName` | `institution_name` |
| `BaseReportItem` | `institutionId` | `institution_id` |
| `BaseReportItem` | `dateLastUpdated` | `date_last_updated` |
| `BaseReportItem` | `itemId` | `item_id` |
| `BaseReportLongestGapInsights` | `startDate` | `start_date` |
| `BaseReportLongestGapInsights` | `endDate` | `end_date` |
| `BaseReportNumberFlowInsights` | `startDate` | `start_date` |
| `BaseReportNumberFlowInsights` | `endDate` | `end_date` |
| `BaseReportTransaction` | `accountId` | `account_id` |
| `BaseReportTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `BaseReportTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `BaseReportTransaction` | `originalDescription` | `original_description` |
| `BaseReportTransaction` | `creditCategory` | `credit_category` |
| `BaseReportTransaction` | `checkNumber` | `check_number` |
| `BaseReportTransaction` | `dateTransacted` | `date_transacted` |
| `BaseReportTransaction` | `merchantName` | `merchant_name` |
| `BaseReportTransaction` | `accountOwner` | `account_owner` |
| `BaseReportTransaction` | `transactionId` | `transaction_id` |
| `BaseReportTransaction` | `transactionType` | `transaction_type` |
| `BaseReportTransaction` | `categoryId` | `category_id` |
| `BaseReportTransaction` | `personalFinanceCategory` | `personal_finance_category` |
| `BaseReportUserAttributes` | `nsfOverdraftTransactionsCount` | `nsf_overdraft_transactions_count` |
| `BaseReportUserAttributes` | `nsfOverdraftTransactionsCount30D` | `nsf_overdraft_transactions_count_30d` |
| `BaseReportUserAttributes` | `nsfOverdraftTransactionsCount60D` | `nsf_overdraft_transactions_count_60d` |
| `BaseReportUserAttributes` | `nsfOverdraftTransactionsCount90D` | `nsf_overdraft_transactions_count_90d` |
| `BaseReportUserAttributes` | `totalInflowAmount` | `total_inflow_amount` |
| `BaseReportUserAttributes` | `totalInflowAmount30D` | `total_inflow_amount_30d` |
| `BaseReportUserAttributes` | `totalInflowAmount60D` | `total_inflow_amount_60d` |
| `BaseReportUserAttributes` | `totalInflowAmount90D` | `total_inflow_amount_90d` |
| `BaseReportUserAttributes` | `totalOutflowAmount` | `total_outflow_amount` |
| `BaseReportUserAttributes` | `totalOutflowAmount30D` | `total_outflow_amount_30d` |
| `BaseReportUserAttributes` | `totalOutflowAmount60D` | `total_outflow_amount_60d` |
| `BaseReportUserAttributes` | `totalOutflowAmount90D` | `total_outflow_amount_90d` |
| `BaseReportWarning` | `warningType` | `warning_type` |
| `BaseReportWarning` | `warningCode` | `warning_code` |
| `BaseReportsErrorWebhook` | `webhookType` | `webhook_type` |
| `BaseReportsErrorWebhook` | `webhookCode` | `webhook_code` |
| `BaseReportsErrorWebhook` | `userId` | `user_id` |
| `BeaconAccountRiskAttributes` | `daysSinceFirstPlaidConnection` | `days_since_first_plaid_connection` |
| `BeaconAccountRiskAttributes` | `isAccountClosed` | `is_account_closed` |
| `BeaconAccountRiskAttributes` | `isAccountFrozenOrRestricted` | `is_account_frozen_or_restricted` |
| `BeaconAccountRiskAttributes` | `totalPlaidConnectionsCount` | `total_plaid_connections_count` |
| `BeaconAccountRiskAttributes` | `plaidConnectionsCount7D` | `plaid_connections_count_7d` |
| `BeaconAccountRiskAttributes` | `plaidConnectionsCount30D` | `plaid_connections_count_30d` |
| `BeaconAccountRiskAttributes` | `failedPlaidNonOauthAuthenticationAttemptsCount3D` | `failed_plaid_non_oauth_authentication_attempts_count_3d` |
| `BeaconAccountRiskAttributes` | `plaidNonOauthAuthenticationAttemptsCount3D` | `plaid_non_oauth_authentication_attempts_count_3d` |
| `BeaconAccountRiskAttributes` | `failedPlaidNonOauthAuthenticationAttemptsCount7D` | `failed_plaid_non_oauth_authentication_attempts_count_7d` |
| `BeaconAccountRiskAttributes` | `plaidNonOauthAuthenticationAttemptsCount7D` | `plaid_non_oauth_authentication_attempts_count_7d` |
| `BeaconAccountRiskAttributes` | `failedPlaidNonOauthAuthenticationAttemptsCount30D` | `failed_plaid_non_oauth_authentication_attempts_count_30d` |
| `BeaconAccountRiskAttributes` | `plaidNonOauthAuthenticationAttemptsCount30D` | `plaid_non_oauth_authentication_attempts_count_30d` |
| `BeaconAccountRiskAttributes` | `distinctIpAddressesCount3D` | `distinct_ip_addresses_count_3d` |
| `BeaconAccountRiskAttributes` | `distinctIpAddressesCount7D` | `distinct_ip_addresses_count_7d` |
| `BeaconAccountRiskAttributes` | `distinctIpAddressesCount30D` | `distinct_ip_addresses_count_30d` |
| `BeaconAccountRiskAttributes` | `distinctIpAddressesCount90D` | `distinct_ip_addresses_count_90d` |
| `BeaconAccountRiskAttributes` | `distinctUserAgentsCount3D` | `distinct_user_agents_count_3d` |
| `BeaconAccountRiskAttributes` | `distinctUserAgentsCount7D` | `distinct_user_agents_count_7d` |
| `BeaconAccountRiskAttributes` | `distinctUserAgentsCount30D` | `distinct_user_agents_count_30d` |
| `BeaconAccountRiskAttributes` | `distinctUserAgentsCount90D` | `distinct_user_agents_count_90d` |
| `BeaconAccountRiskAttributes` | `addressChangeCount28D` | `address_change_count_28d` |
| `BeaconAccountRiskAttributes` | `emailChangeCount28D` | `email_change_count_28d` |
| `BeaconAccountRiskAttributes` | `phoneChangeCount28D` | `phone_change_count_28d` |
| `BeaconAccountRiskAttributes` | `addressChangeCount90D` | `address_change_count_90d` |
| `BeaconAccountRiskAttributes` | `emailChangeCount90D` | `email_change_count_90d` |
| `BeaconAccountRiskAttributes` | `phoneChangeCount90D` | `phone_change_count_90d` |
| `BeaconAccountRiskAttributes` | `daysSinceAccountOpening` | `days_since_account_opening` |
| `BeaconAccountRiskAttributes` | `daysSinceFirstObservedTransaction` | `days_since_first_observed_transaction` |
| `BeaconAccountRiskEvaluateAccount` | `accountId` | `account_id` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `daysSinceFirstPlaidConnection` | `days_since_first_plaid_connection` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `isAccountClosed` | `is_account_closed` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `isAccountFrozenOrRestricted` | `is_account_frozen_or_restricted` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `totalPlaidConnectionsCount` | `total_plaid_connections_count` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `plaidConnectionsCount7D` | `plaid_connections_count_7d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `plaidConnectionsCount30D` | `plaid_connections_count_30d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `failedPlaidNonOauthAuthenticationAttemptsCount3D` | `failed_plaid_non_oauth_authentication_attempts_count_3d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `plaidNonOauthAuthenticationAttemptsCount3D` | `plaid_non_oauth_authentication_attempts_count_3d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `failedPlaidNonOauthAuthenticationAttemptsCount7D` | `failed_plaid_non_oauth_authentication_attempts_count_7d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `plaidNonOauthAuthenticationAttemptsCount7D` | `plaid_non_oauth_authentication_attempts_count_7d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `failedPlaidNonOauthAuthenticationAttemptsCount30D` | `failed_plaid_non_oauth_authentication_attempts_count_30d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `plaidNonOauthAuthenticationAttemptsCount30D` | `plaid_non_oauth_authentication_attempts_count_30d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `distinctIpAddressesCount3D` | `distinct_ip_addresses_count_3d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `distinctIpAddressesCount7D` | `distinct_ip_addresses_count_7d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `distinctIpAddressesCount30D` | `distinct_ip_addresses_count_30d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `distinctIpAddressesCount90D` | `distinct_ip_addresses_count_90d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `distinctUserAgentsCount3D` | `distinct_user_agents_count_3d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `distinctUserAgentsCount7D` | `distinct_user_agents_count_7d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `distinctUserAgentsCount30D` | `distinct_user_agents_count_30d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `distinctUserAgentsCount90D` | `distinct_user_agents_count_90d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `addressChangeCount28D` | `address_change_count_28d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `emailChangeCount28D` | `email_change_count_28d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `phoneChangeCount28D` | `phone_change_count_28d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `addressChangeCount90D` | `address_change_count_90d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `emailChangeCount90D` | `email_change_count_90d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `phoneChangeCount90D` | `phone_change_count_90d` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `daysSinceAccountOpening` | `days_since_account_opening` |
| `BeaconAccountRiskEvaluateAccountAttributes` | `daysSinceFirstObservedTransaction` | `days_since_first_observed_transaction` |
| `BeaconAccountRiskEvaluateRequest` | `clientId` | `client_id` |
| `BeaconAccountRiskEvaluateRequest` | `accessToken` | `access_token` |
| `BeaconAccountRiskEvaluateRequest` | `clientUserId` | `client_user_id` |
| `BeaconAccountRiskEvaluateRequest` | `clientEvaluationId` | `client_evaluation_id` |
| `BeaconAccountRiskEvaluateRequest` | `evaluationReason` | `evaluation_reason` |
| `BeaconAccountRiskEvaluateRequest` | `evaluateTime` | `evaluate_time` |
| `BeaconAccountRiskEvaluateRequestOptions` | `accountIds` | `account_ids` |
| `BeaconAccountRiskEvaluateResponse` | `requestId` | `request_id` |
| `BeaconAuditTrail` | `dashboardUserId` | `dashboard_user_id` |
| `BeaconBankAccountInsights` | `accountId` | `account_id` |
| `BeaconBankAccounts` | `itemId` | `item_id` |
| `BeaconDuplicateDetectedWebhook` | `webhookType` | `webhook_type` |
| `BeaconDuplicateDetectedWebhook` | `webhookCode` | `webhook_code` |
| `BeaconDuplicateDetectedWebhook` | `beaconDuplicateId` | `beacon_duplicate_id` |
| `BeaconDuplicateGetRequest` | `beaconDuplicateId` | `beacon_duplicate_id` |
| `BeaconDuplicateGetRequest` | `clientId` | `client_id` |
| `BeaconDuplicateGetResponse` | `beaconUser1` | `beacon_user1` |
| `BeaconDuplicateGetResponse` | `beaconUser2` | `beacon_user2` |
| `BeaconDuplicateGetResponse` | `requestId` | `request_id` |
| `BeaconMatchSummaryAnalysis` | `dateOfBirth` | `date_of_birth` |
| `BeaconMatchSummaryAnalysis` | `emailAddress` | `email_address` |
| `BeaconMatchSummaryAnalysis` | `idNumber` | `id_number` |
| `BeaconMatchSummaryAnalysis` | `ipAddress` | `ip_address` |
| `BeaconMatchSummaryAnalysis` | `phoneNumber` | `phone_number` |
| `BeaconReport` | `beaconUserId` | `beacon_user_id` |
| `BeaconReport` | `createdAt` | `created_at` |
| `BeaconReport` | `fraudDate` | `fraud_date` |
| `BeaconReport` | `eventDate` | `event_date` |
| `BeaconReport` | `fraudAmount` | `fraud_amount` |
| `BeaconReport` | `auditTrail` | `audit_trail` |
| `BeaconReportCreateRequest` | `beaconUserId` | `beacon_user_id` |
| `BeaconReportCreateRequest` | `fraudDate` | `fraud_date` |
| `BeaconReportCreateRequest` | `fraudAmount` | `fraud_amount` |
| `BeaconReportCreateRequest` | `clientId` | `client_id` |
| `BeaconReportCreateResponse` | `beaconUserId` | `beacon_user_id` |
| `BeaconReportCreateResponse` | `createdAt` | `created_at` |
| `BeaconReportCreateResponse` | `fraudDate` | `fraud_date` |
| `BeaconReportCreateResponse` | `eventDate` | `event_date` |
| `BeaconReportCreateResponse` | `fraudAmount` | `fraud_amount` |
| `BeaconReportCreateResponse` | `auditTrail` | `audit_trail` |
| `BeaconReportCreateResponse` | `requestId` | `request_id` |
| `BeaconReportCreatedWebhook` | `webhookType` | `webhook_type` |
| `BeaconReportCreatedWebhook` | `webhookCode` | `webhook_code` |
| `BeaconReportCreatedWebhook` | `beaconReportId` | `beacon_report_id` |
| `BeaconReportGetRequest` | `beaconReportId` | `beacon_report_id` |
| `BeaconReportGetRequest` | `clientId` | `client_id` |
| `BeaconReportGetResponse` | `beaconUserId` | `beacon_user_id` |
| `BeaconReportGetResponse` | `createdAt` | `created_at` |
| `BeaconReportGetResponse` | `fraudDate` | `fraud_date` |
| `BeaconReportGetResponse` | `eventDate` | `event_date` |
| `BeaconReportGetResponse` | `fraudAmount` | `fraud_amount` |
| `BeaconReportGetResponse` | `auditTrail` | `audit_trail` |
| `BeaconReportGetResponse` | `requestId` | `request_id` |
| `BeaconReportListRequest` | `beaconUserId` | `beacon_user_id` |
| `BeaconReportListRequest` | `clientId` | `client_id` |
| `BeaconReportListResponse` | `beaconReports` | `beacon_reports` |
| `BeaconReportListResponse` | `nextCursor` | `next_cursor` |
| `BeaconReportListResponse` | `requestId` | `request_id` |
| `BeaconReportSyndication` | `beaconUserId` | `beacon_user_id` |
| `BeaconReportSyndicationAnalysis` | `dateOfBirth` | `date_of_birth` |
| `BeaconReportSyndicationAnalysis` | `emailAddress` | `email_address` |
| `BeaconReportSyndicationAnalysis` | `idNumber` | `id_number` |
| `BeaconReportSyndicationAnalysis` | `ipAddress` | `ip_address` |
| `BeaconReportSyndicationAnalysis` | `phoneNumber` | `phone_number` |
| `BeaconReportSyndicationAnalysis` | `depositoryAccounts` | `depository_accounts` |
| `BeaconReportSyndicationCreatedWebhook` | `webhookType` | `webhook_type` |
| `BeaconReportSyndicationCreatedWebhook` | `webhookCode` | `webhook_code` |
| `BeaconReportSyndicationCreatedWebhook` | `beaconReportSyndicationId` | `beacon_report_syndication_id` |
| `BeaconReportSyndicationGetRequest` | `beaconReportSyndicationId` | `beacon_report_syndication_id` |
| `BeaconReportSyndicationGetRequest` | `clientId` | `client_id` |
| `BeaconReportSyndicationGetResponse` | `beaconUserId` | `beacon_user_id` |
| `BeaconReportSyndicationGetResponse` | `requestId` | `request_id` |
| `BeaconReportSyndicationListRequest` | `beaconUserId` | `beacon_user_id` |
| `BeaconReportSyndicationListRequest` | `clientId` | `client_id` |
| `BeaconReportSyndicationListResponse` | `beaconReportSyndications` | `beacon_report_syndications` |
| `BeaconReportSyndicationListResponse` | `nextCursor` | `next_cursor` |
| `BeaconReportSyndicationListResponse` | `requestId` | `request_id` |
| `BeaconReportSyndicationOriginalReport` | `createdAt` | `created_at` |
| `BeaconReportSyndicationOriginalReport` | `fraudDate` | `fraud_date` |
| `BeaconReportSyndicationOriginalReport` | `eventDate` | `event_date` |
| `BeaconReportUpdatedWebhook` | `webhookType` | `webhook_type` |
| `BeaconReportUpdatedWebhook` | `webhookCode` | `webhook_code` |
| `BeaconReportUpdatedWebhook` | `beaconReportId` | `beacon_report_id` |
| `BeaconSyndicatedReportDepositoryAccountMatchAnalysis` | `accountMask` | `account_mask` |
| `BeaconSyndicatedReportDepositoryAccountMatchAnalysis` | `routingNumber` | `routing_number` |
| `BeaconSyndicatedReportDepositoryAccountMatchAnalysis` | `matchStatus` | `match_status` |
| `BeaconUser` | `itemIds` | `item_ids` |
| `BeaconUser` | `createdAt` | `created_at` |
| `BeaconUser` | `updatedAt` | `updated_at` |
| `BeaconUser` | `programId` | `program_id` |
| `BeaconUser` | `clientUserId` | `client_user_id` |
| `BeaconUser` | `auditTrail` | `audit_trail` |
| `BeaconUserAccountInsightsGetRequest` | `beaconUserId` | `beacon_user_id` |
| `BeaconUserAccountInsightsGetRequest` | `accessToken` | `access_token` |
| `BeaconUserAccountInsightsGetRequest` | `clientId` | `client_id` |
| `BeaconUserAccountInsightsGetResponse` | `beaconUserId` | `beacon_user_id` |
| `BeaconUserAccountInsightsGetResponse` | `createdAt` | `created_at` |
| `BeaconUserAccountInsightsGetResponse` | `updatedAt` | `updated_at` |
| `BeaconUserAccountInsightsGetResponse` | `bankAccountInsights` | `bank_account_insights` |
| `BeaconUserAccountInsightsGetResponse` | `requestId` | `request_id` |
| `BeaconUserAddress` | `postalCode` | `postal_code` |
| `BeaconUserCreateRequest` | `programId` | `program_id` |
| `BeaconUserCreateRequest` | `clientUserId` | `client_user_id` |
| `BeaconUserCreateRequest` | `accessTokens` | `access_tokens` |
| `BeaconUserCreateRequest` | `clientId` | `client_id` |
| `BeaconUserCreateResponse` | `itemIds` | `item_ids` |
| `BeaconUserCreateResponse` | `createdAt` | `created_at` |
| `BeaconUserCreateResponse` | `updatedAt` | `updated_at` |
| `BeaconUserCreateResponse` | `programId` | `program_id` |
| `BeaconUserCreateResponse` | `clientUserId` | `client_user_id` |
| `BeaconUserCreateResponse` | `auditTrail` | `audit_trail` |
| `BeaconUserCreateResponse` | `requestId` | `request_id` |
| `BeaconUserData` | `dateOfBirth` | `date_of_birth` |
| `BeaconUserData` | `emailAddress` | `email_address` |
| `BeaconUserData` | `phoneNumber` | `phone_number` |
| `BeaconUserData` | `idNumber` | `id_number` |
| `BeaconUserData` | `ipAddress` | `ip_address` |
| `BeaconUserData` | `depositoryAccounts` | `depository_accounts` |
| `BeaconUserDepositoryAccount` | `accountMask` | `account_mask` |
| `BeaconUserDepositoryAccount` | `routingNumber` | `routing_number` |
| `BeaconUserDepositoryAccount` | `addedAt` | `added_at` |
| `BeaconUserGetRequest` | `beaconUserId` | `beacon_user_id` |
| `BeaconUserGetRequest` | `clientId` | `client_id` |
| `BeaconUserGetResponse` | `itemIds` | `item_ids` |
| `BeaconUserGetResponse` | `createdAt` | `created_at` |
| `BeaconUserGetResponse` | `updatedAt` | `updated_at` |
| `BeaconUserGetResponse` | `programId` | `program_id` |
| `BeaconUserGetResponse` | `clientUserId` | `client_user_id` |
| `BeaconUserGetResponse` | `auditTrail` | `audit_trail` |
| `BeaconUserGetResponse` | `requestId` | `request_id` |
| `BeaconUserHistoryListRequest` | `beaconUserId` | `beacon_user_id` |
| `BeaconUserHistoryListRequest` | `clientId` | `client_id` |
| `BeaconUserHistoryListResponse` | `beaconUsers` | `beacon_users` |
| `BeaconUserHistoryListResponse` | `nextCursor` | `next_cursor` |
| `BeaconUserHistoryListResponse` | `requestId` | `request_id` |
| `BeaconUserName` | `givenName` | `given_name` |
| `BeaconUserName` | `familyName` | `family_name` |
| `BeaconUserNameNullable` | `givenName` | `given_name` |
| `BeaconUserNameNullable` | `familyName` | `family_name` |
| `BeaconUserRequestAddress` | `postalCode` | `postal_code` |
| `BeaconUserRequestAddressNullable` | `postalCode` | `postal_code` |
| `BeaconUserRequestData` | `dateOfBirth` | `date_of_birth` |
| `BeaconUserRequestData` | `emailAddress` | `email_address` |
| `BeaconUserRequestData` | `phoneNumber` | `phone_number` |
| `BeaconUserRequestData` | `idNumber` | `id_number` |
| `BeaconUserRequestData` | `ipAddress` | `ip_address` |
| `BeaconUserRequestData` | `depositoryAccounts` | `depository_accounts` |
| `BeaconUserRequestDepositoryAccount` | `accountNumber` | `account_number` |
| `BeaconUserRequestDepositoryAccount` | `routingNumber` | `routing_number` |
| `BeaconUserReviewRequest` | `beaconUserId` | `beacon_user_id` |
| `BeaconUserReviewRequest` | `clientId` | `client_id` |
| `BeaconUserStatusUpdatedWebhook` | `webhookType` | `webhook_type` |
| `BeaconUserStatusUpdatedWebhook` | `webhookCode` | `webhook_code` |
| `BeaconUserStatusUpdatedWebhook` | `beaconUserId` | `beacon_user_id` |
| `BeaconUserUpdateRequest` | `beaconUserId` | `beacon_user_id` |
| `BeaconUserUpdateRequest` | `accessTokens` | `access_tokens` |
| `BeaconUserUpdateRequest` | `clientId` | `client_id` |
| `BeaconUserUpdateRequestData` | `dateOfBirth` | `date_of_birth` |
| `BeaconUserUpdateRequestData` | `emailAddress` | `email_address` |
| `BeaconUserUpdateRequestData` | `phoneNumber` | `phone_number` |
| `BeaconUserUpdateRequestData` | `idNumber` | `id_number` |
| `BeaconUserUpdateRequestData` | `ipAddress` | `ip_address` |
| `BeaconUserUpdateRequestData` | `depositoryAccounts` | `depository_accounts` |
| `BeaconUserUpdateResponse` | `itemIds` | `item_ids` |
| `BeaconUserUpdateResponse` | `createdAt` | `created_at` |
| `BeaconUserUpdateResponse` | `updatedAt` | `updated_at` |
| `BeaconUserUpdateResponse` | `programId` | `program_id` |
| `BeaconUserUpdateResponse` | `clientUserId` | `client_user_id` |
| `BeaconUserUpdateResponse` | `auditTrail` | `audit_trail` |
| `BeaconUserUpdateResponse` | `requestId` | `request_id` |
| `BetaEwaReportV1GetRequest` | `accessToken` | `access_token` |
| `BetaEwaReportV1GetRequest` | `clientId` | `client_id` |
| `BetaEwaReportV1GetResponse` | `requestId` | `request_id` |
| `BetaEwaReportV1GetResponse` | `ewaReportId` | `ewa_report_id` |
| `BetaEwaReportV1GetResponse` | `generationTime` | `generation_time` |
| `BetaEwaReportV1GetResponse` | `ewaScores` | `ewa_scores` |
| `BetaEwaReportV1GetResponse` | `ewaAttributes` | `ewa_attributes` |
| `BetaPartnerCustomerV1CreateRequest` | `clientId` | `client_id` |
| `BetaPartnerCustomerV1CreateRequest` | `companyName` | `company_name` |
| `BetaPartnerCustomerV1CreateRequest` | `isDiligenceAttested` | `is_diligence_attested` |
| `BetaPartnerCustomerV1CreateRequest` | `createLinkCustomization` | `create_link_customization` |
| `BetaPartnerCustomerV1CreateRequest` | `legalEntityName` | `legal_entity_name` |
| `BetaPartnerCustomerV1CreateRequest` | `applicationName` | `application_name` |
| `BetaPartnerCustomerV1CreateRequest` | `technicalContact` | `technical_contact` |
| `BetaPartnerCustomerV1CreateRequest` | `billingContact` | `billing_contact` |
| `BetaPartnerCustomerV1CreateRequest` | `customerSupportInfo` | `customer_support_info` |
| `BetaPartnerCustomerV1CreateRequest` | `redirectUris` | `redirect_uris` |
| `BetaPartnerCustomerV1CreateRequest` | `bankAddendumAcceptance` | `bank_addendum_acceptance` |
| `BetaPartnerCustomerV1CreateResponse` | `endCustomer` | `end_customer` |
| `BetaPartnerCustomerV1CreateResponse` | `requestId` | `request_id` |
| `BetaPartnerCustomerV1EnableRequest` | `clientId` | `client_id` |
| `BetaPartnerCustomerV1EnableRequest` | `endCustomerClientId` | `end_customer_client_id` |
| `BetaPartnerCustomerV1EnableResponse` | `endCustomerClientId` | `end_customer_client_id` |
| `BetaPartnerCustomerV1EnableResponse` | `productStatuses` | `product_statuses` |
| `BetaPartnerCustomerV1EnableResponse` | `productionSecret` | `production_secret` |
| `BetaPartnerCustomerV1EnableResponse` | `requestId` | `request_id` |
| `BetaPartnerCustomerV1GetRequest` | `clientId` | `client_id` |
| `BetaPartnerCustomerV1GetRequest` | `endCustomerClientId` | `end_customer_client_id` |
| `BetaPartnerCustomerV1GetResponse` | `endCustomer` | `end_customer` |
| `BetaPartnerCustomerV1GetResponse` | `requestId` | `request_id` |
| `BetaPartnerCustomerV1UpdateRequest` | `clientId` | `client_id` |
| `BetaPartnerCustomerV1UpdateRequest` | `endCustomerClientId` | `end_customer_client_id` |
| `BetaPartnerCustomerV1UpdateRequest` | `legalEntityName` | `legal_entity_name` |
| `BetaPartnerCustomerV1UpdateRequest` | `redirectUris` | `redirect_uris` |
| `BetaPartnerCustomerV1UpdateRequest` | `bankAddendumAcceptance` | `bank_addendum_acceptance` |
| `BetaPartnerCustomerV1UpdateResponse` | `endCustomer` | `end_customer` |
| `BetaPartnerCustomerV1UpdateResponse` | `requestId` | `request_id` |
| `BetaPartnerEndCustomer` | `clientId` | `client_id` |
| `BetaPartnerEndCustomer` | `companyName` | `company_name` |
| `BetaPartnerEndCustomer` | `productStatuses` | `product_statuses` |
| `BetaPartnerEndCustomer` | `requirementsDue` | `requirements_due` |
| `BetaPartnerEndCustomerWithSecrets` | `clientId` | `client_id` |
| `BetaPartnerEndCustomerWithSecrets` | `companyName` | `company_name` |
| `BetaPartnerEndCustomerWithSecrets` | `productStatuses` | `product_statuses` |
| `BetaPartnerEndCustomerWithSecrets` | `requirementsDue` | `requirements_due` |
| `BusinessAccount` | `accountId` | `account_id` |
| `BusinessAccount` | `officialName` | `official_name` |
| `BusinessAccount` | `verificationStatus` | `verification_status` |
| `BusinessAccount` | `verificationName` | `verification_name` |
| `BusinessAccount` | `verificationInsights` | `verification_insights` |
| `BusinessAccount` | `persistentAccountId` | `persistent_account_id` |
| `BusinessAccount` | `holderCategory` | `holder_category` |
| `BusinessDigitalPresenceCheck` | `phoneNumber` | `phone_number` |
| `BusinessDigitalPresenceCheck` | `emailAddress` | `email_address` |
| `BusinessDigitalPresenceCheck` | `websiteAnalysis` | `website_analysis` |
| `BusinessEmailAddress` | `emailAddress` | `email_address` |
| `BusinessFinanceCategory` | `confidenceLevel` | `confidence_level` |
| `BusinessKybCheck` | `matchDetails` | `match_details` |
| `BusinessKybMatchDetails` | `entityType` | `entity_type` |
| `BusinessKybMatchDetails` | `phoneNumbers` | `phone_numbers` |
| `BusinessKybMatchDetails` | `emailAddresses` | `email_addresses` |
| `BusinessKybMatchDetails` | `formationDate` | `formation_date` |
| `BusinessRiskCheck` | `industryPrediction` | `industry_prediction` |
| `BusinessSearchTerms` | `alternativeNames` | `alternative_names` |
| `BusinessSearchTerms` | `phoneNumber` | `phone_number` |
| `BusinessSearchTerms` | `emailAddress` | `email_address` |
| `BusinessVerificationCreateRequest` | `clientUserId` | `client_user_id` |
| `BusinessVerificationCreateRequest` | `clientId` | `client_id` |
| `BusinessVerificationCreateRequestBusiness` | `alternativeName` | `alternative_name` |
| `BusinessVerificationCreateRequestBusiness` | `phoneNumber` | `phone_number` |
| `BusinessVerificationCreateRequestBusiness` | `emailAddress` | `email_address` |
| `BusinessVerificationCreateResponse` | `clientUserId` | `client_user_id` |
| `BusinessVerificationCreateResponse` | `createdAt` | `created_at` |
| `BusinessVerificationCreateResponse` | `completedAt` | `completed_at` |
| `BusinessVerificationCreateResponse` | `redactedAt` | `redacted_at` |
| `BusinessVerificationCreateResponse` | `searchTerms` | `search_terms` |
| `BusinessVerificationCreateResponse` | `kybCheck` | `kyb_check` |
| `BusinessVerificationCreateResponse` | `riskCheck` | `risk_check` |
| `BusinessVerificationCreateResponse` | `digitalPresenceCheck` | `digital_presence_check` |
| `BusinessVerificationCreateResponse` | `requestId` | `request_id` |
| `BusinessVerificationCreateResponse` | `shareableUrl` | `shareable_url` |
| `BusinessVerificationGetRequest` | `businessVerificationId` | `business_verification_id` |
| `BusinessVerificationGetRequest` | `clientId` | `client_id` |
| `BusinessVerificationGetResponse` | `clientUserId` | `client_user_id` |
| `BusinessVerificationGetResponse` | `createdAt` | `created_at` |
| `BusinessVerificationGetResponse` | `completedAt` | `completed_at` |
| `BusinessVerificationGetResponse` | `redactedAt` | `redacted_at` |
| `BusinessVerificationGetResponse` | `searchTerms` | `search_terms` |
| `BusinessVerificationGetResponse` | `kybCheck` | `kyb_check` |
| `BusinessVerificationGetResponse` | `riskCheck` | `risk_check` |
| `BusinessVerificationGetResponse` | `digitalPresenceCheck` | `digital_presence_check` |
| `BusinessVerificationGetResponse` | `requestId` | `request_id` |
| `BusinessVerificationGetResponse` | `shareableUrl` | `shareable_url` |
| `BusinessWebsiteAnalysis` | `isParked` | `is_parked` |
| `BusinessWebsiteAnalysis` | `emailIsDeliverable` | `email_is_deliverable` |
| `BusinessWebsiteAnalysis` | `websiteBuildStatus` | `website_build_status` |
| `BusinessWebsiteAnalysis` | `whoisRecord` | `whois_record` |
| `BusinessWebsiteSsl` | `isValid` | `is_valid` |
| `BusinessWhoisRecord` | `domainCreatedAt` | `domain_created_at` |
| `BusinessWhoisRecord` | `domainUpdatedAt` | `domain_updated_at` |
| `BusinessWhoisRecord` | `domainExpiresAt` | `domain_expires_at` |
| `CraLoansRegisterRequest` | `clientId` | `client_id` |
| `CashFlowUpdatesExpectedDepositMissedWebhook` | `webhookType` | `webhook_type` |
| `CashFlowUpdatesExpectedDepositMissedWebhook` | `webhookCode` | `webhook_code` |
| `CashFlowUpdatesExpectedDepositMissedWebhook` | `userId` | `user_id` |
| `CashFlowUpdatesInsightsV2Webhook` | `webhookType` | `webhook_type` |
| `CashFlowUpdatesInsightsV2Webhook` | `webhookCode` | `webhook_code` |
| `CashFlowUpdatesInsightsV2Webhook` | `userId` | `user_id` |
| `CashFlowUpdatesInsightsWebhook` | `webhookType` | `webhook_type` |
| `CashFlowUpdatesInsightsWebhook` | `webhookCode` | `webhook_code` |
| `CashFlowUpdatesInsightsWebhook` | `userId` | `user_id` |
| `CashFlowUpdatesLargeDepositWebhook` | `webhookType` | `webhook_type` |
| `CashFlowUpdatesLargeDepositWebhook` | `webhookCode` | `webhook_code` |
| `CashFlowUpdatesLargeDepositWebhook` | `userId` | `user_id` |
| `CashFlowUpdatesLowBalanceWebhook` | `webhookType` | `webhook_type` |
| `CashFlowUpdatesLowBalanceWebhook` | `webhookCode` | `webhook_code` |
| `CashFlowUpdatesLowBalanceWebhook` | `userId` | `user_id` |
| `CashFlowUpdatesNsfWebhook` | `webhookType` | `webhook_type` |
| `CashFlowUpdatesNsfWebhook` | `webhookCode` | `webhook_code` |
| `CashFlowUpdatesNsfWebhook` | `userId` | `user_id` |
| `CashFlowUpdatesNewIncomeStreamWebhook` | `webhookType` | `webhook_type` |
| `CashFlowUpdatesNewIncomeStreamWebhook` | `webhookCode` | `webhook_code` |
| `CashFlowUpdatesNewIncomeStreamWebhook` | `userId` | `user_id` |
| `CashFlowUpdatesNewLoanPaymentWebhook` | `webhookType` | `webhook_type` |
| `CashFlowUpdatesNewLoanPaymentWebhook` | `webhookCode` | `webhook_code` |
| `CashFlowUpdatesNewLoanPaymentWebhook` | `userId` | `user_id` |
| `CashflowAccountInsights` | `historicalBalances` | `historical_balances` |
| `CashflowAccountInsights` | `monthlySummaries` | `monthly_summaries` |
| `CashflowReportGetRequest` | `clientId` | `client_id` |
| `CashflowReportGetRequest` | `accessToken` | `access_token` |
| `CashflowReportGetRequest` | `daysRequested` | `days_requested` |
| `CashflowReportGetRequestOptions` | `accountIds` | `account_ids` |
| `CashflowReportGetResponse` | `totalTransactions` | `total_transactions` |
| `CashflowReportGetResponse` | `nextCursor` | `next_cursor` |
| `CashflowReportGetResponse` | `hasMore` | `has_more` |
| `CashflowReportGetResponse` | `lastSuccessfulUpdateTime` | `last_successful_update_time` |
| `CashflowReportGetResponse` | `requestId` | `request_id` |
| `CashflowReportHistoricalBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportHistoricalBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportInsightsGetRequest` | `clientId` | `client_id` |
| `CashflowReportInsightsGetRequest` | `accessToken` | `access_token` |
| `CashflowReportInsightsGetResponse` | `accountInsights` | `account_insights` |
| `CashflowReportInsightsGetResponse` | `lastGeneratedTime` | `last_generated_time` |
| `CashflowReportInsightsGetResponse` | `requestId` | `request_id` |
| `CashflowReportMonthlySummary` | `startDate` | `start_date` |
| `CashflowReportMonthlySummary` | `endDate` | `end_date` |
| `CashflowReportMonthlySummary` | `startingBalance` | `starting_balance` |
| `CashflowReportMonthlySummary` | `endingBalance` | `ending_balance` |
| `CashflowReportMonthlySummary` | `averageDailyEndingBalance` | `average_daily_ending_balance` |
| `CashflowReportMonthlySummary` | `averageDailyInflowAmount` | `average_daily_inflow_amount` |
| `CashflowReportMonthlySummary` | `averageDailyOutflowAmount` | `average_daily_outflow_amount` |
| `CashflowReportMonthlySummary` | `averageDailyNetCashflowAmount` | `average_daily_net_cashflow_amount` |
| `CashflowReportMonthlySummary` | `averageDailyInflowTransactionCount` | `average_daily_inflow_transaction_count` |
| `CashflowReportMonthlySummary` | `averageDailyOutflowTransactionCount` | `average_daily_outflow_transaction_count` |
| `CashflowReportMonthlySummary` | `totalRevenue` | `total_revenue` |
| `CashflowReportMonthlySummary` | `totalLoanPayment` | `total_loan_payment` |
| `CashflowReportMonthlySummary` | `totalVariableExpense` | `total_variable_expense` |
| `CashflowReportMonthlySummary` | `totalPayroll` | `total_payroll` |
| `CashflowReportMonthlySummary` | `nsfTransactionCount` | `nsf_transaction_count` |
| `CashflowReportMonthlySummary` | `overdraftTransactionCount` | `overdraft_transaction_count` |
| `CashflowReportMonthlySummary` | `negativeEndingBalanceDayCount` | `negative_ending_balance_day_count` |
| `CashflowReportMonthlySummaryAverageDailyEndingBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryAverageDailyEndingBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportMonthlySummaryAverageDailyInflowAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryAverageDailyInflowAmount` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportMonthlySummaryAverageDailyNetCashflowAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryAverageDailyNetCashflowAmount` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportMonthlySummaryAverageDailyOutflowAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryAverageDailyOutflowAmount` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportMonthlySummaryEndingBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryEndingBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportMonthlySummaryStartingBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryStartingBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportMonthlySummaryTotalLoanPayment` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryTotalLoanPayment` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportMonthlySummaryTotalPayroll` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryTotalPayroll` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportMonthlySummaryTotalRevenue` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryTotalRevenue` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportMonthlySummaryTotalVariableExpense` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportMonthlySummaryTotalVariableExpense` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportPaymentMeta` | `referenceNumber` | `reference_number` |
| `CashflowReportPaymentMeta` | `ppdId` | `ppd_id` |
| `CashflowReportPaymentMeta` | `byOrderOf` | `by_order_of` |
| `CashflowReportPaymentMeta` | `paymentMethod` | `payment_method` |
| `CashflowReportPaymentMeta` | `paymentProcessor` | `payment_processor` |
| `CashflowReportRefreshRequest` | `clientId` | `client_id` |
| `CashflowReportRefreshRequest` | `accessToken` | `access_token` |
| `CashflowReportRefreshRequest` | `daysRequested` | `days_requested` |
| `CashflowReportRefreshResponse` | `requestId` | `request_id` |
| `CashflowReportTransaction` | `accountId` | `account_id` |
| `CashflowReportTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `CashflowReportTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CashflowReportTransaction` | `checkNumber` | `check_number` |
| `CashflowReportTransaction` | `merchantName` | `merchant_name` |
| `CashflowReportTransaction` | `originalDescription` | `original_description` |
| `CashflowReportTransaction` | `paymentMeta` | `payment_meta` |
| `CashflowReportTransaction` | `pendingTransactionId` | `pending_transaction_id` |
| `CashflowReportTransaction` | `accountOwner` | `account_owner` |
| `CashflowReportTransaction` | `transactionId` | `transaction_id` |
| `CashflowReportTransaction` | `logoUrl` | `logo_url` |
| `CashflowReportTransaction` | `authorizedDate` | `authorized_date` |
| `CashflowReportTransaction` | `authorizedDatetime` | `authorized_datetime` |
| `CashflowReportTransaction` | `paymentChannel` | `payment_channel` |
| `CashflowReportTransaction` | `personalFinanceCategory` | `personal_finance_category` |
| `CashflowReportTransaction` | `businessFinanceCategory` | `business_finance_category` |
| `CashflowReportTransaction` | `creditCategory` | `credit_category` |
| `CashflowReportTransaction` | `transactionCode` | `transaction_code` |
| `CashflowReportTransaction` | `personalFinanceCategoryIconUrl` | `personal_finance_category_icon_url` |
| `CashflowReportTransaction` | `merchantEntityId` | `merchant_entity_id` |
| `CashflowReportTransactionsGetRequest` | `clientId` | `client_id` |
| `CashflowReportTransactionsGetRequest` | `accessToken` | `access_token` |
| `CashflowReportTransactionsGetRequestOptions` | `accountIds` | `account_ids` |
| `CashflowReportTransactionsGetResponse` | `totalTransactions` | `total_transactions` |
| `CashflowReportTransactionsGetResponse` | `nextCursor` | `next_cursor` |
| `CashflowReportTransactionsGetResponse` | `hasMore` | `has_more` |
| `CashflowReportTransactionsGetResponse` | `requestId` | `request_id` |
| `CategoriesGetResponse` | `requestId` | `request_id` |
| `Category` | `categoryId` | `category_id` |
| `CategoryExpenses` | `transactionsCount` | `transactions_count` |
| `CategoryExpenses` | `isoCurrencyCode` | `iso_currency_code` |
| `CategoryExpenses` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CategoryExpenses` | `monthlyAverage` | `monthly_average` |
| `CategoryInsightDetails` | `transactionCount` | `transaction_count` |
| `CategoryInsightDetails` | `totalOutflows` | `total_outflows` |
| `CategoryInsightDetails` | `totalInflows` | `total_inflows` |
| `CategoryInsightDetails` | `topCounterparties` | `top_counterparties` |
| `CategoryInsights` | `primaryCategoryInsights` | `primary_category_insights` |
| `CategoryInsights` | `detailedCategoryInsights` | `detailed_category_insights` |
| `Cause` | `errorType` | `error_type` |
| `Cause` | `errorCode` | `error_code` |
| `Cause` | `errorCodeReason` | `error_code_reason` |
| `Cause` | `errorMessage` | `error_message` |
| `Cause` | `displayMessage` | `display_message` |
| `Cause` | `requestId` | `request_id` |
| `Cause` | `documentationUrl` | `documentation_url` |
| `Cause` | `suggestedAction` | `suggested_action` |
| `Cause` | `requiredAccountSubtypes` | `required_account_subtypes` |
| `Cause` | `providedAccountSubtypes` | `provided_account_subtypes` |
| `Cause` | `itemId` | `item_id` |
| `CheckReportRepairableItem` | `errorType` | `error_type` |
| `CheckReportRepairableItem` | `errorCode` | `error_code` |
| `CheckReportRepairableItem` | `errorMessage` | `error_message` |
| `CheckReportRepairableItem` | `displayMessage` | `display_message` |
| `CheckReportRepairableItem` | `itemId` | `item_id` |
| `ClientCustomization` | `customEntityId` | `custom_entity_id` |
| `ClientProvidedEnhancedTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `ClientProvidedEnrichedTransaction` | `clientUserId` | `client_user_id` |
| `ClientProvidedEnrichedTransaction` | `clientAccountId` | `client_account_id` |
| `ClientProvidedEnrichedTransaction` | `accountType` | `account_type` |
| `ClientProvidedEnrichedTransaction` | `accountSubtype` | `account_subtype` |
| `ClientProvidedEnrichedTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `ClientProvidedEnrichedTransaction` | `clientCustomization` | `client_customization` |
| `ClientProvidedRawTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `ClientProvidedTransaction` | `userId` | `user_id` |
| `ClientProvidedTransaction` | `clientUserId` | `client_user_id` |
| `ClientProvidedTransaction` | `clientAccountId` | `client_account_id` |
| `ClientProvidedTransaction` | `accountType` | `account_type` |
| `ClientProvidedTransaction` | `accountSubtype` | `account_subtype` |
| `ClientProvidedTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `ClientProvidedTransaction` | `datePosted` | `date_posted` |
| `ClientProvidedTransactionLocation` | `postalCode` | `postal_code` |
| `ClientUserIdentity` | `dateOfBirth` | `date_of_birth` |
| `ClientUserIdentity` | `phoneNumbers` | `phone_numbers` |
| `ClientUserIdentity` | `idNumbers` | `id_numbers` |
| `ClientUserIdentityAddress` | `street1` | `street_1` |
| `ClientUserIdentityAddress` | `street2` | `street_2` |
| `ClientUserIdentityAddress` | `postalCode` | `postal_code` |
| `ClientUserIdentityName` | `givenName` | `given_name` |
| `ClientUserIdentityName` | `familyName` | `family_name` |
| `ConnectedApplication` | `applicationId` | `application_id` |
| `ConnectedApplication` | `displayName` | `display_name` |
| `ConnectedApplication` | `logoUrl` | `logo_url` |
| `ConnectedApplication` | `applicationUrl` | `application_url` |
| `ConnectedApplication` | `reasonForAccess` | `reason_for_access` |
| `ConnectedApplication` | `createdAt` | `created_at` |
| `ConsentEvent` | `itemId` | `item_id` |
| `ConsentEvent` | `createdAt` | `created_at` |
| `ConsentEvent` | `eventType` | `event_type` |
| `ConsentEvent` | `eventCode` | `event_code` |
| `ConsentEvent` | `institutionId` | `institution_id` |
| `ConsentEvent` | `institutionName` | `institution_name` |
| `ConsentEvent` | `consentedUseCases` | `consented_use_cases` |
| `ConsentEvent` | `consentedDataScopes` | `consented_data_scopes` |
| `ConsentEvent` | `consentedAccounts` | `consented_accounts` |
| `ConsentEventsGetRequest` | `clientId` | `client_id` |
| `ConsentEventsGetRequest` | `accessToken` | `access_token` |
| `ConsentEventsGetResponse` | `requestId` | `request_id` |
| `ConsentEventsGetResponse` | `consentEvents` | `consent_events` |
| `ConsentedAccount` | `accountId` | `account_id` |
| `ConsentedAccount` | `officialName` | `official_name` |
| `ConsumerDispute` | `consumerDisputeId` | `consumer_dispute_id` |
| `ConsumerDispute` | `disputeFieldCreateDate` | `dispute_field_create_date` |
| `ConsumerReportPdfGetRequest` | `clientId` | `client_id` |
| `ConsumerReportPdfGetRequest` | `userToken` | `user_token` |
| `ConsumerReportUserIdentity` | `firstName` | `first_name` |
| `ConsumerReportUserIdentity` | `lastName` | `last_name` |
| `ConsumerReportUserIdentity` | `phoneNumbers` | `phone_numbers` |
| `ConsumerReportUserIdentity` | `ssnFull` | `ssn_full` |
| `ConsumerReportUserIdentity` | `ssnLast4` | `ssn_last_4` |
| `ConsumerReportUserIdentity` | `dateOfBirth` | `date_of_birth` |
| `ConsumerReportUserIdentity` | `primaryAddress` | `primary_address` |
| `Counterparty` | `entityId` | `entity_id` |
| `Counterparty` | `logoUrl` | `logo_url` |
| `Counterparty` | `confidenceLevel` | `confidence_level` |
| `Counterparty` | `phoneNumber` | `phone_number` |
| `Counterparty` | `accountNumbers` | `account_numbers` |
| `CounterpartyInsights` | `financialInstitutionInsights` | `financial_institution_insights` |
| `CounterpartyInsights` | `merchantInsights` | `merchant_insights` |
| `CounterpartyNumbersBacs` | `sortCode` | `sort_code` |
| `CraAnnualIncomeValues` | `grossIncome` | `gross_income` |
| `CraAnnualIncomeValues` | `netIncome` | `net_income` |
| `CraBankIncomeAccount` | `accountId` | `account_id` |
| `CraBankIncomeAccount` | `officialName` | `official_name` |
| `CraBankIncomeAccountMetadata` | `startDate` | `start_date` |
| `CraBankIncomeAccountMetadata` | `endDate` | `end_date` |
| `CraBankIncomeCause` | `errorType` | `error_type` |
| `CraBankIncomeCause` | `errorCode` | `error_code` |
| `CraBankIncomeCause` | `errorMessage` | `error_message` |
| `CraBankIncomeCause` | `displayMessage` | `display_message` |
| `CraBankIncomeCompleteWebhook` | `webhookType` | `webhook_type` |
| `CraBankIncomeCompleteWebhook` | `webhookCode` | `webhook_code` |
| `CraBankIncomeCompleteWebhook` | `userId` | `user_id` |
| `CraBankIncomeErrorWebhook` | `webhookType` | `webhook_type` |
| `CraBankIncomeErrorWebhook` | `webhookCode` | `webhook_code` |
| `CraBankIncomeErrorWebhook` | `userId` | `user_id` |
| `CraBankIncomeHistoricalSummary` | `totalAmounts` | `total_amounts` |
| `CraBankIncomeHistoricalSummary` | `startDate` | `start_date` |
| `CraBankIncomeHistoricalSummary` | `endDate` | `end_date` |
| `CraBankIncomeIncomeProvider` | `isNormalized` | `is_normalized` |
| `CraBankIncomeItem` | `itemId` | `item_id` |
| `CraBankIncomeItem` | `bankIncomeAccounts` | `bank_income_accounts` |
| `CraBankIncomeItem` | `bankIncomeSources` | `bank_income_sources` |
| `CraBankIncomeItem` | `lastUpdatedTime` | `last_updated_time` |
| `CraBankIncomeItem` | `institutionId` | `institution_id` |
| `CraBankIncomeItem` | `institutionName` | `institution_name` |
| `CraBankIncomeSource` | `accountId` | `account_id` |
| `CraBankIncomeSource` | `incomeSourceId` | `income_source_id` |
| `CraBankIncomeSource` | `incomeDescription` | `income_description` |
| `CraBankIncomeSource` | `incomeCategory` | `income_category` |
| `CraBankIncomeSource` | `startDate` | `start_date` |
| `CraBankIncomeSource` | `endDate` | `end_date` |
| `CraBankIncomeSource` | `payFrequency` | `pay_frequency` |
| `CraBankIncomeSource` | `totalAmount` | `total_amount` |
| `CraBankIncomeSource` | `isoCurrencyCode` | `iso_currency_code` |
| `CraBankIncomeSource` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CraBankIncomeSource` | `transactionCount` | `transaction_count` |
| `CraBankIncomeSource` | `nextPaymentDate` | `next_payment_date` |
| `CraBankIncomeSource` | `historicalAverageMonthlyGrossIncome` | `historical_average_monthly_gross_income` |
| `CraBankIncomeSource` | `historicalAverageMonthlyIncome` | `historical_average_monthly_income` |
| `CraBankIncomeSource` | `forecastedAverageMonthlyIncome` | `forecasted_average_monthly_income` |
| `CraBankIncomeSource` | `forecastedAverageMonthlyIncomePredictionIntervals` | `forecasted_average_monthly_income_prediction_intervals` |
| `CraBankIncomeSource` | `incomeProvider` | `income_provider` |
| `CraBankIncomeSource` | `historicalSummary` | `historical_summary` |
| `CraBankIncomeSummary` | `totalAmounts` | `total_amounts` |
| `CraBankIncomeSummary` | `startDate` | `start_date` |
| `CraBankIncomeSummary` | `endDate` | `end_date` |
| `CraBankIncomeSummary` | `incomeSourcesCount` | `income_sources_count` |
| `CraBankIncomeSummary` | `incomeCategoriesCount` | `income_categories_count` |
| `CraBankIncomeSummary` | `incomeTransactionsCount` | `income_transactions_count` |
| `CraBankIncomeSummary` | `historicalAverageMonthlyGrossIncome` | `historical_average_monthly_gross_income` |
| `CraBankIncomeSummary` | `historicalAverageMonthlyIncome` | `historical_average_monthly_income` |
| `CraBankIncomeSummary` | `forecastedAverageMonthlyIncome` | `forecasted_average_monthly_income` |
| `CraBankIncomeSummary` | `historicalAnnualGrossIncome` | `historical_annual_gross_income` |
| `CraBankIncomeSummary` | `historicalAnnualIncome` | `historical_annual_income` |
| `CraBankIncomeSummary` | `forecastedAnnualIncome` | `forecasted_annual_income` |
| `CraBankIncomeSummary` | `historicalSummary` | `historical_summary` |
| `CraBankIncomeTransaction` | `transactionId` | `transaction_id` |
| `CraBankIncomeTransaction` | `originalDescription` | `original_description` |
| `CraBankIncomeTransaction` | `checkNumber` | `check_number` |
| `CraBankIncomeTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `CraBankIncomeTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CraBankIncomeTransaction` | `bonusType` | `bonus_type` |
| `CraBankIncomeWarning` | `warningType` | `warning_type` |
| `CraBankIncomeWarning` | `warningCode` | `warning_code` |
| `CraCashflowInsightsReport` | `reportId` | `report_id` |
| `CraCashflowInsightsReport` | `generatedTime` | `generated_time` |
| `CraCheckReportBaseReportGetRequest` | `clientId` | `client_id` |
| `CraCheckReportBaseReportGetRequest` | `userId` | `user_id` |
| `CraCheckReportBaseReportGetRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `CraCheckReportBaseReportGetRequest` | `itemIds` | `item_ids` |
| `CraCheckReportBaseReportGetRequest` | `userToken` | `user_token` |
| `CraCheckReportBaseReportGetRequest` | `userTier` | `user_tier` |
| `CraCheckReportBaseReportGetRequest` | `reportId` | `report_id` |
| `CraCheckReportBaseReportGetRequest` | `consumerReportPermissiblePurpose` | `consumer_report_permissible_purpose` |
| `CraCheckReportBaseReportGetResponse` | `requestId` | `request_id` |
| `CraCheckReportCashflowInsightsGetOptions` | `attributesVersion` | `attributes_version` |
| `CraCheckReportCashflowInsightsGetRequest` | `clientId` | `client_id` |
| `CraCheckReportCashflowInsightsGetRequest` | `userId` | `user_id` |
| `CraCheckReportCashflowInsightsGetRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `CraCheckReportCashflowInsightsGetRequest` | `userToken` | `user_token` |
| `CraCheckReportCashflowInsightsGetResponse` | `requestId` | `request_id` |
| `CraCheckReportCreateBaseReportOptions` | `clientReportId` | `client_report_id` |
| `CraCheckReportCreateBaseReportOptions` | `gseOptions` | `gse_options` |
| `CraCheckReportCreateBaseReportOptions` | `requireIdentity` | `require_identity` |
| `CraCheckReportCreateBaseReportOptions` | `homeLendingReportOptions` | `home_lending_report_options` |
| `CraCheckReportCreateCashflowInsightsOptions` | `attributesVersion` | `attributes_version` |
| `CraCheckReportCreateEmploymentRefreshOptions` | `daysRequested` | `days_requested` |
| `CraCheckReportCreateIncomeInsightsOptions` | `incomeInsightsFilter` | `income_insights_filter` |
| `CraCheckReportCreateIncomeInsightsOptions` | `incomeInsightsVersion` | `income_insights_version` |
| `CraCheckReportCreateLendScoreOptions` | `lendScoreVersion` | `lend_score_version` |
| `CraCheckReportCreateNetworkInsightsOptions` | `networkInsightsVersion` | `network_insights_version` |
| `CraCheckReportCreatePartnerInsightsOptions` | `prismVersions` | `prism_versions` |
| `CraCheckReportCreateRequest` | `clientId` | `client_id` |
| `CraCheckReportCreateRequest` | `userId` | `user_id` |
| `CraCheckReportCreateRequest` | `userToken` | `user_token` |
| `CraCheckReportCreateRequest` | `daysRequested` | `days_requested` |
| `CraCheckReportCreateRequest` | `daysRequired` | `days_required` |
| `CraCheckReportCreateRequest` | `clientReportId` | `client_report_id` |
| `CraCheckReportCreateRequest` | `baseReport` | `base_report` |
| `CraCheckReportCreateRequest` | `cashflowInsights` | `cashflow_insights` |
| `CraCheckReportCreateRequest` | `partnerInsights` | `partner_insights` |
| `CraCheckReportCreateRequest` | `lendScore` | `lend_score` |
| `CraCheckReportCreateRequest` | `networkInsights` | `network_insights` |
| `CraCheckReportCreateRequest` | `includeInvestments` | `include_investments` |
| `CraCheckReportCreateRequest` | `incomeInsights` | `income_insights` |
| `CraCheckReportCreateRequest` | `consumerReportPermissiblePurpose` | `consumer_report_permissible_purpose` |
| `CraCheckReportCreateResponse` | `requestId` | `request_id` |
| `CraCheckReportFailedWebhook` | `webhookType` | `webhook_type` |
| `CraCheckReportFailedWebhook` | `webhookCode` | `webhook_code` |
| `CraCheckReportFailedWebhook` | `userId` | `user_id` |
| `CraCheckReportFailedWebhook` | `repairableItems` | `repairable_items` |
| `CraCheckReportFailedWebhook` | `failedProducts` | `failed_products` |
| `CraCheckReportFailedWebhook` | `itemIds` | `item_ids` |
| `CraCheckReportFreddieMacGetRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `CraCheckReportFreddieMacGetRequest` | `clientId` | `client_id` |
| `CraCheckReportFreddieMacGetResponse` | `deal` | `DEAL` |
| `CraCheckReportFreddieMacGetResponse` | `requestId` | `request_id` |
| `CraCheckReportFreddieMacGetResponse` | `schemaVersion` | `SchemaVersion` |
| `CraCheckReportFreddieMacVerificationOfAssetsDeal` | `loans` | `LOANS` |
| `CraCheckReportFreddieMacVerificationOfAssetsDeal` | `parties` | `PARTIES` |
| `CraCheckReportFreddieMacVerificationOfAssetsDeal` | `services` | `SERVICES` |
| `CraCheckReportGseOptions` | `reportTypes` | `report_types` |
| `CraCheckReportHomeLendingReportOptions` | `reportsRequested` | `reports_requested` |
| `CraCheckReportHomeLendingReportOptions` | `employmentRefreshOptions` | `employment_refresh_options` |
| `CraCheckReportIncomeInsightsGetOptions` | `incomeInsightsFilter` | `income_insights_filter` |
| `CraCheckReportIncomeInsightsGetOptions` | `incomeInsightsVersion` | `income_insights_version` |
| `CraCheckReportIncomeInsightsGetRequest` | `clientId` | `client_id` |
| `CraCheckReportIncomeInsightsGetRequest` | `userToken` | `user_token` |
| `CraCheckReportIncomeInsightsGetRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `CraCheckReportIncomeInsightsGetRequest` | `userId` | `user_id` |
| `CraCheckReportIncomeInsightsGetRequest` | `reportId` | `report_id` |
| `CraCheckReportIncomeInsightsGetRequest` | `consumerReportPermissiblePurpose` | `consumer_report_permissible_purpose` |
| `CraCheckReportIncomeInsightsGetResponse` | `requestId` | `request_id` |
| `CraCheckReportLendScoreGetOptions` | `lendScoreVersion` | `lend_score_version` |
| `CraCheckReportLendScoreGetRequest` | `clientId` | `client_id` |
| `CraCheckReportLendScoreGetRequest` | `userId` | `user_id` |
| `CraCheckReportLendScoreGetRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `CraCheckReportLendScoreGetRequest` | `userToken` | `user_token` |
| `CraCheckReportLendScoreGetResponse` | `requestId` | `request_id` |
| `CraCheckReportNetworkInsightsGetOptions` | `networkInsightsVersion` | `network_insights_version` |
| `CraCheckReportNetworkInsightsGetRequest` | `clientId` | `client_id` |
| `CraCheckReportNetworkInsightsGetRequest` | `userId` | `user_id` |
| `CraCheckReportNetworkInsightsGetRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `CraCheckReportNetworkInsightsGetRequest` | `userToken` | `user_token` |
| `CraCheckReportNetworkInsightsGetResponse` | `requestId` | `request_id` |
| `CraCheckReportPdfGetRequest` | `clientId` | `client_id` |
| `CraCheckReportPdfGetRequest` | `userId` | `user_id` |
| `CraCheckReportPdfGetRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `CraCheckReportPdfGetRequest` | `addOns` | `add_ons` |
| `CraCheckReportPdfGetRequest` | `userToken` | `user_token` |
| `CraCheckReportPartnerInsightsGetOptions` | `prismVersions` | `prism_versions` |
| `CraCheckReportPartnerInsightsGetPartnerInsights` | `prismVersions` | `prism_versions` |
| `CraCheckReportPartnerInsightsGetRequest` | `clientId` | `client_id` |
| `CraCheckReportPartnerInsightsGetRequest` | `userId` | `user_id` |
| `CraCheckReportPartnerInsightsGetRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `CraCheckReportPartnerInsightsGetRequest` | `userToken` | `user_token` |
| `CraCheckReportPartnerInsightsGetRequest` | `userTier` | `user_tier` |
| `CraCheckReportPartnerInsightsGetRequest` | `partnerInsights` | `partner_insights` |
| `CraCheckReportPartnerInsightsGetResponse` | `requestId` | `request_id` |
| `CraCheckReportReadyWebhook` | `webhookType` | `webhook_type` |
| `CraCheckReportReadyWebhook` | `webhookCode` | `webhook_code` |
| `CraCheckReportReadyWebhook` | `userId` | `user_id` |
| `CraCheckReportReadyWebhook` | `successfulProducts` | `successful_products` |
| `CraCheckReportReadyWebhook` | `failedProducts` | `failed_products` |
| `CraCheckReportReadyWebhook` | `itemIds` | `item_ids` |
| `CraCheckReportVerificationGetEmploymentRefreshOptions` | `daysRequested` | `days_requested` |
| `CraCheckReportVerificationGetRequest` | `clientId` | `client_id` |
| `CraCheckReportVerificationGetRequest` | `userId` | `user_id` |
| `CraCheckReportVerificationGetRequest` | `reportsRequested` | `reports_requested` |
| `CraCheckReportVerificationGetRequest` | `employmentRefreshOptions` | `employment_refresh_options` |
| `CraCheckReportVerificationGetRequest` | `userToken` | `user_token` |
| `CraCheckReportVerificationGetResponse` | `requestId` | `request_id` |
| `CraCheckReportVerificationPdfGetRequest` | `clientId` | `client_id` |
| `CraCheckReportVerificationPdfGetRequest` | `userId` | `user_id` |
| `CraCheckReportVerificationPdfGetRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `CraCheckReportVerificationPdfGetRequest` | `reportRequested` | `report_requested` |
| `CraCheckReportVerificationPdfGetRequest` | `reportsRequested` | `reports_requested` |
| `CraCheckReportVerificationPdfGetRequest` | `hideGseDetails` | `hide_gse_details` |
| `CraCheckReportVerificationPdfGetRequest` | `userToken` | `user_token` |
| `CraCreditProfileLendScore` | `reasonCodes` | `reason_codes` |
| `CraCreditProfileLendScore` | `errorReason` | `error_reason` |
| `CraCreditProfileReport` | `dateRetrieved` | `date_retrieved` |
| `CraCreditProfileReport` | `inquiryType` | `inquiry_type` |
| `CraCreditProfileReport` | `clientReportId` | `client_report_id` |
| `CraCreditProfileReport` | `lendScores` | `lend_scores` |
| `CraCreditProfileReport` | `cashflowInsightsAttributes` | `cashflow_insights_attributes` |
| `CraCreditProfileReport` | `networkInsightsAttributes` | `network_insights_attributes` |
| `CraCreditProfileReportGetRequest` | `clientId` | `client_id` |
| `CraCreditProfileReportGetRequest` | `userId` | `user_id` |
| `CraCreditProfileReportGetRequest` | `consumerReportPermissiblePurpose` | `consumer_report_permissible_purpose` |
| `CraCreditProfileReportGetRequest` | `clientReportId` | `client_report_id` |
| `CraCreditProfileReportGetRequest` | `reportType` | `report_type` |
| `CraCreditProfileReportGetRequest` | `inquiryType` | `inquiry_type` |
| `CraCreditProfileReportGetResponse` | `requestId` | `request_id` |
| `CraCreditProfileReportGetResponse` | `userId` | `user_id` |
| `CraCreditProfileReportMetadata` | `itemCount` | `item_count` |
| `CraCreditProfileReportMetadata` | `institutionIds` | `institution_ids` |
| `CraCreditProfileReportMetadata` | `accountCount` | `account_count` |
| `CraCreditProfileReportMetadata` | `primaryAccountCount` | `primary_account_count` |
| `CraCreditProfileReportMetadata` | `depositoryAccountTypeCount` | `depository_account_type_count` |
| `CraCreditProfileReportMetadata` | `creditAccountTypeCount` | `credit_account_type_count` |
| `CraCreditProfileReportMetadata` | `otherAccountTypeCount` | `other_account_type_count` |
| `CraCreditProfileReportMetadata` | `multipleOwnerAccountCount` | `multiple_owner_account_count` |
| `CraCreditProfileReportMetadata` | `generatedAt` | `generated_at` |
| `CraCreditProfileReportMetadata` | `oldestTransactionDate` | `oldest_transaction_date` |
| `CraCreditProfileReportMetadata` | `mostRecentTransactionDate` | `most_recent_transaction_date` |
| `CraEmploymentRefreshReport` | `generatedTime` | `generated_time` |
| `CraEmploymentRefreshReport` | `daysRequested` | `days_requested` |
| `CraEmploymentRefreshReportAccount` | `accountId` | `account_id` |
| `CraEmploymentRefreshReportAccount` | `officialName` | `official_name` |
| `CraEmploymentRefreshReportItem` | `institutionName` | `institution_name` |
| `CraEmploymentRefreshReportItem` | `institutionId` | `institution_id` |
| `CraEmploymentRefreshReportItem` | `itemId` | `item_id` |
| `CraEmploymentRefreshReportItem` | `lastUpdateTime` | `last_update_time` |
| `CraEmploymentRefreshReportTransaction` | `accountId` | `account_id` |
| `CraEmploymentRefreshReportTransaction` | `originalDescription` | `original_description` |
| `CraEmploymentRefreshReportTransaction` | `transactionId` | `transaction_id` |
| `CraIncomeInsights` | `reportId` | `report_id` |
| `CraIncomeInsights` | `generatedTime` | `generated_time` |
| `CraIncomeInsights` | `daysRequested` | `days_requested` |
| `CraIncomeInsights` | `clientReportId` | `client_report_id` |
| `CraIncomeInsights` | `userSummary` | `user_summary` |
| `CraIncomeInsights` | `incomeStreams` | `income_streams` |
| `CraIncomeInsights` | `bankIncomeSummary` | `bank_income_summary` |
| `CraIncomeInsightsUserSummary` | `incomeMetrics` | `income_metrics` |
| `CraIncomeMetrics` | `isoCurrencyCode` | `iso_currency_code` |
| `CraIncomeMetrics` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CraIncomeStream` | `incomeStreamId` | `income_stream_id` |
| `CraIncomeStream` | `startDate` | `start_date` |
| `CraIncomeStream` | `endDate` | `end_date` |
| `CraIncomeStream` | `incomeMetrics` | `income_metrics` |
| `CraIncomeStreamInsights` | `incomeCategory` | `income_category` |
| `CraIncomeStreamInsights` | `payFrequency` | `pay_frequency` |
| `CraIncomeStreamInsights` | `incomeProvider` | `income_provider` |
| `CraIncomeStreamInsights` | `nextPayment` | `next_payment` |
| `CraIncomeTransaction` | `transactionId` | `transaction_id` |
| `CraIncomeTransaction` | `itemId` | `item_id` |
| `CraIncomeTransaction` | `accountId` | `account_id` |
| `CraIncomeTransaction` | `originalDescription` | `original_description` |
| `CraIncomeTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `CraIncomeTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CraIncomeTransactionOutlier` | `isOutlier` | `is_outlier` |
| `CraLendScoreReport` | `reportId` | `report_id` |
| `CraLendScoreReport` | `generatedTime` | `generated_time` |
| `CraLendScoreReport` | `lendScore` | `lend_score` |
| `CraLoanApplication` | `userToken` | `user_token` |
| `CraLoanApplication` | `applicationId` | `application_id` |
| `CraLoanApplication` | `applicationDate` | `application_date` |
| `CraLoanApplication` | `decisionDate` | `decision_date` |
| `CraLoanPaymentHistory` | `dueDate` | `due_date` |
| `CraLoanPaymentHistory` | `daysPastDue` | `days_past_due` |
| `CraLoanPaymentHistory` | `amountPastDue` | `amount_past_due` |
| `CraLoanPaymentHistory` | `balanceRemaining` | `balance_remaining` |
| `CraLoanRegister` | `userToken` | `user_token` |
| `CraLoanRegister` | `loanId` | `loan_id` |
| `CraLoanRegister` | `paymentSchedule` | `payment_schedule` |
| `CraLoanRegister` | `openedDate` | `opened_date` |
| `CraLoanRegister` | `openedWithStatus` | `opened_with_status` |
| `CraLoanRegister` | `loanAmount` | `loan_amount` |
| `CraLoanRegisterApplication` | `applicationId` | `application_id` |
| `CraLoanRegisterApplication` | `applicationDate` | `application_date` |
| `CraLoanUnregister` | `loanId` | `loan_id` |
| `CraLoanUnregister` | `closedWithStatus` | `closed_with_status` |
| `CraLoanUnregisterResponse` | `requestId` | `request_id` |
| `CraLoanUpdate` | `loanId` | `loan_id` |
| `CraLoanUpdate` | `statusHistory` | `status_history` |
| `CraLoanUpdate` | `paymentHistory` | `payment_history` |
| `CraLoansApplicationsRegisterRequest` | `clientId` | `client_id` |
| `CraLoansApplicationsRegisterResponse` | `requestId` | `request_id` |
| `CraLoansRegisterResponse` | `requestId` | `request_id` |
| `CraLoansUnregisterRequest` | `clientId` | `client_id` |
| `CraLoansUpdateRequest` | `clientId` | `client_id` |
| `CraLoansUpdateResponse` | `requestId` | `request_id` |
| `CraMonitoringInsightsGetRequest` | `clientId` | `client_id` |
| `CraMonitoringInsightsGetRequest` | `userId` | `user_id` |
| `CraMonitoringInsightsGetRequest` | `consumerReportPermissiblePurpose` | `consumer_report_permissible_purpose` |
| `CraMonitoringInsightsGetRequest` | `userToken` | `user_token` |
| `CraMonitoringInsightsGetResponse` | `requestId` | `request_id` |
| `CraMonitoringInsightsGetResponse` | `userInsightsId` | `user_insights_id` |
| `CraMonitoringInsightsItem` | `dateGenerated` | `date_generated` |
| `CraMonitoringInsightsItem` | `itemId` | `item_id` |
| `CraMonitoringInsightsItem` | `institutionId` | `institution_id` |
| `CraMonitoringInsightsItem` | `institutionName` | `institution_name` |
| `CraMonitoringInsightsSubscribeRequest` | `clientId` | `client_id` |
| `CraMonitoringInsightsSubscribeRequest` | `userId` | `user_id` |
| `CraMonitoringInsightsSubscribeRequest` | `itemId` | `item_id` |
| `CraMonitoringInsightsSubscribeRequest` | `incomeCategories` | `income_categories` |
| `CraMonitoringInsightsSubscribeRequest` | `userToken` | `user_token` |
| `CraMonitoringInsightsSubscribeResponse` | `requestId` | `request_id` |
| `CraMonitoringInsightsSubscribeResponse` | `subscriptionId` | `subscription_id` |
| `CraMonitoringInsightsUnsubscribeRequest` | `clientId` | `client_id` |
| `CraMonitoringInsightsUnsubscribeRequest` | `subscriptionId` | `subscription_id` |
| `CraMonitoringInsightsUnsubscribeResponse` | `requestId` | `request_id` |
| `CraMonthlyIncomeValues` | `grossIncome` | `gross_income` |
| `CraMonthlyIncomeValues` | `netIncome` | `net_income` |
| `CraNetworkInsightsItem` | `institutionId` | `institution_id` |
| `CraNetworkInsightsItem` | `institutionName` | `institution_name` |
| `CraNetworkInsightsItem` | `itemId` | `item_id` |
| `CraNetworkInsightsReport` | `reportId` | `report_id` |
| `CraNetworkInsightsReport` | `generatedTime` | `generated_time` |
| `CraNetworkInsightsReport` | `networkAttributes` | `network_attributes` |
| `CraPartnerInsights` | `reportId` | `report_id` |
| `CraPartnerInsights` | `generatedTime` | `generated_time` |
| `CraPartnerInsights` | `clientReportId` | `client_report_id` |
| `CraPartnerInsightsBaseFicoScore` | `reasonCodes` | `reason_codes` |
| `CraPartnerInsightsBaseFicoScore` | `reasonCode1` | `reason_code_1` |
| `CraPartnerInsightsBaseFicoScore` | `reasonCode2` | `reason_code_2` |
| `CraPartnerInsightsBaseFicoScore` | `reasonCode3` | `reason_code_3` |
| `CraPartnerInsightsBaseFicoScore` | `reasonCode4` | `reason_code_4` |
| `CraPartnerInsightsBaseFicoScore` | `didInquiriesAdverselyAffectScore` | `did_inquiries_adversely_affect_score` |
| `CraPartnerInsightsBaseFicoScore` | `baseFicoScoreVersion` | `base_fico_score_version` |
| `CraPartnerInsightsCompleteWebhook` | `webhookType` | `webhook_type` |
| `CraPartnerInsightsCompleteWebhook` | `webhookCode` | `webhook_code` |
| `CraPartnerInsightsCompleteWebhook` | `userId` | `user_id` |
| `CraPartnerInsightsErrorWebhook` | `webhookType` | `webhook_type` |
| `CraPartnerInsightsErrorWebhook` | `webhookCode` | `webhook_code` |
| `CraPartnerInsightsErrorWebhook` | `userId` | `user_id` |
| `CraPartnerInsightsFicoInput` | `ficoLenderId` | `fico_lender_id` |
| `CraPartnerInsightsFicoInput` | `lenderApplicationId` | `lender_application_id` |
| `CraPartnerInsightsFicoInput` | `ultraficoScoreRequests` | `ultrafico_score_requests` |
| `CraPartnerInsightsFicoReportCharacteristics` | `numAccounts` | `num_accounts` |
| `CraPartnerInsightsFicoReportCharacteristics` | `avgDailyBalanceOver1Month` | `avg_daily_balance_over_1_month` |
| `CraPartnerInsightsFicoReportCharacteristics` | `avgDailyBalanceOver3Months` | `avg_daily_balance_over_3_months` |
| `CraPartnerInsightsFicoReportCharacteristics` | `avgDailyBalanceOver6Months` | `avg_daily_balance_over_6_months` |
| `CraPartnerInsightsFicoReportCharacteristics` | `avgDailyBalanceOver12Months` | `avg_daily_balance_over_12_months` |
| `CraPartnerInsightsFicoReportCharacteristics` | `daysSinceEarliestTx` | `days_since_earliest_tx` |
| `CraPartnerInsightsFicoReportCharacteristics` | `daysSinceMostRecentNegativeEndingBalance` | `days_since_most_recent_negative_ending_balance` |
| `CraPartnerInsightsFicoReportCharacteristics` | `daysSinceMostRecentInsufficientFundsFeeDebitTx` | `days_since_most_recent_insufficient_funds_fee_debit_tx` |
| `CraPartnerInsightsFicoReportCharacteristics` | `totNumberDaysWithNegativeBalanceOver1Month` | `tot_number_days_with_negative_balance_over_1_month` |
| `CraPartnerInsightsFicoReportCharacteristics` | `totNumberDaysWithNegativeBalanceOver3Months` | `tot_number_days_with_negative_balance_over_3_months` |
| `CraPartnerInsightsFicoReportCharacteristics` | `totNumberDaysWithNegativeBalanceOver6Months` | `tot_number_days_with_negative_balance_over_6_months` |
| `CraPartnerInsightsFicoReportCharacteristics` | `totNumberDaysWithNegativeBalanceOver12Months` | `tot_number_days_with_negative_balance_over_12_months` |
| `CraPartnerInsightsFicoReportCharacteristics` | `daysSinceMostRecentTx` | `days_since_most_recent_tx` |
| `CraPartnerInsightsFicoReportCharacteristics` | `daysWithTxOver1Month` | `days_with_tx_over_1_month` |
| `CraPartnerInsightsFicoReportCharacteristics` | `daysWithTxOver3Months` | `days_with_tx_over_3_months` |
| `CraPartnerInsightsFicoReportCharacteristics` | `daysWithTxOver6Months` | `days_with_tx_over_6_months` |
| `CraPartnerInsightsFicoReportCharacteristics` | `daysWithTxOver12Months` | `days_with_tx_over_12_months` |
| `CraPartnerInsightsFicoReportCharacteristics` | `totCurrentBalances` | `tot_current_balances` |
| `CraPartnerInsightsFicoReportCharacteristics` | `numCheckingAccounts` | `num_checking_accounts` |
| `CraPartnerInsightsFicoReportCharacteristics` | `numMoneyMarketAccounts` | `num_money_market_accounts` |
| `CraPartnerInsightsFicoReportCharacteristics` | `numSavingsAccounts` | `num_savings_accounts` |
| `CraPartnerInsightsFicoResults` | `lenderApplicationId` | `lender_application_id` |
| `CraPartnerInsightsFicoResults` | `ultraficoScoreResults` | `ultrafico_score_results` |
| `CraPartnerInsightsFicoResults` | `reportCharacteristics` | `report_characteristics` |
| `CraPartnerInsightsGetRequest` | `clientId` | `client_id` |
| `CraPartnerInsightsGetRequest` | `userToken` | `user_token` |
| `CraPartnerInsightsGetRequest` | `userTier` | `user_tier` |
| `CraPartnerInsightsGetResponse` | `requestId` | `request_id` |
| `CraPartnerInsightsItem` | `institutionId` | `institution_id` |
| `CraPartnerInsightsItem` | `institutionName` | `institution_name` |
| `CraPartnerInsightsItem` | `itemId` | `item_id` |
| `CraPartnerInsightsItemAccount` | `accountId` | `account_id` |
| `CraPartnerInsightsItemAccount` | `officialName` | `official_name` |
| `CraPartnerInsightsItemAccountMetadata` | `startDate` | `start_date` |
| `CraPartnerInsightsItemAccountMetadata` | `endDate` | `end_date` |
| `CraPartnerInsightsPrism` | `cashScore` | `cash_score` |
| `CraPartnerInsightsPrism` | `firstDetect` | `first_detect` |
| `CraPartnerInsightsUltraFicoScore` | `ultraficoScoreVersion` | `ultrafico_score_version` |
| `CraPartnerInsightsUltraFicoScore` | `negativeReasonCodes` | `negative_reason_codes` |
| `CraPartnerInsightsUltraFicoScore` | `positiveReasonCodes` | `positive_reason_codes` |
| `CraPartnerInsightsUltraFicoScore` | `reasonCode1` | `reason_code_1` |
| `CraPartnerInsightsUltraFicoScore` | `reasonCode2` | `reason_code_2` |
| `CraPartnerInsightsUltraFicoScore` | `reasonCode3` | `reason_code_3` |
| `CraPartnerInsightsUltraFicoScore` | `reasonCode4` | `reason_code_4` |
| `CraPartnerInsightsUltraFicoScore` | `positiveReasonCode1` | `positive_reason_code_1` |
| `CraPartnerInsightsUltraFicoScore` | `positiveReasonCode2` | `positive_reason_code_2` |
| `CraPartnerInsightsUltraFicoScore` | `positiveReasonCode3` | `positive_reason_code_3` |
| `CraPartnerInsightsUltraFicoScore` | `positiveReasonCode4` | `positive_reason_code_4` |
| `CraPartnerInsightsUltraFicoScore` | `didInquiriesAdverselyAffectScore` | `did_inquiries_adversely_affect_score` |
| `CraPartnerInsightsUltraFicoScoreRequest` | `ultraficoScoreVersion` | `ultrafico_score_version` |
| `CraPartnerInsightsUltraFicoScoreRequest` | `ficoScoringRequestId` | `fico_scoring_request_id` |
| `CraPartnerInsightsUltraFicoScoreRequest` | `requestCorrelationId` | `request_correlation_id` |
| `CraPartnerInsightsUltraFicoScoreRequest` | `baseFicoScore` | `base_fico_score` |
| `CraPartnerInsightsUltraFicoScoreResult` | `requestCorrelationId` | `request_correlation_id` |
| `CraPartnerInsightsUltraFicoScoreResult` | `ficoScoringRequestId` | `fico_scoring_request_id` |
| `CraPartnerInsightsUltraFicoScoreResult` | `ultraficoScore` | `ultrafico_score` |
| `CraPartnerInsightsUltraFicoScoreResult` | `errorReason` | `error_reason` |
| `CraPartnerInsightsUltraFicoScoreResult` | `exclusionCode` | `exclusion_code` |
| `CraPredictionInterval` | `lowerBound` | `lower_bound` |
| `CraPredictionInterval` | `upperBound` | `upper_bound` |
| `CraReportGetReport` | `retrievedTime` | `retrieved_time` |
| `CraReportGetReport` | `decisionStage` | `decision_stage` |
| `CraReportGetReport` | `consumerReportPermissiblePurpose` | `consumer_report_permissible_purpose` |
| `CraReportGetRequest` | `clientId` | `client_id` |
| `CraReportGetRequest` | `userId` | `user_id` |
| `CraReportGetRequest` | `decisionStage` | `decision_stage` |
| `CraReportGetRequest` | `consumerReportPermissiblePurpose` | `consumer_report_permissible_purpose` |
| `CraReportGetResponse` | `requestId` | `request_id` |
| `CraReportGetResponse` | `userId` | `user_id` |
| `CraReportWarning` | `warningType` | `warning_type` |
| `CraReportWarning` | `warningCode` | `warning_code` |
| `CraUpgradeFailedWebhook` | `webhookType` | `webhook_type` |
| `CraUpgradeFailedWebhook` | `webhookCode` | `webhook_code` |
| `CraUpgradeFailedWebhook` | `userId` | `user_id` |
| `CraUpgradeFailedWebhook` | `itemIds` | `item_ids` |
| `CraUserCheckReportFailedWebhook` | `webhookType` | `webhook_type` |
| `CraUserCheckReportFailedWebhook` | `webhookCode` | `webhook_code` |
| `CraUserCheckReportFailedWebhook` | `userId` | `user_id` |
| `CraUserCheckReportFailedWebhook` | `repairableItems` | `repairable_items` |
| `CraUserCheckReportFailedWebhook` | `failedProducts` | `failed_products` |
| `CraUserCheckReportFailedWebhook` | `itemIds` | `item_ids` |
| `CraUserCheckReportReadyWebhook` | `webhookType` | `webhook_type` |
| `CraUserCheckReportReadyWebhook` | `webhookCode` | `webhook_code` |
| `CraUserCheckReportReadyWebhook` | `userId` | `user_id` |
| `CraUserCheckReportReadyWebhook` | `successfulProducts` | `successful_products` |
| `CraUserCheckReportReadyWebhook` | `failedProducts` | `failed_products` |
| `CraUserCheckReportReadyWebhook` | `itemIds` | `item_ids` |
| `CraVerificationIncomeAccount` | `accountId` | `account_id` |
| `CraVerificationIncomeAccount` | `officialName` | `official_name` |
| `CraVerificationIncomeItem` | `itemId` | `item_id` |
| `CraVerificationIncomeItem` | `lastUpdatedTime` | `last_updated_time` |
| `CraVerificationIncomeItem` | `institutionId` | `institution_id` |
| `CraVerificationIncomeItem` | `institutionName` | `institution_name` |
| `CraVerificationIncomeMetrics` | `isoCurrencyCode` | `iso_currency_code` |
| `CraVerificationIncomeMetrics` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CraVerificationIncomeProvider` | `isNormalized` | `is_normalized` |
| `CraVerificationIncomeReport` | `generatedTime` | `generated_time` |
| `CraVerificationIncomeReport` | `daysRequested` | `days_requested` |
| `CraVerificationIncomeReport` | `userSummary` | `user_summary` |
| `CraVerificationIncomeReport` | `incomeStreams` | `income_streams` |
| `CraVerificationIncomeStream` | `incomeStreamId` | `income_stream_id` |
| `CraVerificationIncomeStream` | `startDate` | `start_date` |
| `CraVerificationIncomeStream` | `endDate` | `end_date` |
| `CraVerificationIncomeStream` | `incomeMetrics` | `income_metrics` |
| `CraVerificationIncomeStreamInsights` | `incomeCategory` | `income_category` |
| `CraVerificationIncomeStreamInsights` | `payFrequency` | `pay_frequency` |
| `CraVerificationIncomeStreamInsights` | `incomeProvider` | `income_provider` |
| `CraVerificationIncomeStreamInsights` | `nextPayment` | `next_payment` |
| `CraVerificationIncomeTransaction` | `transactionId` | `transaction_id` |
| `CraVerificationIncomeTransaction` | `itemId` | `item_id` |
| `CraVerificationIncomeTransaction` | `accountId` | `account_id` |
| `CraVerificationIncomeTransaction` | `originalDescription` | `original_description` |
| `CraVerificationIncomeTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `CraVerificationIncomeTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CraVerificationIncomeTransactionOutlier` | `isOutlier` | `is_outlier` |
| `CraVerificationIncomeUserSummary` | `incomeMetrics` | `income_metrics` |
| `CraVerificationIncomeValues` | `grossIncome` | `gross_income` |
| `CraVerificationIncomeValues` | `netIncome` | `net_income` |
| `CraVerificationReport` | `reportId` | `report_id` |
| `CraVerificationReport` | `gseReferenceId` | `gse_reference_id` |
| `CraVerificationReport` | `clientReportId` | `client_report_id` |
| `CraVerificationReport` | `employmentRefresh` | `employment_refresh` |
| `CraVoaReport` | `generatedTime` | `generated_time` |
| `CraVoaReport` | `daysRequested` | `days_requested` |
| `CraVoaReportAccount` | `accountId` | `account_id` |
| `CraVoaReportAccount` | `consumerDisputes` | `consumer_disputes` |
| `CraVoaReportAccount` | `officialName` | `official_name` |
| `CraVoaReportAccount` | `daysAvailable` | `days_available` |
| `CraVoaReportAccount` | `transactionsInsights` | `transactions_insights` |
| `CraVoaReportAccount` | `ownershipType` | `ownership_type` |
| `CraVoaReportAccountBalances` | `isoCurrencyCode` | `iso_currency_code` |
| `CraVoaReportAccountBalances` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CraVoaReportAccountBalances` | `historicalBalances` | `historical_balances` |
| `CraVoaReportAccountBalances` | `averageBalance30Days` | `average_balance_30_days` |
| `CraVoaReportAccountBalances` | `averageBalance60Days` | `average_balance_60_days` |
| `CraVoaReportAccountBalances` | `nsfOverdraftTransactionsCount` | `nsf_overdraft_transactions_count` |
| `CraVoaReportAccountHistoricalBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `CraVoaReportAccountHistoricalBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CraVoaReportAttributes` | `totalInflowAmount` | `total_inflow_amount` |
| `CraVoaReportAttributes` | `totalOutflowAmount` | `total_outflow_amount` |
| `CraVoaReportItem` | `institutionName` | `institution_name` |
| `CraVoaReportItem` | `institutionId` | `institution_id` |
| `CraVoaReportItem` | `itemId` | `item_id` |
| `CraVoaReportItem` | `lastUpdateTime` | `last_update_time` |
| `CraVoaReportTransactionsInsights` | `allTransactions` | `all_transactions` |
| `CraVoaReportTransactionsInsights` | `endDate` | `end_date` |
| `CraVoaReportTransactionsInsights` | `startDate` | `start_date` |
| `Credit1099` | `documentId` | `document_id` |
| `Credit1099` | `documentMetadata` | `document_metadata` |
| `Credit1099` | `form1099Type` | `form_1099_type` |
| `Credit1099` | `taxYear` | `tax_year` |
| `Credit1099` | `otherIncome` | `other_income` |
| `Credit1099` | `federalIncomeTaxWithheld` | `federal_income_tax_withheld` |
| `Credit1099` | `fishingBoatProceeds` | `fishing_boat_proceeds` |
| `Credit1099` | `medicalAndHealthcarePayments` | `medical_and_healthcare_payments` |
| `Credit1099` | `nonemployeeCompensation` | `nonemployee_compensation` |
| `Credit1099` | `substitutePaymentsInLieuOfDividendsOrInterest` | `substitute_payments_in_lieu_of_dividends_or_interest` |
| `Credit1099` | `payerMadeDirectSalesOf5000OrMoreOfConsumerProductsToBuyer` | `payer_made_direct_sales_of_5000_or_more_of_consumer_products_to_buyer` |
| `Credit1099` | `cropInsuranceProceeds` | `crop_insurance_proceeds` |
| `Credit1099` | `excessGoldenParachutePayments` | `excess_golden_parachute_payments` |
| `Credit1099` | `grossProceedsPaidToAnAttorney` | `gross_proceeds_paid_to_an_attorney` |
| `Credit1099` | `section409ADeferrals` | `section_409a_deferrals` |
| `Credit1099` | `section409AIncome` | `section_409a_income` |
| `Credit1099` | `stateTaxWithheld` | `state_tax_withheld` |
| `Credit1099` | `stateTaxWithheldLower` | `state_tax_withheld_lower` |
| `Credit1099` | `payerStateNumber` | `payer_state_number` |
| `Credit1099` | `payerStateNumberLower` | `payer_state_number_lower` |
| `Credit1099` | `stateIncome` | `state_income` |
| `Credit1099` | `stateIncomeLower` | `state_income_lower` |
| `Credit1099` | `transactionsReported` | `transactions_reported` |
| `Credit1099` | `pseName` | `pse_name` |
| `Credit1099` | `pseTelephoneNumber` | `pse_telephone_number` |
| `Credit1099` | `grossAmount` | `gross_amount` |
| `Credit1099` | `cardNotPresentTransaction` | `card_not_present_transaction` |
| `Credit1099` | `merchantCategoryCode` | `merchant_category_code` |
| `Credit1099` | `numberOfPaymentTransactions` | `number_of_payment_transactions` |
| `Credit1099` | `januaryAmount` | `january_amount` |
| `Credit1099` | `februaryAmount` | `february_amount` |
| `Credit1099` | `marchAmount` | `march_amount` |
| `Credit1099` | `aprilAmount` | `april_amount` |
| `Credit1099` | `mayAmount` | `may_amount` |
| `Credit1099` | `juneAmount` | `june_amount` |
| `Credit1099` | `julyAmount` | `july_amount` |
| `Credit1099` | `augustAmount` | `august_amount` |
| `Credit1099` | `septemberAmount` | `september_amount` |
| `Credit1099` | `octoberAmount` | `october_amount` |
| `Credit1099` | `novemberAmount` | `november_amount` |
| `Credit1099` | `decemberAmount` | `december_amount` |
| `Credit1099` | `primaryState` | `primary_state` |
| `Credit1099` | `secondaryState` | `secondary_state` |
| `Credit1099` | `primaryStateId` | `primary_state_id` |
| `Credit1099` | `secondaryStateId` | `secondary_state_id` |
| `Credit1099` | `primaryStateIncomeTax` | `primary_state_income_tax` |
| `Credit1099` | `secondaryStateIncomeTax` | `secondary_state_income_tax` |
| `Credit1099Payer` | `telephoneNumber` | `telephone_number` |
| `Credit1099Recipient` | `accountNumber` | `account_number` |
| `Credit1099Recipient` | `factaFilingRequirement` | `facta_filing_requirement` |
| `Credit1099Recipient` | `secondTinExists` | `second_tin_exists` |
| `CreditAmountWithCurrency` | `isoCurrencyCode` | `iso_currency_code` |
| `CreditAmountWithCurrency` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CreditAuditCopyTokenCreateRequest` | `clientId` | `client_id` |
| `CreditAuditCopyTokenCreateRequest` | `reportTokens` | `report_tokens` |
| `CreditAuditCopyTokenCreateResponse` | `auditCopyToken` | `audit_copy_token` |
| `CreditAuditCopyTokenCreateResponse` | `requestId` | `request_id` |
| `CreditAuditCopyTokenRemoveRequest` | `clientId` | `client_id` |
| `CreditAuditCopyTokenRemoveRequest` | `auditCopyToken` | `audit_copy_token` |
| `CreditAuditCopyTokenRemoveResponse` | `requestId` | `request_id` |
| `CreditAuditCopyTokenUpdateRequest` | `clientId` | `client_id` |
| `CreditAuditCopyTokenUpdateRequest` | `auditCopyToken` | `audit_copy_token` |
| `CreditAuditCopyTokenUpdateRequest` | `reportTokens` | `report_tokens` |
| `CreditAuditCopyTokenUpdateResponse` | `requestId` | `request_id` |
| `CreditBankEmployment` | `bankEmploymentId` | `bank_employment_id` |
| `CreditBankEmployment` | `accountId` | `account_id` |
| `CreditBankEmployment` | `latestDepositDate` | `latest_deposit_date` |
| `CreditBankEmployment` | `earliestDepositDate` | `earliest_deposit_date` |
| `CreditBankEmploymentGetRequest` | `clientId` | `client_id` |
| `CreditBankEmploymentGetRequest` | `userToken` | `user_token` |
| `CreditBankEmploymentGetResponse` | `bankEmploymentReports` | `bank_employment_reports` |
| `CreditBankEmploymentGetResponse` | `requestId` | `request_id` |
| `CreditBankEmploymentItem` | `itemId` | `item_id` |
| `CreditBankEmploymentItem` | `lastUpdatedTime` | `last_updated_time` |
| `CreditBankEmploymentItem` | `institutionId` | `institution_id` |
| `CreditBankEmploymentItem` | `institutionName` | `institution_name` |
| `CreditBankEmploymentItem` | `bankEmployments` | `bank_employments` |
| `CreditBankEmploymentItem` | `bankEmploymentAccounts` | `bank_employment_accounts` |
| `CreditBankEmploymentReport` | `bankEmploymentReportId` | `bank_employment_report_id` |
| `CreditBankEmploymentReport` | `generatedTime` | `generated_time` |
| `CreditBankEmploymentReport` | `daysRequested` | `days_requested` |
| `CreditBankEmploymentWarning` | `warningType` | `warning_type` |
| `CreditBankEmploymentWarning` | `warningCode` | `warning_code` |
| `CreditBankIncome` | `bankIncomeId` | `bank_income_id` |
| `CreditBankIncome` | `generatedTime` | `generated_time` |
| `CreditBankIncome` | `daysRequested` | `days_requested` |
| `CreditBankIncome` | `bankIncomeSummary` | `bank_income_summary` |
| `CreditBankIncomeAccount` | `accountId` | `account_id` |
| `CreditBankIncomeAccount` | `officialName` | `official_name` |
| `CreditBankIncomeCause` | `errorType` | `error_type` |
| `CreditBankIncomeCause` | `errorCode` | `error_code` |
| `CreditBankIncomeCause` | `errorMessage` | `error_message` |
| `CreditBankIncomeCause` | `displayMessage` | `display_message` |
| `CreditBankIncomeCause` | `itemId` | `item_id` |
| `CreditBankIncomeGetRequest` | `clientId` | `client_id` |
| `CreditBankIncomeGetRequest` | `userToken` | `user_token` |
| `CreditBankIncomeGetRequest` | `userId` | `user_id` |
| `CreditBankIncomeGetResponse` | `bankIncome` | `bank_income` |
| `CreditBankIncomeGetResponse` | `requestId` | `request_id` |
| `CreditBankIncomeHistoricalSummary` | `totalAmount` | `total_amount` |
| `CreditBankIncomeHistoricalSummary` | `isoCurrencyCode` | `iso_currency_code` |
| `CreditBankIncomeHistoricalSummary` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CreditBankIncomeHistoricalSummary` | `totalAmounts` | `total_amounts` |
| `CreditBankIncomeHistoricalSummary` | `startDate` | `start_date` |
| `CreditBankIncomeHistoricalSummary` | `endDate` | `end_date` |
| `CreditBankIncomeItem` | `bankIncomeAccounts` | `bank_income_accounts` |
| `CreditBankIncomeItem` | `bankIncomeSources` | `bank_income_sources` |
| `CreditBankIncomeItem` | `lastUpdatedTime` | `last_updated_time` |
| `CreditBankIncomeItem` | `institutionId` | `institution_id` |
| `CreditBankIncomeItem` | `institutionName` | `institution_name` |
| `CreditBankIncomeItem` | `itemId` | `item_id` |
| `CreditBankIncomePdfGetRequest` | `clientId` | `client_id` |
| `CreditBankIncomePdfGetRequest` | `userToken` | `user_token` |
| `CreditBankIncomePdfGetRequest` | `userId` | `user_id` |
| `CreditBankIncomeRefreshRequest` | `clientId` | `client_id` |
| `CreditBankIncomeRefreshRequest` | `userToken` | `user_token` |
| `CreditBankIncomeRefreshRequest` | `userId` | `user_id` |
| `CreditBankIncomeRefreshRequestOptions` | `daysRequested` | `days_requested` |
| `CreditBankIncomeRefreshResponse` | `requestId` | `request_id` |
| `CreditBankIncomeSource` | `incomeSourceId` | `income_source_id` |
| `CreditBankIncomeSource` | `incomeDescription` | `income_description` |
| `CreditBankIncomeSource` | `incomeCategory` | `income_category` |
| `CreditBankIncomeSource` | `accountId` | `account_id` |
| `CreditBankIncomeSource` | `startDate` | `start_date` |
| `CreditBankIncomeSource` | `endDate` | `end_date` |
| `CreditBankIncomeSource` | `payFrequency` | `pay_frequency` |
| `CreditBankIncomeSource` | `totalAmount` | `total_amount` |
| `CreditBankIncomeSource` | `transactionCount` | `transaction_count` |
| `CreditBankIncomeSource` | `historicalSummary` | `historical_summary` |
| `CreditBankIncomeSummary` | `totalAmount` | `total_amount` |
| `CreditBankIncomeSummary` | `isoCurrencyCode` | `iso_currency_code` |
| `CreditBankIncomeSummary` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CreditBankIncomeSummary` | `totalAmounts` | `total_amounts` |
| `CreditBankIncomeSummary` | `startDate` | `start_date` |
| `CreditBankIncomeSummary` | `endDate` | `end_date` |
| `CreditBankIncomeSummary` | `incomeSourcesCount` | `income_sources_count` |
| `CreditBankIncomeSummary` | `incomeCategoriesCount` | `income_categories_count` |
| `CreditBankIncomeSummary` | `incomeTransactionsCount` | `income_transactions_count` |
| `CreditBankIncomeSummary` | `historicalSummary` | `historical_summary` |
| `CreditBankIncomeTransaction` | `originalDescription` | `original_description` |
| `CreditBankIncomeTransaction` | `transactionId` | `transaction_id` |
| `CreditBankIncomeTransaction` | `checkNumber` | `check_number` |
| `CreditBankIncomeTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `CreditBankIncomeTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CreditBankIncomeWarning` | `warningType` | `warning_type` |
| `CreditBankIncomeWarning` | `warningCode` | `warning_code` |
| `CreditBankIncomeWebhookUpdateRequest` | `clientId` | `client_id` |
| `CreditBankIncomeWebhookUpdateRequest` | `userToken` | `user_token` |
| `CreditBankIncomeWebhookUpdateRequest` | `userId` | `user_id` |
| `CreditBankIncomeWebhookUpdateRequest` | `enableWebhooks` | `enable_webhooks` |
| `CreditBankIncomeWebhookUpdateResponse` | `requestId` | `request_id` |
| `CreditBankStatementUploadAccountOwnerAddress` | `postalCode` | `postal_code` |
| `CreditBankStatementUploadBankAccount` | `bankName` | `bank_name` |
| `CreditBankStatementUploadBankAccount` | `accountType` | `account_type` |
| `CreditBankStatementUploadBankAccount` | `accountNumber` | `account_number` |
| `CreditBankStatementUploadBankAccount` | `accountId` | `account_id` |
| `CreditBankStatementUploadBankAccountPeriod` | `startDate` | `start_date` |
| `CreditBankStatementUploadBankAccountPeriod` | `endDate` | `end_date` |
| `CreditBankStatementUploadBankAccountPeriod` | `startingBalance` | `starting_balance` |
| `CreditBankStatementUploadBankAccountPeriod` | `endingBalance` | `ending_balance` |
| `CreditBankStatementUploadItem` | `itemId` | `item_id` |
| `CreditBankStatementUploadItem` | `bankStatements` | `bank_statements` |
| `CreditBankStatementUploadItem` | `updatedAt` | `updated_at` |
| `CreditBankStatementUploadObject` | `documentMetadata` | `document_metadata` |
| `CreditBankStatementUploadObject` | `documentId` | `document_id` |
| `CreditBankStatementUploadObject` | `bankAccounts` | `bank_accounts` |
| `CreditBankStatementUploadTransaction` | `originalDescription` | `original_description` |
| `CreditBankStatementUploadTransaction` | `accountId` | `account_id` |
| `CreditBankStatementsUploadsGetRequest` | `clientId` | `client_id` |
| `CreditBankStatementsUploadsGetRequest` | `userToken` | `user_token` |
| `CreditBankStatementsUploadsGetRequest` | `userId` | `user_id` |
| `CreditBankStatementsUploadsGetRequestOptions` | `itemIds` | `item_ids` |
| `CreditBankStatementsUploadsGetResponse` | `requestId` | `request_id` |
| `CreditCardLiability` | `accountId` | `account_id` |
| `CreditCardLiability` | `isOverdue` | `is_overdue` |
| `CreditCardLiability` | `lastPaymentAmount` | `last_payment_amount` |
| `CreditCardLiability` | `lastPaymentDate` | `last_payment_date` |
| `CreditCardLiability` | `lastStatementIssueDate` | `last_statement_issue_date` |
| `CreditCardLiability` | `lastStatementBalance` | `last_statement_balance` |
| `CreditCardLiability` | `minimumPaymentAmount` | `minimum_payment_amount` |
| `CreditCardLiability` | `nextPaymentDueDate` | `next_payment_due_date` |
| `CreditDocumentMetadata` | `documentType` | `document_type` |
| `CreditDocumentMetadata` | `downloadUrl` | `download_url` |
| `CreditDocumentMetadata` | `pageCount` | `page_count` |
| `CreditDocumentMetadata` | `errorMessage` | `error_message` |
| `CreditEmploymentGetRequest` | `clientId` | `client_id` |
| `CreditEmploymentGetRequest` | `userToken` | `user_token` |
| `CreditEmploymentGetResponse` | `requestId` | `request_id` |
| `CreditEmploymentItem` | `itemId` | `item_id` |
| `CreditEmploymentItem` | `employmentReportToken` | `employment_report_token` |
| `CreditEmploymentVerification` | `accountId` | `account_id` |
| `CreditEmploymentVerification` | `startDate` | `start_date` |
| `CreditEmploymentVerification` | `endDate` | `end_date` |
| `CreditEmploymentVerification` | `platformIds` | `platform_ids` |
| `CreditEmploymentVerification` | `employeeType` | `employee_type` |
| `CreditEmploymentVerification` | `lastPaystubDate` | `last_paystub_date` |
| `CreditFilter` | `accountSubtypes` | `account_subtypes` |
| `CreditFreddieMacAsset` | `assetDetail` | `ASSET_DETAIL` |
| `CreditFreddieMacAsset` | `assetOwners` | `ASSET_OWNERS` |
| `CreditFreddieMacAsset` | `assetHolder` | `ASSET_HOLDER` |
| `CreditFreddieMacAsset` | `assetHoldings` | `ASSET_HOLDINGS` |
| `CreditFreddieMacAsset` | `assetTransactions` | `ASSET_TRANSACTIONS` |
| `CreditFreddieMacAsset` | `validationSources` | `VALIDATION_SOURCES` |
| `CreditFreddieMacAssetTransaction` | `assetTransactionDetail` | `ASSET_TRANSACTION_DETAIL` |
| `CreditFreddieMacAssetTransaction` | `assetTransactionDescription` | `ASSET_TRANSACTION_DESCRIPTION` |
| `CreditFreddieMacAssetTransactions` | `assetTransaction` | `ASSET_TRANSACTION` |
| `CreditFreddieMacAssets` | `asset` | `ASSET` |
| `CreditFreddieMacIndividualName` | `firstName` | `FirstName` |
| `CreditFreddieMacIndividualName` | `lastName` | `LastName` |
| `CreditFreddieMacIndividualName` | `middleName` | `MiddleName` |
| `CreditFreddieMacLoan` | `loanIdentifiers` | `LOAN_IDENTIFIERS` |
| `CreditFreddieMacLoan` | `loanRoleType` | `LoanRoleType` |
| `CreditFreddieMacLoanIdentifiers` | `loanIdentifier` | `LOAN_IDENTIFIER` |
| `CreditFreddieMacLoans` | `loan` | `LOAN` |
| `CreditFreddieMacParties` | `party` | `PARTY` |
| `CreditFreddieMacParty` | `individual` | `INDIVIDUAL` |
| `CreditFreddieMacParty` | `roles` | `ROLES` |
| `CreditFreddieMacParty` | `taxpayerIdentifiers` | `TAXPAYER_IDENTIFIERS` |
| `CreditFreddieMacPartyIndividual` | `name` | `NAME` |
| `CreditFreddieMacReportingInformation` | `reportDateTime` | `ReportDateTime` |
| `CreditFreddieMacReportingInformation` | `reportIdentifierType` | `ReportIdentifierType` |
| `CreditFreddieMacReportingInformation` | `reportingInformationParentIdentifier` | `ReportingInformationParentIdentifier` |
| `CreditFreddieMacReportingInformation` | `reportingInformationIdentifier` | `ReportingInformationIdentifier` |
| `CreditFreddieMacReportsGetRequest` | `auditCopyToken` | `audit_copy_token` |
| `CreditFreddieMacReportsGetRequest` | `clientId` | `client_id` |
| `CreditFreddieMacReportsGetResponse` | `deal` | `DEAL` |
| `CreditFreddieMacReportsGetResponse` | `requestId` | `request_id` |
| `CreditFreddieMacReportsGetResponse` | `schemaVersion` | `SchemaVersion` |
| `CreditFreddieMacService` | `verificationOfAsset` | `VERIFICATION_OF_ASSET` |
| `CreditFreddieMacService` | `statuses` | `STATUSES` |
| `CreditFreddieMacServices` | `service` | `SERVICE` |
| `CreditFreddieMacVerificationOfAsset` | `reportingInformation` | `REPORTING_INFORMATION` |
| `CreditFreddieMacVerificationOfAsset` | `serviceProductFulfillment` | `SERVICE_PRODUCT_FULFILLMENT` |
| `CreditFreddieMacVerificationOfAsset` | `verificationOfAssetResponse` | `VERIFICATION_OF_ASSET_RESPONSE` |
| `CreditFreddieMacVerificationOfAssetResponse` | `assets` | `ASSETS` |
| `CreditFreddieMacVerificationOfAssetsDeal` | `loans` | `LOANS` |
| `CreditFreddieMacVerificationOfAssetsDeal` | `parties` | `PARTIES` |
| `CreditFreddieMacVerificationOfAssetsDeal` | `services` | `SERVICES` |
| `CreditI20` | `documentId` | `document_id` |
| `CreditI20` | `documentMetadata` | `document_metadata` |
| `CreditI20` | `personalFunds` | `personal_funds` |
| `CreditI20` | `onCampusEmployment` | `on_campus_employment` |
| `CreditI20` | `fundsFromThisSchool` | `funds_from_this_school` |
| `CreditI20` | `studentsFundingTotal` | `students_funding_total` |
| `CreditI20` | `fundsFromAnotherSource` | `funds_from_another_source` |
| `CreditI20` | `estimatedAverageCostsTotal` | `estimated_average_costs_total` |
| `CreditI20` | `estimatedAverageLivingExpenses` | `estimated_average_living_expenses` |
| `CreditI20` | `studentsFundingPeriodMonths` | `students_funding_period_months` |
| `CreditI20` | `estimatedAverageCostsPeriodMonths` | `estimated_average_costs_period_months` |
| `CreditI20Student` | `givenName` | `given_name` |
| `CreditI20Student` | `surnamePrimaryName` | `surname_primary_name` |
| `CreditI20Student` | `passportName` | `passport_name` |
| `CreditI20Student` | `preferredName` | `preferred_name` |
| `CreditI20Student` | `schoolName` | `school_name` |
| `CreditI20Student` | `programStartDate` | `program_start_date` |
| `CreditI20Student` | `programEndDate` | `program_end_date` |
| `CreditPayStub` | `documentId` | `document_id` |
| `CreditPayStub` | `documentMetadata` | `document_metadata` |
| `CreditPayStub` | `netPay` | `net_pay` |
| `CreditPayStub` | `payPeriodDetails` | `pay_period_details` |
| `CreditPayStubAddress` | `postalCode` | `postal_code` |
| `CreditPayStubEmployee` | `maritalStatus` | `marital_status` |
| `CreditPayStubEmployee` | `taxpayerId` | `taxpayer_id` |
| `CreditPayStubNetPay` | `currentAmount` | `current_amount` |
| `CreditPayStubNetPay` | `isoCurrencyCode` | `iso_currency_code` |
| `CreditPayStubNetPay` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `CreditPayStubNetPay` | `ytdAmount` | `ytd_amount` |
| `CreditPayrollIncomeGetRequest` | `clientId` | `client_id` |
| `CreditPayrollIncomeGetRequest` | `userToken` | `user_token` |
| `CreditPayrollIncomeGetRequest` | `userId` | `user_id` |
| `CreditPayrollIncomeGetRequestOptions` | `itemIds` | `item_ids` |
| `CreditPayrollIncomeGetResponse` | `requestId` | `request_id` |
| `CreditPayrollIncomeParsingConfigUpdateRequest` | `clientId` | `client_id` |
| `CreditPayrollIncomeParsingConfigUpdateRequest` | `userToken` | `user_token` |
| `CreditPayrollIncomeParsingConfigUpdateRequest` | `userId` | `user_id` |
| `CreditPayrollIncomeParsingConfigUpdateRequest` | `itemId` | `item_id` |
| `CreditPayrollIncomeParsingConfigUpdateRequest` | `parsingConfig` | `parsing_config` |
| `CreditPayrollIncomeParsingConfigUpdateResponse` | `requestId` | `request_id` |
| `CreditPayrollIncomePrecheckRequest` | `clientId` | `client_id` |
| `CreditPayrollIncomePrecheckRequest` | `userToken` | `user_token` |
| `CreditPayrollIncomePrecheckRequest` | `userId` | `user_id` |
| `CreditPayrollIncomePrecheckRequest` | `accessTokens` | `access_tokens` |
| `CreditPayrollIncomePrecheckRequest` | `usMilitaryInfo` | `us_military_info` |
| `CreditPayrollIncomePrecheckRequest` | `payrollInstitution` | `payroll_institution` |
| `CreditPayrollIncomePrecheckResponse` | `requestId` | `request_id` |
| `CreditPayrollIncomeRefreshRequest` | `clientId` | `client_id` |
| `CreditPayrollIncomeRefreshRequest` | `userToken` | `user_token` |
| `CreditPayrollIncomeRefreshRequest` | `userId` | `user_id` |
| `CreditPayrollIncomeRefreshRequestOptions` | `itemIds` | `item_ids` |
| `CreditPayrollIncomeRefreshResponse` | `requestId` | `request_id` |
| `CreditPayrollIncomeRefreshResponse` | `verificationRefreshStatus` | `verification_refresh_status` |
| `CreditPayrollIncomeRiskSignalsGetRequest` | `clientId` | `client_id` |
| `CreditPayrollIncomeRiskSignalsGetRequest` | `userToken` | `user_token` |
| `CreditPayrollIncomeRiskSignalsGetRequest` | `userId` | `user_id` |
| `CreditPayrollIncomeRiskSignalsGetResponse` | `requestId` | `request_id` |
| `CreditPlatformIds` | `employeeId` | `employee_id` |
| `CreditPlatformIds` | `payrollId` | `payroll_id` |
| `CreditPlatformIds` | `positionId` | `position_id` |
| `CreditRelayCreateRequest` | `clientId` | `client_id` |
| `CreditRelayCreateRequest` | `reportTokens` | `report_tokens` |
| `CreditRelayCreateRequest` | `secondaryClientId` | `secondary_client_id` |
| `CreditRelayCreateResponse` | `relayToken` | `relay_token` |
| `CreditRelayCreateResponse` | `requestId` | `request_id` |
| `CreditRelayGetRequest` | `clientId` | `client_id` |
| `CreditRelayGetRequest` | `relayToken` | `relay_token` |
| `CreditRelayGetRequest` | `reportType` | `report_type` |
| `CreditRelayGetRequest` | `includeInsights` | `include_insights` |
| `CreditRelayPdfGetRequest` | `clientId` | `client_id` |
| `CreditRelayPdfGetRequest` | `relayToken` | `relay_token` |
| `CreditRelayPdfGetRequest` | `reportType` | `report_type` |
| `CreditRelayRefreshRequest` | `clientId` | `client_id` |
| `CreditRelayRefreshRequest` | `relayToken` | `relay_token` |
| `CreditRelayRefreshRequest` | `reportType` | `report_type` |
| `CreditRelayRefreshResponse` | `relayToken` | `relay_token` |
| `CreditRelayRefreshResponse` | `assetReportId` | `asset_report_id` |
| `CreditRelayRefreshResponse` | `requestId` | `request_id` |
| `CreditRelayRemoveRequest` | `clientId` | `client_id` |
| `CreditRelayRemoveRequest` | `relayToken` | `relay_token` |
| `CreditRelayRemoveResponse` | `requestId` | `request_id` |
| `CreditSession` | `linkSessionId` | `link_session_id` |
| `CreditSession` | `sessionStartTime` | `session_start_time` |
| `CreditSessionBankEmploymentResult` | `itemId` | `item_id` |
| `CreditSessionBankEmploymentResult` | `institutionId` | `institution_id` |
| `CreditSessionBankIncomeResult` | `itemId` | `item_id` |
| `CreditSessionBankIncomeResult` | `institutionId` | `institution_id` |
| `CreditSessionDocumentIncomeResult` | `numPaystubsUploaded` | `num_paystubs_uploaded` |
| `CreditSessionDocumentIncomeResult` | `numW2SUploaded` | `num_w2s_uploaded` |
| `CreditSessionDocumentIncomeResult` | `numBankStatementsUploaded` | `num_bank_statements_uploaded` |
| `CreditSessionDocumentIncomeResult` | `num1099SUploaded` | `num_1099s_uploaded` |
| `CreditSessionDocumentIncomeResult` | `numI20SUploaded` | `num_i20s_uploaded` |
| `CreditSessionError` | `errorType` | `error_type` |
| `CreditSessionError` | `errorCode` | `error_code` |
| `CreditSessionError` | `errorMessage` | `error_message` |
| `CreditSessionError` | `displayMessage` | `display_message` |
| `CreditSessionItemAddResult` | `publicToken` | `public_token` |
| `CreditSessionItemAddResult` | `itemId` | `item_id` |
| `CreditSessionItemAddResult` | `institutionId` | `institution_id` |
| `CreditSessionPayrollIncomeResult` | `numPaystubsRetrieved` | `num_paystubs_retrieved` |
| `CreditSessionPayrollIncomeResult` | `numW2SRetrieved` | `num_w2s_retrieved` |
| `CreditSessionPayrollIncomeResult` | `institutionId` | `institution_id` |
| `CreditSessionPayrollIncomeResult` | `institutionName` | `institution_name` |
| `CreditSessionResults` | `itemAddResults` | `item_add_results` |
| `CreditSessionResults` | `bankIncomeResults` | `bank_income_results` |
| `CreditSessionResults` | `bankEmploymentResults` | `bank_employment_results` |
| `CreditSessionResults` | `payrollIncomeResults` | `payroll_income_results` |
| `CreditSessionResults` | `documentIncomeResults` | `document_income_results` |
| `CreditSessionsGetRequest` | `clientId` | `client_id` |
| `CreditSessionsGetRequest` | `userToken` | `user_token` |
| `CreditSessionsGetRequest` | `userId` | `user_id` |
| `CreditSessionsGetResponse` | `requestId` | `request_id` |
| `CreditW2` | `documentMetadata` | `document_metadata` |
| `CreditW2` | `documentId` | `document_id` |
| `CreditW2` | `taxYear` | `tax_year` |
| `CreditW2` | `employerIdNumber` | `employer_id_number` |
| `CreditW2` | `wagesTipsOtherComp` | `wages_tips_other_comp` |
| `CreditW2` | `federalIncomeTaxWithheld` | `federal_income_tax_withheld` |
| `CreditW2` | `socialSecurityWages` | `social_security_wages` |
| `CreditW2` | `socialSecurityTaxWithheld` | `social_security_tax_withheld` |
| `CreditW2` | `medicareWagesAndTips` | `medicare_wages_and_tips` |
| `CreditW2` | `medicareTaxWithheld` | `medicare_tax_withheld` |
| `CreditW2` | `socialSecurityTips` | `social_security_tips` |
| `CreditW2` | `allocatedTips` | `allocated_tips` |
| `CreditW2` | `box9` | `box_9` |
| `CreditW2` | `dependentCareBenefits` | `dependent_care_benefits` |
| `CreditW2` | `nonqualifiedPlans` | `nonqualified_plans` |
| `CreditW2` | `box12` | `box_12` |
| `CreditW2` | `statutoryEmployee` | `statutory_employee` |
| `CreditW2` | `retirementPlan` | `retirement_plan` |
| `CreditW2` | `thirdPartySickPay` | `third_party_sick_pay` |
| `CreditW2` | `stateAndLocalWages` | `state_and_local_wages` |
| `CustomSandboxTransaction` | `dateTransacted` | `date_transacted` |
| `CustomSandboxTransaction` | `datePosted` | `date_posted` |
| `CustomSandboxTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `CustomerInitiatedReturnRisk` | `riskTier` | `risk_tier` |
| `DashboardUser` | `createdAt` | `created_at` |
| `DashboardUser` | `emailAddress` | `email_address` |
| `DashboardUserGetRequest` | `dashboardUserId` | `dashboard_user_id` |
| `DashboardUserGetRequest` | `clientId` | `client_id` |
| `DashboardUserGetResponse` | `createdAt` | `created_at` |
| `DashboardUserGetResponse` | `emailAddress` | `email_address` |
| `DashboardUserGetResponse` | `requestId` | `request_id` |
| `DashboardUserListRequest` | `clientId` | `client_id` |
| `DashboardUserListResponse` | `dashboardUsers` | `dashboard_users` |
| `DashboardUserListResponse` | `nextCursor` | `next_cursor` |
| `DashboardUserListResponse` | `requestId` | `request_id` |
| `DeductionsBreakdown` | `currentAmount` | `current_amount` |
| `DeductionsBreakdown` | `isoCurrencyCode` | `iso_currency_code` |
| `DeductionsBreakdown` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `DeductionsBreakdown` | `ytdAmount` | `ytd_amount` |
| `DeductionsTotal` | `currentAmount` | `current_amount` |
| `DeductionsTotal` | `isoCurrencyCode` | `iso_currency_code` |
| `DeductionsTotal` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `DeductionsTotal` | `ytdAmount` | `ytd_amount` |
| `DefaultUpdateWebhook` | `webhookType` | `webhook_type` |
| `DefaultUpdateWebhook` | `webhookCode` | `webhook_code` |
| `DefaultUpdateWebhook` | `newTransactions` | `new_transactions` |
| `DefaultUpdateWebhook` | `itemId` | `item_id` |
| `DepositoryFilter` | `accountSubtypes` | `account_subtypes` |
| `DepositoryFilter` | `limitedPurposeTypes` | `limited_purpose_types` |
| `DetailedOriginator` | `clientId` | `client_id` |
| `DetailedOriginator` | `transferDiligenceStatus` | `transfer_diligence_status` |
| `DetailedOriginator` | `companyName` | `company_name` |
| `DetailedOriginator` | `outstandingRequirements` | `outstanding_requirements` |
| `DetectedAccount` | `accountType` | `account_type` |
| `DetectedAccount` | `accountSubtype` | `account_subtype` |
| `DetectedAccount` | `transactionCount` | `transaction_count` |
| `DetectedAccount` | `oldestTransactionDate` | `oldest_transaction_date` |
| `DetectedAccount` | `newestTransactionDate` | `newest_transaction_date` |
| `DetectedAccount` | `newestTransactionAmount` | `newest_transaction_amount` |
| `DetectedAccount` | `totalOutflows` | `total_outflows` |
| `DetectedAccount` | `totalInflows` | `total_inflows` |
| `DistributionBreakdown` | `accountName` | `account_name` |
| `DistributionBreakdown` | `bankName` | `bank_name` |
| `DistributionBreakdown` | `currentAmount` | `current_amount` |
| `DistributionBreakdown` | `isoCurrencyCode` | `iso_currency_code` |
| `DistributionBreakdown` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `DistributionBreakdown` | `currentPay` | `current_pay` |
| `DocumentAnalysis` | `imageQuality` | `image_quality` |
| `DocumentAnalysis` | `extractedData` | `extracted_data` |
| `DocumentAnalysis` | `fraudAnalysisDetails` | `fraud_analysis_details` |
| `DocumentAnalysis` | `imageQualityDetails` | `image_quality_details` |
| `DocumentAnalysis` | `humanReview` | `human_review` |
| `DocumentAnalysis` | `aamvaVerification` | `aamva_verification` |
| `DocumentMetadata` | `docId` | `doc_id` |
| `DocumentMetadata` | `docType` | `doc_type` |
| `DocumentRiskSignal` | `hasFraudRisk` | `has_fraud_risk` |
| `DocumentRiskSignal` | `institutionMetadata` | `institution_metadata` |
| `DocumentRiskSignal` | `expectedValue` | `expected_value` |
| `DocumentRiskSignal` | `actualValue` | `actual_value` |
| `DocumentRiskSignal` | `signalDescription` | `signal_description` |
| `DocumentRiskSignal` | `pageNumber` | `page_number` |
| `DocumentRiskSignalInstitutionMetadata` | `itemId` | `item_id` |
| `DocumentRiskSignalsObject` | `accountId` | `account_id` |
| `DocumentRiskSignalsObject` | `singleDocumentRiskSignals` | `single_document_risk_signals` |
| `DocumentRiskSignalsObject` | `multiDocumentRiskSignals` | `multi_document_risk_signals` |
| `DocumentRiskSummary` | `riskScore` | `risk_score` |
| `DocumentaryVerificationDocument` | `extractedData` | `extracted_data` |
| `DocumentaryVerificationDocument` | `redactedAt` | `redacted_at` |
| `EarningsBreakdown` | `canonicalDescription` | `canonical_description` |
| `EarningsBreakdown` | `currentAmount` | `current_amount` |
| `EarningsBreakdown` | `isoCurrencyCode` | `iso_currency_code` |
| `EarningsBreakdown` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `EarningsBreakdown` | `ytdAmount` | `ytd_amount` |
| `EarningsTotal` | `currentAmount` | `current_amount` |
| `EarningsTotal` | `currentPay` | `current_pay` |
| `EarningsTotal` | `ytdPay` | `ytd_pay` |
| `EarningsTotal` | `isoCurrencyCode` | `iso_currency_code` |
| `EarningsTotal` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `EarningsTotal` | `ytdAmount` | `ytd_amount` |
| `Employee` | `maritalStatus` | `marital_status` |
| `Employee` | `taxpayerId` | `taxpayer_id` |
| `EmployeeIncomeSummaryFieldString` | `verificationStatus` | `verification_status` |
| `Employer` | `employerId` | `employer_id` |
| `Employer` | `confidenceScore` | `confidence_score` |
| `EmployerIncomeSummaryFieldString` | `verificationStatus` | `verification_status` |
| `EmployersSearchRequest` | `clientId` | `client_id` |
| `EmployersSearchResponse` | `requestId` | `request_id` |
| `EmploymentDetails` | `annualSalary` | `annual_salary` |
| `EmploymentDetails` | `hireDate` | `hire_date` |
| `EmploymentVerification` | `startDate` | `start_date` |
| `EmploymentVerification` | `endDate` | `end_date` |
| `EmploymentVerification` | `platformIds` | `platform_ids` |
| `EmploymentVerificationGetRequest` | `clientId` | `client_id` |
| `EmploymentVerificationGetRequest` | `accessToken` | `access_token` |
| `EmploymentVerificationGetResponse` | `requestId` | `request_id` |
| `Enhancements` | `merchantName` | `merchant_name` |
| `Enhancements` | `logoUrl` | `logo_url` |
| `Enhancements` | `checkNumber` | `check_number` |
| `Enhancements` | `paymentChannel` | `payment_channel` |
| `Enhancements` | `categoryId` | `category_id` |
| `Enhancements` | `personalFinanceCategory` | `personal_finance_category` |
| `Enhancements` | `personalFinanceCategoryIconUrl` | `personal_finance_category_icon_url` |
| `Enrichments` | `checkNumber` | `check_number` |
| `Enrichments` | `entityId` | `entity_id` |
| `Enrichments` | `legacyCategoryId` | `legacy_category_id` |
| `Enrichments` | `legacyCategory` | `legacy_category` |
| `Enrichments` | `logoUrl` | `logo_url` |
| `Enrichments` | `merchantName` | `merchant_name` |
| `Enrichments` | `paymentChannel` | `payment_channel` |
| `Enrichments` | `phoneNumber` | `phone_number` |
| `Enrichments` | `personalFinanceCategory` | `personal_finance_category` |
| `Enrichments` | `personalFinanceCategoryIconUrl` | `personal_finance_category_icon_url` |
| `EntityScreeningHitAnalysis` | `emailAddresses` | `email_addresses` |
| `EntityScreeningHitAnalysis` | `phoneNumbers` | `phone_numbers` |
| `EntityScreeningHitAnalysis` | `searchTermsVersion` | `search_terms_version` |
| `EntityScreeningHitData` | `emailAddresses` | `email_addresses` |
| `EntityScreeningHitData` | `phoneNumbers` | `phone_numbers` |
| `EntityScreeningHitEmails` | `emailAddress` | `email_address` |
| `EntityScreeningHitNames` | `isPrimary` | `is_primary` |
| `EntityScreeningHitNames` | `weakAliasDetermination` | `weak_alias_determination` |
| `EntityScreeningHitPhoneNumbers` | `phoneNumber` | `phone_number` |
| `EntityScreeningStatusUpdatedWebhook` | `webhookType` | `webhook_type` |
| `EntityScreeningStatusUpdatedWebhook` | `webhookCode` | `webhook_code` |
| `EntityScreeningStatusUpdatedWebhook` | `entityScreeningId` | `entity_screening_id` |
| `EntityWatchlistProgram` | `createdAt` | `created_at` |
| `EntityWatchlistProgram` | `isRescanningEnabled` | `is_rescanning_enabled` |
| `EntityWatchlistProgram` | `listsEnabled` | `lists_enabled` |
| `EntityWatchlistProgram` | `nameSensitivity` | `name_sensitivity` |
| `EntityWatchlistProgram` | `auditTrail` | `audit_trail` |
| `EntityWatchlistProgram` | `isArchived` | `is_archived` |
| `EntityWatchlistScreening` | `searchTerms` | `search_terms` |
| `EntityWatchlistScreening` | `clientUserId` | `client_user_id` |
| `EntityWatchlistScreening` | `auditTrail` | `audit_trail` |
| `EntityWatchlistScreeningHit` | `reviewStatus` | `review_status` |
| `EntityWatchlistScreeningHit` | `firstActive` | `first_active` |
| `EntityWatchlistScreeningHit` | `inactiveSince` | `inactive_since` |
| `EntityWatchlistScreeningHit` | `historicalSince` | `historical_since` |
| `EntityWatchlistScreeningHit` | `listCode` | `list_code` |
| `EntityWatchlistScreeningHit` | `plaidUid` | `plaid_uid` |
| `EntityWatchlistScreeningHit` | `sourceUid` | `source_uid` |
| `EntityWatchlistScreeningHit` | `subPrograms` | `sub_programs` |
| `EntityWatchlistScreeningReview` | `confirmedHits` | `confirmed_hits` |
| `EntityWatchlistScreeningReview` | `dismissedHits` | `dismissed_hits` |
| `EntityWatchlistScreeningReview` | `auditTrail` | `audit_trail` |
| `EntityWatchlistScreeningSearchTerms` | `entityWatchlistProgramId` | `entity_watchlist_program_id` |
| `EntityWatchlistScreeningSearchTerms` | `legalName` | `legal_name` |
| `EntityWatchlistScreeningSearchTerms` | `documentNumber` | `document_number` |
| `EntityWatchlistScreeningSearchTerms` | `emailAddress` | `email_address` |
| `EntityWatchlistScreeningSearchTerms` | `phoneNumber` | `phone_number` |
| `EntityWatchlistSearchTerms` | `entityWatchlistProgramId` | `entity_watchlist_program_id` |
| `EntityWatchlistSearchTerms` | `legalName` | `legal_name` |
| `EntityWatchlistSearchTerms` | `documentNumber` | `document_number` |
| `EntityWatchlistSearchTerms` | `emailAddress` | `email_address` |
| `EntityWatchlistSearchTerms` | `phoneNumber` | `phone_number` |
| `Error` | `errorType` | `error_type` |
| `Error` | `errorCode` | `error_code` |
| `Error` | `errorCodeReason` | `error_code_reason` |
| `Error` | `errorMessage` | `error_message` |
| `Error` | `displayMessage` | `display_message` |
| `Error` | `requestId` | `request_id` |
| `Error` | `documentationUrl` | `documentation_url` |
| `Error` | `suggestedAction` | `suggested_action` |
| `Error` | `requiredAccountSubtypes` | `required_account_subtypes` |
| `Error` | `providedAccountSubtypes` | `provided_account_subtypes` |
| `ErrorError` | `errorType` | `error_type` |
| `ErrorError` | `errorCode` | `error_code` |
| `ErrorError` | `errorCodeReason` | `error_code_reason` |
| `ErrorError` | `errorMessage` | `error_message` |
| `ErrorError` | `displayMessage` | `display_message` |
| `ErrorError` | `requestId` | `request_id` |
| `ErrorError` | `documentationUrl` | `documentation_url` |
| `ErrorError` | `suggestedAction` | `suggested_action` |
| `ErrorError` | `requiredAccountSubtypes` | `required_account_subtypes` |
| `ErrorError` | `providedAccountSubtypes` | `provided_account_subtypes` |
| `EwaScore` | `lowestAmount` | `lowest_amount` |
| `EwaScore` | `highestAmount` | `highest_amount` |
| `ExpenditureInsights` | `cashFlow` | `cash_flow` |
| `ExpenditureInsights` | `totalExpenditure` | `total_expenditure` |
| `ExpenditureInsights` | `essentialExpenditure` | `essential_expenditure` |
| `ExpenditureInsights` | `nonEssentialExpenditure` | `non_essential_expenditure` |
| `ExpenditureInsights` | `transfersOut` | `transfers_out` |
| `ExpenditureInsights` | `outlierTransactions` | `outlier_transactions` |
| `ExpenditureSummary` | `isoCurrencyCode` | `iso_currency_code` |
| `ExpenditureSummary` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `ExpenditureSummary` | `monthlyAverage` | `monthly_average` |
| `ExpenditureSummary` | `transactionsCount` | `transactions_count` |
| `ExpenditureSummary` | `percentageOfIncome` | `percentage_of_income` |
| `ExpenditureSummary` | `topCategories` | `top_categories` |
| `ExtendedRecipientMetadata` | `recipientId` | `recipient_id` |
| `ExtendedRecipientMetadata` | `clientName` | `client_name` |
| `ExtendedRecipientMetadata` | `logoUri` | `logo_uri` |
| `ExtendedRecipientMetadata` | `thirdPartyLegalName` | `third_party_legal_name` |
| `ExtendedRecipientMetadata` | `joinedDate` | `joined_date` |
| `ExtendedRecipientMetadata` | `connectionCount` | `connection_count` |
| `ExternalPaymentInitiationConsentOptions` | `requestRefundDetails` | `request_refund_details` |
| `ExternalPaymentScheduleBase` | `intervalExecutionDay` | `interval_execution_day` |
| `ExternalPaymentScheduleBase` | `startDate` | `start_date` |
| `ExternalPaymentScheduleBase` | `endDate` | `end_date` |
| `ExternalPaymentScheduleBase` | `adjustedStartDate` | `adjusted_start_date` |
| `ExternalPaymentScheduleGet` | `intervalExecutionDay` | `interval_execution_day` |
| `ExternalPaymentScheduleGet` | `startDate` | `start_date` |
| `ExternalPaymentScheduleGet` | `endDate` | `end_date` |
| `ExternalPaymentScheduleGet` | `adjustedStartDate` | `adjusted_start_date` |
| `ExternalPaymentScheduleRequest` | `intervalExecutionDay` | `interval_execution_day` |
| `ExternalPaymentScheduleRequest` | `startDate` | `start_date` |
| `ExternalPaymentScheduleRequest` | `endDate` | `end_date` |
| `ExternalPaymentScheduleRequest` | `adjustedStartDate` | `adjusted_start_date` |
| `FdxRecipientMetadata` | `recipientId` | `recipient_id` |
| `FdxRecipientMetadata` | `clientName` | `client_name` |
| `FdxRecipientMetadata` | `logoUri` | `logo_uri` |
| `FdxRecipientMetadata` | `thirdPartyLegalName` | `third_party_legal_name` |
| `FallbackAuthMicrodepositAutoVerifiedWebhook` | `webhookType` | `webhook_type` |
| `FallbackAuthMicrodepositAutoVerifiedWebhook` | `webhookCode` | `webhook_code` |
| `FallbackAuthMicrodepositAutoVerifiedWebhook` | `accountId` | `account_id` |
| `FallbackAuthMicrodepositAutoVerifiedWebhook` | `itemId` | `item_id` |
| `FallbackAuthMicrodepositVerificationExpiredWebhook` | `webhookType` | `webhook_type` |
| `FallbackAuthMicrodepositVerificationExpiredWebhook` | `webhookCode` | `webhook_code` |
| `FallbackAuthMicrodepositVerificationExpiredWebhook` | `accountId` | `account_id` |
| `FallbackAuthMicrodepositVerificationExpiredWebhook` | `itemId` | `item_id` |
| `FinancialInstitutionInsights` | `entityId` | `entity_id` |
| `FinancialInstitutionInsights` | `detectedAccounts` | `detected_accounts` |
| `FixedIncome` | `yieldRate` | `yield_rate` |
| `FixedIncome` | `maturityDate` | `maturity_date` |
| `FixedIncome` | `issueDate` | `issue_date` |
| `FixedIncome` | `faceValue` | `face_value` |
| `ForecastedMonthlyIncome` | `baselineAmount` | `baseline_amount` |
| `ForecastedMonthlyIncome` | `currentAmount` | `current_amount` |
| `ForwardedJsonResponse` | `requestId` | `request_id` |
| `FraudAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `FraudAnalysisDetails` | `typeSupported` | `type_supported` |
| `FraudAnalysisDetails` | `portraitPresenceCheck` | `portrait_presence_check` |
| `FraudAnalysisDetails` | `portraitDetailsCheck` | `portrait_details_check` |
| `FraudAnalysisDetails` | `imageCompositionCheck` | `image_composition_check` |
| `FraudAnalysisDetails` | `integrityCheck` | `integrity_check` |
| `FraudAnalysisDetails` | `detailCheck` | `detail_check` |
| `FraudAnalysisDetails` | `issueDateCheck` | `issue_date_check` |
| `GamblingIndicators` | `isoCurrencyCode` | `iso_currency_code` |
| `GamblingIndicators` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `GamblingIndicators` | `monthlyAverage` | `monthly_average` |
| `GamblingIndicators` | `topMerchants` | `top_merchants` |
| `GamblingIndicators` | `transactionsCount` | `transactions_count` |
| `GamblingIndicators` | `monthlySummaries` | `monthly_summaries` |
| `GamblingIndicators` | `daysSinceLastOccurrence` | `days_since_last_occurrence` |
| `GamblingIndicators` | `percentageOfIncome` | `percentage_of_income` |
| `GetConsentsResponse` | `consentGrants` | `consent_grants` |
| `HealthIncident` | `startDate` | `start_date` |
| `HealthIncident` | `endDate` | `end_date` |
| `HealthIncident` | `incidentUpdates` | `incident_updates` |
| `HistoricalAnnualIncome` | `baselineAmount` | `baseline_amount` |
| `HistoricalAnnualIncome` | `currentAmount` | `current_amount` |
| `HistoricalBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `HistoricalBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `HistoricalUpdateWebhook` | `webhookType` | `webhook_type` |
| `HistoricalUpdateWebhook` | `webhookCode` | `webhook_code` |
| `HistoricalUpdateWebhook` | `newTransactions` | `new_transactions` |
| `HistoricalUpdateWebhook` | `itemId` | `item_id` |
| `Holding` | `accountId` | `account_id` |
| `Holding` | `securityId` | `security_id` |
| `Holding` | `institutionPrice` | `institution_price` |
| `Holding` | `institutionPriceAsOf` | `institution_price_as_of` |
| `Holding` | `institutionPriceDatetime` | `institution_price_datetime` |
| `Holding` | `institutionValue` | `institution_value` |
| `Holding` | `costBasis` | `cost_basis` |
| `Holding` | `isoCurrencyCode` | `iso_currency_code` |
| `Holding` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `Holding` | `vestedQuantity` | `vested_quantity` |
| `Holding` | `vestedValue` | `vested_value` |
| `Holding` | `taxLots` | `tax_lots` |
| `HoldingTaxLot` | `institutionLotId` | `institution_lot_id` |
| `HoldingTaxLot` | `originalPurchaseDatetime` | `original_purchase_datetime` |
| `HoldingTaxLot` | `purchasePrice` | `purchase_price` |
| `HoldingTaxLot` | `costBasis` | `cost_basis` |
| `HoldingTaxLot` | `currentValue` | `current_value` |
| `HoldingTaxLot` | `positionType` | `position_type` |
| `HoldingsDefaultUpdateWebhook` | `webhookType` | `webhook_type` |
| `HoldingsDefaultUpdateWebhook` | `webhookCode` | `webhook_code` |
| `HoldingsDefaultUpdateWebhook` | `itemId` | `item_id` |
| `HoldingsDefaultUpdateWebhook` | `userId` | `user_id` |
| `HoldingsDefaultUpdateWebhook` | `newHoldings` | `new_holdings` |
| `HoldingsDefaultUpdateWebhook` | `updatedHoldings` | `updated_holdings` |
| `HoldingsOverride` | `institutionPrice` | `institution_price` |
| `HoldingsOverride` | `institutionPriceAsOf` | `institution_price_as_of` |
| `HoldingsOverride` | `costBasis` | `cost_basis` |
| `HostedMmdVerificationWebhook` | `webhookType` | `webhook_type` |
| `HostedMmdVerificationWebhook` | `webhookCode` | `webhook_code` |
| `HostedMmdVerificationWebhook` | `itemId` | `item_id` |
| `HostedMmdVerificationWebhook` | `accountId` | `account_id` |
| `IdvProtectEvent` | `eventId` | `event_id` |
| `IdvProtectEvent` | `trustIndex` | `trust_index` |
| `IdvProtectEvent` | `fraudAttributes` | `fraud_attributes` |
| `Individual` | `name` | `NAME` |
| `IdentityDefaultUpdateWebhook` | `webhookType` | `webhook_type` |
| `IdentityDefaultUpdateWebhook` | `webhookCode` | `webhook_code` |
| `IdentityDefaultUpdateWebhook` | `itemId` | `item_id` |
| `IdentityDefaultUpdateWebhook` | `accountIdsWithUpdatedIdentity` | `account_ids_with_updated_identity` |
| `IdentityDocumentMetadata` | `isAccountNumberMatch` | `is_account_number_match` |
| `IdentityDocumentMetadata` | `lastUpdated` | `last_updated` |
| `IdentityDocumentMetadata` | `uploadedAt` | `uploaded_at` |
| `IdentityDocumentUpload` | `documentId` | `document_id` |
| `IdentityDocumentUpload` | `riskInsights` | `risk_insights` |
| `IdentityDocumentUploadMetadata` | `documentType` | `document_type` |
| `IdentityDocumentUploadMetadata` | `isAccountNumberMatch` | `is_account_number_match` |
| `IdentityDocumentUploadMetadata` | `pageCount` | `page_count` |
| `IdentityDocumentUploadMetadata` | `lastUpdated` | `last_updated` |
| `IdentityDocumentUploadMetadata` | `uploadedAt` | `uploaded_at` |
| `IdentityDocumentUploadRiskInsights` | `riskSummary` | `risk_summary` |
| `IdentityDocumentUploadRiskInsights` | `riskSignals` | `risk_signals` |
| `IdentityDocumentUploadRiskSignal` | `hasFraudRisk` | `has_fraud_risk` |
| `IdentityDocumentUploadRiskSignal` | `signalDescription` | `signal_description` |
| `IdentityDocumentUploadRiskSignal` | `pageNumber` | `page_number` |
| `IdentityDocumentUploadRiskSummary` | `riskScore` | `risk_score` |
| `IdentityDocumentsUploadsGetRequest` | `clientId` | `client_id` |
| `IdentityDocumentsUploadsGetRequest` | `accessToken` | `access_token` |
| `IdentityDocumentsUploadsGetRequestOptions` | `accountIds` | `account_ids` |
| `IdentityDocumentsUploadsGetResponse` | `requestId` | `request_id` |
| `IdentityGetRequest` | `clientId` | `client_id` |
| `IdentityGetRequest` | `accessToken` | `access_token` |
| `IdentityGetRequestOptions` | `accountIds` | `account_ids` |
| `IdentityGetResponse` | `requestId` | `request_id` |
| `IdentityMatchRequest` | `clientId` | `client_id` |
| `IdentityMatchRequest` | `accessToken` | `access_token` |
| `IdentityMatchRequestOptions` | `accountIds` | `account_ids` |
| `IdentityMatchResponse` | `requestId` | `request_id` |
| `IdentityMatchUser` | `legalName` | `legal_name` |
| `IdentityMatchUser` | `phoneNumber` | `phone_number` |
| `IdentityMatchUser` | `emailAddress` | `email_address` |
| `IdentityRefreshRequest` | `clientId` | `client_id` |
| `IdentityRefreshRequest` | `accessToken` | `access_token` |
| `IdentityRefreshResponse` | `requestId` | `request_id` |
| `IdentityVerification` | `clientUserId` | `client_user_id` |
| `IdentityVerification` | `createdAt` | `created_at` |
| `IdentityVerification` | `completedAt` | `completed_at` |
| `IdentityVerification` | `previousAttemptId` | `previous_attempt_id` |
| `IdentityVerification` | `shareableUrl` | `shareable_url` |
| `IdentityVerification` | `documentaryVerification` | `documentary_verification` |
| `IdentityVerification` | `selfieCheck` | `selfie_check` |
| `IdentityVerification` | `kycCheck` | `kyc_check` |
| `IdentityVerification` | `riskCheck` | `risk_check` |
| `IdentityVerification` | `verifySms` | `verify_sms` |
| `IdentityVerification` | `watchlistScreeningId` | `watchlist_screening_id` |
| `IdentityVerification` | `beaconUserId` | `beacon_user_id` |
| `IdentityVerification` | `userId` | `user_id` |
| `IdentityVerification` | `redactedAt` | `redacted_at` |
| `IdentityVerification` | `latestScoredProtectEvent` | `latest_scored_protect_event` |
| `IdentityVerificationAutofillAddress` | `postalCode` | `postal_code` |
| `IdentityVerificationAutofillAddress` | `poBox` | `po_box` |
| `IdentityVerificationAutofillCreateRequest` | `identityVerificationId` | `identity_verification_id` |
| `IdentityVerificationAutofillCreateRequest` | `clientId` | `client_id` |
| `IdentityVerificationAutofillCreateResponse` | `requestId` | `request_id` |
| `IdentityVerificationAutofillUserData` | `idNumber` | `id_number` |
| `IdentityVerificationCreateRequest` | `clientUserId` | `client_user_id` |
| `IdentityVerificationCreateRequest` | `userId` | `user_id` |
| `IdentityVerificationCreateRequest` | `isShareable` | `is_shareable` |
| `IdentityVerificationCreateRequest` | `templateId` | `template_id` |
| `IdentityVerificationCreateRequest` | `gaveConsent` | `gave_consent` |
| `IdentityVerificationCreateRequest` | `clientId` | `client_id` |
| `IdentityVerificationCreateRequest` | `isIdempotent` | `is_idempotent` |
| `IdentityVerificationCreateRequestUser` | `emailAddress` | `email_address` |
| `IdentityVerificationCreateRequestUser` | `phoneNumber` | `phone_number` |
| `IdentityVerificationCreateRequestUser` | `dateOfBirth` | `date_of_birth` |
| `IdentityVerificationCreateRequestUser` | `idNumber` | `id_number` |
| `IdentityVerificationCreateRequestUser` | `clientUserId` | `client_user_id` |
| `IdentityVerificationCreateRequestUser` | `ipAddress` | `ip_address` |
| `IdentityVerificationCreateResponse` | `clientUserId` | `client_user_id` |
| `IdentityVerificationCreateResponse` | `createdAt` | `created_at` |
| `IdentityVerificationCreateResponse` | `completedAt` | `completed_at` |
| `IdentityVerificationCreateResponse` | `previousAttemptId` | `previous_attempt_id` |
| `IdentityVerificationCreateResponse` | `shareableUrl` | `shareable_url` |
| `IdentityVerificationCreateResponse` | `documentaryVerification` | `documentary_verification` |
| `IdentityVerificationCreateResponse` | `selfieCheck` | `selfie_check` |
| `IdentityVerificationCreateResponse` | `kycCheck` | `kyc_check` |
| `IdentityVerificationCreateResponse` | `riskCheck` | `risk_check` |
| `IdentityVerificationCreateResponse` | `verifySms` | `verify_sms` |
| `IdentityVerificationCreateResponse` | `watchlistScreeningId` | `watchlist_screening_id` |
| `IdentityVerificationCreateResponse` | `beaconUserId` | `beacon_user_id` |
| `IdentityVerificationCreateResponse` | `userId` | `user_id` |
| `IdentityVerificationCreateResponse` | `redactedAt` | `redacted_at` |
| `IdentityVerificationCreateResponse` | `latestScoredProtectEvent` | `latest_scored_protect_event` |
| `IdentityVerificationCreateResponse` | `requestId` | `request_id` |
| `IdentityVerificationDocumentAddressResponse` | `postalCode` | `postal_code` |
| `IdentityVerificationDocumentNameResponse` | `givenName` | `given_name` |
| `IdentityVerificationDocumentNameResponse` | `familyName` | `family_name` |
| `IdentityVerificationGetRequest` | `identityVerificationId` | `identity_verification_id` |
| `IdentityVerificationGetRequest` | `clientId` | `client_id` |
| `IdentityVerificationGetResponse` | `clientUserId` | `client_user_id` |
| `IdentityVerificationGetResponse` | `createdAt` | `created_at` |
| `IdentityVerificationGetResponse` | `completedAt` | `completed_at` |
| `IdentityVerificationGetResponse` | `previousAttemptId` | `previous_attempt_id` |
| `IdentityVerificationGetResponse` | `shareableUrl` | `shareable_url` |
| `IdentityVerificationGetResponse` | `documentaryVerification` | `documentary_verification` |
| `IdentityVerificationGetResponse` | `selfieCheck` | `selfie_check` |
| `IdentityVerificationGetResponse` | `kycCheck` | `kyc_check` |
| `IdentityVerificationGetResponse` | `riskCheck` | `risk_check` |
| `IdentityVerificationGetResponse` | `verifySms` | `verify_sms` |
| `IdentityVerificationGetResponse` | `watchlistScreeningId` | `watchlist_screening_id` |
| `IdentityVerificationGetResponse` | `beaconUserId` | `beacon_user_id` |
| `IdentityVerificationGetResponse` | `userId` | `user_id` |
| `IdentityVerificationGetResponse` | `redactedAt` | `redacted_at` |
| `IdentityVerificationGetResponse` | `latestScoredProtectEvent` | `latest_scored_protect_event` |
| `IdentityVerificationGetResponse` | `requestId` | `request_id` |
| `IdentityVerificationListRequest` | `clientId` | `client_id` |
| `IdentityVerificationListRequest` | `templateId` | `template_id` |
| `IdentityVerificationListRequest` | `clientUserId` | `client_user_id` |
| `IdentityVerificationListRequest` | `userId` | `user_id` |
| `IdentityVerificationListResponse` | `identityVerifications` | `identity_verifications` |
| `IdentityVerificationListResponse` | `nextCursor` | `next_cursor` |
| `IdentityVerificationListResponse` | `requestId` | `request_id` |
| `IdentityVerificationRequestUser` | `emailAddress` | `email_address` |
| `IdentityVerificationRequestUser` | `phoneNumber` | `phone_number` |
| `IdentityVerificationRequestUser` | `dateOfBirth` | `date_of_birth` |
| `IdentityVerificationRequestUser` | `idNumber` | `id_number` |
| `IdentityVerificationRequestUserName` | `givenName` | `given_name` |
| `IdentityVerificationRequestUserName` | `familyName` | `family_name` |
| `IdentityVerificationResponseUserName` | `givenName` | `given_name` |
| `IdentityVerificationResponseUserName` | `familyName` | `family_name` |
| `IdentityVerificationRetriedWebhook` | `webhookType` | `webhook_type` |
| `IdentityVerificationRetriedWebhook` | `webhookCode` | `webhook_code` |
| `IdentityVerificationRetriedWebhook` | `identityVerificationId` | `identity_verification_id` |
| `IdentityVerificationRetryRequest` | `clientUserId` | `client_user_id` |
| `IdentityVerificationRetryRequest` | `templateId` | `template_id` |
| `IdentityVerificationRetryRequest` | `isShareable` | `is_shareable` |
| `IdentityVerificationRetryRequest` | `clientId` | `client_id` |
| `IdentityVerificationRetryRequestStepsObject` | `verifySms` | `verify_sms` |
| `IdentityVerificationRetryRequestStepsObject` | `kycCheck` | `kyc_check` |
| `IdentityVerificationRetryRequestStepsObject` | `documentaryVerification` | `documentary_verification` |
| `IdentityVerificationRetryRequestStepsObject` | `selfieCheck` | `selfie_check` |
| `IdentityVerificationRetryResponse` | `clientUserId` | `client_user_id` |
| `IdentityVerificationRetryResponse` | `createdAt` | `created_at` |
| `IdentityVerificationRetryResponse` | `completedAt` | `completed_at` |
| `IdentityVerificationRetryResponse` | `previousAttemptId` | `previous_attempt_id` |
| `IdentityVerificationRetryResponse` | `shareableUrl` | `shareable_url` |
| `IdentityVerificationRetryResponse` | `documentaryVerification` | `documentary_verification` |
| `IdentityVerificationRetryResponse` | `selfieCheck` | `selfie_check` |
| `IdentityVerificationRetryResponse` | `kycCheck` | `kyc_check` |
| `IdentityVerificationRetryResponse` | `riskCheck` | `risk_check` |
| `IdentityVerificationRetryResponse` | `verifySms` | `verify_sms` |
| `IdentityVerificationRetryResponse` | `watchlistScreeningId` | `watchlist_screening_id` |
| `IdentityVerificationRetryResponse` | `beaconUserId` | `beacon_user_id` |
| `IdentityVerificationRetryResponse` | `userId` | `user_id` |
| `IdentityVerificationRetryResponse` | `redactedAt` | `redacted_at` |
| `IdentityVerificationRetryResponse` | `latestScoredProtectEvent` | `latest_scored_protect_event` |
| `IdentityVerificationRetryResponse` | `requestId` | `request_id` |
| `IdentityVerificationStatusUpdatedWebhook` | `webhookType` | `webhook_type` |
| `IdentityVerificationStatusUpdatedWebhook` | `webhookCode` | `webhook_code` |
| `IdentityVerificationStatusUpdatedWebhook` | `identityVerificationId` | `identity_verification_id` |
| `IdentityVerificationStepSummary` | `acceptTos` | `accept_tos` |
| `IdentityVerificationStepSummary` | `verifySms` | `verify_sms` |
| `IdentityVerificationStepSummary` | `kycCheck` | `kyc_check` |
| `IdentityVerificationStepSummary` | `documentaryVerification` | `documentary_verification` |
| `IdentityVerificationStepSummary` | `selfieCheck` | `selfie_check` |
| `IdentityVerificationStepSummary` | `watchlistScreening` | `watchlist_screening` |
| `IdentityVerificationStepSummary` | `riskCheck` | `risk_check` |
| `IdentityVerificationStepUpdatedWebhook` | `webhookType` | `webhook_type` |
| `IdentityVerificationStepUpdatedWebhook` | `webhookCode` | `webhook_code` |
| `IdentityVerificationStepUpdatedWebhook` | `identityVerificationId` | `identity_verification_id` |
| `IdentityVerificationUserAddress` | `postalCode` | `postal_code` |
| `IdentityVerificationUserData` | `phoneNumber` | `phone_number` |
| `IdentityVerificationUserData` | `dateOfBirth` | `date_of_birth` |
| `IdentityVerificationUserData` | `ipAddress` | `ip_address` |
| `IdentityVerificationUserData` | `emailAddress` | `email_address` |
| `IdentityVerificationUserData` | `idNumber` | `id_number` |
| `ImageQualityDetails` | `glareCheck` | `glare_check` |
| `ImageQualityDetails` | `dimensionsCheck` | `dimensions_check` |
| `ImageQualityDetails` | `blurCheck` | `blur_check` |
| `IncidentUpdate` | `updatedDate` | `updated_date` |
| `IncomeInsights` | `totalIncome` | `total_income` |
| `IncomeInsights` | `incomeExcludingTransfers` | `income_excluding_transfers` |
| `IncomeInsights` | `transfersIn` | `transfers_in` |
| `IncomeInsightsFilter` | `includedCategories` | `included_categories` |
| `IncomeInsightsFilter` | `excludedCategories` | `excluded_categories` |
| `IncomeOverride` | `w2S` | `w2s` |
| `IncomeSourcesCounts` | `baselineCount` | `baseline_count` |
| `IncomeSourcesCounts` | `currentCount` | `current_count` |
| `IncomeSummary` | `employerName` | `employer_name` |
| `IncomeSummary` | `employeeName` | `employee_name` |
| `IncomeSummary` | `ytdGrossIncome` | `ytd_gross_income` |
| `IncomeSummary` | `ytdNetIncome` | `ytd_net_income` |
| `IncomeSummary` | `payFrequency` | `pay_frequency` |
| `IncomeSummary` | `projectedWage` | `projected_wage` |
| `IncomeSummary` | `verifiedTransaction` | `verified_transaction` |
| `IncomeSummaryFieldNumber` | `verificationStatus` | `verification_status` |
| `IncomeSummaryFieldString` | `verificationStatus` | `verification_status` |
| `IncomeVerificationCreateRequest` | `clientId` | `client_id` |
| `IncomeVerificationCreateRequest` | `precheckId` | `precheck_id` |
| `IncomeVerificationCreateRequestOptions` | `accessTokens` | `access_tokens` |
| `IncomeVerificationCreateResponse` | `incomeVerificationId` | `income_verification_id` |
| `IncomeVerificationCreateResponse` | `requestId` | `request_id` |
| `IncomeVerificationDocumentsDownloadRequest` | `clientId` | `client_id` |
| `IncomeVerificationDocumentsDownloadRequest` | `incomeVerificationId` | `income_verification_id` |
| `IncomeVerificationDocumentsDownloadRequest` | `accessToken` | `access_token` |
| `IncomeVerificationDocumentsDownloadRequest` | `documentId` | `document_id` |
| `IncomeVerificationPaystubsGetRequest` | `clientId` | `client_id` |
| `IncomeVerificationPaystubsGetRequest` | `incomeVerificationId` | `income_verification_id` |
| `IncomeVerificationPaystubsGetRequest` | `accessToken` | `access_token` |
| `IncomeVerificationPaystubsGetResponse` | `documentMetadata` | `document_metadata` |
| `IncomeVerificationPaystubsGetResponse` | `requestId` | `request_id` |
| `IncomeVerificationPrecheckEmployer` | `taxId` | `tax_id` |
| `IncomeVerificationPrecheckEmployerAddress` | `postalCode` | `postal_code` |
| `IncomeVerificationPrecheckEmployerAddressData` | `postalCode` | `postal_code` |
| `IncomeVerificationPrecheckMilitaryInfo` | `isActiveDuty` | `is_active_duty` |
| `IncomeVerificationPrecheckRequest` | `clientId` | `client_id` |
| `IncomeVerificationPrecheckRequest` | `payrollInstitution` | `payroll_institution` |
| `IncomeVerificationPrecheckRequest` | `transactionsAccessToken` | `transactions_access_token` |
| `IncomeVerificationPrecheckRequest` | `transactionsAccessTokens` | `transactions_access_tokens` |
| `IncomeVerificationPrecheckRequest` | `usMilitaryInfo` | `us_military_info` |
| `IncomeVerificationPrecheckResponse` | `precheckId` | `precheck_id` |
| `IncomeVerificationPrecheckResponse` | `requestId` | `request_id` |
| `IncomeVerificationPrecheckUser` | `firstName` | `first_name` |
| `IncomeVerificationPrecheckUser` | `lastName` | `last_name` |
| `IncomeVerificationPrecheckUser` | `emailAddress` | `email_address` |
| `IncomeVerificationPrecheckUser` | `homeAddress` | `home_address` |
| `IncomeVerificationRefreshReconnectNeededWebhook` | `webhookType` | `webhook_type` |
| `IncomeVerificationRefreshReconnectNeededWebhook` | `webhookCode` | `webhook_code` |
| `IncomeVerificationRefreshReconnectNeededWebhook` | `userId` | `user_id` |
| `IncomeVerificationRiskSignalsStatusWebhook` | `webhookType` | `webhook_type` |
| `IncomeVerificationRiskSignalsStatusWebhook` | `webhookCode` | `webhook_code` |
| `IncomeVerificationRiskSignalsStatusWebhook` | `itemId` | `item_id` |
| `IncomeVerificationRiskSignalsStatusWebhook` | `userId` | `user_id` |
| `IncomeVerificationRiskSignalsStatusWebhook` | `riskSignalsStatus` | `risk_signals_status` |
| `IncomeVerificationStatusWebhook` | `webhookType` | `webhook_type` |
| `IncomeVerificationStatusWebhook` | `webhookCode` | `webhook_code` |
| `IncomeVerificationStatusWebhook` | `itemId` | `item_id` |
| `IncomeVerificationStatusWebhook` | `userId` | `user_id` |
| `IncomeVerificationStatusWebhook` | `verificationStatus` | `verification_status` |
| `IncomeVerificationTaxformsGetRequest` | `clientId` | `client_id` |
| `IncomeVerificationTaxformsGetRequest` | `incomeVerificationId` | `income_verification_id` |
| `IncomeVerificationTaxformsGetRequest` | `accessToken` | `access_token` |
| `IncomeVerificationTaxformsGetResponse` | `requestId` | `request_id` |
| `IncomeVerificationTaxformsGetResponse` | `documentMetadata` | `document_metadata` |
| `IndividualScreeningHitNames` | `isPrimary` | `is_primary` |
| `IndividualScreeningHitNames` | `weakAliasDetermination` | `weak_alias_determination` |
| `IndividualWatchlistProgram` | `createdAt` | `created_at` |
| `IndividualWatchlistProgram` | `isRescanningEnabled` | `is_rescanning_enabled` |
| `IndividualWatchlistProgram` | `listsEnabled` | `lists_enabled` |
| `IndividualWatchlistProgram` | `nameSensitivity` | `name_sensitivity` |
| `IndividualWatchlistProgram` | `auditTrail` | `audit_trail` |
| `IndividualWatchlistProgram` | `isArchived` | `is_archived` |
| `InflowModel` | `incomeAmount` | `income_amount` |
| `InflowModel` | `paymentDayOfMonth` | `payment_day_of_month` |
| `InflowModel` | `transactionName` | `transaction_name` |
| `InflowModel` | `statementDayOfMonth` | `statement_day_of_month` |
| `InitialUpdateWebhook` | `webhookType` | `webhook_type` |
| `InitialUpdateWebhook` | `webhookCode` | `webhook_code` |
| `InitialUpdateWebhook` | `newTransactions` | `new_transactions` |
| `InitialUpdateWebhook` | `itemId` | `item_id` |
| `Institution` | `institutionId` | `institution_id` |
| `Institution` | `countryCodes` | `country_codes` |
| `Institution` | `primaryColor` | `primary_color` |
| `Institution` | `routingNumbers` | `routing_numbers` |
| `Institution` | `dtcNumbers` | `dtc_numbers` |
| `Institution` | `paymentInitiationMetadata` | `payment_initiation_metadata` |
| `Institution` | `authMetadata` | `auth_metadata` |
| `InstitutionStatus` | `itemLogins` | `item_logins` |
| `InstitutionStatus` | `transactionsUpdates` | `transactions_updates` |
| `InstitutionStatus` | `investmentsUpdates` | `investments_updates` |
| `InstitutionStatus` | `liabilitiesUpdates` | `liabilities_updates` |
| `InstitutionStatus` | `healthIncidents` | `health_incidents` |
| `InstitutionStatusAlertWebhook` | `webhookType` | `webhook_type` |
| `InstitutionStatusAlertWebhook` | `webhookCode` | `webhook_code` |
| `InstitutionStatusAlertWebhook` | `institutionId` | `institution_id` |
| `InstitutionStatusAlertWebhook` | `institutionOverallSuccessRate` | `institution_overall_success_rate` |
| `InstitutionsGetByIdRequest` | `clientId` | `client_id` |
| `InstitutionsGetByIdRequest` | `institutionId` | `institution_id` |
| `InstitutionsGetByIdRequest` | `countryCodes` | `country_codes` |
| `InstitutionsGetByIdRequestOptions` | `includeOptionalMetadata` | `include_optional_metadata` |
| `InstitutionsGetByIdRequestOptions` | `includeStatus` | `include_status` |
| `InstitutionsGetByIdRequestOptions` | `includeAuthMetadata` | `include_auth_metadata` |
| `InstitutionsGetByIdRequestOptions` | `includePaymentInitiationMetadata` | `include_payment_initiation_metadata` |
| `InstitutionsGetByIdResponse` | `requestId` | `request_id` |
| `InstitutionsGetRequest` | `clientId` | `client_id` |
| `InstitutionsGetRequest` | `countryCodes` | `country_codes` |
| `InstitutionsGetRequestOptions` | `routingNumbers` | `routing_numbers` |
| `InstitutionsGetRequestOptions` | `includeOptionalMetadata` | `include_optional_metadata` |
| `InstitutionsGetRequestOptions` | `includeAuthMetadata` | `include_auth_metadata` |
| `InstitutionsGetRequestOptions` | `includePaymentInitiationMetadata` | `include_payment_initiation_metadata` |
| `InstitutionsGetResponse` | `requestId` | `request_id` |
| `InstitutionsSearchPaymentInitiationOptions` | `paymentId` | `payment_id` |
| `InstitutionsSearchPaymentInitiationOptions` | `consentId` | `consent_id` |
| `InstitutionsSearchRequest` | `clientId` | `client_id` |
| `InstitutionsSearchRequest` | `countryCodes` | `country_codes` |
| `InstitutionsSearchRequestOptions` | `includeOptionalMetadata` | `include_optional_metadata` |
| `InstitutionsSearchRequestOptions` | `includeAuthMetadata` | `include_auth_metadata` |
| `InstitutionsSearchRequestOptions` | `includePaymentInitiationMetadata` | `include_payment_initiation_metadata` |
| `InstitutionsSearchRequestOptions` | `paymentInitiation` | `payment_initiation` |
| `InstitutionsSearchResponse` | `requestId` | `request_id` |
| `InvestmentAccount` | `accountId` | `account_id` |
| `InvestmentAccount` | `officialName` | `official_name` |
| `InvestmentAccount` | `verificationStatus` | `verification_status` |
| `InvestmentAccount` | `verificationName` | `verification_name` |
| `InvestmentAccount` | `verificationInsights` | `verification_insights` |
| `InvestmentAccount` | `persistentAccountId` | `persistent_account_id` |
| `InvestmentAccount` | `holderCategory` | `holder_category` |
| `InvestmentAccountBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `InvestmentAccountBalance` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `InvestmentAccountBalance` | `lastUpdatedDatetime` | `last_updated_datetime` |
| `InvestmentAccountBalance` | `marginLoanAmount` | `margin_loan_amount` |
| `InvestmentFilter` | `accountSubtypes` | `account_subtypes` |
| `InvestmentHoldingsGetRequestOptions` | `accountIds` | `account_ids` |
| `InvestmentTransaction` | `investmentTransactionId` | `investment_transaction_id` |
| `InvestmentTransaction` | `cancelTransactionId` | `cancel_transaction_id` |
| `InvestmentTransaction` | `accountId` | `account_id` |
| `InvestmentTransaction` | `securityId` | `security_id` |
| `InvestmentTransaction` | `transactionDatetime` | `transaction_datetime` |
| `InvestmentTransaction` | `isoCurrencyCode` | `iso_currency_code` |
| `InvestmentTransaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `InvestmentsAuth401KContributionDetails` | `lastContributionTransactions` | `last_contribution_transactions` |
| `InvestmentsAuth401KContributionDetails` | `contributionCount1M` | `contribution_count_1m` |
| `InvestmentsAuth401KContributionDetails` | `contributionAmount1M` | `contribution_amount_1m` |
| `InvestmentsAuth401KContributionDetails` | `contributionCount6M` | `contribution_count_6m` |
| `InvestmentsAuth401KContributionDetails` | `contributionAmount6M` | `contribution_amount_6m` |
| `InvestmentsAuth401KContributionDetails` | `contributionCount12M` | `contribution_count_12m` |
| `InvestmentsAuth401KContributionDetails` | `contributionAmount12M` | `contribution_amount_12m` |
| `InvestmentsAuth401KFeeDetails` | `accountFeeCount12M` | `account_fee_count_12m` |
| `InvestmentsAuth401KFeeDetails` | `accountFeeAmount12M` | `account_fee_amount_12m` |
| `InvestmentsAuthAccountDetails401K` | `accountId` | `account_id` |
| `InvestmentsAuthAccountDetails401K` | `feeDetails` | `fee_details` |
| `InvestmentsAuthAccountDetails401K` | `contributionDetails` | `contribution_details` |
| `InvestmentsAuthGetNumbers` | `retirement401K` | `retirement_401k` |
| `InvestmentsAuthGetRequest` | `clientId` | `client_id` |
| `InvestmentsAuthGetRequest` | `accessToken` | `access_token` |
| `InvestmentsAuthGetRequestOptions` | `accountIds` | `account_ids` |
| `InvestmentsAuthGetResponse` | `dataSources` | `data_sources` |
| `InvestmentsAuthGetResponse` | `accountDetails401K` | `account_details_401k` |
| `InvestmentsAuthGetResponse` | `requestId` | `request_id` |
| `InvestmentsAuthOwner` | `accountId` | `account_id` |
| `InvestmentsDefaultUpdateWebhook` | `webhookType` | `webhook_type` |
| `InvestmentsDefaultUpdateWebhook` | `webhookCode` | `webhook_code` |
| `InvestmentsDefaultUpdateWebhook` | `itemId` | `item_id` |
| `InvestmentsDefaultUpdateWebhook` | `userId` | `user_id` |
| `InvestmentsDefaultUpdateWebhook` | `newInvestmentsTransactions` | `new_investments_transactions` |
| `InvestmentsDefaultUpdateWebhook` | `cancelledInvestmentsTransactions` | `cancelled_investments_transactions` |
| `InvestmentsHistoricalUpdateWebhook` | `webhookType` | `webhook_type` |
| `InvestmentsHistoricalUpdateWebhook` | `webhookCode` | `webhook_code` |
| `InvestmentsHistoricalUpdateWebhook` | `itemId` | `item_id` |
| `InvestmentsHistoricalUpdateWebhook` | `userId` | `user_id` |
| `InvestmentsHistoricalUpdateWebhook` | `newInvestmentsTransactions` | `new_investments_transactions` |
| `InvestmentsHistoricalUpdateWebhook` | `cancelledInvestmentsTransactions` | `cancelled_investments_transactions` |
| `InvestmentsHoldingsGetRequest` | `clientId` | `client_id` |
| `InvestmentsHoldingsGetRequest` | `accessToken` | `access_token` |
| `InvestmentsHoldingsGetResponse` | `requestId` | `request_id` |
| `InvestmentsHoldingsGetResponse` | `isInvestmentsFallbackItem` | `is_investments_fallback_item` |
| `InvestmentsRefreshRequest` | `clientId` | `client_id` |
| `InvestmentsRefreshRequest` | `accessToken` | `access_token` |
| `InvestmentsRefreshResponse` | `requestId` | `request_id` |
| `InvestmentsTransactionsGetRequest` | `clientId` | `client_id` |
| `InvestmentsTransactionsGetRequest` | `accessToken` | `access_token` |
| `InvestmentsTransactionsGetRequest` | `startDate` | `start_date` |
| `InvestmentsTransactionsGetRequest` | `endDate` | `end_date` |
| `InvestmentsTransactionsGetRequestOptions` | `accountIds` | `account_ids` |
| `InvestmentsTransactionsGetRequestOptions` | `asyncUpdate` | `async_update` |
| `InvestmentsTransactionsGetResponse` | `investmentTransactions` | `investment_transactions` |
| `InvestmentsTransactionsGetResponse` | `totalInvestmentTransactions` | `total_investment_transactions` |
| `InvestmentsTransactionsGetResponse` | `requestId` | `request_id` |
| `InvestmentsTransactionsGetResponse` | `isInvestmentsFallbackItem` | `is_investments_fallback_item` |
| `Issue` | `issueId` | `issue_id` |
| `Issue` | `institutionNames` | `institution_names` |
| `Issue` | `institutionIds` | `institution_ids` |
| `Issue` | `createdAt` | `created_at` |
| `Issue` | `detailedDescription` | `detailed_description` |
| `IssueResolvedWebhook` | `webhookType` | `webhook_type` |
| `IssueResolvedWebhook` | `webhookCode` | `webhook_code` |
| `IssueResolvedWebhook` | `issueId` | `issue_id` |
| `IssueResolvedWebhook` | `issueDescription` | `issue_description` |
| `IssueResolvedWebhook` | `issueResolvedAt` | `issue_resolved_at` |
| `IssueResolvedWebhook` | `institutionId` | `institution_id` |
| `IssueResolvedWebhook` | `institutionName` | `institution_name` |
| `IssuesGetRequest` | `clientId` | `client_id` |
| `IssuesGetRequest` | `issueId` | `issue_id` |
| `IssuesGetResponse` | `requestId` | `request_id` |
| `IssuesSearchRequest` | `clientId` | `client_id` |
| `IssuesSearchRequest` | `itemId` | `item_id` |
| `IssuesSearchRequest` | `linkSessionId` | `link_session_id` |
| `IssuesSearchRequest` | `linkSessionRequestId` | `link_session_request_id` |
| `IssuesSearchResponse` | `requestId` | `request_id` |
| `IssuesSubscribeRequest` | `clientId` | `client_id` |
| `IssuesSubscribeRequest` | `issueId` | `issue_id` |
| `IssuesSubscribeResponse` | `requestId` | `request_id` |
| `Item` | `itemId` | `item_id` |
| `Item` | `institutionId` | `institution_id` |
| `Item` | `institutionName` | `institution_name` |
| `Item` | `authMethod` | `auth_method` |
| `Item` | `availableProducts` | `available_products` |
| `Item` | `billedProducts` | `billed_products` |
| `Item` | `consentedProducts` | `consented_products` |
| `Item` | `consentExpirationTime` | `consent_expiration_time` |
| `Item` | `updateType` | `update_type` |
| `ItemAccessTokenInvalidateRequest` | `clientId` | `client_id` |
| `ItemAccessTokenInvalidateRequest` | `accessToken` | `access_token` |
| `ItemAccessTokenInvalidateResponse` | `newAccessToken` | `new_access_token` |
| `ItemAccessTokenInvalidateResponse` | `requestId` | `request_id` |
| `ItemActivityListRequest` | `clientId` | `client_id` |
| `ItemActivityListRequest` | `accessToken` | `access_token` |
| `ItemActivityListResponse` | `requestId` | `request_id` |
| `ItemActivityListResponse` | `lastDataAccessTimes` | `last_data_access_times` |
| `ItemAddResultWebhook` | `webhookType` | `webhook_type` |
| `ItemAddResultWebhook` | `webhookCode` | `webhook_code` |
| `ItemAddResultWebhook` | `linkSessionId` | `link_session_id` |
| `ItemAddResultWebhook` | `linkToken` | `link_token` |
| `ItemAddResultWebhook` | `publicToken` | `public_token` |
| `ItemApplicationListRequest` | `clientId` | `client_id` |
| `ItemApplicationListRequest` | `accessToken` | `access_token` |
| `ItemApplicationListResponse` | `requestId` | `request_id` |
| `ItemApplicationListUserAuth` | `userId` | `user_id` |
| `ItemApplicationListUserAuth` | `fiUsernameHash` | `fi_username_hash` |
| `ItemApplicationScopesUpdateRequest` | `clientId` | `client_id` |
| `ItemApplicationScopesUpdateRequest` | `accessToken` | `access_token` |
| `ItemApplicationScopesUpdateRequest` | `applicationId` | `application_id` |
| `ItemApplicationScopesUpdateResponse` | `requestId` | `request_id` |
| `ItemApplicationUnlinkRequest` | `clientId` | `client_id` |
| `ItemApplicationUnlinkRequest` | `accessToken` | `access_token` |
| `ItemApplicationUnlinkRequest` | `applicationId` | `application_id` |
| `ItemApplicationUnlinkResponse` | `requestId` | `request_id` |
| `ItemErrorWebhook` | `webhookType` | `webhook_type` |
| `ItemErrorWebhook` | `webhookCode` | `webhook_code` |
| `ItemErrorWebhook` | `itemId` | `item_id` |
| `ItemErrorWebhook` | `userId` | `user_id` |
| `ItemGetRequest` | `clientId` | `client_id` |
| `ItemGetRequest` | `accessToken` | `access_token` |
| `ItemGetResponse` | `requestId` | `request_id` |
| `ItemImportRequest` | `clientId` | `client_id` |
| `ItemImportRequest` | `institutionId` | `institution_id` |
| `ItemImportRequest` | `userAuth` | `user_auth` |
| `ItemImportRequestUserAuth` | `userId` | `user_id` |
| `ItemImportRequestUserAuth` | `authToken` | `auth_token` |
| `ItemImportResponse` | `accessToken` | `access_token` |
| `ItemImportResponse` | `requestId` | `request_id` |
| `ItemLoginRepairedWebhook` | `webhookType` | `webhook_type` |
| `ItemLoginRepairedWebhook` | `webhookCode` | `webhook_code` |
| `ItemLoginRepairedWebhook` | `itemId` | `item_id` |
| `ItemLoginRepairedWebhook` | `userId` | `user_id` |
| `ItemProductReadyWebhook` | `webhookType` | `webhook_type` |
| `ItemProductReadyWebhook` | `webhookCode` | `webhook_code` |
| `ItemProductReadyWebhook` | `itemId` | `item_id` |
| `ItemProductsTerminateRequest` | `clientId` | `client_id` |
| `ItemProductsTerminateRequest` | `accessToken` | `access_token` |
| `ItemProductsTerminateRequest` | `reasonCode` | `reason_code` |
| `ItemProductsTerminateRequest` | `reasonNote` | `reason_note` |
| `ItemProductsTerminateResponse` | `requestId` | `request_id` |
| `ItemPublicTokenCreateRequest` | `clientId` | `client_id` |
| `ItemPublicTokenCreateRequest` | `accessToken` | `access_token` |
| `ItemPublicTokenCreateResponse` | `publicToken` | `public_token` |
| `ItemPublicTokenCreateResponse` | `requestId` | `request_id` |
| `ItemPublicTokenExchangeRequest` | `clientId` | `client_id` |
| `ItemPublicTokenExchangeRequest` | `publicToken` | `public_token` |
| `ItemPublicTokenExchangeResponse` | `accessToken` | `access_token` |
| `ItemPublicTokenExchangeResponse` | `itemId` | `item_id` |
| `ItemPublicTokenExchangeResponse` | `requestId` | `request_id` |
| `ItemRemoveRequest` | `clientId` | `client_id` |
| `ItemRemoveRequest` | `accessToken` | `access_token` |
| `ItemRemoveRequest` | `reasonCode` | `reason_code` |
| `ItemRemoveRequest` | `reasonNote` | `reason_note` |
| `ItemRemoveResponse` | `requestId` | `request_id` |
| `ItemStatus` | `lastWebhook` | `last_webhook` |
| `ItemStatusInvestments` | `lastSuccessfulUpdate` | `last_successful_update` |
| `ItemStatusInvestments` | `lastFailedUpdate` | `last_failed_update` |
| `ItemStatusLastWebhook` | `sentAt` | `sent_at` |
| `ItemStatusLastWebhook` | `codeSent` | `code_sent` |
| `ItemStatusNullable` | `lastWebhook` | `last_webhook` |
| `ItemStatusTransactions` | `lastSuccessfulUpdate` | `last_successful_update` |
| `ItemStatusTransactions` | `lastFailedUpdate` | `last_failed_update` |
| `ItemWebhookUpdateRequest` | `clientId` | `client_id` |
| `ItemWebhookUpdateRequest` | `accessToken` | `access_token` |
| `ItemWebhookUpdateResponse` | `requestId` | `request_id` |
| `ItemWithConsentFields` | `itemId` | `item_id` |
| `ItemWithConsentFields` | `institutionId` | `institution_id` |
| `ItemWithConsentFields` | `institutionName` | `institution_name` |
| `ItemWithConsentFields` | `authMethod` | `auth_method` |
| `ItemWithConsentFields` | `availableProducts` | `available_products` |
| `ItemWithConsentFields` | `billedProducts` | `billed_products` |
| `ItemWithConsentFields` | `consentedProducts` | `consented_products` |
| `ItemWithConsentFields` | `consentExpirationTime` | `consent_expiration_time` |
| `ItemWithConsentFields` | `updateType` | `update_type` |
| `ItemWithConsentFields` | `createdAt` | `created_at` |
| `ItemWithConsentFields` | `consentedUseCases` | `consented_use_cases` |
| `ItemWithConsentFields` | `consentedDataScopes` | `consented_data_scopes` |
| `JwkPublicKey` | `createdAt` | `created_at` |
| `JwkPublicKey` | `expiredAt` | `expired_at` |
| `KycCheckAddressSummary` | `poBox` | `po_box` |
| `KycCheckAddressSummary` | `postalCode` | `postal_code` |
| `KycCheckAddressSummary` | `internationalDetails` | `international_details` |
| `KycCheckDetails` | `dateOfBirth` | `date_of_birth` |
| `KycCheckDetails` | `idNumber` | `id_number` |
| `KycCheckDetails` | `phoneNumber` | `phone_number` |
| `KycCheckDetailsInternationalAddress` | `houseNumber` | `house_number` |
| `KycCheckNameSummary` | `givenName` | `given_name` |
| `KycCheckNameSummary` | `familyName` | `family_name` |
| `KycCheckPhoneSummary` | `areaCode` | `area_code` |
| `LastDataAccessTimes` | `applicationId` | `application_id` |
| `LastDataAccessTimes` | `accountBalanceInfo` | `account_balance_info` |
| `LastDataAccessTimes` | `accountRoutingNumber` | `account_routing_number` |
| `LastDataAccessTimes` | `contactDetails` | `contact_details` |
| `LastDataAccessTimes` | `creditAndLoans` | `credit_and_loans` |
| `LastDataAccessTimes` | `payrollInfo` | `payroll_info` |
| `LastDataAccessTimes` | `transactionRiskInfo` | `transaction_risk_info` |
| `LatestScoredEvent` | `eventId` | `event_id` |
| `LatestScoredEvent` | `eventType` | `event_type` |
| `LatestScoredEvent` | `trustIndex` | `trust_index` |
| `LatestScoredEvent` | `fraudAttributes` | `fraud_attributes` |
| `LayerAuthenticationPassedWebhook` | `webhookType` | `webhook_type` |
| `LayerAuthenticationPassedWebhook` | `webhookCode` | `webhook_code` |
| `LayerAuthenticationPassedWebhook` | `linkSessionId` | `link_session_id` |
| `LayerAuthenticationPassedWebhook` | `linkToken` | `link_token` |
| `LendScore` | `reasonCodes` | `reason_codes` |
| `LendScore` | `errorReason` | `error_reason` |
| `LiabilitiesDefaultUpdateWebhook` | `webhookType` | `webhook_type` |
| `LiabilitiesDefaultUpdateWebhook` | `webhookCode` | `webhook_code` |
| `LiabilitiesDefaultUpdateWebhook` | `itemId` | `item_id` |
| `LiabilitiesDefaultUpdateWebhook` | `userId` | `user_id` |
| `LiabilitiesDefaultUpdateWebhook` | `accountIdsWithNewLiabilities` | `account_ids_with_new_liabilities` |
| `LiabilitiesDefaultUpdateWebhook` | `accountIdsWithUpdatedLiabilities` | `account_ids_with_updated_liabilities` |
| `LiabilitiesGetRequest` | `clientId` | `client_id` |
| `LiabilitiesGetRequest` | `accessToken` | `access_token` |
| `LiabilitiesGetRequestOptions` | `accountIds` | `account_ids` |
| `LiabilitiesGetResponse` | `requestId` | `request_id` |
| `LiabilityOverride` | `purchaseApr` | `purchase_apr` |
| `LiabilityOverride` | `cashApr` | `cash_apr` |
| `LiabilityOverride` | `balanceTransferApr` | `balance_transfer_apr` |
| `LiabilityOverride` | `specialApr` | `special_apr` |
| `LiabilityOverride` | `lastPaymentAmount` | `last_payment_amount` |
| `LiabilityOverride` | `minimumPaymentAmount` | `minimum_payment_amount` |
| `LiabilityOverride` | `isOverdue` | `is_overdue` |
| `LiabilityOverride` | `originationDate` | `origination_date` |
| `LiabilityOverride` | `nominalApr` | `nominal_apr` |
| `LiabilityOverride` | `interestCapitalizationGracePeriodMonths` | `interest_capitalization_grace_period_months` |
| `LiabilityOverride` | `repaymentModel` | `repayment_model` |
| `LiabilityOverride` | `expectedPayoffDate` | `expected_payoff_date` |
| `LiabilityOverride` | `isFederal` | `is_federal` |
| `LiabilityOverride` | `loanName` | `loan_name` |
| `LiabilityOverride` | `loanStatus` | `loan_status` |
| `LiabilityOverride` | `paymentReferenceNumber` | `payment_reference_number` |
| `LiabilityOverride` | `pslfStatus` | `pslf_status` |
| `LiabilityOverride` | `repaymentPlanDescription` | `repayment_plan_description` |
| `LiabilityOverride` | `repaymentPlanType` | `repayment_plan_type` |
| `LiabilityOverride` | `sequenceNumber` | `sequence_number` |
| `LiabilityOverride` | `servicerAddress` | `servicer_address` |
| `LinkCallbackMetadata` | `callbackType` | `callback_type` |
| `LinkCallbackMetadata` | `eventName` | `event_name` |
| `LinkCallbackMetadata` | `linkSessionId` | `link_session_id` |
| `LinkCallbackMetadata` | `requestId` | `request_id` |
| `LinkDeliveryAccount` | `verificationStatus` | `verification_status` |
| `LinkDeliveryAccount` | `classType` | `class_type` |
| `LinkDeliveryCallbackWebhook` | `webhookType` | `webhook_type` |
| `LinkDeliveryCallbackWebhook` | `webhookCode` | `webhook_code` |
| `LinkDeliveryCallbackWebhook` | `linkDeliverySessionId` | `link_delivery_session_id` |
| `LinkDeliveryCallbackWebhook` | `linkCallbackMetadata` | `link_callback_metadata` |
| `LinkDeliveryCreateRequest` | `clientId` | `client_id` |
| `LinkDeliveryCreateRequest` | `linkToken` | `link_token` |
| `LinkDeliveryCreateResponse` | `linkDeliveryUrl` | `link_delivery_url` |
| `LinkDeliveryCreateResponse` | `linkDeliverySessionId` | `link_delivery_session_id` |
| `LinkDeliveryCreateResponse` | `requestId` | `request_id` |
| `LinkDeliveryGetRequest` | `clientId` | `client_id` |
| `LinkDeliveryGetRequest` | `linkDeliverySessionId` | `link_delivery_session_id` |
| `LinkDeliveryGetResponse` | `createdAt` | `created_at` |
| `LinkDeliveryGetResponse` | `completedAt` | `completed_at` |
| `LinkDeliveryGetResponse` | `requestId` | `request_id` |
| `LinkDeliveryGetResponse` | `accessTokens` | `access_tokens` |
| `LinkDeliveryGetResponse` | `itemIds` | `item_ids` |
| `LinkDeliveryInstitution` | `institutionId` | `institution_id` |
| `LinkDeliveryMetadata` | `communicationMethod` | `communication_method` |
| `LinkDeliveryMetadata` | `deliveryStatus` | `delivery_status` |
| `LinkDeliveryRecipient` | `communicationMethods` | `communication_methods` |
| `LinkDeliveryRecipient` | `firstName` | `first_name` |
| `LinkEvent` | `eventName` | `event_name` |
| `LinkEvent` | `eventId` | `event_id` |
| `LinkEvent` | `eventMetadata` | `event_metadata` |
| `LinkEventMetadata` | `errorCode` | `error_code` |
| `LinkEventMetadata` | `errorMessage` | `error_message` |
| `LinkEventMetadata` | `errorType` | `error_type` |
| `LinkEventMetadata` | `exitStatus` | `exit_status` |
| `LinkEventMetadata` | `institutionId` | `institution_id` |
| `LinkEventMetadata` | `institutionName` | `institution_name` |
| `LinkEventMetadata` | `institutionSearchQuery` | `institution_search_query` |
| `LinkEventMetadata` | `requestId` | `request_id` |
| `LinkEventMetadata` | `mfaType` | `mfa_type` |
| `LinkEventMetadata` | `viewName` | `view_name` |
| `LinkEventMetadata` | `brandName` | `brand_name` |
| `LinkEventMetadata` | `matchReason` | `match_reason` |
| `LinkEventMetadata` | `routingNumber` | `routing_number` |
| `LinkEventMetadata` | `accountNumberMask` | `account_number_mask` |
| `LinkEventsWebhook` | `webhookType` | `webhook_type` |
| `LinkEventsWebhook` | `webhookCode` | `webhook_code` |
| `LinkEventsWebhook` | `linkSessionId` | `link_session_id` |
| `LinkEventsWebhook` | `linkToken` | `link_token` |
| `LinkOAuthCorrelationIdExchangeRequest` | `clientId` | `client_id` |
| `LinkOAuthCorrelationIdExchangeRequest` | `linkCorrelationId` | `link_correlation_id` |
| `LinkOAuthCorrelationIdExchangeResponse` | `linkToken` | `link_token` |
| `LinkOAuthCorrelationIdExchangeResponse` | `requestId` | `request_id` |
| `LinkSessionBankEmploymentResult` | `itemId` | `item_id` |
| `LinkSessionBankIncomeResult` | `itemId` | `item_id` |
| `LinkSessionCraDocumentUploadResult` | `numBankStatementsUploaded` | `num_bank_statements_uploaded` |
| `LinkSessionCraItemAddResult` | `itemId` | `item_id` |
| `LinkSessionCraUpdateResult` | `itemId` | `item_id` |
| `LinkSessionExitMetadata` | `linkSessionId` | `link_session_id` |
| `LinkSessionExitMetadata` | `requestId` | `request_id` |
| `LinkSessionExitMetadataInstitution` | `institutionId` | `institution_id` |
| `LinkSessionFinishedWebhook` | `webhookType` | `webhook_type` |
| `LinkSessionFinishedWebhook` | `webhookCode` | `webhook_code` |
| `LinkSessionFinishedWebhook` | `linkSessionId` | `link_session_id` |
| `LinkSessionFinishedWebhook` | `linkToken` | `link_token` |
| `LinkSessionFinishedWebhook` | `publicToken` | `public_token` |
| `LinkSessionFinishedWebhook` | `publicTokens` | `public_tokens` |
| `LinkSessionFinishedWebhook` | `userId` | `user_id` |
| `LinkSessionItemAddResult` | `publicToken` | `public_token` |
| `LinkSessionPayrollIncomeResult` | `numPaystubsRetrieved` | `num_paystubs_retrieved` |
| `LinkSessionPayrollIncomeResult` | `numW2SRetrieved` | `num_w2s_retrieved` |
| `LinkSessionResults` | `itemAddResults` | `item_add_results` |
| `LinkSessionResults` | `craItemAddResults` | `cra_item_add_results` |
| `LinkSessionResults` | `craUpdateResults` | `cra_update_results` |
| `LinkSessionResults` | `bankIncomeResults` | `bank_income_results` |
| `LinkSessionResults` | `payrollIncomeResults` | `payroll_income_results` |
| `LinkSessionResults` | `documentIncomeResults` | `document_income_results` |
| `LinkSessionResults` | `craDocumentUploadResults` | `cra_document_upload_results` |
| `LinkSessionSuccess` | `publicToken` | `public_token` |
| `LinkSessionSuccessMetadata` | `linkSessionId` | `link_session_id` |
| `LinkSessionSuccessMetadata` | `transferStatus` | `transfer_status` |
| `LinkSessionSuccessMetadataAccount` | `verificationStatus` | `verification_status` |
| `LinkSessionSuccessMetadataAccount` | `classType` | `class_type` |
| `LinkSessionSuccessMetadataInstitution` | `institutionId` | `institution_id` |
| `LinkTokenCashflowReport` | `daysRequested` | `days_requested` |
| `LinkTokenCreateCardSwitch` | `cardBin` | `card_bin` |
| `LinkTokenCreateCreditFilter` | `accountSubtypes` | `account_subtypes` |
| `LinkTokenCreateDepositoryFilter` | `accountSubtypes` | `account_subtypes` |
| `LinkTokenCreateDepositoryFilter` | `limitedPurposeTypes` | `limited_purpose_types` |
| `LinkTokenCreateHostedLink` | `deliveryMethod` | `delivery_method` |
| `LinkTokenCreateHostedLink` | `completionRedirectUri` | `completion_redirect_uri` |
| `LinkTokenCreateHostedLink` | `urlLifetimeSeconds` | `url_lifetime_seconds` |
| `LinkTokenCreateHostedLink` | `isMobileApp` | `is_mobile_app` |
| `LinkTokenCreateIdentity` | `isDocumentUpload` | `is_document_upload` |
| `LinkTokenCreateIdentity` | `accountIds` | `account_ids` |
| `LinkTokenCreateIdentity` | `parsingConfigs` | `parsing_configs` |
| `LinkTokenCreateInstitutionData` | `routingNumber` | `routing_number` |
| `LinkTokenCreateInvestmentFilter` | `accountSubtypes` | `account_subtypes` |
| `LinkTokenCreateLoanFilter` | `accountSubtypes` | `account_subtypes` |
| `LinkTokenCreateRequest` | `clientId` | `client_id` |
| `LinkTokenCreateRequest` | `clientName` | `client_name` |
| `LinkTokenCreateRequest` | `countryCodes` | `country_codes` |
| `LinkTokenCreateRequest` | `userId` | `user_id` |
| `LinkTokenCreateRequest` | `requiredIfSupportedProducts` | `required_if_supported_products` |
| `LinkTokenCreateRequest` | `optionalProducts` | `optional_products` |
| `LinkTokenCreateRequest` | `additionalConsentedProducts` | `additional_consented_products` |
| `LinkTokenCreateRequest` | `accessToken` | `access_token` |
| `LinkTokenCreateRequest` | `accessTokens` | `access_tokens` |
| `LinkTokenCreateRequest` | `linkCustomizationName` | `link_customization_name` |
| `LinkTokenCreateRequest` | `appearanceMode` | `appearance_mode` |
| `LinkTokenCreateRequest` | `redirectUri` | `redirect_uri` |
| `LinkTokenCreateRequest` | `androidPackageName` | `android_package_name` |
| `LinkTokenCreateRequest` | `institutionData` | `institution_data` |
| `LinkTokenCreateRequest` | `cardSwitch` | `card_switch` |
| `LinkTokenCreateRequest` | `accountFilters` | `account_filters` |
| `LinkTokenCreateRequest` | `euConfig` | `eu_config` |
| `LinkTokenCreateRequest` | `institutionId` | `institution_id` |
| `LinkTokenCreateRequest` | `paymentConfiguration` | `payment_configuration` |
| `LinkTokenCreateRequest` | `paymentInitiation` | `payment_initiation` |
| `LinkTokenCreateRequest` | `incomeVerification` | `income_verification` |
| `LinkTokenCreateRequest` | `baseReport` | `base_report` |
| `LinkTokenCreateRequest` | `creditPartnerInsights` | `credit_partner_insights` |
| `LinkTokenCreateRequest` | `craOptions` | `cra_options` |
| `LinkTokenCreateRequest` | `consumerReportPermissiblePurpose` | `consumer_report_permissible_purpose` |
| `LinkTokenCreateRequest` | `identityVerification` | `identity_verification` |
| `LinkTokenCreateRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `LinkTokenCreateRequest` | `investmentsAuth` | `investments_auth` |
| `LinkTokenCreateRequest` | `hostedLink` | `hosted_link` |
| `LinkTokenCreateRequest` | `cashflowReport` | `cashflow_report` |
| `LinkTokenCreateRequest` | `craEnabled` | `cra_enabled` |
| `LinkTokenCreateRequest` | `financekitSupported` | `financekit_supported` |
| `LinkTokenCreateRequest` | `enableMultiItemLink` | `enable_multi_item_link` |
| `LinkTokenCreateRequest` | `userToken` | `user_token` |
| `LinkTokenCreateRequestAuth` | `authTypeSelectEnabled` | `auth_type_select_enabled` |
| `LinkTokenCreateRequestAuth` | `automatedMicrodepositsEnabled` | `automated_microdeposits_enabled` |
| `LinkTokenCreateRequestAuth` | `instantMatchEnabled` | `instant_match_enabled` |
| `LinkTokenCreateRequestAuth` | `sameDayMicrodepositsEnabled` | `same_day_microdeposits_enabled` |
| `LinkTokenCreateRequestAuth` | `instantMicrodepositsEnabled` | `instant_microdeposits_enabled` |
| `LinkTokenCreateRequestAuth` | `rerouteToCredentials` | `reroute_to_credentials` |
| `LinkTokenCreateRequestAuth` | `databaseMatchEnabled` | `database_match_enabled` |
| `LinkTokenCreateRequestAuth` | `databaseInsightsEnabled` | `database_insights_enabled` |
| `LinkTokenCreateRequestAuth` | `flowType` | `flow_type` |
| `LinkTokenCreateRequestAuth` | `smsMicrodepositsVerificationEnabled` | `sms_microdeposits_verification_enabled` |
| `LinkTokenCreateRequestBaseReport` | `daysRequested` | `days_requested` |
| `LinkTokenCreateRequestBaseReport` | `clientReportId` | `client_report_id` |
| `LinkTokenCreateRequestCraOptions` | `daysRequested` | `days_requested` |
| `LinkTokenCreateRequestCraOptions` | `daysRequired` | `days_required` |
| `LinkTokenCreateRequestCraOptions` | `clientReportId` | `client_report_id` |
| `LinkTokenCreateRequestCraOptions` | `partnerInsights` | `partner_insights` |
| `LinkTokenCreateRequestCraOptions` | `baseReport` | `base_report` |
| `LinkTokenCreateRequestCraOptions` | `cashflowInsights` | `cashflow_insights` |
| `LinkTokenCreateRequestCraOptions` | `lendScore` | `lend_score` |
| `LinkTokenCreateRequestCraOptions` | `networkInsights` | `network_insights` |
| `LinkTokenCreateRequestCraOptions` | `includeInvestments` | `include_investments` |
| `LinkTokenCreateRequestCraOptions` | `incomeInsights` | `income_insights` |
| `LinkTokenCreateRequestCraOptionsBaseReport` | `clientReportId` | `client_report_id` |
| `LinkTokenCreateRequestCraOptionsBaseReport` | `gseOptions` | `gse_options` |
| `LinkTokenCreateRequestCraOptionsBaseReport` | `requireIdentity` | `require_identity` |
| `LinkTokenCreateRequestCraOptionsBaseReport` | `homeLendingReportOptions` | `home_lending_report_options` |
| `LinkTokenCreateRequestCraOptionsBaseReportGseOptions` | `reportTypes` | `report_types` |
| `LinkTokenCreateRequestCraOptionsCashflowInsights` | `attributesVersion` | `attributes_version` |
| `LinkTokenCreateRequestCraOptionsIncomeInsights` | `incomeInsightsFilter` | `income_insights_filter` |
| `LinkTokenCreateRequestCraOptionsIncomeInsights` | `incomeInsightsVersion` | `income_insights_version` |
| `LinkTokenCreateRequestCraOptionsLendScore` | `lendScoreVersion` | `lend_score_version` |
| `LinkTokenCreateRequestCraOptionsNetworkInsights` | `networkInsightsVersion` | `network_insights_version` |
| `LinkTokenCreateRequestCraOptionsPartnerInsights` | `prismVersions` | `prism_versions` |
| `LinkTokenCreateRequestCreditPartnerInsights` | `daysRequested` | `days_requested` |
| `LinkTokenCreateRequestDepositSwitch` | `depositSwitchId` | `deposit_switch_id` |
| `LinkTokenCreateRequestEmployment` | `employmentSourceTypes` | `employment_source_types` |
| `LinkTokenCreateRequestEmployment` | `bankEmployment` | `bank_employment` |
| `LinkTokenCreateRequestEmploymentBankIncome` | `daysRequested` | `days_requested` |
| `LinkTokenCreateRequestIdentityVerification` | `templateId` | `template_id` |
| `LinkTokenCreateRequestIdentityVerification` | `gaveConsent` | `gave_consent` |
| `LinkTokenCreateRequestIncomeVerification` | `incomeVerificationId` | `income_verification_id` |
| `LinkTokenCreateRequestIncomeVerification` | `assetReportId` | `asset_report_id` |
| `LinkTokenCreateRequestIncomeVerification` | `accessTokens` | `access_tokens` |
| `LinkTokenCreateRequestIncomeVerification` | `incomeSourceTypes` | `income_source_types` |
| `LinkTokenCreateRequestIncomeVerification` | `bankIncome` | `bank_income` |
| `LinkTokenCreateRequestIncomeVerification` | `payrollIncome` | `payroll_income` |
| `LinkTokenCreateRequestIncomeVerification` | `statedIncomeSources` | `stated_income_sources` |
| `LinkTokenCreateRequestIncomeVerificationBankIncome` | `daysRequested` | `days_requested` |
| `LinkTokenCreateRequestIncomeVerificationBankIncome` | `enableMultipleItems` | `enable_multiple_items` |
| `LinkTokenCreateRequestIncomeVerificationPayrollIncome` | `flowTypes` | `flow_types` |
| `LinkTokenCreateRequestIncomeVerificationPayrollIncome` | `isUpdateMode` | `is_update_mode` |
| `LinkTokenCreateRequestIncomeVerificationPayrollIncome` | `itemIdToUpdate` | `item_id_to_update` |
| `LinkTokenCreateRequestIncomeVerificationPayrollIncome` | `parsingConfig` | `parsing_config` |
| `LinkTokenCreateRequestPaymentInitiation` | `paymentId` | `payment_id` |
| `LinkTokenCreateRequestPaymentInitiation` | `consentId` | `consent_id` |
| `LinkTokenCreateRequestStatements` | `startDate` | `start_date` |
| `LinkTokenCreateRequestStatements` | `endDate` | `end_date` |
| `LinkTokenCreateRequestTransfer` | `intentId` | `intent_id` |
| `LinkTokenCreateRequestTransfer` | `authorizationId` | `authorization_id` |
| `LinkTokenCreateRequestTransfer` | `paymentProfileToken` | `payment_profile_token` |
| `LinkTokenCreateRequestUpdate` | `accountSelectionEnabled` | `account_selection_enabled` |
| `LinkTokenCreateRequestUpdate` | `reauthorizationEnabled` | `reauthorization_enabled` |
| `LinkTokenCreateRequestUpdate` | `itemIds` | `item_ids` |
| `LinkTokenCreateRequestUser` | `clientUserId` | `client_user_id` |
| `LinkTokenCreateRequestUser` | `legalName` | `legal_name` |
| `LinkTokenCreateRequestUser` | `phoneNumber` | `phone_number` |
| `LinkTokenCreateRequestUser` | `phoneNumberVerifiedTime` | `phone_number_verified_time` |
| `LinkTokenCreateRequestUser` | `emailAddress` | `email_address` |
| `LinkTokenCreateRequestUser` | `emailAddressVerifiedTime` | `email_address_verified_time` |
| `LinkTokenCreateRequestUser` | `dateOfBirth` | `date_of_birth` |
| `LinkTokenCreateRequestUser` | `idNumber` | `id_number` |
| `LinkTokenCreateRequestUserStatedIncomeSource` | `payPerCycle` | `pay_per_cycle` |
| `LinkTokenCreateRequestUserStatedIncomeSource` | `payAnnual` | `pay_annual` |
| `LinkTokenCreateRequestUserStatedIncomeSource` | `payType` | `pay_type` |
| `LinkTokenCreateRequestUserStatedIncomeSource` | `payFrequency` | `pay_frequency` |
| `LinkTokenCreateResponse` | `linkToken` | `link_token` |
| `LinkTokenCreateResponse` | `requestId` | `request_id` |
| `LinkTokenCreateResponse` | `hostedLinkUrl` | `hosted_link_url` |
| `LinkTokenCreateResponse` | `userId` | `user_id` |
| `LinkTokenGetMetadataResponse` | `initialProducts` | `initial_products` |
| `LinkTokenGetMetadataResponse` | `countryCodes` | `country_codes` |
| `LinkTokenGetMetadataResponse` | `institutionData` | `institution_data` |
| `LinkTokenGetMetadataResponse` | `accountFilters` | `account_filters` |
| `LinkTokenGetMetadataResponse` | `redirectUri` | `redirect_uri` |
| `LinkTokenGetMetadataResponse` | `clientName` | `client_name` |
| `LinkTokenGetRequest` | `clientId` | `client_id` |
| `LinkTokenGetRequest` | `linkToken` | `link_token` |
| `LinkTokenGetResponse` | `linkToken` | `link_token` |
| `LinkTokenGetResponse` | `createdAt` | `created_at` |
| `LinkTokenGetResponse` | `linkSessions` | `link_sessions` |
| `LinkTokenGetResponse` | `userId` | `user_id` |
| `LinkTokenGetResponse` | `requestId` | `request_id` |
| `LinkTokenGetSessionsResponse` | `linkSessionId` | `link_session_id` |
| `LinkTokenGetSessionsResponse` | `startedAt` | `started_at` |
| `LinkTokenGetSessionsResponse` | `finishedAt` | `finished_at` |
| `LinkTokenGetSessionsResponse` | `onSuccess` | `on_success` |
| `LinkTokenGetSessionsResponse` | `onExit` | `on_exit` |
| `LinkTokenInvestments` | `allowUnverifiedCryptoWallets` | `allow_unverified_crypto_wallets` |
| `LinkTokenInvestments` | `allowManualEntry` | `allow_manual_entry` |
| `LinkTokenInvestmentsAuth` | `manualEntryEnabled` | `manual_entry_enabled` |
| `LinkTokenInvestmentsAuth` | `maskedNumberMatchEnabled` | `masked_number_match_enabled` |
| `LinkTokenInvestmentsAuth` | `statedAccountNumberEnabled` | `stated_account_number_enabled` |
| `LinkTokenInvestmentsAuth` | `rollover401KEnabled` | `rollover_401k_enabled` |
| `LinkTokenTransactions` | `daysRequested` | `days_requested` |
| `LinkUserDeliveryStatusWebhook` | `webhookType` | `webhook_type` |
| `LinkUserDeliveryStatusWebhook` | `webhookCode` | `webhook_code` |
| `LinkUserDeliveryStatusWebhook` | `linkDeliverySessionId` | `link_delivery_session_id` |
| `LinkUserDeliveryStatusWebhook` | `linkDeliveryMetadata` | `link_delivery_metadata` |
| `Loan` | `loanIdentifiers` | `LOAN_IDENTIFIERS` |
| `LoanDisbursementsIndicators` | `isoCurrencyCode` | `iso_currency_code` |
| `LoanDisbursementsIndicators` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `LoanDisbursementsIndicators` | `categoryDetails` | `category_details` |
| `LoanDisbursementsIndicators` | `monthlyAverage` | `monthly_average` |
| `LoanDisbursementsIndicators` | `topProviders` | `top_providers` |
| `LoanDisbursementsIndicators` | `transactionsCount` | `transactions_count` |
| `LoanDisbursementsIndicators` | `monthlySummaries` | `monthly_summaries` |
| `LoanDisbursementsIndicators` | `daysSinceLastOccurrence` | `days_since_last_occurrence` |
| `LoanDisbursementsIndicators` | `percentageOfIncome` | `percentage_of_income` |
| `LoanFilter` | `accountSubtypes` | `account_subtypes` |
| `LoanIdentifier` | `loanIdentifier` | `LoanIdentifier` |
| `LoanIdentifier` | `loanIdentifierType` | `LoanIdentifierType` |
| `LoanIdentifiers` | `loanIdentifier` | `LOAN_IDENTIFIER` |
| `LoanPaymentsCounts` | `baselineCount` | `baseline_count` |
| `LoanPaymentsCounts` | `currentCount` | `current_count` |
| `LoanPaymentsIndicators` | `isoCurrencyCode` | `iso_currency_code` |
| `LoanPaymentsIndicators` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `LoanPaymentsIndicators` | `monthlyAverage` | `monthly_average` |
| `LoanPaymentsIndicators` | `categoryDetails` | `category_details` |
| `LoanPaymentsIndicators` | `topProviders` | `top_providers` |
| `LoanPaymentsIndicators` | `transactionsCount` | `transactions_count` |
| `LoanPaymentsIndicators` | `monthlySummaries` | `monthly_summaries` |
| `LoanPaymentsIndicators` | `daysSinceLastOccurrence` | `days_since_last_occurrence` |
| `LoanPaymentsIndicators` | `percentageOfIncome` | `percentage_of_income` |
| `LoanPaymentsMerchantCounts` | `baselineCount` | `baseline_count` |
| `LoanPaymentsMerchantCounts` | `currentCount` | `current_count` |
| `Loans` | `loan` | `LOAN` |
| `Mfa` | `questionRounds` | `question_rounds` |
| `Mfa` | `questionsPerRound` | `questions_per_round` |
| `Mfa` | `selectionRounds` | `selection_rounds` |
| `Mfa` | `selectionsPerQuestion` | `selections_per_question` |
| `MerchantInsights` | `entityId` | `entity_id` |
| `MerchantInsights` | `transactionCount` | `transaction_count` |
| `MerchantInsights` | `personalFinanceCategoryPrimary` | `personal_finance_category_primary` |
| `MerchantInsights` | `personalFinanceCategoryDetailed` | `personal_finance_category_detailed` |
| `MerchantInsights` | `totalOutflows` | `total_outflows` |
| `MerchantInsights` | `totalInflows` | `total_inflows` |
| `Meta` | `officialName` | `official_name` |
| `MonitoringIncomeInsights` | `totalMonthlyIncome` | `total_monthly_income` |
| `MonitoringIncomeInsights` | `incomeSourcesCounts` | `income_sources_counts` |
| `MonitoringIncomeInsights` | `forecastedMonthlyIncome` | `forecasted_monthly_income` |
| `MonitoringIncomeInsights` | `historicalAnnualIncome` | `historical_annual_income` |
| `MonitoringIncomeInsights` | `incomeSources` | `income_sources` |
| `MonitoringIncomeSource` | `incomeSourceId` | `income_source_id` |
| `MonitoringIncomeSource` | `incomeDescription` | `income_description` |
| `MonitoringIncomeSource` | `incomeCategory` | `income_category` |
| `MonitoringIncomeSource` | `lastTransactionDate` | `last_transaction_date` |
| `MonitoringInsightsItemStatus` | `statusCode` | `status_code` |
| `MonitoringLoanInsights` | `loanPaymentsCounts` | `loan_payments_counts` |
| `MonitoringLoanInsights` | `loanDisbursementsCount` | `loan_disbursements_count` |
| `MonitoringLoanInsights` | `loanPaymentMerchantsCounts` | `loan_payment_merchants_counts` |
| `MonthlyAverage` | `isoCurrencyCode` | `iso_currency_code` |
| `MonthlyAverage` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `MonthlySummary` | `startDate` | `start_date` |
| `MonthlySummary` | `endDate` | `end_date` |
| `MonthlySummary` | `totalAmount` | `total_amount` |
| `MortgageLiability` | `accountId` | `account_id` |
| `MortgageLiability` | `accountNumber` | `account_number` |
| `MortgageLiability` | `currentLateFee` | `current_late_fee` |
| `MortgageLiability` | `escrowBalance` | `escrow_balance` |
| `MortgageLiability` | `hasPmi` | `has_pmi` |
| `MortgageLiability` | `hasPrepaymentPenalty` | `has_prepayment_penalty` |
| `MortgageLiability` | `interestRate` | `interest_rate` |
| `MortgageLiability` | `lastPaymentAmount` | `last_payment_amount` |
| `MortgageLiability` | `lastPaymentDate` | `last_payment_date` |
| `MortgageLiability` | `loanTypeDescription` | `loan_type_description` |
| `MortgageLiability` | `loanTerm` | `loan_term` |
| `MortgageLiability` | `maturityDate` | `maturity_date` |
| `MortgageLiability` | `nextMonthlyPayment` | `next_monthly_payment` |
| `MortgageLiability` | `nextPaymentDueDate` | `next_payment_due_date` |
| `MortgageLiability` | `originationDate` | `origination_date` |
| `MortgageLiability` | `originationPrincipalAmount` | `origination_principal_amount` |
| `MortgageLiability` | `pastDueAmount` | `past_due_amount` |
| `MortgageLiability` | `propertyAddress` | `property_address` |
| `MortgageLiability` | `ytdInterestPaid` | `ytd_interest_paid` |
| `MortgageLiability` | `ytdPrincipalPaid` | `ytd_principal_paid` |
| `MortgagePropertyAddress` | `postalCode` | `postal_code` |
| `MultiDocumentRiskSignal` | `documentReferences` | `document_references` |
| `MultiDocumentRiskSignal` | `riskSignals` | `risk_signals` |
| `Name` | `firstName` | `FirstName` |
| `Name` | `lastName` | `LastName` |
| `Name2` | `givenName` | `given_name` |
| `Name2` | `familyName` | `family_name` |
| `NameMatchScore` | `isFirstNameOrLastNameMatch` | `is_first_name_or_last_name_match` |
| `NameMatchScore` | `isNicknameMatch` | `is_nickname_match` |
| `NameMatchScore` | `isBusinessNameDetected` | `is_business_name_detected` |
| `NegativeBalanceInsights` | `daysSinceLastOccurrence` | `days_since_last_occurrence` |
| `NegativeBalanceInsights` | `daysWithNegativeBalance` | `days_with_negative_balance` |
| `NegativeBalanceInsights` | `minimumBalance` | `minimum_balance` |
| `NegativeBalanceOccurrence` | `startDate` | `start_date` |
| `NegativeBalanceOccurrence` | `endDate` | `end_date` |
| `NegativeBalanceOccurrence` | `minimumBalance` | `minimum_balance` |
| `NetPay` | `currentAmount` | `current_amount` |
| `NetPay` | `isoCurrencyCode` | `iso_currency_code` |
| `NetPay` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `NetPay` | `ytdAmount` | `ytd_amount` |
| `NetworkStatusGetRequest` | `clientId` | `client_id` |
| `NetworkStatusGetRequest` | `templateId` | `template_id` |
| `NetworkStatusGetResponse` | `networkStatus` | `network_status` |
| `NetworkStatusGetResponse` | `requestId` | `request_id` |
| `NetworkStatusGetUser` | `phoneNumber` | `phone_number` |
| `NewAccountsAvailableWebhook` | `webhookType` | `webhook_type` |
| `NewAccountsAvailableWebhook` | `webhookCode` | `webhook_code` |
| `NewAccountsAvailableWebhook` | `itemId` | `item_id` |
| `NewAccountsAvailableWebhook` | `userId` | `user_id` |
| `Numbers` | `achRouting` | `ach_routing` |
| `Numbers` | `achWireRouting` | `ach_wire_routing` |
| `Numbers` | `eftInstitution` | `eft_institution` |
| `Numbers` | `eftBranch` | `eft_branch` |
| `Numbers` | `internationalBic` | `international_bic` |
| `Numbers` | `internationalIban` | `international_iban` |
| `Numbers` | `bacsSortCode` | `bacs_sort_code` |
| `NumbersAcats` | `accountId` | `account_id` |
| `NumbersAcats` | `dtcNumbers` | `dtc_numbers` |
| `NumbersAch` | `accountId` | `account_id` |
| `NumbersAch` | `isTokenizedAccountNumber` | `is_tokenized_account_number` |
| `NumbersAch` | `wireRouting` | `wire_routing` |
| `NumbersAch` | `canTransferIn` | `can_transfer_in` |
| `NumbersAch` | `canTransferOut` | `can_transfer_out` |
| `NumbersAchNullable` | `accountId` | `account_id` |
| `NumbersAchNullable` | `isTokenizedAccountNumber` | `is_tokenized_account_number` |
| `NumbersAchNullable` | `wireRouting` | `wire_routing` |
| `NumbersAchNullable` | `canTransferIn` | `can_transfer_in` |
| `NumbersAchNullable` | `canTransferOut` | `can_transfer_out` |
| `NumbersAton` | `accountId` | `account_id` |
| `NumbersBacs` | `accountId` | `account_id` |
| `NumbersBacs` | `sortCode` | `sort_code` |
| `NumbersBacsNullable` | `accountId` | `account_id` |
| `NumbersBacsNullable` | `sortCode` | `sort_code` |
| `NumbersEft` | `accountId` | `account_id` |
| `NumbersEftNullable` | `accountId` | `account_id` |
| `NumbersInternational` | `accountId` | `account_id` |
| `NumbersInternationalNullable` | `accountId` | `account_id` |
| `NumbersRetirement401K` | `accountId` | `account_id` |
| `OAuthErrorResponse` | `errorDescription` | `error_description` |
| `OAuthErrorResponse` | `errorUri` | `error_uri` |
| `OAuthErrorResponse` | `requestId` | `request_id` |
| `OAuthErrorResponseError` | `errorDescription` | `error_description` |
| `OAuthErrorResponseError` | `errorUri` | `error_uri` |
| `OAuthErrorResponseError` | `requestId` | `request_id` |
| `OAuthIntrospectRequest` | `clientId` | `client_id` |
| `OAuthIntrospectRequest` | `clientSecret` | `client_secret` |
| `OAuthIntrospectResponse` | `clientId` | `client_id` |
| `OAuthIntrospectResponse` | `tokenType` | `token_type` |
| `OAuthIntrospectResponse` | `userId` | `user_id` |
| `OAuthIntrospectResponse` | `requestId` | `request_id` |
| `OAuthRevokeRequest` | `clientId` | `client_id` |
| `OAuthRevokeRequest` | `clientSecret` | `client_secret` |
| `OAuthRevokeResponse` | `requestId` | `request_id` |
| `OAuthTokenRequest` | `grantType` | `grant_type` |
| `OAuthTokenRequest` | `clientId` | `client_id` |
| `OAuthTokenRequest` | `clientSecret` | `client_secret` |
| `OAuthTokenRequest` | `refreshToken` | `refresh_token` |
| `OAuthTokenRequest` | `subjectToken` | `subject_token` |
| `OAuthTokenRequest` | `subjectTokenType` | `subject_token_type` |
| `OAuthTokenResponse` | `accessToken` | `access_token` |
| `OAuthTokenResponse` | `refreshToken` | `refresh_token` |
| `OAuthTokenResponse` | `tokenType` | `token_type` |
| `OAuthTokenResponse` | `expiresIn` | `expires_in` |
| `OAuthTokenResponse` | `requestId` | `request_id` |
| `OptionContract` | `contractType` | `contract_type` |
| `OptionContract` | `expirationDate` | `expiration_date` |
| `OptionContract` | `strikePrice` | `strike_price` |
| `OptionContract` | `underlyingSecurityTicker` | `underlying_security_ticker` |
| `OriginatingFundSource` | `fullName` | `full_name` |
| `OriginatingFundSource` | `accountNumber` | `account_number` |
| `Originator` | `clientId` | `client_id` |
| `Originator` | `transferDiligenceStatus` | `transfer_diligence_status` |
| `OtherFilter` | `accountSubtypes` | `account_subtypes` |
| `OutlierTransactionsInsights` | `transactionsCount` | `transactions_count` |
| `OutlierTransactionsInsights` | `totalAmount` | `total_amount` |
| `OutlierTransactionsInsights` | `topCategories` | `top_categories` |
| `OverrideAccounts` | `startingBalance` | `starting_balance` |
| `OverrideAccounts` | `forceAvailableBalance` | `force_available_balance` |
| `OverrideAccounts` | `hasNullAvailableBalance` | `has_null_available_balance` |
| `OverrideAccounts` | `investmentTransactions` | `investment_transactions` |
| `OverrideAccounts` | `inflowModel` | `inflow_model` |
| `Owner` | `phoneNumbers` | `phone_numbers` |
| `OwnerOverride` | `phoneNumbers` | `phone_numbers` |
| `PslfStatus` | `estimatedEligibilityDate` | `estimated_eligibility_date` |
| `PslfStatus` | `paymentsMade` | `payments_made` |
| `PslfStatus` | `paymentsRemaining` | `payments_remaining` |
| `Parties` | `party` | `PARTY` |
| `PartnerCustomerCreateRequest` | `clientId` | `client_id` |
| `PartnerCustomerCreateRequest` | `companyName` | `company_name` |
| `PartnerCustomerCreateRequest` | `isDiligenceAttested` | `is_diligence_attested` |
| `PartnerCustomerCreateRequest` | `createLinkCustomization` | `create_link_customization` |
| `PartnerCustomerCreateRequest` | `legalEntityName` | `legal_entity_name` |
| `PartnerCustomerCreateRequest` | `applicationName` | `application_name` |
| `PartnerCustomerCreateRequest` | `technicalContact` | `technical_contact` |
| `PartnerCustomerCreateRequest` | `billingContact` | `billing_contact` |
| `PartnerCustomerCreateRequest` | `customerSupportInfo` | `customer_support_info` |
| `PartnerCustomerCreateRequest` | `isBankAddendumCompleted` | `is_bank_addendum_completed` |
| `PartnerCustomerCreateRequest` | `assetsUnderManagement` | `assets_under_management` |
| `PartnerCustomerCreateRequest` | `redirectUris` | `redirect_uris` |
| `PartnerCustomerCreateRequest` | `registrationNumber` | `registration_number` |
| `PartnerCustomerCreateResponse` | `endCustomer` | `end_customer` |
| `PartnerCustomerCreateResponse` | `requestId` | `request_id` |
| `PartnerCustomerEnableRequest` | `clientId` | `client_id` |
| `PartnerCustomerEnableRequest` | `endCustomerClientId` | `end_customer_client_id` |
| `PartnerCustomerEnableResponse` | `productionSecret` | `production_secret` |
| `PartnerCustomerEnableResponse` | `requestId` | `request_id` |
| `PartnerCustomerGetRequest` | `clientId` | `client_id` |
| `PartnerCustomerGetRequest` | `endCustomerClientId` | `end_customer_client_id` |
| `PartnerCustomerGetResponse` | `endCustomer` | `end_customer` |
| `PartnerCustomerGetResponse` | `requestId` | `request_id` |
| `PartnerCustomerOAuthInstitutionsGetRequest` | `clientId` | `client_id` |
| `PartnerCustomerOAuthInstitutionsGetRequest` | `endCustomerClientId` | `end_customer_client_id` |
| `PartnerCustomerOAuthInstitutionsGetResponse` | `flowdownStatus` | `flowdown_status` |
| `PartnerCustomerOAuthInstitutionsGetResponse` | `questionnaireStatus` | `questionnaire_status` |
| `PartnerCustomerOAuthInstitutionsGetResponse` | `requestId` | `request_id` |
| `PartnerCustomerRemoveRequest` | `clientId` | `client_id` |
| `PartnerCustomerRemoveRequest` | `endCustomerClientId` | `end_customer_client_id` |
| `PartnerCustomerRemoveResponse` | `requestId` | `request_id` |
| `PartnerEndCustomer` | `clientId` | `client_id` |
| `PartnerEndCustomer` | `companyName` | `company_name` |
| `PartnerEndCustomerAddress` | `postalCode` | `postal_code` |
| `PartnerEndCustomerAddress` | `countryCode` | `country_code` |
| `PartnerEndCustomerAssetsUnderManagement` | `isoCurrencyCode` | `iso_currency_code` |
| `PartnerEndCustomerBankAddendumAcceptance` | `customerAccepted` | `customer_accepted` |
| `PartnerEndCustomerBankAddendumAcceptance` | `customerIpAddress` | `customer_ip_address` |
| `PartnerEndCustomerBankAddendumAcceptance` | `customerAgreementTimestamp` | `customer_agreement_timestamp` |
| `PartnerEndCustomerBillingContact` | `givenName` | `given_name` |
| `PartnerEndCustomerBillingContact` | `familyName` | `family_name` |
| `PartnerEndCustomerCraPurposes` | `writtenInstruction` | `WRITTEN_INSTRUCTION` |
| `PartnerEndCustomerCraPurposes` | `extensionOfCreditOrAccountReview` | `EXTENSION_OF_CREDIT_OR_ACCOUNT_REVIEW` |
| `PartnerEndCustomerCraPurposes` | `employment` | `EMPLOYMENT` |
| `PartnerEndCustomerCraPurposes` | `insuranceUnderwriting` | `INSURANCE_UNDERWRITING` |
| `PartnerEndCustomerCraPurposes` | `licenseEligibility` | `LICENSE_ELIGIBILITY` |
| `PartnerEndCustomerCraPurposes` | `riskAssessment` | `RISK_ASSESSMENT` |
| `PartnerEndCustomerCraPurposes` | `businessNeedTransaction` | `BUSINESS_NEED_TRANSACTION` |
| `PartnerEndCustomerCraPurposes` | `businessNeedAccountReview` | `BUSINESS_NEED_ACCOUNT_REVIEW` |
| `PartnerEndCustomerCraQuestionnaire` | `isThirdPartyInvolved` | `is_third_party_involved` |
| `PartnerEndCustomerCraQuestionnaire` | `isTechnicalServiceProviderInvolved` | `is_technical_service_provider_involved` |
| `PartnerEndCustomerCraUseCases` | `useCases` | `use_cases` |
| `PartnerEndCustomerCustomerSupportInfo` | `phoneNumber` | `phone_number` |
| `PartnerEndCustomerCustomerSupportInfo` | `contactUrl` | `contact_url` |
| `PartnerEndCustomerCustomerSupportInfo` | `linkUpdateUrl` | `link_update_url` |
| `PartnerEndCustomerOAuthInstitution` | `institutionId` | `institution_id` |
| `PartnerEndCustomerOAuthInstitution` | `productionEnablementDate` | `production_enablement_date` |
| `PartnerEndCustomerOAuthInstitution` | `classicDisablementDate` | `classic_disablement_date` |
| `PartnerEndCustomerOAuthStatusUpdatedWebhook` | `webhookType` | `webhook_type` |
| `PartnerEndCustomerOAuthStatusUpdatedWebhook` | `webhookCode` | `webhook_code` |
| `PartnerEndCustomerOAuthStatusUpdatedWebhook` | `endCustomerClientId` | `end_customer_client_id` |
| `PartnerEndCustomerOAuthStatusUpdatedWebhook` | `institutionId` | `institution_id` |
| `PartnerEndCustomerOAuthStatusUpdatedWebhook` | `institutionName` | `institution_name` |
| `PartnerEndCustomerTechnicalContact` | `givenName` | `given_name` |
| `PartnerEndCustomerTechnicalContact` | `familyName` | `family_name` |
| `PartnerEndCustomerWithSecrets` | `clientId` | `client_id` |
| `PartnerEndCustomerWithSecrets` | `companyName` | `company_name` |
| `Party` | `individual` | `INDIVIDUAL` |
| `Party` | `roles` | `ROLES` |
| `Party` | `taxpayerIdentifiers` | `TAXPAYER_IDENTIFIERS` |
| `PayFrequency` | `verificationStatus` | `verification_status` |
| `PayPeriodDetails` | `checkAmount` | `check_amount` |
| `PayPeriodDetails` | `distributionBreakdown` | `distribution_breakdown` |
| `PayPeriodDetails` | `endDate` | `end_date` |
| `PayPeriodDetails` | `grossEarnings` | `gross_earnings` |
| `PayPeriodDetails` | `payDate` | `pay_date` |
| `PayPeriodDetails` | `payFrequency` | `pay_frequency` |
| `PayPeriodDetails` | `payDay` | `pay_day` |
| `PayPeriodDetails` | `startDate` | `start_date` |
| `PayStubDeductionsBreakdown` | `currentAmount` | `current_amount` |
| `PayStubDeductionsBreakdown` | `isoCurrencyCode` | `iso_currency_code` |
| `PayStubDeductionsBreakdown` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `PayStubDeductionsBreakdown` | `ytdAmount` | `ytd_amount` |
| `PayStubDeductionsTotal` | `currentAmount` | `current_amount` |
| `PayStubDeductionsTotal` | `isoCurrencyCode` | `iso_currency_code` |
| `PayStubDeductionsTotal` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `PayStubDeductionsTotal` | `ytdAmount` | `ytd_amount` |
| `PayStubDistributionBreakdown` | `accountName` | `account_name` |
| `PayStubDistributionBreakdown` | `bankName` | `bank_name` |
| `PayStubDistributionBreakdown` | `currentAmount` | `current_amount` |
| `PayStubDistributionBreakdown` | `isoCurrencyCode` | `iso_currency_code` |
| `PayStubDistributionBreakdown` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `PayStubEarningsBreakdown` | `canonicalDescription` | `canonical_description` |
| `PayStubEarningsBreakdown` | `currentAmount` | `current_amount` |
| `PayStubEarningsBreakdown` | `isoCurrencyCode` | `iso_currency_code` |
| `PayStubEarningsBreakdown` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `PayStubEarningsBreakdown` | `ytdAmount` | `ytd_amount` |
| `PayStubEarningsTotal` | `currentAmount` | `current_amount` |
| `PayStubEarningsTotal` | `isoCurrencyCode` | `iso_currency_code` |
| `PayStubEarningsTotal` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `PayStubEarningsTotal` | `ytdAmount` | `ytd_amount` |
| `PayStubPayPeriodDetails` | `payAmount` | `pay_amount` |
| `PayStubPayPeriodDetails` | `distributionBreakdown` | `distribution_breakdown` |
| `PayStubPayPeriodDetails` | `endDate` | `end_date` |
| `PayStubPayPeriodDetails` | `grossEarnings` | `gross_earnings` |
| `PayStubPayPeriodDetails` | `isoCurrencyCode` | `iso_currency_code` |
| `PayStubPayPeriodDetails` | `payDate` | `pay_date` |
| `PayStubPayPeriodDetails` | `payFrequency` | `pay_frequency` |
| `PayStubPayPeriodDetails` | `payBasis` | `pay_basis` |
| `PayStubPayPeriodDetails` | `startDate` | `start_date` |
| `PayStubPayPeriodDetails` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `PayStubTaxpayerId` | `idType` | `id_type` |
| `PayStubTaxpayerId` | `idMask` | `id_mask` |
| `PaymentInitiationAddress` | `postalCode` | `postal_code` |
| `PaymentInitiationConsent` | `consentId` | `consent_id` |
| `PaymentInitiationConsent` | `createdAt` | `created_at` |
| `PaymentInitiationConsent` | `recipientId` | `recipient_id` |
| `PaymentInitiationConsent` | `payerDetails` | `payer_details` |
| `PaymentInitiationConsentConstraints` | `validDateTime` | `valid_date_time` |
| `PaymentInitiationConsentConstraints` | `maxPaymentAmount` | `max_payment_amount` |
| `PaymentInitiationConsentConstraints` | `periodicAmounts` | `periodic_amounts` |
| `PaymentInitiationConsentCreateRequest` | `clientId` | `client_id` |
| `PaymentInitiationConsentCreateRequest` | `recipientId` | `recipient_id` |
| `PaymentInitiationConsentCreateRequest` | `payerDetails` | `payer_details` |
| `PaymentInitiationConsentCreateResponse` | `consentId` | `consent_id` |
| `PaymentInitiationConsentCreateResponse` | `requestId` | `request_id` |
| `PaymentInitiationConsentGetRequest` | `clientId` | `client_id` |
| `PaymentInitiationConsentGetRequest` | `consentId` | `consent_id` |
| `PaymentInitiationConsentGetResponse` | `consentId` | `consent_id` |
| `PaymentInitiationConsentGetResponse` | `createdAt` | `created_at` |
| `PaymentInitiationConsentGetResponse` | `recipientId` | `recipient_id` |
| `PaymentInitiationConsentGetResponse` | `payerDetails` | `payer_details` |
| `PaymentInitiationConsentGetResponse` | `requestId` | `request_id` |
| `PaymentInitiationConsentPayerDetails` | `dateOfBirth` | `date_of_birth` |
| `PaymentInitiationConsentPayerDetails` | `phoneNumbers` | `phone_numbers` |
| `PaymentInitiationConsentPaymentExecuteRequest` | `clientId` | `client_id` |
| `PaymentInitiationConsentPaymentExecuteRequest` | `consentId` | `consent_id` |
| `PaymentInitiationConsentPaymentExecuteRequest` | `idempotencyKey` | `idempotency_key` |
| `PaymentInitiationConsentPaymentExecuteRequest` | `processingMode` | `processing_mode` |
| `PaymentInitiationConsentPaymentExecuteResponse` | `paymentId` | `payment_id` |
| `PaymentInitiationConsentPaymentExecuteResponse` | `requestId` | `request_id` |
| `PaymentInitiationConsentRevokeRequest` | `clientId` | `client_id` |
| `PaymentInitiationConsentRevokeRequest` | `consentId` | `consent_id` |
| `PaymentInitiationConsentRevokeResponse` | `requestId` | `request_id` |
| `PaymentInitiationConsentStatusUpdateWebhook` | `webhookType` | `webhook_type` |
| `PaymentInitiationConsentStatusUpdateWebhook` | `webhookCode` | `webhook_code` |
| `PaymentInitiationConsentStatusUpdateWebhook` | `consentId` | `consent_id` |
| `PaymentInitiationConsentStatusUpdateWebhook` | `oldStatus` | `old_status` |
| `PaymentInitiationConsentStatusUpdateWebhook` | `newStatus` | `new_status` |
| `PaymentInitiationMetadata` | `supportsInternationalPayments` | `supports_international_payments` |
| `PaymentInitiationMetadata` | `supportsSepaInstant` | `supports_sepa_instant` |
| `PaymentInitiationMetadata` | `maximumPaymentAmount` | `maximum_payment_amount` |
| `PaymentInitiationMetadata` | `supportsRefundDetails` | `supports_refund_details` |
| `PaymentInitiationMetadata` | `standingOrderMetadata` | `standing_order_metadata` |
| `PaymentInitiationMetadata` | `supportsPaymentConsents` | `supports_payment_consents` |
| `PaymentInitiationOptionalRestrictionBacs` | `sortCode` | `sort_code` |
| `PaymentInitiationPayment` | `paymentId` | `payment_id` |
| `PaymentInitiationPayment` | `recipientId` | `recipient_id` |
| `PaymentInitiationPayment` | `adjustedReference` | `adjusted_reference` |
| `PaymentInitiationPayment` | `lastStatusUpdate` | `last_status_update` |
| `PaymentInitiationPayment` | `refundDetails` | `refund_details` |
| `PaymentInitiationPayment` | `refundIds` | `refund_ids` |
| `PaymentInitiationPayment` | `amountRefunded` | `amount_refunded` |
| `PaymentInitiationPayment` | `walletId` | `wallet_id` |
| `PaymentInitiationPayment` | `adjustedScheme` | `adjusted_scheme` |
| `PaymentInitiationPayment` | `consentId` | `consent_id` |
| `PaymentInitiationPayment` | `transactionId` | `transaction_id` |
| `PaymentInitiationPayment` | `endToEndId` | `end_to_end_id` |
| `PaymentInitiationPaymentCreateRequest` | `clientId` | `client_id` |
| `PaymentInitiationPaymentCreateRequest` | `recipientId` | `recipient_id` |
| `PaymentInitiationPaymentCreateResponse` | `paymentId` | `payment_id` |
| `PaymentInitiationPaymentCreateResponse` | `requestId` | `request_id` |
| `PaymentInitiationPaymentGetRequest` | `clientId` | `client_id` |
| `PaymentInitiationPaymentGetRequest` | `paymentId` | `payment_id` |
| `PaymentInitiationPaymentGetResponse` | `paymentId` | `payment_id` |
| `PaymentInitiationPaymentGetResponse` | `recipientId` | `recipient_id` |
| `PaymentInitiationPaymentGetResponse` | `adjustedReference` | `adjusted_reference` |
| `PaymentInitiationPaymentGetResponse` | `lastStatusUpdate` | `last_status_update` |
| `PaymentInitiationPaymentGetResponse` | `refundDetails` | `refund_details` |
| `PaymentInitiationPaymentGetResponse` | `refundIds` | `refund_ids` |
| `PaymentInitiationPaymentGetResponse` | `amountRefunded` | `amount_refunded` |
| `PaymentInitiationPaymentGetResponse` | `walletId` | `wallet_id` |
| `PaymentInitiationPaymentGetResponse` | `adjustedScheme` | `adjusted_scheme` |
| `PaymentInitiationPaymentGetResponse` | `consentId` | `consent_id` |
| `PaymentInitiationPaymentGetResponse` | `transactionId` | `transaction_id` |
| `PaymentInitiationPaymentGetResponse` | `endToEndId` | `end_to_end_id` |
| `PaymentInitiationPaymentGetResponse` | `requestId` | `request_id` |
| `PaymentInitiationPaymentListRequest` | `clientId` | `client_id` |
| `PaymentInitiationPaymentListRequest` | `consentId` | `consent_id` |
| `PaymentInitiationPaymentListResponse` | `nextCursor` | `next_cursor` |
| `PaymentInitiationPaymentListResponse` | `requestId` | `request_id` |
| `PaymentInitiationPaymentReverseRequest` | `clientId` | `client_id` |
| `PaymentInitiationPaymentReverseRequest` | `paymentId` | `payment_id` |
| `PaymentInitiationPaymentReverseRequest` | `idempotencyKey` | `idempotency_key` |
| `PaymentInitiationPaymentReverseRequest` | `counterpartyDateOfBirth` | `counterparty_date_of_birth` |
| `PaymentInitiationPaymentReverseRequest` | `counterpartyAddress` | `counterparty_address` |
| `PaymentInitiationPaymentReverseResponse` | `refundId` | `refund_id` |
| `PaymentInitiationPaymentReverseResponse` | `requestId` | `request_id` |
| `PaymentInitiationPaymentTokenCreateRequest` | `clientId` | `client_id` |
| `PaymentInitiationPaymentTokenCreateRequest` | `paymentId` | `payment_id` |
| `PaymentInitiationPaymentTokenCreateResponse` | `paymentToken` | `payment_token` |
| `PaymentInitiationPaymentTokenCreateResponse` | `paymentTokenExpirationTime` | `payment_token_expiration_time` |
| `PaymentInitiationPaymentTokenCreateResponse` | `requestId` | `request_id` |
| `PaymentInitiationRecipient` | `recipientId` | `recipient_id` |
| `PaymentInitiationRecipientCreateRequest` | `clientId` | `client_id` |
| `PaymentInitiationRecipientCreateResponse` | `recipientId` | `recipient_id` |
| `PaymentInitiationRecipientCreateResponse` | `requestId` | `request_id` |
| `PaymentInitiationRecipientGetRequest` | `clientId` | `client_id` |
| `PaymentInitiationRecipientGetRequest` | `recipientId` | `recipient_id` |
| `PaymentInitiationRecipientGetResponse` | `recipientId` | `recipient_id` |
| `PaymentInitiationRecipientGetResponse` | `requestId` | `request_id` |
| `PaymentInitiationRecipientListRequest` | `clientId` | `client_id` |
| `PaymentInitiationRecipientListResponse` | `requestId` | `request_id` |
| `PaymentInitiationRecipientListResponse` | `nextCursor` | `next_cursor` |
| `PaymentInitiationStandingOrderMetadata` | `supportsStandingOrderEndDate` | `supports_standing_order_end_date` |
| `PaymentInitiationStandingOrderMetadata` | `supportsStandingOrderNegativeExecutionDays` | `supports_standing_order_negative_execution_days` |
| `PaymentInitiationStandingOrderMetadata` | `validStandingOrderIntervals` | `valid_standing_order_intervals` |
| `PaymentMeta` | `referenceNumber` | `reference_number` |
| `PaymentMeta` | `ppdId` | `ppd_id` |
| `PaymentMeta` | `byOrderOf` | `by_order_of` |
| `PaymentMeta` | `paymentMethod` | `payment_method` |
| `PaymentMeta` | `paymentProcessor` | `payment_processor` |
| `PaymentOptions` | `requestRefundDetails` | `request_refund_details` |
| `PaymentProfileCreateRequest` | `clientId` | `client_id` |
| `PaymentProfileCreateResponse` | `paymentProfileToken` | `payment_profile_token` |
| `PaymentProfileCreateResponse` | `requestId` | `request_id` |
| `PaymentProfileGetRequest` | `clientId` | `client_id` |
| `PaymentProfileGetRequest` | `paymentProfileToken` | `payment_profile_token` |
| `PaymentProfileGetResponse` | `updatedAt` | `updated_at` |
| `PaymentProfileGetResponse` | `createdAt` | `created_at` |
| `PaymentProfileGetResponse` | `deletedAt` | `deleted_at` |
| `PaymentProfileGetResponse` | `requestId` | `request_id` |
| `PaymentProfileRemoveRequest` | `clientId` | `client_id` |
| `PaymentProfileRemoveRequest` | `paymentProfileToken` | `payment_profile_token` |
| `PaymentProfileRemoveResponse` | `requestId` | `request_id` |
| `PaymentStatusUpdateWebhook` | `webhookType` | `webhook_type` |
| `PaymentStatusUpdateWebhook` | `webhookCode` | `webhook_code` |
| `PaymentStatusUpdateWebhook` | `paymentId` | `payment_id` |
| `PaymentStatusUpdateWebhook` | `transactionId` | `transaction_id` |
| `PaymentStatusUpdateWebhook` | `newPaymentStatus` | `new_payment_status` |
| `PaymentStatusUpdateWebhook` | `oldPaymentStatus` | `old_payment_status` |
| `PaymentStatusUpdateWebhook` | `originalReference` | `original_reference` |
| `PaymentStatusUpdateWebhook` | `adjustedReference` | `adjusted_reference` |
| `PaymentStatusUpdateWebhook` | `originalStartDate` | `original_start_date` |
| `PaymentStatusUpdateWebhook` | `adjustedStartDate` | `adjusted_start_date` |
| `PayrollIncomeAccountData` | `accountId` | `account_id` |
| `PayrollIncomeAccountData` | `rateOfPay` | `rate_of_pay` |
| `PayrollIncomeAccountData` | `payFrequency` | `pay_frequency` |
| `PayrollIncomeObject` | `accountId` | `account_id` |
| `PayrollIncomeObject` | `payStubs` | `pay_stubs` |
| `PayrollIncomeObject` | `w2S` | `w2s` |
| `PayrollIncomeObject` | `form1099S` | `form1099s` |
| `PayrollIncomeObject` | `i20S` | `i20s` |
| `PayrollIncomeRateOfPay` | `payRate` | `pay_rate` |
| `PayrollIncomeRateOfPay` | `payAmount` | `pay_amount` |
| `PayrollItem` | `itemId` | `item_id` |
| `PayrollItem` | `institutionId` | `institution_id` |
| `PayrollItem` | `institutionName` | `institution_name` |
| `PayrollItem` | `payrollIncome` | `payroll_income` |
| `PayrollItem` | `updatedAt` | `updated_at` |
| `PayrollItemStatus` | `processingStatus` | `processing_status` |
| `PayrollRiskSignalsItem` | `itemId` | `item_id` |
| `PayrollRiskSignalsItem` | `verificationRiskSignals` | `verification_risk_signals` |
| `Paystub` | `docId` | `doc_id` |
| `Paystub` | `employmentDetails` | `employment_details` |
| `Paystub` | `netPay` | `net_pay` |
| `Paystub` | `payPeriodDetails` | `pay_period_details` |
| `Paystub` | `paystubDetails` | `paystub_details` |
| `Paystub` | `incomeBreakdown` | `income_breakdown` |
| `Paystub` | `ytdEarnings` | `ytd_earnings` |
| `PaystubAddress` | `postalCode` | `postal_code` |
| `PaystubAddress` | `stateCode` | `state_code` |
| `PaystubDeduction` | `isPretax` | `is_pretax` |
| `PaystubDetails` | `payPeriodStartDate` | `pay_period_start_date` |
| `PaystubDetails` | `payPeriodEndDate` | `pay_period_end_date` |
| `PaystubDetails` | `payDate` | `pay_date` |
| `PaystubDetails` | `paystubProvider` | `paystub_provider` |
| `PaystubDetails` | `payFrequency` | `pay_frequency` |
| `PaystubOverride` | `incomeBreakdown` | `income_breakdown` |
| `PaystubOverride` | `netPay` | `net_pay` |
| `PaystubOverride` | `payPeriodDetails` | `pay_period_details` |
| `PaystubOverrideDeductionsBreakdown` | `currentAmount` | `current_amount` |
| `PaystubOverrideDeductionsBreakdown` | `ytdAmount` | `ytd_amount` |
| `PaystubOverrideDeductionsTotal` | `currentAmount` | `current_amount` |
| `PaystubOverrideDeductionsTotal` | `ytdAmount` | `ytd_amount` |
| `PaystubOverrideDistributionBreakdown` | `accountName` | `account_name` |
| `PaystubOverrideDistributionBreakdown` | `bankName` | `bank_name` |
| `PaystubOverrideDistributionBreakdown` | `currentAmount` | `current_amount` |
| `PaystubOverrideEarningsBreakdown` | `canonicalDescription` | `canonical_description` |
| `PaystubOverrideEarningsBreakdown` | `currentAmount` | `current_amount` |
| `PaystubOverrideEarningsBreakdown` | `ytdAmount` | `ytd_amount` |
| `PaystubOverrideEarningsTotal` | `ytdAmount` | `ytd_amount` |
| `PaystubOverrideEmployee` | `maritalStatus` | `marital_status` |
| `PaystubOverrideEmployee` | `taxpayerId` | `taxpayer_id` |
| `PaystubOverrideEmployeeAddress` | `postalCode` | `postal_code` |
| `PaystubOverrideEmployerAddress` | `postalCode` | `postal_code` |
| `PaystubOverrideNetPay` | `ytdAmount` | `ytd_amount` |
| `PaystubOverridePayPeriodDetails` | `checkAmount` | `check_amount` |
| `PaystubOverridePayPeriodDetails` | `distributionBreakdown` | `distribution_breakdown` |
| `PaystubOverridePayPeriodDetails` | `endDate` | `end_date` |
| `PaystubOverridePayPeriodDetails` | `grossEarnings` | `gross_earnings` |
| `PaystubOverridePayPeriodDetails` | `payDate` | `pay_date` |
| `PaystubOverridePayPeriodDetails` | `payFrequency` | `pay_frequency` |
| `PaystubOverridePayPeriodDetails` | `payDay` | `pay_day` |
| `PaystubOverridePayPeriodDetails` | `startDate` | `start_date` |
| `PaystubOverrideTaxpayerId` | `idType` | `id_type` |
| `PaystubOverrideTaxpayerId` | `idMask` | `id_mask` |
| `PaystubYtdDetails` | `grossEarnings` | `gross_earnings` |
| `PaystubYtdDetails` | `netEarnings` | `net_earnings` |
| `PendingDisconnectWebhook` | `webhookType` | `webhook_type` |
| `PendingDisconnectWebhook` | `webhookCode` | `webhook_code` |
| `PendingDisconnectWebhook` | `itemId` | `item_id` |
| `PendingDisconnectWebhook` | `userId` | `user_id` |
| `PendingDisconnectWebhook` | `disconnectTime` | `disconnect_time` |
| `PendingExpirationWebhook` | `webhookType` | `webhook_type` |
| `PendingExpirationWebhook` | `webhookCode` | `webhook_code` |
| `PendingExpirationWebhook` | `itemId` | `item_id` |
| `PendingExpirationWebhook` | `userId` | `user_id` |
| `PendingExpirationWebhook` | `consentExpirationTime` | `consent_expiration_time` |
| `PersonalFinanceCategory` | `confidenceLevel` | `confidence_level` |
| `PhysicalDocumentExtractedData` | `idNumber` | `id_number` |
| `PhysicalDocumentExtractedData` | `expirationDate` | `expiration_date` |
| `PhysicalDocumentExtractedData` | `issueDate` | `issue_date` |
| `PhysicalDocumentExtractedData` | `issuingCountry` | `issuing_country` |
| `PhysicalDocumentExtractedData` | `issuingRegion` | `issuing_region` |
| `PhysicalDocumentExtractedData` | `dateOfBirth` | `date_of_birth` |
| `PhysicalDocumentExtractedDataAnalysis` | `dateOfBirth` | `date_of_birth` |
| `PhysicalDocumentExtractedDataAnalysis` | `expirationDate` | `expiration_date` |
| `PhysicalDocumentExtractedDataAnalysis` | `issuingCountry` | `issuing_country` |
| `PhysicalDocumentImages` | `originalFront` | `original_front` |
| `PhysicalDocumentImages` | `originalBack` | `original_back` |
| `PhysicalDocumentImages` | `croppedFront` | `cropped_front` |
| `PhysicalDocumentImages` | `croppedBack` | `cropped_back` |
| `PlatformIds` | `employeeId` | `employee_id` |
| `PlatformIds` | `payrollId` | `payroll_id` |
| `PlatformIds` | `positionId` | `position_id` |
| `PrismCashScore` | `modelVersion` | `model_version` |
| `PrismCashScore` | `reasonCodes` | `reason_codes` |
| `PrismCashScore` | `errorReason` | `error_reason` |
| `PrismCashScoreMetadata` | `maxAge` | `max_age` |
| `PrismCashScoreMetadata` | `minAge` | `min_age` |
| `PrismCashScoreMetadata` | `minAgeCredit` | `min_age_credit` |
| `PrismCashScoreMetadata` | `minAgeDebit` | `min_age_debit` |
| `PrismCashScoreMetadata` | `maxAgeDebit` | `max_age_debit` |
| `PrismCashScoreMetadata` | `maxAgeCredit` | `max_age_credit` |
| `PrismCashScoreMetadata` | `numTrxnCredit` | `num_trxn_credit` |
| `PrismCashScoreMetadata` | `numTrxnDebit` | `num_trxn_debit` |
| `PrismCashScoreMetadata` | `l1MCreditValueCnt` | `l1m_credit_value_cnt` |
| `PrismCashScoreMetadata` | `l1MDebitValueCnt` | `l1m_debit_value_cnt` |
| `PrismDetect` | `modelVersion` | `model_version` |
| `PrismDetect` | `reasonCodes` | `reason_codes` |
| `PrismDetect` | `errorReason` | `error_reason` |
| `PrismExtend` | `modelVersion` | `model_version` |
| `PrismExtend` | `reasonCodes` | `reason_codes` |
| `PrismExtend` | `errorReason` | `error_reason` |
| `PrismFirstDetect` | `modelVersion` | `model_version` |
| `PrismFirstDetect` | `reasonCodes` | `reason_codes` |
| `PrismFirstDetect` | `errorReason` | `error_reason` |
| `PrismInsights` | `modelVersion` | `model_version` |
| `PrismInsights` | `errorReason` | `error_reason` |
| `ProcessorAccountGetRequest` | `clientId` | `client_id` |
| `ProcessorAccountGetRequest` | `processorToken` | `processor_token` |
| `ProcessorAccountGetResponse` | `institutionId` | `institution_id` |
| `ProcessorAccountGetResponse` | `requestId` | `request_id` |
| `ProcessorApexProcessorTokenCreateRequest` | `clientId` | `client_id` |
| `ProcessorApexProcessorTokenCreateRequest` | `accessToken` | `access_token` |
| `ProcessorApexProcessorTokenCreateRequest` | `accountId` | `account_id` |
| `ProcessorAuthGetRequest` | `clientId` | `client_id` |
| `ProcessorAuthGetRequest` | `processorToken` | `processor_token` |
| `ProcessorAuthGetResponse` | `requestId` | `request_id` |
| `ProcessorBalanceGetRequest` | `clientId` | `client_id` |
| `ProcessorBalanceGetRequest` | `processorToken` | `processor_token` |
| `ProcessorBalanceGetRequestOptions` | `minLastUpdatedDatetime` | `min_last_updated_datetime` |
| `ProcessorBalanceGetResponse` | `requestId` | `request_id` |
| `ProcessorBankTransferCreateRequest` | `clientId` | `client_id` |
| `ProcessorBankTransferCreateRequest` | `idempotencyKey` | `idempotency_key` |
| `ProcessorBankTransferCreateRequest` | `processorToken` | `processor_token` |
| `ProcessorBankTransferCreateRequest` | `isoCurrencyCode` | `iso_currency_code` |
| `ProcessorBankTransferCreateRequest` | `achClass` | `ach_class` |
| `ProcessorBankTransferCreateRequest` | `customTag` | `custom_tag` |
| `ProcessorBankTransferCreateRequest` | `originationAccountId` | `origination_account_id` |
| `ProcessorBankTransferCreateResponse` | `bankTransfer` | `bank_transfer` |
| `ProcessorBankTransferCreateResponse` | `requestId` | `request_id` |
| `ProcessorDefaultUpdateWebhook` | `webhookType` | `webhook_type` |
| `ProcessorDefaultUpdateWebhook` | `webhookCode` | `webhook_code` |
| `ProcessorDefaultUpdateWebhook` | `newTransactions` | `new_transactions` |
| `ProcessorDefaultUpdateWebhook` | `accountId` | `account_id` |
| `ProcessorHistoricalUpdateWebhook` | `webhookType` | `webhook_type` |
| `ProcessorHistoricalUpdateWebhook` | `webhookCode` | `webhook_code` |
| `ProcessorHistoricalUpdateWebhook` | `newTransactions` | `new_transactions` |
| `ProcessorHistoricalUpdateWebhook` | `accountId` | `account_id` |
| `ProcessorIdentityGetRequest` | `clientId` | `client_id` |
| `ProcessorIdentityGetRequest` | `processorToken` | `processor_token` |
| `ProcessorIdentityGetResponse` | `requestId` | `request_id` |
| `ProcessorIdentityMatchRequest` | `clientId` | `client_id` |
| `ProcessorIdentityMatchRequest` | `processorToken` | `processor_token` |
| `ProcessorIdentityMatchResponse` | `requestId` | `request_id` |
| `ProcessorInitialUpdateWebhook` | `webhookType` | `webhook_type` |
| `ProcessorInitialUpdateWebhook` | `webhookCode` | `webhook_code` |
| `ProcessorInitialUpdateWebhook` | `newTransactions` | `new_transactions` |
| `ProcessorInitialUpdateWebhook` | `accountId` | `account_id` |
| `ProcessorInvestmentsAuthGetRequest` | `clientId` | `client_id` |
| `ProcessorInvestmentsAuthGetRequest` | `processorToken` | `processor_token` |
| `ProcessorInvestmentsAuthGetResponse` | `dataSources` | `data_sources` |
| `ProcessorInvestmentsAuthGetResponse` | `accountDetails401K` | `account_details_401k` |
| `ProcessorInvestmentsAuthGetResponse` | `isInvestmentsFallbackItem` | `is_investments_fallback_item` |
| `ProcessorInvestmentsAuthGetResponse` | `requestId` | `request_id` |
| `ProcessorInvestmentsHoldingsGetRequest` | `clientId` | `client_id` |
| `ProcessorInvestmentsHoldingsGetRequest` | `processorToken` | `processor_token` |
| `ProcessorInvestmentsHoldingsGetResponse` | `isInvestmentsFallbackItem` | `is_investments_fallback_item` |
| `ProcessorInvestmentsHoldingsGetResponse` | `requestId` | `request_id` |
| `ProcessorInvestmentsTransactionsGetRequest` | `clientId` | `client_id` |
| `ProcessorInvestmentsTransactionsGetRequest` | `processorToken` | `processor_token` |
| `ProcessorInvestmentsTransactionsGetRequest` | `startDate` | `start_date` |
| `ProcessorInvestmentsTransactionsGetRequest` | `endDate` | `end_date` |
| `ProcessorInvestmentsTransactionsGetResponse` | `investmentTransactions` | `investment_transactions` |
| `ProcessorInvestmentsTransactionsGetResponse` | `totalInvestmentTransactions` | `total_investment_transactions` |
| `ProcessorInvestmentsTransactionsGetResponse` | `requestId` | `request_id` |
| `ProcessorInvestmentsTransactionsGetResponse` | `isInvestmentsFallbackItem` | `is_investments_fallback_item` |
| `ProcessorLiabilitiesGetRequest` | `clientId` | `client_id` |
| `ProcessorLiabilitiesGetRequest` | `processorToken` | `processor_token` |
| `ProcessorLiabilitiesGetResponse` | `requestId` | `request_id` |
| `ProcessorRecurringTransactionsUpdateWebhook` | `webhookType` | `webhook_type` |
| `ProcessorRecurringTransactionsUpdateWebhook` | `webhookCode` | `webhook_code` |
| `ProcessorRecurringTransactionsUpdateWebhook` | `accountId` | `account_id` |
| `ProcessorSignalDecisionReportRequest` | `clientId` | `client_id` |
| `ProcessorSignalDecisionReportRequest` | `processorToken` | `processor_token` |
| `ProcessorSignalDecisionReportRequest` | `clientTransactionId` | `client_transaction_id` |
| `ProcessorSignalDecisionReportRequest` | `daysFundsOnHold` | `days_funds_on_hold` |
| `ProcessorSignalDecisionReportRequest` | `decisionOutcome` | `decision_outcome` |
| `ProcessorSignalDecisionReportRequest` | `paymentMethod` | `payment_method` |
| `ProcessorSignalDecisionReportRequest` | `amountInstantlyAvailable` | `amount_instantly_available` |
| `ProcessorSignalDecisionReportResponse` | `requestId` | `request_id` |
| `ProcessorSignalEvaluateRequest` | `clientId` | `client_id` |
| `ProcessorSignalEvaluateRequest` | `processorToken` | `processor_token` |
| `ProcessorSignalEvaluateRequest` | `clientTransactionId` | `client_transaction_id` |
| `ProcessorSignalEvaluateRequest` | `userPresent` | `user_present` |
| `ProcessorSignalEvaluateRequest` | `clientUserId` | `client_user_id` |
| `ProcessorSignalEvaluateRequest` | `isRecurring` | `is_recurring` |
| `ProcessorSignalEvaluateRequest` | `defaultPaymentMethod` | `default_payment_method` |
| `ProcessorSignalEvaluateRequest` | `rulesetKey` | `ruleset_key` |
| `ProcessorSignalEvaluateResponse` | `requestId` | `request_id` |
| `ProcessorSignalEvaluateResponse` | `coreAttributes` | `core_attributes` |
| `ProcessorSignalPrepareRequest` | `clientId` | `client_id` |
| `ProcessorSignalPrepareRequest` | `processorToken` | `processor_token` |
| `ProcessorSignalPrepareResponse` | `requestId` | `request_id` |
| `ProcessorSignalReturnReportRequest` | `clientId` | `client_id` |
| `ProcessorSignalReturnReportRequest` | `processorToken` | `processor_token` |
| `ProcessorSignalReturnReportRequest` | `clientTransactionId` | `client_transaction_id` |
| `ProcessorSignalReturnReportRequest` | `returnCode` | `return_code` |
| `ProcessorSignalReturnReportRequest` | `returnedAt` | `returned_at` |
| `ProcessorSignalReturnReportResponse` | `requestId` | `request_id` |
| `ProcessorStripeBankAccountTokenCreateRequest` | `clientId` | `client_id` |
| `ProcessorStripeBankAccountTokenCreateRequest` | `accessToken` | `access_token` |
| `ProcessorStripeBankAccountTokenCreateRequest` | `accountId` | `account_id` |
| `ProcessorStripeBankAccountTokenCreateResponse` | `stripeBankAccountToken` | `stripe_bank_account_token` |
| `ProcessorStripeBankAccountTokenCreateResponse` | `requestId` | `request_id` |
| `ProcessorSyncUpdatesAvailableWebhook` | `webhookType` | `webhook_type` |
| `ProcessorSyncUpdatesAvailableWebhook` | `webhookCode` | `webhook_code` |
| `ProcessorSyncUpdatesAvailableWebhook` | `accountId` | `account_id` |
| `ProcessorSyncUpdatesAvailableWebhook` | `initialUpdateComplete` | `initial_update_complete` |
| `ProcessorSyncUpdatesAvailableWebhook` | `historicalUpdateComplete` | `historical_update_complete` |
| `ProcessorTokenCreateRequest` | `clientId` | `client_id` |
| `ProcessorTokenCreateRequest` | `accessToken` | `access_token` |
| `ProcessorTokenCreateRequest` | `accountId` | `account_id` |
| `ProcessorTokenCreateResponse` | `processorToken` | `processor_token` |
| `ProcessorTokenCreateResponse` | `requestId` | `request_id` |
| `ProcessorTokenPermissionsGetRequest` | `clientId` | `client_id` |
| `ProcessorTokenPermissionsGetRequest` | `processorToken` | `processor_token` |
| `ProcessorTokenPermissionsGetResponse` | `requestId` | `request_id` |
| `ProcessorTokenPermissionsSetRequest` | `clientId` | `client_id` |
| `ProcessorTokenPermissionsSetRequest` | `processorToken` | `processor_token` |
| `ProcessorTokenPermissionsSetResponse` | `requestId` | `request_id` |
| `ProcessorTokenWebhookUpdate` | `webhookType` | `webhook_type` |
| `ProcessorTokenWebhookUpdate` | `webhookCode` | `webhook_code` |
| `ProcessorTokenWebhookUpdate` | `accountId` | `account_id` |
| `ProcessorTokenWebhookUpdate` | `newWebhookUrl` | `new_webhook_url` |
| `ProcessorTokenWebhookUpdateRequest` | `clientId` | `client_id` |
| `ProcessorTokenWebhookUpdateRequest` | `processorToken` | `processor_token` |
| `ProcessorTokenWebhookUpdateResponse` | `requestId` | `request_id` |
| `ProcessorTransactionsGetRequest` | `clientId` | `client_id` |
| `ProcessorTransactionsGetRequest` | `processorToken` | `processor_token` |
| `ProcessorTransactionsGetRequest` | `startDate` | `start_date` |
| `ProcessorTransactionsGetRequest` | `endDate` | `end_date` |
| `ProcessorTransactionsGetRequestOptions` | `includeOriginalDescription` | `include_original_description` |
| `ProcessorTransactionsGetRequestOptions` | `includePersonalFinanceCategoryBeta` | `include_personal_finance_category_beta` |
| `ProcessorTransactionsGetRequestOptions` | `includePersonalFinanceCategory` | `include_personal_finance_category` |
| `ProcessorTransactionsGetRequestOptions` | `includeLogoAndCounterpartyBeta` | `include_logo_and_counterparty_beta` |
| `ProcessorTransactionsGetResponse` | `totalTransactions` | `total_transactions` |
| `ProcessorTransactionsGetResponse` | `requestId` | `request_id` |
| `ProcessorTransactionsRecurringGetRequest` | `clientId` | `client_id` |
| `ProcessorTransactionsRecurringGetRequest` | `processorToken` | `processor_token` |
| `ProcessorTransactionsRecurringGetResponse` | `inflowStreams` | `inflow_streams` |
| `ProcessorTransactionsRecurringGetResponse` | `outflowStreams` | `outflow_streams` |
| `ProcessorTransactionsRecurringGetResponse` | `updatedDatetime` | `updated_datetime` |
| `ProcessorTransactionsRecurringGetResponse` | `personalFinanceCategoryVersion` | `personal_finance_category_version` |
| `ProcessorTransactionsRecurringGetResponse` | `requestId` | `request_id` |
| `ProcessorTransactionsRefreshRequest` | `clientId` | `client_id` |
| `ProcessorTransactionsRefreshRequest` | `processorToken` | `processor_token` |
| `ProcessorTransactionsRefreshResponse` | `requestId` | `request_id` |
| `ProcessorTransactionsRemovedWebhook` | `webhookType` | `webhook_type` |
| `ProcessorTransactionsRemovedWebhook` | `webhookCode` | `webhook_code` |
| `ProcessorTransactionsRemovedWebhook` | `removedTransactions` | `removed_transactions` |
| `ProcessorTransactionsRemovedWebhook` | `accountId` | `account_id` |
| `ProcessorTransactionsSyncRequest` | `clientId` | `client_id` |
| `ProcessorTransactionsSyncRequest` | `processorToken` | `processor_token` |
| `ProcessorTransactionsSyncResponse` | `transactionsUpdateStatus` | `transactions_update_status` |
| `ProcessorTransactionsSyncResponse` | `nextCursor` | `next_cursor` |
| `ProcessorTransactionsSyncResponse` | `hasMore` | `has_more` |
| `ProcessorTransactionsSyncResponse` | `requestId` | `request_id` |
| `ProductAccess` | `accountsDetailsTransactions` | `accounts_details_transactions` |
| `ProductAccess` | `accountsRoutingNumber` | `accounts_routing_number` |
| `ProductAccess` | `accountsStatements` | `accounts_statements` |
| `ProductAccess` | `accountsTaxStatements` | `accounts_tax_statements` |
| `ProductAccess` | `customersProfiles` | `customers_profiles` |
| `ProductPermissionsRequiredAuthWebhook` | `webhookType` | `webhook_type` |
| `ProductPermissionsRequiredAuthWebhook` | `webhookCode` | `webhook_code` |
| `ProductPermissionsRequiredAuthWebhook` | `itemId` | `item_id` |
| `ProductPermissionsRequiredIdentityWebhook` | `webhookType` | `webhook_type` |
| `ProductPermissionsRequiredIdentityWebhook` | `webhookCode` | `webhook_code` |
| `ProductPermissionsRequiredIdentityWebhook` | `itemId` | `item_id` |
| `ProductStatus` | `lastStatusChange` | `last_status_change` |
| `ProfileNetworkStatusGetRequest` | `clientId` | `client_id` |
| `ProfileNetworkStatusGetResponse` | `networkStatus` | `network_status` |
| `ProfileNetworkStatusGetResponse` | `requestId` | `request_id` |
| `ProjectedIncomeSummaryFieldNumber` | `verificationStatus` | `verification_status` |
| `ProtectBankAccount` | `accountId` | `account_id` |
| `ProtectBankAccount` | `accountNumber` | `account_number` |
| `ProtectBankAccount` | `routingNumber` | `routing_number` |
| `ProtectComputeRequest` | `clientId` | `client_id` |
| `ProtectComputeRequest` | `modelInputs` | `model_inputs` |
| `ProtectComputeResponse` | `requestId` | `request_id` |
| `ProtectComputeSubscores` | `cashAdvanceBucket025` | `cash_advance_bucket_0_25` |
| `ProtectComputeSubscores` | `cashAdvanceBucket2550` | `cash_advance_bucket_25_50` |
| `ProtectComputeSubscores` | `cashAdvanceBucket50100` | `cash_advance_bucket_50_100` |
| `ProtectComputeSubscores` | `cashAdvanceBucket100200` | `cash_advance_bucket_100_200` |
| `ProtectComputeSubscores` | `cashAdvanceBucket200300` | `cash_advance_bucket_200_300` |
| `ProtectComputeSubscores` | `cashAdvanceBucket300400` | `cash_advance_bucket_300_400` |
| `ProtectComputeSubscores` | `cashAdvanceBucket400500` | `cash_advance_bucket_400_500` |
| `ProtectEvent` | `protectSessionId` | `protect_session_id` |
| `ProtectEvent` | `appVisit` | `app_visit` |
| `ProtectEvent` | `userSignIn` | `user_sign_in` |
| `ProtectEvent` | `userSignUp` | `user_sign_up` |
| `ProtectEventGetRequest` | `clientId` | `client_id` |
| `ProtectEventGetRequest` | `eventId` | `event_id` |
| `ProtectEventGetResponse` | `eventId` | `event_id` |
| `ProtectEventGetResponse` | `trustIndex` | `trust_index` |
| `ProtectEventGetResponse` | `fraudAttributes` | `fraud_attributes` |
| `ProtectEventGetResponse` | `requestId` | `request_id` |
| `ProtectEventSendRequest` | `clientId` | `client_id` |
| `ProtectEventSendRequest` | `protectSessionId` | `protect_session_id` |
| `ProtectEventSendRequest` | `requestTrustIndex` | `request_trust_index` |
| `ProtectEventSendResponse` | `eventId` | `event_id` |
| `ProtectEventSendResponse` | `trustIndex` | `trust_index` |
| `ProtectEventSendResponse` | `fraudAttributes` | `fraud_attributes` |
| `ProtectEventSendResponse` | `requestId` | `request_id` |
| `ProtectIncidentAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `ProtectIncidentEvent` | `protectEventId` | `protect_event_id` |
| `ProtectIncidentEvent` | `linkSessionId` | `link_session_id` |
| `ProtectIncidentEvent` | `idvSessionId` | `idv_session_id` |
| `ProtectIncidentEvent` | `signalClientTransactionId` | `signal_client_transaction_id` |
| `ProtectIncidentEvent` | `internalReference` | `internal_reference` |
| `ProtectIncidentEvent` | `accessToken` | `access_token` |
| `ProtectIncidentEvent` | `itemId` | `item_id` |
| `ProtectIncidentEventResponse` | `protectEventId` | `protect_event_id` |
| `ProtectIncidentEventResponse` | `linkSessionId` | `link_session_id` |
| `ProtectIncidentEventResponse` | `idvSessionId` | `idv_session_id` |
| `ProtectIncidentEventResponse` | `signalClientTransactionId` | `signal_client_transaction_id` |
| `ProtectIncidentEventResponse` | `internalReference` | `internal_reference` |
| `ProtectIncidentEventResponse` | `itemId` | `item_id` |
| `ProtectLinkModelInputs` | `linkSessionId` | `link_session_id` |
| `ProtectLinkModelInputs` | `requireExtractedData` | `require_extracted_data` |
| `ProtectReport` | `reportId` | `report_id` |
| `ProtectReport` | `incidentEvent` | `incident_event` |
| `ProtectReport` | `reportConfidence` | `report_confidence` |
| `ProtectReport` | `reportType` | `report_type` |
| `ProtectReport` | `reportSource` | `report_source` |
| `ProtectReport` | `bankAccount` | `bank_account` |
| `ProtectReport` | `achReturnCode` | `ach_return_code` |
| `ProtectReport` | `createdAt` | `created_at` |
| `ProtectReportCreateRequest` | `clientId` | `client_id` |
| `ProtectReportCreateRequest` | `userId` | `user_id` |
| `ProtectReportCreateRequest` | `incidentEvent` | `incident_event` |
| `ProtectReportCreateRequest` | `reportConfidence` | `report_confidence` |
| `ProtectReportCreateRequest` | `reportType` | `report_type` |
| `ProtectReportCreateRequest` | `reportSource` | `report_source` |
| `ProtectReportCreateRequest` | `bankAccount` | `bank_account` |
| `ProtectReportCreateRequest` | `achReturnCode` | `ach_return_code` |
| `ProtectReportCreateResponse` | `reportId` | `report_id` |
| `ProtectReportCreateResponse` | `requestId` | `request_id` |
| `ProtectSdkModelInputs` | `sdkSessionId` | `sdk_session_id` |
| `ProtectUser` | `userId` | `user_id` |
| `ProtectUser` | `clientUserId` | `client_user_id` |
| `ProtectUserEventWebhook` | `webhookType` | `webhook_type` |
| `ProtectUserEventWebhook` | `webhookCode` | `webhook_code` |
| `ProtectUserEventWebhook` | `eventId` | `event_id` |
| `ProtectUserEventWebhook` | `eventType` | `event_type` |
| `ProtectUserEventWebhook` | `userId` | `user_id` |
| `ProtectUserEventWebhook` | `clientUserId` | `client_user_id` |
| `ProtectUserEventWebhook` | `linkSessionId` | `link_session_id` |
| `ProtectUserInsightsGetRequest` | `clientId` | `client_id` |
| `ProtectUserInsightsGetRequest` | `userId` | `user_id` |
| `ProtectUserInsightsGetRequest` | `clientUserId` | `client_user_id` |
| `ProtectUserInsightsGetResponse` | `userId` | `user_id` |
| `ProtectUserInsightsGetResponse` | `latestScoredEvent` | `latest_scored_event` |
| `ProtectUserInsightsGetResponse` | `requestId` | `request_id` |
| `ProviderBusinessAddress` | `postalCode` | `postal_code` |
| `ProviderBusinessAddress` | `isPrimary` | `is_primary` |
| `ProviderBusinessName` | `isPrimary` | `is_primary` |
| `RecaptchaRequiredError` | `errorType` | `error_type` |
| `RecaptchaRequiredError` | `errorCode` | `error_code` |
| `RecaptchaRequiredError` | `displayMessage` | `display_message` |
| `RecaptchaRequiredError` | `httpCode` | `http_code` |
| `RecaptchaRequiredError` | `linkUserExperience` | `link_user_experience` |
| `RecaptchaRequiredError` | `commonCauses` | `common_causes` |
| `RecaptchaRequiredError` | `troubleshootingSteps` | `troubleshooting_steps` |
| `ReceiverDetails` | `availableBalance` | `available_balance` |
| `RecipientBacs` | `sortCode` | `sort_code` |
| `RecipientBacsNullable` | `sortCode` | `sort_code` |
| `RecurringCancelledWebhook` | `webhookType` | `webhook_type` |
| `RecurringCancelledWebhook` | `webhookCode` | `webhook_code` |
| `RecurringCancelledWebhook` | `recurringTransferId` | `recurring_transfer_id` |
| `RecurringInsightsStream` | `streamId` | `stream_id` |
| `RecurringInsightsStream` | `merchantName` | `merchant_name` |
| `RecurringInsightsStream` | `oldestTransactionDate` | `oldest_transaction_date` |
| `RecurringInsightsStream` | `newestTransactionDate` | `newest_transaction_date` |
| `RecurringInsightsStream` | `averageDaysApart` | `average_days_apart` |
| `RecurringInsightsStream` | `transactionCount` | `transaction_count` |
| `RecurringInsightsStream` | `transactionIds` | `transaction_ids` |
| `RecurringInsightsStream` | `averageAmount` | `average_amount` |
| `RecurringInsightsStream` | `newestTransactionAmount` | `newest_transaction_amount` |
| `RecurringInsightsStream` | `isActive` | `is_active` |
| `RecurringInsightsStream` | `personalFinanceCategoryPrimary` | `personal_finance_category_primary` |
| `RecurringInsightsStream` | `personalFinanceCategoryDetailed` | `personal_finance_category_detailed` |
| `RecurringNewTransferWebhook` | `webhookType` | `webhook_type` |
| `RecurringNewTransferWebhook` | `webhookCode` | `webhook_code` |
| `RecurringNewTransferWebhook` | `recurringTransferId` | `recurring_transfer_id` |
| `RecurringNewTransferWebhook` | `transferId` | `transfer_id` |
| `RecurringTransactions` | `inflowStreams` | `inflow_streams` |
| `RecurringTransactions` | `outflowStreams` | `outflow_streams` |
| `RecurringTransactionsUpdateWebhook` | `webhookType` | `webhook_type` |
| `RecurringTransactionsUpdateWebhook` | `webhookCode` | `webhook_code` |
| `RecurringTransactionsUpdateWebhook` | `itemId` | `item_id` |
| `RecurringTransactionsUpdateWebhook` | `accountIds` | `account_ids` |
| `RecurringTransfer` | `recurringTransferId` | `recurring_transfer_id` |
| `RecurringTransfer` | `nextOriginationDate` | `next_origination_date` |
| `RecurringTransfer` | `testClockId` | `test_clock_id` |
| `RecurringTransfer` | `achClass` | `ach_class` |
| `RecurringTransfer` | `originationAccountId` | `origination_account_id` |
| `RecurringTransfer` | `accountId` | `account_id` |
| `RecurringTransfer` | `fundingAccountId` | `funding_account_id` |
| `RecurringTransfer` | `isoCurrencyCode` | `iso_currency_code` |
| `RecurringTransfer` | `transferIds` | `transfer_ids` |
| `RecurringTransferNullable` | `recurringTransferId` | `recurring_transfer_id` |
| `RecurringTransferNullable` | `nextOriginationDate` | `next_origination_date` |
| `RecurringTransferNullable` | `testClockId` | `test_clock_id` |
| `RecurringTransferNullable` | `achClass` | `ach_class` |
| `RecurringTransferNullable` | `originationAccountId` | `origination_account_id` |
| `RecurringTransferNullable` | `accountId` | `account_id` |
| `RecurringTransferNullable` | `fundingAccountId` | `funding_account_id` |
| `RecurringTransferNullable` | `isoCurrencyCode` | `iso_currency_code` |
| `RecurringTransferNullable` | `transferIds` | `transfer_ids` |
| `RecurringTransferSkippedWebhook` | `webhookType` | `webhook_type` |
| `RecurringTransferSkippedWebhook` | `webhookCode` | `webhook_code` |
| `RecurringTransferSkippedWebhook` | `recurringTransferId` | `recurring_transfer_id` |
| `RecurringTransferSkippedWebhook` | `authorizationDecision` | `authorization_decision` |
| `RecurringTransferSkippedWebhook` | `authorizationDecisionRationaleCode` | `authorization_decision_rationale_code` |
| `RecurringTransferSkippedWebhook` | `skippedOriginationDate` | `skipped_origination_date` |
| `RefreshResult` | `itemId` | `item_id` |
| `RemovedTransaction` | `transactionId` | `transaction_id` |
| `RemovedTransaction` | `accountId` | `account_id` |
| `ReportingInformation` | `reportingInformationIdentifier` | `ReportingInformationIdentifier` |
| `RequestBusinessAddress` | `postalCode` | `postal_code` |
| `RequirementSubmission` | `requirementType` | `requirement_type` |
| `RequirementSubmission` | `personId` | `person_id` |
| `ResponseBusinessAddress` | `postalCode` | `postal_code` |
| `RiskCheckBehavior` | `userInteractions` | `user_interactions` |
| `RiskCheckBehavior` | `fraudRingDetected` | `fraud_ring_detected` |
| `RiskCheckBehavior` | `botDetected` | `bot_detected` |
| `RiskCheckBehavior` | `riskLevel` | `risk_level` |
| `RiskCheckDetails` | `identityAbuseSignals` | `identity_abuse_signals` |
| `RiskCheckDetails` | `facialDuplicates` | `facial_duplicates` |
| `RiskCheckDetails` | `trustIndexScore` | `trust_index_score` |
| `RiskCheckDevice` | `ipProxyType` | `ip_proxy_type` |
| `RiskCheckDevice` | `ipSpamListCount` | `ip_spam_list_count` |
| `RiskCheckDevice` | `ipTimezoneOffset` | `ip_timezone_offset` |
| `RiskCheckDevice` | `riskLevel` | `risk_level` |
| `RiskCheckEmail` | `isDeliverable` | `is_deliverable` |
| `RiskCheckEmail` | `breachCount` | `breach_count` |
| `RiskCheckEmail` | `firstBreachedAt` | `first_breached_at` |
| `RiskCheckEmail` | `lastBreachedAt` | `last_breached_at` |
| `RiskCheckEmail` | `domainRegisteredAt` | `domain_registered_at` |
| `RiskCheckEmail` | `domainIsFreeProvider` | `domain_is_free_provider` |
| `RiskCheckEmail` | `domainIsCustom` | `domain_is_custom` |
| `RiskCheckEmail` | `domainIsDisposable` | `domain_is_disposable` |
| `RiskCheckEmail` | `topLevelDomainIsSuspicious` | `top_level_domain_is_suspicious` |
| `RiskCheckEmail` | `isEdu` | `is_edu` |
| `RiskCheckEmail` | `includesDateOfBirth` | `includes_date_of_birth` |
| `RiskCheckEmail` | `linkedServices` | `linked_services` |
| `RiskCheckEmail` | `riskLevel` | `risk_level` |
| `RiskCheckFacialDuplicate` | `matchedAfterCompleted` | `matched_after_completed` |
| `RiskCheckIdentityAbuseSignals` | `syntheticIdentity` | `synthetic_identity` |
| `RiskCheckIdentityAbuseSignals` | `stolenIdentity` | `stolen_identity` |
| `RiskCheckNetwork` | `riskLevel` | `risk_level` |
| `RiskCheckPhone` | `linkedServices` | `linked_services` |
| `RiskCheckPhone` | `riskLevel` | `risk_level` |
| `RiskCheckStolenIdentity` | `riskLevel` | `risk_level` |
| `RiskCheckSyntheticIdentity` | `riskLevel` | `risk_level` |
| `RiskCheckSyntheticIdentity` | `firstPartySyntheticFraud` | `first_party_synthetic_fraud` |
| `RiskCheckSyntheticIdentity` | `thirdPartySyntheticFraud` | `third_party_synthetic_fraud` |
| `RiskIndicators` | `bankPenalties` | `bank_penalties` |
| `RiskIndicators` | `loanDisbursements` | `loan_disbursements` |
| `RiskIndicators` | `loanPayments` | `loan_payments` |
| `RiskIndicators` | `negativeBalance` | `negative_balance` |
| `RiskSignalDocumentReference` | `documentId` | `document_id` |
| `RiskSignalDocumentReference` | `documentName` | `document_name` |
| `RiskSignalDocumentReference` | `documentType` | `document_type` |
| `RiskSignalDocumentReference` | `fileType` | `file_type` |
| `Role` | `roleDetail` | `ROLE_DETAIL` |
| `RoleDetail` | `partyRoleType` | `PartyRoleType` |
| `Roles` | `role` | `ROLE` |
| `RuleDetails` | `internalNote` | `internal_note` |
| `RuleDetails` | `customActionKey` | `custom_action_key` |
| `SmsVerification` | `phoneNumber` | `phone_number` |
| `SmsVerification` | `deliveryAttemptCount` | `delivery_attempt_count` |
| `SmsVerification` | `solveAttemptCount` | `solve_attempt_count` |
| `SmsVerification` | `initiallySentAt` | `initially_sent_at` |
| `SmsVerification` | `lastSentAt` | `last_sent_at` |
| `SmsVerification` | `redactedAt` | `redacted_at` |
| `SandboxBankIncomeFireWebhookRequest` | `clientId` | `client_id` |
| `SandboxBankIncomeFireWebhookRequest` | `webhookOverride` | `webhook_override` |
| `SandboxBankIncomeFireWebhookRequest` | `webhookCode` | `webhook_code` |
| `SandboxBankIncomeFireWebhookRequest` | `webhookFields` | `webhook_fields` |
| `SandboxBankIncomeFireWebhookResponse` | `requestId` | `request_id` |
| `SandboxBankIncomeWebhookFireRequestWebhookFields` | `userId` | `user_id` |
| `SandboxBankIncomeWebhookFireRequestWebhookFields` | `bankIncomeRefreshCompleteResult` | `bank_income_refresh_complete_result` |
| `SandboxBankTransferFireWebhookRequest` | `clientId` | `client_id` |
| `SandboxBankTransferFireWebhookResponse` | `requestId` | `request_id` |
| `SandboxBankTransferSimulateRequest` | `clientId` | `client_id` |
| `SandboxBankTransferSimulateRequest` | `bankTransferId` | `bank_transfer_id` |
| `SandboxBankTransferSimulateRequest` | `eventType` | `event_type` |
| `SandboxBankTransferSimulateRequest` | `failureReason` | `failure_reason` |
| `SandboxBankTransferSimulateResponse` | `requestId` | `request_id` |
| `SandboxCraCashflowUpdatesUpdateRequest` | `clientId` | `client_id` |
| `SandboxCraCashflowUpdatesUpdateRequest` | `userToken` | `user_token` |
| `SandboxCraCashflowUpdatesUpdateRequest` | `webhookCodes` | `webhook_codes` |
| `SandboxCraCashflowUpdatesUpdateRequest` | `userId` | `user_id` |
| `SandboxCraCashflowUpdatesUpdateResponse` | `requestId` | `request_id` |
| `SandboxFdxConsentSeedRequest` | `clientId` | `client_id` |
| `SandboxFdxConsentSeedRequest` | `customerId` | `customer_id` |
| `SandboxFdxConsentSeedRequest` | `applicationId` | `application_id` |
| `SandboxFdxConsentSeedRequest` | `consentId` | `consent_id` |
| `SandboxFdxConsentSeedResponse` | `consentId` | `consent_id` |
| `SandboxFdxConsentSeedResponse` | `requestId` | `request_id` |
| `SandboxIncomeFireWebhookRequest` | `clientId` | `client_id` |
| `SandboxIncomeFireWebhookRequest` | `itemId` | `item_id` |
| `SandboxIncomeFireWebhookRequest` | `userId` | `user_id` |
| `SandboxIncomeFireWebhookRequest` | `verificationStatus` | `verification_status` |
| `SandboxIncomeFireWebhookRequest` | `webhookCode` | `webhook_code` |
| `SandboxIncomeFireWebhookResponse` | `requestId` | `request_id` |
| `SandboxItemApplicationSeedRequest` | `clientId` | `client_id` |
| `SandboxItemApplicationSeedRequest` | `accessToken` | `access_token` |
| `SandboxItemApplicationSeedRequest` | `applicationId` | `application_id` |
| `SandboxItemApplicationSeedResponse` | `itemId` | `item_id` |
| `SandboxItemApplicationSeedResponse` | `requestId` | `request_id` |
| `SandboxItemFireWebhookRequest` | `clientId` | `client_id` |
| `SandboxItemFireWebhookRequest` | `accessToken` | `access_token` |
| `SandboxItemFireWebhookRequest` | `webhookType` | `webhook_type` |
| `SandboxItemFireWebhookRequest` | `webhookCode` | `webhook_code` |
| `SandboxItemFireWebhookResponse` | `webhookFired` | `webhook_fired` |
| `SandboxItemFireWebhookResponse` | `requestId` | `request_id` |
| `SandboxItemResetLoginRequest` | `clientId` | `client_id` |
| `SandboxItemResetLoginRequest` | `accessToken` | `access_token` |
| `SandboxItemResetLoginResponse` | `resetLogin` | `reset_login` |
| `SandboxItemResetLoginResponse` | `requestId` | `request_id` |
| `SandboxItemSetVerificationStatusRequest` | `clientId` | `client_id` |
| `SandboxItemSetVerificationStatusRequest` | `accessToken` | `access_token` |
| `SandboxItemSetVerificationStatusRequest` | `accountId` | `account_id` |
| `SandboxItemSetVerificationStatusRequest` | `verificationStatus` | `verification_status` |
| `SandboxItemSetVerificationStatusResponse` | `requestId` | `request_id` |
| `SandboxOauthSelectAccountsRequest` | `oauthStateId` | `oauth_state_id` |
| `SandboxPaymentProfileResetLoginRequest` | `clientId` | `client_id` |
| `SandboxPaymentProfileResetLoginRequest` | `paymentProfileToken` | `payment_profile_token` |
| `SandboxPaymentProfileResetLoginResponse` | `resetLogin` | `reset_login` |
| `SandboxPaymentProfileResetLoginResponse` | `requestId` | `request_id` |
| `SandboxPaymentSimulateRequest` | `clientId` | `client_id` |
| `SandboxPaymentSimulateRequest` | `paymentId` | `payment_id` |
| `SandboxPaymentSimulateResponse` | `requestId` | `request_id` |
| `SandboxPaymentSimulateResponse` | `oldStatus` | `old_status` |
| `SandboxPaymentSimulateResponse` | `newStatus` | `new_status` |
| `SandboxProcessorTokenCreateRequest` | `clientId` | `client_id` |
| `SandboxProcessorTokenCreateRequest` | `institutionId` | `institution_id` |
| `SandboxProcessorTokenCreateRequestOptions` | `overrideUsername` | `override_username` |
| `SandboxProcessorTokenCreateRequestOptions` | `overridePassword` | `override_password` |
| `SandboxProcessorTokenCreateResponse` | `processorToken` | `processor_token` |
| `SandboxProcessorTokenCreateResponse` | `requestId` | `request_id` |
| `SandboxPublicTokenCreateRequest` | `clientId` | `client_id` |
| `SandboxPublicTokenCreateRequest` | `institutionId` | `institution_id` |
| `SandboxPublicTokenCreateRequest` | `initialProducts` | `initial_products` |
| `SandboxPublicTokenCreateRequest` | `userToken` | `user_token` |
| `SandboxPublicTokenCreateRequest` | `userId` | `user_id` |
| `SandboxPublicTokenCreateRequestIncomeVerificationBankIncome` | `daysRequested` | `days_requested` |
| `SandboxPublicTokenCreateRequestOptions` | `overrideUsername` | `override_username` |
| `SandboxPublicTokenCreateRequestOptions` | `overridePassword` | `override_password` |
| `SandboxPublicTokenCreateRequestOptions` | `incomeVerification` | `income_verification` |
| `SandboxPublicTokenCreateRequestOptionsIncomeVerification` | `incomeSourceTypes` | `income_source_types` |
| `SandboxPublicTokenCreateRequestOptionsIncomeVerification` | `bankIncome` | `bank_income` |
| `SandboxPublicTokenCreateRequestOptionsStatements` | `startDate` | `start_date` |
| `SandboxPublicTokenCreateRequestOptionsStatements` | `endDate` | `end_date` |
| `SandboxPublicTokenCreateRequestOptionsTransactions` | `startDate` | `start_date` |
| `SandboxPublicTokenCreateRequestOptionsTransactions` | `endDate` | `end_date` |
| `SandboxPublicTokenCreateRequestOptionsTransactions` | `daysRequested` | `days_requested` |
| `SandboxPublicTokenCreateResponse` | `publicToken` | `public_token` |
| `SandboxPublicTokenCreateResponse` | `requestId` | `request_id` |
| `SandboxTransactionsCreateRequest` | `clientId` | `client_id` |
| `SandboxTransactionsCreateRequest` | `accessToken` | `access_token` |
| `SandboxTransactionsCreateResponse` | `requestId` | `request_id` |
| `SandboxTransferFireWebhookRequest` | `clientId` | `client_id` |
| `SandboxTransferFireWebhookResponse` | `requestId` | `request_id` |
| `SandboxTransferLedgerDepositSimulateRequest` | `clientId` | `client_id` |
| `SandboxTransferLedgerDepositSimulateRequest` | `sweepId` | `sweep_id` |
| `SandboxTransferLedgerDepositSimulateRequest` | `eventType` | `event_type` |
| `SandboxTransferLedgerDepositSimulateRequest` | `failureReason` | `failure_reason` |
| `SandboxTransferLedgerDepositSimulateResponse` | `requestId` | `request_id` |
| `SandboxTransferLedgerSimulateAvailableRequest` | `clientId` | `client_id` |
| `SandboxTransferLedgerSimulateAvailableRequest` | `ledgerId` | `ledger_id` |
| `SandboxTransferLedgerSimulateAvailableRequest` | `originatorClientId` | `originator_client_id` |
| `SandboxTransferLedgerSimulateAvailableRequest` | `testClockId` | `test_clock_id` |
| `SandboxTransferLedgerSimulateAvailableResponse` | `requestId` | `request_id` |
| `SandboxTransferLedgerWithdrawSimulateRequest` | `clientId` | `client_id` |
| `SandboxTransferLedgerWithdrawSimulateRequest` | `sweepId` | `sweep_id` |
| `SandboxTransferLedgerWithdrawSimulateRequest` | `eventType` | `event_type` |
| `SandboxTransferLedgerWithdrawSimulateRequest` | `failureReason` | `failure_reason` |
| `SandboxTransferLedgerWithdrawSimulateResponse` | `requestId` | `request_id` |
| `SandboxTransferRefundSimulateRequest` | `clientId` | `client_id` |
| `SandboxTransferRefundSimulateRequest` | `refundId` | `refund_id` |
| `SandboxTransferRefundSimulateRequest` | `testClockId` | `test_clock_id` |
| `SandboxTransferRefundSimulateRequest` | `eventType` | `event_type` |
| `SandboxTransferRefundSimulateRequest` | `failureReason` | `failure_reason` |
| `SandboxTransferRefundSimulateResponse` | `requestId` | `request_id` |
| `SandboxTransferRepaymentSimulateRequest` | `clientId` | `client_id` |
| `SandboxTransferRepaymentSimulateResponse` | `requestId` | `request_id` |
| `SandboxTransferRfpSimulateRequest` | `transferId` | `transfer_id` |
| `SandboxTransferRfpSimulateRequest` | `clientName` | `client_name` |
| `SandboxTransferRfpSimulateResponse` | `requestId` | `request_id` |
| `SandboxTransferSimulateRequest` | `clientId` | `client_id` |
| `SandboxTransferSimulateRequest` | `transferId` | `transfer_id` |
| `SandboxTransferSimulateRequest` | `testClockId` | `test_clock_id` |
| `SandboxTransferSimulateRequest` | `eventType` | `event_type` |
| `SandboxTransferSimulateRequest` | `failureReason` | `failure_reason` |
| `SandboxTransferSimulateResponse` | `requestId` | `request_id` |
| `SandboxTransferSweepSimulateRequest` | `clientId` | `client_id` |
| `SandboxTransferSweepSimulateRequest` | `testClockId` | `test_clock_id` |
| `SandboxTransferSweepSimulateResponse` | `requestId` | `request_id` |
| `SandboxTransferTestClockAdvanceRequest` | `clientId` | `client_id` |
| `SandboxTransferTestClockAdvanceRequest` | `testClockId` | `test_clock_id` |
| `SandboxTransferTestClockAdvanceRequest` | `newVirtualTime` | `new_virtual_time` |
| `SandboxTransferTestClockAdvanceResponse` | `requestId` | `request_id` |
| `SandboxTransferTestClockCreateRequest` | `clientId` | `client_id` |
| `SandboxTransferTestClockCreateRequest` | `virtualTime` | `virtual_time` |
| `SandboxTransferTestClockCreateResponse` | `testClock` | `test_clock` |
| `SandboxTransferTestClockCreateResponse` | `requestId` | `request_id` |
| `SandboxTransferTestClockGetRequest` | `clientId` | `client_id` |
| `SandboxTransferTestClockGetRequest` | `testClockId` | `test_clock_id` |
| `SandboxTransferTestClockGetResponse` | `testClock` | `test_clock` |
| `SandboxTransferTestClockGetResponse` | `requestId` | `request_id` |
| `SandboxTransferTestClockListRequest` | `clientId` | `client_id` |
| `SandboxTransferTestClockListRequest` | `startVirtualTime` | `start_virtual_time` |
| `SandboxTransferTestClockListRequest` | `endVirtualTime` | `end_virtual_time` |
| `SandboxTransferTestClockListResponse` | `testClocks` | `test_clocks` |
| `SandboxTransferTestClockListResponse` | `requestId` | `request_id` |
| `SandboxUserResetLoginRequest` | `clientId` | `client_id` |
| `SandboxUserResetLoginRequest` | `userToken` | `user_token` |
| `SandboxUserResetLoginRequest` | `itemIds` | `item_ids` |
| `SandboxUserResetLoginRequest` | `userId` | `user_id` |
| `SandboxUserResetLoginResponse` | `requestId` | `request_id` |
| `Scopes` | `productAccess` | `product_access` |
| `Scopes` | `newAccounts` | `new_accounts` |
| `ScopesNullable` | `productAccess` | `product_access` |
| `ScopesNullable` | `newAccounts` | `new_accounts` |
| `ScreeningHitAnalysis` | `datesOfBirth` | `dates_of_birth` |
| `ScreeningHitAnalysis` | `searchTermsVersion` | `search_terms_version` |
| `ScreeningHitData` | `datesOfBirth` | `dates_of_birth` |
| `ScreeningStatusUpdatedWebhook` | `webhookType` | `webhook_type` |
| `ScreeningStatusUpdatedWebhook` | `webhookCode` | `webhook_code` |
| `ScreeningStatusUpdatedWebhook` | `screeningId` | `screening_id` |
| `Security` | `securityId` | `security_id` |
| `Security` | `institutionSecurityId` | `institution_security_id` |
| `Security` | `institutionId` | `institution_id` |
| `Security` | `proxySecurityId` | `proxy_security_id` |
| `Security` | `tickerSymbol` | `ticker_symbol` |
| `Security` | `isCashEquivalent` | `is_cash_equivalent` |
| `Security` | `closePrice` | `close_price` |
| `Security` | `closePriceAsOf` | `close_price_as_of` |
| `Security` | `updateDatetime` | `update_datetime` |
| `Security` | `isoCurrencyCode` | `iso_currency_code` |
| `Security` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `Security` | `marketIdentifierCode` | `market_identifier_code` |
| `Security` | `cfiCode` | `cfi_code` |
| `Security` | `optionContract` | `option_contract` |
| `Security` | `fixedIncome` | `fixed_income` |
| `SecurityOverride` | `tickerSymbol` | `ticker_symbol` |
| `SelfieAgeCheck` | `reportedAge` | `reported_age` |
| `SelfieAgeCheck` | `ageEstimateLowerBound` | `age_estimate_lower_bound` |
| `SelfieAgeCheck` | `ageEstimateUpperBound` | `age_estimate_upper_bound` |
| `SelfieAnalysis` | `documentComparison` | `document_comparison` |
| `SelfieAnalysis` | `livenessCheck` | `liveness_check` |
| `SelfieAnalysis` | `ageCheck` | `age_check` |
| `SelfieAnalysis` | `facialAnalysis` | `facial_analysis` |
| `SelfieAnalysisFacialAnalysis` | `leftEye` | `left_eye` |
| `SelfieAnalysisFacialAnalysis` | `rightEye` | `right_eye` |
| `SelfieAnalysisFacialAnalysis` | `leftBrow` | `left_brow` |
| `SelfieAnalysisFacialAnalysis` | `rightBrow` | `right_brow` |
| `SelfieAnalysisFacialAnalysis` | `middleForehead` | `middle_forehead` |
| `SelfieAnalysisFacialAnalysis` | `leftCheek` | `left_cheek` |
| `SelfieAnalysisFacialAnalysis` | `rightCheek` | `right_cheek` |
| `SelfieCapture` | `imageUrl` | `image_url` |
| `SelfieCapture` | `videoUrl` | `video_url` |
| `SenderBacsNullable` | `sortCode` | `sort_code` |
| `Service` | `verificationOfAsset` | `VERIFICATION_OF_ASSET` |
| `Service` | `statuses` | `STATUSES` |
| `ServiceProductFulfillment` | `serviceProductFulfillmentDetail` | `SERVICE_PRODUCT_FULFILLMENT_DETAIL` |
| `ServiceProductFulfillmentDetail` | `vendorOrderIdentifier` | `VendorOrderIdentifier` |
| `ServiceProductFulfillmentDetail` | `serviceProductFulfillmentIdentifier` | `ServiceProductFulfillmentIdentifier` |
| `ServicerAddressData` | `postalCode` | `postal_code` |
| `Services` | `service` | `SERVICE` |
| `SessionTokenCreateRequest` | `clientId` | `client_id` |
| `SessionTokenCreateRequest` | `templateId` | `template_id` |
| `SessionTokenCreateRequest` | `redirectUri` | `redirect_uri` |
| `SessionTokenCreateRequest` | `androidPackageName` | `android_package_name` |
| `SessionTokenCreateRequest` | `userId` | `user_id` |
| `SessionTokenCreateRequestUser` | `clientUserId` | `client_user_id` |
| `SessionTokenCreateRequestUser` | `userId` | `user_id` |
| `SessionTokenCreateResponse` | `requestId` | `request_id` |
| `SessionTokenCreateResponseLink` | `linkToken` | `link_token` |
| `SessionTokenCreateResponseLink` | `userId` | `user_id` |
| `SignalAddressData` | `postalCode` | `postal_code` |
| `SignalDecisionReportRequest` | `clientId` | `client_id` |
| `SignalDecisionReportRequest` | `clientTransactionId` | `client_transaction_id` |
| `SignalDecisionReportRequest` | `daysFundsOnHold` | `days_funds_on_hold` |
| `SignalDecisionReportRequest` | `decisionOutcome` | `decision_outcome` |
| `SignalDecisionReportRequest` | `paymentMethod` | `payment_method` |
| `SignalDecisionReportRequest` | `amountInstantlyAvailable` | `amount_instantly_available` |
| `SignalDecisionReportRequest` | `submittedAt` | `submitted_at` |
| `SignalDecisionReportResponse` | `requestId` | `request_id` |
| `SignalEvaluateCoreAttributes` | `unauthorizedTransactionsCount7D` | `unauthorized_transactions_count_7d` |
| `SignalEvaluateCoreAttributes` | `unauthorizedTransactionsCount30D` | `unauthorized_transactions_count_30d` |
| `SignalEvaluateCoreAttributes` | `unauthorizedTransactionsCount60D` | `unauthorized_transactions_count_60d` |
| `SignalEvaluateCoreAttributes` | `unauthorizedTransactionsCount90D` | `unauthorized_transactions_count_90d` |
| `SignalEvaluateCoreAttributes` | `nsfOverdraftTransactionsCount7D` | `nsf_overdraft_transactions_count_7d` |
| `SignalEvaluateCoreAttributes` | `nsfOverdraftTransactionsCount30D` | `nsf_overdraft_transactions_count_30d` |
| `SignalEvaluateCoreAttributes` | `nsfOverdraftTransactionsCount60D` | `nsf_overdraft_transactions_count_60d` |
| `SignalEvaluateCoreAttributes` | `nsfOverdraftTransactionsCount90D` | `nsf_overdraft_transactions_count_90d` |
| `SignalEvaluateCoreAttributes` | `daysSinceFirstPlaidConnection` | `days_since_first_plaid_connection` |
| `SignalEvaluateCoreAttributes` | `plaidConnectionsCount7D` | `plaid_connections_count_7d` |
| `SignalEvaluateCoreAttributes` | `plaidConnectionsCount30D` | `plaid_connections_count_30d` |
| `SignalEvaluateCoreAttributes` | `totalPlaidConnectionsCount` | `total_plaid_connections_count` |
| `SignalEvaluateCoreAttributes` | `isSavingsOrMoneyMarketAccount` | `is_savings_or_money_market_account` |
| `SignalEvaluateCoreAttributes` | `totalCreditTransactionsAmount10D` | `total_credit_transactions_amount_10d` |
| `SignalEvaluateCoreAttributes` | `totalDebitTransactionsAmount10D` | `total_debit_transactions_amount_10d` |
| `SignalEvaluateCoreAttributes` | `p50CreditTransactionsAmount28D` | `p50_credit_transactions_amount_28d` |
| `SignalEvaluateCoreAttributes` | `p50DebitTransactionsAmount28D` | `p50_debit_transactions_amount_28d` |
| `SignalEvaluateCoreAttributes` | `p95CreditTransactionsAmount28D` | `p95_credit_transactions_amount_28d` |
| `SignalEvaluateCoreAttributes` | `p95DebitTransactionsAmount28D` | `p95_debit_transactions_amount_28d` |
| `SignalEvaluateCoreAttributes` | `daysWithNegativeBalanceCount90D` | `days_with_negative_balance_count_90d` |
| `SignalEvaluateCoreAttributes` | `p90EodBalance30D` | `p90_eod_balance_30d` |
| `SignalEvaluateCoreAttributes` | `p90EodBalance60D` | `p90_eod_balance_60d` |
| `SignalEvaluateCoreAttributes` | `p90EodBalance90D` | `p90_eod_balance_90d` |
| `SignalEvaluateCoreAttributes` | `p10EodBalance30D` | `p10_eod_balance_30d` |
| `SignalEvaluateCoreAttributes` | `p10EodBalance60D` | `p10_eod_balance_60d` |
| `SignalEvaluateCoreAttributes` | `p10EodBalance90D` | `p10_eod_balance_90d` |
| `SignalEvaluateCoreAttributes` | `availableBalance` | `available_balance` |
| `SignalEvaluateCoreAttributes` | `currentBalance` | `current_balance` |
| `SignalEvaluateCoreAttributes` | `balanceLastUpdated` | `balance_last_updated` |
| `SignalEvaluateCoreAttributes` | `phoneChangeCount28D` | `phone_change_count_28d` |
| `SignalEvaluateCoreAttributes` | `phoneChangeCount90D` | `phone_change_count_90d` |
| `SignalEvaluateCoreAttributes` | `emailChangeCount28D` | `email_change_count_28d` |
| `SignalEvaluateCoreAttributes` | `emailChangeCount90D` | `email_change_count_90d` |
| `SignalEvaluateCoreAttributes` | `addressChangeCount28D` | `address_change_count_28d` |
| `SignalEvaluateCoreAttributes` | `addressChangeCount90D` | `address_change_count_90d` |
| `SignalEvaluateCoreAttributes` | `plaidNonOauthAuthenticationAttemptsCount3D` | `plaid_non_oauth_authentication_attempts_count_3d` |
| `SignalEvaluateCoreAttributes` | `plaidNonOauthAuthenticationAttemptsCount7D` | `plaid_non_oauth_authentication_attempts_count_7d` |
| `SignalEvaluateCoreAttributes` | `plaidNonOauthAuthenticationAttemptsCount30D` | `plaid_non_oauth_authentication_attempts_count_30d` |
| `SignalEvaluateCoreAttributes` | `failedPlaidNonOauthAuthenticationAttemptsCount3D` | `failed_plaid_non_oauth_authentication_attempts_count_3d` |
| `SignalEvaluateCoreAttributes` | `failedPlaidNonOauthAuthenticationAttemptsCount7D` | `failed_plaid_non_oauth_authentication_attempts_count_7d` |
| `SignalEvaluateCoreAttributes` | `failedPlaidNonOauthAuthenticationAttemptsCount30D` | `failed_plaid_non_oauth_authentication_attempts_count_30d` |
| `SignalEvaluateCoreAttributes` | `debitTransactionsCount10D` | `debit_transactions_count_10d` |
| `SignalEvaluateCoreAttributes` | `creditTransactionsCount10D` | `credit_transactions_count_10d` |
| `SignalEvaluateCoreAttributes` | `debitTransactionsCount30D` | `debit_transactions_count_30d` |
| `SignalEvaluateCoreAttributes` | `creditTransactionsCount30D` | `credit_transactions_count_30d` |
| `SignalEvaluateCoreAttributes` | `debitTransactionsCount60D` | `debit_transactions_count_60d` |
| `SignalEvaluateCoreAttributes` | `creditTransactionsCount60D` | `credit_transactions_count_60d` |
| `SignalEvaluateCoreAttributes` | `debitTransactionsCount90D` | `debit_transactions_count_90d` |
| `SignalEvaluateCoreAttributes` | `creditTransactionsCount90D` | `credit_transactions_count_90d` |
| `SignalEvaluateCoreAttributes` | `totalDebitTransactionsAmount30D` | `total_debit_transactions_amount_30d` |
| `SignalEvaluateCoreAttributes` | `totalCreditTransactionsAmount30D` | `total_credit_transactions_amount_30d` |
| `SignalEvaluateCoreAttributes` | `totalDebitTransactionsAmount60D` | `total_debit_transactions_amount_60d` |
| `SignalEvaluateCoreAttributes` | `totalCreditTransactionsAmount60D` | `total_credit_transactions_amount_60d` |
| `SignalEvaluateCoreAttributes` | `totalDebitTransactionsAmount90D` | `total_debit_transactions_amount_90d` |
| `SignalEvaluateCoreAttributes` | `totalCreditTransactionsAmount90D` | `total_credit_transactions_amount_90d` |
| `SignalEvaluateCoreAttributes` | `p50EodBalance30D` | `p50_eod_balance_30d` |
| `SignalEvaluateCoreAttributes` | `p50EodBalance60D` | `p50_eod_balance_60d` |
| `SignalEvaluateCoreAttributes` | `p50EodBalance90D` | `p50_eod_balance_90d` |
| `SignalEvaluateCoreAttributes` | `p50EodBalance31DTo60D` | `p50_eod_balance_31d_to_60d` |
| `SignalEvaluateCoreAttributes` | `p50EodBalance61DTo90D` | `p50_eod_balance_61d_to_90d` |
| `SignalEvaluateCoreAttributes` | `p90EodBalance31DTo60D` | `p90_eod_balance_31d_to_60d` |
| `SignalEvaluateCoreAttributes` | `p90EodBalance61DTo90D` | `p90_eod_balance_61d_to_90d` |
| `SignalEvaluateCoreAttributes` | `p10EodBalance31DTo60D` | `p10_eod_balance_31d_to_60d` |
| `SignalEvaluateCoreAttributes` | `p10EodBalance61DTo90D` | `p10_eod_balance_61d_to_90d` |
| `SignalEvaluateCoreAttributes` | `transactionsLastUpdated` | `transactions_last_updated` |
| `SignalEvaluateCoreAttributes` | `isAccountClosed` | `is_account_closed` |
| `SignalEvaluateCoreAttributes` | `isAccountFrozenOrRestricted` | `is_account_frozen_or_restricted` |
| `SignalEvaluateCoreAttributes` | `distinctIpAddressesCount3D` | `distinct_ip_addresses_count_3d` |
| `SignalEvaluateCoreAttributes` | `distinctIpAddressesCount7D` | `distinct_ip_addresses_count_7d` |
| `SignalEvaluateCoreAttributes` | `distinctIpAddressesCount30D` | `distinct_ip_addresses_count_30d` |
| `SignalEvaluateCoreAttributes` | `distinctIpAddressesCount90D` | `distinct_ip_addresses_count_90d` |
| `SignalEvaluateCoreAttributes` | `distinctUserAgentsCount3D` | `distinct_user_agents_count_3d` |
| `SignalEvaluateCoreAttributes` | `distinctUserAgentsCount7D` | `distinct_user_agents_count_7d` |
| `SignalEvaluateCoreAttributes` | `distinctUserAgentsCount30D` | `distinct_user_agents_count_30d` |
| `SignalEvaluateCoreAttributes` | `distinctUserAgentsCount90D` | `distinct_user_agents_count_90d` |
| `SignalEvaluateCoreAttributes` | `distinctSslTlsConnectionSessionsCount3D` | `distinct_ssl_tls_connection_sessions_count_3d` |
| `SignalEvaluateCoreAttributes` | `distinctSslTlsConnectionSessionsCount7D` | `distinct_ssl_tls_connection_sessions_count_7d` |
| `SignalEvaluateCoreAttributes` | `distinctSslTlsConnectionSessionsCount30D` | `distinct_ssl_tls_connection_sessions_count_30d` |
| `SignalEvaluateCoreAttributes` | `distinctSslTlsConnectionSessionsCount90D` | `distinct_ssl_tls_connection_sessions_count_90d` |
| `SignalEvaluateCoreAttributes` | `daysSinceAccountOpening` | `days_since_account_opening` |
| `SignalEvaluateCoreAttributes` | `balanceToTransactionAmountRatio` | `balance_to_transaction_amount_ratio` |
| `SignalEvaluateDevice` | `ipAddress` | `ip_address` |
| `SignalEvaluateDevice` | `userAgent` | `user_agent` |
| `SignalEvaluateRequest` | `clientId` | `client_id` |
| `SignalEvaluateRequest` | `accessToken` | `access_token` |
| `SignalEvaluateRequest` | `accountId` | `account_id` |
| `SignalEvaluateRequest` | `clientTransactionId` | `client_transaction_id` |
| `SignalEvaluateRequest` | `userPresent` | `user_present` |
| `SignalEvaluateRequest` | `clientUserId` | `client_user_id` |
| `SignalEvaluateRequest` | `isRecurring` | `is_recurring` |
| `SignalEvaluateRequest` | `defaultPaymentMethod` | `default_payment_method` |
| `SignalEvaluateRequest` | `riskProfileKey` | `risk_profile_key` |
| `SignalEvaluateRequest` | `rulesetKey` | `ruleset_key` |
| `SignalEvaluateResponse` | `requestId` | `request_id` |
| `SignalEvaluateResponse` | `coreAttributes` | `core_attributes` |
| `SignalEvaluateResponse` | `riskProfile` | `risk_profile` |
| `SignalEvaluateRuleset` | `rulesetKey` | `ruleset_key` |
| `SignalEvaluateRuleset` | `triggeredRuleDetails` | `triggered_rule_details` |
| `SignalEvaluateScores` | `customerInitiatedReturnRisk` | `customer_initiated_return_risk` |
| `SignalEvaluateScores` | `bankInitiatedReturnRisk` | `bank_initiated_return_risk` |
| `SignalPersonName` | `givenName` | `given_name` |
| `SignalPersonName` | `middleName` | `middle_name` |
| `SignalPersonName` | `familyName` | `family_name` |
| `SignalPrepareRequest` | `clientId` | `client_id` |
| `SignalPrepareRequest` | `accessToken` | `access_token` |
| `SignalPrepareResponse` | `requestId` | `request_id` |
| `SignalReturnReportRequest` | `clientId` | `client_id` |
| `SignalReturnReportRequest` | `clientTransactionId` | `client_transaction_id` |
| `SignalReturnReportRequest` | `returnCode` | `return_code` |
| `SignalReturnReportRequest` | `returnedAt` | `returned_at` |
| `SignalReturnReportResponse` | `requestId` | `request_id` |
| `SignalScheduleRequest` | `clientId` | `client_id` |
| `SignalScheduleRequest` | `accessToken` | `access_token` |
| `SignalScheduleRequest` | `accountId` | `account_id` |
| `SignalScheduleRequest` | `clientTransactionId` | `client_transaction_id` |
| `SignalScheduleRequest` | `defaultPaymentMethod` | `default_payment_method` |
| `SignalScheduleResponse` | `optimalDate` | `optimal_date` |
| `SignalScheduleResponse` | `requestId` | `request_id` |
| `SignalUser` | `phoneNumber` | `phone_number` |
| `SignalUser` | `emailAddress` | `email_address` |
| `SignalWarning` | `warningType` | `warning_type` |
| `SignalWarning` | `warningCode` | `warning_code` |
| `SignalWarning` | `warningMessage` | `warning_message` |
| `SimulatedTransferSweep` | `fundingAccountId` | `funding_account_id` |
| `SimulatedTransferSweep` | `ledgerId` | `ledger_id` |
| `SimulatedTransferSweep` | `isoCurrencyCode` | `iso_currency_code` |
| `SimulatedTransferSweep` | `expectedFundsAvailableDate` | `expected_funds_available_date` |
| `SimulatedTransferSweep` | `networkTraceId` | `network_trace_id` |
| `SimulatedTransferSweep` | `failureReason` | `failure_reason` |
| `SingleDocumentRiskSignal` | `documentReference` | `document_reference` |
| `SingleDocumentRiskSignal` | `riskSignals` | `risk_signals` |
| `SingleDocumentRiskSignal` | `riskSummary` | `risk_summary` |
| `StandaloneCurrencyCodeList` | `isoCurrencyCode` | `iso_currency_code` |
| `StandaloneCurrencyCodeList` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `StatementsAccount` | `accountId` | `account_id` |
| `StatementsAccount` | `accountMask` | `account_mask` |
| `StatementsAccount` | `accountName` | `account_name` |
| `StatementsAccount` | `accountOfficialName` | `account_official_name` |
| `StatementsAccount` | `accountSubtype` | `account_subtype` |
| `StatementsAccount` | `accountType` | `account_type` |
| `StatementsDownloadRequest` | `accessToken` | `access_token` |
| `StatementsDownloadRequest` | `clientId` | `client_id` |
| `StatementsDownloadRequest` | `statementId` | `statement_id` |
| `StatementsListRequest` | `accessToken` | `access_token` |
| `StatementsListRequest` | `clientId` | `client_id` |
| `StatementsListResponse` | `institutionId` | `institution_id` |
| `StatementsListResponse` | `institutionName` | `institution_name` |
| `StatementsListResponse` | `itemId` | `item_id` |
| `StatementsListResponse` | `requestId` | `request_id` |
| `StatementsRefreshCompleteWebhook` | `webhookType` | `webhook_type` |
| `StatementsRefreshCompleteWebhook` | `webhookCode` | `webhook_code` |
| `StatementsRefreshCompleteWebhook` | `itemId` | `item_id` |
| `StatementsRefreshRequest` | `accessToken` | `access_token` |
| `StatementsRefreshRequest` | `clientId` | `client_id` |
| `StatementsRefreshRequest` | `startDate` | `start_date` |
| `StatementsRefreshRequest` | `endDate` | `end_date` |
| `StatementsRefreshResponse` | `requestId` | `request_id` |
| `StatementsStatement` | `statementId` | `statement_id` |
| `StatementsStatement` | `datePosted` | `date_posted` |
| `Status` | `statusCode` | `StatusCode` |
| `Status` | `statusDescription` | `StatusDescription` |
| `Status2` | `requiresQuestions` | `requires_questions` |
| `Status2` | `requiresSelections` | `requires_selections` |
| `Status2` | `requiresCode` | `requires_code` |
| `Status2` | `chooseDevice` | `choose_device` |
| `Status2` | `requiresCredentials` | `requires_credentials` |
| `Status2` | `requiresAccountSelection` | `requires_account_selection` |
| `Status2` | `requiresOauth` | `requires_oauth` |
| `Status2` | `institutionNotFound` | `institution_not_found` |
| `Status2` | `institutionNotSupported` | `institution_not_supported` |
| `StatusBreakdown` | `errorPlaid` | `error_plaid` |
| `StatusBreakdown` | `errorInstitution` | `error_institution` |
| `StatusBreakdown` | `refreshInterval` | `refresh_interval` |
| `Statuses` | `status` | `STATUS` |
| `StudentLoan` | `accountId` | `account_id` |
| `StudentLoan` | `accountNumber` | `account_number` |
| `StudentLoan` | `disbursementDates` | `disbursement_dates` |
| `StudentLoan` | `expectedPayoffDate` | `expected_payoff_date` |
| `StudentLoan` | `interestRatePercentage` | `interest_rate_percentage` |
| `StudentLoan` | `isOverdue` | `is_overdue` |
| `StudentLoan` | `lastPaymentAmount` | `last_payment_amount` |
| `StudentLoan` | `lastPaymentDate` | `last_payment_date` |
| `StudentLoan` | `lastStatementBalance` | `last_statement_balance` |
| `StudentLoan` | `lastStatementIssueDate` | `last_statement_issue_date` |
| `StudentLoan` | `loanName` | `loan_name` |
| `StudentLoan` | `loanStatus` | `loan_status` |
| `StudentLoan` | `minimumPaymentAmount` | `minimum_payment_amount` |
| `StudentLoan` | `nextPaymentDueDate` | `next_payment_due_date` |
| `StudentLoan` | `originationDate` | `origination_date` |
| `StudentLoan` | `originationPrincipalAmount` | `origination_principal_amount` |
| `StudentLoan` | `outstandingInterestAmount` | `outstanding_interest_amount` |
| `StudentLoan` | `paymentReferenceNumber` | `payment_reference_number` |
| `StudentLoan` | `pslfStatus` | `pslf_status` |
| `StudentLoan` | `repaymentPlan` | `repayment_plan` |
| `StudentLoan` | `sequenceNumber` | `sequence_number` |
| `StudentLoan` | `servicerAddress` | `servicer_address` |
| `StudentLoan` | `ytdInterestPaid` | `ytd_interest_paid` |
| `StudentLoan` | `ytdPrincipalPaid` | `ytd_principal_paid` |
| `StudentLoanRepaymentModel` | `nonRepaymentMonths` | `non_repayment_months` |
| `StudentLoanRepaymentModel` | `repaymentMonths` | `repayment_months` |
| `StudentLoanStatus` | `endDate` | `end_date` |
| `SweepFailure` | `failureCode` | `failure_code` |
| `SyncUpdatesAvailableWebhook` | `webhookType` | `webhook_type` |
| `SyncUpdatesAvailableWebhook` | `webhookCode` | `webhook_code` |
| `SyncUpdatesAvailableWebhook` | `itemId` | `item_id` |
| `SyncUpdatesAvailableWebhook` | `userId` | `user_id` |
| `SyncUpdatesAvailableWebhook` | `initialUpdateComplete` | `initial_update_complete` |
| `SyncUpdatesAvailableWebhook` | `historicalUpdateComplete` | `historical_update_complete` |
| `SyntheticFraud` | `riskLevel` | `risk_level` |
| `TosAcceptanceMetadata` | `agreementAccepted` | `agreement_accepted` |
| `TosAcceptanceMetadata` | `originatorIpAddress` | `originator_ip_address` |
| `TosAcceptanceMetadata` | `agreementAcceptedAt` | `agreement_accepted_at` |
| `Taxform` | `docId` | `doc_id` |
| `Taxform` | `documentType` | `document_type` |
| `TaxpayerId` | `idType` | `id_type` |
| `TaxpayerId` | `idMask` | `id_mask` |
| `TaxpayerId` | `last4Digits` | `last_4_digits` |
| `TaxpayerIdentifier` | `taxpayerIdentifierType` | `TaxpayerIdentifierType` |
| `TaxpayerIdentifier` | `taxpayerIdentifierValue` | `TaxpayerIdentifierValue` |
| `TaxpayerIdentifiers` | `taxpayerIdentifier` | `TAXPAYER_IDENTIFIER` |
| `Total` | `canonicalDescription` | `canonical_description` |
| `Total` | `currentPay` | `current_pay` |
| `Total` | `ytdPay` | `ytd_pay` |
| `TotalInflowAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalInflowAmount` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalInflowAmount30D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalInflowAmount30D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalInflowAmount60D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalInflowAmount60D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalInflowAmount90D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalInflowAmount90D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalMonthlyIncomeInsights` | `baselineAmount` | `baseline_amount` |
| `TotalMonthlyIncomeInsights` | `currentAmount` | `current_amount` |
| `TotalOutflowAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalOutflowAmount` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalOutflowAmount30D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalOutflowAmount30D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalOutflowAmount60D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalOutflowAmount60D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalOutflowAmount90D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalOutflowAmount90D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalReportInflowAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalReportInflowAmount` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalReportInflowAmount30D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalReportInflowAmount30D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalReportInflowAmount60D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalReportInflowAmount60D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalReportInflowAmount90D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalReportInflowAmount90D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalReportOutflowAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalReportOutflowAmount` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalReportOutflowAmount30D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalReportOutflowAmount30D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalReportOutflowAmount60D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalReportOutflowAmount60D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TotalReportOutflowAmount90D` | `isoCurrencyCode` | `iso_currency_code` |
| `TotalReportOutflowAmount90D` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `Transaction` | `accountId` | `account_id` |
| `Transaction` | `isoCurrencyCode` | `iso_currency_code` |
| `Transaction` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `Transaction` | `categoryId` | `category_id` |
| `Transaction` | `checkNumber` | `check_number` |
| `Transaction` | `merchantName` | `merchant_name` |
| `Transaction` | `originalDescription` | `original_description` |
| `Transaction` | `paymentMeta` | `payment_meta` |
| `Transaction` | `pendingTransactionId` | `pending_transaction_id` |
| `Transaction` | `accountOwner` | `account_owner` |
| `Transaction` | `transactionId` | `transaction_id` |
| `Transaction` | `transactionType` | `transaction_type` |
| `Transaction` | `logoUrl` | `logo_url` |
| `Transaction` | `authorizedDate` | `authorized_date` |
| `Transaction` | `authorizedDatetime` | `authorized_datetime` |
| `Transaction` | `paymentChannel` | `payment_channel` |
| `Transaction` | `personalFinanceCategory` | `personal_finance_category` |
| `Transaction` | `businessFinanceCategory` | `business_finance_category` |
| `Transaction` | `transactionCode` | `transaction_code` |
| `Transaction` | `personalFinanceCategoryIconUrl` | `personal_finance_category_icon_url` |
| `Transaction` | `merchantEntityId` | `merchant_entity_id` |
| `Transaction` | `clientCustomization` | `client_customization` |
| `TransactionLocation` | `postalCode` | `postal_code` |
| `TransactionLocation` | `storeNumber` | `store_number` |
| `TransactionBase` | `accountId` | `account_id` |
| `TransactionBase` | `isoCurrencyCode` | `iso_currency_code` |
| `TransactionBase` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TransactionBase` | `categoryId` | `category_id` |
| `TransactionBase` | `checkNumber` | `check_number` |
| `TransactionBase` | `merchantName` | `merchant_name` |
| `TransactionBase` | `originalDescription` | `original_description` |
| `TransactionBase` | `paymentMeta` | `payment_meta` |
| `TransactionBase` | `pendingTransactionId` | `pending_transaction_id` |
| `TransactionBase` | `accountOwner` | `account_owner` |
| `TransactionBase` | `transactionId` | `transaction_id` |
| `TransactionBase` | `transactionType` | `transaction_type` |
| `TransactionBase` | `logoUrl` | `logo_url` |
| `TransactionCounterparty` | `entityId` | `entity_id` |
| `TransactionCounterparty` | `logoUrl` | `logo_url` |
| `TransactionCounterparty` | `confidenceLevel` | `confidence_level` |
| `TransactionCounterparty` | `accountNumbers` | `account_numbers` |
| `TransactionData` | `accountId` | `account_id` |
| `TransactionData` | `transactionId` | `transaction_id` |
| `TransactionOverride` | `dateTransacted` | `date_transacted` |
| `TransactionOverride` | `datePosted` | `date_posted` |
| `TransactionStream` | `accountId` | `account_id` |
| `TransactionStream` | `streamId` | `stream_id` |
| `TransactionStream` | `categoryId` | `category_id` |
| `TransactionStream` | `merchantName` | `merchant_name` |
| `TransactionStream` | `firstDate` | `first_date` |
| `TransactionStream` | `lastDate` | `last_date` |
| `TransactionStream` | `predictedNextDate` | `predicted_next_date` |
| `TransactionStream` | `transactionIds` | `transaction_ids` |
| `TransactionStream` | `averageAmount` | `average_amount` |
| `TransactionStream` | `lastAmount` | `last_amount` |
| `TransactionStream` | `isActive` | `is_active` |
| `TransactionStream` | `personalFinanceCategory` | `personal_finance_category` |
| `TransactionStream` | `isUserModified` | `is_user_modified` |
| `TransactionStream` | `lastUserModifiedDatetime` | `last_user_modified_datetime` |
| `TransactionStreamAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `TransactionStreamAmount` | `unofficialCurrencyCode` | `unofficial_currency_code` |
| `TransactionsCategoryRule` | `userId` | `user_id` |
| `TransactionsCategoryRule` | `createdAt` | `created_at` |
| `TransactionsCategoryRule` | `updatedAt` | `updated_at` |
| `TransactionsCategoryRule` | `pfcPrimaryCategory` | `pfc_primary_category` |
| `TransactionsCategoryRule` | `pfcDetailedCategory` | `pfc_detailed_category` |
| `TransactionsCategoryRule` | `ruleDetails` | `rule_details` |
| `TransactionsEnhanceGetRequest` | `clientId` | `client_id` |
| `TransactionsEnhanceGetRequest` | `accountType` | `account_type` |
| `TransactionsEnhanceGetResponse` | `enhancedTransactions` | `enhanced_transactions` |
| `TransactionsEnrichRequest` | `clientId` | `client_id` |
| `TransactionsEnrichRequest` | `accountType` | `account_type` |
| `TransactionsEnrichRequestOptions` | `includeLegacyCategory` | `include_legacy_category` |
| `TransactionsEnrichRequestOptions` | `personalFinanceCategoryVersion` | `personal_finance_category_version` |
| `TransactionsEnrichResponse` | `enrichedTransactions` | `enriched_transactions` |
| `TransactionsEnrichResponse` | `requestId` | `request_id` |
| `TransactionsGetRequest` | `clientId` | `client_id` |
| `TransactionsGetRequest` | `accessToken` | `access_token` |
| `TransactionsGetRequest` | `startDate` | `start_date` |
| `TransactionsGetRequest` | `endDate` | `end_date` |
| `TransactionsGetRequestOptions` | `accountIds` | `account_ids` |
| `TransactionsGetRequestOptions` | `includeOriginalDescription` | `include_original_description` |
| `TransactionsGetRequestOptions` | `includePersonalFinanceCategoryBeta` | `include_personal_finance_category_beta` |
| `TransactionsGetRequestOptions` | `includePersonalFinanceCategory` | `include_personal_finance_category` |
| `TransactionsGetRequestOptions` | `includeLogoAndCounterpartyBeta` | `include_logo_and_counterparty_beta` |
| `TransactionsGetRequestOptions` | `personalFinanceCategoryVersion` | `personal_finance_category_version` |
| `TransactionsGetRequestOptions` | `daysRequested` | `days_requested` |
| `TransactionsGetResponse` | `totalTransactions` | `total_transactions` |
| `TransactionsGetResponse` | `requestId` | `request_id` |
| `TransactionsRecurringCreateInput` | `transactionIds` | `transaction_ids` |
| `TransactionsRecurringCreateRequest` | `clientId` | `client_id` |
| `TransactionsRecurringCreateRequest` | `accessToken` | `access_token` |
| `TransactionsRecurringCreateResponse` | `addedStreams` | `added_streams` |
| `TransactionsRecurringCreateResponse` | `modifiedStreams` | `modified_streams` |
| `TransactionsRecurringCreateResponse` | `removedStreamIds` | `removed_stream_ids` |
| `TransactionsRecurringGetRequest` | `clientId` | `client_id` |
| `TransactionsRecurringGetRequest` | `accessToken` | `access_token` |
| `TransactionsRecurringGetRequest` | `accountIds` | `account_ids` |
| `TransactionsRecurringGetRequestOptions` | `includePersonalFinanceCategory` | `include_personal_finance_category` |
| `TransactionsRecurringGetRequestOptions` | `personalFinanceCategoryVersion` | `personal_finance_category_version` |
| `TransactionsRecurringGetResponse` | `inflowStreams` | `inflow_streams` |
| `TransactionsRecurringGetResponse` | `outflowStreams` | `outflow_streams` |
| `TransactionsRecurringGetResponse` | `updatedDatetime` | `updated_datetime` |
| `TransactionsRecurringGetResponse` | `personalFinanceCategoryVersion` | `personal_finance_category_version` |
| `TransactionsRecurringGetResponse` | `requestId` | `request_id` |
| `TransactionsRecurringMergeInput` | `streamIds` | `stream_ids` |
| `TransactionsRecurringMergeRequest` | `clientId` | `client_id` |
| `TransactionsRecurringMergeRequest` | `accessToken` | `access_token` |
| `TransactionsRecurringMergeResponse` | `modifiedStreams` | `modified_streams` |
| `TransactionsRecurringMergeResponse` | `removedStreamIds` | `removed_stream_ids` |
| `TransactionsRecurringUpdateInput` | `streamId` | `stream_id` |
| `TransactionsRecurringUpdateInput` | `transactionIds` | `transaction_ids` |
| `TransactionsRecurringUpdateRequest` | `clientId` | `client_id` |
| `TransactionsRecurringUpdateRequest` | `accessToken` | `access_token` |
| `TransactionsRecurringUpdateResponse` | `modifiedStreams` | `modified_streams` |
| `TransactionsRecurringUpdateResponse` | `removedStreamIds` | `removed_stream_ids` |
| `TransactionsRefreshRequest` | `clientId` | `client_id` |
| `TransactionsRefreshRequest` | `accessToken` | `access_token` |
| `TransactionsRefreshResponse` | `requestId` | `request_id` |
| `TransactionsRemovedWebhook` | `webhookType` | `webhook_type` |
| `TransactionsRemovedWebhook` | `webhookCode` | `webhook_code` |
| `TransactionsRemovedWebhook` | `removedTransactions` | `removed_transactions` |
| `TransactionsRemovedWebhook` | `itemId` | `item_id` |
| `TransactionsRulesCreateRequest` | `clientId` | `client_id` |
| `TransactionsRulesCreateRequest` | `clientUserId` | `client_user_id` |
| `TransactionsRulesCreateRequest` | `pfcPrimaryCategory` | `pfc_primary_category` |
| `TransactionsRulesCreateRequest` | `pfcDetailedCategory` | `pfc_detailed_category` |
| `TransactionsRulesCreateRequest` | `ruleDetails` | `rule_details` |
| `TransactionsRulesCreateResponse` | `requestId` | `request_id` |
| `TransactionsRulesListRequest` | `clientId` | `client_id` |
| `TransactionsRulesListRequest` | `clientUserId` | `client_user_id` |
| `TransactionsRulesListResponse` | `requestId` | `request_id` |
| `TransactionsRulesRemoveRequest` | `clientId` | `client_id` |
| `TransactionsRulesRemoveRequest` | `clientUserId` | `client_user_id` |
| `TransactionsRulesRemoveRequest` | `ruleId` | `rule_id` |
| `TransactionsRulesRemoveResponse` | `requestId` | `request_id` |
| `TransactionsSyncRequest` | `clientId` | `client_id` |
| `TransactionsSyncRequest` | `accessToken` | `access_token` |
| `TransactionsSyncRequestOptions` | `includeOriginalDescription` | `include_original_description` |
| `TransactionsSyncRequestOptions` | `includePersonalFinanceCategory` | `include_personal_finance_category` |
| `TransactionsSyncRequestOptions` | `includeLogoAndCounterpartyBeta` | `include_logo_and_counterparty_beta` |
| `TransactionsSyncRequestOptions` | `personalFinanceCategoryVersion` | `personal_finance_category_version` |
| `TransactionsSyncRequestOptions` | `daysRequested` | `days_requested` |
| `TransactionsSyncRequestOptions` | `accountId` | `account_id` |
| `TransactionsSyncResponse` | `transactionsUpdateStatus` | `transactions_update_status` |
| `TransactionsSyncResponse` | `nextCursor` | `next_cursor` |
| `TransactionsSyncResponse` | `hasMore` | `has_more` |
| `TransactionsSyncResponse` | `requestId` | `request_id` |
| `TransactionsUserInsightsGetRequest` | `clientId` | `client_id` |
| `TransactionsUserInsightsGetRequest` | `clientUserId` | `client_user_id` |
| `TransactionsUserInsightsGetResponse` | `userDataOverview` | `user_data_overview` |
| `TransactionsUserInsightsGetResponse` | `counterpartyInsights` | `counterparty_insights` |
| `TransactionsUserInsightsGetResponse` | `categoryInsights` | `category_insights` |
| `TransactionsUserInsightsGetResponse` | `recurringTransactions` | `recurring_transactions` |
| `Transfer` | `authorizationId` | `authorization_id` |
| `Transfer` | `achClass` | `ach_class` |
| `Transfer` | `accountId` | `account_id` |
| `Transfer` | `fundingAccountId` | `funding_account_id` |
| `Transfer` | `ledgerId` | `ledger_id` |
| `Transfer` | `sweepStatus` | `sweep_status` |
| `Transfer` | `wireDetails` | `wire_details` |
| `Transfer` | `failureReason` | `failure_reason` |
| `Transfer` | `originationAccountId` | `origination_account_id` |
| `Transfer` | `guaranteeDecision` | `guarantee_decision` |
| `Transfer` | `guaranteeDecisionRationale` | `guarantee_decision_rationale` |
| `Transfer` | `guaranteeDetails` | `guarantee_details` |
| `Transfer` | `isoCurrencyCode` | `iso_currency_code` |
| `Transfer` | `standardReturnWindow` | `standard_return_window` |
| `Transfer` | `unauthorizedReturnWindow` | `unauthorized_return_window` |
| `Transfer` | `expectedSettlementDate` | `expected_settlement_date` |
| `Transfer` | `expectedFundsAvailableDate` | `expected_funds_available_date` |
| `Transfer` | `originatorClientId` | `originator_client_id` |
| `Transfer` | `recurringTransferId` | `recurring_transfer_id` |
| `Transfer` | `expectedSweepSettlementSchedule` | `expected_sweep_settlement_schedule` |
| `Transfer` | `creditFundsSource` | `credit_funds_source` |
| `Transfer` | `facilitatorFee` | `facilitator_fee` |
| `Transfer` | `networkTraceId` | `network_trace_id` |
| `TransferAuthorization` | `decisionRationale` | `decision_rationale` |
| `TransferAuthorization` | `guaranteeDecision` | `guarantee_decision` |
| `TransferAuthorization` | `guaranteeDecisionRationale` | `guarantee_decision_rationale` |
| `TransferAuthorization` | `guaranteeDetails` | `guarantee_details` |
| `TransferAuthorization` | `paymentRisk` | `payment_risk` |
| `TransferAuthorization` | `proposedTransfer` | `proposed_transfer` |
| `TransferAuthorizationCancelRequest` | `clientId` | `client_id` |
| `TransferAuthorizationCancelRequest` | `authorizationId` | `authorization_id` |
| `TransferAuthorizationCancelResponse` | `requestId` | `request_id` |
| `TransferAuthorizationCreateRequest` | `clientId` | `client_id` |
| `TransferAuthorizationCreateRequest` | `accessToken` | `access_token` |
| `TransferAuthorizationCreateRequest` | `accountId` | `account_id` |
| `TransferAuthorizationCreateRequest` | `fundingAccountId` | `funding_account_id` |
| `TransferAuthorizationCreateRequest` | `ledgerId` | `ledger_id` |
| `TransferAuthorizationCreateRequest` | `paymentProfileToken` | `payment_profile_token` |
| `TransferAuthorizationCreateRequest` | `achClass` | `ach_class` |
| `TransferAuthorizationCreateRequest` | `wireDetails` | `wire_details` |
| `TransferAuthorizationCreateRequest` | `originationAccountId` | `origination_account_id` |
| `TransferAuthorizationCreateRequest` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferAuthorizationCreateRequest` | `idempotencyKey` | `idempotency_key` |
| `TransferAuthorizationCreateRequest` | `userPresent` | `user_present` |
| `TransferAuthorizationCreateRequest` | `withGuarantee` | `with_guarantee` |
| `TransferAuthorizationCreateRequest` | `requestGuarantee` | `request_guarantee` |
| `TransferAuthorizationCreateRequest` | `beaconSessionId` | `beacon_session_id` |
| `TransferAuthorizationCreateRequest` | `originatorClientId` | `originator_client_id` |
| `TransferAuthorizationCreateRequest` | `creditFundsSource` | `credit_funds_source` |
| `TransferAuthorizationCreateRequest` | `testClockId` | `test_clock_id` |
| `TransferAuthorizationCreateRequest` | `rulesetKey` | `ruleset_key` |
| `TransferAuthorizationCreateRequest` | `customAttributes` | `custom_attributes` |
| `TransferAuthorizationCreateResponse` | `requestId` | `request_id` |
| `TransferAuthorizationDevice` | `ipAddress` | `ip_address` |
| `TransferAuthorizationDevice` | `userAgent` | `user_agent` |
| `TransferAuthorizationPaymentRisk` | `bankInitiatedReturnScore` | `bank_initiated_return_score` |
| `TransferAuthorizationPaymentRisk` | `customerInitiatedReturnScore` | `customer_initiated_return_score` |
| `TransferAuthorizationPaymentRisk` | `riskLevel` | `risk_level` |
| `TransferAuthorizationProposedTransfer` | `achClass` | `ach_class` |
| `TransferAuthorizationProposedTransfer` | `accountId` | `account_id` |
| `TransferAuthorizationProposedTransfer` | `fundingAccountId` | `funding_account_id` |
| `TransferAuthorizationProposedTransfer` | `ledgerId` | `ledger_id` |
| `TransferAuthorizationProposedTransfer` | `requestedAmount` | `requested_amount` |
| `TransferAuthorizationProposedTransfer` | `wireDetails` | `wire_details` |
| `TransferAuthorizationProposedTransfer` | `originationAccountId` | `origination_account_id` |
| `TransferAuthorizationProposedTransfer` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferAuthorizationProposedTransfer` | `originatorClientId` | `originator_client_id` |
| `TransferAuthorizationProposedTransfer` | `creditFundsSource` | `credit_funds_source` |
| `TransferAuthorizationUserInRequest` | `legalName` | `legal_name` |
| `TransferAuthorizationUserInRequest` | `phoneNumber` | `phone_number` |
| `TransferAuthorizationUserInRequest` | `emailAddress` | `email_address` |
| `TransferBalanceGetRequest` | `clientId` | `client_id` |
| `TransferBalanceGetRequest` | `originatorClientId` | `originator_client_id` |
| `TransferBalanceGetResponse` | `requestId` | `request_id` |
| `TransferCancelRequest` | `clientId` | `client_id` |
| `TransferCancelRequest` | `transferId` | `transfer_id` |
| `TransferCancelRequest` | `originatorClientId` | `originator_client_id` |
| `TransferCancelRequest` | `reasonCode` | `reason_code` |
| `TransferCancelResponse` | `requestId` | `request_id` |
| `TransferCapabilitiesGetRequest` | `clientId` | `client_id` |
| `TransferCapabilitiesGetRequest` | `accessToken` | `access_token` |
| `TransferCapabilitiesGetRequest` | `accountId` | `account_id` |
| `TransferCapabilitiesGetRequest` | `paymentProfileToken` | `payment_profile_token` |
| `TransferCapabilitiesGetResponse` | `institutionSupportedNetworks` | `institution_supported_networks` |
| `TransferCapabilitiesGetResponse` | `requestId` | `request_id` |
| `TransferCapabilitiesGetRfP` | `maxAmount` | `max_amount` |
| `TransferCapabilitiesGetRfP` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferConfigurationGetRequest` | `clientId` | `client_id` |
| `TransferConfigurationGetRequest` | `originatorClientId` | `originator_client_id` |
| `TransferConfigurationGetResponse` | `requestId` | `request_id` |
| `TransferConfigurationGetResponse` | `maxSingleTransferAmount` | `max_single_transfer_amount` |
| `TransferConfigurationGetResponse` | `maxSingleTransferCreditAmount` | `max_single_transfer_credit_amount` |
| `TransferConfigurationGetResponse` | `maxSingleTransferDebitAmount` | `max_single_transfer_debit_amount` |
| `TransferConfigurationGetResponse` | `maxDailyCreditAmount` | `max_daily_credit_amount` |
| `TransferConfigurationGetResponse` | `maxDailyDebitAmount` | `max_daily_debit_amount` |
| `TransferConfigurationGetResponse` | `maxMonthlyAmount` | `max_monthly_amount` |
| `TransferConfigurationGetResponse` | `maxMonthlyCreditAmount` | `max_monthly_credit_amount` |
| `TransferConfigurationGetResponse` | `maxMonthlyDebitAmount` | `max_monthly_debit_amount` |
| `TransferConfigurationGetResponse` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferCreateRequest` | `clientId` | `client_id` |
| `TransferCreateRequest` | `idempotencyKey` | `idempotency_key` |
| `TransferCreateRequest` | `accessToken` | `access_token` |
| `TransferCreateRequest` | `accountId` | `account_id` |
| `TransferCreateRequest` | `authorizationId` | `authorization_id` |
| `TransferCreateRequest` | `achClass` | `ach_class` |
| `TransferCreateRequest` | `originationAccountId` | `origination_account_id` |
| `TransferCreateRequest` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferCreateRequest` | `testClockId` | `test_clock_id` |
| `TransferCreateRequest` | `facilitatorFee` | `facilitator_fee` |
| `TransferCreateResponse` | `requestId` | `request_id` |
| `TransferCreditUsageConfiguration` | `expectedFrequency` | `expected_frequency` |
| `TransferCreditUsageConfiguration` | `expectedHighestAmount` | `expected_highest_amount` |
| `TransferCreditUsageConfiguration` | `expectedAverageAmount` | `expected_average_amount` |
| `TransferCreditUsageConfiguration` | `expectedMonthlyAmount` | `expected_monthly_amount` |
| `TransferCreditUsageConfiguration` | `secCodes` | `sec_codes` |
| `TransferDebitUsageConfiguration` | `expectedFrequency` | `expected_frequency` |
| `TransferDebitUsageConfiguration` | `expectedHighestAmount` | `expected_highest_amount` |
| `TransferDebitUsageConfiguration` | `expectedAverageAmount` | `expected_average_amount` |
| `TransferDebitUsageConfiguration` | `expectedMonthlyAmount` | `expected_monthly_amount` |
| `TransferDebitUsageConfiguration` | `secCodes` | `sec_codes` |
| `TransferDevice` | `ipAddress` | `ip_address` |
| `TransferDevice` | `userAgent` | `user_agent` |
| `TransferDiligenceDocumentUploadRequest` | `originatorClientId` | `originator_client_id` |
| `TransferDiligenceDocumentUploadResponse` | `requestId` | `request_id` |
| `TransferDiligenceSubmitRequest` | `clientId` | `client_id` |
| `TransferDiligenceSubmitRequest` | `originatorClientId` | `originator_client_id` |
| `TransferDiligenceSubmitRequest` | `originatorDiligence` | `originator_diligence` |
| `TransferDiligenceSubmitResponse` | `requestId` | `request_id` |
| `TransferEvent` | `eventId` | `event_id` |
| `TransferEvent` | `eventType` | `event_type` |
| `TransferEvent` | `accountId` | `account_id` |
| `TransferEvent` | `fundingAccountId` | `funding_account_id` |
| `TransferEvent` | `ledgerId` | `ledger_id` |
| `TransferEvent` | `transferId` | `transfer_id` |
| `TransferEvent` | `originationAccountId` | `origination_account_id` |
| `TransferEvent` | `transferType` | `transfer_type` |
| `TransferEvent` | `transferAmount` | `transfer_amount` |
| `TransferEvent` | `failureReason` | `failure_reason` |
| `TransferEvent` | `sweepId` | `sweep_id` |
| `TransferEvent` | `sweepAmount` | `sweep_amount` |
| `TransferEvent` | `eventAmount` | `event_amount` |
| `TransferEvent` | `refundId` | `refund_id` |
| `TransferEvent` | `originatorClientId` | `originator_client_id` |
| `TransferEvent` | `intentId` | `intent_id` |
| `TransferEvent` | `wireReturnFee` | `wire_return_fee` |
| `TransferEventListRequest` | `clientId` | `client_id` |
| `TransferEventListRequest` | `startDate` | `start_date` |
| `TransferEventListRequest` | `endDate` | `end_date` |
| `TransferEventListRequest` | `transferId` | `transfer_id` |
| `TransferEventListRequest` | `accountId` | `account_id` |
| `TransferEventListRequest` | `transferType` | `transfer_type` |
| `TransferEventListRequest` | `eventTypes` | `event_types` |
| `TransferEventListRequest` | `sweepId` | `sweep_id` |
| `TransferEventListRequest` | `originationAccountId` | `origination_account_id` |
| `TransferEventListRequest` | `originatorClientId` | `originator_client_id` |
| `TransferEventListRequest` | `fundingAccountId` | `funding_account_id` |
| `TransferEventListResponse` | `transferEvents` | `transfer_events` |
| `TransferEventListResponse` | `hasMore` | `has_more` |
| `TransferEventListResponse` | `requestId` | `request_id` |
| `TransferEventSyncRequest` | `clientId` | `client_id` |
| `TransferEventSyncRequest` | `afterId` | `after_id` |
| `TransferEventSyncResponse` | `transferEvents` | `transfer_events` |
| `TransferEventSyncResponse` | `hasMore` | `has_more` |
| `TransferEventSyncResponse` | `requestId` | `request_id` |
| `TransferEventsUpdateWebhook` | `webhookType` | `webhook_type` |
| `TransferEventsUpdateWebhook` | `webhookCode` | `webhook_code` |
| `TransferExpectedSweepSettlementScheduleItem` | `sweepSettlementDate` | `sweep_settlement_date` |
| `TransferExpectedSweepSettlementScheduleItem` | `sweptSettledAmount` | `swept_settled_amount` |
| `TransferFailure` | `failureCode` | `failure_code` |
| `TransferFailure` | `achReturnCode` | `ach_return_code` |
| `TransferFundingAccount` | `accessToken` | `access_token` |
| `TransferFundingAccount` | `accountId` | `account_id` |
| `TransferFundingAccountWithDisplayName` | `accessToken` | `access_token` |
| `TransferFundingAccountWithDisplayName` | `accountId` | `account_id` |
| `TransferFundingAccountWithDisplayName` | `displayName` | `display_name` |
| `TransferGetRequest` | `clientId` | `client_id` |
| `TransferGetRequest` | `transferId` | `transfer_id` |
| `TransferGetRequest` | `authorizationId` | `authorization_id` |
| `TransferGetRequest` | `originatorClientId` | `originator_client_id` |
| `TransferGetResponse` | `requestId` | `request_id` |
| `TransferGuaranteeDetails` | `guaranteedAmount` | `guaranteed_amount` |
| `TransferGuaranteeScheduleItem` | `observationWindowBusinessDays` | `observation_window_business_days` |
| `TransferGuaranteeScheduleItem` | `observationWindowExpirationTime` | `observation_window_expiration_time` |
| `TransferIntentCreate` | `accountId` | `account_id` |
| `TransferIntentCreate` | `originationAccountId` | `origination_account_id` |
| `TransferIntentCreate` | `fundingAccountId` | `funding_account_id` |
| `TransferIntentCreate` | `achClass` | `ach_class` |
| `TransferIntentCreate` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferIntentCreate` | `requireGuarantee` | `require_guarantee` |
| `TransferIntentCreateRequest` | `clientId` | `client_id` |
| `TransferIntentCreateRequest` | `accountId` | `account_id` |
| `TransferIntentCreateRequest` | `fundingAccountId` | `funding_account_id` |
| `TransferIntentCreateRequest` | `achClass` | `ach_class` |
| `TransferIntentCreateRequest` | `originationAccountId` | `origination_account_id` |
| `TransferIntentCreateRequest` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferIntentCreateRequest` | `requireGuarantee` | `require_guarantee` |
| `TransferIntentCreateResponse` | `transferIntent` | `transfer_intent` |
| `TransferIntentCreateResponse` | `requestId` | `request_id` |
| `TransferIntentGet` | `transferId` | `transfer_id` |
| `TransferIntentGet` | `failureReason` | `failure_reason` |
| `TransferIntentGet` | `authorizationDecision` | `authorization_decision` |
| `TransferIntentGet` | `authorizationDecisionRationale` | `authorization_decision_rationale` |
| `TransferIntentGet` | `accountId` | `account_id` |
| `TransferIntentGet` | `originationAccountId` | `origination_account_id` |
| `TransferIntentGet` | `fundingAccountId` | `funding_account_id` |
| `TransferIntentGet` | `achClass` | `ach_class` |
| `TransferIntentGet` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferIntentGet` | `requireGuarantee` | `require_guarantee` |
| `TransferIntentGet` | `guaranteeDecision` | `guarantee_decision` |
| `TransferIntentGet` | `guaranteeDecisionRationale` | `guarantee_decision_rationale` |
| `TransferIntentGetFailureReason` | `errorType` | `error_type` |
| `TransferIntentGetFailureReason` | `errorCode` | `error_code` |
| `TransferIntentGetFailureReason` | `errorMessage` | `error_message` |
| `TransferIntentGetRequest` | `clientId` | `client_id` |
| `TransferIntentGetRequest` | `transferIntentId` | `transfer_intent_id` |
| `TransferIntentGetResponse` | `transferIntent` | `transfer_intent` |
| `TransferIntentGetResponse` | `requestId` | `request_id` |
| `TransferLedgerDepositRequest` | `clientId` | `client_id` |
| `TransferLedgerDepositRequest` | `originatorClientId` | `originator_client_id` |
| `TransferLedgerDepositRequest` | `fundingAccountId` | `funding_account_id` |
| `TransferLedgerDepositRequest` | `ledgerId` | `ledger_id` |
| `TransferLedgerDepositRequest` | `idempotencyKey` | `idempotency_key` |
| `TransferLedgerDepositResponse` | `requestId` | `request_id` |
| `TransferLedgerDistributeRequest` | `clientId` | `client_id` |
| `TransferLedgerDistributeRequest` | `fromLedgerId` | `from_ledger_id` |
| `TransferLedgerDistributeRequest` | `toLedgerId` | `to_ledger_id` |
| `TransferLedgerDistributeRequest` | `idempotencyKey` | `idempotency_key` |
| `TransferLedgerDistributeResponse` | `requestId` | `request_id` |
| `TransferLedgerEvent` | `ledgerEventId` | `ledger_event_id` |
| `TransferLedgerEvent` | `ledgerId` | `ledger_id` |
| `TransferLedgerEvent` | `transferId` | `transfer_id` |
| `TransferLedgerEvent` | `refundId` | `refund_id` |
| `TransferLedgerEvent` | `sweepId` | `sweep_id` |
| `TransferLedgerEvent` | `pendingBalance` | `pending_balance` |
| `TransferLedgerEvent` | `availableBalance` | `available_balance` |
| `TransferLedgerEventListRequest` | `clientId` | `client_id` |
| `TransferLedgerEventListRequest` | `originatorClientId` | `originator_client_id` |
| `TransferLedgerEventListRequest` | `startDate` | `start_date` |
| `TransferLedgerEventListRequest` | `endDate` | `end_date` |
| `TransferLedgerEventListRequest` | `ledgerId` | `ledger_id` |
| `TransferLedgerEventListRequest` | `ledgerEventId` | `ledger_event_id` |
| `TransferLedgerEventListRequest` | `sourceType` | `source_type` |
| `TransferLedgerEventListRequest` | `sourceId` | `source_id` |
| `TransferLedgerEventListResponse` | `ledgerEvents` | `ledger_events` |
| `TransferLedgerEventListResponse` | `hasMore` | `has_more` |
| `TransferLedgerEventListResponse` | `requestId` | `request_id` |
| `TransferLedgerGetRequest` | `clientId` | `client_id` |
| `TransferLedgerGetRequest` | `ledgerId` | `ledger_id` |
| `TransferLedgerGetRequest` | `originatorClientId` | `originator_client_id` |
| `TransferLedgerGetResponse` | `ledgerId` | `ledger_id` |
| `TransferLedgerGetResponse` | `isDefault` | `is_default` |
| `TransferLedgerGetResponse` | `requestId` | `request_id` |
| `TransferLedgerWithdrawRequest` | `clientId` | `client_id` |
| `TransferLedgerWithdrawRequest` | `originatorClientId` | `originator_client_id` |
| `TransferLedgerWithdrawRequest` | `fundingAccountId` | `funding_account_id` |
| `TransferLedgerWithdrawRequest` | `ledgerId` | `ledger_id` |
| `TransferLedgerWithdrawRequest` | `idempotencyKey` | `idempotency_key` |
| `TransferLedgerWithdrawResponse` | `requestId` | `request_id` |
| `TransferListRequest` | `clientId` | `client_id` |
| `TransferListRequest` | `startDate` | `start_date` |
| `TransferListRequest` | `endDate` | `end_date` |
| `TransferListRequest` | `originationAccountId` | `origination_account_id` |
| `TransferListRequest` | `originatorClientId` | `originator_client_id` |
| `TransferListRequest` | `fundingAccountId` | `funding_account_id` |
| `TransferListResponse` | `requestId` | `request_id` |
| `TransferMetricsGetAuthorizationUsage` | `dailyCreditUtilization` | `daily_credit_utilization` |
| `TransferMetricsGetAuthorizationUsage` | `dailyDebitUtilization` | `daily_debit_utilization` |
| `TransferMetricsGetAuthorizationUsage` | `monthlyCreditUtilization` | `monthly_credit_utilization` |
| `TransferMetricsGetAuthorizationUsage` | `monthlyDebitUtilization` | `monthly_debit_utilization` |
| `TransferMetricsGetRequest` | `clientId` | `client_id` |
| `TransferMetricsGetRequest` | `originatorClientId` | `originator_client_id` |
| `TransferMetricsGetResponse` | `requestId` | `request_id` |
| `TransferMetricsGetResponse` | `dailyDebitTransferVolume` | `daily_debit_transfer_volume` |
| `TransferMetricsGetResponse` | `dailyCreditTransferVolume` | `daily_credit_transfer_volume` |
| `TransferMetricsGetResponse` | `monthlyTransferVolume` | `monthly_transfer_volume` |
| `TransferMetricsGetResponse` | `monthlyDebitTransferVolume` | `monthly_debit_transfer_volume` |
| `TransferMetricsGetResponse` | `monthlyCreditTransferVolume` | `monthly_credit_transfer_volume` |
| `TransferMetricsGetResponse` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferMetricsGetResponse` | `returnRates` | `return_rates` |
| `TransferMetricsGetResponse` | `authorizationUsage` | `authorization_usage` |
| `TransferMetricsGetReturnRates` | `last60D` | `last_60d` |
| `TransferMetricsGetReturnRatesOverInterval` | `overallReturnRate` | `overall_return_rate` |
| `TransferMetricsGetReturnRatesOverInterval` | `unauthorizedReturnRate` | `unauthorized_return_rate` |
| `TransferMetricsGetReturnRatesOverInterval` | `administrativeReturnRate` | `administrative_return_rate` |
| `TransferMigrateAccountRequest` | `clientId` | `client_id` |
| `TransferMigrateAccountRequest` | `accountNumber` | `account_number` |
| `TransferMigrateAccountRequest` | `routingNumber` | `routing_number` |
| `TransferMigrateAccountRequest` | `wireRoutingNumber` | `wire_routing_number` |
| `TransferMigrateAccountRequest` | `accountType` | `account_type` |
| `TransferMigrateAccountResponse` | `accessToken` | `access_token` |
| `TransferMigrateAccountResponse` | `accountId` | `account_id` |
| `TransferMigrateAccountResponse` | `requestId` | `request_id` |
| `TransferOriginatorAddress` | `postalCode` | `postal_code` |
| `TransferOriginatorAddress` | `countryCode` | `country_code` |
| `TransferOriginatorCreateRequest` | `clientId` | `client_id` |
| `TransferOriginatorCreateRequest` | `companyName` | `company_name` |
| `TransferOriginatorCreateResponse` | `originatorClientId` | `originator_client_id` |
| `TransferOriginatorCreateResponse` | `companyName` | `company_name` |
| `TransferOriginatorCreateResponse` | `requestId` | `request_id` |
| `TransferOriginatorDiligence` | `taxId` | `tax_id` |
| `TransferOriginatorDiligence` | `creditUsageConfiguration` | `credit_usage_configuration` |
| `TransferOriginatorDiligence` | `debitUsageConfiguration` | `debit_usage_configuration` |
| `TransferOriginatorDiligence` | `naicsCode` | `naics_code` |
| `TransferOriginatorDiligence` | `fundingAccount` | `funding_account` |
| `TransferOriginatorFundingAccountCreateRequest` | `clientId` | `client_id` |
| `TransferOriginatorFundingAccountCreateRequest` | `originatorClientId` | `originator_client_id` |
| `TransferOriginatorFundingAccountCreateRequest` | `fundingAccount` | `funding_account` |
| `TransferOriginatorFundingAccountCreateResponse` | `fundingAccountId` | `funding_account_id` |
| `TransferOriginatorFundingAccountCreateResponse` | `requestId` | `request_id` |
| `TransferOriginatorFundingAccountUpdateRequest` | `clientId` | `client_id` |
| `TransferOriginatorFundingAccountUpdateRequest` | `originatorClientId` | `originator_client_id` |
| `TransferOriginatorFundingAccountUpdateRequest` | `fundingAccount` | `funding_account` |
| `TransferOriginatorFundingAccountUpdateResponse` | `requestId` | `request_id` |
| `TransferOriginatorGetRequest` | `clientId` | `client_id` |
| `TransferOriginatorGetRequest` | `originatorClientId` | `originator_client_id` |
| `TransferOriginatorGetResponse` | `requestId` | `request_id` |
| `TransferOriginatorListRequest` | `clientId` | `client_id` |
| `TransferOriginatorListResponse` | `requestId` | `request_id` |
| `TransferPlatformOnboardingUpdateWebhook` | `webhookType` | `webhook_type` |
| `TransferPlatformOnboardingUpdateWebhook` | `webhookCode` | `webhook_code` |
| `TransferPlatformOnboardingUpdateWebhook` | `originatorClientId` | `originator_client_id` |
| `TransferPlatformOriginatorCreateRequest` | `clientId` | `client_id` |
| `TransferPlatformOriginatorCreateRequest` | `originatorClientId` | `originator_client_id` |
| `TransferPlatformOriginatorCreateRequest` | `tosAcceptanceMetadata` | `tos_acceptance_metadata` |
| `TransferPlatformOriginatorCreateRequest` | `originatorReviewedAt` | `originator_reviewed_at` |
| `TransferPlatformOriginatorCreateResponse` | `requestId` | `request_id` |
| `TransferPlatformPersonAddress` | `postalCode` | `postal_code` |
| `TransferPlatformPersonCreateRequest` | `clientId` | `client_id` |
| `TransferPlatformPersonCreateRequest` | `originatorClientId` | `originator_client_id` |
| `TransferPlatformPersonCreateRequest` | `emailAddress` | `email_address` |
| `TransferPlatformPersonCreateRequest` | `phoneNumber` | `phone_number` |
| `TransferPlatformPersonCreateRequest` | `idNumber` | `id_number` |
| `TransferPlatformPersonCreateRequest` | `dateOfBirth` | `date_of_birth` |
| `TransferPlatformPersonCreateRequest` | `relationshipToOriginator` | `relationship_to_originator` |
| `TransferPlatformPersonCreateRequest` | `ownershipPercentage` | `ownership_percentage` |
| `TransferPlatformPersonCreateResponse` | `requestId` | `request_id` |
| `TransferPlatformPersonCreateResponse` | `personId` | `person_id` |
| `TransferPlatformPersonName` | `givenName` | `given_name` |
| `TransferPlatformPersonName` | `familyName` | `family_name` |
| `TransferPlatformRequirement` | `requirementType` | `requirement_type` |
| `TransferPlatformRequirement` | `personId` | `person_id` |
| `TransferPlatformRequirementSubmitRequest` | `clientId` | `client_id` |
| `TransferPlatformRequirementSubmitRequest` | `originatorClientId` | `originator_client_id` |
| `TransferPlatformRequirementSubmitRequest` | `requirementSubmissions` | `requirement_submissions` |
| `TransferPlatformRequirementSubmitResponse` | `requestId` | `request_id` |
| `TransferQuestionnaireCreateRequest` | `clientId` | `client_id` |
| `TransferQuestionnaireCreateRequest` | `originatorClientId` | `originator_client_id` |
| `TransferQuestionnaireCreateRequest` | `redirectUri` | `redirect_uri` |
| `TransferQuestionnaireCreateResponse` | `onboardingUrl` | `onboarding_url` |
| `TransferQuestionnaireCreateResponse` | `requestId` | `request_id` |
| `TransferRecurringCancelRequest` | `clientId` | `client_id` |
| `TransferRecurringCancelRequest` | `recurringTransferId` | `recurring_transfer_id` |
| `TransferRecurringCancelResponse` | `requestId` | `request_id` |
| `TransferRecurringCreateRequest` | `clientId` | `client_id` |
| `TransferRecurringCreateRequest` | `accessToken` | `access_token` |
| `TransferRecurringCreateRequest` | `idempotencyKey` | `idempotency_key` |
| `TransferRecurringCreateRequest` | `accountId` | `account_id` |
| `TransferRecurringCreateRequest` | `fundingAccountId` | `funding_account_id` |
| `TransferRecurringCreateRequest` | `achClass` | `ach_class` |
| `TransferRecurringCreateRequest` | `userPresent` | `user_present` |
| `TransferRecurringCreateRequest` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferRecurringCreateRequest` | `testClockId` | `test_clock_id` |
| `TransferRecurringCreateResponse` | `recurringTransfer` | `recurring_transfer` |
| `TransferRecurringCreateResponse` | `decisionRationale` | `decision_rationale` |
| `TransferRecurringCreateResponse` | `requestId` | `request_id` |
| `TransferRecurringGetRequest` | `clientId` | `client_id` |
| `TransferRecurringGetRequest` | `recurringTransferId` | `recurring_transfer_id` |
| `TransferRecurringGetResponse` | `recurringTransfer` | `recurring_transfer` |
| `TransferRecurringGetResponse` | `requestId` | `request_id` |
| `TransferRecurringListRequest` | `clientId` | `client_id` |
| `TransferRecurringListRequest` | `startTime` | `start_time` |
| `TransferRecurringListRequest` | `endTime` | `end_time` |
| `TransferRecurringListRequest` | `fundingAccountId` | `funding_account_id` |
| `TransferRecurringListResponse` | `recurringTransfers` | `recurring_transfers` |
| `TransferRecurringListResponse` | `requestId` | `request_id` |
| `TransferRecurringSchedule` | `intervalUnit` | `interval_unit` |
| `TransferRecurringSchedule` | `intervalCount` | `interval_count` |
| `TransferRecurringSchedule` | `intervalExecutionDay` | `interval_execution_day` |
| `TransferRecurringSchedule` | `startDate` | `start_date` |
| `TransferRecurringSchedule` | `endDate` | `end_date` |
| `TransferRefund` | `transferId` | `transfer_id` |
| `TransferRefund` | `failureReason` | `failure_reason` |
| `TransferRefund` | `ledgerId` | `ledger_id` |
| `TransferRefund` | `networkTraceId` | `network_trace_id` |
| `TransferRefundCancelRequest` | `clientId` | `client_id` |
| `TransferRefundCancelRequest` | `refundId` | `refund_id` |
| `TransferRefundCancelResponse` | `requestId` | `request_id` |
| `TransferRefundCreateRequest` | `clientId` | `client_id` |
| `TransferRefundCreateRequest` | `transferId` | `transfer_id` |
| `TransferRefundCreateRequest` | `idempotencyKey` | `idempotency_key` |
| `TransferRefundCreateResponse` | `requestId` | `request_id` |
| `TransferRefundFailure` | `failureCode` | `failure_code` |
| `TransferRefundFailure` | `achReturnCode` | `ach_return_code` |
| `TransferRefundGetRequest` | `clientId` | `client_id` |
| `TransferRefundGetRequest` | `refundId` | `refund_id` |
| `TransferRefundGetResponse` | `requestId` | `request_id` |
| `TransferRepayment` | `repaymentId` | `repayment_id` |
| `TransferRepayment` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferRepaymentListRequest` | `clientId` | `client_id` |
| `TransferRepaymentListRequest` | `startDate` | `start_date` |
| `TransferRepaymentListRequest` | `endDate` | `end_date` |
| `TransferRepaymentListResponse` | `requestId` | `request_id` |
| `TransferRepaymentReturn` | `transferId` | `transfer_id` |
| `TransferRepaymentReturn` | `eventId` | `event_id` |
| `TransferRepaymentReturn` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferRepaymentReturnListRequest` | `clientId` | `client_id` |
| `TransferRepaymentReturnListRequest` | `repaymentId` | `repayment_id` |
| `TransferRepaymentReturnListResponse` | `repaymentReturns` | `repayment_returns` |
| `TransferRepaymentReturnListResponse` | `requestId` | `request_id` |
| `TransferReturnRecoverRequest` | `clientId` | `client_id` |
| `TransferReturnRecoverRequest` | `transferId` | `transfer_id` |
| `TransferReturnRecoverRequest` | `idempotencyKey` | `idempotency_key` |
| `TransferReturnRecoverResponse` | `requestId` | `request_id` |
| `TransferSweep` | `fundingAccountId` | `funding_account_id` |
| `TransferSweep` | `ledgerId` | `ledger_id` |
| `TransferSweep` | `isoCurrencyCode` | `iso_currency_code` |
| `TransferSweep` | `expectedFundsAvailableDate` | `expected_funds_available_date` |
| `TransferSweep` | `networkTraceId` | `network_trace_id` |
| `TransferSweep` | `failureReason` | `failure_reason` |
| `TransferSweepGetRequest` | `clientId` | `client_id` |
| `TransferSweepGetRequest` | `sweepId` | `sweep_id` |
| `TransferSweepGetResponse` | `requestId` | `request_id` |
| `TransferSweepListRequest` | `clientId` | `client_id` |
| `TransferSweepListRequest` | `startDate` | `start_date` |
| `TransferSweepListRequest` | `endDate` | `end_date` |
| `TransferSweepListRequest` | `originatorClientId` | `originator_client_id` |
| `TransferSweepListRequest` | `fundingAccountId` | `funding_account_id` |
| `TransferSweepListRequest` | `transferId` | `transfer_id` |
| `TransferSweepListResponse` | `requestId` | `request_id` |
| `TransferTestClock` | `testClockId` | `test_clock_id` |
| `TransferTestClock` | `virtualTime` | `virtual_time` |
| `TransferUserAddressInRequest` | `postalCode` | `postal_code` |
| `TransferUserAddressInResponse` | `postalCode` | `postal_code` |
| `TransferUserInRequest` | `legalName` | `legal_name` |
| `TransferUserInRequest` | `phoneNumber` | `phone_number` |
| `TransferUserInRequest` | `emailAddress` | `email_address` |
| `TransferUserInRequestDeprecated` | `legalName` | `legal_name` |
| `TransferUserInRequestDeprecated` | `phoneNumber` | `phone_number` |
| `TransferUserInRequestDeprecated` | `emailAddress` | `email_address` |
| `TransferUserInResponse` | `legalName` | `legal_name` |
| `TransferUserInResponse` | `phoneNumber` | `phone_number` |
| `TransferUserInResponse` | `emailAddress` | `email_address` |
| `TransferWireDetails` | `messageToBeneficiary` | `message_to_beneficiary` |
| `TransferWireDetails` | `wireReturnFee` | `wire_return_fee` |
| `TrustIndexSubscores` | `deviceAndConnection` | `device_and_connection` |
| `TrustIndexSubscores` | `bankAccountInsights` | `bank_account_insights` |
| `TrustedDeviceData` | `trustLevel` | `trust_level` |
| `TrustedDeviceData` | `deviceId` | `device_id` |
| `UpdateEntityScreeningRequestSearchTerms` | `entityWatchlistProgramId` | `entity_watchlist_program_id` |
| `UpdateEntityScreeningRequestSearchTerms` | `legalName` | `legal_name` |
| `UpdateEntityScreeningRequestSearchTerms` | `documentNumber` | `document_number` |
| `UpdateEntityScreeningRequestSearchTerms` | `emailAddress` | `email_address` |
| `UpdateEntityScreeningRequestSearchTerms` | `phoneNumber` | `phone_number` |
| `UpdateIndividualScreeningRequestSearchTerms` | `watchlistProgramId` | `watchlist_program_id` |
| `UpdateIndividualScreeningRequestSearchTerms` | `legalName` | `legal_name` |
| `UpdateIndividualScreeningRequestSearchTerms` | `dateOfBirth` | `date_of_birth` |
| `UpdateIndividualScreeningRequestSearchTerms` | `documentNumber` | `document_number` |
| `UserAccountIdentity` | `phoneNumber` | `phone_number` |
| `UserAccountIdentity` | `dateOfBirth` | `date_of_birth` |
| `UserAccountIdentity` | `ssnLast4` | `ssn_last_4` |
| `UserAccountIdentityAddress` | `postalCode` | `postal_code` |
| `UserAccountIdentityEditCounts` | `editsCurrent` | `edits_current` |
| `UserAccountIdentityEditCounts` | `edits1D` | `edits_1d` |
| `UserAccountIdentityEditCounts` | `edits30D` | `edits_30d` |
| `UserAccountIdentityEditCounts` | `edits365D` | `edits_365d` |
| `UserAccountIdentityEditCounts` | `editsAllTime` | `edits_all_time` |
| `UserAccountIdentityEditHistory` | `dateOfBirth` | `date_of_birth` |
| `UserAccountIdentityEditHistory` | `officialDocument` | `official_document` |
| `UserAccountIdentityName` | `firstName` | `first_name` |
| `UserAccountIdentityName` | `lastName` | `last_name` |
| `UserAccountItem` | `itemId` | `item_id` |
| `UserAccountItem` | `accessToken` | `access_token` |
| `UserAccountRevokedWebhook` | `webhookType` | `webhook_type` |
| `UserAccountRevokedWebhook` | `webhookCode` | `webhook_code` |
| `UserAccountRevokedWebhook` | `itemId` | `item_id` |
| `UserAccountRevokedWebhook` | `userId` | `user_id` |
| `UserAccountRevokedWebhook` | `accountId` | `account_id` |
| `UserAccountSessionEventSendRequest` | `clientId` | `client_id` |
| `UserAccountSessionEventSendRequest` | `cohortId` | `cohort_id` |
| `UserAccountSessionEventSendRequest` | `linkSessionId` | `link_session_id` |
| `UserAccountSessionEventSendResponse` | `requestId` | `request_id` |
| `UserAccountSessionGetRequest` | `clientId` | `client_id` |
| `UserAccountSessionGetRequest` | `publicToken` | `public_token` |
| `UserAccountSessionGetResponse` | `identityEditHistory` | `identity_edit_history` |
| `UserAccountSessionGetResponse` | `requestId` | `request_id` |
| `UserAddress` | `postalCode` | `postal_code` |
| `UserCreateRequest` | `clientId` | `client_id` |
| `UserCreateRequest` | `clientUserId` | `client_user_id` |
| `UserCreateRequest` | `endCustomer` | `end_customer` |
| `UserCreateRequest` | `consumerReportUserIdentity` | `consumer_report_user_identity` |
| `UserCreateRequest` | `withUpgradedUser` | `with_upgraded_user` |
| `UserCreateResponse` | `userToken` | `user_token` |
| `UserCreateResponse` | `userId` | `user_id` |
| `UserCreateResponse` | `requestId` | `request_id` |
| `UserCustomPassword` | `overrideAccounts` | `override_accounts` |
| `UserCustomPassword` | `forceError` | `force_error` |
| `UserDataOverview` | `transactionCount` | `transaction_count` |
| `UserDataOverview` | `oldestTransactionDate` | `oldest_transaction_date` |
| `UserDataOverview` | `newestTransactionDate` | `newest_transaction_date` |
| `UserDataOverview` | `daysAvailable` | `days_available` |
| `UserDataOverview` | `totalOutflows` | `total_outflows` |
| `UserDataOverview` | `totalInflows` | `total_inflows` |
| `UserFinancialDataRefreshRequest` | `userId` | `user_id` |
| `UserFinancialDataRefreshRequest` | `clientId` | `client_id` |
| `UserFinancialDataRefreshResponse` | `requestId` | `request_id` |
| `UserFinancialDataRefreshResponse` | `userId` | `user_id` |
| `UserGetRequest` | `clientId` | `client_id` |
| `UserGetRequest` | `userId` | `user_id` |
| `UserGetResponse` | `requestId` | `request_id` |
| `UserGetResponse` | `userId` | `user_id` |
| `UserGetResponse` | `clientUserId` | `client_user_id` |
| `UserGetResponse` | `createdAt` | `created_at` |
| `UserGetResponse` | `updatedAt` | `updated_at` |
| `UserIdentityRemoveRequest` | `clientId` | `client_id` |
| `UserIdentityRemoveRequest` | `userId` | `user_id` |
| `UserIdentityRemoveResponse` | `requestId` | `request_id` |
| `UserItemsAssociateRequest` | `clientId` | `client_id` |
| `UserItemsAssociateRequest` | `userId` | `user_id` |
| `UserItemsAssociateRequest` | `itemIds` | `item_ids` |
| `UserItemsAssociateResponse` | `requestId` | `request_id` |
| `UserItemsGetRequest` | `clientId` | `client_id` |
| `UserItemsGetRequest` | `userToken` | `user_token` |
| `UserItemsGetRequest` | `userId` | `user_id` |
| `UserItemsGetResponse` | `requestId` | `request_id` |
| `UserItemsRemoveRequest` | `clientId` | `client_id` |
| `UserItemsRemoveRequest` | `userToken` | `user_token` |
| `UserItemsRemoveRequest` | `userId` | `user_id` |
| `UserItemsRemoveRequest` | `itemIds` | `item_ids` |
| `UserItemsRemoveResponse` | `requestId` | `request_id` |
| `UserPermissionRevokedWebhook` | `webhookType` | `webhook_type` |
| `UserPermissionRevokedWebhook` | `webhookCode` | `webhook_code` |
| `UserPermissionRevokedWebhook` | `itemId` | `item_id` |
| `UserPermissionRevokedWebhook` | `userId` | `user_id` |
| `UserProductsTerminateRequest` | `clientId` | `client_id` |
| `UserProductsTerminateRequest` | `userId` | `user_id` |
| `UserProductsTerminateRequest` | `reasonCode` | `reason_code` |
| `UserProductsTerminateRequest` | `reasonNote` | `reason_note` |
| `UserProductsTerminateResponse` | `requestId` | `request_id` |
| `UserRemoveRequest` | `clientId` | `client_id` |
| `UserRemoveRequest` | `userId` | `user_id` |
| `UserRemoveRequest` | `userToken` | `user_token` |
| `UserRemoveResponse` | `requestId` | `request_id` |
| `UserThirdPartyTokenCreateRequest` | `clientId` | `client_id` |
| `UserThirdPartyTokenCreateRequest` | `userToken` | `user_token` |
| `UserThirdPartyTokenCreateRequest` | `thirdPartyClientId` | `third_party_client_id` |
| `UserThirdPartyTokenCreateRequest` | `expirationTime` | `expiration_time` |
| `UserThirdPartyTokenCreateRequest` | `userId` | `user_id` |
| `UserThirdPartyTokenCreateResponse` | `requestId` | `request_id` |
| `UserThirdPartyTokenCreateResponse` | `thirdPartyUserToken` | `third_party_user_token` |
| `UserThirdPartyTokenRemoveRequest` | `clientId` | `client_id` |
| `UserThirdPartyTokenRemoveRequest` | `thirdPartyUserToken` | `third_party_user_token` |
| `UserThirdPartyTokenRemoveResponse` | `requestId` | `request_id` |
| `UserTransactionsRefreshRequest` | `userId` | `user_id` |
| `UserTransactionsRefreshRequest` | `clientId` | `client_id` |
| `UserTransactionsRefreshResponse` | `requestId` | `request_id` |
| `UserTransactionsRefreshResponse` | `userId` | `user_id` |
| `UserUpdateRequest` | `clientId` | `client_id` |
| `UserUpdateRequest` | `userId` | `user_id` |
| `UserUpdateRequest` | `userToken` | `user_token` |
| `UserUpdateRequest` | `consumerReportUserIdentity` | `consumer_report_user_identity` |
| `UserUpdateResponse` | `requestId` | `request_id` |
| `ValidationSource` | `validationSourceName` | `ValidationSourceName` |
| `ValidationSource` | `validationSourceReferenceIdentifier` | `ValidationSourceReferenceIdentifier` |
| `ValidationSources` | `validationSource` | `VALIDATION_SOURCE` |
| `VerificationExpiredWebhook` | `webhookType` | `webhook_type` |
| `VerificationExpiredWebhook` | `webhookCode` | `webhook_code` |
| `VerificationExpiredWebhook` | `itemId` | `item_id` |
| `VerificationExpiredWebhook` | `accountId` | `account_id` |
| `VerificationInsights` | `nameMatchScore` | `name_match_score` |
| `VerificationInsights` | `networkStatus` | `network_status` |
| `VerificationInsights` | `previousReturns` | `previous_returns` |
| `VerificationInsights` | `accountNumberFormat` | `account_number_format` |
| `VerificationInsightsNetworkStatus` | `hasNumbersMatch` | `has_numbers_match` |
| `VerificationInsightsNetworkStatus` | `isNumbersMatchVerified` | `is_numbers_match_verified` |
| `VerificationOfAsset` | `reportingInformation` | `REPORTING_INFORMATION` |
| `VerificationOfAsset` | `serviceProductFulfillment` | `SERVICE_PRODUCT_FULFILLMENT` |
| `VerificationOfAsset` | `verificationOfAssetResponse` | `VERIFICATION_OF_ASSET_RESPONSE` |
| `VerificationOfAssetResponse` | `assets` | `ASSETS` |
| `W2` | `taxYear` | `tax_year` |
| `W2` | `employerIdNumber` | `employer_id_number` |
| `W2` | `wagesTipsOtherComp` | `wages_tips_other_comp` |
| `W2` | `federalIncomeTaxWithheld` | `federal_income_tax_withheld` |
| `W2` | `socialSecurityWages` | `social_security_wages` |
| `W2` | `socialSecurityTaxWithheld` | `social_security_tax_withheld` |
| `W2` | `medicareWagesAndTips` | `medicare_wages_and_tips` |
| `W2` | `medicareTaxWithheld` | `medicare_tax_withheld` |
| `W2` | `socialSecurityTips` | `social_security_tips` |
| `W2` | `allocatedTips` | `allocated_tips` |
| `W2` | `box9` | `box_9` |
| `W2` | `dependentCareBenefits` | `dependent_care_benefits` |
| `W2` | `nonqualifiedPlans` | `nonqualified_plans` |
| `W2` | `box12` | `box_12` |
| `W2` | `statutoryEmployee` | `statutory_employee` |
| `W2` | `retirementPlan` | `retirement_plan` |
| `W2` | `thirdPartySickPay` | `third_party_sick_pay` |
| `W2` | `stateAndLocalWages` | `state_and_local_wages` |
| `W2Override` | `taxYear` | `tax_year` |
| `W2Override` | `employerIdNumber` | `employer_id_number` |
| `W2Override` | `wagesTipsOtherComp` | `wages_tips_other_comp` |
| `W2Override` | `federalIncomeTaxWithheld` | `federal_income_tax_withheld` |
| `W2Override` | `socialSecurityWages` | `social_security_wages` |
| `W2Override` | `socialSecurityTaxWithheld` | `social_security_tax_withheld` |
| `W2Override` | `medicareWagesAndTips` | `medicare_wages_and_tips` |
| `W2Override` | `medicareTaxWithheld` | `medicare_tax_withheld` |
| `W2Override` | `socialSecurityTips` | `social_security_tips` |
| `W2Override` | `allocatedTips` | `allocated_tips` |
| `W2Override` | `box9` | `box_9` |
| `W2Override` | `dependentCareBenefits` | `dependent_care_benefits` |
| `W2Override` | `nonqualifiedPlans` | `nonqualified_plans` |
| `W2Override` | `box12` | `box_12` |
| `W2Override` | `statutoryEmployee` | `statutory_employee` |
| `W2Override` | `retirementPlan` | `retirement_plan` |
| `W2Override` | `thirdPartySickPay` | `third_party_sick_pay` |
| `W2Override` | `stateAndLocalWages` | `state_and_local_wages` |
| `W2StateAndLocalWages` | `employerStateIdNumber` | `employer_state_id_number` |
| `W2StateAndLocalWages` | `stateWagesTips` | `state_wages_tips` |
| `W2StateAndLocalWages` | `stateIncomeTax` | `state_income_tax` |
| `W2StateAndLocalWages` | `localWagesTips` | `local_wages_tips` |
| `W2StateAndLocalWages` | `localIncomeTax` | `local_income_tax` |
| `W2StateAndLocalWages` | `localityName` | `locality_name` |
| `W2StateAndLocalWagesOverride` | `employerStateIdNumber` | `employer_state_id_number` |
| `W2StateAndLocalWagesOverride` | `stateWagesTips` | `state_wages_tips` |
| `W2StateAndLocalWagesOverride` | `stateIncomeTax` | `state_income_tax` |
| `W2StateAndLocalWagesOverride` | `localWagesTips` | `local_wages_tips` |
| `W2StateAndLocalWagesOverride` | `localIncomeTax` | `local_income_tax` |
| `W2StateAndLocalWagesOverride` | `localityName` | `locality_name` |
| `Wallet` | `walletId` | `wallet_id` |
| `Wallet` | `recipientId` | `recipient_id` |
| `WalletBalance` | `isoCurrencyCode` | `iso_currency_code` |
| `WalletCreateRequest` | `clientId` | `client_id` |
| `WalletCreateRequest` | `isoCurrencyCode` | `iso_currency_code` |
| `WalletCreateResponse` | `walletId` | `wallet_id` |
| `WalletCreateResponse` | `recipientId` | `recipient_id` |
| `WalletCreateResponse` | `requestId` | `request_id` |
| `WalletGetRequest` | `clientId` | `client_id` |
| `WalletGetRequest` | `walletId` | `wallet_id` |
| `WalletGetResponse` | `walletId` | `wallet_id` |
| `WalletGetResponse` | `recipientId` | `recipient_id` |
| `WalletGetResponse` | `requestId` | `request_id` |
| `WalletListRequest` | `clientId` | `client_id` |
| `WalletListRequest` | `isoCurrencyCode` | `iso_currency_code` |
| `WalletListResponse` | `nextCursor` | `next_cursor` |
| `WalletListResponse` | `requestId` | `request_id` |
| `WalletTransaction` | `transactionId` | `transaction_id` |
| `WalletTransaction` | `walletId` | `wallet_id` |
| `WalletTransaction` | `createdAt` | `created_at` |
| `WalletTransaction` | `lastStatusUpdate` | `last_status_update` |
| `WalletTransaction` | `payeeVerificationStatus` | `payee_verification_status` |
| `WalletTransaction` | `paymentId` | `payment_id` |
| `WalletTransaction` | `failureReason` | `failure_reason` |
| `WalletTransaction` | `relatedTransactions` | `related_transactions` |
| `WalletTransactionAmount` | `isoCurrencyCode` | `iso_currency_code` |
| `WalletTransactionCounterparty` | `dateOfBirth` | `date_of_birth` |
| `WalletTransactionCounterpartyBacs` | `sortCode` | `sort_code` |
| `WalletTransactionExecuteRequest` | `clientId` | `client_id` |
| `WalletTransactionExecuteRequest` | `idempotencyKey` | `idempotency_key` |
| `WalletTransactionExecuteRequest` | `walletId` | `wallet_id` |
| `WalletTransactionExecuteRequest` | `originatingFundSource` | `originating_fund_source` |
| `WalletTransactionExecuteResponse` | `transactionId` | `transaction_id` |
| `WalletTransactionExecuteResponse` | `requestId` | `request_id` |
| `WalletTransactionGetRequest` | `clientId` | `client_id` |
| `WalletTransactionGetRequest` | `transactionId` | `transaction_id` |
| `WalletTransactionGetResponse` | `transactionId` | `transaction_id` |
| `WalletTransactionGetResponse` | `walletId` | `wallet_id` |
| `WalletTransactionGetResponse` | `createdAt` | `created_at` |
| `WalletTransactionGetResponse` | `lastStatusUpdate` | `last_status_update` |
| `WalletTransactionGetResponse` | `payeeVerificationStatus` | `payee_verification_status` |
| `WalletTransactionGetResponse` | `paymentId` | `payment_id` |
| `WalletTransactionGetResponse` | `failureReason` | `failure_reason` |
| `WalletTransactionGetResponse` | `relatedTransactions` | `related_transactions` |
| `WalletTransactionGetResponse` | `requestId` | `request_id` |
| `WalletTransactionListRequest` | `clientId` | `client_id` |
| `WalletTransactionListRequest` | `walletId` | `wallet_id` |
| `WalletTransactionListRequestOptions` | `startTime` | `start_time` |
| `WalletTransactionListRequestOptions` | `endTime` | `end_time` |
| `WalletTransactionListResponse` | `nextCursor` | `next_cursor` |
| `WalletTransactionListResponse` | `requestId` | `request_id` |
| `WalletTransactionStatusUpdateWebhook` | `webhookType` | `webhook_type` |
| `WalletTransactionStatusUpdateWebhook` | `webhookCode` | `webhook_code` |
| `WalletTransactionStatusUpdateWebhook` | `transactionId` | `transaction_id` |
| `WalletTransactionStatusUpdateWebhook` | `paymentId` | `payment_id` |
| `WalletTransactionStatusUpdateWebhook` | `walletId` | `wallet_id` |
| `WalletTransactionStatusUpdateWebhook` | `newStatus` | `new_status` |
| `WalletTransactionStatusUpdateWebhook` | `oldStatus` | `old_status` |
| `WalletTransactionStatusUpdateWebhook` | `failureReason` | `failure_reason` |
| `WalletTransactionsListRequest` | `clientId` | `client_id` |
| `WalletTransactionsListRequest` | `walletId` | `wallet_id` |
| `Warning` | `warningType` | `warning_type` |
| `Warning` | `warningCode` | `warning_code` |
| `WatchlistScreeningAuditTrail` | `dashboardUserId` | `dashboard_user_id` |
| `WatchlistScreeningEntityCreateRequest` | `searchTerms` | `search_terms` |
| `WatchlistScreeningEntityCreateRequest` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningEntityCreateRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityCreateResponse` | `searchTerms` | `search_terms` |
| `WatchlistScreeningEntityCreateResponse` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningEntityCreateResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningEntityCreateResponse` | `requestId` | `request_id` |
| `WatchlistScreeningEntityGetRequest` | `entityWatchlistScreeningId` | `entity_watchlist_screening_id` |
| `WatchlistScreeningEntityGetRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityGetResponse` | `searchTerms` | `search_terms` |
| `WatchlistScreeningEntityGetResponse` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningEntityGetResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningEntityGetResponse` | `requestId` | `request_id` |
| `WatchlistScreeningEntityHistoryListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityHistoryListRequest` | `entityWatchlistScreeningId` | `entity_watchlist_screening_id` |
| `WatchlistScreeningEntityHistoryListResponse` | `entityWatchlistScreenings` | `entity_watchlist_screenings` |
| `WatchlistScreeningEntityHistoryListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningEntityHistoryListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningEntityHitListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityHitListRequest` | `entityWatchlistScreeningId` | `entity_watchlist_screening_id` |
| `WatchlistScreeningEntityHitListResponse` | `entityWatchlistScreeningHits` | `entity_watchlist_screening_hits` |
| `WatchlistScreeningEntityHitListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningEntityHitListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningEntityListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityListRequest` | `entityWatchlistProgramId` | `entity_watchlist_program_id` |
| `WatchlistScreeningEntityListRequest` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningEntityListResponse` | `entityWatchlistScreenings` | `entity_watchlist_screenings` |
| `WatchlistScreeningEntityListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningEntityListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningEntityProgramGetRequest` | `entityWatchlistProgramId` | `entity_watchlist_program_id` |
| `WatchlistScreeningEntityProgramGetRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityProgramGetResponse` | `createdAt` | `created_at` |
| `WatchlistScreeningEntityProgramGetResponse` | `isRescanningEnabled` | `is_rescanning_enabled` |
| `WatchlistScreeningEntityProgramGetResponse` | `listsEnabled` | `lists_enabled` |
| `WatchlistScreeningEntityProgramGetResponse` | `nameSensitivity` | `name_sensitivity` |
| `WatchlistScreeningEntityProgramGetResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningEntityProgramGetResponse` | `isArchived` | `is_archived` |
| `WatchlistScreeningEntityProgramGetResponse` | `requestId` | `request_id` |
| `WatchlistScreeningEntityProgramListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityProgramListResponse` | `entityWatchlistPrograms` | `entity_watchlist_programs` |
| `WatchlistScreeningEntityProgramListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningEntityProgramListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningEntityReviewCreateRequest` | `confirmedHits` | `confirmed_hits` |
| `WatchlistScreeningEntityReviewCreateRequest` | `dismissedHits` | `dismissed_hits` |
| `WatchlistScreeningEntityReviewCreateRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityReviewCreateRequest` | `entityWatchlistScreeningId` | `entity_watchlist_screening_id` |
| `WatchlistScreeningEntityReviewCreateResponse` | `confirmedHits` | `confirmed_hits` |
| `WatchlistScreeningEntityReviewCreateResponse` | `dismissedHits` | `dismissed_hits` |
| `WatchlistScreeningEntityReviewCreateResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningEntityReviewCreateResponse` | `requestId` | `request_id` |
| `WatchlistScreeningEntityReviewListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityReviewListRequest` | `entityWatchlistScreeningId` | `entity_watchlist_screening_id` |
| `WatchlistScreeningEntityReviewListResponse` | `entityWatchlistScreeningReviews` | `entity_watchlist_screening_reviews` |
| `WatchlistScreeningEntityReviewListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningEntityReviewListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningEntityUpdateRequest` | `entityWatchlistScreeningId` | `entity_watchlist_screening_id` |
| `WatchlistScreeningEntityUpdateRequest` | `searchTerms` | `search_terms` |
| `WatchlistScreeningEntityUpdateRequest` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningEntityUpdateRequest` | `clientId` | `client_id` |
| `WatchlistScreeningEntityUpdateRequest` | `resetFields` | `reset_fields` |
| `WatchlistScreeningEntityUpdateResponse` | `searchTerms` | `search_terms` |
| `WatchlistScreeningEntityUpdateResponse` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningEntityUpdateResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningEntityUpdateResponse` | `requestId` | `request_id` |
| `WatchlistScreeningHit` | `reviewStatus` | `review_status` |
| `WatchlistScreeningHit` | `firstActive` | `first_active` |
| `WatchlistScreeningHit` | `inactiveSince` | `inactive_since` |
| `WatchlistScreeningHit` | `historicalSince` | `historical_since` |
| `WatchlistScreeningHit` | `listCode` | `list_code` |
| `WatchlistScreeningHit` | `plaidUid` | `plaid_uid` |
| `WatchlistScreeningHit` | `sourceUid` | `source_uid` |
| `WatchlistScreeningHit` | `subPrograms` | `sub_programs` |
| `WatchlistScreeningIndividual` | `searchTerms` | `search_terms` |
| `WatchlistScreeningIndividual` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningIndividual` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningIndividualCreateRequest` | `searchTerms` | `search_terms` |
| `WatchlistScreeningIndividualCreateRequest` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningIndividualCreateRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualCreateResponse` | `searchTerms` | `search_terms` |
| `WatchlistScreeningIndividualCreateResponse` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningIndividualCreateResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningIndividualCreateResponse` | `requestId` | `request_id` |
| `WatchlistScreeningIndividualGetRequest` | `watchlistScreeningId` | `watchlist_screening_id` |
| `WatchlistScreeningIndividualGetRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualGetResponse` | `searchTerms` | `search_terms` |
| `WatchlistScreeningIndividualGetResponse` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningIndividualGetResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningIndividualGetResponse` | `requestId` | `request_id` |
| `WatchlistScreeningIndividualHistoryListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualHistoryListRequest` | `watchlistScreeningId` | `watchlist_screening_id` |
| `WatchlistScreeningIndividualHistoryListResponse` | `watchlistScreenings` | `watchlist_screenings` |
| `WatchlistScreeningIndividualHistoryListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningIndividualHistoryListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningIndividualHitListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualHitListRequest` | `watchlistScreeningId` | `watchlist_screening_id` |
| `WatchlistScreeningIndividualHitListResponse` | `watchlistScreeningHits` | `watchlist_screening_hits` |
| `WatchlistScreeningIndividualHitListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningIndividualHitListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningIndividualListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualListRequest` | `watchlistProgramId` | `watchlist_program_id` |
| `WatchlistScreeningIndividualListRequest` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningIndividualListResponse` | `watchlistScreenings` | `watchlist_screenings` |
| `WatchlistScreeningIndividualListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningIndividualListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningIndividualProgramGetRequest` | `watchlistProgramId` | `watchlist_program_id` |
| `WatchlistScreeningIndividualProgramGetRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualProgramGetResponse` | `createdAt` | `created_at` |
| `WatchlistScreeningIndividualProgramGetResponse` | `isRescanningEnabled` | `is_rescanning_enabled` |
| `WatchlistScreeningIndividualProgramGetResponse` | `listsEnabled` | `lists_enabled` |
| `WatchlistScreeningIndividualProgramGetResponse` | `nameSensitivity` | `name_sensitivity` |
| `WatchlistScreeningIndividualProgramGetResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningIndividualProgramGetResponse` | `isArchived` | `is_archived` |
| `WatchlistScreeningIndividualProgramGetResponse` | `requestId` | `request_id` |
| `WatchlistScreeningIndividualProgramListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualProgramListResponse` | `watchlistPrograms` | `watchlist_programs` |
| `WatchlistScreeningIndividualProgramListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningIndividualProgramListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningIndividualReviewCreateRequest` | `confirmedHits` | `confirmed_hits` |
| `WatchlistScreeningIndividualReviewCreateRequest` | `dismissedHits` | `dismissed_hits` |
| `WatchlistScreeningIndividualReviewCreateRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualReviewCreateRequest` | `watchlistScreeningId` | `watchlist_screening_id` |
| `WatchlistScreeningIndividualReviewCreateResponse` | `confirmedHits` | `confirmed_hits` |
| `WatchlistScreeningIndividualReviewCreateResponse` | `dismissedHits` | `dismissed_hits` |
| `WatchlistScreeningIndividualReviewCreateResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningIndividualReviewCreateResponse` | `requestId` | `request_id` |
| `WatchlistScreeningIndividualReviewListRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualReviewListRequest` | `watchlistScreeningId` | `watchlist_screening_id` |
| `WatchlistScreeningIndividualReviewListResponse` | `watchlistScreeningReviews` | `watchlist_screening_reviews` |
| `WatchlistScreeningIndividualReviewListResponse` | `nextCursor` | `next_cursor` |
| `WatchlistScreeningIndividualReviewListResponse` | `requestId` | `request_id` |
| `WatchlistScreeningIndividualUpdateRequest` | `watchlistScreeningId` | `watchlist_screening_id` |
| `WatchlistScreeningIndividualUpdateRequest` | `searchTerms` | `search_terms` |
| `WatchlistScreeningIndividualUpdateRequest` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningIndividualUpdateRequest` | `clientId` | `client_id` |
| `WatchlistScreeningIndividualUpdateRequest` | `resetFields` | `reset_fields` |
| `WatchlistScreeningIndividualUpdateResponse` | `searchTerms` | `search_terms` |
| `WatchlistScreeningIndividualUpdateResponse` | `clientUserId` | `client_user_id` |
| `WatchlistScreeningIndividualUpdateResponse` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningIndividualUpdateResponse` | `requestId` | `request_id` |
| `WatchlistScreeningRequestSearchTerms` | `watchlistProgramId` | `watchlist_program_id` |
| `WatchlistScreeningRequestSearchTerms` | `legalName` | `legal_name` |
| `WatchlistScreeningRequestSearchTerms` | `dateOfBirth` | `date_of_birth` |
| `WatchlistScreeningRequestSearchTerms` | `documentNumber` | `document_number` |
| `WatchlistScreeningReview` | `confirmedHits` | `confirmed_hits` |
| `WatchlistScreeningReview` | `dismissedHits` | `dismissed_hits` |
| `WatchlistScreeningReview` | `auditTrail` | `audit_trail` |
| `WatchlistScreeningSearchTerms` | `watchlistProgramId` | `watchlist_program_id` |
| `WatchlistScreeningSearchTerms` | `legalName` | `legal_name` |
| `WatchlistScreeningSearchTerms` | `dateOfBirth` | `date_of_birth` |
| `WatchlistScreeningSearchTerms` | `documentNumber` | `document_number` |
| `WebhookUpdateAcknowledgedWebhook` | `webhookType` | `webhook_type` |
| `WebhookUpdateAcknowledgedWebhook` | `webhookCode` | `webhook_code` |
| `WebhookUpdateAcknowledgedWebhook` | `itemId` | `item_id` |
| `WebhookUpdateAcknowledgedWebhook` | `newWebhookUrl` | `new_webhook_url` |
| `WebhookVerificationKeyGetRequest` | `clientId` | `client_id` |
| `WebhookVerificationKeyGetRequest` | `keyId` | `key_id` |
| `WebhookVerificationKeyGetResponse` | `requestId` | `request_id` |
| `YtdGrossIncomeSummaryFieldNumber` | `verificationStatus` | `verification_status` |
| `YtdNetIncomeSummaryFieldNumber` | `verificationStatus` | `verification_status` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **334 of the 335 operations** require a credential and **1** is public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `clientId` | `clientId` | header `PLAID-CLIENT-ID: <key>` |
| `secret` | `secret` | header `PLAID-SECRET: <key>` |
| `plaidVersion` | `plaidVersion` | header `Plaid-Version: <key>` |
| `oauth2` | `oauth2: { clientId, clientSecret, scope? }` | `Authorization: Bearer <access token>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**OAuth2 fetches and caches its own token.** The token request goes through the same client as every other call — same timeout, same `fetch` — sends a form-urlencoded body, and **decodes** the response against a schema rather than casting it. An access token is cached until shortly before it expires; a response carrying no `expires_in` is treated as never expiring (RFC 6749 §5.1); concurrent callers share one in-flight fetch. A refused token endpoint rejects with `AuthError` wrapping the underlying `ResponseError` as `cause`, so it never looks like the business call failing.

| Flow | Token endpoint | Client credentials travel |
| --- | --- | --- |
| `oauth2` | `accessTokenServer` + `/token` | as `Authorization: Basic` |

**Replacing a grant.** Each OAuth2 scheme's token request is a strategy you can substitute — `oauth2Strategy` on `ClientOptions`. A strategy is one method, `getToken(credentials, signal)`, plus `tryRefreshToken(...)` for the refreshable one. Supply it and the built-in token request is not used, while the caching, the expiry buffer and the single-flight behaviour above still apply.

**The auth types you can name.** Every row below is exported from the package root. `Source` is where to read the declaration, never what to import — the credential shapes themselves are already spelled in the scheme table above.

| Type | Source |
| --- | --- |
| `OAuthToken` | `src/core/auth/oauth2-strategies.ts` |
| `OAuth2CredentialPlacement` | `src/core/auth/oauth2-strategies.ts` |

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |
| `ServerEnvironment.Environment2` | `environment2` |

**Server groups.** 2 logical servers; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |
| `accessTokenServer` | `AccessTokenServerServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://production.plaid.com` | — |
| `default` | `environment2` | `https://sandbox.plaid.com` | — |
| `accessTokenServer` | `production` | `https://api.plaid.com/oauth2/apiv2` | — |
| `accessTokenServer` | `environment2` | `https://api.plaid.com/oauth2/apiv2` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("the-plaid-api")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every OAuth2 token request, whose client credentials travel as Basic by default. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

