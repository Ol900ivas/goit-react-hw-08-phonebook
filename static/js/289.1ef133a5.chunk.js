"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[289],{3309:function(n,e,r){r.d(e,{II:function(){return l},Mg:function(){return p},Rd:function(){return c},__:function(){return u}});var t,a,i,o,d=r(168),s=r(5706),c=s.Z.div(t||(t=(0,d.Z)(["\n  margin: 0 0 15px 0;\n  border: none;\n"]))),u=s.Z.label(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 15%;\n  text-align: right;\n  margin: 12px;\n"]))),l=s.Z.input(i||(i=(0,d.Z)(["\n  width: 75%;\n  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;\n  padding: 5px;\n  font-size: 0.9em;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.07);\n  :hover {\n    background: #ffffff;\n  }\n"]))),p=s.Z.button(o||(o=(0,d.Z)(["\n  display: block;\n  font-size: 1em;\n  padding: 10px;\n  margin: 0 auto 20px auto;\n  border-radius: 8px;\n  border: 1px solid #59b969;\n  box-shadow: 0 1px 0 0 #60bd49 inset;\n  background-image: linear-gradient(to bottom, #63e651, #42753e);\n  :hover {\n    background-image: linear-gradient(to bottom, #51db1c, #6ba061);\n  }\n  :disabled {\n    background: #82cf78c2;\n  }\n"])))},6289:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var t,a,i,o,d,s,c,u,l=r(9439),p=r(9434),f=r(6382),m=r(6052),x=r(2791),b=r(3309),g=r(5218),h=r(3329),v=function(){var n=(0,x.useState)(""),e=(0,l.Z)(n,2),r=e[0],t=e[1],a=(0,x.useState)(""),i=(0,l.Z)(a,2),o=i[0],d=i[1],s=(0,p.v9)((function(n){return n.contacts})).items,c=(0,p.I0)(),u=(0,f.x0)(),v=(0,f.x0)(),Z=function(n){var e=n.target,r=e.name,a=e.value;switch(r){case"name":t(a);break;case"number":d(a);break;default:return}},j=function(){t(""),d("")};return(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=n.target;if(s.find((function(n){return n.name.toLowerCase()===e.elements.name.value.toLowerCase()})))return g.Am.error("".concat(e.elements.name.value," is already in contacts"));c((0,m.uK)({name:r,number:o})),j(),e.reset()},children:[(0,h.jsxs)(b.Rd,{children:[(0,h.jsx)(b.__,{htmlFor:u,children:"Name"}),(0,h.jsx)(b.II,{type:"text",name:"name",id:u,placeholder:"Sergiy Petrenko",onChange:Z,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)(b.Rd,{children:[(0,h.jsx)(b.__,{htmlFor:v,children:"Number"}),(0,h.jsx)(b.II,{type:"tel",name:"number",id:v,placeholder:"123-45-67",onChange:Z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)(b.Mg,{type:"submit",disabled:!r||!o,children:"Add contact"})]})},Z=r(1213),j=r(168),y=r(5706),k=y.Z.button(t||(t=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  border: none;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  align-items: center;\n  transition: transform 300ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n  }\n"]))),w=function(n){var e=n.id,r=n.name,t=n.number,a=(0,p.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("p",{children:[r,": ",t]}),(0,h.jsx)(k,{onClick:function(){a((0,m.GK)(e))},children:(0,h.jsx)(Z.$iT,{size:"20px"})})]})},C=y.Z.ul(a||(a=(0,j.Z)(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 0;\n"]))),I=y.Z.li(i||(i=(0,j.Z)(["\n  display: flex;\n  padding-left: 8px;\n  padding-right: 8px;\n  gap: 40px;\n  align-items: center;\n  justify-content: space-between;\n  transition: background-color 300ms ease-in-out;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.07);\n  }\n"]))),S=function(){var n=(0,p.v9)((function(n){return n.contacts})).items,e=(0,p.v9)((function(n){return n.filter}));console.log(typeof n),console.log(n),console.log(typeof e);var r=function(){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))}();return(0,h.jsx)(C,{children:r.map((function(n){return(0,h.jsx)(I,{children:(0,h.jsx)(w,{id:n.id,name:n.name,number:n.number})},n.id)}))})},_=y.Z.label(o||(o=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: right;\n  gap: 12px;\n  margin: 0 0 20px 0;\n  border: none;\n"]))),z=y.Z.input(d||(d=(0,j.Z)(["\n  width: 57%;\n  font-family: 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;\n  padding: 5px;\n  font-size: 0.9em;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.07);\n  :hover {\n    background: #ffffff;\n  }\n"]))),A=r(1634),L=function(){var n=(0,p.v9)((function(n){return n.filter})).filter,e=(0,p.I0)();return(0,h.jsxs)(_,{children:["Find contacts by name",(0,h.jsx)(z,{type:"text",value:n,onChange:function(n){var r=n.target.value;e((0,A.M)(r))}})]})},F=y.Z.div(s||(s=(0,j.Z)(["\n  width: 500px;\n  margin: 40px auto;\n  padding: 16px 10px;\n  border: 7px solid #72b372;\n  border-radius: 10px;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  color: #444;\n  background-color: #f0f0f0;\n  box-shadow: 0 0 20px 0 #000000;\n"]))),M=(y.Z.h1(c||(c=(0,j.Z)(["\n  margin: 0 15px 20px;\n  border-bottom: 2px solid #72b372;\n  padding: 5px 10px 5px 0;\n"]))),y.Z.h2(u||(u=(0,j.Z)(["\n  margin: 0 15px 20px;\n  border-bottom: 2px solid #72b372;\n  padding: 5px 10px 5px 0;\n"]))),function(n){var e=n.children;return(0,h.jsx)(F,{children:e})}),N=function(){var n=(0,p.I0)();return(0,x.useEffect)((function(){n((0,m.yF)())}),[n]),(0,h.jsxs)(M,{children:[(0,h.jsx)(v,{}),(0,h.jsx)(L,{}),(0,h.jsx)(S,{})]})}}}]);
//# sourceMappingURL=289.1ef133a5.chunk.js.map