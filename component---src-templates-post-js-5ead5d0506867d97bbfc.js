(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{168:function(e,t,a){"use strict";a.r(t);a(177);var n=a(5),r=a.n(n),o=a(0),c=a.n(o),l=a(171),i=a.n(l),s=a(188),u=a.n(s),m=a(172),p=a(218),d=a.n(p),f=a(219),h=a.n(f),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("aside",{className:"note"},c.a.createElement("div",{className:"container note-container"},c.a.createElement("div",{className:"flex-author"},c.a.createElement("p",null,"I'm Gustavo, researcher, engineer and musician. I really hope my articles are helpful. Please consider supporting what I do."),c.a.createElement("a",{href:"https://ko-fi.com/quinoqg",className:"donate-button",target:"_blank"},"Buy me a coffee"," ",c.a.createElement("img",{src:d.a,className:"coffee-icon"})),c.a.createElement("a",{className:"patreon-button",href:"https://www.patreon.com/quinoqg",target:"_blank"},"Patreon")),c.a.createElement("div",{className:"flex-avatar"},c.a.createElement("img",{className:"avatar",src:h.a}))))},t}(o.Component),E=a(191),b=a.n(E),v=a(57),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,a=e.size;return c.a.createElement("div",{className:"tag-container"},t&&t.map(function(e){return c.a.createElement(v.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+b()(e)+"/"},c.a.createElement("span",{className:a||null},e))}))},t}(o.Component),N=a(185),w=a(180),k=a(170),x=a.n(k),_=a(183);a.d(t,"default",function(){return I}),a.d(t,"pageQuery",function(){return S});var I=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props.pageContext.slug,a=this.props.data.markdownRemark,n=a.frontmatter;n.id||(n.id=t),n.category_id||(n.category_id=x.a.postDefaultCategoryID),n.thumbnail&&(e=n.thumbnail.childImageSharp.fixed);var r=Object(_.b)(n.date),o=Object(_.a)(n),l="https://twitter.com/search?q="+x.a.siteUrl+"/"+n.slug+"/",s="http://twitter.com/share?text="+encodeURIComponent(n.title)+"&url="+x.a.siteUrl+"/"+n.slug+"/&via=quinoqg";return c.a.createElement(m.a,null,c.a.createElement(i.a,null,c.a.createElement("title",null,n.title+" – "+x.a.siteTitle)),c.a.createElement(w.a,{postPath:t,postNode:a,postSEO:!0}),c.a.createElement("article",{className:"single container"},c.a.createElement("header",{className:"single-header "+(e?"":"no-thumbnail")},e?c.a.createElement(u.a,{fixed:n.thumbnail.childImageSharp.fixed}):null,c.a.createElement("div",{className:"flex"},c.a.createElement("h1",null,n.title),c.a.createElement("div",{className:"post-meta"},c.a.createElement("time",{className:"date"},r),"/",c.a.createElement("a",{className:"twitter-link",href:s},"Share"),"/",c.a.createElement("a",{className:"github-link",href:o,target:"_blank"},"Edit on Github ✏️")),c.a.createElement(y,{tags:n.tags}))),c.a.createElement("div",{className:"post",dangerouslySetInnerHTML:{__html:a.html}}),c.a.createElement("div",null," ",c.a.createElement("a",{className:"button twitter-button",href:s,target:"_blank"},"Share on Twitter")," ",c.a.createElement("a",{className:"button twitter-button",href:l,target:"_blank"},"Discuss on Twitter")),c.a.createElement("h3",null,"Stay in touch"),c.a.createElement("p",null,"Like the posts you see here? Sign up to get notified about new ones."),c.a.createElement(N.a,null)),c.a.createElement(g,{config:x.a}))},t}(o.Component),S="1356658459"},183:function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"a",function(){return u});var n=a(178),r=a.n(n),o=a(170),c=a.n(o),l=a(184),i=a.n(l),s=function(e){return i.a.utc(e).format(c.a.dateFormat)},u=function(e){var t=i.a.utc(e.date).format(c.a.dateFromFormat);return r()(c.a.repo,"/blob/master/content/posts",t+"-"+e.slug+".md")}},185:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(5),r=a.n(n),o=a(0),c=a.n(o),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("a",{href:"http://eepurl.com/gsYMAH"},"Join my mailing list!")},t}(o.Component)},218:function(e,t,a){e.exports=a.p+"static/coffee-ab3d234dc206fcf5d5a3bb1a98da478a.svg"},219:function(e,t,a){e.exports=a.p+"static/GustavoFooter-e895a9896cc718b35e50dc8ca67c71da.jpg"}}]);
//# sourceMappingURL=component---src-templates-post-js-5ead5d0506867d97bbfc.js.map