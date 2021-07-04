(this.webpackJsonpvisualisingcovid=this.webpackJsonpvisualisingcovid||[]).push([[0],{231:function(e,t,n){},242:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(25),o=n.n(i),c=(n(231),n(41)),s=n(12),l=n(381),u=n(375),h=n(357),f=n(345),d=n(355),j=n(372),m=n(380),b=n(110),p=n.n(b),x=n(371),O=n(369),g=n(370),y=n(180),k=n(383),Y=n(378),v=n(376),M=n(349),w=n(35),C="#1f78b4",D="#b2df8a",R="#fb9a99",S="#A62190",T="#4760DE",N="#000000",L=["Intro","RawYearComparison","YoYTotal","YoYMarketRegion","Calendar"],E={0:"Intro",1:"RawYearComparison",2:"YoYTotal",3:"YoYMarketRegion",4:"Calendar"},I={Intro:3,RawYearComparison:2,YoYTotal:3,YoYMarketRegion:2,Calendar:1},A={Intro:"Introduction",RawYearComparison:"Consumption Between Years",YoYTotal:"Year on Year Change",YoYMarketRegion:"Regional Changes",YoYMarket:"Market Type Changes",Calendar:"Day Changes"},F={January:0,February:1,March:2,April:3,May:4,June:5,July:6,August:7,September:8,October:9,November:10,December:11},V=n(21),W=n.n(V),B=n(51),P=n(52);function z(){return(z=Object(B.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(P.a)("".concat("","/YoYTotal.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,F[e.Month],1),YoYChange:e.ConsumptionYoY};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=Object(B.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(P.a)("".concat("","/YoYMarket.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,F[e.Month],1),YoYChange:e["YoY Consumption Change"],Market:e["Market Type"]};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(B.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(P.a)("".concat("","/YoYRegion.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,F[e.Month],1),YoYChange:e["YoY Consumption Change"],Region:e.Region};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(B.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(P.a)("".concat("","/YoYRegionMarket.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,F[e.Month],1),YoYChange:e["YoY Consumption Change"],Market:e["Market Type"],Region:e.Region};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(B.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(P.a)("".concat("","/RawConsumption.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,F[e.Month],1),Consumption:e.Consumption};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(B.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(P.a)("".concat("","/RawConsumptionMarkets.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,F[e.Month],1),Consumption:e.Consumption,Market:e["Market Type"]};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(B.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(P.a)("".concat("","/YoyByDay.csv")).then((function(e){var n=[];e.forEach((function(e){var t=e.Date.split("-"),a={Date:new Date(t[0],t[1]-1,t[2]),Consumption:Math.round(e.Consumption)};n.push(a)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(B.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(P.a)("".concat("","/KeyDateData.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Date:new Date(e["Earliest Date"]),DayName:e.Event,Consumption:e["Consumption (kWh)"],Year:parseInt(e["Calendar Year"]),Market:e["Market Type"]};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=n(13);function X(e){var t=Object.keys(E).find((function(t){return E[t]===e}));return t?+t:1}function U(e,t,n){if("YoYTotal"===t){if(n){if(1===e)return"All three markets were mostly moving in sync prior to COVID lockdowns.";if(2===e)return"Statewide restrictions saw most businesses and factories close. There was a shift to working and schooling from home where possible";if(3===e)return"The markets reached parity with each other again two months after the strict lockdown ended."}else if(!n){if(1===e)return"Across the electricity network there is a net consumption decrease of around -4% from the previous year. This is a significant change in the context of electricity demand. especially as 2020 was colder than 2019.";if(2===e)return"The first lockdown saw an extreme low in April, while the second lockdown sees a similar low in August.";if(3===e)return"We can see a slow returs to normal as restrictions ease over time. This is in contrast to the immediate changes when restrictions were implemented at short notice."}}else if("YoYMarketRegion"===t){if(n){if(1===e)return"During the first lockdown the similar restrictions between regions saw the different market types following similar growth or decline.";if(2===e)return"During the second lockdown regional businesses remained open unlike their metropolitan counterparts. Tourism however was virtually non-existant during this period in Regional Victoria."}else if(!n){if(1===e)return"Lockdown restrictions saw Victoria split into two distinct regions with differing rules.";if(2===e)return"Regional Victoria had significantly fewer restrictions during Lockdown 2."}}else if("RawYearComparison"===t){if(n){if(1===e)return"From this we can see that Residential consumption is far more sensitive to temperature than business or industrial consumption. The latter two market types remain relativley stable throughout the year.";if(2===e)return"It's a little tough to interpret the change between 2019 and 2020 when viewed like this. Let's look only at the difference between the years on the next visual."}else if(!n){if(1===e)return"In a typical year Victoria generates approximately 26 million Megawatt-Hours (MWh) of electricity.";if(2===e)return"Generation is distributed across the year with peaks occuring during the hottest and coldest months."}}else if("Calendar"===t){if(1===e)return"This calendar shows the consumption each day over a two year period. Click on some of the public holidays below to investigate the year on year change in a little more detail.";if(2===e)return"Public holidays during the lockdown period exhibited significantly more overall consumption. Nearly all of which is from the residential sector."}return""}function $(e,t,n){if("RawYearComparison"===e)if(n){if(n){if(1===t)return Z.a.topRightEdge;if(2===t)return Z.a.topLeftEdge}}else{if(1===t)return Z.a.bottomAutoEdge;if(2===t)return Z.a.bottomRightEdge}else if("YoYTotal"===e)if(n){if(n){if(1===t)return Z.a.topCenter;if(2===t)return Z.a.topRightEdge;if(3===t)return Z.a.leftCenter}}else{if(1===t)return Z.a.topRightEdge;if(2===t)return Z.a.bottomCenter;if(3===t)return Z.a.bottomLeftEdge}else if("YoYMarketRegion"===e)if(n){if(n){if(1===t)return Z.a.topCenter;if(2===t)return Z.a.topCenter}}else{if(1===t)return Z.a.topLeftEdge;if(2===t)return Z.a.bottomLeftEdge}else if("Calendar"===e){if(1===t)return Z.a.rightCenter;if(2===t)return Z.a.rightCenter}return Z.a.topCenter}function ee(e,t,n){var a="70",r="50";return"RawYearComparison"===e?n?n&&(1===t?(a="34",r="57"):2===t&&(a="74",r="57")):1===t?(a="34",r="35"):2===t&&(a="68",r="40"):"YoYTotal"===e?n?n&&(1===t?(a="30",r="48"):2===t?(a="40",r="63"):3===t&&(a="85",r="57")):1===t?(a="30.5",r="50"):2===t?(a="36",r="65"):3===t&&(a="77",r="64"):"YoYMarketRegion"===e?n?n&&(1===t?(a="30",r="46"):2===t&&(a="75",r="59")):1===t?(a="29",r="47"):2===t&&(a="75",r="65"):"Calendar"===e&&(1===t?(a="75",r="30"):2===t&&(a="75",r="60")),{position:"absolute",left:"".concat(a,"vw"),top:"".concat(r,"vh")}}n(242);var te=n(347),ne=n(288),ae=n(348),re=n(350),ie=n(390),oe=n(167),ce=n(168),se=n(341),le=n(382),ue=n(386),he=n(351),fe=n(152),de=n(153),je=n(148),me=n(151),be=n(389),pe=n(43),xe=n.n(pe),Oe=n(2);function ge(e){var t=18,n=Object(a.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1],c=Object(a.useState)(""),l=Object(s.a)(c,2),u=l[0],h=l[1],d=Object(a.useState)([]),j=Object(s.a)(d,2),b=j[0],p=j[1],x=Object(a.useState)(),O=Object(s.a)(x,2),g=O[0],k=O[1],v=Object(a.useState)(void 0),M=Object(s.a)(v,2),w=M[0],N=M[1],L=Object(a.useState)(void 0),E=Object(s.a)(L,2),I=E[0],A=E[1],F=30,V=500,W=[50,500],B=[470,F];Object(se.a)({domain:["Residential","Commercial","Large"],range:["#6c5efb","#c998ff","#a44afe"]});function P(e){var n=e.getDay(),a=fe.b.count(Object(de.a)(e),e),r=new Date(e.getFullYear(),e.getMonth()+1,0),i=r.getDay(),o=fe.b.count(Object(de.a)(r),r);return"\n            M".concat((a+1)*t,",").concat(n*t,"\n            H").concat(a*t," V").concat(126,"\n            H").concat(o*t," V").concat((i+1)*t,"\n            H").concat((o+1)*t," V0\n            H").concat((a+1)*t,"Z\n        ")}var z=Object(be.a)("%Y-%m-%d"),K=(function(){var t=[];for(var n in e.KeyDateData)t.push(z(e.KeyDateData[n].Date))}(),Object(le.a)({domain:[65e3,15e4],range:["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"]})),H=new Date("2020-03-20"),J=new Date("2020-05-10"),G=new Date("2020-07-08"),_=new Date("2020-11-08"),q=["Residential","Commercial","Large"];var Q={display:"flex",flexDirection:"column",alignItems:"center"};return Object(Oe.jsx)("div",{children:Object(Oe.jsxs)(f.a,{container:!0,children:[[2019,2020].map((function(n){var a=new Date(n,0,1),r=new Date(n+1,0,1),i=Object(je.a)(a,r),o=Object(me.b)(a,r);return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(f.a,{item:!0,xs:12,children:Object(Oe.jsx)("svg",{width:e.width,height:150,children:Object(Oe.jsxs)(y.a,{transform:"translate(".concat((e.width-1260)/2,",0)"),children:[Object(Oe.jsx)("text",{transform:"translate(-6,".concat(63,")rotate(-90)"),fontFamily:"sans-serif",fontSize:15,textAnchor:"middle",children:n}),Object(Oe.jsx)(y.a,{fill:"none",stroke:"#ccc",children:i.map((function(n){var a=z(n),r=e.data.filter((function(e){return a===z(e.Date)}))[0].Consumption,i=fe.b.count(Object(de.a)(n),n)*t,o=n.getDay()*t,c="#fffff",s=1,l="";return n>=H&&n<=J?(c=T,s=2,l=" (Lockdown 1)"):n>=G&&n<=_&&(c=S,s=2,l=" (Lockdown 2)"),Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(m.a,{title:"".concat(xe()(a).format("dddd D MMMM YYYY"),": ").concat(r," MWh ").concat(l),children:Object(Oe.jsx)("rect",{fill:K(r),width:t,height:t,x:i,y:o,stroke:c,strokeWidth:s},"day-rect-".concat(a))},"".concat(a,"-Tooltip-box"))})}))}),Object(Oe.jsx)(y.a,{fill:"none",stroke:"#000",strokeWidth:4,children:o.map((function(e){return Object(Oe.jsx)("path",{d:P(e)},"month-path-".concat(z(e),"-").concat(n))}))})]})},"year-".concat(n))})})})),Object(Oe.jsx)(f.a,{item:!0,xs:12,children:Object(Oe.jsx)(te.a,{size:"small",children:e.KeyDateData.map((function(t){if("Residential"===t.Market&&2020===t.Date.getFullYear())return Object(Oe.jsx)(ne.a,{color:"primary",onClick:function(n){!function(t){o(t),""===u&&e.setStoryLim(2);var n=e.KeyDateData.filter((function(e){return z(e.Date)===t})),a=n[0].DayName;h(a);var r=e.KeyDateData.filter((function(e){return e.DayName===a&&2019===e.Year}));k(n.concat(r)[3].Date),p(n.concat(r)),N((function(){return Object(ue.a)({domain:q,range:W})})),A((function(){return Object(Y.a)({domain:[0,5e4],nice:!0,range:B})}))}(z(t.Date))},children:t.DayName})}))})}),""!==i&&Object(Oe.jsxs)(f.a,{item:!0,xs:4,style:Q,children:[Object(Oe.jsxs)("text",{children:[u," 2019 - ",xe()(g).format("DD MMMM")]}),Object(Oe.jsxs)("svg",{width:500,height:V,id:"Calendar2019Graphs",children:[Object(Oe.jsx)(ae.a,{top:470,scale:w}),Object(Oe.jsx)(re.a,{left:50,scale:I}),Object(Oe.jsx)(y.a,{id:"2019Graph",children:b.filter((function(e){return 2019===e.Year})).map((function(e){var t=V-I(e.Consumption),n=w(e.Market),a=V-t,r=C;return"Commercial"===e.Market?r=D:"Residential"===e.Market?r=C:"Large"===e.Market&&(r=R),Object(Oe.jsx)(he.a,{x:n+50,y:a-F,width:50,height:t,fill:r},"bar-".concat(e.Date,"-").concat(e.Market,"-outline"))}))})]})]}),""!==i&&Object(Oe.jsxs)(f.a,{item:!0,xs:4,style:Q,children:[Object(Oe.jsxs)("text",{children:[u," 2020 - ",xe()(i).format("DD MMMM")]}),Object(Oe.jsxs)("svg",{width:500,height:V,id:"Calendar2020Graphs",children:[Object(Oe.jsx)(ae.a,{top:470,scale:w}),Object(Oe.jsx)(re.a,{left:50,scale:I}),Object(Oe.jsx)(y.a,{id:"2019Graph",children:b.filter((function(e){return 2020===e.Year})).map((function(e){var t=V-I(e.Consumption),n=w(e.Market),a=V-t,r=C;return"Commercial"===e.Market?r=D:"Residential"===e.Market?r=C:"Large"===e.Market&&(r=R),Object(Oe.jsx)(he.a,{x:n+50,y:a-F,width:50,height:t,fill:r},"bar-".concat(e.Date,"-").concat(e.Market,"-outline"))}))})]})]}),Object(Oe.jsxs)(y.a,{id:"CalLegend",style:{position:"fixed",right:"10%"},children:[Object(Oe.jsx)("span",{children:"Daily Consumption (MWh)"}),Object(Oe.jsx)(ie.a,{scale:K,children:function(e){return e.map((function(e,t){return Object(Oe.jsxs)(oe.a,{children:[Object(Oe.jsx)("svg",{width:15,height:15,style:{margin:"2px 0"},children:Object(Oe.jsx)("circle",{fill:e.value,r:7.5,cx:7.5,cy:7.5})}),Object(Oe.jsxs)(ce.a,{align:"left",margin:"0 4px",children:[0===e.index&&"Below ".concat(e.extent[1]),0!==e.index&&4!==e.index&&"".concat(Math.round(e.extent[0])," to ").concat(Math.round(e.extent[1])),4===e.index&&"Above ".concat(e.extent[0])]})]},"legend-".concat(t))}))}})]})]})})}var ye=n(11),ke=15,Ye=Object(ye.a)((function(e){return{tooltip:{fontSize:"0.8em"}}}))(m.a);function ve(e,t,n,a,r,i){return Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsx)(ae.a,{top:e,scale:a,numTicks:23,tickFormat:function(e){return e},children:function(e){var t=(e.axisToPoint.x-e.axisFromPoint.x)/2;return Object(Oe.jsxs)("g",{className:"my-custom-bottom-axis",children:[Object(Oe.jsx)(M.a,{from:e.axisFromPoint,to:e.axisToPoint,stroke:"#000000"}),e.ticks.map((function(e,t){if(24!==t){var n=e.to.x,a=e.to.y+15;return Object(Oe.jsxs)(y.a,{className:"vx-axis-tick",children:[Object(Oe.jsx)(M.a,{from:e.from,to:e.to,stroke:"#000000"}),Object(Oe.jsx)("text",{transform:"translate(".concat(n,", ").concat(a,")"),fontSize:15,textAnchor:"middle",fill:"2019"===xe()(e.formattedValue).format("Y")?"#4760DE":"#A62190",children:xe()(e.formattedValue).format("MMM")})]},"vx-tick-".concat(e.value,"-").concat(t))}})),Object(Oe.jsx)("text",{textAnchor:"middle",transform:"translate(".concat(t,", 50)"),fontSize:"8",children:e.label})]})}}),Object(Oe.jsx)(ae.a,{top:e+30,scale:Object(ue.a)({domain:["2019","2020"],range:[t,n]}),numTicks:4,hideAxisLine:!0,tickFormat:function(e){return xe()(e).format("Y")},children:function(e){var t=(e.axisToPoint.x-e.axisFromPoint.x)/2;return Object(Oe.jsxs)("g",{className:"my-custom-bottom-axis",children:[e.ticks.map((function(e,t){var n=e.to.x,a=e.to.y+10;return Object(Oe.jsx)(y.a,{className:"vx-axis-tick",children:Object(Oe.jsx)("text",{transform:"translate(".concat(n,", ").concat(a,")"),fontSize:10,textAnchor:"middle",fill:"2019"===e.formattedValue?T:S,children:e.formattedValue})},"vx-tick-".concat(e.value,"-").concat(t))})),Object(Oe.jsx)("text",{textAnchor:"middle",transform:"translate(".concat(t,", 50)"),fontSize:"8",children:e.label})]})}}),Object(Oe.jsx)(re.a,{left:t,scale:r,label:i,labelClassName:"axisLabelTY"})]})}function Me(e,t,n,a,r,i){return Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsx)(ae.a,{top:e,scale:a,numTicks:12,tickFormat:function(e){return e},children:function(e){var t=(e.axisToPoint.x-e.axisFromPoint.x)/2;return Object(Oe.jsxs)("g",{className:"my-custom-bottom-axis",children:[Object(Oe.jsx)(M.a,{from:e.axisFromPoint,to:e.axisToPoint,stroke:"#000000"}),e.ticks.map((function(e,t){return function(e){var t="Prior to Lockdown",n=N,a=xe()(e.formattedValue).format("MMMM");["April","May"].includes(a)?(t="Lockdown 1",n=T):["July","August","September","October"].includes(a)?(t="Lockdown 2",n=S):["January","February"].includes(a)?(t="Prior to Lockdown",n=N):"March"===a?(t="Lockdown begins in Third Week",n=T):"June"===a?(t="Eased Restrictions",n=N):["November","December"].includes(a)&&(t="Easing Restrictions Over Time",n=N);return Object(Oe.jsxs)(y.a,{children:[Object(Oe.jsx)(M.a,{from:e.from,to:e.to,stroke:"#000000"}),Object(Oe.jsx)(Ye,{title:t,className:"largerTooltip",children:Object(Oe.jsx)("text",{transform:"translate(".concat(e.to.x,", ").concat(e.to.y+ke,")"),fontSize:ke,textAnchor:"middle",fill:n,cursor:"pointer",children:xe()(e.formattedValue).format("MMMM")})})]},"vx-tick-".concat(e.value))}(e)})),Object(Oe.jsx)("text",{textAnchor:"middle",transform:"translate(".concat(t,", 50)"),fontSize:"8",children:e.label})]})}}),Object(Oe.jsx)(ae.a,{top:e+30,scale:Object(k.a)({domain:[new Date("2019-01-01"),new Date("2020-12-01")],nice:!0,range:[t,n]}),numTicks:1,hideAxisLine:!0,tickFormat:function(e){return xe()(e).format("Y")},hideTicks:!0}),Object(Oe.jsx)(re.a,{left:t,scale:r,label:i,labelClassName:"axisLabelOY"})]})}function we(){return Object(Oe.jsx)("div",{style:{height:"90vh",width:"100%",display:"flex",flexDirection:"column"},children:Object(Oe.jsx)("div",{dangerouslySetInnerHTML:{__html:"<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1n-8-FkqEqL-hZbaXNfr5ApCmQKAhRsdSjKSMdV5JNKQ&font=Default&lang=en&timenav_position=top&initial_zoom=1&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>"}})})}var Ce=n(352),De=n(171),Re=n.n(De),Se=n(169),Te=n.n(Se),Ne=n(172),Le=n.n(Ne),Ee=n(170),Ie=n.n(Ee),Ae=n(353);function Fe(e){function t(e){return"RawYearComparison"===e||"YoYTotal"===e?Object(se.a)({domain:["Residential","Business","Industrial"],range:[C,D,R]}):"YoYMarketRegion"===e?Object(se.a)({domain:["Residential Metropolitan","Residential Regional","Business Metropolitan","Business Regional","Industrial Metropolitan","Industrial Regional"],range:[C,C,D,D,R,R]}):void 0}function n(e,t,n){return"YoYTotal"!==e&&"RawYearComparison"!==e?n.includes("Regional")?Object(Oe.jsxs)("svg",{width:25,height:25,children:[" ",Object(Oe.jsx)("line",{x1:"0",y1:"12",x2:"25",y2:"12",stroke:t,"stroke-dasharray":"4"})," "]}):Object(Oe.jsxs)("svg",{width:25,height:25,children:[" ",Object(Oe.jsx)("line",{x1:"0",y1:"12",x2:"25",y2:"12",stroke:t})," "]}):"Residential"===n?Object(Oe.jsx)(Te.a,{htmlColor:t,fontSize:"large"}):"Business"===n?Object(Oe.jsx)(Ie.a,{htmlColor:t,fontSize:"large"}):"Industrial"===n?Object(Oe.jsx)(Re.a,{htmlColor:t,fontSize:"large"}):"Overall"===n?Object(Oe.jsx)(Le.a,{htmlColor:t,fontSize:"large"}):void 0}return t(e.currStep)&&"Intro"!==e.currStep?e.marketsActive?Object(Oe.jsx)(Ce.a,{style:{zIndex:1,position:"fixed",top:"15vh",right:"10vw"},children:Object(Oe.jsx)(Ae.a,{scale:t(e.currStep),labelFormat:function(e){return"".concat(e)},children:function(t){return Object(Oe.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:t.map((function(t,a){return Object(Oe.jsxs)(oe.a,{margin:"5px 5px",children:[n(e.currStep,t.value,t.text),Object(Oe.jsxs)(ce.a,{align:"left",margin:"0 0 0 4px",children:[" ",t.text," "]})]},"legend-quantile-".concat(a))}))})}})}):Object(Oe.jsx)(Ce.a,{style:{zIndex:1,position:"fixed",top:"15vh",right:"10vw"},children:Object(Oe.jsx)(ne.a,{variant:"contained",color:"primary",onClick:function(t){e.updateFilters()},style:{marginTop:"5%"},children:" Show Market Types "})}):null}var Ve=n(356),We=n(354),Be=n(385),Pe=n(391);function ze(e){var t=Object(a.useState)(e.currStep),n=Object(s.a)(t,2),r=n[0],i=n[1],o=L;Object(a.useEffect)((function(){e.currStep!==r&&i(e.currStep)}));return Object(Oe.jsxs)(y.a,{id:"SideBar",style:{display:"flex",flexDirection:"column"},children:[Object(Oe.jsx)(y.a,{id:"Stepper",children:Object(Oe.jsx)(Pe.a,{activeStep:X(r),orientation:"vertical",children:o.map((function(t,n){return Object(Oe.jsx)(We.a,{style:{cursor:"pointer"},children:Object(Oe.jsx)(Be.a,{onClick:function(n){var a;i(a=t),e.updateStep(a)},children:Object(Oe.jsx)(d.a,{variant:"button",children:A[t]})})},t)}))})}),Object(Oe.jsx)(Ve.a,{})]})}function Ke(){var e=Object(a.useState)(void 0),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(void 0),b=Object(s.a)(o,2),S=b[0],T=b[1],L=Object(a.useState)("YoYTotal"),A=Object(s.a)(L,2),F=A[0],V=A[1],W=Object(a.useState)(""),B=Object(s.a)(W,2),P=B[0],Z=B[1],te=Object(a.useState)([]),ne=Object(s.a)(te,2),ae=ne[0],re=ne[1],ie=Object(a.useState)([]),oe=Object(s.a)(ie,2),ce=oe[0],se=oe[1],le=Object(a.useState)([]),ue=Object(s.a)(le,2),he=ue[0],fe=ue[1],de=Object(a.useState)([]),je=Object(s.a)(de,2),me=je[0],be=je[1],pe=Object(a.useState)([]),xe=Object(s.a)(pe,2),ye=xe[0],ke=xe[1],Ye=Object(a.useState)([]),Ce=Object(s.a)(Ye,2),De=Ce[0],Re=Ce[1],Se=Object(a.useState)([]),Te=Object(s.a)(Se,2),Ne=Te[0],Le=Te[1],Ee=Object(a.useState)([]),Ie=Object(s.a)(Ee,2),Ae=Ie[0],Ve=Ie[1],We=Object(a.useState)(!1),Be=Object(s.a)(We,2),Pe=Be[0],Ke=Be[1],He=Object(a.useState)([]),Je=Object(s.a)(He,2),Ge=Je[0],_e=Je[1],qe=.9*document.documentElement.clientHeight,Qe=.8*document.documentElement.clientWidth,Ze=.8*document.documentElement.clientHeight,Xe=.75*document.documentElement.clientWidth,Ue=.05*document.documentElement.clientWidth,$e=Object(a.useState)(1),et=Object(s.a)($e,2),tt=et[0],nt=et[1],at=Object(a.useState)(I.Intro),rt=Object(s.a)(at,2),it=rt[0],ot=rt[1],ct=Object(a.useState)("Total Consumption"),st=Object(s.a)(ct,2),lt=st[0],ut=st[1],ht=r.a.useRef(null),ft=Object(h.a)(!1),dt=Object(s.a)(ft,2),jt=dt[0],mt=dt[1],bt=mt.setFalse,pt=mt.setTrue,xt=r.a.useRef(null),Ot=Object(h.a)(!1),gt=Object(s.a)(Ot,2),yt=gt[0],kt=gt[1],Yt=kt.setFalse,vt=kt.setTrue,Mt=r.a.useRef(null),wt=Object(h.a)(!1),Ct=Object(s.a)(wt,2),Dt=Ct[0],Rt=Ct[1],St=Rt.setFalse,Tt=Rt.setTrue;function Nt(){"Calendar"!==F&&Ft(E[X(F)+1])}function Lt(e){return{directionalHint:$(F,e,Ge.includes("Markets")),doNotLayer:!1}}function Et(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?_e([]):(Ke(!0),_e([e]),ut(Vt(F,!0)))}function It(){bt(),Yt(),St(),Et("Markets")}function At(e,t,n,a){i((function(){return Object(k.a)({domain:[e,t],nice:!0,range:[Ue,Xe]})})),T((function(){return Object(Y.a)({domain:[a,n],nice:!0,range:[50,Ze]})}))}function Ft(e){if(V(e),bt(),Yt(),St(),Ke(!0),Et("2019",!1),ut(Vt(e)),ot(I[e]),"RawYearComparison"===e)At(Math.min.apply(Math,Object(c.a)(ae.map((function(e){return e.Month.valueOf()})))),Math.max.apply(Math,Object(c.a)(ae.map((function(e){return e.Month.valueOf()})))),0,Math.max.apply(Math,Object(c.a)(ae.map((function(e){return e.Consumption}))))),Z("Demand (MWh)");else if("YoYTotal"===e){At(Math.min.apply(Math,Object(c.a)(me.map((function(e){return e.Month.valueOf()})))),Math.max.apply(Math,Object(c.a)(me.map((function(e){return e.Month.valueOf()})))),Math.min.apply(Math,Object(c.a)(me.map((function(e){return e.YoYChange})))),Math.max.apply(Math,Object(c.a)(me.map((function(e){return e.YoYChange}))))),Z("Year on Year Change (%)")}else if("YoYMarketRegion"===e){var t=Math.min.apply(Math,Object(c.a)(De.map((function(e){return e.Month.valueOf()})))),n=Math.max.apply(Math,Object(c.a)(De.map((function(e){return e.Month.valueOf()})))),a=Math.min.apply(Math,Object(c.a)(De.map((function(e){return e.YoYChange})))),r=Math.max.apply(Math,Object(c.a)(De.map((function(e){return e.YoYChange}))));Z("Year on Year Change (%)"),At(t,n,a,r)}e!==F&&nt(1)}function Vt(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"YoYTotal"===e?t?"Electricity Demand across Victoria by Market Type":"Electricity Demand across Victoria":"RawYearComparison"===e?t?"Year on Year Change in Demand by Market Type":"Year on Year Change in Demand":"YoYMarketRegion"===e?t?"Year on Year Change in Demand by Region":"Year on Year Change in Demand by Region and Market Type":""}Object(a.useEffect)((function(){0===ae.length?(console.log("Loading Data"),function(e){G.apply(this,arguments)}(re),function(e){_.apply(this,arguments)}(se),function(e){z.apply(this,arguments)}(fe),function(e){K.apply(this,arguments)}(be),function(e){H.apply(this,arguments)}(ke),function(e){J.apply(this,arguments)}(Re),function(e){q.apply(this,arguments)}(Le),function(e){Q.apply(this,arguments)}(Ve)):void 0===n&&1===tt&&"Intro"!==F&&(console.log("Data Loaded"),Ft("Intro")),!jt&&Pe&&(pt(),vt(),Tt(),Ke(!1))}));var Wt=function(e,t){return{WebkitTransform:"translate3d(".concat(e,"px, 0, 0)"),transform:"translate3d(".concat(e,"px, 0, 0)"),visibility:t?"visible":"hidden"}},Bt=Ge.includes("Markets")?0:1;return Object(Oe.jsxs)(f.a,{container:!0,children:[Object(Oe.jsxs)(y.a,{id:"anchors",children:[Object(Oe.jsx)("span",{id:"InfoAnchor1",style:ee(F,1,Ge.includes("Markets")),ref:ht}),Object(Oe.jsx)("span",{id:"InfoAnchor2",style:ee(F,2,Ge.includes("Markets")),ref:xt}),Object(Oe.jsx)("span",{id:"InfoAnchor3",style:ee(F,3,Ge.includes("Markets")),ref:Mt})]}),Object(Oe.jsx)(y.a,{id:"LegendContainer",children:Object(Oe.jsx)(Fe,{currStep:F,marketsActive:Ge.includes("Markets"),updateFilters:It})}),Object(Oe.jsx)(y.a,{id:"infoBoxes",children:"Intro"!==F&&Object(Oe.jsxs)(Oe.Fragment,{children:[it>=1&&jt&&Object(Oe.jsx)(l.a,{target:ht.current,positioningContainerProps:Lt(1),delayBeforeCoachmarkAnimation:1e3,children:Object(Oe.jsx)(u.a,{onDismiss:bt,hasCloseButton:!0,children:U(1,F,Ge.includes("Markets"))})}),it>=2&&yt&&Object(Oe.jsx)(l.a,{target:xt.current,positioningContainerProps:Lt(2),delayBeforeCoachmarkAnimation:1e3,children:Object(Oe.jsx)(u.a,{onDismiss:Yt,hasCloseButton:!0,children:U(2,F,Ge.includes("Markets"))})}),it>=3&&Dt&&Object(Oe.jsx)(l.a,{target:Mt.current,positioningContainerProps:Lt(3),delayBeforeCoachmarkAnimation:1e3,children:Object(Oe.jsx)(u.a,{onDismiss:St,hasCloseButton:!0,children:U(3,F,Ge.includes("Markets"))})})]})}),Object(Oe.jsx)(f.a,{item:!0,xs:2,style:{borderRight:"1px solid rgba(0, 0, 0, 0.05)"},children:Object(Oe.jsx)(ze,{currStep:F,updateStep:Ft,updateFilters:It})}),Object(Oe.jsxs)(f.a,{item:!0,xs:10,children:["Intro"===F&&Object(Oe.jsx)(we,{}),"Intro"!==F&&"Calendar"!==F&&n&&Object(Oe.jsxs)(y.a,{id:"CanvasContainer",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(Oe.jsx)(d.a,{variant:"h6",children:lt}),Object(Oe.jsxs)("svg",{height:qe,width:Qe,id:"Canvas",children:[Object(Oe.jsxs)(y.a,{id:"Axis",children:["RawYearComparison"!==F?Me(Ze,Ue,Xe,n,S,P):ve(Ze,Ue,Xe,n,S,P),Object(Oe.jsx)(O.a,{scale:S,width:Xe-Ue,height:Ze,stroke:"#e0e0e0",left:Ue}),Object(Oe.jsx)(g.a,{scale:n,width:Xe,height:Ze-50,stroke:"#e0e0e0",top:50})]}),Object(Oe.jsxs)(y.a,{id:"TotalConsumpion",children:[Object(Oe.jsx)(w.Motion,{style:{motionVar:Object(w.spring)("RawYearComparison"===F?0:400)},children:function(e){var t=e.motionVar;return Object(Oe.jsx)(v.a,{data:ae,curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.Consumption)},stroke:N,strokeWidth:1.5,style:Wt(t,"RawYearComparison"===F),className:"lineStyle"})}}),Object(Oe.jsx)(w.Motion,{style:{motionVar:Object(w.spring)("RawYearComparison"===F&&Ge.includes("Markets")?1:0)},children:function(e){var t=e.motionVar;return Object(Oe.jsxs)(y.a,{id:"RawYearMarkets",children:[Object(Oe.jsx)(v.a,{data:ce.filter((function(e){return"Commercial"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.Consumption)},stroke:D,strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Oe.jsx)(v.a,{data:ce.filter((function(e){return"Large"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.Consumption)},stroke:R,strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Oe.jsx)(v.a,{data:ce.filter((function(e){return"Residential"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.Consumption)},stroke:C,strokeWidth:1.5,opacity:t,className:"lineStyle"})]})}})]}),Object(Oe.jsxs)(y.a,{id:"YoYChange",children:[Object(Oe.jsx)(w.Motion,{style:{motionVar:Object(w.spring)("YoYTotal"===F?0:400)},children:function(e){var t=e.motionVar;return Object(Oe.jsxs)(y.a,{children:[Object(Oe.jsx)(M.a,{from:{x:n(new Date(2020,0,1)),y:S(0)},to:{x:Xe,y:S(0)},stroke:N,strokeWidth:1.5,style:Wt(t,"YoYTotal"===F)}),Object(Oe.jsx)(v.a,{data:he,curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:N,strokeWidth:1.5,style:Wt(t,"YoYTotal"===F),className:"lineStyle",opacity:Bt})]})}}),Object(Oe.jsx)(w.Motion,{style:{motionVar:Object(w.spring)("YoYTotal"===F&&Ge.includes("Markets")?1:0)},children:function(e){var t=e.motionVar;return Object(Oe.jsxs)(y.a,{id:"YoYChangeMarkets",children:[Object(Oe.jsx)(v.a,{data:me.filter((function(e){return"Commercial"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:D,strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Oe.jsx)(v.a,{data:me.filter((function(e){return"Large"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:R,strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Oe.jsx)(v.a,{data:me.filter((function(e){return"Residential"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:C,strokeWidth:1.5,opacity:t,className:"lineStyle"})]})}})]}),Object(Oe.jsxs)(y.a,{id:"YoYRegionChange",children:[Object(Oe.jsx)(w.Motion,{style:{motionVar:Object(w.spring)("YoYMarketRegion"===F?0:400)},children:function(e){var t=e.motionVar;return Object(Oe.jsxs)(y.a,{id:"YoYChangeRegion",children:[Object(Oe.jsx)(M.a,{from:{x:n(new Date(2020,0,1)),y:S(0)},to:{x:Xe,y:S(0)},stroke:N,strokeWidth:1.5,style:Wt(t,"YoYMarketRegion"===F)}),Object(Oe.jsx)(v.a,{data:ye.filter((function(e){return"Regional"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:N,strokeWidth:1.5,strokeDasharray:"5, 3",style:Wt(t,"YoYMarketRegion"===F),className:"lineStyle",opacity:Bt}),Object(Oe.jsx)(v.a,{data:ye.filter((function(e){return"Metropolitan"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:N,strokeWidth:1.5,style:Wt(t,"YoYMarketRegion"===F),className:"lineStyle",opacity:Bt})]})}}),Object(Oe.jsx)(w.Motion,{style:{motionVar:Object(w.spring)("YoYMarketRegion"===F&&Ge.includes("Markets")?1:0)},children:function(e){var t=e.motionVar;return Object(Oe.jsxs)(y.a,{id:"YoyChangeMarketRegions",children:[Object(Oe.jsx)(v.a,{data:De.filter((function(e){return"Commercial"===e.Market&&"Metropolitan"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:D,strokeWidth:1.5,className:"lineStyle",opacity:t}),Object(Oe.jsx)(v.a,{data:De.filter((function(e){return"Large"===e.Market&&"Metropolitan"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:R,strokeWidth:1.5,className:"lineStyle",opacity:t}),Object(Oe.jsx)(v.a,{data:De.filter((function(e){return"Residential"===e.Market&&"Metropolitan"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:C,strokeWidth:1.5,className:"lineStyle",opacity:t}),Object(Oe.jsx)(v.a,{data:De.filter((function(e){return"Commercial"===e.Market&&"Regional"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:D,strokeDasharray:"5, 3",strokeWidth:1.5,className:"lineStyle",opacity:t}),Object(Oe.jsx)(v.a,{data:De.filter((function(e){return"Large"===e.Market&&"Regional"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:R,strokeDasharray:"5, 3",strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Oe.jsx)(v.a,{data:De.filter((function(e){return"Residential"===e.Market&&"Regional"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return S(e.YoYChange)},stroke:C,strokeWidth:1.5,strokeDasharray:"5, 3",opacity:t,className:"lineStyle"})]})}})]})]})]}),"Calendar"===F&&Object(Oe.jsx)(y.a,{id:"CalendarGroup",children:Object(Oe.jsx)(ge,{data:Ne,width:Xe,height:Ze,KeyDateData:Ae,setStoryLim:ot})})]}),Object(Oe.jsxs)(y.a,{id:"NavButton",style:{display:"flex",alignItems:"center",position:"absolute",top:"50%",right:"0%"},children:["Calendar"!==F&&Ge.includes("Markets")&&Object(Oe.jsx)(j.a,{color:"primary",onClick:function(e){return Nt()},children:Object(Oe.jsx)(p.a,{})}),"Calendar"!==F&&"Intro"!==F&&!Ge.includes("Markets")&&Object(Oe.jsx)(m.a,{title:"Show Market Types to Continue",children:Object(Oe.jsx)(j.a,{onClick:function(e){return It()},children:Object(Oe.jsx)(p.a,{})})})]}),Object(Oe.jsx)(y.a,{id:"IntroNavButton",style:{display:"flex",alignItems:"center",position:"absolute",bottom:"0%",right:"0%",flexDirection:"column"},className:"introNavButton",children:"Intro"===F&&Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsx)(j.a,{color:"primary",onClick:function(e){return Nt()},children:Object(Oe.jsx)(p.a,{})}),Object(Oe.jsx)(d.a,{variant:"button",children:"Next Visual"})]})})]})}var He=n(373),Je=n(374);function Ge(){return Object(Oe.jsx)(He.a,{position:"static",style:{marginBottom:"1vh"},children:Object(Oe.jsx)(Je.a,{children:Object(Oe.jsx)(d.a,{variant:"h5",children:"Visualising the Effects of COVID-19 on the Electricity Grid in Victoria, Australia"})})})}var _e=function(){return Object(Oe.jsxs)("div",{id:"App",children:[Object(Oe.jsx)(Ge,{}),Object(Oe.jsx)(Ke,{})]})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,397)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))},Qe=n(377);Object(Qe.a)(),o.a.render(Object(Oe.jsx)(r.a.StrictMode,{children:Object(Oe.jsx)(_e,{})}),document.getElementById("root")),qe()}},[[286,1,2]]]);
//# sourceMappingURL=main.8f23aa13.chunk.js.map