import{a as h}from"./js-cookie-cf83ad76.js";import{s as g}from"./pinia-be7e992d.js";import{d as w,S as v,f as b,s as C,g as R}from"./index-d11ae465.js";import{k as p,e as I,i as U,ah as e,o as V,c as y,W as o,u as m,Q as l}from"./@vue-d9027515.js";import"./vue-demi-71ba0ef2.js";import"./vue-router-a2fac16f.js";import"./vue-i18n-0a4428f9.js";import"./@intlify-ea47d1db.js";import"./source-map-7d7e1c08.js";import"./vue-0d97455d.js";import"./@element-plus-96a31696.js";import"./nprogress-08a53ce8.js";import"./axios-707ed124.js";import"./qs-de266cd2.js";import"./side-channel-53d8bc92.js";import"./get-intrinsic-b9397c9a.js";import"./has-symbols-e8f3ca0e.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./call-bind-6799e9cc.js";import"./object-inspect-8fd4bade.js";import"./element-plus-53094f07.js";import"./lodash-es-36eb724a.js";import"./@vueuse-2d9216d7.js";import"./@sxzz-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-f6fdf7b4.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-b8998962.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-8a8891e3.js";import"./mitt-f7ef348c.js";import"./vue-grid-layout-17dc42b6.js";const A={class:"layout-pd"},F=p({name:"limitsFrontEndPage"}),uo=p({...F,setup(k){const r=w(),{userInfos:s}=g(r),t=I(""),u=()=>{t.value=s.value.roles[0]},d=async()=>{v.remove("userInfo"),b(),h.set("userName",t.value),await r.setUserInfos(),await C(),R()};return U(()=>{u()}),(x,a)=>{const n=e("el-alert"),i=e("el-radio-button"),c=e("el-radio-group"),_=e("el-card");return V(),y("div",A,[o(n,{title:"温馨提示：此权限页面代码及效果只作为演示使用，若出现不可逆转的bug，请尝试 `F5` 刷新页面。若实际项目中非要实现此用户权限切换功能，\n      请在切换方法 `onRadioChange` 最后面添加刷新代码 `window.location.reload()`。 请注意：按钮权限页面中的演示2（指令模式）、演示3（函数模式）\n      切换用户时无法动态演示，想要动态演示，请按 `F5` 或者添加 `window.location.reload()`。",type:"warning",closable:!1}),o(n,{title:`当前用户页面权限：[${m(s).roles}]，当前用户按钮权限：[${m(s).authBtnList}]`,type:"success",closable:!1,class:"mt15"},null,8,["title"]),o(_,{shadow:"hover",header:"切换用户演示，前端控制不同用户显示不同页面、按钮权限",class:"mt15"},{default:l(()=>[o(c,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=f=>t.value=f),size:"default",onChange:d},{default:l(()=>[o(i,{label:"admin"}),o(i,{label:"common"})]),_:1},8,["modelValue"])]),_:1})])}}});export{uo as default};
