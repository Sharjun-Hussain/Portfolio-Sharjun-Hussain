import{j as t,r as s,_ as e}from"./index-vAVVvt43.js";const o=()=>t.jsx("div",{className:"loader-wrapper",children:t.jsx("div",{className:"loader"})}),_=s.lazy(()=>e(()=>import("./About-1lobUYI7.js"),__vite__mapDeps([0,1,2,3,4]))),i=s.lazy(()=>e(()=>import("./Hero-4ltlOqey.js"),__vite__mapDeps([5,1,2,6,3,4]))),l=s.lazy(()=>e(()=>import("./NavBar-uMYJTxZg.js"),__vite__mapDeps([7,1,2,3,8]))),n=s.lazy(()=>e(()=>import("./Projects-vPGOiY-Y.js"),__vite__mapDeps([9,1,2,3,4,8]))),c=s.lazy(()=>e(()=>import("./Contact-eNmqUu-t.js"),__vite__mapDeps([10,1,2,6,3,4]))),u=()=>{const[r,a]=s.useState(!0);return s.useEffect(()=>{setTimeout(()=>{a(!1)},3e3)},[]),t.jsx(t.Fragment,{children:r?t.jsx(o,{}):t.jsxs(s.Suspense,{fallback:t.jsx(o,{}),children:[t.jsx(l,{}),t.jsx(i,{}),t.jsx(_,{}),t.jsx(n,{}),t.jsx(c,{})]})})};export{u as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/About-1lobUYI7.js","assets/index-vAVVvt43.js","assets/index-Bmq7uOIN.css","assets/Container-7BL-IINP.js","assets/Row-WWc7F26N.js","assets/Hero-4ltlOqey.js","assets/motion-Ok0k8PvI.js","assets/NavBar-uMYJTxZg.js","assets/CardHeaderContext-8G4X77dG.js","assets/Projects-vPGOiY-Y.js","assets/Contact-eNmqUu-t.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
