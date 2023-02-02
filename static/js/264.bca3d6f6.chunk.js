"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{5024:function(n,e,t){t.d(e,{V:function(){return f}});var r,o,a,i=t(2280),s=t(168),c=t(6444),u=c.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),l=c.ZP.p(o||(o=(0,s.Z)(["\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.l})),p=c.ZP.img.attrs((function(n){return{src:n.src,alt:n.alt}}))(a||(a=(0,s.Z)(["\n  width: 260px;\n"]))),d=t(184),f=function(n){var e=n.message;return(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{children:e}),(0,d.jsx)(p,{src:i,alt:"No images found"})]})}},3174:function(n,e,t){t.d(e,{O:function(){return v}});var r,o,a,i,s,c=t(7689),u=t(168),l=t(6444),p=t(1087),d=l.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  //   flex-direction: column;\n  gap: 20px;\n  margin: 0;\n  padding: 0;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]))),f=l.ZP.li(o||(o=(0,u.Z)(["\nbackground-color: white;\noverflow: hidden;\nborder-radius: 5px 5px 5px 5px;\ntransition: box-shadow 250ms linear;\nwidth: 230px;\n&:hover,\n&:focus {\ncursor: pointer;\nbox-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),\n0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);\n}\n}\n"]))),h=(0,l.ZP)(p.rU)(a||(a=(0,u.Z)(["\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n"]))),x=l.ZP.p(i||(i=(0,u.Z)(["\n  max-width: 336px;\n  margin: 0;\n  padding: 10px;\n  color: ",";\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.17;\n"])),(function(n){return n.theme.colors.accent})),g=l.ZP.img.attrs((function(n){return{src:n.src,alt:n.alt}}))(s||(s=(0,u.Z)(["\n  width: 100%;\n  height: auto;\n  border-radius: 5px 5px 5px 5px;\n"]))),m=t(2757),b=t(184),v=function(n){var e=n.movies,t=(0,c.TH)(),r=e.map((function(n,e){var r,o,a,i,s=n.id,c=n.title,u=n.name,l=n.original_title,p=n.original_name,d=n.poster_path;return(0,b.jsx)(f,{children:(0,b.jsxs)(h,{state:{from:t},to:"/movies/".concat(s),children:[(0,b.jsx)(g,{src:null===d?m:"https://image.tmdb.org/t/p/w1280/".concat(d),alt:null!==(r=null!==(o=null!==c&&void 0!==c?c:u)&&void 0!==o?o:l)&&void 0!==r?r:p,loading:"lazy"}),(0,b.jsx)(x,{children:null!==(a=null!==(i=null!==c&&void 0!==c?c:u)&&void 0!==i?i:l)&&void 0!==a?a:p})]})},s+e)}));return(0,b.jsx)(d,{id:"gallery",children:r})};v.defaultProps={movies:[]}},3264:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,o,a,i,s,c,u,l=t(3433),p=t(5861),d=t(9439),f=t(7757),h=t.n(f),x=t(2791),g=t(1087),m=t(966),b=t(168),v=t(6444),w=v.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),Z=v.ZP.h2(o||(o=(0,b.Z)([""]))),y=v.ZP.p(a||(a=(0,b.Z)(["\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m})),k=v.ZP.form(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 15px;\n  border: 2px solid #0cf;\n  overflow: hidden;\n  background-color: transparent;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    border: 2px solid ",";\n  }\n"])),(function(n){return n.theme.colors.accentDark})),j=v.ZP.input(s||(s=(0,b.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  background-color: transparent;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),P=v.ZP.button(c||(c=(0,b.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-color: transparent;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),z=t(6355),S=t(184),_=function(n){var e=n.onSubmit,t=(0,x.useState)(""),r=(0,d.Z)(t,2),o=r[0],a=r[1];return(0,S.jsxs)(k,{onSubmit:function(n){n.preventDefault(),console.log("value in form",o),e(o),a("")},children:[(0,S.jsx)(j,{name:"searchQuery",value:o,onChange:function(n){var e=n.target.value;a(e),console.log("value in change")},placeholder:"search here",required:!0,autoComplete:"off"}),(0,S.jsx)(P,{type:"submit",children:(0,S.jsx)(z.B_G,{size:30})})]})},C=t(1207),U=t(3174),B=v.ZP.button(u||(u=(0,b.Z)(["\n  align-items: center;\n  appearance: none;\n  background-image: radial-gradient(\n    100% 100% at 100% 0,\n    #0cf 0,\n    rgb(8, 157, 194) 100%\n  );\n  border: 0;\n  border-radius: 6px;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: 'JetBrains Mono', monospace;\n  height: 48px;\n  justify-content: center;\n  line-height: 1;\n  list-style: none;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 18px;\n  &:hover,\n  &:focus {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgb(8, 157, 194) 0 -3px 0 inset;\n  }\n  transition: background-color 300ms 100ms;\n"]))),E=function(n){var e=n.text,t=n.type,r=n.active,o=n.onClick,a=n.disabled;return(0,S.jsx)(B,{type:t,active:r,onClick:o,disabled:a,children:e})},N=t(5024),q=function(){var n=(0,x.useState)([]),e=(0,d.Z)(n,2),t=e[0],r=e[1],o=(0,x.useState)(!1),a=(0,d.Z)(o,2),i=a[0],s=a[1],c=(0,x.useState)(null),u=(0,d.Z)(c,2),f=u[0],b=u[1],v=(0,x.useState)(!1),k=(0,d.Z)(v,2),j=k[0],P=k[1],z=(0,x.useState)(1),B=(0,d.Z)(z,2),q=B[0],I=B[1],M=(0,x.useState)(""),W=(0,d.Z)(M,2),D=W[0],J=W[1],L=(0,g.lr)(),O=(0,d.Z)(L,2),Q=O[0],R=O[1],T=Q.get("search");(0,x.useEffect)((function(){var n=function(){var n=(0,p.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,(0,C.UN)(T,q);case 4:if(e=n.sent,r((function(n){return[].concat((0,l.Z)(n),(0,l.Z)(e.results))})),P(!0),q===e.total_pages&&(P(!1),J("We're sorry, but you've reached the end of search results.")),0!==e.results.length){n.next=12;break}throw r([]),P(!1),new Error("No results for ".concat(T,". Please try something else"));case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),b(n.t0);case 17:return n.prev=17,s(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[0,14,17,20]])})));return function(){return n.apply(this,arguments)}}();T&&n()}),[T,q]),(0,x.useEffect)((function(){t.length>20&&1!==q&&function(){var n=document.querySelector("#gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:1*n,behavior:"smooth"})}()}),[t,q]);return(0,S.jsxs)(w,{children:[(0,S.jsx)(Z,{children:"Movies"}),(0,S.jsx)(_,{onSubmit:function(n){T!==n&&(r([]),R({search:n}),I(1),J(""),b(null))}}),i&&(0,S.jsx)(m.a,{}),f&&(0,S.jsx)(N.V,{message:f.message}),t.length>0&&(0,S.jsx)(U.O,{movies:t}),j&&(0,S.jsx)(E,{type:"button",text:"Load more",onClick:function(){I((function(n){return n+1}))}}),D&&(0,S.jsx)(y,{children:D})]})};q.defaultProps={movies:[]};var I=q},1207:function(n,e,t){t.d(e,{IM:function(){return c},IQ:function(){return l},Jh:function(){return p},UN:function(){return u},XT:function(){return s}});var r=t(5861),o=t(7757),a=t.n(o),i=t(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"62e7f60baa5f08ed1edf6bd3ed6b9146",language:"en-US"}}),s=function(){var n=(0,r.Z)(a().mark((function n(){var e,t,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:1,n.next=3,i.get("/trending/all/day?",{params:{page:e}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("search/movie",{params:{query:e,page:t}});case 2:return r=n.sent,o=r.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2757:function(n,e,t){n.exports=t.p+"static/media/default.4b338d9c299a89515e7b.png"},2280:function(n,e,t){n.exports=t.p+"static/media/noImages.98bc826327ced82ba54b.png"}}]);
//# sourceMappingURL=264.bca3d6f6.chunk.js.map