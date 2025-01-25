import"./styles-Cek0TDlI.js";import{o as h,s as v,a as u,g as y,c as F,f as w}from"./firebase-EYIYP2Ev.js";h(u,o=>{o?(document.querySelector("h2").textContent=`Bem-vindo, ${o.displayName||"Usuário"}!`,b(o.uid)):window.location.href="login.html"});async function b(o){try{const r=await p(o,"ganhos"),s=await p(o,"despesas"),a=await p(o,"investimentos"),t=r.reduce((l,g)=>l+g.valor,0),d=s.reduce((l,g)=>l+g.valor,0),i=a.reduce((l,g)=>l+g.valor,0),m=t-d-i;document.getElementById("saldo-atual").textContent=`R$ ${m.toFixed(2)}`,document.getElementById("despesas-mes").textContent=`R$ ${d.toFixed(2)}`,document.getElementById("investimentos").textContent=`R$ ${i.toFixed(2)}`,E(r,s,a),C(a)}catch(r){console.error("Erro ao carregar dados financeiros:",r)}}async function p(o,r){try{const s=await y(F(w,"usuarios",o,r)),a=[];return s.forEach(t=>{a.push({id:t.id,...t.data()})}),a}catch(s){return console.error(`Erro ao recuperar ${r}:`,s),[]}}function E(o,r,s){const a=document.getElementById("grafico-despesas");if(!a){console.error("Elemento 'grafico-despesas' não encontrado.");return}const t={},d=new Set;o.forEach(e=>{const c=new Date(e.data),n=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`;d.add(n),t[n]||(t[n]={ganhos:0,despesas:0,investimentos:0}),t[n].ganhos+=e.valor}),r.forEach(e=>{const c=new Date(e.data),n=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`;d.add(n),t[n]||(t[n]={ganhos:0,despesas:0,investimentos:0}),t[n].despesas+=e.valor}),s.forEach(e=>{const c=new Date(e.data),n=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}`;d.add(n),t[n]||(t[n]={ganhos:0,despesas:0,investimentos:0}),t[n].investimentos+=e.valor});const i=Array.from(d).sort(),m=i,l=i.map(e=>t[e].despesas),g=i.map(e=>t[e].ganhos-t[e].despesas-t[e].investimentos),f=i.map(e=>t[e].investimentos);new window.Chart(a.getContext("2d"),{type:"bar",data:{labels:m,datasets:[{label:"Gastos",data:l,backgroundColor:"#FF5722"},{label:"Saldo Final",data:g,backgroundColor:"#4CAF50"},{label:"Investimentos",data:f,backgroundColor:"#FFD700"}]},options:{responsive:!0,aspectRatio:2,plugins:{legend:{display:!0,position:"top"}},scales:{x:{stacked:!1},y:{stacked:!1,beginAtZero:!0}}}})}function C(o){const r=document.getElementById("grafico-investimentos");if(!r){console.error("Elemento 'grafico-investimentos' não encontrado.");return}const s={};o.forEach(a=>{s[a.tipo]?s[a.tipo]+=a.valor:s[a.tipo]=a.valor}),new window.Chart(r.getContext("2d"),{type:"pie",data:{labels:Object.keys(s),datasets:[{label:"Investimentos",data:Object.values(s),backgroundColor:["#4CAF50","#2196F3","#FFD700","#FF5722","#9C27B0"]}]},options:{responsive:!0,aspectRatio:2,plugins:{legend:{position:"bottom"}}}})}document.getElementById("btn-sair").addEventListener("click",()=>{v(u).then(()=>{window.location.href="login.html"}).catch(o=>{console.error("Erro ao sair:",o)})});
