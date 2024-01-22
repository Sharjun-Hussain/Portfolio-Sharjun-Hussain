import{j as t,r as s,_ as e}from"./index-Dilph3XL.js";const o=()=>t.jsx("div",{className:"loader-wrapper",children:t.jsx("div",{className:"loader"})}),_=s.lazy(()=>e(()=>import("./About-Pt8sUubG.js"),__vite__mapDeps([0,1,2,3,4]))),i=s.lazy(()=>e(()=>import("./Hero-Cwqwhwdw.js"),__vite__mapDeps([5,1,2,6,3,4]))),l=s.lazy(()=>e(()=>import("./NavBar-BFM8Nyq2.js"),__vite__mapDeps([7,1,2,3,8]))),n=s.lazy(()=>e(()=>import("./Projects-nWQouqIh.js"),__vite__mapDeps([9,1,2,3,4,8]))),c=s.lazy(()=>e(()=>import("./Contact-sMgDSuwI.js"),__vite__mapDeps([10,1,2,6,3,4]))),u=()=>{const[r,a]=s.useState(!0);return s.useEffect(()=>{setTimeout(()=>{a(!1)},3e3)},[]),t.jsx(t.Fragment,{children:r?t.jsx(o,{}):t.jsxs(s.Suspense,{fallback:t.jsx(o,{}),children:[t.jsx(l,{}),t.jsx(i,{}),t.jsx(_,{}),t.jsx(n,{}),t.jsx(c,{})]})})};export{u as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/About-Pt8sUubG.js","assets/index-Dilph3XL.js","assets/index-Bmq7uOIN.css","assets/Container-h1lnZyeg.js","assets/Row-O20xgRXz.js","assets/Hero-Cwqwhwdw.js","assets/motion-nH5BqevP.js","assets/NavBar-BFM8Nyq2.js","assets/CardHeaderContext-oN7UHQwy.js","assets/Projects-nWQouqIh.js","assets/Contact-sMgDSuwI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
