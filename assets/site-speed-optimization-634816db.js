import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-a48d4e5d.js";import{_ as p,c as h,w as t,o as u,g as e,X as i,q as o,h as m,r as s,Z as _,p as f}from"./app-6db15e8e.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-423defcb.js";import"./YunCard.vue_vue_type_style_index_0_lang-4753f956.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-befbaffb.js";const Y=JSON.parse('{"title":"优化站点速度之见解","description":"","frontmatter":{"title":"优化站点速度之见解","date":"2022-07-15T13:32:45.000Z","updated":"2022-07-15T13:32:45.000Z","tags":["CDN","GitHub","速度"],"categories":"优化","readmore":true},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"使用 CDN","slug":"使用-cdn","link":"#使用-cdn","children":[]},{"level":2,"title":"更换网站托管提供商","slug":"更换网站托管提供商","link":"#更换网站托管提供商","children":[]},{"level":2,"title":"减小资源文件体积","slug":"减小资源文件体积","link":"#减小资源文件体积","children":[]}],"relativePath":"pages/posts/site-speed-optimization.md","path":"/home/runner/work/big-cake-jpg.github.io/big-cake-jpg.github.io/pages/posts/site-speed-optimization.md","lastUpdated":1677072683000}'),l=JSON.parse('{"title":"优化站点速度之见解","description":"","frontmatter":{"title":"优化站点速度之见解","date":"2022-07-15T13:32:45.000Z","updated":"2022-07-15T13:32:45.000Z","tags":["CDN","GitHub","速度"],"categories":"优化","readmore":true},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"使用 CDN","slug":"使用-cdn","link":"#使用-cdn","children":[]},{"level":2,"title":"更换网站托管提供商","slug":"更换网站托管提供商","link":"#更换网站托管提供商","children":[]},{"level":2,"title":"减小资源文件体积","slug":"减小资源文件体积","link":"#减小资源文件体积","children":[]}],"relativePath":"pages/posts/site-speed-optimization.md","path":"/home/runner/work/big-cake-jpg.github.io/big-cake-jpg.github.io/pages/posts/site-speed-optimization.md","lastUpdated":1677072683000}'),g={name:"pages/posts/site-speed-optimization.md",data(){return{data:l,frontmatter:l.frontmatter}},setup(){f("pageData",l)}},b={id:"前言",tabindex:"-1"},v=e("p",null,"有没有一种可能，大家当中的一部分人都在为自己的网站速度而苦恼呢？",-1),k=e("p",null,"特别是去年 12 月 jsDelivr 的备案被吊销以后，很多网站的速度明显下降。",-1),N=e("p",null,"这篇文章，我会把我的经验分享给大家，希望能对各位的情况有点作用。",-1),$={id:"使用-cdn",tabindex:"-1"},D=e("p",null,"如同标题所言，CDN 可以帮助分发你的网站资源，加快网站访问速度。",-1),C=e("p",null,"当然，想使用国内的 CDN，意味着你需要为你的网站进行备案。",-1),S=e("p",null,"不过你也可以选择仅使用 CDN 加速资源文件。有很多类似的服务，如 unpkg、jsDelivr、Staticfiles、饿了么等等。",-1),V=e("p",null,"但这些 CDN 都多多少少有点问题，比如国内速度缓慢、被和谐、版本不齐全或不是最新版本、屏蔽匿名访问等等......",-1),z=e("p",null,"大家可以按照自己的喜好选择合适的 CDN 为己所用，如果有其它的服务商也可以在评论区留言造福其他站长。",-1),j=e("p",null,"统一 CDN 也有利于加快网站加载速度，这个嘛就仁者见仁智者见智了。",-1),T={id:"更换网站托管提供商",tabindex:"-1"},w=e("p",null,"很多人把自己的 Hexo 站点部署到了 GitHub Pages，然后整天抱怨速度慢，为何不换一个服务商呢？",-1),A=e("p",null,"很多大厂都免费提供了一些无服务器架构，比如 Vercel、Netlify、Railway。",-1),G=e("p",null,"特别是 Vercel，据说它还为了中国大陆地区的服务专门买了优化线路；",-1),H=e("p",null,"而且 Vercel 用的是 Amazon Global Accelerator（ AGA，好像还是定制的），线路质量和速度自然不用说。",-1),P=e("p",null,"不过即使这样，Vercel 仍然有被和谐的可能性，所以三思而后行。",-1),Z=e("blockquote",null,[e("p",null,"不建议使用 Netlify，因为它真的很慢。")],-1),y={id:"减小资源文件体积",tabindex:"-1"},J=e("p",null,"图片、JavaScript、网页等的大小都会影响网站加载速度，",-1),O=e("p",null,"这就是为什么 JavaScript、HTML、CSS 文件都要尽量去除空格。",-1),B=e("p",null,"图片的话，可以进行压缩。如果你不在意使用旧版 Safari / iOS 的用户，也可以使用 WebP 格式图片。",-1),q=e("p",null,"而使用 WebP 格式可以在不影响图片质量的情况下进一步压缩体积。",-1),L=e("p",null,"大概就这样了，如果各位还有别的办法，也可以在评论区提出来。",-1);function M(a,U,W,R,r,X){const n=_,d=c;return u(),h(d,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":t(()=>[e("h2",b,[i("前言 "),o(n,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:t(()=>[i("#")]),_:1})]),v,k,N,m(" more "),e("h2",$,[i("使用 CDN "),o(n,{class:"header-anchor",href:"#使用-cdn","aria-hidden":"true"},{default:t(()=>[i("#")]),_:1})]),D,C,S,V,z,j,e("h2",T,[i("更换网站托管提供商 "),o(n,{class:"header-anchor",href:"#更换网站托管提供商","aria-hidden":"true"},{default:t(()=>[i("#")]),_:1})]),w,A,G,H,P,Z,e("h2",y,[i("减小资源文件体积 "),o(n,{class:"header-anchor",href:"#减小资源文件体积","aria-hidden":"true"},{default:t(()=>[i("#")]),_:1})]),J,O,B,q,L]),"main-header":t(()=>[s(a.$slots,"main-header")]),"main-header-after":t(()=>[s(a.$slots,"main-header-after")]),"main-nav":t(()=>[s(a.$slots,"main-nav")]),"main-content":t(()=>[s(a.$slots,"main-content")]),"main-content-after":t(()=>[s(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[s(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[s(a.$slots,"main-nav-after")]),comment:t(()=>[s(a.$slots,"comment")]),footer:t(()=>[s(a.$slots,"footer")]),aside:t(()=>[s(a.$slots,"aside")]),"aside-custom":t(()=>[s(a.$slots,"aside-custom")]),default:t(()=>[s(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const x=p(g,[["render",M]]);export{Y as __pageData,x as default};
