import{j as t,r as s,_ as e}from"./index-MPbm_riD.js";const o=()=>t.jsx("div",{className:"loader-wrapper",children:t.jsx("div",{className:"loader"})}),_=s.lazy(()=>e(()=>import("./About-3NURUXrq.js"),__vite__mapDeps([0,1,2,3,4]))),i=s.lazy(()=>e(()=>import("./Hero-KjIog85v.js"),__vite__mapDeps([5,1,2,6,3,4]))),l=s.lazy(()=>e(()=>import("./NavBar-VSTVHuuo.js"),__vite__mapDeps([7,1,2,3,8]))),n=s.lazy(()=>e(()=>import("./Projects-i7FFtToG.js"),__vite__mapDeps([9,1,2,3,4,8]))),c=s.lazy(()=>e(()=>import("./Contact-aBjXjZl0.js"),__vite__mapDeps([10,1,2,6,3,4]))),u=()=>{const[r,a]=s.useState(!0);return s.useEffect(()=>{setTimeout(()=>{a(!1)},3e3)},[]),t.jsx(t.Fragment,{children:r?t.jsx(o,{}):t.jsxs(s.Suspense,{fallback:t.jsx(o,{}),children:[t.jsx(l,{}),t.jsx(i,{}),t.jsx(_,{}),t.jsx(n,{}),t.jsx(c,{})]})})};export{u as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/About-3NURUXrq.js","assets/index-MPbm_riD.js","assets/index-Bmq7uOIN.css","assets/Container-mBoaD5su.js","assets/Row--9LC-ThM.js","assets/Hero-KjIog85v.js","assets/motion-avTepu3k.js","assets/NavBar-VSTVHuuo.js","assets/CardHeaderContext-U1BLVN7z.js","assets/Projects-i7FFtToG.js","assets/Contact-aBjXjZl0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
