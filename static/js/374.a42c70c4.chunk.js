"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[374],{3309:function(n,e,r){r.d(e,{II:function(){return l},Mg:function(){return f},Rd:function(){return c},__:function(){return u}});var t,a,i,o,d=r(168),s=r(5706),c=s.Z.div(t||(t=(0,d.Z)(["\n  margin: 0 0 15px 0;\n  border: none;\n"]))),u=s.Z.label(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 15%;\n  text-align: right;\n  margin: 12px;\n"]))),l=s.Z.input(i||(i=(0,d.Z)(["\n  width: 75%;\n  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;\n  padding: 5px;\n  font-size: 0.9em;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.07);\n  :hover {\n    background: #ffffff;\n  }\n"]))),f=s.Z.button(o||(o=(0,d.Z)(["\n  display: block;\n  font-size: 1em;\n  padding: 10px;\n  min-width: 180px;\n  margin: 0 auto 20px auto;\n  border-radius: 8px;\n  border: 1px solid #59b969;\n  box-shadow: 0 1px 0 0 #60bd49 inset;\n  background-image: linear-gradient(to bottom, #63e651, #42753e);\n  :hover {\n    background-image: linear-gradient(to bottom, #51db1c, #6ba061);\n  }\n  :disabled {\n    background: #82cf78c2;\n  }\n"])))},7847:function(n,e,r){var t=r(1026),a=r(3329);e.Z=function(n){var e=n.children;return(0,a.jsx)(t.Q5,{children:e})}},1026:function(n,e,r){r.d(e,{AR:function(){return c},Q5:function(){return s}});var t,a,i,o=r(168),d=r(5706),s=d.Z.div(t||(t=(0,o.Z)(["\n  width: 500px;\n  margin: 40px auto;\n  padding: 16px 10px;\n  border: 7px solid #72b372;\n  border-radius: 10px;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  color: #444;\n  background-color: #f0f0f0;\n  box-shadow: 0 0 20px 0 #000000;\n"]))),c=d.Z.h1(a||(a=(0,o.Z)(["\n  margin: 0 15px 20px;\n  border-bottom: 2px solid #72b372;\n  padding: 5px 10px 5px 0;\n"])));d.Z.h2(i||(i=(0,o.Z)(["\n  margin: 0 15px 20px;\n  border-bottom: 2px solid #72b372;\n  padding: 5px 10px 5px 0;\n"])))},4374:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,a,i,o,d,s=r(9439),c=r(9434),u=r(6382),l=r(6052),f=r(2791),p=r(3309),m=r(5218),x=r(3329),b=function(){var n=(0,f.useState)(""),e=(0,s.Z)(n,2),r=e[0],t=e[1],a=(0,f.useState)(""),i=(0,s.Z)(a,2),o=i[0],d=i[1],b=(0,c.v9)((function(n){return n.contacts})).items,g=(0,c.I0)(),h=(0,u.x0)(),v=(0,u.x0)(),Z=function(n){var e=n.target,r=e.name,a=e.value;switch(r){case"name":t(a);break;case"number":d(a);break;default:return}},j=function(){t(""),d("")};return(0,x.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target;if(b.find((function(n){return n.name.toLowerCase()===e.elements.name.value.toLowerCase()})))return m.Am.error("".concat(e.elements.name.value," is already in contacts"));g((0,l.uK)({name:r,number:o})),j(),e.reset()},children:[(0,x.jsxs)(p.Rd,{children:[(0,x.jsx)(p.__,{htmlFor:h,children:"Name"}),(0,x.jsx)(p.II,{type:"text",name:"name",id:h,placeholder:"Sergiy Petrenko",onChange:Z,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)(p.Rd,{children:[(0,x.jsx)(p.__,{htmlFor:v,children:"Number"}),(0,x.jsx)(p.II,{type:"tel",name:"number",id:v,placeholder:"123-45-67",onChange:Z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)(p.Mg,{type:"submit",disabled:!r||!o,children:"Add contact"})]})},g=r(1213),h=r(168),v=r(5706),Z=v.Z.button(t||(t=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  align-items: center;\n  transition: transform 300ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),j=function(n){var e=n.id,r=n.name,t=n.number,a=(0,c.I0)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("p",{children:[r,": ",t]}),(0,x.jsx)(Z,{onClick:function(){a((0,l.GK)(e))},children:(0,x.jsx)(g.$iT,{size:"20px"})})]})},y=v.Z.ul(a||(a=(0,h.Z)(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 0;\n"]))),k=v.Z.li(i||(i=(0,h.Z)(["\n  display: flex;\n  padding-left: 8px;\n  padding-right: 8px;\n  gap: 40px;\n  align-items: center;\n  justify-content: space-between;\n  transition: background-color 300ms ease-in-out;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.07);\n  }\n"]))),w=function(){var n=(0,c.v9)((function(n){return n.contacts})).items,e=(0,c.v9)((function(n){return n.filter}));console.log(typeof n),console.log(n),console.log(typeof e);var r=function(){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))}();return(0,x.jsx)(y,{children:r.map((function(n){return(0,x.jsx)(k,{children:(0,x.jsx)(j,{id:n.id,name:n.name,number:n.number})},n.id)}))})},C=v.Z.label(o||(o=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: right;\n  gap: 12px;\n  margin: 0 0 20px 0;\n  border: none;\n"]))),I=v.Z.input(d||(d=(0,h.Z)(["\n  width: 57%;\n  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;\n  padding: 5px;\n  font-size: 0.9em;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.07);\n  :hover {\n    background: #ffffff;\n  }\n"]))),S=r(1634),_=function(){var n=(0,c.v9)((function(n){return n.filter})).filter,e=(0,c.I0)();return(0,x.jsxs)(C,{children:["Find contacts by name",(0,x.jsx)(I,{type:"text",value:n,onChange:function(n){var r=n.target.value;e((0,S.M)(r))}})]})},A=r(7847),z=function(){var n=(0,c.I0)();return(0,f.useEffect)((function(){n((0,l.yF)())}),[n]),(0,x.jsxs)(A.Z,{children:[(0,x.jsx)(b,{}),(0,x.jsx)(_,{}),(0,x.jsx)(w,{})]})}}}]);
//# sourceMappingURL=374.a42c70c4.chunk.js.map