(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return A}),n.d(t,"pageQuery",function(){return E});n(78),n(79);var a=n(220),r=n.n(a),i=(n(179),n(199),n(221)),s=n.n(i),M=n(5),c=n.n(M),o=n(0),u=n.n(o),L=n(171),l=n.n(L),j=n(172),m=n(186),w=n(180),g=n(170),N=n.n(g),A=(n(222),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={searchTerm:"",currentCategories:[],posts:t.props.data.posts.edges,filteredPosts:t.props.data.posts.edges},t.handleChange=function(){var e=s()(r.a.mark(function e(n){var a,i,s,M;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.target,s=i.name,M=i.value,e.next=3,t.setState(((a={})[s]=M,a));case 3:t.filterPosts();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.filterPosts=function(){var e=t.state,n=e.posts,a=e.searchTerm,r=e.currentCategories,i=n.filter(function(e){if(e.node.frontmatter.title.toLowerCase().includes(a.toLowerCase()))return!0});r.length>0&&(i=i.filter(function(e){if(e.node.frontmatter.categories&&r.every(function(t){return e.node.frontmatter.categories.includes(t)}))return!0})),t.setState({filteredPosts:i})},t.updateCategories=function(e){t.state.currentCategories.includes(e)?t.setState(function(t){return{currentCategories:t.currentCategories.filter(function(t){return e!==t})}}):t.setState(function(t){return{currentCategories:[].concat(t.currentCategories,[e])}})},t}return c()(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.filteredPosts,a=t.searchTerm,i=t.currentCategories,M=n.length,c=this.props.data.categories.group;return u.a.createElement(j.a,null,u.a.createElement(l.a,{title:"Articles – "+N.a.siteTitle}),u.a.createElement(w.a,null),u.a.createElement("div",{className:"container"},u.a.createElement("h1",null,"Articles"),u.a.createElement("div",{className:"category-container"},c.map(function(t){var n=i.includes(t.fieldValue);return u.a.createElement("div",{className:"category-filter "+(n?"active":""),key:t.fieldValue,onClick:s()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateCategories(t.fieldValue);case 2:return n.next=4,e.filterPosts();case 4:case"end":return n.stop()}},n)}))},t.fieldValue," ",u.a.createElement("strong",{className:"count"},t.totalCount))})),u.a.createElement("div",{className:"search-container"},u.a.createElement("input",{className:"search",type:"text",name:"searchTerm",value:a,placeholder:"Type here to filter posts...",onChange:this.handleChange}),u.a.createElement("div",{className:"filter-count"},M)),u.a.createElement(m.a,{postEdges:n})))},t}(o.Component)),E="2048121965"},170:function(e,t,n){n(36);var a={siteTitle:"Gustavo Quino",siteTitleShort:"Gustavo Quino",siteTitleAlt:"Gustavo Quino",siteLogo:"/logos/logo-48-n.png",siteUrl:"https://www.gquino.com",repo:"https://github.com/gquino/gquino.github.io.git",pathPrefix:"https://www.gquino.com",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",siteDescription:"Personal website of Dr Gustavo Quino, researcher at the University of Oxford and musician.",siteRss:"/rss.xml",googleAnalyticsID:"UA-140451144-1",userEmail:"me@gquino.com",userTwitter:"quinoqg",userLocation:"Oxford, UK",userDescription:"I am a researcher working on the field of solid mechanics.",menuLinks:[{name:"Me",link:"/me/"},{name:"Research",link:"/research/"},{name:"Blog",link:"/blog/"},{name:"Contact",link:"/contact/"}],themeColor:"#3F80FF",backgroundColor:"#ffffff"};"/"===a.pathPrefix?a.pathPrefix="":a.pathPrefix="/"+a.pathPrefix.replace(/^\/|\/$/g,""),"/"===a.siteUrl.substr(-1)&&(a.siteUrl=a.siteUrl.slice(0,-1)),a.siteRss&&"/"!==a.siteRss[0]&&(a.siteRss="/"+a.siteRss),e.exports=a},172:function(e,t,n){"use strict";var a=n(5),r=n.n(a),i=n(0),s=n.n(i),M=n(56),c=n(171),o=n.n(c),u=(n(181),n(179),n(57)),L=n(173),l=n.n(L),j=n(174),m=n.n(j),w=n(175),g=n.n(w),N=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={scrolled:!1},t.navOnScroll=function(){window.scrollY>20?t.setState({scrolled:!0}):t.setState({scrolled:!1})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.navOnScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.navOnScroll)},n.render=function(){var e=this.state.scrolled,t=this.props.menuLinks,n=this.context;return s.a.createElement("nav",{className:e?"nav scroll":"nav"},s.a.createElement("div",{className:"nav-container"},s.a.createElement("div",{className:"brand"},s.a.createElement(u.Link,{to:"/"},s.a.createElement("img",{src:l.a,className:"favicon"})," ",s.a.createElement("span",{className:"text"},"Gustavo Quino"))),s.a.createElement("div",{className:"links"},t.map(function(e){return s.a.createElement(u.Link,{key:e.name,to:e.link,activeClassName:"active"},e.name)}),s.a.createElement("div",{className:"cta"},s.a.createElement("button",{className:"dark-switcher",onClick:n.toggleDark},n.dark?s.a.createElement("span",null,s.a.createElement("img",{src:m.a,className:"theme-icon"})):s.a.createElement("span",null,s.a.createElement("img",{src:g.a,className:"theme-icon"})))))))},t}(i.Component);N.contextType=M.b;var A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("footer",{className:"footer container"},s.a.createElement("div",null,s.a.createElement("strong",null,"Gustavo Quino")," ","/"," ",s.a.createElement("a",{href:"https://twitter.com/quinoqg",target:"_blank"},"Twitter")," "))},t}(i.Component),E=n(170),p=n.n(E),T=n(176),d=n.n(T);n(182);n.d(t,"a",function(){return D});var D=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.context,t=e.dark,n=e.notFound,a=this.props.children;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{bodyAttributes:{class:"theme "+(t&&!n?"dark":n?"not-found":"")}},s.a.createElement("meta",{name:"description",content:p.a.siteDescription}),s.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:d.a})),s.a.createElement(N,{menuLinks:p.a.menuLinks}),s.a.createElement("main",{id:"main-content"},a),s.a.createElement(A,null))},t}(i.Component);D.contextType=M.b},173:function(e,t,n){e.exports=n.p+"static/escher-160-a7849171a41ab899c40b8647b47f28db.png"},174:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg=="},175:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+"},176:function(e,t){e.exports="data:image/png;base64,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"},180:function(e,t,n){"use strict";n.d(t,"a",function(){return j});n(177);var a=n(5),r=n.n(a),i=n(0),s=n.n(i),M=n(171),c=n.n(M),o=n(178),u=n.n(o),L=n(170),l=n.n(L),j=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a=this.props,r=a.postNode,i=a.postPath,M=a.postSEO,o="";if(M){var L=r.frontmatter;e=L.title,t=L.description?L.description:r.excerpt,L.thumbnail&&(o=L.thumbnail.childImageSharp.fixed.src),n=u()(l.a.siteUrl,l.a.pathPrefix,i)}else e=l.a.siteTitle,t=l.a.siteDescription,o=l.a.siteLogo;o=u()(l.a.siteUrl,o);var j=u()(l.a.siteUrl,l.a.pathPrefix),m=[{"@context":"http://schema.org","@type":"WebSite",url:j,name:e,alternateName:l.a.siteTitleAlt?l.a.siteTitleAlt:""}];return M&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:o}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:j,name:e,alternateName:l.a.siteTitleAlt?l.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:o},description:t}),s.a.createElement(c.a,null,s.a.createElement("meta",{name:"description",content:t}),s.a.createElement("meta",{name:"image",content:o}),s.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),s.a.createElement("meta",{property:"og:url",content:M?n:j}),M?s.a.createElement("meta",{property:"og:type",content:"article"}):null,s.a.createElement("meta",{property:"og:title",content:e}),s.a.createElement("meta",{property:"og:description",content:t}),s.a.createElement("meta",{property:"og:image",content:o}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:creator",content:l.a.userTwitter}),s.a.createElement("meta",{name:"twitter:title",content:e}),s.a.createElement("meta",{name:"twitter:description",content:t}),s.a.createElement("meta",{name:"twitter:image",content:o}))},t}(i.Component)},183:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return u});var a=n(178),r=n.n(a),i=n(170),s=n.n(i),M=n(184),c=n.n(M),o=function(e){return c.a.utc(e).format(s.a.dateFormat)},u=function(e){var t=c.a.utc(e.date).format(s.a.dateFromFormat);return r()(s.a.repo,"/blob/master/content/posts",t+"-"+e.slug+".md")}},186:function(e,t,n){"use strict";n.d(t,"a",function(){return j});n(78),n(79),n(177);var a=n(5),r=n.n(a),i=n(0),s=n.n(i),M=n(57),c=n(188),o=n.n(c),u=n(183),L=n(184),l=n.n(L),j=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){return this.props.postEdges.filter(function(e){return"post"===e.node.frontmatter.template}).map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,thumbnail:e.node.frontmatter.thumbnail,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,categories:e.node.frontmatter.categories}})},n.render=function(){var e=this.props.simple,t=this.getPostList();return s.a.createElement("section",{className:"posts "+(e?"simple":"")},t.map(function(t){var n;t.thumbnail&&(n=t.thumbnail.childImageSharp.fixed);var a=t.categories.includes("Popular"),r=Object(u.b)(t.date),i=l()(t.date)>l()().subtract(1,"months");return s.a.createElement(M.Link,{to:t.path,key:t.title},s.a.createElement("div",{className:"each"},n?s.a.createElement(o.a,{fixed:n}):s.a.createElement("div",null),s.a.createElement("div",null,s.a.createElement("h2",null,t.title),e?null:s.a.createElement("div",{className:"excerpt"},r)),i&&s.a.createElement("div",{className:"new"},s.a.createElement("div",null,"New!")),a&&!e&&s.a.createElement("div",{className:"popular"},s.a.createElement("div",null,"Popular"))))}))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-js-b23a512e111ee21b8ae6.js.map