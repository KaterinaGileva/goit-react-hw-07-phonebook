"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[477],{6477:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,o,i,l,s,a,c=function(n){return n.filter.filter},d=function(n){return n.filter.status},p=r(3676),x=r(9439),u=r(168),f=r(2822),h=f.ZP.button(t||(t=(0,u.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 10px 8px 20px;\n  padding: 8px 8px 8px 8px;\n  border-radius: 4px;\n  border: none;\n  height: 30px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1,875;\n  text-transform: uppercase;\n  background-color: blue;\n  color: yellow;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    border: 2px solid;\n    background-color: white;\n    color:\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    \n  }\n"]))),g=f.ZP.div(o||(o=(0,u.Z)(["\ndisplay: flex;\njustify-content: space-between;\nmargin-left: 5px;\nmargin-right: auto;\n"]))),b=f.ZP.div(i||(i=(0,u.Z)(["\ndisplay: flex;\njustify-content: space-between;\n"]))),m=(f.ZP.input(l||(l=(0,u.Z)(["\ncolor: aliceblue;\n"]))),r(9447)),j=r(5545),w=r(333),y=r(2559);function Z(n){var e=n.name,r=n.phone,t=n.id,o=n.personal,i=(0,j.s0)(),l=(0,m.Nt)(),s=(0,x.Z)(l,2),a=s[0],c=s[1].isLoading;return(0,y.jsxs)(y.Fragment,{children:[!1===o?(0,y.jsx)(w.dQs,{style:{width:24,height:24}}):(0,y.jsx)(w.fi0,{style:{color:"orange",width:24,height:24}}),(0,y.jsx)(g,{children:(0,y.jsxs)("div",{children:[(0,y.jsx)("span",{children:e})," :",(0,y.jsx)("span",{children:r})]})}),(0,y.jsxs)(b,{children:[(0,y.jsxs)(h,{type:"button",onClick:function(){return a(t)},disabled:c,children:[(0,y.jsx)(w.Ehm,{style:{color:"orange",width:24,height:24}}),"Delete"]}),(0,y.jsxs)(h,{type:"button",onClick:function(){return i("/".concat(t))},children:[(0,y.jsx)(w.cpK,{style:{color:"orange",width:24,height:24}}),"Edit"]})]})]})}var v=f.ZP.ul(s||(s=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  margin-top: 20px;\n  margin-right: auto;\n  padding: 10px;\n  font-size: 24px;\n  background-color: #ADFF2F;\n  border-radius: 10px;\n  border: 2px solid rgba(0, 0, 0, 0.25);\n"]))),k=f.ZP.li(a||(a=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  padding: 5px 5px;\n  border: 2px solid rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  \n\n  :last-child {\n    margin-bottom: 0;\n  }\n  :hover,\n  :focus {\n    border: 2px solid;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n"])));function C(){var n=(0,p.v9)(c),e=(0,p.v9)(d),r=(0,m.wY)(),t=r.data,o=r.error,i=r.isLoading,l=function(n,e,r){if(n)switch(r){case"personal":return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).filter((function(n){return!0===n.personal}));case"others":return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).filter((function(n){return!1===n.personal}));default:return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}}(t,n,e);return(0,y.jsxs)(y.Fragment,{children:[o&&(0,y.jsx)("p",{children:"Error loading, please try again "}),i?(0,y.jsx)("b",{children:"Loading..."}):(0,y.jsx)(v,{children:l.map((function(n){var e=n.name,r=n.phone,t=n.id,o=n.personal;return(0,y.jsx)(k,{style:!1===o?{backgroundColor:"green"}:{backgroundColor:"yellow"},children:(0,y.jsx)(Z,{name:e,phone:r,id:t,personal:o})},t)}))})]})}var P,L,z,F,H,_,E,I=r(9028),A=f.ZP.label(P||(P=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1, 875;\n  padding: 10px, 5px;\n  margin: 0, 0, 0, 20px;\n"]))),D=f.ZP.input(L||(L=(0,u.Z)(["\n  font: inherit;\n  padding: 8px;\n  margin: 8px 0 8px 8px;\n  max-width: 80%;\n  border-radius: 8px;\n  border-color: blue;\n"]))),N=f.ZP.div(z||(z=(0,u.Z)(["\ndisplay: flex;\nalign-items: center;\nmargin-left: 50px;\n"]))),Q=f.ZP.h2(F||(F=(0,u.Z)(["\nmargin-left: 50px;\n"]))),K=r(1413),O=r(5987),R=f.ZP.button(H||(H=(0,u.Z)(["\ndisplay: inline-flex;\n    padding: 8px 12px;\n    border-radius: 4px;\n    border: solid 1px blue;\n    font: inherit;\n    cursor: pointer;\n    background-color:  green;\n    \n    :hover {\n    background-color: green;\n    transform: scale(1.02);\n  }\n  \n  :active {\n    background-color: #1565c0;\n    color: #fff;\n    box-shadow: 2px 2px 5px #fc894d;\n  }\n"]))),T=["selected","type","children"],Y=function(n){var e=n.selected,r=void 0!==e&&e,t=n.type,o=void 0===t?"button":t,i=n.children,l=(0,O.Z)(n,T);return(0,y.jsx)(R,(0,K.Z)((0,K.Z)({style:!1===r?{backgroundColor:" #fff",color:"#000"}:{backgroundColor:"#1976d2",color:"#fff"},type:o},l),{},{children:i}))},q=r(8888),B=f.ZP.div(_||(_=(0,u.Z)(["\ndisplay: flex;\n  gap: 8px;\n  margin-left: 50px;\n"]))),G=function(){var n=(0,p.I0)(),e=(0,p.v9)(d),r=function(e){return n((0,I.bI)(e))};return(0,y.jsxs)(B,{children:[(0,y.jsx)(Y,{selected:e===q.H.all,onClick:function(){return r(q.H.all)},children:"All"}),(0,y.jsx)(Y,{selected:e===q.H.personal,onClick:function(){return r(q.H.personal)},children:"Personal"}),(0,y.jsx)(Y,{selected:e===q.H.others,onClick:function(){return r(q.H.others)},children:"Others"})]})},J=function(){var n=(0,p.I0)(),e=(0,p.v9)(c);return(0,y.jsxs)(A,{children:[(0,y.jsx)(Q,{children:"Find contacts by Name"}),(0,y.jsx)(G,{}),(0,y.jsxs)(N,{children:[(0,y.jsx)(w.Qcu,{style:{width:36,height:36,borderRadius:"8px",borderColor:"blue"}}),(0,y.jsx)(D,{type:"text",value:e,onChange:function(e){return n((0,I.Tv)(e.target.value))}})]})]})},M=f.ZP.h2(E||(E=(0,u.Z)(["\nfont-size: 30px;\npadding: 10px 5px 10px 50px\n"])));function S(){return(0,y.jsxs)("main",{children:[(0,y.jsx)(J,{}),(0,y.jsx)(M,{children:"Contacts"}),(0,y.jsx)(C,{})]})}}}]);
//# sourceMappingURL=477.c3706d09.chunk.js.map