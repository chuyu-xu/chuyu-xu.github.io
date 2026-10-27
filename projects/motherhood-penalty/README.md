# Motherhood, Employment & Wages

Research case study · Stata · Cross-country comparison · Evidence interpretation

## Research overview

How do employment and wage differences associated with motherhood vary between Canada and the United States? This research uses 2011–2024 Canadian Labour Force Survey (LFS) and U.S. CPS ASEC microdata to compare those outcomes and explore reported reasons for leaving work in Canada.

The motivation is a measurement problem: looking only at wages among people who work can miss differences in who remains employed. Contrasting two policy environments adds context, but does not identify the causal effect of a particular parental-leave or childcare policy.

The project demonstrates evidence synthesis, comparison across populations, survey-variable harmonization, model interpretation and communication of uncertainty. These analytical practices are relevant to insights and business-analysis work; the research itself concerns labour markets, not consumers, audiences or marketing campaigns.

## My contribution

I independently wrote the complete research paper. My thesis advisor provided key guidance on model selection and throughout the research process. The project should therefore be understood as research conducted with substantive academic guidance, rather than an entirely unguided independent study.

My submitted data description records my use of Stata, downloading and combining survey extracts, and selecting March observations for Canada. The submitted materials document variable recoding, model estimation and regression-table exports. Those materials support the account of the analytical workflow below; they do not establish that every methodological choice was made without guidance.

The AI-use disclosure records ChatGPT assistance with econometric concepts, grammar, academic tone and explanations of results. This assistance is disclosed alongside the advisor’s guidance, without treating either as a separate team achievement attributable solely to me.

The principal deliverables were an English research paper, three regression tables, a Stata code printout, a data description and an AI-use statement. 

## Data and analytical approach

**Build a comparable view.** The materials describe combining 2011–2024 Canadian LFS files and retaining March observations to align survey timing with the U.S. CPS ASEC extract. Child presence, age, education, marital status and employment variables are recoded for comparison. The U.S. workflow constructs hourly earnings from annual wage income and usual weekly hours. Definitions and wage units remain important comparability checks.

**Separate participation from wages.** Country-specific logit models estimate employment associations; average marginal effects express the results as percentage-point differences. OLS models of log hourly wages provide a baseline for wage comparisons among observed workers. The specifications include age, education, marital-status and survey-year controls.

**Examine selection sensitivity.** Heckman models address the concern that wages are observed for a selected set of workers, with youngest-child age included in the selection equation. Their interpretation depends on the exclusion restriction and comparable implementation; using this model does not by itself validate those assumptions.

**Compare contexts and explore explanations.** Pooled models include country and motherhood-by-country terms. A Canadian multinomial-logit extension uses reported exit reasons to distinguish voluntary and involuntary categories. The exit analysis is descriptive, not a test that rules out discrimination or proves personal preference.

**Communicate the evidence.** The Stata workflow stores model estimates and uses esttab to export regression tables. The case study redraws a selected table result and separates reported findings from subsequent interpretation and implementation checks.

## Key findings

**1. Reported employment differences are larger in the Canadian specification.** In the country-specific models, the average marginal effect associated with motherhood is −6.29 percentage points for Canada and −4.98 for the United States. Table 1 reports 405,067 and 555,191 model observations respectively; these counts are not necessarily unique people.

![Reported employment associations](employment-associations.svg)

Figure: redrawn from the paper’s Table 1 (PDF p. 23). Values are conditional associations, not causal effects or relative percentage changes. Uncertainty intervals are not shown. The estimates have not been rerun for this portfolio.

**2. Reported wage differences depend on the model specification.** Table 2 reports Canadian log-wage coefficients of −0.0135 in OLS (p < 0.01) and +0.0244 in Heckman (not statistically significant). The corresponding U.S. coefficients are −0.0554 (p < 0.01) and −0.0084 (significance reporting disputed; see Source consistency checks). These are log-wage coefficients, not exact percentage changes. Differences in sample restrictions and weights limit a direct comparison across specifications.

**3. Exit reasons provide a further descriptive perspective.** The Canadian multinomial model reports a positive motherhood coefficient for voluntary exit (+1.0173, p < 0.01), while the involuntary-exit coefficient is statistically insignificant (−0.0062). These are model coefficients, not probability changes. The category mapping and reference group still require verification against the survey codebook.

## Implications

**What the evidence supports.** Employment and wages describe different dimensions of labour-market outcomes. The reported patterns support examining both, rather than treating one wage comparison as a complete account. Sensitivity across wage specifications also makes selection into the observed sample a necessary part of interpretation.

**What remains a hypothesis.** Family-policy differences offer a possible context for the cross-country patterns, but this design cannot determine which policy caused a difference. The exit results do not establish why every individual left work or demonstrate the absence of employer constraints.

**Relevance to insights and business analysis.** Comparing groups requires consistent definitions, interpretable metrics and attention to who is represented in the data. These are transferable analytical practices for consumer or audience research, marketing analysis and business analysis. Applying them to those settings is a potential transfer of approach, not a commercial application tested in this project. 

## Limitations

- The observational comparison does not track the same women before and after childbirth or eliminate unobserved differences. Country interactions do not isolate policy effects.
- Resident-child indicators are imperfect proxies for motherhood. Employment coding, wage units and currencies, and cross-country category mappings require further verification.
- The printed code does not apply the same female-sample restrictions and survey weights in every model. Single-country Heckman commands use maximum likelihood by default; the pooled command uses two-step estimation. Consequently, model differences cannot be attributed solely to a selection correction.
- The paper and code contain unresolved details, including inconsistent age ranges, a repeated variable definition, and a significance-level discrepancy in the U.S. Heckman result. The source checks below retain the disagreement instead of selecting an authoritative significance level.
- The code is available privately as a PDF printout with local paths. The two data files exceeded the portfolio environment’s transfer-size limit and were not read or rerun. This is a research case study, not a verified reproduction package.
- Statistical insignificance does not establish that a relationship is absent. The results cannot demonstrate no wage disadvantage, no discrimination, or the effectiveness of a policy intervention.

## Sources and materials

The case is based on the original research paper, *Institutional Determinants of the Motherhood Penalty: A Cross-National Microdata Analysis of Canada and the United States, 2011–2024* (Chuyu Xu, Queen’s University, ECON 484, dated December 2025), its code printout, data description and AI-use statement. Results are drawn from Tables 1–3. The advisor’s role and independent writing contribution were clarified by the author on October 27, 2026.

Data-source information: [IPUMS CPS](https://cps.ipums.org/cps/) and [Statistics Canada LFS public-use microdata](https://www150.statcan.gc.ca/n1/pub/71m0001x/71m0001x2021001-eng.htm).

The public-facing scope is the research summary, selected aggregate figures, findings and accurately attributed work. The full paper, code printout, raw microdata and private AI conversations are excluded.

## Files and viewing

- `CASE-STUDY.md`: complete case-study copy.
- `index.html`: detail page for the existing chuyu-xu.github.io website.
- `employment-associations.svg`: chart redrawn from reported Table 1 values.

View the static site from its root using `python -m http.server 8765 --bind 127.0.0.1`, then open `/projects/motherhood-penalty/`. There are no build dependencies for viewing the HTML. This command serves the website only; it does not run the Stata analysis.

This case study is part of the existing chuyu-xu.github.io portfolio. The original paper, code printout and microdata are not included.

## Source consistency checks

Review date: October 27, 2026. These checks compare the supplied printed code with the paper and its image tables; they do not reproduce the estimates. The original source files have not been changed.

| Item | Evidence checked | Status and consequence |
|---|---|---|
| Female sample and weights | Code lines 43–47, 94–97 and 147 specify female filters and probability weights. Heckman lines 40, 174 and 300 omit those filters/weights. | Confirmed implementation difference in the supplied printout. No claim that every model is a weighted female-only analysis. Prior preprocessing not shown in these materials cannot be ruled out. |
| Observation counts | Table 1 reports Canada 405,067 and U.S. 555,191 for employment. Table 2 reports Canada OLS 291,999 / Heckman 294,100 and U.S. OLS 390,052 / Heckman 1,289,778. | Confirmed reported counts, not independently computed or necessarily unique people. OLS uses observed wages; Heckman reports selection-model observations. Counts alone cannot diagnose a coding error or attribute the difference to selection correction. Exact composition remains unresolved. |
| U.S. Heckman significance | Table 2 coefficient −0.0084, SE 0.0028, marked **; table legend ** denotes p < 0.05. Paper prose says p < 0.01. | Rounded values give z ≈ −3 and two-sided normal p ≈ 0.0027. This makes the star annotation inconsistent with the convention of assigning the highest applicable star tier. Both threshold statements could logically hold, but the intended exact output is unresolved. No authoritative p-value is selected without a model log. |
| Heckman estimator | Single-country commands omit twostep; pooled command specifies twostep. | Stata default is maximum likelihood for the former; two-step is explicit for the latter. Paper-wide two-stage wording does not accurately describe all printed commands. |
| Age range | Introduction says 25–54; data section says 25–59. U.S. code creates groups 25–59; Canadian code carries age_12 forward with no explicit restriction. | Conflicting source descriptions. Do not claim a single verified age range across all models. |
| Execution | Employment pooling loads a saved file that already defines employed (line 90), then calls gen employed again at line 180. | Sequential execution would stop at an already-defined variable. Original execution history or logs are needed; the PDF is not advertised as a runnable script. |
| Wage and exit definitions | Canadian code logs hrlyearn directly, while prose describes its units differently; country employment codes and exit reason categories require the corresponding dictionaries. | Source conflict identified; final units, category equivalence and reference group are not verified. The exit result cannot establish voluntary preference or exclude discrimination. |

The source portal was checked, but the two supplied data files each exceed the environment’s 32 MiB transfer limit and could not be loaded. No sample counts, model weights or empirical results have been recomputed. Resolving the remaining empirical conflicts requires accessible data, the relevant historical codebooks and original estimation logs. The concise webpage keeps the issues that change interpretation visible rather than dropping the findings or hiding caveats.
