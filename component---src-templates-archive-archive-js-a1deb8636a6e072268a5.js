(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(159),s=a(160),c=a(181),u=a(211),d=a(152),p=a.n(d),g=function(e){var t=e.data,a=e.pageContext,n=a.archivePage,i=n>1?n-1:null,o=n<a.lastArchivePage?n+1:null;return r.a.createElement(l.a,{title:"Archive"},r.a.createElement(s.a,{title:"Archive | Page "+n,description:"Old posts",path:p.a.pages.archive}),r.a.createElement(c.a,{posts:t.allMarkdownRemark.edges}),r.a.createElement(u.a,{prevPage:i,nextPage:o}))};g.propTypes={data:o.a.shape({allMarkdownRemark:o.a.shape({edges:o.a.arrayOf(o.a.object.isRequired).isRequired}).isRequired}).isRequired,pageContext:o.a.shape({archivePage:o.a.number.isRequired,lastArchivePage:o.a.number.isRequired}).isRequired};var m="3350011143";t.default=g},152:function(e,t){e.exports={pathPrefix:"/",siteUrl:"https://bcphd.github.io",siteTitle:"BC PhD",siteDescription:"coder & prof",author:"bc",postsForArchivePage:3,defaultLanguage:"en",disqusScript:"https://bcphd.disqus.com/embed.js",pages:{home:"/",blog:"blog",about:"about",tag:"tag",archive:"archive"},social:{github:"https://github.com/bcphd",linkedin:"https://www.linkedin.com/in/briancartercst/",rss:"/rss.xml"},tags:{angular:{description:"Angular is an open source web application platform."},electron:{description:"Electron is a framework for building cross-platform desktop applications with web technology."},javascript:{description:"JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages."},laravel:{description:"Laravel is a PHP framework for building web applications following the MVC pattern."},nodejs:{name:"Node.js",description:"Node.js is a tool for executing JavaScript in a variety of environments."},rxjs:{name:"RxJS",description:"RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code."},sass:{description:"Sass is a stable extension to classic CSS."},typescript:{description:"TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."},react:{description:"React is an open source JavaScript library used for designing user interfaces."},vuejs:{name:"Vue.js",description:"Vue.js is a JavaScript framework for building interactive web applications."},datastructures:{name:"Data Structures",description:"Data structures is a course module on data structures and algorithms."},dotnet:{name:".NET",description:"The .NET framework, is much more than just a software framework."}}}},153:function(e,t,a){a(74),a(156),a(37),a(171),a(36);var n=a(152),r={resolveUrl:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce(function(e,t){var a=t.toString().trim();return a&&(e+=(""===e?"":"/")+a.replace(/^\/|\/$/g,"")),e},"")},resolvePageUrl:function(){return r.resolveUrl.apply(r,arguments)+"/"},getSuggestedPosts:function(e,t,a){var n=function(t){var a=0;return t.node.frontmatter.tags.forEach(function(t){a+=-1!==e.frontmatter.tags.indexOf(t)?1:0}),a};return t.edges.sort(function(e,t){return n(t)-n(e)}).slice(0,a)},getRelatedTranslations:function(e,t){return t.filter(function(t){return t.node.fileAbsolutePath.split("/").slice(-2,-1)[0]===e.fileAbsolutePath.split("/").slice(-2,-1)[0]}).map(function(e){var t=e.node,a=t.fileAbsolutePath.split(".").slice(-2,-1)[0];return{hreflang:"index"!==a.slice(-5)?a:n.defaultLanguage,path:r.resolvePageUrl(t.frontmatter.path)}})},capitalize:function(e){return e[0].toUpperCase()+e.slice(1)}};e.exports=r},154:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(155);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},155:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},157:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},158:function(e){e.exports={data:{file:{childImageSharp:{fixed:{width:500,height:281,src:"/static/2e1eebde07dacc2bea3f52c07324d1e0/90fcb/facebook-logo.png",srcSet:"/static/2e1eebde07dacc2bea3f52c07324d1e0/90fcb/facebook-logo.png 1x,\n/static/2e1eebde07dacc2bea3f52c07324d1e0/8658c/facebook-logo.png 1.5x,\n/static/2e1eebde07dacc2bea3f52c07324d1e0/c2a4f/facebook-logo.png 2x,\n/static/2e1eebde07dacc2bea3f52c07324d1e0/24599/facebook-logo.png 3x"}}}}}},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(34),s=a.n(l),c=a(7),u=a.n(c),d=a(154),p=a(162),g=a(170),m=a.n(g),f=a(152),h=a.n(f),v=a(153),b=a.n(v),E=function(e){function t(){var t;return(t=e.call(this)||this).render=function(){return r.a.createElement("div",{className:m.a.container,style:t.state.fixedHeader?{backgroundImage:"none"}:null},r.a.createElement("div",{className:m.a.titleContainer},r.a.createElement("div",{className:m.a.title},r.a.createElement(d.a,{to:b.a.resolvePageUrl(h.a.pages.home)},r.a.createElement("h4",null,h.a.siteTitle),r.a.createElement("p",{className:t.state.fixedHeader?m.a.hiddenDescription:m.a.visibleDescription},h.a.siteDescription))),r.a.createElement("div",{className:m.a.menuButton},t.state.collapsedMenu?r.a.createElement(p.c,{size:"30",onClick:t.toggleMenu}):r.a.createElement(p.m,{size:"30",onClick:t.toggleMenu}))),r.a.createElement("div",{className:[m.a.list,t.state.collapsedMenu?m.a.collapsedMenu:m.a.expandedMenu].join(" ")},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.a,{to:b.a.resolvePageUrl(h.a.pages.home)},"Home")),r.a.createElement("li",null,r.a.createElement(d.a,{to:b.a.resolvePageUrl(h.a.pages.tag)},"Tags")),r.a.createElement("li",null,r.a.createElement(d.a,{to:b.a.resolvePageUrl(h.a.pages.about)},"About"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"nofollow noopener noreferrer",href:h.a.social.github},r.a.createElement(p.f,{size:"30"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"nofollow noopener noreferrer",href:h.a.social.linkedin},r.a.createElement(p.g,{size:"30"}))),r.a.createElement("li",null,r.a.createElement(d.a,{to:b.a.resolveUrl(h.a.social.rss)},r.a.createElement(p.l,{size:"30"}))))))},t.state={lastScrollY:0,fixedHeader:!1,collapsedMenu:!0},t.toggleFixedHeader=t.toggleFixedHeader.bind(s()(t)),t.toggleMenu=t.toggleMenu.bind(s()(t)),t}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.toggleFixedHeader)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.toggleFixedHeader)},a.toggleFixedHeader=function(){var e=this;this.toggleFixedHeader.animationInProgress||(this.toggleFixedHeader.animationInProgress=!0,setTimeout(function(){e.setState({lastScrollY:window.scrollY,fixedHeader:window.scrollY>100&&e.state.lastScrollY<window.scrollY},function(){return e.toggleFixedHeader.animationInProgress=!1})},200))},a.toggleMenu=function(){this.setState({collapsedMenu:!this.state.collapsedMenu})},t}(n.Component),y=a(172),w=a.n(y),x=function(){return r.a.createElement("div",{className:w.a.container},r.a.createElement("p",null,"Made with Gatbsy.js, hosted on GitHub Pages"))},P=(a(173),a(174)),R=a.n(P),S=function(e){var t=e.children,a=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:R.a.container},a?r.a.createElement("div",{className:R.a.title},r.a.createElement("h1",null,a)):null,t),r.a.createElement(x,null))};S.propTypes={children:o.a.node.isRequired,title:o.a.string},S.defaultProps={title:""};var q=S;a.d(t,"a",function(){return q})},160:function(e,t,a){"use strict";a(165);var n=a(158),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(175),c=a.n(s),u=a(154),d=a(152),p=a.n(d),g=a(153),m=a.n(g);function f(e){var t=e.title,a=e.description,r=e.path,o=e.lang,l=e.keywords,s=e.contentType,d=e.imageUrl,g=e.translations,f=e.meta;return i.a.createElement(u.b,{query:h,render:function(e){var n=l&&l.length>0?{name:"keywords",content:l.join(", ")}:[],u=m.a.resolvePageUrl(p.a.siteUrl,p.a.pathPrefix,r),h=m.a.resolveUrl(p.a.siteUrl,d||e.file.childImageSharp.fixed.src);return i.a.createElement(c.a,{title:t,titleTemplate:"%s | "+p.a.siteTitle,meta:[{name:"description",content:a},{property:"og:title",content:t},{property:"og:type",content:s||"website"},{property:"og:url",content:u},{property:"og:description",content:a},{property:"og:image",content:h},{property:"og:image:alt",content:a},{property:"og:site_name",content:p.a.siteTitle},{property:"og:locale",content:o||"en_US"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:t},{name:"twitter:description",content:a},{name:"twitter:image",content:h},{name:"twitter:image:alt",content:a},{name:"twitter:site",content:p.a.author},{name:"twitter:creator",content:p.a.author}].concat(n).concat(f||[]),link:[{rel:"canonical",href:u}].concat(g?g.map(function(e){return{rel:"alternate",hreflang:e.hreflang,href:m.a.resolvePageUrl(p.a.siteUrl,p.a.pathPrefix,e.path)}}):[])})},data:n})}f.propTypes={title:l.a.string.isRequired,description:l.a.string.isRequired,path:l.a.string.isRequired,lang:l.a.string,contentType:l.a.oneOf(["article","website"]),imageUrl:l.a.string,keywords:l.a.arrayOf(l.a.string),translations:l.a.arrayOf(l.a.shape({hreflang:l.a.string.isRequired,path:l.a.string.isRequired})),meta:l.a.arrayOf(l.a.shape({property:l.a.string.isRequired,content:l.a.string.isRequired}))};var h="1166109120",v=f;a.d(t,"a",function(){return v})},161:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},168:function(e,t,a){"use strict";a(161),a(156);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(154),s=a(190),c=a.n(s),u=a(152),d=a.n(u),p=a(153),g=a.n(p),m=function(e){var t=e.tags;return r.a.createElement("div",{className:c.a.tags},t.filter(function(e,a){return a===t.indexOf(e)}).sort().map(function(e){return r.a.createElement(l.a,{to:g.a.resolvePageUrl(d.a.pages.tag,e),key:e},d.a.tags[e].name||g.a.capitalize(e))}))};m.propTypes={tags:o.a.arrayOf(o.a.string).isRequired};var f=m;a.d(t,"a",function(){return f})},181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(154),s=a(164),c=a.n(s),u=a(196),d=a.n(u),p=a(168),g=a(153),m=a.n(g),f=function(e){var t=e.posts;return r.a.createElement("div",{className:d.a.container},t.map(function(e,t){var a=e.node.frontmatter,n=a.title,i=a.date,o=a.path,s=a.tags,u=a.cover,g=a.excerpt;return r.a.createElement("div",{key:n,className:d.a.post},r.a.createElement("div",{className:d.a.cover},r.a.createElement(l.a,{to:m.a.resolvePageUrl(o)},r.a.createElement(c.a,{fluid:u.childImageSharp.fluid,title:g,alt:n}))),r.a.createElement("div",{className:d.a.content},r.a.createElement(l.a,{to:m.a.resolvePageUrl(o)},i?r.a.createElement("label",null,i):null,r.a.createElement("h2",null,n),r.a.createElement("p",null,g)),r.a.createElement(p.a,{tags:s})))}))};f.propTypes={posts:o.a.arrayOf(o.a.shape({node:o.a.shape({frontmatter:o.a.shape({title:o.a.string.isRequired,date:o.a.string,path:o.a.string.isRequired,tags:o.a.arrayOf(o.a.string).isRequired,cover:o.a.shape({childImageSharp:o.a.shape({fluid:o.a.object.isRequired}).isRequired}).isRequired})})}))};var h=f;a.d(t,"a",function(){return h})},189:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(154),s=a(210),c=a.n(s),u=function(e){var t=e.children,a=e.to,n=e.buttonStyle;return r.a.createElement(l.a,{to:a,className:c.a.button+" "+n},t)};u.propTypes={children:o.a.node.isRequired,to:o.a.string.isRequired,buttonStyle:o.a.string},u.defaultProps={buttonStyle:""};var d=u;a.d(t,"a",function(){return d})},211:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(162),s=a(189),c=a(152),u=a.n(c),d=a(153),p=a.n(d),g=a(227),m=a.n(g),f=function(e){var t=e.prevPage,a=e.nextPage;return r.a.createElement("div",{className:m.a.container},t?r.a.createElement(s.a,{to:p.a.resolvePageUrl(u.a.pages.archive,t),buttonStyle:m.a.buttonLeft},r.a.createElement(l.a,null),r.a.createElement("span",null,"Newer posts")):null,a?r.a.createElement(s.a,{to:p.a.resolvePageUrl(u.a.pages.archive,a),buttonStyle:m.a.buttonRight},r.a.createElement("span",null,"Older posts"),r.a.createElement(l.b,null)):null)};f.propTypes={prevPage:o.a.number,nextPage:o.a.number};var h=f;a.d(t,"a",function(){return h})}}]);
//# sourceMappingURL=component---src-templates-archive-archive-js-a1deb8636a6e072268a5.js.map