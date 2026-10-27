# Motherhood, Employment & Wages

## Research overview

How do employment and wage differences associated with motherhood vary between Canada and the United States? This research uses 2011–2024 Canadian Labour Force Survey (LFS) and U.S. CPS ASEC microdata to compare those outcomes and explore reported reasons for leaving work in Canada.

The motivation is a measurement problem: looking only at wages among people who work can miss differences in who remains employed. Contrasting two policy environments adds context, but does not identify the causal effect of a particular parental-leave or childcare policy.

The project demonstrates evidence synthesis, comparison across populations, survey-variable harmonization, model interpretation and communication of uncertainty. These analytical practices are relevant to insights and business-analysis work; the research itself concerns labour markets, not consumers, audiences or marketing campaigns.

## My contribution

I independently wrote the complete research paper. My thesis advisor provided key guidance on model selection and throughout the research process. The project should therefore be understood as research conducted with substantive academic guidance, rather than an entirely unguided independent study.

My submitted data description records my use of Stata, downloading and combining survey extracts, and selecting March observations for Canada. The submitted materials document variable recoding, model estimation and regression-table exports. Those materials support the account of the analytical workflow below; they do not establish that every methodological choice was made without guidance.

The AI-use disclosure records ChatGPT assistance with econometric concepts, grammar, academic tone and explanations of results. This assistance is disclosed alongside the advisor’s guidance, without treating either as a separate team achievement attributable solely to me.

The principal deliverables were an English research paper, three regression tables, a Stata code printout, a data description and an AI-use statement. No commercial deployment or policy implementation is claimed.

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

**2. Reported wage differences depend on the model specification.** Table 2 reports Canadian log-wage coefficients of −0.0135 in OLS (p < 0.01) and +0.0244 in Heckman (not statistically significant). The corresponding U.S. coefficients are −0.0554 (p < 0.01) and −0.0084 (p < 0.05 according to the table). These are log-wage coefficients, not exact percentage changes. Differences in sample restrictions and weights limit a direct comparison across specifications.

**3. Exit reasons provide a further descriptive perspective.** The Canadian multinomial model reports a positive motherhood coefficient for voluntary exit (+1.0173, p < 0.01), while the involuntary-exit coefficient is statistically insignificant (−0.0062). These are model coefficients, not probability changes. The category mapping and reference group still require verification against the survey codebook.

## Implications

**What the evidence supports.** Employment and wages describe different dimensions of labour-market outcomes. The reported patterns support examining both, rather than treating one wage comparison as a complete account. Sensitivity across wage specifications also makes selection into the observed sample a necessary part of interpretation.

**What remains a hypothesis.** Family-policy differences offer a possible context for the cross-country patterns, but this design cannot determine which policy caused a difference. The exit results do not establish why every individual left work or demonstrate the absence of employer constraints.

**Relevance to insights and business analysis.** Comparing groups requires consistent definitions, interpretable metrics and attention to who is represented in the data. These are transferable analytical practices for consumer or audience research, marketing analysis and business analysis. Applying them to those settings is a potential transfer of approach, not a commercial application tested in this project. No customer response, campaign lift, revenue impact or business recommendation implemented by an organization was measured.

## Limitations

- The observational comparison does not track the same women before and after childbirth or eliminate unobserved differences. Country interactions do not isolate policy effects.
- Resident-child indicators are imperfect proxies for motherhood. Employment coding, wage units and currencies, and cross-country category mappings require further verification.
- The printed code does not apply the same female-sample restrictions and survey weights in every model. Single-country Heckman commands use maximum likelihood by default; the pooled command uses two-step estimation. Consequently, model differences cannot be attributed solely to a selection correction.
- The paper and code contain unresolved details, including inconsistent age ranges, a repeated variable definition, and a significance-level discrepancy in the U.S. Heckman result. This case follows the reported table for that significance level.
- The code is available privately as a PDF printout with local paths. The two data files exceeded the portfolio environment’s transfer-size limit and were not read or rerun. This is a research case study, not a verified reproduction package.
- Statistical insignificance does not establish that a relationship is absent. The results cannot demonstrate no wage disadvantage, no discrimination, or the effectiveness of a policy intervention.
