(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07f52650"],{4125:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return B}),n.d(e,"c",function(){return f});var a,c=n("bee2"),i=n("d4ec"),o=n("99de"),r=n("7e84"),s=n("262e"),l=n("39c6"),u=n("6b4c"),b=n("f370");(function(t){t[t["Unknown"]=0]="Unknown",t[t["Bet0"]=1]="Bet0",t[t["Bet1"]=2]="Bet1",t[t["Bet2"]=3]="Bet2",t[t["Bet3"]=4]="Bet3",t[t["Bet4"]=5]="Bet4",t[t["Bet5"]=6]="Bet5",t[t["Bet6"]=7]="Bet6",t[t["Bet7"]=8]="Bet7",t[t["Bet8"]=9]="Bet8",t[t["Bet9"]=10]="Bet9",t[t["Bet10"]=11]="Bet10",t[t["Bet11"]=12]="Bet11",t[t["Bet12"]=13]="Bet12",t[t["Bet13"]=14]="Bet13",t[t["Bet14"]=15]="Bet14",t[t["Bet15"]=16]="Bet15",t[t["Bet16"]=17]="Bet16",t[t["Bet17"]=18]="Bet17",t[t["Bet18"]=19]="Bet18",t[t["Bet19"]=20]="Bet19",t[t["Bet20"]=21]="Bet20",t[t["Bet21"]=22]="Bet21",t[t["Bet22"]=23]="Bet22",t[t["Bet23"]=24]="Bet23",t[t["Bet24"]=25]="Bet24",t[t["Bet25"]=26]="Bet25",t[t["Bet26"]=27]="Bet26",t[t["Bet27"]=28]="Bet27",t[t["Bet28"]=29]="Bet28",t[t["Bet29"]=30]="Bet29",t[t["Bet30"]=31]="Bet30",t[t["Bet31"]=32]="Bet31",t[t["Bet32"]=33]="Bet32",t[t["Bet33"]=34]="Bet33",t[t["Bet34"]=35]="Bet34",t[t["Bet35"]=36]="Bet35",t[t["Bet36"]=37]="Bet36",t[t["BetEven"]=38]="BetEven",t[t["BetOdd"]=39]="BetOdd",t[t["BetLarge"]=40]="BetLarge",t[t["BetSmall"]=41]="BetSmall",t[t["BetFront"]=42]="BetFront",t[t["BetMid"]=43]="BetMid",t[t["BetEnd"]=44]="BetEnd",t[t["BetLineOne"]=45]="BetLineOne",t[t["BetLineTwo"]=46]="BetLineTwo",t[t["BetLineThree"]=47]="BetLineThree",t[t["BetRed"]=48]="BetRed",t[t["BetBlack"]=49]="BetBlack"})(a||(a={}));var B=function(t){function e(t){var n;return Object(i["a"])(this,e),n=Object(o["a"])(this,Object(r["a"])(e).call(this,t)),n.result=Object(b["e"])(t)?t.result:0,n}return Object(s["a"])(e,t),e}(u["a"]),f=function(t){function e(t,n){return Object(i["a"])(this,e),Object(o["a"])(this,Object(r["a"])(e).call(this,t,"activegame","symbol",n))}return Object(s["a"])(e,t),Object(c["a"])(e,[{key:"convert",value:function(t){return t.map(function(t){return new B(t)})}}]),e}(l["a"])},"448c":function(t,e,n){"use strict";var a=n("d4ec"),c=n("bee2"),i=n("99de"),o=n("7e84"),r=n("262e"),s=n("6a63"),l=n("4125"),u=(n("7f7f"),n("292a")),b=n("015e"),B=n("5896"),f=function(t){function e(t,n){var c;return Object(a["a"])(this,e),c=Object(i["a"])(this,Object(o["a"])(e).call(this,e.contract(t.eos.network.type),t,e.ID,n)),c.gameTable=new l["c"](c.eos,c.name),c.resultTable=new B["a"](c.eos,c.name),c}return Object(r["a"])(e,t),Object(c["a"])(e,null,[{key:"contract",value:function(t){switch(t){case u["b"].KYLIN:return"godapproulet";default:return"roulette.e"}}}]),e}(b["a"]);f.ID=5,n.d(e,"a",function(){return d});var d=function(t){function e(t){var n;return Object(a["a"])(this,e),n=Object(i["a"])(this,Object(o["a"])(e).call(this,t)),n.game=new l["b"](void 0),n.betType=l["a"].Unknown,n.contract=new f(n.house,n.betToString),n}return Object(r["a"])(e,t),Object(c["a"])(e,[{key:"betToString",value:function(t){switch(t){case l["a"].BetEven:return"Even";case l["a"].BetOdd:return"Odd";case l["a"].BetLarge:return"Large";case l["a"].BetSmall:return"Small";case l["a"].BetFront:return"1st 12";case l["a"].BetMid:return"2nd 12";case l["a"].BetEnd:return"3rd 12";case l["a"].BetLineOne:return"Line 1";case l["a"].BetLineTwo:return"Line 2";case l["a"].BetLineThree:return"Line 3";default:return""+t}}},{key:"getResultString",value:function(){return"Result: "+this.game.result}}]),e}(s["a"]);d.MAX_BET_NUM=50},"456d":function(t,e,n){var a=n("4bf8"),c=n("0d58");n("5eda")("keys",function(){return function(t){return c(a(t))}})},"5eda":function(t,e,n){var a=n("5ca1"),c=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(c.Object||{})[t]||Object[t],o={};o[t]=e(n),a(a.S+a.F*i(function(){n(1)}),"Object",o)}},"78aa9":function(t,e,n){"use strict";var a=n("dfa1"),c=n.n(a);c.a},"9c1b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"top_wrap"},[n("div",{staticClass:"top_box"},[n("p",{staticClass:"playingTip"},[t._v(t._s(t.control.message))]),t._l(t.betButtons,function(e){return n("button",{key:e.betType,staticClass:"switchBtn",class:t.control.betType===e.betType?"active":"",on:{click:function(n){t.control.setBetType(e.betType)}}},[t._v(t._s(e.title)+"\n            ")])}),n("BetView",{attrs:{control:t.control.betControl}})],2)])])},c=[],i=(n("ac6a"),n("456d"),n("bee2")),o=n("99de"),r=n("7e84"),s=n("45eb"),l=n("262e"),u=n("d4ec"),b=(n("cadf"),n("551c"),n("097d"),n("9ab4")),B=n("60a3"),f=n("c0b1"),d=n("83e0"),v=n("e5b6"),p=n("448c"),h=n("4125"),O=function t(e,n){Object(u["a"])(this,t),this.betType=e,this.title=n},m=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(o["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.betButtons=[],t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"createController",value:function(t){var e=new p["a"](d["a"].instance);this.betButtons=[];for(var n=Object.keys(h["a"]),a=0;a<n.length;a++){var c=n[a],i=parseInt(c,10);isNaN(i)||this.betButtons.push(new O(i,e.betToString(i)))}return e}},{key:"mounted",value:function(){Object(s["a"])(Object(r["a"])(e.prototype),"mounted",this).call(this)}},{key:"beforeDestroy",value:function(){this.control.destroy()}}]),e}(v["a"]);m=b["a"]([Object(B["a"])({components:{BetView:f["a"]}})],m);var j=m,_=j,k=(n("b084"),n("2877")),y=Object(k["a"])(_,a,c,!1,null,"7d3e4490",null);y.options.__file="roulette.vue";e["default"]=y.exports},af3e:function(t,e,n){},b084:function(t,e,n){"use strict";var a=n("af3e"),c=n.n(a);c.a},c0b1:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner_btm cl"},[n("div",{staticClass:"amount_right"},[n("p",{staticClass:"label_title"},[t._v(t._s("Amount"))]),n("div",{staticClass:"btm_box cl"},[n("div",{staticClass:"btm_left cl"},[n("span",{staticClass:"eosLogo"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.control.amount,expression:"control.amount"}],attrs:{type:"number",min:"1"},domProps:{value:t.control.amount},on:{input:function(e){e.target.composing||t.$set(t.control,"amount",e.target.value)}}}),n("button",{on:{click:function(e){t.control.stepAmount(2)}}},[t._v("2x")]),n("button",{on:{click:function(e){t.control.stepAmount(.5)}}},[t._v("1/2")]),n("button",{on:{click:function(e){t.control.setMin()}}},[t._v("Min")]),n("button",{on:{click:function(e){t.control.setMax()}}},[t._v("Max")])]),n("div",{staticClass:"btm_right"},[t.control.canMakeBet()?n("button",{on:{click:function(e){t.control.makeBet()}}},[t._v(t._s(t.control.betText()))]):n("button",{staticClass:"btnPlaying",attrs:{disabled:"disabled"}},[t._v(t._s(t.control.betText()))])])]),n("p",[n("span",{staticClass:"label_title"},[t._v(t._s("Balance")+": "+t._s(t.control.getBalance().toString()))]),n("transition",{attrs:{name:"balance-fade"}},[t.balanceEffectVisible&&0!==t.balanceDelta?n("span",{style:t.balanceEffectStyle},[t._v(" "+t._s(t.balanceDelta<0?""+t.balanceDelta:"+"+t.balanceDelta)+" "+t._s("EOS")+" ")]):t._e()])],1)])])},c=[],i=n("d4ec"),o=n("bee2"),r=n("99de"),s=n("7e84"),l=n("262e"),u=(n("cadf"),n("551c"),n("097d"),n("9ab4")),b=n("60a3"),B=n("7c70"),f=n("f370"),d=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.balanceDelta=0,t.balanceTicker=null,t.balanceEffectVisible=!1,t.balanceEffectStyle={color:"green","margin-left":"10 px"},t}return Object(l["a"])(e,t),Object(o["a"])(e,[{key:"getControl",value:function(){return this.control}},{key:"mounted",value:function(){this.getControl().setEffectCallback(this)}},{key:"startBalanceEffect",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4e3;this.stopBalanceEffect(),this.balanceEffectStyle.color=t<0?"red":"green",this.balanceDelta=parseFloat(Object(f["f"])(t,4)),this.balanceEffectVisible=!0,setTimeout(function(){e.balanceEffectVisible=!1},n)}},{key:"stopBalanceEffect",value:function(){null!==this.balanceTicker&&(clearTimeout(this.balanceTicker),this.balanceTicker=null)}}]),e}(b["b"]);d=u["a"]([Object(b["a"])({props:{control:{type:B["a"],required:!0}}})],d);var v=d,p=v,h=(n("78aa9"),n("2877")),O=Object(h["a"])(p,a,c,!1,null,"0b8f8224",null);O.options.__file="betView.vue";e["a"]=O.exports},dfa1:function(t,e,n){}}]);