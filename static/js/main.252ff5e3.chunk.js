(this["webpackJsonptic-tac-toe-2p-dev"]=this["webpackJsonptic-tac-toe-2p-dev"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(6),c=n.n(i),l=n(7),o=n(3),u=n(0),a={background:"lightblue",border:"2px solid green",fontSize:"30px",fontWeight:"800",cursor:"pointer",outline:"none"},s=function(e){var t=e.value,n=e.onClick;return Object(u.jsx)("button",{style:a,onClick:n,children:t})},d={border:"4px solid green",borderRadius:"10px",width:"250px",height:"250px",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},j=function(e){var t=e.squares,n=e.onClick;return Object(u.jsx)("div",{style:d,children:t.map((function(e,t){return Object(u.jsx)(s,{value:e,onClick:function(){return n(t)}},t)}))})};var b={width:"200px",margin:"20px auto",display:"flex",flexDirection:"column",alignItems:"center"},p=function(){var e=Object(r.useState)(Array(9).fill(null)),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(!0),a=Object(o.a)(c,2),s=a[0],d=a[1],p=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(o.a)(t[n],3),i=r[0],c=r[1],l=r[2];if(e[i]&&e[i]===e[c]&&e[i]===e[l])return e[i];if(!e.includes(null))return"DRAW"}return null}(n);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{squares:n,onClick:function(e){var t=Object(l.a)(n);p||t[e]||(t[e]=s?"X":"O",i(t),d(!s))}}),Object(u.jsxs)("div",{style:b,children:[Object(u.jsx)("p",{children:p?"Winner: "+p:"Player "+(s?"X":"O")+" moves"}),p?Object(u.jsx)("button",{onClick:function(){return i(Array(9).fill(null))},children:"Start Game"}):""]})]})},f={alignItems:"center",display:"flex",flexDirection:"column"},x=function(){return Object(u.jsx)(p,{styles:f})};c.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.252ff5e3.chunk.js.map