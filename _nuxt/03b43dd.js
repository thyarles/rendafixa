(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{381:function(e,n,t){"use strict";t.r(n);var r=t(401),l=t(374),o=t(432),m=t(433),c={data:function(){return{investment:this.$store.state.investment,rules:{required:function(e){return!!e||"Obrigatório"},positive:function(e){return parseInt(e)>0||"Deve ser um número positivo"}}}}},v=t(64),component=Object(v.a)(c,(function(){var e=this,n=e._self._c;return n(r.a,{attrs:{elevation:"2"}},[n(l.b,{staticClass:"text-h6"},[e._v("Detalhes do Investimento")]),e._v(" "),n(l.a,[n(o.a,{on:{submit:function(n){return n.preventDefault(),e.submit.apply(null,arguments)}}},[n(m.a,{attrs:{type:"number",label:"Valor da Aplicação","prepend-icon":"mdi-cash-multiple",prefix:"R$",suffix:",00",min:"1",rules:[e.rules.required,e.rules.positive]},model:{value:e.investment.amount,callback:function(n){e.$set(e.investment,"amount",n)},expression:"investment.amount"}}),e._v(" "),n(m.a,{attrs:{type:"number",label:"Vencimento","prepend-icon":"mdi-calendar",suffix:"meses",min:"1",rules:[e.rules.required,e.rules.positive]},model:{value:e.investment.duration,callback:function(n){e.$set(e.investment,"duration",n)},expression:"investment.duration"}}),e._v(" "),n(m.a,{attrs:{type:"number",label:"Taxa DI","prepend-icon":"mdi-finance",suffix:"% ao ano",min:"0",rules:[e.rules.required,e.rules.positive]},model:{value:e.investment.di,callback:function(n){e.$set(e.investment,"di",n)},expression:"investment.di"}}),e._v(" "),n(m.a,{attrs:{type:"number",label:"Taxa SELIC","prepend-icon":"mdi-finance",suffix:"% ao ano",min:"0",rules:[e.rules.required,e.rules.positive]},model:{value:e.investment.selic,callback:function(n){e.$set(e.investment,"selic",n)},expression:"investment.selic"}}),e._v(" "),n(m.a,{attrs:{type:"number",label:"CDB/RDB/LC","prepend-icon":"mdi-finance",suffix:"% DI",min:"0",rules:[e.rules.required,e.rules.positive]},model:{value:e.investment.cdb,callback:function(n){e.$set(e.investment,"cdb",n)},expression:"investment.cdb"}}),e._v(" "),n(m.a,{attrs:{type:"number",label:"LCI/LCA","prepend-icon":"mdi-finance",suffix:"% DI",min:"0",rules:[e.rules.required,e.rules.positive]},model:{value:e.investment.lcx,callback:function(n){e.$set(e.investment,"lcx",n)},expression:"investment.lcx"}})],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);