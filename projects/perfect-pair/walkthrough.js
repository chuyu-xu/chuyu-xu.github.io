const scenarios=[
  {
    "id": "maya",
    "tab": "Fit & width",
    "title": "A wider fit in the same size",
    "subtitle": "Maya \u00b7 Size 8 ankle boots feel tight across the toes.",
    "evidence": "The photo shows no outdoor wear. Reviews point to a narrow toe box; wide-fit feedback and available stock support size 8 wide.",
    "recommendation": "Recommend size 8 wide, with Smart Credit and a refund still available.",
    "next": "Reserve the pair and create the exchange and return label. Release shipment after inspection; try another location if the stock hold fails.",
    "status": "No initial approval \u00b7 inspection required"
  },
  {
    "id": "priya",
    "tab": "Arrival damage",
    "title": "Replace the damaged pair and assign the cost",
    "subtitle": "Priya \u00b7 White sneakers arrive scuffed in a crushed box.",
    "evidence": "Scuffing, clean soles and a crushed box align with tracking evidence of transit damage.",
    "recommendation": "Offer a same-size replacement or refund with a free return. Smart Credit is excluded for this damage case.",
    "next": "Reserve the replacement, prepare the return and confirm condition at inspection. Route the item and support a carrier claim with the evidence.",
    "status": "No initial approval \u00b7 inspection required"
  },
  {
    "id": "jordan",
    "tab": "Conflicting evidence",
    "title": "Pause when the photo and the claim disagree",
    "subtitle": "Jordan \u00b7 A \u201cnever worn\u201d damage claim conflicts with the photo.",
    "evidence": "The photo shows outsole wear but no visible damage. Tracking has no exception; prior claims and the amount warrant review.",
    "recommendation": "Pause settlement and send a neutral review message while a person checks the evidence.",
    "next": "The case remains pending until a manager completes the review.",
    "status": "Manager review pending"
  }
];
const panel=document.querySelector('#scenario-panel');
const tabs=[...document.querySelectorAll('[data-scenario]')];
const escapeHTML=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function showScenario(id,focus=false){
 const s=scenarios.find(x=>x.id===id);if(!s)return;
 tabs.forEach(t=>{const selected=t.dataset.scenario===id;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;if(selected&&focus)t.focus()});
 panel.setAttribute('aria-labelledby','tab-'+id);
 panel.innerHTML=`<div class="scenario-heading"><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.subtitle)}</p><span class="pill">${escapeHTML(s.status)}</span></div><div class="scenario-layout"><dl class="scenario-flow">${[['evidence','Evidence'],['recommendation','Decision'],['next','Next step']].map(([key,label])=>`<div><dt>${label}</dt><dd>${escapeHTML(s[key])}</dd></div>`).join('')}</dl><figure class="scenario-screen"><button class="image-button" data-zoom="assets/${id}-prototype.webp" aria-label="Enlarge ${id} early prototype customer screenshot"><img src="assets/${id}-prototype.webp" alt="${escapeHTML(s.subtitle)} Early prototype customer screen." width="372"><span>Enlarge screenshot +</span></button><figcaption>Simulated customer screen</figcaption></figure></div>`;
}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>showScenario(t.dataset.scenario));t.addEventListener('keydown',e=>{let j;if(e.key==='ArrowRight')j=(i+1)%tabs.length;if(e.key==='ArrowLeft')j=(i+tabs.length-1)%tabs.length;if(e.key==='Home')j=0;if(e.key==='End')j=tabs.length-1;if(j!==undefined){e.preventDefault();showScenario(tabs[j].dataset.scenario,true)}})});
const viewer=document.querySelector('#image-viewer'),large=document.querySelector('#large-image');let opener;
document.addEventListener('click',e=>{const target=e.target.closest('[data-zoom]');if(!target)return;opener=target;large.src=target.dataset.zoom;large.alt=target.querySelector('img').alt;viewer.showModal()});
document.querySelector('#close-viewer').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});viewer.addEventListener('close',()=>opener?.focus());
showScenario('maya');
