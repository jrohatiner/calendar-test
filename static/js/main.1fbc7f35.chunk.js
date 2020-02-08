(this["webpackJsonpcalendar-test"]=this["webpackJsonpcalendar-test"]||[]).push([[0],{139:function(e,t,n){e.exports=n(313)},144:function(e,t,n){},149:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},308:function(e,t,n){},309:function(e,t,n){},310:function(e,t,n){},313:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(2),o=n.n(i),c=n(33),l=n(23),d=n(24),s=n(26),u=n(25),m=n(27),h=n(28),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"calendar"},this.props.children)}}]),t}(r.a.Component),p=n(17),E=(n(144),function(e){return r.a.createElement("header",{className:"month-header"},r.a.createElement("div",{className:"row"},r.a.createElement(c.c,{to:"/"+e.prevMonth.slug},r.a.createElement("i",{className:"fas fa-chevron-circle-left"}))),r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,e.curMonth.name)),r.a.createElement("div",{className:"row"},r.a.createElement(c.c,{to:"/"+e.nextMonth.slug},r.a.createElement("i",{className:"fas fa-chevron-circle-right"}))))}),y=(n(149),function(e){return r.a.createElement("header",{className:"weekdays"},e.days.map((function(e,t){return r.a.createElement("strong",{key:t},e)})))}),v=n(70),b=n(138),g=n(132),M=n.n(g),R=n(8),O=n.n(R),j=(n(207),n(208),n(209),function(e){var t=e.reminder.time?O()(e.reminder.time,"HH:mm a"):O()().hour(0).minute(0);return r.a.createElement("form",{method:"post",onSubmit:function(t){return e.handleCreateUpdateReminder(t,e.reminder)}},r.a.createElement("textarea",{className:"description",placeholder:"Reminder",maxLength:"30",defaultValue:e.reminder.description}),r.a.createElement(b.a,{showSecond:!1,defaultValue:t,format:"h:mm a",use12Hours:!0,inputReadOnly:!0}),r.a.createElement(M.a,{className:"color-picker",animation:"slide-up",color:e.reminder.color||e.defaultColor,onClose:e.handleSetColor}),r.a.createElement("button",{className:"btn-submit"},"Submit"),r.a.createElement("button",{className:"btn-cancel",onClick:function(){return e.handleSetEditDay(null)}},"Cancel"))}),D=(n(210),function(e){return r.a.createElement("article",{className:"reminder",style:{background:e.reminder.color}},r.a.createElement("div",{className:"tools"},r.a.createElement("button",{onClick:function(){return e.handleDeleteReminder(e.reminder.id)}},r.a.createElement("i",{className:"fas fa-trash-alt"})),r.a.createElement("button",{onClick:function(){return e.handleSetEdit(e.reminder)}},r.a.createElement("i",{className:"fas fa-edit"}))),r.a.createElement("strong",null,e.reminder.description),r.a.createElement("time",null,e.reminder.time))}),w=n(135),S=n.n(w),k=(n(308),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editReminder:{id:null,time:null,description:null,color:"#000"}},n.handleSetColor=function(e){n.setState({editReminder:Object(p.a)({},n.state.editReminder,{color:e.color})})},n.handleSetEdit=function(e){n.props.handleSetEditDay(n.props.day),n.setState({editReminder:Object(p.a)({},n.state.editReminder,{},e)})},n.handleCreateUpdateReminder=function(e,t){e.preventDefault();var a=e.target,r=a.querySelector(".description").value.trim();if(r.length){var i={date:n.props.date,time:a.querySelector(".rc-time-picker-input").value,description:r,color:n.state.editReminder.color||"#000"};t.id?(i.id=t.id,n.props.updateReminder(i)):n.props.createReminder(i),n.props.handleSetEditDay(null),n.setState({editReminder:{}})}},n.handleDeleteReminder=function(e){n.props.deleteReminder(n.props.date,e)},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=S()(this.props.reminders[this.props.date],"time")||[],n=this.props.firstDayIndex?"day first-index-".concat(this.props.firstDayIndex):"day";return r.a.createElement("article",{className:n},!this.props.editDay&&r.a.createElement("button",{className:"btn-new-reminder",onClick:function(){return e.props.handleSetEditDay(e.props.day)}},r.a.createElement("i",{className:"fas fa-plus-circle"})),this.props.editDay===this.props.day?r.a.createElement(j,{reminder:this.state.editReminder,handleSetColor:this.handleSetColor,handleSetEditDay:this.props.handleSetEditDay,handleCreateUpdateReminder:this.handleCreateUpdateReminder,defaultColor:"#000"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,this.props.day),t.length?t.map((function(t,n){return r.a.createElement(D,{key:n,reminder:t,handleSetEdit:e.handleSetEdit,handleDeleteReminder:e.handleDeleteReminder})})):null))}}]),t}(r.a.Component)),N=Object(v.b)((function(e){return{reminders:e}}),(function(e){return{createReminder:function(t){return e(function(e){return function(t){t({type:"CREATE_REMINDER",reminder:e})}}(t))},updateReminder:function(t){return e(function(e){return function(t){t({type:"UPDATE_REMINDER",reminder:e})}}(t))},deleteReminder:function(t,n){return e(function(e,t){return function(n){n(function(e,t){return{type:"DELETE_REMINDER",date:e,id:t}}(e,t))}}(t,n))}}}))(k),C=(n(309),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={curMonth:{},nextMonth:{},prevMonth:{}},n.handleSetEditDay=function(e){n.setState({curMonth:Object(p.a)({},n.state.curMonth,{editDay:e})})},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.createState(this.props)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.createState(e,!0)}},{key:"createState",value:function(e){var t=e.match.params.year&&e.match.params.month?"".concat(e.match.params.year,"-").concat(e.match.params.month):O()().format("YYYY-MM"),n=O()(t).add(1,"M").format("YYYY-MM"),a=O()(t).subtract(1,"M").format("YYYY-MM");this.setState({curMonth:{date:t,name:O()(t).format("MMMM YYYY"),days:O()(t).daysInMonth(),editDay:null},nextMonth:{date:n,slug:n.replace("-","/")},prevMonth:{date:a,slug:a.replace("-","/")}},(function(){}))}},{key:"buildDays",value:function(){for(var e=[],t={editDay:this.state.curMonth.editDay,handleSetEditDay:this.handleSetEditDay},n=1;n<=this.state.curMonth.days;n++){var a="".concat(this.state.curMonth.date,"-").concat(("0"+n).slice(-2));t.date=a,t.day=n,1===n?t.firstDayIndex=O()(a).startOf("month").format("d"):delete t.firstDayIndex,e.push(r.a.createElement(N,Object.assign({key:n},t)))}return e}},{key:"render",value:function(){var e=O.a.weekdays(),t=this.buildDays();return r.a.createElement("div",{className:"month"},r.a.createElement(E,{curMonth:this.state.curMonth,nextMonth:this.state.nextMonth,prevMonth:this.state.prevMonth}),r.a.createElement(y,{days:e}),r.a.createElement("section",{className:"days"},t))}}]),t}(r.a.Component)),Y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(c.b,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/:year/:month",component:C}),r.a.createElement(h.a,{path:"/",exact:!0,component:C}))))}}]),t}(r.a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(310);var A=n(42),T=n(136),U=n(99),_=n(41),W=n(137),L=n.n(W),H={},P=function(e,t){var n={id:L()(),time:t.reminder.time,description:t.reminder.description,color:t.reminder.color};return Object(p.a)({},e,Object(_.a)({},t.reminder.date,e[t.reminder.date]?e[t.reminder.date].concat(n):[n]))},q=function(e,t){var n=[];return Object(U.a)(e[t.reminder.date]).forEach((function(e){t.reminder.id===e.id&&(e={id:e.id,time:t.reminder.time,description:t.reminder.description,color:t.reminder.color}),n.push(e)})),Object(p.a)({},e,Object(_.a)({},t.reminder.date,n))},B=function(e,t){return Object(p.a)({},e,Object(_.a)({},t.date,Object(U.a)(e[t.date]).filter((function(e){return e.id!==t.id}))))},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_REMINDER":return P(e,t);case"UPDATE_REMINDER":return q(e,t);case"DELETE_REMINDER":return B(e,t);default:return e}},J=A.c,V=Object(A.d)(F,J(Object(A.a)(T.a))),Q=r.a.createElement(v.a,{store:V},r.a.createElement(c.a,null,r.a.createElement(Y,null)));o.a.render(Q,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/calendar-test",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/calendar-test","/service-worker.js");x?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):I(e)}))}}()}},[[139,1,2]]]);
//# sourceMappingURL=main.1fbc7f35.chunk.js.map