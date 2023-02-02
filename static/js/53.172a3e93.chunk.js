"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[53],{5024:function(n,t,e){e.d(t,{V:function(){return d}});var r,a,u,c=e(2280),i=e(168),s=e(6444),o=s.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),p=s.ZP.p(a||(a=(0,i.Z)(["\n  color: ",";\n  font-weight: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.l})),f=s.ZP.img.attrs((function(n){return{src:n.src,alt:n.alt}}))(u||(u=(0,i.Z)(["\n  width: 260px;\n"]))),l=e(184),d=function(n){var t=n.message;return(0,l.jsxs)(o,{children:[(0,l.jsx)(p,{children:t}),(0,l.jsx)(f,{src:c,alt:"No images found"})]})}},3053:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,u,c,i,s=e(5861),o=e(9439),p=e(7757),f=e.n(p),l=e(2791),d=e(1207),h=e(7689),m=e(966),v=e(5024),x=e(168),g=e(6444),Z=g.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),w=g.ZP.p(a||(a=(0,x.Z)(["\n  margin: 0;\n"]))),b=g.ZP.img.attrs((function(n){return{src:n.src,alt:n.alt}}))(u||(u=(0,x.Z)(["\n  width: 100%;\n  height: auto;\n  border-radius: 5px 5px 5px 5px;\n"]))),y=g.ZP.ul(c||(c=(0,x.Z)(["\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n  display: flex;\n  flex-wrap: wrap;\n\n  gap: 20px;\n  padding: 0;\n\n  justify-content: space-around;\n"]))),j=g.ZP.li(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n\n  justify-content: center;\n  width: 220px;\n"]))),k=e(2757),P=e(184),_=function(){var n=(0,l.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,l.useState)(!1),u=(0,o.Z)(a,2),c=u[0],i=u[1],p=(0,l.useState)(null),x=(0,o.Z)(p,2),g=x[0],_=x[1],S=(0,h.UO)().id;(0,l.useEffect)((function(){var n=function(){var n=(0,s.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i(!0),n.next=4,(0,d.IQ)(S);case 4:t=n.sent,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),_(n.t0.message);case 11:return n.prev=11,i(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[S]);var I=e.map((function(n,t){var e=n.id,r=n.name,a=n.original_name,u=n.profile_path,c=n.character;return(0,P.jsxs)(j,{children:[(0,P.jsx)(b,{src:null===u?k:"https://image.tmdb.org/t/p/w300/".concat(u),alt:null!==r&&void 0!==r?r:a,loading:"lazy"}),null!==r&&void 0!==r?r:a,(0,P.jsxs)(w,{children:["Character: ",c]})]},e+r+t)}));return(0,P.jsxs)(Z,{children:[c&&(0,P.jsx)(m.a,{}),g&&(0,P.jsx)("p",{children:g.message}),e.length>0?(0,P.jsx)(y,{children:I}):(0,P.jsx)(v.V,{message:"No information about cast"})]})};_.defaultProps={movies:[]};var S=_},1207:function(n,t,e){e.d(t,{IM:function(){return s},IQ:function(){return p},Jh:function(){return f},UN:function(){return o},XT:function(){return i}});var r=e(5861),a=e(7757),u=e.n(a),c=e(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"62e7f60baa5f08ed1edf6bd3ed6b9146",language:"en-US"}}),i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,n.next=3,c.get("/trending/all/day?",{params:{page:t}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("search/movie",{params:{query:t,page:e}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2757:function(n,t,e){n.exports=e.p+"static/media/default.4b338d9c299a89515e7b.png"},2280:function(n,t,e){n.exports=e.p+"static/media/noImages.98bc826327ced82ba54b.png"}}]);
//# sourceMappingURL=53.172a3e93.chunk.js.map