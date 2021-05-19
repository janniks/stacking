(this["webpackJsonppool-registry"]=this["webpackJsonppool-registry"]||[]).push([[0],{109:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(4),a=n(38),c=n(70),o=n(0);function s(t){var e=t.pool,n=Object(a.d)(e);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h5",{children:[e.data.url.data?Object(o.jsx)("a",{href:e.data.url.data,children:Object(a.h)(e.data.name)}):Object(o.jsx)(o.Fragment,{children:Object(a.h)(e.data.name)}),e.data.verified&&e.data.verified.type===r.a.BoolTrue&&Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)("a",{href:"".concat(e.data.url.data,"/manifest.json"),children:Object(o.jsx)("img",{src:"/verified.svg",alt:"verified",width:"16"})})]})]}),Object(o.jsxs)("p",{children:[Object(r.b)(e.data.delegatee),Object(o.jsx)("br",{}),e.data["locking-period"].type===r.a.List?"Locking for ".concat(e.data["locking-period"].list.map((function(t){return t.value.toString(10)})).join(", ")," cycles."):"Variable locking period",Object(o.jsx)("br",{}),e.data["minimum-ustx"].type===r.a.OptionalSome?"Minimum amount required to join: ".concat(e.data["minimum-ustx"].value.value.toNumber()/1e6," STX"):"No minimum STX required.",Object(o.jsx)("br",{}),"Payout in ",e.data.payout.data,".",Object(o.jsx)("br",{}),e.data["date-of-payout"].data?Object(o.jsxs)(o.Fragment,{children:["When payout? ",e.data["date-of-payout"].data,"."]}):Object(o.jsx)(o.Fragment,{children:"No information about payout date available."}),Object(o.jsx)("br",{}),e.data.fees.data?"Fees: ".concat(e.data.fees.data):"No information about fees available.",Object(o.jsx)("br",{}),"Reward addresses:",Object(o.jsx)("br",{}),e.data["pox-address"].list.map((function(t){return Object(o.jsxs)(o.Fragment,{children:[Object(c.c)(t),Object(o.jsx)("br",{})]})})),"Using contract:",Object(o.jsx)("br",{}),n,Object(o.jsx)("br",{})]})]})}},145:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(7),a=n.n(r),c=n(21),o=n(9),s=(n(82),n(8),n(90)),i=n(3),u=n(18),d=n(0);function l(t){var e=t.txId,n=t.resultPrefix,r=Object(i.useState)({loading:!1}),l=Object(o.a)(r,2),f=l[0],b=l[1],p=Object(i.useRef)();if(Object(i.useEffect)((function(){var t;e&&(console.log(e),p.current.classList.remove("d-none"),b({loading:!0}),function(){var e=Object(c.a)(a.a.mark((function e(n,r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.connectWebSocketClient)(u.g);case 3:return c=e.sent,e.next=6,c.subscribeTxUpdates(n,r);case 6:t=e.sent,console.log({client:c,sub:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()(e,function(){var n=Object(c.a)(a.a.mark((function n(r){var c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(r),"pending"!==r.tx_status){n.next=5;break}return n.abrupt("return");case 5:if("success"!==r.tx_status){n.next=13;break}return n.next=8,u.l.getTransactionById({txId:e});case 8:o=n.sent,console.log(o),c=o.tx_result,n.next=14;break;case 13:r.tx_status.startsWith("abort")&&(c=void 0);case 14:return p.current.classList.add("d-none"),b({loading:!1,result:c}),n.next=18,t.unsubscribe();case 18:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()))}),[e]),!e)return null;var j=e.startsWith("0x")?e:"0x".concat(e);return Object(d.jsxs)(d.Fragment,{children:[f.loading&&Object(d.jsxs)(d.Fragment,{children:["Checking transaction status:"," ",Object(d.jsx)("a",{href:"https://explorer.stacks.co/txid/".concat(j,"?chain=mainnet"),children:j})]}),!f.loading&&f.result&&Object(d.jsxs)(d.Fragment,{children:[n,f.result.repr]})," ",Object(d.jsx)("div",{ref:p,role:"status",className:"d-none spinner-border spinner-border-sm text-info align-text-top mr-2"})]})}},18:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"j",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"g",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"d",(function(){return b})),n.d(e,"i",(function(){return h})),n.d(e,"k",(function(){return O})),n.d(e,"l",(function(){return m}));var r=n(90),a=n(40),c="SP1K1A1PMGW2ZJCNF46NWZWHG8TS1D23EGH1KNK60",o="pool-registry-v1",s="SP000000000000000000002Q6VF78",i="bns",u="https://app.blockstack.org",d="https://stacks-node-api.mainnet.stacks.co",l="ws://stacks-node-api.mainnet.stacks.co/",f="".concat(d,"/v2/accounts"),b=new a.a;b.coreApiUrl=d;var p=d,j=new r.Configuration({basePath:p}),h=new r.AccountsApi(j),O=new r.SmartContractsApi(j),m=new r.TransactionsApi(j);new r.InfoApi(j)},268:function(t,e){},279:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return S}));var r=n(7),a=n.n(r),c=n(21),o=n(9),s=n(3),i=n(18),u=n(145),d=n(63),l=n(86),f=n(112),b=n(49),p=n(4),j=n(44),h=n(92),O=n(48),m=n(2),x=n(37),v=n(70),g=n(109),y=n(38),k=n(0);function w(e,n){switch(e){case"BTC":return Object(v.b)(n);case"STX":return Object(v.a)(n);default:return Object(f.a)({hashbytes:Object(b.a)(t.from([0])),version:Object(b.a)(t.from([0]))})}}function S(t){var e=t.pool,n=t.ownerStxAddress,r=t.userSession;console.log(e),console.log({ownerStxAddress:n,userSession:r});var f=Object(l.a)().doContractCall,b=Object(s.useRef)(),v=Object(s.useRef)(),S=Object(s.useRef)(),N=Object(s.useRef)(),A=Object(s.useRef)(),P=Object(s.useState)(),C=Object(o.a)(P,2),F=C[0],B=C[1],T=Object(s.useState)(),U=Object(o.a)(T,2),I=U[0],E=U[1],L=Object(s.useState)(),W=Object(o.a)(L,2);W[0],W[1];Object(s.useEffect)((function(){n&&(Object(d.a)(n).catch((function(t){B("Failed to access your account",t),console.log(t)})).then(function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(void 0),console.log({acc:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.i.getAccountBalance({principal:n}).then((function(t){var e=(parseInt(t.stx.balance)-parseInt(t.stx.locked))/1e6;b.current&&(b.current.value=e)})))}),[n]);var D=e.data.contract.type===p.a.OptionalSome,K=(e.data["extended-contract"].type,p.a.OptionalSome,e.data["extended2-contract"].type,p.a.OptionalSome,Object(y.d)(e).split(".")),R=Object(o.a)(K,2),M=R[0],_=R[1],H=Object(p.b)(e.data.delegatee).split("."),z=H.length<2?Object(j.e)(H[0]):Object(j.a)(H[0],H[1]),X=Object(h.b)(e.data["pox-address"]),J=function(t){switch(t.data.payout.data){case"BTC":return"BTC";case"STX":return"STX";default:return}}(e),V=function(t,e){if(console.log({payout:t,stxAddress:e}),e)switch(t){case"BTC":return x.c32ToB58(e);case"STX":default:return e}}(J,n);console.log({poolData:e.data});var G=function(){var t=Object(c.a)(a.a.mark((function t(){var e,n,c,o,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A.current.classList.remove("d-none"),e=Object(O.b)(1e6*b.current.value.trim()),n=v.current.value.trim()?Object(h.b)(Object(O.b)(v.current.value.trim())):Object(h.a)(),c=w(J,S.current.value.trim()),o=Object(O.b)(N.current.value.trim),t.prev=5,B("Sending transaction"),s=D?[e,z,n,X]:[e,z,n,X,c,o],console.log({functionArgs:s}),t.next=11,f({contractAddress:M,contractName:_,functionName:"delegate-stx",functionArgs:s,postConditionMode:m.o.Deny,postConditions:[],userSession:r,network:i.d,finished:function(t){console.log(t),B(void 0),E(t.txId),A.current.classList.add("d-none")}});case 11:t.next=18;break;case 13:t.prev=13,t.t0=t.catch(5),console.log(t.t0),B(t.t0.toString()),A.current.classList.add("d-none");case 18:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(){return t.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsx)("h5",{children:"Join the pool"}),Object(k.jsx)(g.a,{pool:e}),Object(k.jsxs)("div",{className:"NoteField",children:['Choose an amount, how much you would like to "delegately" stack through this pool (can be higher than your balance to compound future rewards if stacking indefinitely).',Object(k.jsx)("input",{type:"number",step:"any",min:"0",ref:b,className:"form-control",placeholder:"Amount in STX",onKeyUp:function(t){"Enter"===t.key&&v.current.focus()},onBlur:function(t){B(void 0)}}),Object(k.jsx)("br",{}),"Duration of your pool membership",Object(k.jsx)("input",{type:"text",ref:v,className:"form-control",placeholder:"Leave empty for indefinite duration",onKeyUp:function(t){"Enter"===t.key&&N.current.focus()},onBlur:function(t){B(void 0)}}),Object(k.jsx)("br",{}),"Locking Period (how long do you want to swim this time?)",Object(k.jsx)("input",{type:"text",ref:N,className:"form-control",placeholder:"Number of cycles",disabled:D,readOnly:e&&e.data["locking-period"].type===p.a.List,defaultValue:e&&e.data["locking-period"].type===p.a.List?e.data["locking-period"].list.map((function(t){return t.value.toString(10)})).join(" - "):"",onKeyUp:function(t){"Enter"===t.key&&S.current.focus()},onBlur:function(t){B(void 0)}}),Object(k.jsx)("br",{}),"Payout address (how would you like to get your rewards)",Object(k.jsx)("input",{type:"text",ref:S,className:"form-control",defaultValue:V,disabled:D,onKeyUp:function(t){"Enter"===t.key&&G()},onBlur:function(t){B(void 0)}}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{className:"input-group-append",children:Object(k.jsxs)("button",{className:"btn btn-outline-secondary",type:"button",onClick:G,children:[Object(k.jsx)("div",{ref:A,role:"status",className:"d-none spinner-border spinner-border-sm text-info align-text-top mr-2"}),"Delegate"]})})]}),Object(k.jsx)("div",{children:Object(k.jsx)(u.a,{txId:I,resultPrefix:"You joined the pool "})}),F&&Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{children:F})})]})}}).call(this,n(5).Buffer)},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"e",(function(){return y})),n.d(e,"h",(function(){return k})),n.d(e,"i",(function(){return S})),n.d(e,"c",(function(){return P})),n.d(e,"f",(function(){return F})),n.d(e,"g",(function(){return B})),n.d(e,"d",(function(){return T}));var r=n(80),a=n(7),c=n.n(a),o=n(9),s=n(21),i=n(280),u=n(48),d=n(4),l=n(194),f=n(75),b=n(112),p=n(49),j=n(18),h=j.b,O=j.e;function m(t){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.a)({contractAddress:h,contractName:O,functionName:"get-pool",functionArgs:[Object(u.b)(e)],network:j.d,senderAddress:h});case 2:if(n=t.sent,console.log(n),n.type!==d.a.OptionalNone){t.next=8;break}return t.abrupt("return",void 0);case 8:return t.abrupt("return",n.value);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(c.a.mark((function t(e){var n,a,o,b,p,m,x;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.verify,a=void 0!==n&&n,o=e.offset,b=void 0===o?0:o,console.log({verify:a,offset:b}),p=Object(r.a)(Array(10).keys()).map((function(t){return Object(u.b)(t+1+b)})),t.next=5,Object(i.a)({contractAddress:h,contractName:O,functionName:"get-pools",functionArgs:[Object(l.a)(p)],network:j.d,senderAddress:h});case 5:return m=t.sent,t.next=8,Promise.all(m.list.map(function(){var t=Object(s.a)(c.a.mark((function t(e,n){var r,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.type!==d.a.OptionalNone){t.next=4;break}return t.abrupt("return",e);case 4:if((r=e.value).data["pool-id"]=p[n],!a){t.next=14;break}return t.next=9,S(r.data.url.data,k(r.data.name));case 9:return o=t.sent,r.data.verified=o?Object(f.b)():Object(f.a)(),t.abrupt("return",r);case 14:return t.abrupt("return",r);case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 8:return x=t.sent,t.abrupt("return",x.reduce((function(t,e){return e.type===d.a.OptionalNone||t.push(e),t}),[]));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){var e=t.split(".");if(e.length=2){var n=Object(o.a)(e,2),r=n[0],a=n[1];return console.log(e),Object(b.a)({name:Object(p.b)(r),namespace:Object(p.b)(a)})}}function k(t){return"".concat(t.data.name.buffer.toString(),".").concat(t.data.namespace.buffer.toString())}var w={"https://pool.friedger.de":"friedgerpool.id"};function S(t,e){return N.apply(this,arguments)}function N(){return(N=Object(s.a)(c.a.mark((function t(e,n){var r,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=w[e])){t.next=5;break}return t.abrupt("return",r===n);case 5:return t.prev=5,t.next=8,fetch(e+"/manifest.json");case 8:return a=t.sent,t.next=11,a.json();case 11:return o=t.sent,console.log({manifest:o,username:n},o.author===n),o.author&&(w[e]=o.author),t.abrupt("return",o.author===n);case 17:return t.prev=17,t.t0=t.catch(5),console.log(t.t0),t.abrupt("return",!1);case 21:case"end":return t.stop()}}),t,null,[[5,17]])})))).apply(this,arguments)}var A={};function P(t,e){return C.apply(this,arguments)}function C(){return(C=Object(s.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e,n,"pool-trait");case 2:if(!t.sent){t.next=6;break}return t.abrupt("return",0);case 6:return t.next=8,U(e,n,"pool-trait-ext");case 8:if(!t.sent){t.next=12;break}return t.abrupt("return",1);case 12:return t.next=14,U(e,n,"pool-trait-ext2");case 14:if(!t.sent){t.next=18;break}return t.abrupt("return",2);case 18:return t.abrupt("return",-1);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}A["".concat(j.c,"/pox/").concat(j.b,"/").concat(j.e,"/pool-trait")]=!0;var F=["register","register-ext","register-ext2"],B=["update","update-ext","update-ext2"];function T(t){var e=t.data.contract.type===d.a.OptionalSome?t.data.contract.value:t.data.contract.ext.type===d.a.OptionalSome?t.data["extended-contract"]:t.data["extended2-contract"];return Object(d.b)(e)}function U(t,e,n){return I.apply(this,arguments)}function I(){return(I=Object(s.a)(c.a.mark((function t(e,n,r){var a,o,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="".concat(e,"/").concat(n,"/").concat(j.b,"/").concat(j.e,"/").concat(r),console.log({path:a}),!(a in A)){t.next=6;break}return t.abrupt("return",A[a]);case 6:return t.next=8,fetch("".concat(j.h,"/v2/traits/").concat(a));case 8:if(s=t.sent,console.log({result:s}),404!==s.status){t.next=14;break}o=!1,t.next=17;break;case 14:return t.next=16,s.json();case 16:o=t.sent.is_implemented;case 17:return A.path=o,t.abrupt("return",o);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},422:function(t,e){},423:function(t,e){},447:function(t,e){},461:function(t,e){},463:function(t,e){},469:function(t,e){},471:function(t,e){},482:function(t,e){},552:function(t,e){},554:function(t,e){},559:function(t,e){},561:function(t,e){},567:function(t,e){},569:function(t,e){},581:function(t,e){},584:function(t,e){},587:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=587},588:function(t,e){},602:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n(272),c=n.n(a),o=n(9),s=n(7),i=n.n(s),u=n(21),d=n(146),l=n(281),f=n(57),b=n(18),p=n(62),j=n(192),h=new d.a(["store_write","publish_data"]),O=Object(p.atom)(new l.a({appConfig:h})),m=Object(p.atom)(),x=Object(p.atom)(),v=function(){var t=Object(p.useAtom)(O),e=Object(o.a)(t,1)[0],n=Object(j.useUpdateAtom)(m),a=Object(j.useUpdateAtom)(x),c=function(){var t=Object(u.a)(i.a.mark((function t(e){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(e.authResponse),t.next=3,e.userSession.loadUserData();case 3:r=t.sent,n(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s={authOrigin:b.j,onFinish:c,userSession:e,redirectTo:"/",manifestPath:"/manifest.json",appDetails:{name:"Pool Registry",icon:"/pool-registry.png"}};return{handleOpenAuth:function(){Object(f.g)(s)},handleSignOut:Object(r.useCallback)((function(){null===e||void 0===e||e.signUserOut("/")}),[e]),authOptions:s}},g=n(0);function y(t){var e=v().handleOpenAuth;return Object(g.jsx)("div",{className:"Landing",children:Object(g.jsx)("div",{className:"jumbotron jumbotron-fluid pt-3 mb-0",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"panel-landing text-center mt-3",children:[Object(g.jsx)("h1",{className:"landing-heading",children:"Members Only"}),Object(g.jsx)("p",{className:"lead",children:"Enjoy the exclusive Friedger Pool membership!"}),Object(g.jsx)("p",{className:"card-link mb-5",children:Object(g.jsx)("button",{className:"btn btn-outline-primary",type:"button",onClick:e,children:"Start now"})})]})})})})}n(120);function k(){var t=v().handleSignOut,e=Object(p.useAtom)(O),n=Object(o.a)(e,1)[0];return(null===n||void 0===n?void 0:n.isUserSignedIn())?Object(g.jsx)("button",{className:"btn btn-primary btn-lg",onClick:function(){console.log("signOut"),t()},children:"Log Out"}):null}n(6),n(63);n(109);n(38),n(70),n(4);n(279);n(605);n(145),n(86),n(280),n(2),n(44),n(194),n(110),n(92),n(48),n(49),n(37),n(87);function w(t){v().authOptions;var e=Object(p.useAtom)(O),n=Object(o.a)(e,1)[0],a=Object(p.useAtom)(m),c=Object(o.a)(a,2)[1];return Object(r.useEffect)((function(){(null===n||void 0===n?void 0:n.isUserSignedIn())?c(n.loadUserData()):n.isSignInPending()&&n.handlePendingSignIn()}),[n,c]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k,{className:"ml-auto",userSession:n}),Object(g.jsx)(S,{userSession:n})]})}function S(t){var e=t.userSession,n=e&&e.isUserSignedIn(),r=e&&e.isUserSignedIn()&&e.loadUserData().decentralizedID;return Object(g.jsxs)(g.Fragment,{children:[!n&&Object(g.jsx)(y,{}),r&&Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{children:"Claim Friedger Pool NFT"}),Object(g.jsx)("button",{children:"Change reward receiver"})]})]})}c.a.render(Object(g.jsx)(w,{}),document.getElementById("react"))},63:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return j})),n.d(e,"c",(function(){return h}));var r=n(7),a=n.n(r),c=n(21),o=n(15),s=n(6),i=n(2),u=(n(280),n(49),n(4)),d=n(8),l=n(44),f=n(146);n(187),new f.a(["store_write","publish_data"]);var b=n(18);function p(t){var e=Object(o.b)(t),n=Object(o.e)(e);return{privateKey:e,address:Object(s.a)(i.b.MainnetSingleSig,i.a.SerializeP2PKH,1,[n])}}function j(t){return console.log('Checking account "'.concat(t,'"')),t?b.i.getAccountBalance({principal:t}).then((function(t){return t.stx})):Promise.reject()}function h(t){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.k.callReadOnlyFunction({contractAddress:b.c,contractName:"bns",functionName:"resolve-principal",readOnlyFunctionArgs:{sender:e,arguments:[Object(d.c)(Object(l.e)(e))]}});case 2:if(!(n=t.sent).okay||"0x09"===n.result){t.next=14;break}if((r=Object(d.i)(n.result)).type!==u.a.ResponseOk){t.next=9;break}return t.abrupt("return",r.value);case 9:return console.log({nameResult:n}),console.log("No name found. Error: "+r.value.data.code.value.toString(10)),t.abrupt("return",void 0);case 12:t.next=15;break;case 14:return t.abrupt("return",void 0);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},70:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return l}));var r=n(2),a=n(112),c=n(49),o=n(32),s=(n(87),n(37));function i(t){var e=function(t){if(t.startsWith("bc1")||t.startsWith("tb1"))return 32===o.address.fromBech32(t).data.length?r.a.SerializeP2WSH:r.a.SerializeP2WPKH;switch(o.address.fromBase58Check(t).version){case 0:case 111:return r.a.SerializeP2PKH;case 5:case 196:return r.a.SerializeP2SH;default:throw new Error("Invalid pox address version")}}(t);return t.startsWith("bc1")||t.startsWith("tb1")?{hashMode:e,data:o.address.fromBech32(t).data}:{hashMode:e,data:o.address.fromBase58Check(t).hash}}function u(e){var n=i(e),r=n.hashMode,o=n.data;return Object(a.a)({hashbytes:Object(c.a)(o),version:Object(c.a)(t.from([r]))})}function d(e){var n=function(t){return i(s.c32ToB58(t))}(e),r=n.hashMode,o=n.data;return console.log({hashMode:r,data:o}),Object(a.a)({hashbytes:Object(c.a)(o),version:Object(c.a)(t.from([r]))})}function l(t){return o.address.toBase58Check(t.data.hashbytes.buffer,function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(t){case r.a.SerializeP2PKH:return e?0:111;case r.a.SerializeP2SH:return e?5:196;default:throw new Error("Invalid hash mode")}}(t.data.version.buffer.valueOf()[0],!0))}}).call(this,n(5).Buffer)}},[[602,1,2]]]);
//# sourceMappingURL=main.518d8f1c.chunk.js.map