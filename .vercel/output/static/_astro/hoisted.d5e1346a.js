import"./hoisted.2d85bc7b.js";const o=document.querySelector("#newsletter-email"),i=document.querySelector(".email-subscribe-form");i?.addEventListener("submit",r=>{r.preventDefault();const t={members:[{email_address:o.value,status:"subscribed"}]};fetch("/api/newsletter",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"auth 2422ee7f7e8c82250b1375294d27fab9-us5"},body:JSON.stringify(t)}).then(e=>e.json()).then(e=>{if(e.errors.length>0){n(e.errors[0]);return}s("success","Thank you for subscribing.")}).catch(e=>{console.log("***ERROR***",JSON.stringify(e)),a(e)||n(e)})});const a=r=>JSON.stringify(r)==="{}",n=r=>{if(console.log("***ERR***",JSON.stringify(r)),r.error.includes("is already a list member")){s("warning","You have already subscribed!");return}s("fail","Sorry! Something went wrong.")},s=(r,t)=>{const e=document.querySelector(".alert-div");r==="success"&&e?.classList.add("bg-green-200","text-green-800","border-green-300"),r==="fail"&&e?.classList.add("bg-red-200","text-red-800","border-red-300"),r==="warning"&&e?.classList.add("bg-yellow-200","text-yellow-800","border-yellow-300"),e.innerHTML=t,e.classList.remove("hidden","animate-fade-out-down"),e.classList.add("block","animate-fade-in-down"),setTimeout(()=>{e.classList.add("hidden","animate-fade-out-down"),e.classList.remove("block"),e.innerHTML="",e.classList.remove("bg-green-200","text-green-800","border-green-300","bg-red-200","text-red-800","border-red-300","bg-yellow-200","text-yellow-800","border-yellow-300")},5e3)};