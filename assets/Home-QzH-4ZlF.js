import{j as t,r as s,_ as e}from"./index-e_prYulJ.js";const o=()=>t.jsx("div",{className:"loader-wrapper",children:t.jsx("div",{className:"loader"})}),_=s.lazy(()=>e(()=>import("./About-p5Achwep.js"),__vite__mapDeps([0,1,2,3,4]))),i=s.lazy(()=>e(()=>import("./Hero-abKXeMWo.js"),__vite__mapDeps([5,1,2,6,3,4]))),l=s.lazy(()=>e(()=>import("./NavBar-hTa-r9AE.js"),__vite__mapDeps([7,1,2,3,8]))),n=s.lazy(()=>e(()=>import("./Projects-U1zn8xpS.js"),__vite__mapDeps([9,1,2,3,4,8]))),c=s.lazy(()=>e(()=>import("./Contact-7u6DdMZG.js"),__vite__mapDeps([10,1,2,6,3,4]))),u=()=>{const[r,a]=s.useState(!0);return s.useEffect(()=>{setTimeout(()=>{a(!1)},3e3)},[]),t.jsx(t.Fragment,{children:r?t.jsx(o,{}):t.jsxs(s.Suspense,{fallback:t.jsx(o,{}),children:[t.jsx(l,{}),t.jsx(i,{}),t.jsx(_,{}),t.jsx(n,{}),t.jsx(c,{})]})})};export{u as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/About-p5Achwep.js","assets/index-e_prYulJ.js","assets/index-Bmq7uOIN.css","assets/Container-Epv48_gH.js","assets/Row-ph7Z_2PS.js","assets/Hero-abKXeMWo.js","assets/motion-KigE9NNw.js","assets/NavBar-hTa-r9AE.js","assets/CardHeaderContext-x1kY_twJ.js","assets/Projects-U1zn8xpS.js","assets/Contact-7u6DdMZG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}