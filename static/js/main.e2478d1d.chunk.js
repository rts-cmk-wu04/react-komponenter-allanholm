(this["webpackJsonpreact-komponenter"]=this["webpackJsonpreact-komponenter"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(1),a=c.n(i),n=c(4),r=c.n(n),l=(c(10),c(11),c(2));c(12);var j=function(e){var t=e.article;return Object(s.jsxs)("article",{className:"smallArticle",children:[Object(s.jsx)("img",{className:"smallArticle__image",src:t.image,alt:"relating to travel"}),Object(s.jsx)("h2",{className:"smallArticle__title",children:t.title}),Object(s.jsx)("h1",{className:"smallArticle__heading",children:t.heading}),Object(s.jsx)("p",{className:"smallArticle__text",children:t.text})]})};c(13);var o=function(e){var t=e.article;return Object(s.jsxs)("article",{className:"bigArticle",children:[Object(s.jsx)("img",{className:"bigArticle__bigimg",src:t.images[0].src,alt:""}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"bigArticle__title",children:t.title}),Object(s.jsx)("h1",{className:"bigArticle__heading",children:t.heading}),Object(s.jsx)("p",{className:"bigArticle__text",children:t.text}),Object(s.jsx)("img",{className:"bigArticle__smallimg",src:t.images[1].src,alt:""}),Object(s.jsx)("img",{className:"bigArticle__smallimg",src:t.images[2].src,alt:""}),Object(s.jsx)("img",{className:"bigArticle__smallimg",src:t.images[3].src,alt:""})]})]})};c(14);var b=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)([]),r=Object(l.a)(n,2),b=r[0],m=r[1];return Object(i.useEffect)((function(){fetch("./database.json").then((function(e){return e.json()})).then((function(e){a(e.smallArticles),m(e.bigArticles)}))}),[]),Object(s.jsxs)("section",{className:"topArticles",children:[Object(s.jsx)("section",{className:"smallArticles",children:c.map((function(e){return Object(s.jsx)(j,{article:e},e.heading)}))}),Object(s.jsx)("section",{className:"bigArticles",children:b.map((function(e){return Object(s.jsx)(o,{article:e},e.heading)}))})]})};c(15);var m=function(e){var t=e.card;return Object(s.jsxs)("div",{className:t.className,children:[Object(s.jsx)("img",{className:"card__img",src:t.icon,alt:"icon"}),Object(s.jsxs)("h1",{className:"card__heading",children:[" ",t.heading," "]}),Object(s.jsx)("p",{className:"card__text",children:t.text})]})};c(16);var d=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(i.useEffect)((function(){fetch("./database.json").then((function(e){return e.json()})).then((function(e){a(e.cards)}))}),[]),Object(s.jsx)("section",{className:"cards",children:c.map((function(e){return Object(s.jsx)(m,{card:e},e.heading)}))})};c(17);var h=function(e){var t=e.collection;return Object(s.jsxs)("div",{className:"collection",children:[Object(s.jsx)("h1",{className:"collection__heading1",children:t.heading1}),Object(s.jsx)("img",{className:"collection__authorImage",src:t.authorImg,alt:"author pic"}),Object(s.jsx)("img",{className:"collection__bigImage",src:t.bigImg,alt:"pic of stuff"}),Object(s.jsx)("h2",{className:"collection__heading2",children:t.heading2}),Object(s.jsxs)("address",{className:"collection__author",children:["By: ",t.author]})]})};c(18);var u=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(i.useEffect)((function(){fetch("./database.json").then((function(e){return e.json()})).then((function(e){a(e.collections)}))}),[]),Object(s.jsx)("section",{className:"collections",children:c.map((function(e){return Object(s.jsx)(h,{collection:e},e.heading1)}))})};c(19),c(20);var O=function(e){var t=e.article;return Object(s.jsxs)("article",{className:"bigArticleMid",children:[Object(s.jsx)("img",{className:"bigArticleMid__bigImage",src:t.images[0].src,alt:""}),Object(s.jsx)("img",{className:"bigArticleMid__icon",src:t.images[1].src,alt:""}),Object(s.jsx)("p",{className:"bigArticleMid__iconText",children:"The new york times"}),Object(s.jsx)("h1",{className:"bigArticleMid__heading",children:t.heading}),Object(s.jsx)("p",{className:"bigArticleMid__text",children:t.text})]})};c(21),c(22);var g=function(e){var t=e.story;return Object(s.jsxs)("article",{className:"latestNewsArticle",children:[Object(s.jsx)("img",{className:"latestNewsArticle__image",src:t.images[0].src,alt:""}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{className:"latestNewsArticle__heading",style:{color:t.colorcode},children:t.category}),Object(s.jsx)("p",{className:"latestNewsArticle__text",children:t.text})]})]})};var x=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(i.useEffect)((function(){fetch("./database.json").then((function(e){return e.json()})).then((function(e){a(e.newsStories)}))}),[]),Object(s.jsxs)("section",{className:"latestNews",children:[Object(s.jsx)("h1",{className:"latestNews__heading",children:"Latest news"}),c.map((function(e){return Object(s.jsx)(g,{story:e},e.category)})),Object(s.jsx)("h2",{className:"latestNews__more",children:"More news"})]})};c(23);var f=function(e){var t=e.card;return Object(s.jsxs)("article",{className:"cardWithPicArticle",children:[Object(s.jsx)("img",{className:"cardWithPicArticle__img",src:t.images[0].src,alt:""}),Object(s.jsx)("h1",{style:{color:t.colorcode},className:"cardWithPicArticle__title",children:t.title}),Object(s.jsx)("p",{className:"cardWithPicArticle__text",children:t.text})]})};c(24);var _=function(e){var t=e.article;return Object(s.jsxs)("article",{className:"bottomLeftArticle",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:t.images[0].src,alt:""}),Object(s.jsx)("h1",{children:t.title})]}),Object(s.jsx)("p",{children:t.text}),Object(s.jsx)("button",{children:"Read more"})]})};var N=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)([]),r=Object(l.a)(n,2),j=r[0],o=r[1],b=Object(i.useState)([]),m=Object(l.a)(b,2),d=m[0],h=m[1];return Object(i.useEffect)((function(){fetch("./database.json").then((function(e){return e.json()})).then((function(e){a(e.bigArticlesMid),o(e.cardsWPic),h(e.bottomLeftArticles)}))}),[]),Object(s.jsxs)("section",{className:"middleSection",children:[Object(s.jsxs)("section",{className:"bigArticles",children:[c.map((function(e){return Object(s.jsx)(O,{article:e},e.heading)})),Object(s.jsx)("div",{className:"cardWithPic",children:j.map((function(e){return Object(s.jsx)(f,{card:e},e.title)}))})]}),Object(s.jsxs)("div",{className:"rightSide",children:[Object(s.jsx)(x,{}),d.map((function(e){return Object(s.jsx)(_,{article:e},e.title)}))]})]})};var v=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsx)(d,{}),Object(s.jsx)(u,{}),Object(s.jsx)(N,{})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),a(e),n(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),A()}],[[25,1,2]]]);
//# sourceMappingURL=main.e2478d1d.chunk.js.map