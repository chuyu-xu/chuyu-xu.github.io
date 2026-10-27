# Motherhood, Employment & Wages

Research case study · Queen’s University · Canada & United States · 2011–2024

## Research question

How is motherhood associated with employment and wages in Canada and the United States? This undergraduate research compares labour-market outcomes across two countries with different parental-leave and childcare policy environments.

The central question goes beyond how much working mothers earn: differences in employment also shape whose wages are observed. Examining both outcomes provides a fuller view of the motherhood penalty.

## Data & methods

I used Canadian Labour Force Survey (LFS) and U.S. Current Population Survey Annual Social and Economic Supplement (CPS ASEC) microdata covering 2011–2024. I combined Canadian files and selected March observations to align survey timing, then processed household and demographic variables for cross-country comparison.

- **Logit · Employment:** Estimate a binary employment outcome and express the association as a percentage-point marginal effect.
- **OLS · Wages:** Compare log hourly wages using age, education, marital-status and survey-year controls.
- **Heckman · Selection:** Examine wage estimates while accounting for the process through which wages are observed among workers.
- **Pooled & exit models:** Compare country patterns through interaction terms and examine voluntary and involuntary exit categories in Canada.

## Key findings

The country-specific employment models associate motherhood with a larger reduction in employment probability in Canada: −6.29 percentage points, compared with −4.98 in the United States.

![Employment associations](employment-associations.svg)

Table 1: country-specific average marginal effects associated with motherhood, in percentage points. Figure redrawn from the final paper.

The paper’s OLS estimates show a larger negative wage association in the United States. In the U.S. Heckman model, the association remains negative and statistically significant (Mother coefficient −0.0084, p < 0.01; Table 2, column 4), though smaller in magnitude than the OLS estimate. In Canada, the wage estimate becomes statistically indistinguishable from zero in the selection model; this does not establish that no wage difference exists.

The Canadian exit analysis also finds a positive association between motherhood and reported voluntary exit. This offers a further perspective on participation patterns, rather than proof of an individual’s preferences or a specific policy mechanism.

## My contribution

- Downloaded and combined cross-country survey data, including selecting March observations for the Canadian sample.
- Processed household and demographic variables and used Stata to estimate models and export regression tables.
- Interpreted employment, wage and exit results alongside the literature and independently wrote the complete paper.

My thesis advisor provided key guidance on model selection and throughout the research process.

## Research significance

The research shows why employment and wages need to be considered together when studying labour-market inequality. A wage comparison among workers captures only one part of the picture.

It also develops analytical skills relevant to insights work: combining data sources, making variables comparable, applying models to distinct questions and translating statistical results into a clear argument. The policy comparison provides context for interpretation, while the evidence remains associational.

## Research limitations

This observational study identifies associations rather than the causal effects of motherhood or particular policies. Differences in survey definitions and measurement affect cross-country comparability. The regression results depend on model specifications, and the Heckman approach additionally relies on its selection assumptions and the youngest-child-age exclusion restriction.


## Technical overview

### Data sources and preparation

The study uses Canadian LFS public-use microdata and U.S. CPS ASEC extracts obtained through IPUMS. The coverage is 2011–2024. Canadian files were combined and restricted to March for timing alignment with the U.S. source. Household child-presence indicators identify the comparison groups. Age, education and marital status were recoded for the cross-country analysis, alongside employment and wage measures.

The U.S. workflow constructs hourly earnings as annual wage income divided by 52 times usual weekly hours, applies the wage and hours filters in the analysis, and takes the natural logarithm. The Canadian analysis uses the hourly-earnings field. Survey definitions and measurement remain relevant when interpreting cross-country differences.

### Employment analysis

Country-specific logit models relate employment to the child-presence indicator with age-group, education, marital-status and survey-year controls. These specifications use the survey weights and robust standard errors. Average marginal effects express the employment associations as percentage-point differences. The pooled specification includes a country indicator and its interaction with motherhood.

### Wage and selection analysis

OLS models of log hourly wages provide the wage comparison among observed workers. Heckman models consider selection into employment, with youngest-child age entering the selection equation alongside the demographic and year controls. The single-country Stata commands use maximum likelihood, while the pooled specification uses two-step estimation. These are distinct specifications, so their results are interpreted in the context of their samples and assumptions.

### Exit analysis and reporting

The Canadian extension groups reported reasons for leaving work or not seeking work into categories and estimates a multinomial logit specification. It supplements the employment analysis with information on reported exit reasons. Stata model estimates were stored and regression tables exported using esttab. The final paper contains the literature review, empirical analysis, interpretation and references.

### Reading the findings

The chart reproduces the final paper’s Table 1 employment marginal effects: −6.29 percentage points for Canada and −4.98 for the United States. These are changes in predicted probability associated with the child-presence indicator, not relative percentage changes. The U.S. Heckman Mother coefficient is −0.0084*** in Table 2, column 4, with standard error 0.0028. The exit findings are summarized qualitatively here. Log-wage and multinomial-logit coefficients have different interpretations and should not be read as probability changes. Statistical insignificance does not establish an absent relationship.

## Data-source links

- [IPUMS CPS](https://cps.ipums.org/cps/)
- [Statistics Canada LFS public-use microdata](https://www150.statcan.gc.ca/n1/pub/71m0001x/71m0001x2021001-eng.htm)

## Repository files

- `CASE-STUDY.md` — concise research narrative.
- `index.html` — case page within the existing portfolio website.
- `employment-associations.svg` and `employment-associations-mobile.svg` — selected aggregate findings from the final paper.

The full paper, code printout and survey microdata are not distributed in this repository. To view the website locally, serve the repository root with `python -m http.server 8765 --bind 127.0.0.1`, then open `/projects/motherhood-penalty/`. This serves the static pages.

## AI use

I used ChatGPT to clarify econometric concepts, review grammar and academic tone, and help rephrase explanations of results.
