import{i as x,c as _,r as h,o as a,a as o,n as t,u as s,b as d,d as c,e as p,t as u,f as g,g as k,_ as v,h as y,F as b,j as w,k as S,l as j,w as $,m as B,p as C}from"./index-f108392c.js";const N={__name:"tip",props:{prefix:String,suffix:String,title:String,content:String,append:[String,Number]},setup(n){const i=n,e=x("$bem")("h-tip"),f=_(()=>i.prefix&&i.suffix?{margin:"0 20px"}:i.prefix?{"margin-left":"20px"}:i.suffix?{"margin-right":"20px"}:{});return(l,r)=>{const m=h("BaseIcon");return a(),o("div",{class:t(s(e)())},[n.prefix?(a(),o("div",{key:0,class:t(s(e)("prefix"))},[d(m,{name:n.prefix,class:t(s(e)("icon"))},null,8,["name","class"])],2)):c("",!0),p("div",{class:t(s(e)("info")),style:k(s(f))},[n.title?(a(),o("div",{key:0,class:t(s(e)("title"))},u(n.title),3)):c("",!0),n.content?(a(),o("div",{key:1,class:t(s(e)("content"))},u(n.content),3)):c("",!0),n.append?(a(),o("div",{key:2,class:t(s(e)("append"))},[g(l.$slots,"append")],2)):c("",!0)],6),n.suffix?(a(),o("div",{key:1,class:t(s(e)("suffix"))},[d(m,{name:n.suffix,class:t(s(e)("icon"))},null,8,["name","class"])],2)):c("",!0)],2)}}},V="_wrap_h528j_7",M="_tips_h528j_10",T="_up_h528j_15",z="_down_h528j_18",D="_month_h528j_21",E={wrap:V,tips:M,up:T,down:z,month:D},F={__name:"index",setup(n){const i=y([{prefix:"table",title:"Earnings",content:"$350.4"},{prefix:"dollar",title:"Spend this month",content:"$642.39"},{title:"Sales",content:"$574.34",append:"23"},{title:"Your balance",content:"$1000",suffix:"dollar"},{prefix:"tasks",title:"New Tasks",content:"154"},{prefix:"projects",title:"Total Project",content:"2935"}]);return(e,f)=>{const l=h("BaseCard");return a(),o("div",{class:t(e.dashboard.wrap)},[p("div",{class:t(e.dashboard.tips)},[(a(!0),o(b,null,w(i.value,r=>(a(),S(N,B({key:r.title},r),j({_:2},[r.append?{name:"append",fn:$(()=>[p("span",{class:t(r.append>0?e.dashboard.up:e.dashboard.down)},u(r.append>0?`+${r.append}%`:`-${r.append}%`),3),C(" since last month ")]),key:"0"}:void 0]),1040))),128))],2),d(l,{class:t(e.dashboard.month)},null,8,["class"])],2)}}},I={dashboard:E},L=v(F,[["__cssModules",I]]);export{L as default};