(this["webpackJsonpmevo-map"]=this["webpackJsonpmevo-map"]||[]).push([[0],{55:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var o=n(6),c=n(1),i=n.n(c),a=n(28),s=n.n(a),l=n(18),u=n(17),p=n(16),r=(n(55),function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)({latitude:-41.29403,longitude:174.77832,width:"100vw",height:"100vh",zoom:13}),s=Object(u.a)(a,2),r=s[0],b=s[1];return Object(c.useEffect)((function(){fetch("https://api.mevo.co.nz/public/vehicles/all").then((function(t){return t.json()})).then((function(t){i(t)}),(function(t){console.log(t)}))}),[r]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(p.b,Object(l.a)(Object(l.a)({},r),{},{mapboxApiAccessToken:"pk.eyJ1Ijoic2luZ2htYW5uYXQiLCJhIjoiY2trbTFvYWVhMHFkZDJ2b2M0aTU5eW4zOSJ9.vkqyf2WrIyJX8QD7ubLFhA",mapStyle:"mapbox://styles/mapbox/streets-v11",onViewportChange:function(t){b(t)},children:n.map((function(t){return Object(o.jsx)(p.a,{latitude:parseFloat(t.position.latitude),longitude:parseFloat(t.position.longitude),children:Object(o.jsx)("img",{className:"pin-logo",src:t.iconUrl,alt:"Vehicle Icon"})},t.position.latitude)}))}))})});s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(r,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.77a5a28e.chunk.js.map