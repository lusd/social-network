(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={navbarWrap:"Navbar_navbarWrap__3mUjK",nav:"Navbar_nav__3LlXd",item:"Navbar_item__pyho-",active:"Navbar_active__3LvnP"}},129:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(34),r=n(7),o={dialogData:[{id:1,name:"Sharik",avatar:"https://source.unsplash.com/random/50x50/?random=1"},{id:2,name:"Popugai Ivan",avatar:"https://source.unsplash.com/random/50x50/?random=2"}],messageData:[{id:1,message:"Zdarova!",direction:"in"},{id:2,message:"Kuda propal?",direction:"in"},{id:3,message:"Go v basik?!",direction:"in"},{id:4,message:"Zavtra Go",direction:"out"}]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n={id:5,message:t.newMessage,direction:"out"};return Object(r.a)({},e,{messageData:Object(a.a)(e.messageData).concat([n])});default:return e}};var i=function(e){return{type:"ADD-MESSAGE",newMessage:e}}},130:function(e,t,n){"use strict";n.d(t,"e",function(){return c}),n.d(t,"f",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return m}),n.d(t,"d",function(){return f});var a=n(34),r=n(7),o=n(14),i={usersCount:0,currentPage:1,usersPerPage:10,users:[],isFetching:!1,usersInFollowingProgress:[]},s=function(e,t){return{type:"FOLLOWING_IN_PROGRESS",isFetching:e,userID:t}},c=function(e){return{type:"CURRENT_PAGE",page:e}},u=function(e){return{type:"TOGGLE_IS_FETCHING",toggle:e}},l=function(e,t){return function(n){n(u(!0)),o.c.getUsers(e,t).then(function(e){n(u(!1)),n({type:"SET_USERS",users:e.items}),n({type:"USERS_COUNT",usersCount:e.totalCount})})}},m=function(e){return function(t){t(s(!0,e)),o.c.followUser(e).then(function(n){0===n.resultCode&&t({type:"FOLLOW",id:e}),t(s(!1,e))})}},f=function(e){return function(t){t(s(!0,e)),o.c.unfollowUser(e).then(function(n){0===n.resultCode&&t({type:"UNFOLLOW",id:e}),t(s(!1,e))})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(r.a)({},e,{users:e.users.map(function(e){return e.id===t.id?Object(r.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(r.a)({},e,{users:e.users.map(function(e){return e.id===t.id?Object(r.a)({},e,{followed:!1}):e})});case"SET_USERS":return Object(r.a)({},e,{users:Object(a.a)(t.users)});case"USERS_COUNT":return Object(r.a)({},e,{usersCount:t.usersCount});case"CURRENT_PAGE":return Object(r.a)({},e,{currentPage:t.page});case"TOGGLE_IS_FETCHING":return Object(r.a)({},e,{isFetching:t.toggle});case"FOLLOWING_IN_PROGRESS":return Object(r.a)({},e,{usersInFollowingProgress:t.isFetching?Object(a.a)(e.usersInFollowingProgress).concat([t.userID]):e.usersInFollowingProgress.filter(function(e){return e!==t.userID})});default:return e}}},131:function(e,t,n){e.exports=n.p+"static/media/headerlogo.4fae85de.png"},135:function(e,t,n){e.exports={avatar:"avatar_avatar__2c2-U"}},136:function(e,t,n){e.exports=n.p+"static/media/user.c3b71170.png"},138:function(e,t,n){e.exports=n.p+"static/media/banner.cce99c86.jpg"},139:function(e,t,n){e.exports=n.p+"static/media/preloader.74ab3a4b.svg"},14:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s});var a=n(134),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"932c0bbd-5279-433b-9a31-417bf30b4feb"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},getProfile:function(e){console.log("this is old method, use profileAPI.getProfile"),s.getProfile(e)},followUser:function(e){return r.post("follow/"+e).then(function(e){return e.data})},unfollowUser:function(e){return r.delete("follow/"+e).then(function(e){return e.data})}},i={getAuthMe:function(){return r.get("auth/me").then(function(e){return e.data})},getLoggedMe:function(e,t,n){return r.post("auth/login",{email:e,password:t,remmberMe:n}).then(function(e){return e.data})},getLoggedOut:function(){return r.delete("auth/login").then(function(e){return e.data})}},s={getProfile:function(e){return r.get("profile/".concat(e)).then(function(e){return e.data})},getStatus:function(e){return r.get("profile/status/".concat(e)).then(function(e){return e.data})},setStatus:function(e){return r.put("profile/status",{status:e}).then(function(e){return e.data})}}},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},169:function(e,t,n){e.exports=n(311)},170:function(e,t,n){},176:function(e,t,n){},18:function(e,t,n){e.exports={content:"Profile_content__XHLmy",banner:"Profile_banner__2ZVf8",info:"Profile_info__3HA3Z",contacts:"Profile_contacts__27ee4"}},30:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var a=function(e){if(!e)return"Field is required."},r=function(e){return function(t){if(t.length>e)return"Max Length is ".concat(e," symbols.")}},o=function(e){if(e.length<8)return"Minimum length is 8 symbols."}},311:function(e,t,n){"use strict";n.r(t);n(170),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(64),i=n.n(o),s=n(21),c=n(22),u=n(24),l=n(23),m=n(25),f=(n(176),n(89)),p=n.n(f),d=n(131),g=n.n(d),h=n(13),b=function(e){return r.a.createElement("header",{className:p.a.header},r.a.createElement("img",{src:g.a,alt:"dogs and cats"}),r.a.createElement("div",{className:p.a.login__block},e.userData.isAuth?r.a.createElement("div",null,e.userData.login,r.a.createElement("button",{onClick:e.logOut},"Log Out")):r.a.createElement(h.b,{to:"/login"},"Login")))},v=n(8),E=n(7),_=n(14),O=n(31),j={id:null,email:null,login:null,isAuth:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(E.a)({},e,t.data,{isAuth:!0});case"LOGGED_OUT":return Object(E.a)({},e,{id:null,email:null,login:null,isAuth:!1});default:return e}},S=function(){return function(e){return _.a.getAuthMe().then(function(t){if(0===t.resultCode){var n=t.data,a=n.email,r=n.id,o=n.login;e(function(e,t,n){return{type:"FOLLOW",data:{id:e,email:t,login:n}}}(r,a,o))}})}},w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).logOut=function(){n.props.setMeLoggedOut()},n.render=function(){return r.a.createElement(b,{logOut:n.logOut,userData:n.props})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.setMeAuth()}}]),t}(r.a.Component),y=Object(v.b)(function(e){return{isAuth:e.authMe.isAuth,login:e.authMe.login}},{setMeAuth:S,setMeLoggedOut:function(){return function(e){_.a.getLoggedOut().then(function(t){0===t.resultCode&&e({type:"LOGGED_OUT"})})}}})(w),P=n(10),L=n.n(P),A=n(53),D=n.n(A),k=n(55),C=function(e){var t=e.friends.map(function(e){return r.a.createElement("li",{key:e.id,className:D.a.item}," ",r.a.createElement(k.a,{key:e.id,src:e.avatar,name:e.name})," ")});return r.a.createElement("div",{className:D.a.friends},r.a.createElement("h3",{className:D.a.title},"Friends List"),r.a.createElement("ul",{className:D.a.list},t))},I=function(e){return r.a.createElement("div",{className:L.a.navbarWrap},r.a.createElement("nav",{className:L.a.nav},r.a.createElement("div",{className:"".concat(L.a.item," ").concat(L.a.active)},r.a.createElement(h.b,{to:"/profile",activeClassName:L.a.active},"My pet")),r.a.createElement("div",{className:L.a.item},r.a.createElement(h.b,{to:"/dialogs",activeClassName:L.a.active},"Messages")),r.a.createElement("div",{className:L.a.item},r.a.createElement(h.b,{to:"/news",activeClassName:L.a.active},"News")),r.a.createElement("div",{className:L.a.item},r.a.createElement(h.b,{to:"/music",activeClassName:L.a.active},"Music")),r.a.createElement("div",{className:L.a.item},r.a.createElement(h.b,{to:"/settings",activeClassName:L.a.active},"Settings")),r.a.createElement("div",{className:L.a.item},r.a.createElement(h.b,{to:"/users",activeClassName:L.a.active},"Users"))),r.a.createElement(C,{friends:e.friends}))},U=n(18),M=n.n(U),T=n(34),x={postData:[{id:1,message:"Woof!",likeCount:5},{id:2,message:"Today am a good boy!",likeCount:8},{id:3,message:"Where is my tail?",likeCount:9998}],profile:null,status:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:4,message:t.newPost,likeCount:0};return Object(E.a)({},e,{postData:Object(T.a)(e.postData).concat([n])});case"SET-USER-PROFILE":return Object(E.a)({},e,{profile:t.profile});case"SET-USER-STATUS":return Object(E.a)({},e,{status:t.status});default:return e}},R=function(e){return{type:"SET-USER-STATUS",status:e}},G=n(54),W=n.n(G),z=n(93),B=n.n(z),Z=function(e){return r.a.createElement("div",{className:B.a.item},r.a.createElement("div",null,e.message,r.a.createElement("p",{className:B.a.like},"Likes: ",e.likeCount)))},H=n(86),J=n(87),X=n(30),q=n(40),K=Object(X.a)(50),Q=Object(J.a)({form:"manageUserPost"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(H.a,{name:"postText",component:q.b,validate:[X.c,K],placeholder:"Add new post here."}),r.a.createElement("div",{className:W.a.button__group},r.a.createElement("button",{type:"submit"},"Add"),r.a.createElement("button",null,"Edit"),r.a.createElement("button",null,"Delete")))}),V=function(e){var t=e.postData.map(function(e){return r.a.createElement(Z,{key:e.id,message:e.message,likeCount:e.likeCount})});r.a.createRef();return r.a.createElement("div",{className:W.a.posts},"My posts",r.a.createElement("div",{className:W.a.item},"New post",r.a.createElement(Q,{onSubmit:function(t){e.onAddPost(t.postText)}})),r.a.createElement("div",{className:W.a.reverseOrder},t))},Y=Object(v.b)(function(e){return{postData:e.profileData.postData,newPostText:e.profileData.newPostText}},{onAddPost:function(e){return{type:"ADD-POST",newPost:e}}})(V),$=n(52),ee=n(138),te=n.n(ee),ne=n(39),ae=function(e){var t=Object(a.useState)(!1),n=Object($.a)(t,2),o=n[0],i=n[1],s=Object(a.useState)(e.status),c=Object($.a)(s,2),u=c[0],l=c[1];Object(a.useEffect)(function(){l(e.status)},[]);return o?o?r.a.createElement("input",{autoFocus:!0,onBlur:function(){i(!1),e.setProfileStatus(u)},value:u,onChange:function(e){l(e.currentTarget.value)}}):void 0:r.a.createElement("span",{onDoubleClick:function(){i(!0)}},u||"----")},re=function(e){var t;return e.userId?r.a.createElement("div",{className:M.a.profileWrapper},r.a.createElement("div",null,r.a.createElement("img",{className:M.a.banner,src:te.a,alt:"User banner"})),r.a.createElement("div",{className:M.a.info},r.a.createElement(k.a,{className:M.a.profile__image,src:e.photos.large,name:e.fullName}),r.a.createElement("span",{className:M.a.full__name},e.fullName),r.a.createElement("div",{className:M.a.status},r.a.createElement(ae,{status:e.status,setProfileStatus:e.setProfileStatus})),r.a.createElement("div",null,r.a.createElement("span",null,e.lookingForAJob?"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443.":"\u0423\u0436\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e!"),r.a.createElement("span",null," ",e.lookingForAJobDescription)),r.a.createElement("div",{className:M.a.contacts},(t=e.contacts,Object.entries(t).map(function(e){var t=Object($.a)(e,2),n=t[0],a=t[1];if(!a)return"";var o=/^http/.test(a)?a:"https://"+a;return r.a.createElement("span",{key:"caption"},n,": ",r.a.createElement("a",{target:"_new",href:o},"Link"))}))))):r.a.createElement(ne.a,null)},oe=n(47),ie=n(98),se=n(6),ce=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("div",{className:M.a.content},r.a.createElement(re,Object.assign({},n.props.profileData.profile,{status:n.props.profileData.status,setProfileStatus:n.props.setProfileStatus})),r.a.createElement(Y,{store:n.props.store,dispatch:n.props.dispatch}))},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.isAuth?this.props.loggedUser:""),this.props.getUserProfile(e),this.props.getUserStatus(e)}}]),t}(r.a.Component),ue=Object(se.d)(oe.f,Object(v.b)(function(e){return{profileData:e.profileData,isAuth:e.authMe.isAuth,loggedUser:e.authMe.id}},{getUserProfile:function(e){return function(t){e||(e=1802),_.b.getProfile(e).then(function(e){t({type:"SET-USER-PROFILE",profile:e})})}},getUserStatus:function(e){return function(t){_.b.getStatus(e).then(function(e){t(R(e))})}},setProfileStatus:function(e){return function(t){_.b.setStatus(e).then(function(n){0===n.resultCode&&t(R(e))})}}}),ie.a)(ce),le=n(140),me=n.n(le),fe=function(){return r.a.createElement("div",{className:me.a.news},"News")},pe=n(141),de=n.n(pe),ge=function(){return r.a.createElement("div",{className:de.a.music},"Music")},he=n(142),be=n.n(he),ve=function(){return r.a.createElement("div",{className:be.a.settings},"Settings")},Ee=n(96),_e=n.n(Ee),Oe=Object(X.a)(20),je=function(e){return r.a.createElement("form",{onSubmit:e.submit,className:_e.a.login__form},r.a.createElement(H.a,{name:"email",validate:[X.c,Oe],component:q.a,placeholder:"Email",type:"text"}),r.a.createElement(H.a,{name:"password",validate:[X.c,X.b],component:q.a,placeholder:"Password",type:"password"}),r.a.createElement("span",null,r.a.createElement(H.a,{name:"rememberMe",component:q.a,type:"checkbox"})," Remember me."),r.a.createElement("button",{type:"submit"},"Submit"),e.error?r.a.createElement("span",{className:_e.a.commonError},e.error):"")},Ne=function(e){var t=e.handleSubmit;return r.a.createElement(je,{error:e.error,submit:t})};Ne=Object(J.a)({form:"Login"})(Ne);var Se=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).submit=function(e){n.props.setMeLoggedIn(e.email,e.password,e.rememberMe)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(oe.a,{to:"/profile"}):r.a.createElement(Ne,{onSubmit:this.submit})}}]),t}(r.a.Component),we=Object(v.b)(function(e){return{isAuth:e.authMe.isAuth}},{setMeLoggedIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(a){_.a.getLoggedMe(e,t,n).then(function(e){0===e.resultCode?a(S()):1===e.resultCode?a(Object(O.a)("Login",{_error:"Incorrect email or password."})):10===e.resultCode&&a(Object(O.a)("Login",{_error:"You need to enter caption. We don't have caption yet. So ... try in an hour, I guess."}))})}}})(Se),ye={initializied:!1},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye;switch((arguments.length>1?arguments[1]:void 0).type){case"INITILIZE_APP":return Object(E.a)({},e,{initializied:!0});default:return e}},Le=[{id:1,name:"Sharik",avatar:"https://source.unsplash.com/random/50x50/?random=3"},{id:2,name:"Leva",avatar:"https://source.unsplash.com/random/50x50/?random=6"},{id:3,name:"Maffin",avatar:"https://source.unsplash.com/random/50x50/?random=5"},{id:5,name:"Oleja",avatar:"https://source.unsplash.com/random/50x50/?random=4"}],Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;arguments.length>1&&arguments[1];return e},De=n(129),ke=n(130),Ce=n(143),Ie=n(88),Ue=Object(se.c)({profileData:F,dialogsData:De.b,friendsData:Ae,usersData:ke.a,authMe:N,form:Ie.a,app:Pe}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,Te=Object(se.e)(Ue,Me(Object(se.a)(Ce.a)));window.store=Te;var xe=Te,Fe=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:ne.a},r.a.createElement(e,t))}},Re=r.a.lazy(function(){return n.e(1).then(n.bind(null,316))}),Ge=r.a.lazy(function(){return n.e(2).then(n.bind(null,317))}),We=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.setAppInitializeThunkCreator()}},{key:"render",value:function(){return this.props.isAppInitialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(y,null),r.a.createElement(I,{friends:this.props.state.friendsData}),r.a.createElement(oe.b,{path:"/login",component:we}),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(oe.b,{path:"/dialogs",render:Fe(Re)}),r.a.createElement(oe.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(oe.b,{path:"/news",component:fe}),r.a.createElement(oe.b,{path:"/music",component:ge}),r.a.createElement(oe.b,{path:"/settings",component:ve}),r.a.createElement(oe.b,{path:"/users",render:Fe(Ge)}))):r.a.createElement(ne.a,null)}}]),t}(r.a.Component),ze=Object(se.d)(oe.f,Object(v.b)(function(e){return{isAppInitialized:e.app.initializied}},{setAppInitializeThunkCreator:function(){return function(e){e(S()).then(function(){e({type:"INITILIZE_APP"})})}}}))(We),Be=function(e){return r.a.createElement(h.a,null,r.a.createElement(v.a,{store:xe},r.a.createElement(ze,{state:xe.getState()})))};i.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,t,n){e.exports={inputBlock:"textarea_inputBlock__2i2cM",error:"textarea_error__1N1S7",errorSpan:"textarea_errorSpan__6F1Q4"}},39:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(139),i=n.n(o);t.a=function(){return r.a.createElement("img",{src:i.a,alt:"preloader"})}},40:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u});var a=n(97),r=n(0),o=n.n(r),i=n(36),s=n.n(i),c=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.error&&n.touched;return o.a.createElement("div",{className:s.a.inputBlock},o.a.createElement("textarea",Object.assign({className:i?s.a.error:""},t,r)),i?o.a.createElement("span",{className:s.a.errorSpan},n.error):"")},u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.error&&n.touched;return o.a.createElement("div",{className:s.a.inputBlock},o.a.createElement("input",Object.assign({className:i?s.a.error:""},t,r)),i?o.a.createElement("span",{className:s.a.errorSpan},n.error):"")}},53:function(e,t,n){e.exports={friends:"friends_friends__3G830",title:"friends_title__3ixvq",list:"friends_list__1CP6R"}},54:function(e,t,n){e.exports={posts:"Posts_posts__1gtr3",item:"Posts_item__3OjQU",button__group:"Posts_button__group___pogQ",reverseOrder:"Posts_reverseOrder__1DUpz"}},55:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(135),i=n.n(o),s=n(136),c=n.n(s);t.a=function(e){return r.a.createElement("img",{className:i.a.avatar,src:e.src?e.src:c.a,alt:e.name+"'s avatar"})}},89:function(e,t,n){e.exports={header:"Header_header__13arE",login__block:"Header_login__block__3uzhi"}},93:function(e,t,n){e.exports={item:"Post_item__Uuqnv",like:"Post_like__3du4n"}},96:function(e,t,n){e.exports={login__form:"Login_login__form__1nZfh",commonError:"Login_commonError__3cwO_"}},98:function(e,t,n){"use strict";var a=n(21),r=n(22),o=n(24),i=n(23),s=n(25),c=n(0),u=n.n(c),l=n(47),m=n(8),f=function(e){return{isAuth:e.authMe.isAuth}};t.a=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(s.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(l.a,{to:"/login"})}}]),n}(u.a.Component);return Object(m.b)(f)(t)}}},[[169,4,3]]]);
//# sourceMappingURL=main.e504a0e3.chunk.js.map