import{d as N,a3 as P,a2 as V,i as Y,u as j,y as A,ai as E,O as d,a0 as I,j as R,a9 as z,S as D,c as h,w as n,a6 as H,o,q as a,f as t,g as r,t as u,b as y,e as O,U,F as G,h as J,a as K}from"./app-6db15e8e.js";import{_ as M}from"./YunCard.vue_vue_type_style_index_0_lang-4753f956.js";import{_ as Q}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-dfc9174a.js";import{_ as W}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-befbaffb.js";const X={class:"yun-text-light",text:"center",p:"2"},Z={class:"justify-center items-end",flex:"~ wrap",gap:"1"},tt=["onClick"],et={"inline-flex":""},st={"inline-flex":"",text:"xs"},ct=N({__name:"tags",setup(nt){const x=P(),v=V(),C=Y(),{t:m}=j(),i=A(),{tags:_,getTagStyle:w}=E({primary:C.value.colors.primary}),s=d(()=>x.query.tag||""),S=I(),T=d(()=>S.postList.filter(e=>e.tags?typeof e.tags=="string"?e.tags===s.value:e.tags.includes(s.value):!1)),p=R(),{show:b}=z(p),k=l=>{v.push({query:{tag:l}}),b()},B=D(i);return(l,e)=>{const f=W,$=K("router-view"),q=Q,F=M,L=H;return o(),h(L,null,{"main-header":n(()=>[a(f,{title:t(B)||t(m)("menu.tags"),icon:t(i).icon||"i-ri-tag-line",color:t(i).color},null,8,["title","icon","color"])]),"main-content":n(()=>[r("div",X,u(t(m)("counter.tags",Array.from(t(_)).length)),1),r("div",Z,[(o(!0),y(G,null,O(Array.from(t(_)).sort(),([c,g])=>(o(),y("span",{key:c,"inline-flex":"",my:"2",class:"post-tag cursor-pointer items-baseline leading-4",style:U(t(w)(g.count)),p:"1",onClick:ot=>k(c.toString())},[r("span",et,"#"+u(c),1),r("span",st,"["+u(g.count)+"]",1)],12,tt))),128))]),a($)]),"main-nav-before":n(()=>[t(s)?(o(),h(F,{key:0,ref_key:"collapse",ref:p,m:"t-4",w:"full"},{default:n(()=>[a(f,{title:t(s),icon:"i-ri-hashtag"},null,8,["title"]),a(q,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:t(T)},null,8,["posts"])]),_:1},512)):J("v-if",!0)]),_:1})}}});export{ct as default};
