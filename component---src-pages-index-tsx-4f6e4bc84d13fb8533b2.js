"use strict";(self.webpackChunk_adamgraham_portfolio=self.webpackChunk_adamgraham_portfolio||[]).push([[245],{4614:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(5594),s=n(8007),a=n(6540),o=n(1885);const i={max:10,perspective:1e3,scale:1,speed:200,easing:"ease-in-out"};var c=n(3815),d=n(4848);function l(e){let{location:t}=e;const n=(0,a.useRef)(null),l=(0,a.useRef)(null),m=function(e){const t=(0,r.Lh)(e),{0:n,1:s}=(0,a.useState)(1);return(0,a.useLayoutEffect)((()=>{s((0,r.qE)(.8*window.innerWidth/t.width,1,1.309))}),[t]),n}(n);return function(e,t){void 0===t&&(t=i);const n=(0,r.Ub)("(hover: hover)");(0,a.useEffect)((()=>{if(!e.current)return;if("undefined"==typeof window)return;let r,s=!1;const a=n=>{o(n),clearTimeout(r),e.current&&(e.current.style.transition=`transform ${t.speed}ms ${t.easing}`),s=!0,r=setTimeout((()=>{e.current&&(e.current.style.transition=""),s=!1}),t.speed)},o=n=>{if(s)return;const r=e.current,a=r.offsetWidth,o=r.offsetHeight,i=r.offsetLeft+a/2,c=r.offsetTop+o/2,d=n.clientX-i,l=n.clientY-c,m=t.max*l/(o/2)*1,u=t.max*d/(a/2)*-1,f=m<-t.max?-t.max:m>t.max?t.max:m,h=u<-t.max?-t.max:u>t.max?t.max:u;e.current&&(e.current.style.transform=`\n          perspective(${t.perspective}px) rotateX(${-f}deg) rotateY(${-h}deg)\n          scale3d(${t.scale}, ${t.scale}, ${t.scale})\n        `)};return n&&(document.addEventListener("mouseenter",a),document.addEventListener("mousemove",o)),()=>{document.removeEventListener("mouseenter",a),document.removeEventListener("mousemove",o),e.current&&(e.current.style.transition=`transform ${t.speed}ms ${t.easing}`,e.current.style.transform=`perspective(${t.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`)}}),[e,t,n])}(l),(0,d.jsxs)(o.YW,{id:"cover",hideDock:!0,hideHeader:!0,location:t,metadata:{url:c.wW,title:"Adam Graham • Portfolio"},children:[(0,d.jsx)(o.cG,{}),(0,d.jsx)(o.fE,{}),(0,d.jsx)("div",{className:"cover card-3d",ref:l,children:(0,d.jsxs)("div",{className:"container-md introduction display-flex flex-column align-items-center text-center",ref:n,style:{transform:`scale(${m})`},children:[(0,d.jsx)("p",{className:"h5",style:{marginBottom:4},children:"Hello! 👋 My name is"}),(0,d.jsx)("h1",{className:"display-5 font-weight-700",style:{marginBottom:12},children:"Adam Graham"}),(0,d.jsx)("p",{className:"font-sm color-foreground-muted width-80p",children:"I'm a software engineer and game developer inspired by the blending of art, design, and engineering to create best in class user experiences."}),(0,d.jsxs)(r.e2,{className:"justify-content-center",children:[(0,d.jsx)(r.N_,{as:s.Link,to:"/gallery",unstyled:!0,children:(0,d.jsx)(o.Dd,{children:"Gallery"})}),(0,d.jsx)(r.N_,{as:s.Link,to:"/projects",unstyled:!0,children:(0,d.jsx)(o.Dd,{children:"Projects"})})]})]})})]})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4f6e4bc84d13fb8533b2.js.map