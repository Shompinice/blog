import{_ as g}from"./ValaxyMain.vue_vue_type_script_setup_true_lang.DqB0KS67.js";import{f as b,u as y,d as C}from"./chunks/vue-router.Zf6w1DYy.js";import{J as c,V as o,v,K as $,S as e,W as a,U as w,a6 as s,y as k}from"./framework.D5YeqtOo.js";import"./app.D9mrTP1r.js";import"./chunks/dayjs.CCYrSalk.js";import"./chunks/pinia.BSPaDwd_.js";import"./chunks/vue-i18n.BoRxRNiX.js";import"./chunks/nprogress.BahbDzmd.js";import"./common.Buwv_arv.js";const U="/uploads/20230517/c226bdccc3fb573b322fdb9d14166d7c.png",W="/uploads/20230516/43fcbec25efbedb1a580466b69e2e2cb.png",F="/uploads/20230516/838f5dccfd051ba0d3f090b70a97a26e.png",G="/uploads/20230516/d6c77b1d93c29a03535fdd9a7953bd3e.png",I="/uploads/20230516/6495546d34129ee6711cfc92badc1c3c.png",O="/uploads/20230516/f282bdb52aa402821659f49dfe1df56a.png",z=b("/posts/FastCopy——XCopy 的 GUI 包装器设计",async r=>JSON.parse('{"title":"FastCopy——XCopy 的 GUI 包装器设计","description":"","frontmatter":{"title":"FastCopy——XCopy 的 GUI 包装器设计","date":1684058682,"updated":1684330041},"headers":[{"level":2,"title":"仓库地址","slug":"仓库地址","link":"#仓库地址","children":[]},{"level":2,"title":"下载地址","slug":"下载地址","link":"#下载地址","children":[]},{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"relativePath":"pages/posts/FastCopy——XCopy 的 GUI 包装器设计.md","lastUpdated":1743997752000}'),{lazy:(r,i)=>r.name===i.name}),J={__name:"FastCopy——XCopy 的 GUI 包装器设计",setup(r,{expose:i}){var p;const{data:d}=z(),f=C(),m=y(),l=Object.assign(m.meta.frontmatter||{},((p=d.value)==null?void 0:p.frontmatter)||{});return m.meta.frontmatter=l,f.currentRoute.value.data=d.value,k("valaxy:frontmatter",l),globalThis.$frontmatter=l,i({frontmatter:{title:"FastCopy——XCopy 的 GUI 包装器设计",date:1684058682,updated:1684330041}}),(n,t)=>{const u=g;return $(),c(u,{frontmatter:v(l)},{"main-content-md":o(()=>[t[0]||(t[0]=a("p",null,[s("Windows 内置的 GUI 包装器 "),a("code",null,"robocopy"),s(" 和 "),a("code",null,"xcopy"),s("。")],-1)),w(" more "),t[1]||(t[1]=a("h2",{id:"仓库地址",tabindex:"-1"},[s("仓库地址 "),a("a",{class:"header-anchor",href:"#仓库地址","aria-label":'Permalink to "仓库地址"'},"​")],-1)),t[2]||(t[2]=a("p",null,[a("a",{href:"https://github.com/HO-COOH/FastCopy",target:"_blank",rel:"noreferrer"},"https://github.com/HO-COOH/FastCopy")],-1)),t[3]||(t[3]=a("h2",{id:"下载地址",tabindex:"-1"},[s("下载地址 "),a("a",{class:"header-anchor",href:"#下载地址","aria-label":'Permalink to "下载地址"'},"​")],-1)),t[4]||(t[4]=a("h2",{id:"概述",tabindex:"-1"},[s("概述 "),a("a",{class:"header-anchor",href:"#概述","aria-label":'Permalink to "概述"'},"​")],-1)),t[5]||(t[5]=a("p",null,[s("Windows 内置的 GUI 包装器 "),a("code",null,"robocopy"),s(" 和 "),a("code",null,"xcopy"),s("。")],-1)),t[6]||(t[6]=a("figure",null,[a("img",{src:U,alt:"输入图片说明",loading:"lazy",decoding:"async"})],-1)),t[7]||(t[7]=a("p",null,"我们一开始就设计了多合一的复制对话框，就像 Windows 传统的复制对话框一样",-1)),t[8]||(t[8]=a("figure",null,[a("img",{src:"https://media.askvg.com/articles/images2/Windows_8_Explorer_Copy_Dialog_Box.png",alt:"Windows 8 Copy Dialog Box",loading:"lazy",decoding:"async"})],-1)),t[9]||(t[9]=a("figure",null,[a("img",{src:W,alt:"image.png",loading:"lazy",decoding:"async"})],-1)),t[10]||(t[10]=a("p",null,"由于开发计划的变更，我们决定专注于更急迫的开发任务上。也就是先支持单个复制实例，多个复制实例出现时，他们将拥有单独的对话框。",-1)),t[11]||(t[11]=a("p",null,'复制是一个轻量的操作，或者至少它应该展示出轻量的感觉，因此它不应该使用 Mica 材质，而应该使用 Acrylic 材质，以传达 "临时，轻量，快速" 的特征',-1)),t[12]||(t[12]=a("figure",null,[a("img",{src:F,alt:"image.png",loading:"lazy",decoding:"async"})],-1)),t[13]||(t[13]=a("p",null,"尽管多年来 Windows 的复制进度条（正常状态）都使用绿色，但我们决定跟随新版的设计规范，在正常状态下，进度颜色跟随强调色。",-1)),t[14]||(t[14]=a("p",null,"这是 Windows 8/10 的复制冲突对话框，重新设计如下图",-1)),t[15]||(t[15]=a("p",null,[a("img",{src:"https://pic1.zhimg.com/80/v2-a90cf3f2e6c1c266a25fa9b96398bdf4_1440w.webp",alt:"Windows 复制冲突对话框"}),a("img",{src:G,alt:"image.png"})],-1)),t[16]||(t[16]=a("p",null,'当你选择第三项，"比较两个文件的信息" 时，它会弹出一个新的对话框，过多的对话框不得不是一个灾难。因此我们将其直接合并在一个对话框内，用颜色区分展开关系。',-1)),t[17]||(t[17]=a("p",null,[a("img",{src:I,alt:"image.png"}),a("img",{src:O,alt:"image.png"})],-1))]),"main-header":o(()=>[e(n.$slots,"main-header")]),"main-header-after":o(()=>[e(n.$slots,"main-header-after")]),"main-nav":o(()=>[e(n.$slots,"main-nav")]),"main-content-before":o(()=>[e(n.$slots,"main-content-before")]),"main-content":o(()=>[e(n.$slots,"main-content")]),"main-content-after":o(()=>[e(n.$slots,"main-content-after")]),"main-nav-before":o(()=>[e(n.$slots,"main-nav-before")]),"main-nav-after":o(()=>[e(n.$slots,"main-nav-after")]),comment:o(()=>[e(n.$slots,"comment")]),footer:o(()=>[e(n.$slots,"footer")]),aside:o(()=>[e(n.$slots,"aside")]),"aside-custom":o(()=>[e(n.$slots,"aside-custom")]),default:o(()=>[e(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{J as default,z as usePageData};
