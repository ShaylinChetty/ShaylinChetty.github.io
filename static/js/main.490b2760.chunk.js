(this.webpackJsonpvisualisingcovid=this.webpackJsonpvisualisingcovid||[]).push([[0],{228:function(e,t,n){},239:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=(n(228),n(35)),s=n(14),l=n(375),u=n(368),h=n(349),f=n(350),d=n(343),j=n(365),m=n(374),b=n(107),p=n.n(b),x=n(364),O=n(179),g=n(376),Y=n(371),k=n(369),y=n(346),v=n(34),M="#1f78b4",C="#b2df8a",w="#fb9a99",R="#A62190",S="#4760DE",T="#000000",D=["Intro","RawYearComparison","YoYTotal","YoYMarketRegion"],A={0:"Intro",1:"RawYearComparison",2:"YoYTotal",3:"YoYMarketRegion"},I={Intro:3,RawYearComparison:2,YoYTotal:3,YoYMarketRegion:2},E={Intro:"Introduction",RawYearComparison:"Consumption Between Years",YoYTotal:"Year on Year Change",YoYMarketRegion:"Regional Changes",YoYMarket:"Market Type Changes"},N={January:0,February:1,March:2,April:3,May:4,June:5,July:6,August:7,September:8,October:9,November:10,December:11},V=n(21),F=n.n(V),L=n(55),W=n(57);function B(){return(B=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(W.a)("".concat("","/YoYTotal.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,N[e.Month],1),YoYChange:e.ConsumptionYoY};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(W.a)("".concat("","/YoYMarket.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,N[e.Month],1),YoYChange:e["YoY Consumption Change"],Market:e["Market Type"]};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(W.a)("".concat("","/YoYRegion.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,N[e.Month],1),YoYChange:e["YoY Consumption Change"],Region:e.Region};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(W.a)("".concat("","/YoYRegionMarket.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,N[e.Month],1),YoYChange:e["YoY Consumption Change"],Market:e["Market Type"],Region:e.Region};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(W.a)("".concat("","/RawConsumption.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,N[e.Month],1),Consumption:e.Consumption};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(L.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(W.a)("".concat("","/RawConsumptionMarkets.csv")).then((function(e){var n=[];e.forEach((function(e){var t={Year:e.Year,Month:new Date(e.Year,N[e.Month],1),Consumption:e.Consumption,Market:e["Market Type"]};n.push(t)})),t(n)})).catch((function(e){throw e}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=n(12);function K(e){var t=Object.keys(A).find((function(t){return A[t]===e}));return t?+t:1}function G(e,t,n){if("YoYTotal"===t){if(n){if(1===e)return"All three markets were mostly moving in sync prior to COVID lockdowns.";if(2===e)return"Statewide restrictions saw most businesses and factories close, and there is a shift to working and schooling from home where possible";if(3===e)return"The markets reached parity with each other again two months after strict lockdown rules ended."}else if(!n){if(1===e)return"At an aggregated network level there is a net decrease of around -4% across the year. This is a significant change in the context of electricity demand. especially as 2020 was colder than 2019.";if(2===e)return"The first lockdown saw an extreme trough in April, while the second lockdown sees a similar lockdown in August.";if(3===e)return"We can see slow returns to normal as restrictions ease over time in contrast to their sudden implementation"}}else if("YoYMarketRegion"===t){if(n){if(1===e)return"During the first lockdown the similar restrictions between regions saw the different market types following similar growth or decline.";if(2===e)return"During the second lockdown regional businesses remained open unlike their metropolitan counterparts. Tourism however was virtually non-existant during this period in Regional Victoria."}else if(!n){if(1===e)return"Lockdown restrictions saw Victoria split into two distinct regions with differing rules.";if(2===e)return"Regional Victoria had significantly fewer restrictions during Lockdown 2."}}else if("RawYearComparison"===t)if(n){if(1===e)return"From this we can see that Residential consumption is far more sensitive to temperature than business or industrial consumption. The latter two market types remain relativley stable throughout the year.";if(2===e)return"It's a little tough to interpret the change between 2019 and 2020 when viewed like this. Let's look only at the difference between the years on the next visual."}else if(!n){if(1===e)return"In a typical year Victoria generates approximately 26 million Megawatt-Hours (MWh) of electricity.";if(2===e)return"Generation is distributed across the year with peaks occuring during the hottest and coldest months."}return""}function Q(e,t,n){if("RawYearComparison"===e)if(n){if(n){if(1===t)return q.a.topRightEdge;if(2===t)return q.a.topLeftEdge}}else{if(1===t)return q.a.bottomAutoEdge;if(2===t)return q.a.bottomRightEdge}else if("YoYTotal"===e)if(n){if(n){if(1===t)return q.a.topCenter;if(2===t)return q.a.topRightEdge;if(3===t)return q.a.leftCenter}}else{if(1===t)return q.a.topRightEdge;if(2===t)return q.a.bottomCenter;if(3===t)return q.a.bottomLeftEdge}else if("YoYMarketRegion"===e)if(n){if(n){if(1===t)return q.a.topCenter;if(2===t)return q.a.topCenter}}else{if(1===t)return q.a.topLeftEdge;if(2===t)return q.a.bottomLeftEdge}return q.a.topCenter}function X(e,t,n){var a="70%",r="50%";return"RawYearComparison"===e?n?n&&(1===t?(a="34%",r="57%"):2===t&&(a="74%",r="59%")):1===t?(a="34%",r="41%"):2===t&&(a="68%",r="47%"):"YoYTotal"===e?n?n&&(1===t?(a="30%",r="51%"):2===t?(a="40%",r="66%"):3===t&&(a="85%",r="57%")):1===t?(a="31%",r="52%"):2===t?(a="36%",r="65%"):3===t&&(a="77%",r="64%"):"YoYMarketRegion"===e&&(n?n&&(1===t?(a="30%",r="46%"):2===t&&(a="75%",r="59%")):1===t?(a="30%",r="47%"):2===t&&(a="75%",r="65%")),{position:"absolute",left:a,top:r}}n(239);var Z=n(2);function U(){return Object(Z.jsx)("div",{style:{height:"90vh",width:"100%",display:"flex",flexDirection:"column"},children:Object(Z.jsx)("div",{dangerouslySetInnerHTML:{__html:"<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1n-8-FkqEqL-hZbaXNfr5ApCmQKAhRsdSjKSMdV5JNKQ&font=Default&lang=en&timenav_position=top&initial_zoom=1&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>"}})})}var $=n(340),ee=n(341),te=n(164),ne=n.n(te),ae=n(157),re=n.n(ae),oe=n(165),ie=n.n(oe),ce=n(163),se=n.n(ce),le=n(373),ue=n(166),he=n(167),fe=n(337);function de(e){function t(e){return"RawYearComparison"===e||"YoYTotal"===e?Object(fe.a)({domain:["Residential","Business","Industrial"],range:[M,C,w]}):"YoYMarketRegion"===e?Object(fe.a)({domain:["Residential Metropolitan","Residential Regional","Business Metropolitan","Business Regional","Industrial Metropolitan","Industrial Regional"],range:[M,M,C,C,w,w]}):void 0}function n(e,t,n){return"YoYTotal"!==e&&"RawYearComparison"!==e?n.includes("Regional")?Object(Z.jsxs)("svg",{width:25,height:25,children:[" ",Object(Z.jsx)("line",{x1:"0",y1:"12",x2:"25",y2:"12",stroke:t,"stroke-dasharray":"4"})," "]}):Object(Z.jsxs)("svg",{width:25,height:25,children:[" ",Object(Z.jsx)("line",{x1:"0",y1:"12",x2:"25",y2:"12",stroke:t})," "]}):"Residential"===n?Object(Z.jsx)(re.a,{htmlColor:t,fontSize:"large"}):"Business"===n?Object(Z.jsx)(se.a,{htmlColor:t,fontSize:"large"}):"Industrial"===n?Object(Z.jsx)(ne.a,{htmlColor:t,fontSize:"large"}):"Overall"===n?Object(Z.jsx)(ie.a,{htmlColor:t,fontSize:"large"}):void 0}return t(e.currStep)&&"Intro"!==e.currStep?e.marketsActive?Object(Z.jsx)($.a,{style:{zIndex:1,position:"fixed",top:"15vh",right:"10vw"},children:Object(Z.jsx)(le.a,{scale:t(e.currStep),labelFormat:function(e){return"".concat(e)},children:function(t){return Object(Z.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:t.map((function(t,a){return Object(Z.jsxs)(ue.a,{margin:"5px 5px",children:[n(e.currStep,t.value,t.text),Object(Z.jsxs)(he.a,{align:"left",margin:"0 0 0 4px",children:[" ",t.text," "]})]},"legend-quantile-".concat(a))}))})}})}):Object(Z.jsx)($.a,{style:{zIndex:1,position:"fixed",top:"15vh",right:"10vw"},children:Object(Z.jsx)(ee.a,{variant:"contained",color:"primary",onClick:function(t){e.updateFilters()},style:{marginTop:"5%"},children:" Show Market Types "})}):null}var je=n(344),me=n(342),be=n(378),pe=n(382);function xe(e){var t=Object(a.useState)(e.currStep),n=Object(s.a)(t,2),r=n[0],o=n[1],i=D;Object(a.useEffect)((function(){e.currStep!==r&&o(e.currStep)}));return Object(Z.jsxs)(O.a,{id:"SideBar",style:{display:"flex",flexDirection:"column"},children:[Object(Z.jsx)(O.a,{id:"Stepper",children:Object(Z.jsx)(pe.a,{activeStep:K(r),orientation:"vertical",children:i.map((function(t,n){return Object(Z.jsx)(me.a,{style:{cursor:"pointer"},children:Object(Z.jsx)(be.a,{onClick:function(n){var a;o(a=t),e.updateStep(a)},children:Object(Z.jsx)(d.a,{variant:"button",children:E[t]})})},t)}))})}),Object(Z.jsx)(je.a,{})]})}var Oe=n(345),ge=n(347),Ye=n(56),ke=n.n(Ye),ye=n(379),ve=15;function Me(e,t,n,a,r,o){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(Oe.a,{top:e,scale:a,numTicks:24,tickFormat:function(e){return e},children:function(e){var t="2019"===e.label?"#4760DE":"#A62190",n=(e.axisToPoint.x-e.axisFromPoint.x)/2;return Object(Z.jsxs)("g",{className:"my-custom-bottom-axis",children:[Object(Z.jsx)(y.a,{from:e.axisFromPoint,to:e.axisToPoint,stroke:"#000000"}),e.ticks.map((function(e,n){var a=e.to.x,r=e.to.y+15;return Object(Z.jsxs)(O.a,{className:"vx-axis-tick",children:[Object(Z.jsx)(y.a,{from:e.from,to:e.to,stroke:t}),Object(Z.jsx)("text",{transform:"translate(".concat(a,", ").concat(r,")"),fontSize:15,textAnchor:"middle",fill:"2019"===ke()(e.formattedValue).format("Y")?"#4760DE":"#A62190",children:ke()(e.formattedValue).format("MMM")})]},"vx-tick-".concat(e.value,"-").concat(n))})),Object(Z.jsx)("text",{textAnchor:"middle",transform:"translate(".concat(n,", 50)"),fontSize:"8",children:e.label})]})}}),Object(Z.jsx)(Oe.a,{top:e+30,scale:Object(ye.a)({domain:["2019","2020"],range:[t,n]}),numTicks:4,hideAxisLine:!0,tickFormat:function(e){return ke()(e).format("Y")},children:function(e){var t=(e.axisToPoint.x-e.axisFromPoint.x)/2;return Object(Z.jsxs)("g",{className:"my-custom-bottom-axis",children:[e.ticks.map((function(e,t){var n=e.to.x,a=e.to.y+10;return Object(Z.jsx)(O.a,{className:"vx-axis-tick",children:Object(Z.jsx)("text",{transform:"translate(".concat(n,", ").concat(a,")"),fontSize:10,textAnchor:"middle",fill:"2019"===e.formattedValue?S:R,children:e.formattedValue})},"vx-tick-".concat(e.value,"-").concat(t))})),Object(Z.jsx)("text",{textAnchor:"middle",transform:"translate(".concat(t,", 50)"),fontSize:"8",children:e.label})]})}}),Object(Z.jsx)(ge.a,{left:t,scale:r,label:o})]})}function Ce(e,t,n,a,r,o){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(Oe.a,{top:e,scale:a,numTicks:12,tickFormat:function(e){return e},children:function(e){var t=(e.axisToPoint.x-e.axisFromPoint.x)/2;return Object(Z.jsxs)("g",{className:"my-custom-bottom-axis",children:[Object(Z.jsx)(y.a,{from:e.axisFromPoint,to:e.axisToPoint,stroke:"#000000"}),e.ticks.map((function(e,t){return function(e){var t="Prior to Lockdown",n=T,a=ke()(e.formattedValue).format("MMMM");["April","May"].includes(a)?(t="Lockdown 1",n=S):["July","August","September","October"].includes(a)?(t="Lockdown 2",n=R):["January","February"].includes(a)?(t="Prior to Lockdown",n=T):"March"===a?(t="Lockdown begins in Third Week",n=S):"June"===a?(t="Eased Restrictions",n=T):["November","December"].includes(a)&&(t="Easing Restrictions Over Time",n=T);return Object(Z.jsxs)(O.a,{children:[Object(Z.jsx)(y.a,{from:e.from,to:e.to,stroke:"#A62190"}),Object(Z.jsx)(m.a,{title:t,children:Object(Z.jsx)("text",{transform:"translate(".concat(e.to.x,", ").concat(e.to.y+ve,")"),fontSize:ve,textAnchor:"middle",fill:n,cursor:"pointer",children:ke()(e.formattedValue).format("MMMM")})})]},"vx-tick-".concat(e.value))}(e)})),Object(Z.jsx)("text",{textAnchor:"middle",transform:"translate(".concat(t,", 50)"),fontSize:"8",children:e.label})]})}}),Object(Z.jsx)(Oe.a,{top:e+30,scale:Object(g.a)({domain:[new Date("2019-01-01"),new Date("2020-12-01")],nice:!0,range:[t,n]}),numTicks:1,hideAxisLine:!0,tickFormat:function(e){return ke()(e).format("Y")},hideTicks:!0}),Object(Z.jsx)(ge.a,{left:t,scale:r,label:o})]})}var we=n(362),Re=n(363);function Se(){var e=Object(a.useState)(void 0),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(void 0),b=Object(s.a)(i,2),R=b[0],S=b[1],D=Object(a.useState)("YoYTotal"),E=Object(s.a)(D,2),N=E[0],V=E[1],F=Object(a.useState)(""),L=Object(s.a)(F,2),W=(L[0],L[1],Object(a.useState)("")),q=Object(s.a)(W,2),$=q[0],ee=q[1],te=Object(a.useState)([]),ne=Object(s.a)(te,2),ae=ne[0],re=ne[1],oe=Object(a.useState)([]),ie=Object(s.a)(oe,2),ce=ie[0],se=ie[1],le=Object(a.useState)([]),ue=Object(s.a)(le,2),he=ue[0],fe=ue[1],je=Object(a.useState)([]),me=Object(s.a)(je,2),be=me[0],pe=me[1],Oe=Object(a.useState)([]),ge=Object(s.a)(Oe,2),Ye=ge[0],ke=ge[1],ye=Object(a.useState)([]),ve=Object(s.a)(ye,2),Se=ve[0],Te=ve[1],De=Object(a.useState)([]),Ae=Object(s.a)(De,2),Ie=Ae[0],Ee=Ae[1],Ne=.9*document.documentElement.clientHeight,Ve=.8*document.documentElement.clientWidth,Fe=.8*document.documentElement.clientHeight,Le=.75*document.documentElement.clientWidth,We=.05*document.documentElement.clientWidth,Be=Object(a.useState)(1),Pe=Object(s.a)(Be,2),ze=Pe[0],Je=Pe[1],He=Object(a.useState)(I.Intro),_e=Object(s.a)(He,2),qe=_e[0],Ke=_e[1],Ge=Object(a.useState)("Total Consumption"),Qe=Object(s.a)(Ge,2),Xe=Qe[0],Ze=Qe[1],Ue=r.a.useRef(null),$e=Object(h.a)(!1),et=Object(s.a)($e,2),tt=et[0],nt=et[1],at=nt.setFalse,rt=nt.setTrue,ot=r.a.useRef(null),it=Object(h.a)(!1),ct=Object(s.a)(it,2),st=ct[0],lt=ct[1],ut=lt.setFalse,ht=lt.setTrue,ft=r.a.useRef(null),dt=Object(h.a)(!1),jt=Object(s.a)(dt,2),mt=jt[0],bt=jt[1],pt=bt.setFalse,xt=bt.setTrue;function Ot(){"YoYMarketRegion"!==N&&vt(A[K(N)+1])}function gt(e){return{directionalHint:Q(N,e,Ie.includes("Markets")),doNotLayer:!1}}function Yt(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?Ee([]):(Ee([e]),Ze(Mt(N,!0)))}function kt(){at(),ut(),pt(),Yt("Markets")}function yt(e,t,n,a){o((function(){return Object(g.a)({domain:[e,t],nice:!0,range:[We,Le]})})),S((function(){return Object(Y.a)({domain:[a,n],nice:!0,range:[50,Fe]})}))}function vt(e){if(V(e),at(),ut(),pt(),Yt("2019",!1),Ze(Mt(e)),Ke(I[e]),"RawYearComparison"===e){var t=Math.min.apply(Math,Object(c.a)(ae.map((function(e){return e.Month.valueOf()})))),n=Math.max.apply(Math,Object(c.a)(ae.map((function(e){return e.Month.valueOf()}))));Math.min.apply(Math,Object(c.a)(ae.map((function(e){return e.Consumption}))));yt(t,n,0,Math.max.apply(Math,Object(c.a)(ae.map((function(e){return e.Consumption}))))),ee("Demand (MWh)")}else if("YoYTotal"===e){yt(Math.min.apply(Math,Object(c.a)(be.map((function(e){return e.Month.valueOf()})))),Math.max.apply(Math,Object(c.a)(be.map((function(e){return e.Month.valueOf()})))),Math.min.apply(Math,Object(c.a)(be.map((function(e){return e.YoYChange})))),Math.max.apply(Math,Object(c.a)(be.map((function(e){return e.YoYChange}))))),ee("Year on Year Change (%)")}else if("YoYMarketRegion"===e){var a=Math.min.apply(Math,Object(c.a)(Se.map((function(e){return e.Month.valueOf()})))),r=Math.max.apply(Math,Object(c.a)(Se.map((function(e){return e.Month.valueOf()})))),o=Math.min.apply(Math,Object(c.a)(Se.map((function(e){return e.YoYChange})))),i=Math.max.apply(Math,Object(c.a)(Se.map((function(e){return e.YoYChange}))));ee("Year on Year Change (%)"),yt(a,r,o,i)}e!==N&&Je(1)}function Mt(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"YoYTotal"===e?t?"Electricity Demand across Victoria by Market Type":"Electricity Demand across Victoria":"RawYearComparison"===e?t?"Year on Year Change in Demand by Market Type":"Year on Year Change in Demand":"YoYMarketRegion"===e?t?"Year on Year Change in Demand by Region":"Year on Year Change in Demand by Region and Market Type":""}Object(a.useEffect)((function(){0===ae.length?(console.log("Loading Data"),function(e){H.apply(this,arguments)}(re),function(e){_.apply(this,arguments)}(se),function(e){B.apply(this,arguments)}(fe),function(e){P.apply(this,arguments)}(pe),function(e){z.apply(this,arguments)}(ke),function(e){J.apply(this,arguments)}(Te)):void 0===n&&1===ze&&"Intro"!==N&&(console.log("Data Loaded"),vt("Intro")),tt||(rt(),ht(),xt())}));var Ct=function(e,t){return{WebkitTransform:"translate3d(".concat(e,"px, 0, 0)"),transform:"translate3d(".concat(e,"px, 0, 0)"),visibility:t?"visible":"hidden"}},wt=Ie.includes("Markets")?0:1;return Object(Z.jsxs)(f.a,{container:!0,children:[Object(Z.jsxs)(O.a,{id:"anchors",children:[Object(Z.jsx)("span",{id:"InfoAnchor1",style:X(N,1,Ie.includes("Markets")),ref:Ue}),Object(Z.jsx)("span",{id:"InfoAnchor2",style:X(N,2,Ie.includes("Markets")),ref:ot}),Object(Z.jsx)("span",{id:"InfoAnchor3",style:X(N,3,Ie.includes("Markets")),ref:ft})]}),Object(Z.jsx)(O.a,{id:"LegendContainer",children:Object(Z.jsx)(de,{currStep:N,marketsActive:Ie.includes("Markets"),updateFilters:kt})}),Object(Z.jsx)(O.a,{id:"infoBoxes",children:"Intro"!==N&&Object(Z.jsxs)(Z.Fragment,{children:[qe>=1&&tt&&Object(Z.jsx)(l.a,{target:Ue.current,positioningContainerProps:gt(1),delayBeforeCoachmarkAnimation:1e3,children:Object(Z.jsx)(u.a,{onDismiss:at,hasCloseButton:!0,children:G(1,N,Ie.includes("Markets"))})}),qe>=2&&st&&Object(Z.jsx)(l.a,{target:ot.current,positioningContainerProps:gt(2),delayBeforeCoachmarkAnimation:1e3,children:Object(Z.jsx)(u.a,{onDismiss:ut,hasCloseButton:!0,children:G(2,N,Ie.includes("Markets"))})}),qe>=3&&mt&&Object(Z.jsx)(l.a,{target:ft.current,positioningContainerProps:gt(3),delayBeforeCoachmarkAnimation:1e3,children:Object(Z.jsx)(u.a,{onDismiss:pt,hasCloseButton:!0,children:G(3,N,Ie.includes("Markets"))})})]})}),Object(Z.jsx)(f.a,{item:!0,xs:2,style:{borderRight:"1px solid rgba(0, 0, 0, 0.05)"},children:Object(Z.jsx)(xe,{currStep:N,updateStep:vt,updateFilters:kt})}),Object(Z.jsxs)(f.a,{item:!0,xs:10,children:["Intro"===N&&Object(Z.jsx)(U,{}),"Intro"!==N&&n&&Object(Z.jsxs)(O.a,{id:"CanvasContainer",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(Z.jsx)(d.a,{variant:"h6",children:Xe}),Object(Z.jsxs)("svg",{height:Ne,width:Ve,id:"Canvas",children:[Object(Z.jsxs)(O.a,{id:"Axis",children:["RawYearComparison"!==N?Ce(Fe,We,Le,n,R,$):Me(Fe,We,Le,n,R,$),Object(Z.jsx)(we.a,{scale:R,width:Le-We,height:Fe,stroke:"#e0e0e0",left:We}),Object(Z.jsx)(Re.a,{scale:n,width:Le,height:Fe-50,stroke:"#e0e0e0",top:50})]}),Object(Z.jsxs)(O.a,{id:"TotalConsumpion",children:[Object(Z.jsx)(v.Motion,{style:{motionVar:Object(v.spring)("RawYearComparison"===N?0:400)},children:function(e){var t=e.motionVar;return Object(Z.jsx)(k.a,{data:ae,curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.Consumption)},stroke:T,strokeWidth:1.5,style:Ct(t,"RawYearComparison"===N),className:"lineStyle"})}}),Object(Z.jsx)(v.Motion,{style:{motionVar:Object(v.spring)("RawYearComparison"===N&&Ie.includes("Markets")?1:0)},children:function(e){var t=e.motionVar;return Object(Z.jsxs)(O.a,{id:"RawYearMarkets",children:[Object(Z.jsx)(k.a,{data:ce.filter((function(e){return"Commercial"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.Consumption)},stroke:C,strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Z.jsx)(k.a,{data:ce.filter((function(e){return"Large"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.Consumption)},stroke:w,strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Z.jsx)(k.a,{data:ce.filter((function(e){return"Residential"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.Consumption)},stroke:M,strokeWidth:1.5,opacity:t,className:"lineStyle"})]})}})]}),Object(Z.jsxs)(O.a,{id:"YoYChange",children:[Object(Z.jsx)(v.Motion,{style:{motionVar:Object(v.spring)("YoYTotal"===N?0:400)},children:function(e){var t=e.motionVar;return Object(Z.jsxs)(O.a,{children:[Object(Z.jsx)(y.a,{from:{x:n(new Date(2020,0,1)),y:R(0)},to:{x:Le,y:R(0)},stroke:T,strokeWidth:1.5,style:Ct(t,"YoYTotal"===N)}),Object(Z.jsx)(k.a,{data:he,curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:T,strokeWidth:1.5,style:Ct(t,"YoYTotal"===N),className:"lineStyle",opacity:wt})]})}}),Object(Z.jsx)(v.Motion,{style:{motionVar:Object(v.spring)("YoYTotal"===N&&Ie.includes("Markets")?1:0)},children:function(e){var t=e.motionVar;return Object(Z.jsxs)(O.a,{id:"YoYChangeMarkets",children:[Object(Z.jsx)(k.a,{data:be.filter((function(e){return"Commercial"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:C,strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Z.jsx)(k.a,{data:be.filter((function(e){return"Large"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:w,strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Z.jsx)(k.a,{data:be.filter((function(e){return"Residential"===e.Market})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:M,strokeWidth:1.5,opacity:t,className:"lineStyle"})]})}})]}),Object(Z.jsxs)(O.a,{id:"YoYRegionChange",children:[Object(Z.jsx)(v.Motion,{style:{motionVar:Object(v.spring)("YoYMarketRegion"===N?0:400)},children:function(e){var t=e.motionVar;return Object(Z.jsxs)(O.a,{id:"YoYChangeRegion",children:[Object(Z.jsx)(y.a,{from:{x:n(new Date(2020,0,1)),y:R(0)},to:{x:Le,y:R(0)},stroke:T,strokeWidth:1.5,style:Ct(t,"YoYMarketRegion"===N)}),Object(Z.jsx)(k.a,{data:Ye.filter((function(e){return"Regional"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:T,strokeWidth:1.5,strokeDasharray:"5, 3",style:Ct(t,"YoYMarketRegion"===N),className:"lineStyle",opacity:wt}),Object(Z.jsx)(k.a,{data:Ye.filter((function(e){return"Metropolitan"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:T,strokeWidth:1.5,style:Ct(t,"YoYMarketRegion"===N),className:"lineStyle",opacity:wt})]})}}),Object(Z.jsx)(v.Motion,{style:{motionVar:Object(v.spring)("YoYMarketRegion"===N&&Ie.includes("Markets")?1:0)},children:function(e){var t=e.motionVar;return Object(Z.jsxs)(O.a,{id:"YoyChangeMarketRegions",children:[Object(Z.jsx)(k.a,{data:Se.filter((function(e){return"Commercial"===e.Market&&"Metropolitan"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:C,strokeWidth:1.5,className:"lineStyle",opacity:t}),Object(Z.jsx)(k.a,{data:Se.filter((function(e){return"Large"===e.Market&&"Metropolitan"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:w,strokeWidth:1.5,className:"lineStyle",opacity:t}),Object(Z.jsx)(k.a,{data:Se.filter((function(e){return"Residential"===e.Market&&"Metropolitan"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:M,strokeWidth:1.5,className:"lineStyle",opacity:t}),Object(Z.jsx)(k.a,{data:Se.filter((function(e){return"Commercial"===e.Market&&"Regional"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:C,strokeDasharray:"5, 3",strokeWidth:1.5,className:"lineStyle",opacity:t}),Object(Z.jsx)(k.a,{data:Se.filter((function(e){return"Large"===e.Market&&"Regional"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:w,strokeDasharray:"5, 3",strokeWidth:1.5,opacity:t,className:"lineStyle"}),Object(Z.jsx)(k.a,{data:Se.filter((function(e){return"Residential"===e.Market&&"Regional"===e.Region})),curve:x.a,x:function(e){return n(e.Month.valueOf())},y:function(e){return R(e.YoYChange)},stroke:M,strokeWidth:1.5,strokeDasharray:"5, 3",opacity:t,className:"lineStyle"})]})}})]})]})]})]}),Object(Z.jsxs)(O.a,{id:"NavButton",style:{display:"flex",alignItems:"center",position:"absolute",top:"50%",right:"0%"},children:["YoYMarketRegion"!==N&&Ie.includes("Markets")&&Object(Z.jsx)(j.a,{color:"primary",onClick:function(e){return Ot()},children:Object(Z.jsx)(p.a,{})}),"YoYMarketRegion"!==N&&"Intro"!==N&&!Ie.includes("Markets")&&Object(Z.jsx)(m.a,{title:"Show Market Types to Continue",children:Object(Z.jsx)(j.a,{onClick:function(e){return kt()},children:Object(Z.jsx)(p.a,{})})})]}),Object(Z.jsx)(O.a,{id:"IntroNavButton",style:{display:"flex",alignItems:"center",position:"absolute",bottom:"0%",right:"0%",flexDirection:"column"},className:"introNavButton",children:"Intro"===N&&Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(j.a,{color:"primary",onClick:function(e){return Ot()},children:Object(Z.jsx)(p.a,{})}),Object(Z.jsx)(d.a,{variant:"button",children:"Next Visual"})]})})]})}var Te=n(366),De=n(367);function Ae(){return Object(Z.jsx)(Te.a,{position:"static",style:{marginBottom:"1vh"},children:Object(Z.jsx)(De.a,{children:Object(Z.jsx)(d.a,{variant:"h5",children:"Visualising the Effects of COVID-19 on the Electricity Grid in Melbourne, Australia"})})})}var Ie=function(){return Object(Z.jsxs)("div",{id:"App",children:[Object(Z.jsx)(Ae,{}),Object(Z.jsx)(Se,{})]})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,388)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},Ne=n(370);Object(Ne.a)(),i.a.render(Object(Z.jsx)(r.a.StrictMode,{children:Object(Z.jsx)(Ie,{})}),document.getElementById("root")),Ee()}},[[283,1,2]]]);
//# sourceMappingURL=main.490b2760.chunk.js.map