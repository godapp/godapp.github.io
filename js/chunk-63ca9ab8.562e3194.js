(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63ca9ab8"],{"0769":function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("d4ec"),i=n("bee2"),r=n("f370"),s=function(){function t(){Object(a["a"])(this,t)}return Object(i["a"])(t,null,[{key:"initialize",value:function(){0===new Date("1970-01-01T00:00:00").getTime()?this.ISO_SUFFIX="":0===new Date("1970-01-01T00:00:00-0000").getTime()&&(this.ISO_SUFFIX="-0000")}},{key:"toISOTimestamp",value:function(t){return new Date(t+this.ISO_SUFFIX).getTime()/1e3}}]),t}();s.ISO_SUFFIX="",s.initialize();var c=function(){function t(e){Object(a["a"])(this,t),this.str=e,Object(r["d"])(e)?this.value=0:this.value=s.toISOTimestamp(e)}return Object(i["a"])(t,[{key:"toString",value:function(){return this.str}}]),t}()},"1a78":function(t,e,n){"use strict";var a=n("d366"),i=n.n(a);i.a},"5df2":function(t,e,n){var a=n("5ca1"),i=n("d752");a(a.S+a.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},"78aa9":function(t,e,n){"use strict";var a=n("dfa1"),i=n.n(a);i.a},8164:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"top_wrap"},[n("div",{staticClass:"top_box"},[n("p",{staticClass:"playingTip"},[t._v(t._s(t.control.message))]),t.control.canClaim()?n("div",[n("table",t._l(t.control.game.getResults(),function(e){return n("tr",[t._v("\n                       Reward: "+t._s(e.reward)+" Value: "+t._s(e.value)+"  numbers: "+t._s(e.values))])})),n("button",{staticClass:"btm_right",on:{click:function(e){t.control.claim()}}},[t._v("Claim")])]):n("BetView",{attrs:{control:t.control.betControl}})],1)])])},i=[],r=n("d4ec"),s=n("bee2"),c=n("99de"),u=n("7e84"),o=n("45eb"),l=n("262e"),h=(n("cadf"),n("551c"),n("097d"),n("9ab4")),f=n("60a3"),b=n("c0b1"),v=n("83e0"),d=n("e5b6"),m=n("eb0e"),p=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"createController",value:function(t){return new m["a"](v["a"].instance)}},{key:"mounted",value:function(){Object(o["a"])(Object(u["a"])(e.prototype),"mounted",this).call(this)}},{key:"beforeDestroy",value:function(){this.control.destroy()}}]),e}(d["a"]);p=h["a"]([Object(f["a"])({components:{BetView:b["a"]}})],p);var g=p,y=g,k=(n("1a78"),n("2877")),O=Object(k["a"])(y,a,i,!1,null,"0f76bbd7",null);O.options.__file="scratch.vue";e["default"]=O.exports},aa77:function(t,e,n){var a=n("5ca1"),i=n("be13"),r=n("79e5"),s=n("fdef"),c="["+s+"]",u="​",o=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(t,e,n){var i={},c=r(function(){return!!s[t]()||u[t]()!=u}),o=i[t]=c?e(f):s[t];n&&(i[n]=o),a(a.P+a.F*c,"String",i)},f=h.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(l,"")),t};t.exports=h},c0b1:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner_btm cl"},[n("div",{staticClass:"amount_right"},[n("p",{staticClass:"label_title"},[t._v(t._s("Amount"))]),n("div",{staticClass:"btm_box cl"},[n("div",{staticClass:"btm_left cl"},[n("span",{staticClass:"eosLogo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.control.amount,expression:"control.amount"}],attrs:{type:"number",min:"1"},domProps:{value:t.control.amount},on:{input:function(e){e.target.composing||t.$set(t.control,"amount",e.target.value)}}}),n("button",{on:{click:function(e){t.control.stepAmount(2)}}},[t._v("2x")]),n("button",{on:{click:function(e){t.control.stepAmount(.5)}}},[t._v("1/2")]),n("button",{on:{click:function(e){t.control.setMin()}}},[t._v("Min")]),n("button",{on:{click:function(e){t.control.setMax()}}},[t._v("Max")])]),n("div",{staticClass:"btm_right"},[t.control.canMakeBet()?n("button",{on:{click:function(e){t.control.makeBet()}}},[t._v(t._s(t.control.betText()))]):n("button",{staticClass:"btnPlaying",attrs:{disabled:"disabled"}},[t._v(t._s(t.control.betText()))])])]),n("p",[n("span",{staticClass:"label_title"},[t._v(t._s("Balance")+": "+t._s(t.control.getBalance().toString()))]),n("transition",{attrs:{name:"balance-fade"}},[t.balanceEffectVisible&&0!==t.balanceDelta?n("span",{style:t.balanceEffectStyle},[t._v(" "+t._s(t.balanceDelta<0?""+t.balanceDelta:"+"+t.balanceDelta)+" "+t._s("EOS")+" ")]):t._e()])],1)])])},i=[],r=n("d4ec"),s=n("bee2"),c=n("99de"),u=n("7e84"),o=n("262e"),l=(n("cadf"),n("551c"),n("097d"),n("9ab4")),h=n("60a3"),f=n("7c70"),b=n("f370"),v=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.balanceDelta=0,t.balanceTicker=null,t.balanceEffectVisible=!1,t.balanceEffectStyle={color:"green","margin-left":"10 px"},t}return Object(o["a"])(e,t),Object(s["a"])(e,[{key:"getControl",value:function(){return this.control}},{key:"mounted",value:function(){this.getControl().setEffectCallback(this)}},{key:"startBalanceEffect",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4e3;this.stopBalanceEffect(),this.balanceEffectStyle.color=t<0?"red":"green",this.balanceDelta=parseFloat(Object(b["f"])(t,4)),this.balanceEffectVisible=!0,setTimeout(function(){e.balanceEffectVisible=!1},n)}},{key:"stopBalanceEffect",value:function(){null!==this.balanceTicker&&(clearTimeout(this.balanceTicker),this.balanceTicker=null)}}]),e}(h["b"]);v=l["a"]([Object(h["a"])({props:{control:{type:f["a"],required:!0}}})],v);var d=v,m=d,p=(n("78aa9"),n("2877")),g=Object(p["a"])(m,a,i,!1,null,"0b8f8224",null);g.options.__file="betView.vue";e["a"]=g.exports},c5f6:function(t,e,n){"use strict";var a=n("7726"),i=n("69a8"),r=n("2d95"),s=n("5dbc"),c=n("6a99"),u=n("79e5"),o=n("9093").f,l=n("11e9").f,h=n("86cc").f,f=n("aa77").trim,b="Number",v=a[b],d=v,m=v.prototype,p=r(n("2aeb")(m))==b,g="trim"in String.prototype,y=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var n,a,i,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var s,u=e.slice(2),o=0,l=u.length;o<l;o++)if(s=u.charCodeAt(o),s<48||s>i)return NaN;return parseInt(u,a)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(p?u(function(){m.valueOf.call(n)}):r(n)!=b)?s(new d(y(e)),n,v):y(e)};for(var k,O=n("9e1e")?o(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;O.length>j;j++)i(d,k=O[j])&&!i(v,k)&&h(v,k,l(d,k));v.prototype=m,m.constructor=v,n("2aba")(a,b,v)}},d366:function(t,e,n){},d752:function(t,e,n){var a=n("7726").parseFloat,i=n("aa77").trim;t.exports=1/a(n("fdef")+"-0")!==-1/0?function(t){var e=i(String(t),3),n=a(e);return 0===n&&"-"==e.charAt(0)?-0:n}:a},dfa1:function(t,e,n){},eb0e:function(t,e,n){"use strict";n("96cf");var a,i,r=n("1da1"),s=n("d4ec"),c=n("bee2"),u=n("99de"),o=n("7e84"),l=n("262e"),h=(n("c5f6"),n("5df2"),n("cadf"),n("551c"),n("097d"),n("47bb")),f=n("f370"),b=(n("f4ff"),function(){function t(e){Object(s["a"])(this,t),this.h=0;for(var n=0,a=1779033703^e.length;n<e.length;n++)this.h=Math.imul(a^e.charCodeAt(n),3432918353);this.h=this.h<<13|this.h>>>19}return Object(c["a"])(t,[{key:"seed",value:function(){return this.h=Math.imul(this.h^this.h>>>16,2246822507),this.h=Math.imul(this.h^this.h>>>13,3266489909),(this.h^=this.h>>>16)>>>0}}]),t}()),v=function(){function t(e){Object(s["a"])(this,t);var n=new b(e);this.a=n.seed(),this.b=n.seed(),this.c=n.seed(),this.d=n.seed()}return Object(c["a"])(t,[{key:"gen",value:function(){this.a>>>=0,this.b>>>=0,this.c>>>=0,this.d>>>=0;var t=this.a+this.b|0;return this.a=this.b^this.b>>>9,this.b=this.c+(this.c<<3)|0,this.c=this.c<<21|this.c>>>11,this.d=this.d+1|0,t=t+this.d|0,this.c=this.c+t|0,(t>>>0)/4294967296}},{key:"generate",value:function(t){return Math.floor(this.gen()*t)}}]),t}(),d=(n("5df3"),n("f400"),n("ac4d"),n("8a81"),n("ac6a"),function(){function t(){Object(s["a"])(this,t)}return Object(c["a"])(t,null,[{key:"contains",value:function(t,e){var n=!0,a=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var c=r.value;if(e(c))return!0}}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return!1}},{key:"toMap",value:function(t,e,n){var a=new Map;return t.forEach(function(t){return a.set(e(t),n(t))}),a}},{key:"makeRange",value:function(t,e){for(var n=[],a=0;a<t;++a)n.push(e(a));return n}},{key:"remove",value:function(t,e){if(null!==t&&null!==e){for(var n=-1,a=t.length,i=0;i<a-1;i++)t[i]===e&&(n=i);t.splice(n,1)}}},{key:"swap",value:function(t,e,n){var a=t[n];return t[n]=t[e],t[e]=a,a}}]),t}()),m=n("0769"),p=function t(e){Object(s["a"])(this,t),Object(f["e"])(e)?(this.id=e.id,this.player=e.player,this.referer=e.referer,this.seed=e.seed,this.timestamp=new m["a"](e.time)):(this.id=0,this.player="",this.referer="",this.seed="",this.timestamp=new m["a"](""))};(function(t){t[t["Unknown"]=0]="Unknown",t[t["Pending"]=1]="Pending",t[t["Revealed"]=2]="Revealed"})(a||(a={})),function(t){t[t["Hit"]=0]="Hit",t[t["Miss"]=1]="Miss",t[t["Bonus"]=2]="Bonus"}(i||(i={}));var g=function t(e,n,a,i){Object(s["a"])(this,t),this.reward=e,this.result=n,this.value=a,this.values=i},y=function(t){function e(t){var n;return Object(s["a"])(this,e),n=Object(u["a"])(this,Object(o["a"])(e).call(this,t)),n.results=[],Object(f["e"])(t)?(n.price=h["a"].fromString(t.price),n.reward=h["a"].fromString(t.reward),n.result=Number.parseFloat(t.result),n.status=0===n.result?a.Pending:a.Revealed):(n.price=h["a"].DEFAULT,n.reward=h["a"].DEFAULT,n.result=0,n.status=a.Unknown),n}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"getResults",value:function(){return 0!==this.result&&Object(f["c"])(this.results)&&(this.results=e.generateResults(this.result,this.seed)),this.results}},{key:"isActive",value:function(){return 0!==this.result}},{key:"canMakeBet",value:function(){return this.status===a.Unknown}}],[{key:"generateResults",value:function(t,n){for(var a=[],r=[],s=[],c=0;c<5;c++)s[c]=3&t,t>>=2,r[c]=15&t,t>>=4;for(var u=new v(n),o=[0,1,2,3,4],l=[1,2,3,4,5,6,7,8,9],h=0;h<5;h++){for(var f=[],b=s[h]===i.Bonus?u.generate(4):-1,m=d.swap(o,h,h+u.generate(5-h)),p=0;p<4;p++){var y=d.swap(l,p,p+u.generate(9-p));f[p]=b===p?99:10*m+y}var k=s[h]===i.Hit?f[u.generate(4)]:10*m+l[4+u.generate(5)];a[h]=new g(e.SCRATCH_TYPES[r[h]],s[h],k,f)}return a}}]),e}(p);y.SCRATCH_TYPES=[1,2,5,10,20,50,100,1e3,1e4];n("6b54"),n("7f7f");var k,O=n("292a"),j=n("4670"),w=n("39c6"),_=function(t){function e(t,n){return Object(s["a"])(this,e),Object(u["a"])(this,Object(o["a"])(e).call(this,t,"activecard","player",n))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"convert",value:function(t){return t.map(function(t){return new y(t)})}}]),e}(w["a"]),T=n("abdf");(function(t){t[t["Pig"]=0]="Pig"})(k||(k={}));var I=function(t){function e(t){var n;return Object(s["a"])(this,e),n=Object(u["a"])(this,Object(o["a"])(e).call(this,t.eos.network===O["a"].KYLIN?"godappscratc":"",t,e.ID)),n.gameTable=new _(t.eos,n.name),n}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"init",value:function(){return this.pushAction("init",{})}},{key:"setGlobal",value:function(t,e){return this.pushAction("setglobal",{key:t,value:e})}},{key:"play",value:function(t,e,n,a,i){return this.transfer(a,t+","+e+","+n+","+i)}},{key:"openCard",value:function(t,e,n){return this.pushAction("play",{player:this.eos.account.name,card_type:t,price:new h["a"](e,T["a"].EOS).toString(),referer:n})}},{key:"claim",value:function(){return this.pushAction("claim",{player:this.eos.account.name})}}]),e}(j["b"]);I.ID=j["a"].Scratch;var S,E=n("3797");(function(t){t[t["Initializing"]=0]="Initializing",t[t["NotLoading"]=1]="NotLoading",t[t["Loading"]=2]="Loading"})(S||(S={}));var C=function(t){function e(t){var n;return Object(s["a"])(this,e),n=Object(u["a"])(this,Object(o["a"])(e).call(this,t)),n.historyTicker=void 0,n.gameTicker=void 0,n.lastId=-1,n.referer="",n.loadingStatus=S.Initializing,n.game=n.createEmptyGame(),n.lastGame=n.createEmptyGame(),n}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"initialize",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.referer=Object(f["e"])(e)?e:"",this.startGetHistory(),this.startGetMyGame(0);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"destroy",value:function(){null!==this.historyTicker&&(clearInterval(this.historyTicker),this.historyTicker=null)}},{key:"reset",value:function(){this.game=this.createEmptyGame()}},{key:"startGetMyGame",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:2e3,n=i.length>1&&void 0!==i[1]?i[1]:"",Object(f["d"])(n)){t.next=5;break}return t.next=5,this.eos.waitUntilImmutable(n);case 5:this.stopGetMyGame(),this.gameTicker=setTimeout(Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!a.eos.loggedIn()){t.next=10;break}return t.prev=1,t.next=4,a.gameTable.getById(a.eos.account.name);case 4:n=t.sent,a.game=Object(f["e"])(n)?n:a.createEmptyGame(),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](1);case 10:e=a.canFinishLoading(),e?a.loadingStatus=S.NotLoading:a.startGetMyGame(500);case 12:case"end":return t.stop()}},t,this,[[1,8]])})),e);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"stopGetMyGame",value:function(){null!==this.gameTicker&&(clearTimeout(this.gameTicker),this.gameTicker=null)}},{key:"startGetHistory",value:function(){var t=this;this.historyTicker=setInterval(function(){t.getHistory()},3e3)}},{key:"canMakeBet",value:function(){return this.loadingStatus!==S.Initializing&&this.game.canMakeBet()}},{key:"onBetMade",value:function(t){this.loadingStatus=S.Loading,this.lastGame=this.game,this.reset(),this.startGetMyGame(0,t)}}]),e}(E["a"]);n.d(e,"a",function(){return x});var x=function(t){function e(t){var n;return Object(s["a"])(this,e),n=Object(u["a"])(this,Object(o["a"])(e).call(this,t)),n.contract=new I(n.house),n.gameTable=n.contract.gameTable,n}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"makeBet",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.contract.play(k.Pig,1e4*e,1,new h["a"](e,T["a"].EOS),this.referer);case 2:return n=t.sent,this.onBetMade(n.id),t.abrupt("return",n);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"canClaim",value:function(){return this.game.status===a.Revealed}},{key:"claim",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.contract.claim();case 2:return e=t.sent,this.loadingStatus=S.Loading,this.lastGame=this.game,this.startGetMyGame(0,e.id),t.abrupt("return",e);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"betText",value:function(){return"Get Card"}},{key:"canFinishLoading",value:function(){return this.eos.loggedIn()&&this.game.status!==a.Pending&&(this.lastGame.status!==a.Revealed||this.game.id!==this.lastGame.id)}},{key:"createEmptyGame",value:function(){return new y(void 0)}},{key:"getHistory",value:function(){}}]),e}(C)},f4ff:function(t,e,n){var a=n("5ca1"),i=Math.imul;a(a.S+a.F*n("79e5")(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function(t,e){var n=65535,a=+t,i=+e,r=n&a,s=n&i;return 0|r*s+((n&a>>>16)*s+r*(n&i>>>16)<<16>>>0)}})},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);