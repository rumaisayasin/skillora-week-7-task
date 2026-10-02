
const MSG_KEY="skillora_messages_v6";
const NOTIF_KEY="skillora_notifications_v6";
const REVIEW_KEY="skillora_reviews_v6";
const msg$=s=>document.querySelector(s), msg$$=s=>document.querySelectorAll(s);

const seedConversations=[
 {id:"c1",name:"Ayesha Khan",role:"Client • Product Lead",avatar:"https://i.pravatar.cc/100?img=47",online:true,projectId:"ORD-1048",project:"Skillora Marketplace — Production Web App",unread:2,time:"2m ago",messages:[
  {from:"them",text:"The workflow screens are looking great. Can we review the final interactions today?",time:"5:41 PM"},
  {from:"me",text:"Absolutely. I’ll send the updated interaction pass shortly.",time:"5:43 PM"},
  {from:"them",text:"Perfect — I also left a note on the project milestone.",time:"5:45 PM"}]},
 {id:"c2",name:"Omar Siddiqui",role:"Client • Founder",avatar:"https://i.pravatar.cc/100?img=12",online:true,projectId:"ORD-1039",project:"E-commerce Analytics Dashboard",unread:1,time:"1h ago",messages:[
  {from:"them",text:"Thanks for the delivery. I’m reviewing the KPI labels now.",time:"4:20 PM"},
  {from:"me",text:"Sounds good. Let me know if any labels need clarification.",time:"4:25 PM"}]},
 {id:"c3",name:"Sara Ahmed",role:"Client • Marketing",avatar:"https://i.pravatar.cc/100?img=32",online:false,projectId:"ORD-1024",project:"Brand Website Redesign",unread:0,time:"Aug 31",messages:[
  {from:"them",text:"Everything looks good. I’ve marked the project completed.",time:"Aug 31"},
  {from:"me",text:"Thank you! I appreciate the feedback.",time:"Aug 31"}]}
];

const seedNotifications=[
 {id:"n1",type:"message",icon:"✉",title:"New message from Ayesha Khan",text:"The workflow screens are looking great. Can we review the final interactions today?",time:"2 min ago",read:false,conversationId:"c1"},
 {id:"n2",type:"project",icon:"✓",title:"Project completed",text:"Brand Website Redesign was completed. You can now leave a review.",time:"Aug 31",read:false,projectId:"ORD-1024"},
 {id:"n3",type:"project",icon:"↗",title:"Delivery submitted",text:"E-commerce Analytics Dashboard is waiting for client review.",time:"1 hr ago",read:false,projectId:"ORD-1039"},
 {id:"n4",type:"project",icon:"★",title:"Proposal accepted",text:"AI Content Workflow is ready to start.",time:"Today",read:true,projectId:"ORD-1052"},
 {id:"n5",type:"message",icon:"✉",title:"New message from Omar Siddiqui",text:"Thanks for the delivery. I’m reviewing the KPI labels now.",time:"1 hr ago",read:true,conversationId:"c2"},
 {id:"n6",type:"review",icon:"★",title:"New review received",text:"Sara Ahmed left feedback on your completed project.",time:"Aug 31",read:true,projectId:"ORD-1024"}
];

function getStore(k,seed){try{const x=JSON.parse(localStorage.getItem(k));if(x)return x}catch(e){}localStorage.setItem(k,JSON.stringify(seed));return structuredClone(seed)}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function msgToast(text){const t=msg$("#toast");if(!t)return;t.textContent=text;t.classList.add("show");clearTimeout(window.__msgToast);window.__msgToast=setTimeout(()=>t.classList.remove("show"),2300)}
function initMenu(){const b=msg$("#projectMenu"),nav=document.querySelector(".project-nav nav");if(b)b.onclick=()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.flexDirection="column";nav.style.position="absolute";nav.style.right="15px";nav.style.top="62px";nav.style.background="#0b1221";nav.style.padding="10px 15px";nav.style.border="1px solid var(--border)";nav.style.borderRadius="10px";nav.style.zIndex=99}}

let conversations=getStore(MSG_KEY,seedConversations);
let notifications=getStore(NOTIF_KEY,seedNotifications);
let activeConversationId="c1";
const requestedProject=new URLSearchParams(location.search).get("conversation");
let notifFilter="all";

function renderStats(){
 const unread=notifications.filter(n=>!n.read).length;
 const unreadMsgs=conversations.reduce((a,c)=>a+c.unread,0);
 msg$("#communicationStats").innerHTML=[
  ["Unread messages",unreadMsgs,unreadMsgs?"Needs attention":"Inbox is clear"],
  ["Notifications",unread,unread?"New activity":"All caught up"],
  ["Active conversations",conversations.length,"Clients & freelancers"],
  ["Completed feedback",Object.keys(getStore(REVIEW_KEY,{})).length,"Reviews submitted"]
 ].map(x=>`<div class="comm-stat"><span class="label">${x[0]}</span><strong>${x[1]}</strong><span>${x[2]}</span></div>`).join("");
 msg$("#notificationCount").textContent=unread;
 const nav=msg$("#navUnread");if(nav){nav.textContent=unread+unreadMsgs;nav.style.display=(unread+unreadMsgs)?"inline-grid":"none"}
}
function renderConversations(){
 const q=(msg$("#conversationSearch").value||"").toLowerCase();
 const data=conversations.filter(c=>(c.name+" "+c.project+" "+c.role).toLowerCase().includes(q));
 msg$("#conversationCount").textContent=`${conversations.length} active thread${conversations.length===1?"":"s"}`;
 msg$("#conversationList").innerHTML=data.length?data.map(c=>`<div class="conversation ${c.id===activeConversationId?"active":""}" data-id="${c.id}">
   <div class="avatar-wrap"><img src="${c.avatar}" alt=""><i class="online-dot-small" style="${c.online?"":"background:#59657a"}"></i></div>
   <div><h4>${esc(c.name)}</h4><p>${esc(c.messages.at(-1)?.text||"No messages yet")}</p></div>
   <div><span class="conv-time">${esc(c.time)}</span>${c.unread?`<span class="unread-badge">${c.unread}</span>`:""}</div>
 </div>`).join(""):`<div class="notification-empty"><strong>No conversations</strong><span>Try a different search.</span></div>`;
 msg$$(".conversation").forEach(el=>el.onclick=()=>selectConversation(el.dataset.id));
}
function selectConversation(id){
 activeConversationId=id;
 const c=conversations.find(x=>x.id===id);if(!c)return;
 c.unread=0;c.time="now";save(MSG_KEY,conversations);
 notifications.forEach(n=>{if(n.conversationId===id)n.read=true});save(NOTIF_KEY,notifications);
 renderStats();renderConversations();renderChat();renderNotifications();
}
function renderChat(){
 const c=conversations.find(x=>x.id===activeConversationId)||conversations[0];if(!c)return;
 msg$("#chatHeader").innerHTML=`<div class="chat-person"><img src="${c.avatar}" alt=""><div><h2>${esc(c.name)}</h2><p>${esc(c.role)}</p><span class="chat-status"><i class="online-dot-small" style="position:static;border:0;width:7px;height:7px;background:${c.online?"#3ee18b":"#59657a"}"></i>${c.online?"Online":"Offline"}</span></div></div><div class="chat-actions"><button id="callAction">☎ Call</button><button id="profileAction">View profile</button></div>`;
 msg$("#chatContext").innerHTML=`<span>Project <b>${esc(c.project)}</b></span><a href="project-details.html?id=${encodeURIComponent(c.projectId)}">Open project →</a>`;
 msg$("#chatMessages").innerHTML=c.messages.map(m=>`<div class="msg-row ${m.from==="me"?"mine":""}">${m.from==="me"?"":`<img class="msg-avatar" src="${c.avatar}" alt="">`}<div><div class="bubble">${esc(m.text).replace(/\n/g,"<br>")}</div><div class="msg-meta">${esc(m.time)} · ${m.from==="me"?"You":esc(c.name)}</div></div></div>`).join("");
 const box=msg$("#chatMessages");box.scrollTop=box.scrollHeight;
 msg$("#callAction")?.addEventListener("click",()=>msgToast("Calling is represented as a demo interaction."));
 msg$("#profileAction")?.addEventListener("click",()=>msgToast("Profile preview is available in the marketplace demo."));
}
function renderNotifications(){
 const data=notifications.filter(n=>notifFilter==="all"||notifFilter==="unread"&&!n.read||notifFilter==="project"&&n.type==="project"||notifFilter==="message"&&n.type==="message");
 msg$("#notificationList").innerHTML=data.length?data.map(n=>`<div class="notification ${n.read?"":"unread"}" data-id="${n.id}">
   <div class="notif-icon">${n.icon}</div><div><h4>${esc(n.title)}</h4><p>${esc(n.text)}</p></div><div>${n.read?"":"<i class='unread-dot'></i>"}<time>${esc(n.time)}</time></div>
 </div>`).join(""):`<div class="notification-empty"><strong>You're all caught up</strong><span>No notifications match this filter.</span></div>`;
 msg$$(".notification").forEach(el=>el.onclick=()=>openNotification(el.dataset.id));
}
function openNotification(id){
 const n=notifications.find(x=>x.id===id);if(!n)return;n.read=true;save(NOTIF_KEY,notifications);renderStats();renderNotifications();
 if(n.conversationId)selectConversation(n.conversationId);
 else if(n.projectId)window.location.href=`project-details.html?id=${encodeURIComponent(n.projectId)}`;
}
function sendMessage(text){
 const c=conversations.find(x=>x.id===activeConversationId);if(!c)return;
 c.messages.push({from:"me",text,time:new Date().toLocaleTimeString([], {hour:"numeric",minute:"2-digit"})});
 c.time="now";save(MSG_KEY,conversations);renderConversations();renderChat();renderStats();msgToast("Message sent");
 // Simulated conversation state: show a short typing state, then a non-invasive demo reply.
 msg$("#typingState").innerHTML=`${esc(c.name)} is typing <span class="typing-dots"><i></i><i></i><i></i></span>`;
 setTimeout(()=>{
   const latest=conversations.find(x=>x.id===c.id); if(!latest)return;
   latest.messages.push({from:"them",text:"Got it — I’ll take a look and get back to you.",time:new Date().toLocaleTimeString([], {hour:"numeric",minute:"2-digit"})});
   latest.time="just now";save(MSG_KEY,conversations);msg$("#typingState").textContent="";renderConversations();renderChat();
   notifications.unshift({id:"n"+Date.now(),type:"message",icon:"✉",title:`New message from ${c.name}`,text:"Got it — I’ll take a look and get back to you.",time:"just now",read:false,conversationId:c.id});
   save(NOTIF_KEY,notifications);renderNotifications();renderStats();
 },900);
}
function init(){
 initMenu();
 const linked=conversations.find(c=>c.projectId===requestedProject);
 if(linked) activeConversationId=linked.id;
 renderStats();renderConversations();renderChat();renderNotifications();
 msg$("#conversationSearch").oninput=renderConversations;
 msg$$(".notification-filters button").forEach(b=>b.onclick=()=>{msg$$(".notification-filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");notifFilter=b.dataset.filter;renderNotifications()});
 msg$("#markAllRead").onclick=()=>{notifications.forEach(n=>n.read=true);conversations.forEach(c=>c.unread=0);save(NOTIF_KEY,notifications);save(MSG_KEY,conversations);renderStats();renderConversations();renderNotifications();msgToast("All notifications marked as read")};
 msg$("#messageForm").onsubmit=e=>{e.preventDefault();const v=msg$("#messageInput").value.trim();if(!v)return;sendMessage(v);msg$("#messageInput").value="";msg$("#charCount").textContent="0"};
 msg$("#messageInput").oninput=e=>{msg$("#charCount").textContent=e.target.value.length;e.target.style.height="auto";e.target.style.height=Math.min(e.target.scrollHeight,120)+"px"};
 msg$("#messageInput").onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();msg$("#messageForm").requestSubmit()}};
 msg$("#attachBtn").onclick=()=>msgToast("Attachment picker is represented in this frontend prototype.");
 msg$("#newConversation").onclick=()=>msgToast("Choose a client/freelancer from a project to start a linked conversation.");
}
document.addEventListener("DOMContentLoaded",init);
