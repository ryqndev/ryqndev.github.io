import{j as s,r as e,V as m,B as i,T as c}from"./index-mYr0JjBg.js";import{C as x,c as d,a as p}from"./CameraControls-js-Ug5DX.js";import{u as l,a as h}from"./index-0c28a0fd.esm-9DXOOA34.js";import"./extends-dGVwEr9R.js";import"./Home-7mXzzsdQ.js";const j="/assets/darker_eso-7cTDF_-D.jpg",B=({project:r})=>s.jsxs(x,{id:d.stars,children:[s.jsx(p,{project:r}),s.jsx(u,{})]}),u=e.memo(()=>{const r=l(c,j),a=e.useRef(null),[o]=e.useState(()=>new Array(150).fill(void 0).map(t=>new m(Math.random()*800-400,Math.random()*800-400,Math.random()*800-400)));return h(()=>{a.current&&(a.current.rotation.y+=1e-4)}),s.jsxs("mesh",{rotation:[1.2,0,1],ref:a,children:[s.jsx("sphereGeometry",{args:[400,40,40]}),s.jsx("meshBasicMaterial",{side:i,map:r}),s.jsx(s.Fragment,{children:o.map((t,n)=>s.jsxs("mesh",{position:t,children:[s.jsx("sphereGeometry",{args:[.6,5,5]}),s.jsx("meshBasicMaterial",{color:"#00ffff"})]},n))})]})});export{B as Stars};
