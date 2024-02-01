import{j as t,r as s,_ as e}from"./index-6LYSUu9p.js";const o=()=>t.jsx("div",{className:"loader-wrapper",children:t.jsx("div",{className:"loader"})}),_=s.lazy(()=>e(()=>import("./About-X_ZuXy-q.js"),__vite__mapDeps([0,1,2,3,4,5]))),i=s.lazy(()=>e(()=>import("./Hero-kR4PD9xY.js"),__vite__mapDeps([6,1,2,3,4,5]))),l=s.lazy(()=>e(()=>import("./NavBar-Z3Z9zIv2.js"),__vite__mapDeps([7,1,2,4,8]))),n=s.lazy(()=>e(()=>import("./Projects-yUeo_uUJ.js"),__vite__mapDeps([9,1,2,4,5,8]))),c=s.lazy(()=>e(()=>import("./Contact-Dm2_eoGw.js"),__vite__mapDeps([10,1,2,3,4,5]))),u=()=>{const[r,a]=s.useState(!0);return s.useEffect(()=>{setTimeout(()=>{a(!1)},3e3)},[]),t.jsx(t.Fragment,{children:r?t.jsx(o,{}):t.jsxs(s.Suspense,{fallback:t.jsx(o,{}),children:[t.jsx(l,{}),t.jsx(i,{}),t.jsx(_,{}),t.jsx(n,{}),t.jsx(c,{})]})})};export{u as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/About-X_ZuXy-q.js","assets/index-6LYSUu9p.js","assets/index-Bmq7uOIN.css","assets/motion-lWgEf0x-.js","assets/Container-3-uI5ja6.js","assets/Row-4Xyyr8pq.js","assets/Hero-kR4PD9xY.js","assets/NavBar-Z3Z9zIv2.js","assets/CardHeaderContext-nN0Iqw07.js","assets/Projects-yUeo_uUJ.js","assets/Contact-Dm2_eoGw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
