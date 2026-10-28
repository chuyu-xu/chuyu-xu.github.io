# Perfect Pair

## Turning returns into the right pair

BSRM × ALDO Retail Gen AI Hackathon · Team Code Reapers · 2026

## The challenge

A fit-related return can become a lost sale, an additional handling cost and a missed opportunity to understand the customer. Our team explored how agentic AI could help customers find the right pair while protecting the retailer’s margin.

## The solution

Perfect Pair brings customer context, product reviews, fit signals, return policy and available stock into one decision flow. It compares exchanges, credit and refunds, explains the trade-offs and routes judgment calls to people. A complementary prevention workflow identifies recurring return causes and proposes product-information improvements or quality follow-ups.

## Prototype walkthrough

Early offline prototype using simulated scenarios. Illustrative walkthrough.

### A wider fit in the same size

Maya · Size 8 ankle boots feel tight across the toes.

**No initial approval · inspection required**

**Evidence**: The photo shows no outdoor wear. Reviews point to a narrow toe box; wide-fit feedback and available stock support size 8 wide.

**Decision**: Recommend size 8 wide, with Smart Credit and a refund still available.

**Next step**: Reserve the pair and create the exchange and return label. Release shipment after inspection; try another location if the stock hold fails.

### Replace the damaged pair and assign the cost

Priya · White sneakers arrive scuffed in a crushed box.

**No initial approval · inspection required**

**Evidence**: Scuffing, clean soles and a crushed box align with tracking evidence of transit damage.

**Decision**: Offer a same-size replacement or refund with a free return. Smart Credit is excluded for this damage case.

**Next step**: Reserve the replacement, prepare the return and confirm condition at inspection. Route the item and support a carrier claim with the evidence.

### Pause when the photo and the claim disagree

Jordan · A “never worn” damage claim conflicts with the photo.

**Manager review pending**

**Evidence**: The photo shows outsole wear but no visible damage. Tracking has no exception; prior claims and the amount warrant review.

**Decision**: Pause settlement and send a neutral review message while a person checks the evidence.

**Next step**: The case remains pending until a manager completes the review.

## How the recommendation is made

A recommendation must solve the customer's problem and remain eligible under the policy before retained value becomes useful. The workflow checks reviews and stock, identifies who caused the return, and compares the costs of eligible options.

### Maya: three eligible resolutions

Qualitative comparison of the simulated case

### Exchange · Recommended

Size 8 wide addresses the narrow fit. A suitable pair must be available and reserved.

Customer need

Keep the style, improve the fit

Costs considered

Return label, replacement shipping, handling and another-return risk

Retained value

Continued sale plus possible recovery from the returned pair

### Smart Credit · Alternative

Store credit with suitable alternative picks when eligibility checks pass.

Customer need

Flexibility to choose something else

Costs considered

Return handling, incentive and likelihood of credit being used

Retained value

Expected future purchase value plus recovery of the returned pair

### Refund · Always visible here

Return the payment when the customer prefers a refund.

Customer need

Exit the purchase

Costs considered

Return label and handling; fees depend on the supported cause

Retained value

Recovery of the returned pair; the original sale is reversed

Expected retained value = continuing-sale or credit value + returned-item recovery − logistics, handling, incentives and repeat-return risk.

The recommendation keeps customer choice visible. Priya’s damage case excludes Smart Credit; Jordan’s conflicting evidence pauses settlement.

## From resolution to recovery

01 · Inspect & decide

Check → release or hold

Associates compare the physical condition with the photo and record the grade.

An acceptable check releases the held resolution. Conflicting wear or insufficient evidence pauses settlement for review; managers handle suspected abuse, exceptions and disputed condition.

02 · Return & re-home

Convenient drop-off, suitable destination

Separate where the customer returns the pair from where it can best recover value.

Compare condition, size-level demand, stock and transfer costs. Inspection confirms the route: store resale, transfer, outlet or quarantine for a defect claim.

03 · Learn & improve

Turn return evidence into better guidance

Log store grades against photo assessments. The competition design uses repeated mismatches to adjust photo confidence and focus inspection.

Recurring fit evidence becomes a product-page draft for merchandiser approval; batch defects become quality tickets. Simulated follow-up supports testing the proposed changes.

## Business analysis

Our team used real ALDO data provided for the competition to investigate return patterns and estimate the potential value of converting suitable refunds into exchanges. I contributed to the business-value analysis and solution discussions. The team combined this business case with an agentic return workflow and completed AWS integration for the competition.

### 1. Find the opportunity

Compare transaction, return and store-exchange records across channels. Identify fit-related refunds and multi-size purchasing patterns, then use comments and product evidence to add context to broad reason codes.

### 2. Identify suitable exchanges

Identify customers who still want the product but need a better size, width or replacement. Check fit evidence, eligibility and stock while preserving refund choice and human review.

### 3. Model conversion scenarios

Apply alternative exchange-conversion assumptions to suitable fit returns. Estimate retained margin and refunds avoided, using store exchange patterns as a reference while allowing for differences online.

The conversion, prevention and resale scenarios capture different sources of value and should not simply be added together.

### Four measures, four different questions

Exchange share

Track whether suitable returns become exchanges that resolve the customer’s issue.

Margin retained per return

Assess value after shipping, handling, incentives and item recovery.

Resolution time

Measure time to completion, including approval and inspection waits.

Customer satisfaction

Evaluate whether the outcome meets customer needs. The case uses a feature-based estimate; operational assessment would require customer feedback.

## Project outcome and value

Our team won the Product Fit Award and received a $750 prize.

The team delivered a final pitch, a business case informed by real ALDO data and an AWS-connected competition solution. Scenario analysis estimated the potential business value of converting suitable refunds into exchanges; these projections were not measured operating results.

Perfect Pair connects customer service with inventory, merchandising and financial decisions—helping customers find a suitable resolution while turning return feedback into opportunities for improvement.

About this walkthrough: screenshots show an early offline prototype using simulated scenarios. This illustrative walkthrough is separate from our team’s later AWS-connected competition version, whose environment has since been cleared.

## Technical and evidence notes

This repository preview is a static case-study presentation, not the original product source. `walkthrough.js` changes explanatory scenario panels, supports keyboard tab navigation and enlarges selected screenshots. It makes no network calls to retail systems or models. Original demo JavaScript, its real-data aggregate payload, raw competition slides and private experience records are not included.

### Read the materials by stage

- Final presentation: slides 2–3 support the return-pattern analysis; slides 4, 6 and 13 describe oversight; slide 5 selects the business metrics and value scenarios; slide 11 describes option economics and estimated satisfaction; slide 12 describes drop-off/resale routing; slide 14 describes photo-grade calibration using synthetic pilot history. Slide 7's retail rollout is proposed. AWS integration is separately confirmed by the project participant; individual listed AWS services should not be interpreted as independently verified deployment components.
- Early HTML: `scriptedInvestigate` and captured runs establish Maya, Priya and Jordan; `scoreOptions` establishes option economics; `routeScores`, `bestDropOffStore`, `gradeAtCounter`, `inspectionRule` and `decideCounter` establish recovery and settlement gates. `scriptedPrevention` establishes page-fix drafts, merchandiser approval and quality tickets. Physical-versus-photo grading is logged; automatic photo-confidence recalibration is described in the final presentation and is not presented as a verified early-HTML feature.
- Stage-specific wording: early Jordan is sent to a Supervisor. The final pitch describes store-manager responsibility for suspected abuse and exceptions. Priya is arrival damage, not the final pitch's Elena manufacturing-defect scenario. The case does not merge these customers or imply every branch was executed.
- Phase 1: background for resolution/prevention design, initial scenario methodology and proposed pilot. Its original roles are not evidence of exclusive personal authorship. Confirmed personal contribution remains participation in business-value analysis and solution discussions.

### What is shown and what is estimated

The public comparison is qualitative: no internal ALDO financial inputs, aggregate totals or invented replacement scores. The three customer screenshots were captured from the supplied early offline HTML in scripted mode, using its pre-existing synthetic cases. Those screens contain synthetic customer/order IDs and prices. The final pitch's satisfaction score is a feature-based proxy, not a survey. All conversion-value calculations are potential-value estimates rather than measured business outcomes. The four KPI explanations are analytical rationale, not reports of improvements.

### Run and review

Serve the site root with `python -m http.server 8000`, then open `/projects/perfect-pair/`. No build, credentials or dependencies are required. Select all three scenario tabs; use arrow/Home/End keys; open each screenshot and close with Escape or Close. At narrow widths the scenario and comparison layouts stack. README and CASE-STUDY contain the same case narrative; this section adds implementation and source detail.

### Presentation wording

The website uses compact Evidence → Decision → Next step panels and approval-status labels. Jordan is described as pending manager review to match the competition workflow; the original screenshot still uses the early prototype's Supervisor label. The detailed stage distinction above remains the authority for interpretation. Screenshot enlargement and keyboard tab navigation are unchanged. Financial scenarios describe estimated potential value, not measured operating results.
