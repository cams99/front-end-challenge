(this["webpackJsonpfront-end-challenge"]=this["webpackJsonpfront-end-challenge"]||[]).push([[0],{280:function(e,t,a){},281:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(26),r=a.n(c),s=a(33),l=a(25),i=a(39),o=a(38),u=a(76),d=a(296),j=a(80),p=a(71),b=a(176),m=a(291),O=a(294),x=a(47),f=a(131),h=a(290),g=a(94),y=a(50),v=a(6),w=h.a.Title,E=function(e){var t=e.showDrawer,a=e.title,n=e.titleButton;return Object(v.jsxs)(g.a,{type:"flex",justify:"center",align:"top",style:{marginBottom:"20px"},children:[Object(v.jsx)(y.a,{xs:24,sm:24,md:12,lg:12,children:Object(v.jsx)(w,{children:a})}),Object(v.jsx)(y.a,{xs:24,sm:24,md:12,lg:12,className:"header-button",children:n&&Object(v.jsx)(x.a,{className:"new-button",onClick:function(){t()},children:n})})]})};E.defaultProps={title:"Title"};var N=E,k=a(283),S=a(284),C=a(285),T=a(289),L=a(287),_=a(295),I=function(e){var t=e.columns,a=e.dataSource,c=e.loading,r=e.handlerEditRow,s=e.handlerDeleteRow,l=[{title:"",dataIndex:"id",align:"right",render:function(e,t){return Object(v.jsx)(k.a,{placement:"left",content:Object(v.jsxs)("div",{children:[r&&Object(v.jsx)("span",{className:"options-items",onClick:function(){return r(t)},children:"Edit"}),r&&s&&Object(v.jsx)(S.a,{className:"divider-margins",type:"horizontal"}),s&&Object(v.jsx)(C.a,{title:"Estas seguro de borrar el elemento selccionado?",onConfirm:function(){return s(t)},okText:"Yes",cancelText:"No",children:Object(v.jsx)("span",{className:"options-items",children:"Delete"})})]}),trigger:"click",children:(r||s)&&Object(v.jsx)(x.a,{shape:"circle",className:"settings-button",children:Object(v.jsx)(_.a,{})})})}}],i=Object(n.useState)(t.concat(l)),u=Object(o.a)(i,1)[0];return Object(v.jsx)(g.a,{children:Object(v.jsx)(y.a,{xs:24,sm:24,md:24,lg:24,children:Object(v.jsx)(T.a,{className:"card-border-radius",style:{marginTop:"20px"},children:Object(v.jsx)(g.a,{children:Object(v.jsx)(y.a,{xs:24,sm:24,md:24,lg:24,children:Object(v.jsx)(L.a,{className:"CustomTableClass",dataSource:a,columns:u,pagination:{pageSize:5,responsive:!0},loading:c,rowKey:"id",scroll:{x:!0},filtered:function(e){return console.log(e)}})})})})})})};I.defaultProps={loading:!1};var R=I,D=a(61),z=a.n(D),A=a(103),F=a(104),M=a.n(F),P="GET_EMPLOYEES",U="EMPLOYEE_ACTIONS",B="LOADING",Y="EMPLOYEE_LOADING",K="ERROR",V="EMPLOYEE_ERROR",X=a(293),G=a(288),q=function(e){return!e||isNaN(Number(e))||Number(e)<0},J=h.a.Title;var H=function(e){var t=e.edit,a=e.editData,c=e.visible,r=e.closable,s=e.editEmployee,l=e.addEmployee,i=Object(p.c)((function(e){return e.employeesReducer})).employeeLoading,u=Object(n.useState)(""),d=Object(o.a)(u,2),j=d[0],O=d[1],f=Object(n.useState)(""),h=Object(o.a)(f,2),w=h[0],E=h[1],N=Object(n.useState)(""),k=Object(o.a)(N,2),C=k[0],T=k[1],L=Object(n.useState)(null),_=Object(o.a)(L,2),I=_[0],R=_[1];return Object(n.useEffect)((function(){O(t?a.id:""),E(t?a.name:""),T(t?a.salary:""),R(t?a.age:""),i&&r()}),[c]),Object(v.jsxs)(X.a,{className:"employees-drawer",placement:"right",closable:!1,onClose:r,visible:c,width:"65vw",zIndex:1050,children:[Object(v.jsxs)(g.a,{gutter:16,children:[Object(v.jsxs)(J,{children:[" ",t?"Edit Employee":"New Employee"," "]}),Object(v.jsx)(S.a,{className:"divider-custom-margins"}),t&&a.name&&Object(v.jsx)(g.a,{gutter:16,className:"section-space-field",children:Object(v.jsx)(y.a,{xs:24,sm:24,md:24,lg:24,className:"employee-image-container",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"title-space-field",children:"Image"}),Object(v.jsx)(G.a,{className:"employee-image",src:"https://robohash.org/".concat(a.name),alt:"Employee",preview:!1})]})})}),Object(v.jsxs)(g.a,{gutter:16,className:"section-space-field",children:[t&&Object(v.jsxs)(y.a,{xs:12,sm:12,md:12,lg:12,children:[Object(v.jsx)("div",{className:"title-space-field",children:"Id"}),Object(v.jsx)(m.a,{value:j,disabled:!0,placeholder:"Id",size:"large"})]}),Object(v.jsxs)(y.a,{xs:12,sm:12,md:12,lg:12,children:[Object(v.jsx)("div",{className:"title-space-field",children:"Name*"}),Object(v.jsx)(m.a,{value:w,onChange:function(e){return E(e.target.value)},placeholder:"Name",size:"large"})]})]}),Object(v.jsxs)(g.a,{gutter:16,className:"section-space-field",children:[Object(v.jsxs)(y.a,{xs:12,sm:12,md:12,lg:12,children:[Object(v.jsx)("div",{className:"title-space-field",children:"Salary*"}),Object(v.jsx)(m.a,{value:C,onChange:function(e){return T(e.target.value)},placeholder:"Salary",size:"large"})]}),Object(v.jsxs)(y.a,{xs:12,sm:12,md:12,lg:12,children:[Object(v.jsx)("div",{className:"title-space-field",children:"Age*"}),Object(v.jsx)(m.a,{value:I,onChange:function(e){return R(e.target.value)},placeholder:"Age",size:"large"})]})]})]}),Object(v.jsxs)(g.a,{gutter:16,children:[Object(v.jsx)(S.a,{className:"divider-custom-margins"}),Object(v.jsxs)(y.a,{xs:24,sm:24,md:24,lg:24,style:{textAlign:"right"},children:[Object(v.jsx)(x.a,{type:"link",className:"cancel-button",onClick:r,children:"Cancel"}),Object(v.jsx)(x.a,{loading:i,htmlType:"submit",className:"new-button",onClick:function(){if([w,C,I].includes("")||[w,C,I].includes(null))return b.b.warning("All fields are required");if(q(C))return b.b.warning("Salary field is not a number");if(q(I))return b.b.warning("Age field is not a number");var e={name:w,salary:C,age:I};t?s(j,e):l(e)},children:"Save"})]})]})]})},Q=[{name:"Employees",key:"employees",icon:"employees",route:"/employees",component:function(){var e=Object(p.c)((function(e){return e.employeesReducer})),t=e.employees,a=e.loading,c=e.error,r=e.successMessage,l=e.employeeError,i=Object(p.b)(),u=Object(n.useRef)(),d=Object(n.useState)(!1),j=Object(o.a)(d,2),h=j[0],g=j[1],y=Object(n.useState)(!1),w=Object(o.a)(y,2),E=w[0],k=w[1],S=Object(n.useState)(null),C=Object(o.a)(S,2),T=C[0],L=C[1];Object(n.useEffect)((function(){i(function(){var e=Object(A.a)(z.a.mark((function e(t){var a;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:B}),e.prev=1,e.next=4,M.a.get("https://dummy.restapiexample.com/api/v1/employees");case 4:a=e.sent,t({type:P,payload:a.data.data.map((function(e){return{id:e.id,name:e.employee_name,salary:e.employee_salary,age:e.employee_age}}))}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t({type:K,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(n.useEffect)((function(){c&&b.b.error(c)}),[c]),Object(n.useEffect)((function(){l&&b.b.error(l),r&&(b.b.success(r),g(!1))}),[l,r]);var _,I=function(e){return e()},D=function(e){return e()},F=function(e){L(e),g(!0),k(!0)},X=[{title:"Id",dataIndex:"id",render:function(e,t){return Object(v.jsx)("span",{onClick:function(){return F(t)},children:t.id})}},Object(s.a)({title:"Name",dataIndex:"name"},(_="name",{filterDropdown:function(e){var t=e.setSelectedKeys,a=e.selectedKeys,n=e.confirm,c=e.clearFilters;return Object(v.jsxs)("div",{style:{padding:8},children:[Object(v.jsx)(m.a,{ref:u,placeholder:"Search ".concat(_),value:a[0],onChange:function(e){return t(e.target.value?[e.target.value]:[])},onPressEnter:function(){return I(n)},style:{marginBottom:8,display:"block"}}),Object(v.jsxs)(O.b,{children:[Object(v.jsx)(x.a,{type:"primary",onClick:function(){return I(n)},icon:Object(v.jsx)(f.a,{}),size:"small",style:{width:90},children:"Search"}),Object(v.jsx)(x.a,{onClick:function(){return D(c)},size:"small",style:{width:90},children:"Reset"}),Object(v.jsx)(x.a,{type:"link",size:"small",onClick:function(){n({closeDropdown:!1})},children:"Filter"})]})]})},filterIcon:function(e){return Object(v.jsx)(f.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,t){return t[_]?t[_].toString().toLowerCase().includes(e.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return u.current.select()}),100)},render:function(e){return e}})),{title:"Salary",dataIndex:"salary",sorter:function(e,t){return e.salary-t.salary},responsive:["md"]},{title:"Age",dataIndex:"age",sorter:function(e,t){return e.age-t.age},responsive:["md"]}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{title:"Employees",titleButton:"New employee",showDrawer:function(){g(!0),k(!1)}}),Object(v.jsx)(R,{columns:X,dataSource:t,loading:a,handlerEditRow:F,handlerDeleteRow:function(e){var t;i((t=e.id,function(){var e=Object(A.a)(z.a.mark((function e(a){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:Y}),e.prev=1,e.next=4,M.a.delete("http://dummy.restapiexample.com/api/v1/delete/".concat(t));case 4:n=e.sent,a({type:U,payload:n.data.message}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),a({type:V,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))}}),Object(v.jsx)(H,{closable:function(){return g(!1)},visible:h,edit:E,editData:T,editEmployee:function(e,t){return i(function(e,t){return function(){var a=Object(A.a)(z.a.mark((function a(n){var c;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:Y}),a.prev=1,a.next=4,M.a.put("http://dummy.restapiexample.com/api/v1/update/".concat(e),t,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});case 4:c=a.sent,n({type:U,payload:c.data.message}),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0),n({type:V,payload:a.t0.response.data.message});case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(e,t))},addEmployee:function(e){return i(function(e){return function(){var t=Object(A.a)(z.a.mark((function t(a){var n;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:Y}),t.prev=1,t.next=4,M.a.post("http://dummy.restapiexample.com/api/v1/create",e,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}});case 4:n=t.sent,a({type:U,payload:n.data.message}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),a({type:V,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))}})]})}}],W=function(){var e=Object(l.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){var t=Q.find((function(t){return t.route===e.location.pathname}));t&&r(t.key)}),[e.location.pathname]);var s=function(e){switch(e){case"employees":return Object(v.jsx)(d.a,{style:{fontSize:"18px"}});default:return Object(v.jsx)(v.Fragment,{})}};return Object(v.jsx)(u.a,{mode:"inline",selectedKeys:[c],style:{background:"transparent"},children:Q.length&&Q.map((function(e){return Object(v.jsx)(u.a.Item,{className:"center-flex",icon:s(),style:{margin:"0",height:"50px"},onClick:function(){return r(e.key)},children:Object(v.jsxs)(j.a,{to:e.route,children:[s(e.icon),Object(v.jsx)("span",{className:"menu-item-title",style:{paddingLeft:"13px"},children:e.name})]})},e.key)}))})},Z=function(e){var t=e.collapsed,a=e.userName;return Object(v.jsxs)("div",{className:"user-icon",children:[Object(v.jsx)("img",{style:{height:"100%"},src:"usuario.png",alt:"Usuario"}),Object(v.jsx)("span",{style:t?{display:"none",marginLeft:"0"}:{display:"block",marginLeft:"10px"},children:a})]})};Z.defaultProps={userName:"User"};var $=Z,ee=a(286),te=a(297),ae=a(298),ne=ee.a.Content,ce=ee.a.Sider,re=function(e){var t=e.router,a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],s=c[1],l=function(){s(!r)};return Object(v.jsxs)(ee.a,{className:"site-layout-background",children:[Object(v.jsxs)(ce,{trigger:null,collapsible:!0,collapsed:r,onCollapse:l,breakpoint:"lg",theme:"light",style:{background:"#cbe6f3"},children:[Object(v.jsxs)("div",{className:"logo",children:[Object(v.jsx)("div",{onClick:l,className:"fold-unfold-menu center-flex",children:r?Object(v.jsx)(te.a,{}):Object(v.jsx)(ae.a,{})}),Object(v.jsx)("img",{style:{height:"100%"},alt:"Logo",src:"logo192.png"})]}),Object(v.jsx)(S.a,{type:"horizontal"}),Object(v.jsx)($,{collapsed:r}),Object(v.jsx)(S.a,{type:"horizontal"}),Object(v.jsx)(W,{})]}),Object(v.jsx)(ne,{className:"layout-content",children:t})]})},se=a(292),le=function(){return Object(v.jsx)(se.a,{status:"404",title:"404",subTitle:"Oops, la p\xe1gina que visitaste no existe.",extra:Object(v.jsx)(x.a,{type:"primary",children:Object(v.jsx)(j.a,{to:"".concat(Q.find((function(e){return e.route})).route),children:"Volver al Home"})})})},ie=Object(l.g)((function(){return Object(v.jsxs)(l.c,{children:[Q.map((function(e){return Object(v.jsx)(l.a,{exact:!0,path:e.route,component:e.component},e.key)})),Object(v.jsx)(l.a,{component:le})]})})),oe=Object(i.a)(),ue=function(){return Object(v.jsx)(l.b,{history:oe,children:Object(v.jsx)(l.c,{children:Object(v.jsx)(l.a,{render:function(e){return Object(v.jsx)(re,Object(s.a)({router:Object(v.jsx)(ie,{})},e))}})})})},de=(a(279),a(280),a(93)),je=a(172),pe={employees:[],successMessage:!1,loading:!1,employeeLoading:!1,error:"",employeeError:""},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(s.a)(Object(s.a)({},e),{},{employees:t.payload,loading:!1,error:""});case U:return Object(s.a)(Object(s.a)({},e),{},{successMessage:t.payload,employeeLoading:!1,employeeError:""});case B:return Object(s.a)(Object(s.a)({},e),{},{loading:!0,error:""});case Y:return Object(s.a)(Object(s.a)({},e),{},{employeeLoading:!0,employeeError:"",successMessage:""});case K:return Object(s.a)(Object(s.a)({},e),{},{error:t.payload,loading:!1});case V:return Object(s.a)(Object(s.a)({},e),{},{employeeError:t.payload,employeeLoading:!1});default:return e}},me=Object(de.b)({employeesReducer:be}),Oe=Object(de.c)(Object(de.a)(je.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),xe=Object(de.d)(me,{},Oe);r.a.render(Object(v.jsx)(p.a,{store:xe,children:Object(v.jsx)(ue,{})}),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.0ea5429e.chunk.js.map