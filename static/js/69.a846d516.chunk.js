"use strict";(self.webpackChunkproject_1=self.webpackChunkproject_1||[]).push([[69],{9069:function(e,n,s){s.r(n),s.d(n,{FindUsers:function(){return k}});var r=s(885),i=s(2791),t=s(6151),c=s(364),a="FileUsers_users__gBuWr",l="FileUsers_userCardSize__zZtmg",u="FileUsers_userCard__tPY-x",o="FileUsers_pagination__Q62Zm",d="FileUsers_currentPage__ImHGA",f="FileUsers_page__2iL70",_="FileUsers_avatar__afCIm",h="FileUsers_name__EX7Iv",m="FileUsers_id__7iJVm",v="FileUsers_btn__6KbER",j=s(3504),x=s(393),U=function(e){return e.findUsersReducer.followingIsProgress},p=function(e){return e.findUsersReducer},g=function(e){return e.findUsersReducer.totalUsersCount},C=function(e){return e.findUsersReducer.pageSize},F=s(3516),N=s(184),b=function(e){var n=e.user,s=(0,c.v9)(U),r=(0,c.I0)();return(0,N.jsx)("div",{className:l,children:(0,N.jsxs)("div",{className:u,children:[(0,N.jsx)(j.OL,{to:"/profile/".concat(n.id),children:(0,N.jsx)("img",{className:_,src:n.photos?x:n.photos,alt:"UsersAvatar"})}),(0,N.jsx)(j.OL,{to:"/profile/".concat(n.id),children:(0,N.jsx)("div",{className:h,children:n.name})}),(0,N.jsx)("div",{className:m,children:n.id}),(0,N.jsx)("div",{children:n.followed?(0,N.jsx)("button",{className:v,disabled:s.some((function(e){return e===n.id})),onClick:function(){r((0,F.cj)(n.id))},children:"Unfollow"}):(0,N.jsx)("button",{className:v,disabled:s.some((function(e){return e===n.id})),onClick:function(){r((0,F.zW)(n.id))},children:"follow"})})]})},n.id)},k=function(){for(var e=(0,c.v9)(p),n=(0,c.v9)(g),s=(0,c.v9)(C),l=(0,c.I0)(),u=Math.ceil(n/s),_=[],h=1;h<=u;h++)_.push(h);var m=Math.ceil(u/11),v=(0,i.useState)(1),j=(0,r.Z)(v,2),x=j[0],U=j[1],k=11*(x-1)+1,w=11*x;(0,i.useEffect)((function(){l((0,F.GV)(e.currentPage,e.pageSize))}),[]);return(0,N.jsxs)("div",{className:a,children:[(0,N.jsxs)("div",{className:o,children:[x>1&&(0,N.jsxs)(t.Z,{variant:"contained",onClick:function(){U(x-1)},children:[" ","Prev"]}),_.filter((function(e){return e>k&&e<w})).map((function(n){return(0,N.jsx)("button",{className:e.currentPage===n?d:f,onClick:function(){return function(n){l((0,F.GV)(n,e.pageSize))}(n)},children:n},n)})),m>x&&(0,N.jsxs)(t.Z,{variant:"contained",onClick:function(){U(x+1)},children:[" ","Next"]})]}),e.users.map((function(e){return(0,N.jsx)(b,{user:e},e.id)}))]})}}}]);
//# sourceMappingURL=69.a846d516.chunk.js.map