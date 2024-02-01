import{j as t,r as s,_ as e}from"./index-xmEkV3eP.js";const o=()=>t.jsx("div",{className:"loader-wrapper",children:t.jsx("div",{className:"loader"})}),_=s.lazy(()=>e(()=>import("./About-svKLFGsX.js"),__vite__mapDeps([0,1,2,3,4,5]))),i=s.lazy(()=>e(()=>import("./Hero-6O6HPkIp.js"),__vite__mapDeps([6,1,2,3,4,5]))),l=s.lazy(()=>e(()=>import("./NavBar-xlaOWr8I.js"),__vite__mapDeps([7,1,2,4,8]))),n=s.lazy(()=>e(()=>import("./Projects-tDSr3yVj.js"),__vite__mapDeps([9,1,2,4,5,8]))),c=s.lazy(()=>e(()=>import("./Contact-oOIe2jxJ.js"),__vite__mapDeps([10,1,2,3,4,5]))),u=()=>{const[r,a]=s.useState(!0);return s.useEffect(()=>{setTimeout(()=>{a(!1)},3e3)},[]),t.jsx(t.Fragment,{children:r?t.jsx(o,{}):t.jsxs(s.Suspense,{fallback:t.jsx(o,{}),children:[t.jsx(l,{}),t.jsx(i,{}),t.jsx(_,{}),t.jsx(n,{}),t.jsx(c,{})]})})};export{u as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/About-svKLFGsX.js","assets/index-xmEkV3eP.js","assets/index-Bmq7uOIN.css","assets/motion-jWrZXA32.js","assets/Container-lgBBx8gM.js","assets/Row-XR9HuSq4.js","assets/Hero-6O6HPkIp.js","assets/NavBar-xlaOWr8I.js","assets/CardHeaderContext-ysK_PVTo.js","assets/Projects-tDSr3yVj.js","assets/Contact-oOIe2jxJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
