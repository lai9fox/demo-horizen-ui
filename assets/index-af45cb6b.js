import{d as f,c as g,a as w,r as h,o,b as i,n as e,u as a,e as c,f as m,g as r,t as u,h as b,i as S,j as v,w as _,_ as x,k,F as B,l as C,m as $,p as N,q as F}from"./index-9b687666.js";const T=f({__name:"tip",props:{prefix:String,suffix:String,title:String,content:String,append:[String,Number]},setup(n){const l=n,t=g("h-tip"),d=w(()=>l.prefix&&l.suffix?{margin:"0 20px"}:l.prefix?{"margin-left":"20px"}:l.suffix?{"margin-right":"20px"}:{});return(s,y)=>{const p=h("BaseIcon");return o(),i("div",{class:e(a(t)())},[n.prefix?(o(),i("div",{key:0,class:e(a(t)("prefix"))},[c(p,{name:n.prefix,class:e(a(t)("icon"))},null,8,["name","class"])],2)):m("",!0),r("div",{class:e(a(t)("info")),style:S(a(d))},[n.title?(o(),i("div",{key:0,class:e(a(t)("title"))},u(n.title),3)):m("",!0),n.content?(o(),i("div",{key:1,class:e(a(t)("content"))},u(n.content),3)):m("",!0),n.append?(o(),i("div",{key:2,class:e(a(t)("append"))},[b(s.$slots,"append")],2)):m("",!0)],6),n.suffix?(o(),i("div",{key:1,class:e(a(t)("suffix"))},[c(p,{name:n.suffix,class:e(a(t)("icon"))},null,8,["name","class"])],2)):m("",!0)],2)}}});const A=f({__name:"month",setup(n){const l=w(()=>({tooltip:{trigger:"axis",axisPointer:{type:"none"}},xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#A3AED0",fontSize:9},data:["SET","OCT","NOV","DEC","JAN","FEB"]},yAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1}},grid:{left:0,right:0,top:0,bottom:18},series:[{data:[820,932,901,934,1290,1330],type:"line",symbol:"none",smooth:!0,lineStyle:{width:4,cap:"round",color:"#4318FF"}},{data:[620,732,601,734,990,830],type:"line",symbol:"none",smooth:!0,lineStyle:{width:4,cap:"round",color:"#6AD2FF"}}]}));return(t,d)=>{const s=h("BaseIcon"),y=h("BaseChart"),p=h("BaseCard");return o(),v(p,{class:e(t.month.month)},{extra:_(()=>[r("div",{class:e(t.month["month-header"])},[r("div",{class:e(t.month["month-wrap"])},[c(s,{name:"canlader",class:e(t.month["month-canlader"])},null,8,["class"]),r("span",{class:e(t.month["month-text"])},"This month",2)],2),r("div",{class:e(t.month["month-wrap"])},[c(s,{name:"table",class:e(t.month["month-chart"])},null,8,["class"])],2)],2)]),default:_(()=>[r("div",{class:e(t.month["month-body"])},[r("div",{class:e(t.month["month-summary"])},null,2),c(y,{class:e(t.month["month-echart"]),chartOption:a(l)},null,8,["class","chartOption"])],2)]),_:1},8,["class"])}}}),E="_month_1wypv_7",M={month:E,"month-header":"_month-header_1wypv_11","month-wrap":"_month-wrap_1wypv_16","month-canlader":"_month-canlader_1wypv_22","month-text":"_month-text_1wypv_29","month-chart":"_month-chart_1wypv_34","month-body":"_month-body_1wypv_41","month-summary":"_month-summary_1wypv_46","month-echart":"_month-echart_1wypv_50"},q={month:M},D=x(A,[["__cssModules",q]]),L=f({__name:"index",setup(n){const l=k([{prefix:"table",title:"Earnings",content:"$350.4"},{prefix:"dollar",title:"Spend this month",content:"$642.39"},{title:"Sales",content:"$574.34",append:"23"},{title:"Your balance",content:"$1000",suffix:"dollar"},{prefix:"tasks",title:"New Tasks",content:"154"},{prefix:"projects",title:"Total Project",content:"2935"}]);return(t,d)=>(o(),i("div",{class:e(t.dashboard.wrap)},[r("div",{class:e(t.dashboard.tips)},[(o(!0),i(B,null,C(l.value,s=>(o(),v(T,F({key:s.title},s),$({_:2},[s.append?{name:"append",fn:_(()=>[r("span",{class:e(s.append>0?t.dashboard.up:t.dashboard.down)},u(s.append>0?`+${s.append}%`:`-${s.append}%`),3),N(" since last month ")]),key:"0"}:void 0]),1040))),128))],2),c(D)],2))}}),O="_wrap_1riwq_7",V="_tips_1riwq_10",I="_up_1riwq_15",j="_down_1riwq_18",z={wrap:O,tips:V,up:I,down:j},P={dashboard:z},Y=x(L,[["__cssModules",P]]);export{Y as default};
