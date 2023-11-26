import{r as s,j as e}from"./index-mYr0JjBg.js";import{C as x,G as y}from"./GLTFLoader-Z1DHGbFd.js";import{u as m,R as i,C as c}from"./react-three-rapier.esm-qe9AE6Pz.js";import{u as f}from"./KeyboardControls-bNEl0ohx.js";import{u as j}from"./index-0c28a0fd.esm-9DXOOA34.js";import{u as b}from"./useGLTF-66xLpmhE.js";import"./extends-dGVwEr9R.js";const a=({body:d,wheel:u,bodyAnchor:t,wheelAnchor:o,rotationAxis:h})=>{const[r]=f(),n=m(d,u,[t,o,h]);return s.useEffect(()=>r(l=>l,l=>{n.current&&n.current.configureMotorVelocity(l.FORWARD?15:l.BACKWARD?-15:0,1e3)}),[]),null},p="/assets/delivery_robot/zotbot.gltf",T=s.memo(function(){const{scene:u}=j(y,p),t=s.useRef(null),o=[[-7,1.5,4],[-7,1.5,-4],[7,1.5,4],[7,1.5,-4]],[h]=f(),r=s.useRef(o.map(()=>s.createRef()));return s.useEffect(()=>h(n=>n,n=>{t.current&&t.current.addTorque({x:n.LEFT?1e3:n.RIGHT?-1e3:0,y:0,z:0},!0)}),[]),e.jsxs("group",{position:[0,40,0],children:[e.jsx(i,{colliders:"hull",restitution:0,ref:t,children:e.jsx(x,{object:u,scale:2})}),e.jsxs("group",{children:[e.jsx(i,{position:o[0],colliders:"hull",type:"dynamic",ref:r.current[0],canSleep:!1,children:e.jsx(c,{args:[.1,2],rotation:[Math.PI/2,0,Math.PI/2]})}),e.jsx(a,{body:t,wheel:r.current[0],bodyAnchor:o[0],wheelAnchor:[0,0,0],rotationAxis:[1,0,0]}),e.jsx(i,{position:o[2],colliders:"hull",type:"dynamic",ref:r.current[2],canSleep:!1,children:e.jsx(c,{args:[.1,2],rotation:[Math.PI/2,0,Math.PI/2]})}),e.jsx(a,{body:t,wheel:r.current[2],bodyAnchor:o[2],wheelAnchor:[0,0,0],rotationAxis:[1,0,0]})]}),e.jsx(i,{position:o[1],colliders:"hull",type:"dynamic",ref:r.current[1],canSleep:!1,children:e.jsx(c,{args:[.1,2],rotation:[Math.PI/2,0,Math.PI/2]})}),e.jsx(a,{body:t,wheel:r.current[1],bodyAnchor:o[1],wheelAnchor:[0,0,0],rotationAxis:[1,0,0]}),e.jsx(i,{position:o[3],colliders:"hull",type:"dynamic",ref:r.current[3],canSleep:!1,children:e.jsx(c,{args:[.1,2],rotation:[Math.PI/2,0,Math.PI/2]})}),e.jsx(a,{body:t,wheel:r.current[3],bodyAnchor:o[3],wheelAnchor:[0,0,0],rotationAxis:[1,0,0]})]})});b.preload(p);export{T as DrivableZotbot};
