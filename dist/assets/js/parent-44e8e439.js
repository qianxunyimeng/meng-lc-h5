import{b as I,u as P,e as v,S as x,_ as B}from"./index-7921be16.js";import{k as g,aN as E,$ as S,j as u,H as D,n as _,i as b,_ as M,f as O,ah as U,o as f,c as j,W as a,Q as l,Y as d,u as o,P as w,R,X as y,S as z,az as H}from"./@vue-d9027515.js";import{u as Q,b as W}from"./vue-router-a2fac16f.js";import{s as V}from"./pinia-be7e992d.js";import"./vue-i18n-0a4428f9.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-0d97455d.js";import"./js-cookie-cf83ad76.js";import"./@element-plus-96a31696.js";import"./nprogress-08a53ce8.js";import"./axios-707ed124.js";import"./qs-de266cd2.js";import"./side-channel-53d8bc92.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-6799e9cc.js";import"./object-inspect-8fd4bade.js";import"./element-plus-53094f07.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-17dc42b6.js";import"./vue-demi-71ba0ef2.js";const X={class:"layout-parent"},Y=g({name:"layoutParentView"}),Ce=g({...Y,setup($){const k=E(()=>B(()=>import("./iframes-0f04ebcc.js"),["assets/js/iframes-0f04ebcc.js","assets/js/@vue-d9027515.js","assets/js/vue-router-a2fac16f.js"])),i=Q(),A=W(),K=I(),L=P(),{keepAliveNames:m,cachedViews:c}=V(K),{themeConfig:n}=V(L),e=S({refreshRouterViewKey:"",iframeRefreshKey:"",keepAliveNameList:[],iframeList:[]}),p=u(()=>n.value.animation),N=u(()=>n.value.isTagsview?c.value:e.keepAliveNameList),h=u(()=>i.meta.isIframe),T=async()=>{A.getRoutes().forEach(t=>{t.meta.isIframe&&(t.meta.isIframeOpen=!1,t.meta.loading=!0,e.iframeList.push({...t}))})};return D(()=>{e.keepAliveNameList=m.value,v.on("onTagsViewRefreshRouterView",t=>{e.keepAliveNameList=m.value.filter(s=>i.name!==s),e.refreshRouterViewKey="",e.iframeRefreshKey="",_(()=>{e.refreshRouterViewKey=t,e.iframeRefreshKey=t,e.keepAliveNameList=m.value})})}),b(()=>{T(),_(()=>{setTimeout(()=>{if(n.value.isCacheTagsView){const t=x.get("tagsViewList")||[];c.value=t.filter(s=>{var r;return(r=s.meta)==null?void 0:r.isKeepAlive}).map(s=>s.name)}},0)})}),M(()=>{v.off("onTagsViewRefreshRouterView",()=>{})}),O(()=>i.fullPath,()=>{e.refreshRouterViewKey=decodeURI(i.fullPath)},{immediate:!0}),(t,s)=>{const r=U("router-view");return f(),j("div",X,[a(r,null,{default:l(({Component:C})=>[a(d,{name:o(p),mode:"out-in"},{default:l(()=>[(f(),w(H,{include:o(N)},[R((f(),w(z(C),{key:e.refreshRouterViewKey,class:"w100"})),[[y,!o(h)]])],1032,["include"]))]),_:2},1032,["name"])]),_:1}),a(d,{name:o(p),mode:"out-in"},{default:l(()=>[R(a(o(k),{class:"w100","refresh-key":e.iframeRefreshKey,name:o(p),list:e.iframeList},null,8,["refresh-key","name","list"]),[[y,o(h)]])]),_:1},8,["name"])])}}});export{Ce as default};
