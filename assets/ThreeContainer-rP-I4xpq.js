import{r as n,j as s,C as t,l,_ as m,c as d}from"./index-tgmMlaxD.js";import{C as f,c as p,a as y}from"./CameraControls-Iu3wHYbo.js";import{a as x}from"./index-0c28a0fd.esm-aDRZzFWR.js";import{K as u}from"./KeyboardControls-ZlrKl6Zk.js";import"./extends-dGVwEr9R.js";import"./Home-uyHDiZ18.js";const h=()=>n.useMemo(()=>[{name:"FORWARD",keys:["KeyW"]},{name:"BACKWARD",keys:["KeyS"]},{name:"LEFT",keys:["KeyA"]},{name:"RIGHT",keys:["KeyD"]},{name:"JUMP",keys:["Space"]},{name:"SPAWN",keys:["KeyJ"]}],[]),j=n.memo(function({theme:e}){const o=n.useRef(null);return x(()=>{var i;(i=o.current)==null||i.color.lerp(e?new t("#6633dd"):new t("#ffff00"),.05)}),s.jsxs(s.Fragment,{children:[s.jsx("directionalLight",{ref:o,castShadow:!0,intensity:2,position:[0,50,100],color:e?new t("#ffff00"):new t("#6633dd")}),s.jsx("directionalLight",{intensity:1,position:[0,-100,50],color:e?"#a66B33":"#ffff00"}),s.jsx("ambientLight",{intensity:e?.8:.4,color:e?"#6633dd":"white"}),s.jsx("directionalLight",{intensity:.4,color:"white"}),s.jsx("directionalLight",{intensity:1,position:[0,-100,100],color:"white"})]})}),{Physics:g}=l(()=>m(()=>import("./react-three-rapier.esm-qMkUkHyQ.js"),__vite__mapDeps([0,1,2,3]))),R=n.memo(function({className:e,children:o,theme:i,project:a}){const c=h();return s.jsx(n.Suspense,{fallback:s.jsx("div",{}),children:s.jsx(u,{map:c,children:s.jsxs(f,{className:d(e),id:p.container,shadows:!0,children:[s.jsx(y,{project:a}),s.jsxs(g,{gravity:[0,-20,0],children:[s.jsx(j,{theme:i}),o]})]})})})});export{R as ThreeContainer};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/react-three-rapier.esm-qMkUkHyQ.js","assets/index-tgmMlaxD.js","assets/index-5raYKndb.css","assets/index-0c28a0fd.esm-aDRZzFWR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}