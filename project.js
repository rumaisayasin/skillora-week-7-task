/* SKILLORA WEEK 5 — ADVANCED PROJECT WORKFLOW */
const PROJECT_KEY="skillora_projects_v5";
const REVIEW_KEY="skillora_reviews_v6";
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

const seedProjects=[
{id:"ORD-1048",title:"Skillora Marketplace — Production Web App",category:"Web Development",description:"Build and polish a responsive freelance marketplace with authentication, service discovery, proposal flow and project management.",budget:1450,deadline:"2026-09-28",status:"In Progress",progress:68,role:"freelancer",client:{name:"Ayesha Khan",role:"Client • Product Lead",avatar:"https://i.pravatar.cc/100?img=47"},freelancer:{name:"Hasaan Ali",role:"Full-Stack Developer",avatar:"https://i.pravatar.cc/100?img=59"},updated:"8 min ago",risk:false,
milestones:[{id:"m1",title:"UX & responsive layout",desc:"Finalize dashboard screens and mobile breakpoints.",due:"Sep 12",amount:280,done:true},{id:"m2",title:"Frontend implementation",desc:"Build project cards, details, progress and role-based views.",due:"Sep 18",amount:420,done:true},{id:"m3",title:"Workflow interactions",desc:"Connect milestone actions, delivery and status transitions.",due:"Sep 23",amount:430,done:false},{id:"m4",title:"QA & final handoff",desc:"Cross-browser QA, fixes and production handoff.",due:"Sep 28",amount:320,done:false}],
files:["Skillora-v5-dashboard.zip"],activity:[["Ayesha Khan","Approved the frontend milestone","12 min ago"],["Hasaan Ali","Updated project progress to 68%","38 min ago"],["Ayesha Khan","Added feedback to workflow interactions","2 hr ago"]]},
{id:"ORD-1039",title:"E-commerce Analytics Dashboard",category:"Web Development",description:"Interactive analytics dashboard with revenue reporting, customer segments and export-ready reports.",budget:980,deadline:"2026-09-20",status:"Submitted",progress:92,client:{name:"Omar Siddiqui",role:"Client • Founder",avatar:"https://i.pravatar.cc/100?img=12"},freelancer:{name:"Hasaan Ali",role:"Full-Stack Developer",avatar:"https://i.pravatar.cc/100?img=59"},updated:"1 hr ago",risk:true,
milestones:[{id:"m1",title:"Dashboard architecture",desc:"Data model and layout foundation.",due:"Sep 5",amount:200,done:true},{id:"m2",title:"Analytics modules",desc:"Revenue, customer and conversion modules.",due:"Sep 12",amount:380,done:true},{id:"m3",title:"QA & submission",desc:"Final testing and delivery package.",due:"Sep 20",amount:400,done:true}],files:["analytics-dashboard-v3.zip","handoff-notes.pdf"],activity:[["Hasaan Ali","Submitted the final delivery","1 hr ago"],["Omar Siddiqui","Requested review of KPI labels","Yesterday"]]},
{id:"ORD-1024",title:"Brand Website Redesign",category:"UI/UX Design",description:"Premium marketing website redesign with a conversion-focused landing page and component system.",budget:720,deadline:"2026-08-30",status:"Completed",progress:100,client:{name:"Sara Ahmed",role:"Client • Marketing",avatar:"https://i.pravatar.cc/100?img=32"},freelancer:{name:"Hasaan Ali",role:"Full-Stack Developer",avatar:"https://i.pravatar.cc/100?img=59"},updated:"Aug 31",risk:false,
milestones:[{id:"m1",title:"Discovery & wireframes",desc:"Information architecture and wireframes.",due:"Aug 12",amount:180,done:true},{id:"m2",title:"Visual design",desc:"High-fidelity desktop and mobile screens.",due:"Aug 20",amount:260,done:true},{id:"m3",title:"Handoff",desc:"Assets, specs and final handoff.",due:"Aug 30",amount:280,done:true}],files:["brand-handoff.zip"],activity:[["Sara Ahmed","Marked the project completed","Aug 31"],["Hasaan Ali","Delivered final handoff","Aug 30"]]},
{id:"ORD-1052",title:"AI Content Workflow",category:"Automation",description:"Automated content pipeline connecting forms, AI generation and publishing approvals.",budget:560,deadline:"2026-10-04",status:"Pending",progress:8,client:{name:"Bilal Raza",role:"Client • Operations",avatar:"https://i.pravatar.cc/100?img=68"},freelancer:{name:"Hasaan Ali",role:"Automation Specialist",avatar:"https://i.pravatar.cc/100?img=59"},updated:"Today",risk:false,
milestones:[{id:"m1",title:"Kickoff & requirements",desc:"Confirm inputs, approval rules and publishing destinations.",due:"Sep 19",amount:120,done:false},{id:"m2",title:"Automation build",desc:"Build and test the workflow.",due:"Sep 27",amount:260,done:false},{id:"m3",title:"Handoff & training",desc:"Documentation and walkthrough.",due:"Oct 4",amount:180,done:false}],files:[],activity:[["Bilal Raza","Accepted the proposal and created the order","Today"]]},
{id:"ORD-1018",title:"Legacy Landing Page Fixes",category:"Web Development",description:"Small set of responsive and accessibility fixes for an existing landing page.",budget:320,deadline:"2026-08-14",status:"Cancelled",progress:24,client:{name:"Nadia Malik",role:"Client • Founder",avatar:"https://i.pravatar.cc/100?img=44"},freelancer:{name:"Hasaan Ali",role:"Developer",avatar:"https://i.pravatar.cc/100?img=59"},updated:"Aug 14",risk:false,
milestones:[{id:"m1",title:"Audit",desc:"Review responsive issues.",due:"Aug 8",amount:100,done:true},{id:"m2",title:"Fixes",desc:"Implement approved fixes.",due:"Aug 14",amount:220,done:false}],files:[],activity:[["Nadia Malik","Cancelled the order","Aug 14"]]}
];

function getProjects(){try{const x=JSON.parse(localStorage.getItem(PROJECT_KEY));if(x?.length)return x}catch(e){} localStorage.setItem(PROJECT_KEY,JSON.stringify(seedProjects));return structuredClone(seedProjects)}
function saveProjects(p){localStorage.setItem(PROJECT_KEY,JSON.stringify(p))}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function money(n){return "$"+Number(n).toLocaleString()}
function statusClass(s){return {"Pending":"st-pending","In Progress":"st-progress","Submitted":"st-submitted","Completed":"st-completed","Cancelled":"st-cancelled"}[s]||"st-pending"}
function statusPill(s){return `<span class="status-pill ${statusClass(s)}">${esc(s)}</span>`}
function toast(m){const t=$("#toast");if(!t)return;t.textContent=m;t.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("show"),2300)}
function initMenu(){const b=$("#projectMenu");const nav=document.querySelector(".project-nav nav");if(b)b.onclick=()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.flexDirection="column";nav.style.position="absolute";nav.style.right="15px";nav.style.top="62px";nav.style.background="#0b1221";nav.style.padding="10px 15px";nav.style.border="1px solid var(--border)";nav.style.borderRadius="10px"}}

function initOrders(){
 let projects=getProjects(),filter="all";
 const list=$("#projectList");
 function render(){
  const q=($("#projectSearch")?.value||"").toLowerCase();
  let data=projects.filter(p=>{
   const match=(p.title+" "+p.client.name+" "+p.freelancer.name+" "+p.category).toLowerCase().includes(q);
   const f=filter==="all"||filter==="active"?(filter==="all"||["Pending","In Progress","Submitted"].includes(p.status)):filter==="completed"?p.status==="Completed":p.status==="Cancelled";
   return match&&f;
  });
  const sort=$("#projectSort")?.value||"updated";
  if(sort==="budget")data.sort((a,b)=>b.budget-a.budget);
  if(sort==="deadline")data.sort((a,b)=>new Date(a.deadline)-new Date(b.deadline));
  if(sort==="updated")data.sort((a,b)=>b.id.localeCompare(a.id));
  $("#resultLabel").textContent=`Showing ${data.length} of ${projects.length} projects`;
  list.innerHTML=data.length?data.map(p=>`<article class="project-card">
   <div><div class="card-top">${statusPill(p.status)}<span class="order-id">${p.id}</span></div><h3>${esc(p.title)}</h3><p class="description">${esc(p.description)}</p>
   <div class="card-meta"><span>Budget <b>${money(p.budget)}</b></span><span>Deadline <b>${new Date(p.deadline).toLocaleDateString("en-US",{month:"short",day:"numeric"})}</b></span><span>Milestones <b>${p.milestones.filter(m=>m.done).length}/${p.milestones.length}</b></span></div></div>
   <div class="card-side"><div class="mini-progress"><div class="progress-label"><span>Progress</span><b>${p.progress}%</b></div><div class="progress-line"><i style="width:${p.progress}%"></i></div></div>
   <div class="card-people"><img src="${p.client.avatar}" alt=""><span>${esc(p.client.name)}</span></div><a class="secondary-btn view-btn" href="project-details.html?id=${p.id}">Open project →</a></div>
  </article>`).join(""):`<div class="empty"><h3>No projects found</h3><p>Try another search or status filter.</p></div>`;
  renderMetrics();renderHealth();
 }
 function renderMetrics(){
  const active=projects.filter(p=>["Pending","In Progress","Submitted"].includes(p.status));
  $("#orderMetrics").innerHTML=[
   ["Active projects",active.length,`${projects.filter(p=>p.status==="In Progress").length} currently in progress`,""],
   ["Contract value",money(projects.filter(p=>p.status!=="Cancelled").reduce((a,p)=>a+p.budget,0)),"Across accepted orders","good"],
   ["Awaiting review",projects.filter(p=>p.status==="Submitted").length,"Delivery submitted",""],
   ["Completion rate",Math.round(projects.filter(p=>p.status!=="Cancelled").reduce((a,p)=>a+p.progress,0)/Math.max(1,projects.filter(p=>p.status!=="Cancelled").length))+"%","Average project progress","good"]
  ].map(x=>`<div class="metric"><div class="metric-label">${x[0]}</div><div class="metric-value">${x[1]}</div><div class="metric-foot ${x[3]}">${x[2]}</div></div>`).join("");
 }
 function renderHealth(){const active=projects.filter(p=>["Pending","In Progress","Submitted"].includes(p.status));$("#healthChart").innerHTML=(active.length?active:projects.slice(0,4)).map(p=>`<div class="health-bar" style="height:${Math.max(15,p.progress)}%"><span>${p.progress}%</span></div>`).join("")}
 $$("#statusFilter button").forEach(b=>b.onclick=()=>{$$("#statusFilter button").forEach(x=>x.classList.remove("active"));b.classList.add("active");filter=b.dataset.status;render()});
 $("#projectSearch").oninput=render;$("#projectSort").onchange=render;$("#resetProjects").onclick=()=>{localStorage.removeItem(PROJECT_KEY);projects=getProjects();toast("Demo project data reset");render()};
 render();
}


function getReviews(){try{return JSON.parse(localStorage.getItem(REVIEW_KEY))||{}}catch(e){return {}}}
function saveReviews(v){localStorage.setItem(REVIEW_KEY,JSON.stringify(v))}
function renderReviewPanel(p,role,afterSave){
 const root=$("#reviewPanel"); if(!root)return;
 const reviews=getReviews(); const projectReviews=reviews[p.id]||[];
 const reviewer=role==="client"?p.client:p.freelancer;
 const canReview=p.status==="Completed" && !projectReviews.some(r=>r.author==="Hasaan Ali" && r.role===role);
 let form="";
 if(p.status==="Completed"){
   form=canReview?`<div class="review-form-wrap"><div class="review-prompt"><span class="review-check">✓</span><div><h3>Rate Your Experience</h3><p>Your feedback helps build trust across the Skillora marketplace.</p></div></div>
   <div class="star-picker" id="starPicker" role="radiogroup" aria-label="Rating from 1 to 5">${[1,2,3,4,5].map(n=>`<button type="button" class="star-btn" data-star="${n}" aria-label="${n} star${n>1?"s":""}">★</button>`).join("")}</div>
   <div class="rating-caption" id="ratingCaption">Select a rating</div>
   <textarea id="reviewText" class="review-textarea" maxlength="600" placeholder="Share what went well, communication quality, and the final result..." required></textarea>
   <div class="review-form-foot"><span><b id="reviewChars">0</b>/600</span><button class="primary-btn" id="submitReview" type="button" disabled>Submit review</button></div></div>`:
   `<div class="submitted-review"><span class="review-check">✓</span><div><b>Review submitted</b><p>Thank you for helping other clients and freelancers make informed decisions.</p></div></div>`;
 }else{
   form=`<div class="review-locked"><span>★</span><div><b>Reviews unlock after project completion</b><p>Complete the delivery and approval workflow first. The review form will appear here automatically.</p></div></div>`;
 }
 const cards=projectReviews.length?`<div class="existing-reviews"><div class="existing-title"><h3>Reviews for this project</h3><span>${projectReviews.length} review${projectReviews.length===1?"":"s"}</span></div>${projectReviews.map(r=>`<article class="review-card"><img src="${r.avatar}" alt=""><div class="review-body"><div class="review-top"><div><b>${esc(r.author)}</b><span>${esc(r.roleLabel)}</span></div><div class="review-stars">${"★".repeat(r.rating)}<i>${"★".repeat(5-r.rating)}</i></div></div><p>${esc(r.text)}</p><time>${esc(r.date)}</time></div></article>`).join("")}</div>`:"";
 root.innerHTML=`<div class="panel-head"><div><h2>Reviews & rating</h2><p>Build trust with verified project feedback.</p></div>${p.status==="Completed"?'<span class="review-open">OPEN</span>':'<span class="review-closed">LOCKED</span>'}</div>${form}${cards}`;
 if(canReview){
   let rating=0;
   const caption=["","Not satisfied","Could be better","Good experience","Great experience","Excellent experience"];
   document.querySelectorAll("#starPicker .star-btn").forEach(btn=>btn.onclick=()=>{
     rating=Number(btn.dataset.star);
     document.querySelectorAll("#starPicker .star-btn").forEach(b=>b.classList.toggle("selected",Number(b.dataset.star)<=rating));
     $("#ratingCaption").textContent=caption[rating];
     $("#submitReview").disabled=!rating||!$("#reviewText").value.trim();
   });
   $("#reviewText").oninput=e=>{ $("#reviewChars").textContent=e.target.value.length; $("#submitReview").disabled=!rating||!e.target.value.trim(); };
   $("#submitReview").onclick=()=>{
     const text=$("#reviewText").value.trim();
     if(!rating||text.length<10){toast("Choose a rating and write at least 10 characters.");return}
     const all=getReviews();all[p.id]=all[p.id]||[];
     all[p.id].push({author:"Hasaan Ali",role:role,roleLabel:role==="client"?"Client":"Freelancer",avatar:"https://i.pravatar.cc/100?img=59",rating,text,date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})});
     saveReviews(all);
     p.activity.unshift(["Hasaan Ali",`Left a ${rating}-star review for ${role==="client"?p.freelancer.name:p.client.name}`,"just now"]);
     p.updated="just now";
     if(afterSave) afterSave();
     renderReviewPanel(p,role,afterSave);toast("Review submitted successfully");
   };
 }
}

function initDetails(){
 const id=new URLSearchParams(location.search).get("id")||"ORD-1048";let projects=getProjects();let p=projects.find(x=>x.id===id)||projects[0];let role="freelancer";
 function persist(){saveProjects(projects);p=projects.find(x=>x.id===id)||p}
 function render(){
  $("#lastUpdated").textContent="Last synced "+p.updated;
  $("#projectHero").innerHTML=`<div class="hero-line"><div class="hero-title"><div class="card-top">${statusPill(p.status)}<span class="order-id">${p.id} • ${esc(p.category)}</span></div><h1>${esc(p.title)}</h1><p>${esc(p.description)}</p></div><div class="hero-actions"><button class="secondary-btn" id="messageBtn">✉ Message ${role==="client"?esc(p.freelancer.name):esc(p.client.name)}</button><button class="primary-btn" id="heroAction">${p.status==="Completed"?"View handoff":p.status==="Submitted"?"Review delivery":p.status==="Pending"?"Start project":"Submit delivery"}</button></div></div>
  <div class="hero-meta"><span>Contract value<b>${money(p.budget)}</b></span><span>Deadline<b>${new Date(p.deadline).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}</b></span><span>Milestones<b>${p.milestones.filter(m=>m.done).length} / ${p.milestones.length} complete</b></span><span>Current status<b>${p.status}</b></span></div>`;
  const completed=p.milestones.filter(m=>m.done).length;
  $("#progressPanel").innerHTML=`<div class="panel-head"><div><h2>Project progress</h2><p>Track contract execution from acceptance to completion.</p></div><strong>${p.progress}%</strong></div><div class="progress-summary"><strong>${p.progress}%</strong><span>${completed}/${p.milestones.length} milestones complete</span></div><div class="big-progress"><i style="width:${p.progress}%"></i></div><div class="step-track">${["Accepted","In Progress","Submitted","Completed"].map((s,i)=>`<div class="step ${(["In Progress","Submitted","Completed"].indexOf(p.status)>=i-1||p.status==="Completed")?"done":""}"><i></i>${s}</div>`).join("")}</div>`;
  $("#milestonesPanel").innerHTML=`<div class="panel-head"><div><h2>Milestones & tasks</h2><p>${role==="client"?"Review progress and approve completed work.":"Update tasks as you complete the agreed scope."}</p></div>${role==="freelancer"?'<button class="secondary-btn" id="addMilestone">＋ Add milestone</button>':""}</div>${p.milestones.map((m,i)=>`<div class="milestone"><div class="mile-row"><button class="check ${m.done?"done":""}" data-mile="${m.id}" title="Toggle milestone">${m.done?"✓":""}</button><div class="mile-main"><h4>${esc(m.title)}</h4><p>${esc(m.desc)}</p><div class="mile-meta"><span>Due <b>${m.due}</b></span><span>Value <b>${money(m.amount)}</b></span><span>${m.done?"Completed":"Open"}</span></div></div><div class="mile-actions">${role==="client"&&m.done?'<button class="tiny-btn approve-mile" data-mile="'+m.id+'">Approve</button>':""}</div></div></div>`).join("")}`;
  const files=p.files||[];
  $("#deliveryPanel").innerHTML=`<div class="panel-head"><div><h2>Delivery & submission</h2><p>${p.status==="Submitted"?"A delivery is waiting for client review.":"Keep final files and handoff notes attached to the contract."}</p></div>${statusPill(p.status)}</div>${files.length?files.map(f=>`<div class="file-chip"><span>▣ ${esc(f)}</span><span>Ready</span></div>`).join(""):""}${role==="freelancer"&&p.status!=="Completed"&&p.status!=="Cancelled"?`<div class="delivery-drop" id="deliveryDrop"><div class="upload-icon">⇧</div><h4>Submit your next delivery</h4><p>Add a handoff note and attach the latest project package.</p><button class="primary-btn" id="submitDelivery">Submit for review</button></div>`:role==="client"&&p.status==="Submitted"?`<div class="delivery-drop"><div class="upload-icon">✓</div><h4>Delivery ready for review</h4><p>Check the files above, then approve the delivery or request changes.</p><button class="primary-btn" id="approveDelivery">Approve delivery</button></div>`:`<div class="delivery-drop"><h4>${p.status==="Completed"?"✓ Final delivery approved":"No delivery submitted yet"}</h4><p>${p.status==="Completed"?"This order is closed and the handoff is complete.":"The freelancer can submit files when the agreed work is ready."}</p></div>`}`;
  $("#activityPanel").innerHTML=`<div class="panel-head"><div><h2>Activity</h2><p>Recent contract events and collaboration history.</p></div></div>${(p.activity||[]).map(a=>`<div class="activity-item"><img src="${role==="client"?p.freelancer.avatar:p.client.avatar}" alt=""><div><b>${esc(a[0])}</b><p>${esc(a[1])}</p><time>${esc(a[2])}</time></div></div>`).join("")}`;
  renderReviewPanel(p,role,()=>persist());
  $("#peoplePanel").innerHTML=`<div class="panel-head"><div><h2>People</h2><p>Contract participants</p></div></div><div class="person"><img src="${p.client.avatar}" alt=""><div><b>${esc(p.client.name)}</b><span>${esc(p.client.role)}</span></div></div><div class="person"><img src="${p.freelancer.avatar}" alt=""><div><b>${esc(p.freelancer.name)}</b><span>${esc(p.freelancer.role)}</span></div></div>`;
  $("#contractPanel").innerHTML=`<div class="panel-head"><div><h2>Order details</h2><p>Accepted proposal converted to contract</p></div></div><div class="info-list"><div><span>Order ID</span><b>${p.id}</b></div><div><span>Budget</span><b>${money(p.budget)}</b></div><div><span>Deadline</span><b>${new Date(p.deadline).toLocaleDateString("en-US",{month:"short",day:"numeric"})}</b></div><div><span>Payment</span><b>Milestone based</b></div><div><span>Scope</span><b>${p.milestones.length} milestones</b></div></div>`;
  const clientAction=role==="client"&&p.status==="Submitted"?'<button class="primary-btn" id="actionApprove">Approve & complete</button>':role==="client"&&p.status==="In Progress"?'<button class="secondary-btn" id="actionChanges">Request changes</button>':role==="freelancer"&&p.status==="Pending"?'<button class="primary-btn" id="actionStart">Start project</button>':role==="freelancer"&&p.status==="In Progress"?'<button class="secondary-btn" id="actionSubmit">Submit delivery</button>':'';
  $("#actionPanel").innerHTML=`<div class="panel-head"><div><h2>Next action</h2><p>${role==="client"?"Manage review and approvals.":"Keep the project moving."}</p></div></div><div class="action-stack">${clientAction||'<div class="notice">All current workflow actions are complete. Continue collaborating through the project activity log.</div>'}</div>`;
  bind();
 }
 function bind(){
  $$(".check").forEach(b=>b.onclick=()=>{const m=p.milestones.find(x=>x.id===b.dataset.mile);m.done=!m.done;p.progress=Math.round(p.milestones.filter(x=>x.done).length/p.milestones.length*100);p.updated="just now";p.activity.unshift(["Hasaan Ali",`${m.done?"Completed":"Reopened"} milestone: ${m.title}`,"just now"]);persist();toast(m.done?"Milestone completed":"Milestone reopened");render()});
  $$(".approve-mile").forEach(b=>b.onclick=()=>{toast("Milestone approved");});
  $("#addMilestone")?.addEventListener("click",()=>openModal("Add milestone",`<input id="newTitle" class="modal-input" placeholder="Milestone title"><textarea id="newDesc" placeholder="Describe the deliverable..."></textarea>`,()=>{const title=$("#newTitle").value.trim();if(!title)return; p.milestones.push({id:"m"+Date.now(),title,desc:$("#newDesc").value.trim()||"New project task.",due:"TBD",amount:0,done:false});p.progress=Math.round(p.milestones.filter(m=>m.done).length/p.milestones.length*100);persist();closeModal();toast("Milestone added");render()}));
  $("#submitDelivery,#actionSubmit,#heroAction")?.addEventListener("click",()=>{if(p.status==="Submitted"||p.status==="Completed"){if(p.status==="Submitted")openModal("Review delivery",`<p>Review the submitted files and approve the work when everything meets the agreed scope.</p>`,()=>{p.status="Completed";p.progress=100;p.updated="just now";p.activity.unshift(["Client","Approved the final delivery","just now"]);persist();closeModal();toast("Project marked completed");render()});else toast("Final handoff is complete");return} openModal("Submit delivery",`<textarea id="deliveryNote" placeholder="Tell the client what is included in this delivery..."></textarea>`,()=>{p.status="Submitted";p.progress=Math.max(p.progress,95);p.updated="just now";p.files=[...(p.files||[]),"Skillora-final-delivery.zip"];p.activity.unshift(["Hasaan Ali","Submitted a delivery for client review","just now"]);persist();closeModal();toast("Delivery submitted for review");render()})});
  $("#approveDelivery,#actionApprove")?.addEventListener("click",()=>{p.status="Completed";p.progress=100;p.updated="just now";p.activity.unshift(["Client","Approved the final delivery and completed the order","just now"]);persist();toast("Order completed successfully");render()});
  $("#actionStart")?.addEventListener("click",()=>{p.status="In Progress";p.progress=Math.max(10,p.progress);p.updated="just now";p.activity.unshift(["Hasaan Ali","Started the project","just now"]);persist();toast("Project moved to In Progress");render()});
  $("#actionChanges")?.addEventListener("click",()=>openModal("Request changes",`<textarea id="changeNote" placeholder="Describe the changes needed..."></textarea>`,()=>{p.activity.unshift(["Ayesha Khan","Requested changes to the current delivery","just now"]);p.updated="just now";persist();closeModal();toast("Change request added");render()}));
  $("#messageBtn")?.addEventListener("click",()=>{window.location.href=`messages.html?conversation=${encodeURIComponent(p.id)}`});
 }
 $$(".role-buttons button").forEach(b=>b.onclick=()=>{$$(".role-buttons button").forEach(x=>x.classList.remove("active"));b.classList.add("active");role=b.dataset.role;render()});
 render();
}
function openModal(title,body,submit){$("#modalRoot").innerHTML=`<div class="modal-backdrop"><div class="modal"><h3>${title}</h3><p>Changes are saved locally in this demo workspace.</p>${body}<div class="modal-actions"><button class="secondary-btn" id="cancelModal">Cancel</button><button class="primary-btn" id="saveModal">Save changes</button></div></div></div>`;$("#cancelModal").onclick=closeModal;$("#saveModal").onclick=submit}
function closeModal(){$("#modalRoot").innerHTML=""}
document.addEventListener("DOMContentLoaded",()=>{initMenu();if($("#projectList"))initOrders();if($("#projectHero"))initDetails()});
