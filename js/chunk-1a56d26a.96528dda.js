(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a56d26a"],{"015e":function(e,t,r){"use strict";r("ac4d"),r("8a81"),r("ac6a"),r("7f7f");var n=r("d4ec"),i=r("bee2"),a=r("99de"),s=r("7e84"),u=r("262e"),c=r("4670"),h=r("fd26"),o=r("47bb"),l=r("39c6"),f=function e(t,r){Object(n["a"])(this,e),this.id=t.id,this.gameId=t.game_id,this.player=t.player,this.referer=t.referer,this.bet=o["a"].fromString(t.bet),this.betType=t.bet_type,this.betString=r(this.betType)},d=function(e){function t(e,r,i){var u;return Object(n["a"])(this,t),u=Object(a["a"])(this,Object(s["a"])(t).call(this,e,"bets","id",r)),u.converter=i,u}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"convert",value:function(e){var t=this;return e.map(function(e){return new f(e,t.converter)})}}]),t}(l["a"]),b=(r("55dd"),function e(t,r){Object(n["a"])(this,e),this.id=t.id,this.gameId=t.game_id,this.player=t.player,this.bet=o["a"].fromString(t.bet),this.betType=t.bet_type,this.betString=r(this.betType),this.payout=t.payout,this.time=t.close_time,this.result=t.result}),v=function(e){function t(e,r,i){var u;return Object(n["a"])(this,t),u=Object(a["a"])(this,Object(s["a"])(t).call(this,e,"histories","id",r)),u.converter=i,u}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"convert",value:function(e){var t=this;return e.map(function(e){return new b(e,t.converter)}).sort(function(e,t){return t.time-e.time})}}]),t}(l["a"]);r.d(t,"a",function(){return m});var m=function(e){function t(e,r,i,u){var c;return Object(n["a"])(this,t),c=Object(a["a"])(this,Object(s["a"])(t).call(this,e,r,i)),c.globalVarTable=new h["a"](c.eos,c.name),c.betTable=new d(c.eos,c.name,u),c.historyTable=new v(c.eos,c.name,u),c}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"init",value:function(){return this.pushAction("init",{})}},{key:"setGlobal",value:function(e,t){return this.pushAction("setglobal",{key:e,value:t})}},{key:"close",value:function(e){return this.pushAction("hardclose",{game_id:e})}},{key:"reveal",value:function(e,t){return this.pushAction("reveal",{game_id:e,signature:t})}},{key:"newRound",value:function(){return this.pushAction("newround",{symbol_type:"4,EOS"})}},{key:"play",value:function(e,t,r){if(0===t.size)throw new Error("No bet placed");var n=o["a"].DEFAULT,i="",a=!0,s=!1,u=void 0;try{for(var c,h=t.entries()[Symbol.iterator]();!(a=(c=h.next()).done);a=!0){var l=c.value,f=l[1];f.quantity>0&&(n=n===o["a"].DEFAULT?f:n.plus(f),i+=l[0]+","+f.baseQuatity()+",")}}catch(d){s=!0,u=d}finally{try{a||null==h.return||h.return()}finally{if(s)throw u}}return this.transfer(n,e+","+r+","+i)}}]),t}(c["b"])},5896:function(e,t,r){"use strict";r.d(t,"a",function(){return o});r("55dd");var n=r("bee2"),i=r("99de"),a=r("7e84"),s=r("262e"),u=r("d4ec"),c=r("39c6"),h=function e(t,r){if(Object(u["a"])(this,e),this.id=t.id,this.gameId=t.game_id,this.result=[],r)for(var n=0;n<8;n++){var i=1<<n;0!==(t.result&i)&&this.result.push(i)}else this.result.push(t.result)},o=function(e){function t(e,r){var n,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(u["a"])(this,t),n=Object(i["a"])(this,Object(a["a"])(t).call(this,e,"results","id",r)),n.bitmask=s,n}return Object(s["a"])(t,e),Object(n["a"])(t,[{key:"convert",value:function(e){var t=this;return e.map(function(e){return new h(e,t.bitmask)}).sort(function(e,t){return e.gameId-t.gameId})}}]),t}(c["a"])},"6a63":function(e,t,r){"use strict";r.d(t,"a",function(){return b});r("5df3"),r("f400"),r("28a5"),r("20d6"),r("7f7f"),r("ac4d"),r("8a81"),r("ac6a"),r("6b54"),r("96cf");var n=r("1da1"),i=r("d4ec"),a=r("bee2"),s=r("99de"),u=r("7e84"),c=r("262e"),h=r("abdf"),o=r("f370"),l=r("3797"),f=r("6b4c"),d=r("47bb"),b=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.gameTicker=void 0,e.referer="",e.playerNum={},e.bets=[],e.betsSorted=[],e.history=[],e.bet="",e.otherBets="",e.betType=0,e.message="",e.restTime=0,e.hasNewBet=!1,e.hasNewOtherBet=!1,e.result=[],e.groupedResult=[],e.resultPerCol=3,e.lastBets=[],e.firstActive=!1,e}return Object(c["a"])(t,e),Object(a["a"])(t,[{key:"initialize",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",this.startTick(),this.referer=Object(o["e"])(t)?t:"",e.next=5,this.updateResult();case 5:return e.next=7,this.loadHistory();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){this.stopTick()}},{key:"loadGame",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.contract.gameTable.getById(h["a"].EOS.toString());case 2:t=e.sent,Object(o["e"])(t)&&(this.game=t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadHistory",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.contract.historyTable.readAll();case 2:this.history=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setBetType",value:function(e){this.betType=e}},{key:"startGetGame",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r,i=this,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:2e3,a.length>1&&void 0!==a[1]?a[1]:"",r=a.length>2?a[2]:void 0,this.stopGameTicker(),this.gameTicker=setTimeout(Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.loadGame();case 3:i.stopGameTicker(),Object(o["e"])(r)&&r(),i.betControl.finishBet(-1),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),i.startGetGame(500,"",r);case 11:case"end":return e.stop()}},e,this,[[0,8]])})),t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"startTick",value:function(){var e=this;this.gameTicker=setInterval(function(){e.update()},1e3)}},{key:"update",value:function(){var e=Math.ceil(Date.now()/1e3);switch(this.game.status){case f["b"].Active:this.message=Math.max(0,this.game.endTime-e)+" seconds left",this.restTime=Math.max(0,this.game.endTime-e),this.firstActive&&(this.loadHistory(),this.resetBets(),this.firstActive=!1);break;case f["b"].StandBy:var t="Round finished, "+this.getResultString();e>this.game.endTime?(this.message=t+". Place bet to start next round.",this.restTime=0):(this.message=t+". "+(this.game.endTime-e)+" seconds until next round",this.restTime=0),this.firstActive=!0;break;default:this.message="Loading",this.restTime=0}e%2===0&&e>this.game.endTime-2&&this.loadGame()}},{key:"stopTick",value:function(){Object(o["e"])(this.gameTicker)&&clearInterval(this.gameTicker),this.gameTicker=void 0}},{key:"stopGameTicker",value:function(){null!==this.gameTicker&&(clearTimeout(this.gameTicker),this.gameTicker=null)}},{key:"checkUpdate",value:function(){var e=[],t=!0,r=!1,n=void 0;try{for(var i,a=this.bets[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value;this.addArray(this.lastBets,s)&&(e.push(s),this.lastBets.push(s))}}catch(u){r=!0,n=u}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}return e}},{key:"checkOtherData",value:function(e){var t=this;if(!e||e.length<=0)return[];var r=[];return e.map(function(e){e.player!==t.accountControl.accountInfo.account.name&&r.push(e)}),r}},{key:"addArray",value:function(e,t){if(!t)return!1;var r=e.findIndex(function(e){return e.id===t.id});return-1===r}},{key:"updateResult",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r,n,i,a,s,u,c,h,o,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(0===this.result.length||this.game.isActive()&&this.result[this.result.length-1].gameId<this.game.id-1)){e.next=29;break}return e.next=3,this.contract.resultTable.readAll();case 3:for(this.result=e.sent,t=[],r=[],n=!0,i=!1,a=void 0,e.prev=9,s=this.result[Symbol.iterator]();!(n=(u=s.next()).done);n=!0)c=u.value,h=c.gameId%this.resultPerCol,(r.length>0||0===h)&&r.push(c),r.length===this.resultPerCol&&(t.push(r),r=[]);e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](9),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,n||null==s.return||s.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:if(0===r.length)for(o=0;o<this.resultPerCol;o++)r.push(void 0);for(l=r.length;l<this.resultPerCol;l++)r.push(void 0);t.push(r),this.groupedResult=t;case 29:case"end":return e.stop()}},e,this,[[9,13,17,25],[18,,20,24]])}));return function(){return e.apply(this,arguments)}}()},{key:"resetBets",value:function(){this.bets=[],this.betsSorted=[],this.lastBets=[],this.playerNum={}}},{key:"updateBets",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r,n,i,a,s,u,c,h,l,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.game.isActive()){e.next=31;break}return e.next=3,this.contract.betTable.readAll();case 3:if(t=e.sent,!Object(o["c"])(t)){e.next=6;break}return e.abrupt("return");case 6:for(this.bets=t,this.betsSorted=this.bets.reverse(),r={},n=!0,i=!1,a=void 0,e.prev=12,s=this.bets[Symbol.iterator]();!(n=(u=s.next()).done);n=!0)c=u.value,h=r[c.betType],r[c.betType]=(Object(o["e"])(h)?h:0)+ +c.bet.toString().split(" ")[0];e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](12),i=!0,a=e.t0;case 20:e.prev=20,e.prev=21,n||null==s.return||s.return();case 23:if(e.prev=23,!i){e.next=26;break}throw a;case 26:return e.finish(23);case 27:return e.finish(20);case 28:l=this.checkUpdate(),l.length>0?(this.hasNewBet=!0,this.bet=l,this.otherBets=[],f=this.checkOtherData(l),f.length>0?(this.hasNewOtherBet=!0,this.otherBets=f):(this.hasNewOtherBet=!1,this.otherBets=[])):(this.hasNewBet=!1,this.hasNewOtherBet=!1,this.bet="",this.otherBets=""),this.playerNum=r;case 31:case"end":return e.stop()}},e,this,[[12,16,20,28],[21,,23,27]])}));return function(){return e.apply(this,arguments)}}()},{key:"status",value:function(){return this.game.status}},{key:"roundActive",value:function(){return this.game.status===f["b"].Active}},{key:"betText",value:function(){return"Play"}},{key:"canMakeBet",value:function(){return this.game.canStartBet()}},{key:"makeBet",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!==this.betType){e.next=2;break}throw new Error("bet type not selected");case 2:return r=new Map,r.set(this.betType,new d["a"](t,h["a"].EOS)),e.abrupt("return",this.makeBets(r));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"makeBets",value:function(e){return this.betControl.finishBet(0),this.contract.play(this.game.id,e,this.referer)}}]),t}(l["a"])},"6b4c":function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return c});var n,i=r("d4ec"),a=r("bee2"),s=(r("cadf"),r("551c"),r("097d"),r("f370")),u=r("47bb");(function(e){e[e["Unknown"]=0]="Unknown",e[e["StandBy"]=1]="StandBy",e[e["Active"]=2]="Active"})(n||(n={}));var c=function(){function e(t){Object(i["a"])(this,e),Object(s["e"])(t)?(this.id=t.id,this.endTime=t.end_time,this.status=1===t.status?n.StandBy:n.Active,this.symbol=t.symbol,this.largestWinner=t.largest_winner,this.largestWinAmount=u["a"].fromString(t.largest_win_amount),this.seed=t.seed):(this.id=0,this.endTime=0,this.status=n.Unknown,this.symbol="",this.largestWinner="",this.largestWinAmount=u["a"].DEFAULT,this.seed="")}return Object(a["a"])(e,[{key:"canStartBet",value:function(){var e=Date.now()/1e3;return this.status===n.StandBy&&e>=this.endTime||this.status===n.Active&&e<this.endTime}},{key:"isActive",value:function(){return this.status===n.Active}}]),e}()}}]);