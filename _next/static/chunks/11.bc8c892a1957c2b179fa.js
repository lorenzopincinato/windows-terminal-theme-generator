(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"+dQi":function(e,t,r){!function(e){"use strict";e.defineMode("javascript",(function(t,r){var n,o,i=t.indentUnit,a=r.statementIndent,s=r.jsonld,c=r.json||s,u=r.typescript,d=r.wordCharacters||/[\w$\xa1-\uffff]/,p=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),o=e("keyword d"),i=e("operator"),a={type:"atom",style:"atom"};return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:o,break:o,continue:o,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:a,false:a,null:a,undefined:a,NaN:a,Infinity:a,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),l=/[+\-*&%=<>!?|~^@]/,f=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function h(e,t,r){return n=e,o=r,t}function m(e,t){var r,n=e.next();if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,o=!1;if(s&&"@"==e.peek()&&e.match(f))return t.tokenize=m,h("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=r||o);)o=!o&&"\\"==n;return o||(t.tokenize=m),h("string","string")}),t.tokenize(e,t);if("."==n&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return h("number","number");if("."==n&&e.match(".."))return h("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return h(n);if("="==n&&e.eat(">"))return h("=>","operator");if("0"==n&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return h("number","number");if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),h("number","number");if("/"==n)return e.eat("*")?(t.tokenize=y,y(e,t)):e.eat("/")?(e.skipToEnd(),h("comment","comment")):Ge(e,t,1)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),h("regexp","string-2")):(e.eat("="),h("operator","operator",e.current()));if("`"==n)return t.tokenize=v,v(e,t);if("#"==n&&"!"==e.peek())return e.skipToEnd(),h("meta","meta");if("#"==n&&e.eatWhile(d))return h("variable","property");if("<"==n&&e.match("!--")||"-"==n&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),h("comment","comment");if(l.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),"?"==n&&e.eat(".")?h("."):h("operator","operator",e.current());if(d.test(n)){e.eatWhile(d);var o=e.current();if("."!=t.lastType){if(p.propertyIsEnumerable(o)){var i=p[o];return h(i.type,i.style,o)}if("async"==o&&e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return h("async","keyword",o)}return h("variable","variable",o)}}function y(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=m;break}n="*"==r}return h("comment","comment")}function v(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=m;break}n=!n&&"\\"==r}return h("quasi","string-2",e.current())}var g="([{}])";function k(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(u){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var o=0,i=!1,a=r-1;a>=0;--a){var s=e.string.charAt(a),c=g.indexOf(s);if(c>=0&&c<3){if(!o){++a;break}if(0==--o){"("==s&&(i=!0);break}}else if(c>=3&&c<6)++o;else if(d.test(s))i=!0;else if(/["'\/`]/.test(s))for(;;--a){if(0==a)return;if(e.string.charAt(a-1)==s&&"\\"!=e.string.charAt(a-2)){a--;break}}else if(i&&!o){++a;break}}i&&!o&&(t.fatArrowAt=a)}}var b={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function w(e,t,r,n,o,i){this.indented=e,this.column=t,this.type=r,this.prev=o,this.info=i,null!=n&&(this.align=n)}function x(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}var C={state:null,column:null,marked:null,cc:null};function D(){for(var e=arguments.length-1;e>=0;e--)C.cc.push(arguments[e])}function j(){return D.apply(null,arguments),!0}function M(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}function O(e){var t=C.state;if(C.marked="def",t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var n=function e(t,r){if(r){if(r.block){var n=e(t,r.prev);return n?n==r.prev?r:new V(n,r.vars,!0):null}return M(t,r.vars)?r:new V(r.prev,new S(t,r.vars),!1)}return null}(e,t.context);if(null!=n)return void(t.context=n)}else if(!M(e,t.localVars))return void(t.localVars=new S(e,t.localVars));r.globalVars&&!M(e,t.globalVars)&&(t.globalVars=new S(e,t.globalVars))}function E(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function V(e,t,r){this.prev=e,this.vars=t,this.block=r}function S(e,t){this.name=e,this.next=t}var A=new S("this",new S("arguments",null));function U(){C.state.context=new V(C.state.context,C.state.localVars,!1),C.state.localVars=A}function _(){C.state.context=new V(C.state.context,C.state.localVars,!0),C.state.localVars=null}function I(){C.state.localVars=C.state.context.vars,C.state.context=C.state.context.prev}function N(e,t){var r=function(){var r=C.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var o=r.lexical;o&&")"==o.type&&o.align;o=o.prev)n=o.indented;r.lexical=new w(n,C.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function T(){var e=C.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function P(e){return function t(r){return r==e?j():";"==e||"}"==r||")"==r||"]"==r?D():j(t)}}function z(e,t){return"var"==e?j(N("vardef",t),ke,P(";"),T):"keyword a"==e?j(N("form"),q,z,T):"keyword b"==e?j(N("form"),z,T):"keyword d"==e?C.stream.match(/^\s*$/,!1)?j():j(N("stat"),$,P(";"),T):"debugger"==e?j(P(";")):"{"==e?j(N("}"),_,ae,T,I):";"==e?j():"if"==e?("else"==C.state.lexical.info&&C.state.cc[C.state.cc.length-1]==T&&C.state.cc.pop()(),j(N("form"),q,z,T,je)):"function"==e?j(Ve):"for"==e?j(N("form"),Me,z,T):"class"==e||u&&"interface"==t?(C.marked="keyword",j(N("form","class"==e?e:t),Ie,T)):"variable"==e?u&&"declare"==t?(C.marked="keyword",j(z)):u&&("module"==t||"enum"==t||"type"==t)&&C.stream.match(/^\s*\w/,!1)?(C.marked="keyword","enum"==t?j(We):"type"==t?j(Ae,P("operator"),pe,P(";")):j(N("form"),be,P("{"),N("}"),ae,T,T)):u&&"namespace"==t?(C.marked="keyword",j(N("form"),H,z,T)):u&&"abstract"==t?(C.marked="keyword",j(z)):j(N("stat"),Z):"switch"==e?j(N("form"),q,P("{"),N("}","switch"),_,ae,T,T,I):"case"==e?j(H,P(":")):"default"==e?j(P(":")):"catch"==e?j(N("form"),U,R,z,T,I):"export"==e?j(N("stat"),ze,T):"import"==e?j(N("stat"),He,T):"async"==e?j(z):"@"==t?j(H,z):D(N("stat"),H,P(";"),T)}function R(e){if("("==e)return j(Ue,P(")"))}function H(e,t){return B(e,t,!1)}function L(e,t){return B(e,t,!0)}function q(e){return"("!=e?D():j(N(")"),$,P(")"),T)}function B(e,t,r){if(C.state.fatArrowAt==C.stream.start){var n=r?Q:J;if("("==e)return j(U,N(")"),oe(Ue,")"),T,P("=>"),n,I);if("variable"==e)return D(U,be,P("=>"),n,I)}var o=r?W:K;return b.hasOwnProperty(e)?j(o):"function"==e?j(Ve,o):"class"==e||u&&"interface"==t?(C.marked="keyword",j(N("form"),_e,T)):"keyword c"==e||"async"==e?j(r?L:H):"("==e?j(N(")"),$,P(")"),T,o):"operator"==e||"spread"==e?j(r?L:H):"["==e?j(N("]"),Ke,T,o):"{"==e?ie(te,"}",null,o):"quasi"==e?D(F,o):"new"==e?j(function(e){return function(t){return"."==t?j(e?Y:X):"variable"==t&&u?j(ye,e?W:K):D(e?L:H)}}(r)):"import"==e?j(H):j()}function $(e){return e.match(/[;\}\)\],]/)?D():D(H)}function K(e,t){return","==e?j($):W(e,t,!1)}function W(e,t,r){var n=0==r?K:W,o=0==r?H:L;return"=>"==e?j(U,r?Q:J,I):"operator"==e?/\+\+|--/.test(t)||u&&"!"==t?j(n):u&&"<"==t&&C.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?j(N(">"),oe(pe,">"),T,n):"?"==t?j(H,P(":"),o):j(o):"quasi"==e?D(F,n):";"!=e?"("==e?ie(L,")","call",n):"."==e?j(ee,n):"["==e?j(N("]"),$,P("]"),T,n):u&&"as"==t?(C.marked="keyword",j(pe,n)):"regexp"==e?(C.state.lastType=C.marked="operator",C.stream.backUp(C.stream.pos-C.stream.start-1),j(o)):void 0:void 0}function F(e,t){return"quasi"!=e?D():"${"!=t.slice(t.length-2)?j(F):j(H,G)}function G(e){if("}"==e)return C.marked="string-2",C.state.tokenize=v,j(F)}function J(e){return k(C.stream,C.state),D("{"==e?z:H)}function Q(e){return k(C.stream,C.state),D("{"==e?z:L)}function X(e,t){if("target"==t)return C.marked="keyword",j(K)}function Y(e,t){if("target"==t)return C.marked="keyword",j(W)}function Z(e){return":"==e?j(T,z):D(K,P(";"),T)}function ee(e){if("variable"==e)return C.marked="property",j()}function te(e,t){return"async"==e?(C.marked="property",j(te)):"variable"==e||"keyword"==C.style?(C.marked="property","get"==t||"set"==t?j(re):(u&&C.state.fatArrowAt==C.stream.start&&(r=C.stream.match(/^\s*:\s*/,!1))&&(C.state.fatArrowAt=C.stream.pos+r[0].length),j(ne))):"number"==e||"string"==e?(C.marked=s?"property":C.style+" property",j(ne)):"jsonld-keyword"==e?j(ne):u&&E(t)?(C.marked="keyword",j(te)):"["==e?j(H,se,P("]"),ne):"spread"==e?j(L,ne):"*"==t?(C.marked="keyword",j(te)):":"==e?D(ne):void 0;var r}function re(e){return"variable"!=e?D(ne):(C.marked="property",j(Ve))}function ne(e){return":"==e?j(L):"("==e?D(Ve):void 0}function oe(e,t,r){function n(o,i){if(r?r.indexOf(o)>-1:","==o){var a=C.state.lexical;return"call"==a.info&&(a.pos=(a.pos||0)+1),j((function(r,n){return r==t||n==t?D():D(e)}),n)}return o==t||i==t?j():r&&r.indexOf(";")>-1?D(e):j(P(t))}return function(r,o){return r==t||o==t?j():D(e,n)}}function ie(e,t,r){for(var n=3;n<arguments.length;n++)C.cc.push(arguments[n]);return j(N(t,r),oe(e,t),T)}function ae(e){return"}"==e?j():D(z,ae)}function se(e,t){if(u){if(":"==e)return j(pe);if("?"==t)return j(se)}}function ce(e,t){if(u&&(":"==e||"in"==t))return j(pe)}function ue(e){if(u&&":"==e)return C.stream.match(/^\s*\w+\s+is\b/,!1)?j(H,de,pe):j(pe)}function de(e,t){if("is"==t)return C.marked="keyword",j()}function pe(e,t){return"keyof"==t||"typeof"==t||"infer"==t?(C.marked="keyword",j("typeof"==t?L:pe)):"variable"==e||"void"==t?(C.marked="type",j(me)):"|"==t||"&"==t?j(pe):"string"==e||"number"==e||"atom"==e?j(me):"["==e?j(N("]"),oe(pe,"]",","),T,me):"{"==e?j(N("}"),oe(fe,"}",",;"),T,me):"("==e?j(oe(he,")"),le,me):"<"==e?j(oe(pe,">"),pe):void 0}function le(e){if("=>"==e)return j(pe)}function fe(e,t){return"variable"==e||"keyword"==C.style?(C.marked="property",j(fe)):"?"==t||"number"==e||"string"==e?j(fe):":"==e?j(pe):"["==e?j(P("variable"),ce,P("]"),fe):"("==e?D(Se,fe):void 0}function he(e,t){return"variable"==e&&C.stream.match(/^\s*[?:]/,!1)||"?"==t?j(he):":"==e?j(pe):"spread"==e?j(he):D(pe)}function me(e,t){return"<"==t?j(N(">"),oe(pe,">"),T,me):"|"==t||"."==e||"&"==t?j(pe):"["==e?j(pe,P("]"),me):"extends"==t||"implements"==t?(C.marked="keyword",j(pe)):"?"==t?j(pe,P(":"),pe):void 0}function ye(e,t){if("<"==t)return j(N(">"),oe(pe,">"),T,me)}function ve(){return D(pe,ge)}function ge(e,t){if("="==t)return j(pe)}function ke(e,t){return"enum"==t?(C.marked="keyword",j(We)):D(be,se,Ce,De)}function be(e,t){return u&&E(t)?(C.marked="keyword",j(be)):"variable"==e?(O(t),j()):"spread"==e?j(be):"["==e?ie(xe,"]"):"{"==e?ie(we,"}"):void 0}function we(e,t){return"variable"!=e||C.stream.match(/^\s*:/,!1)?("variable"==e&&(C.marked="property"),"spread"==e?j(be):"}"==e?D():"["==e?j(H,P("]"),P(":"),we):j(P(":"),be,Ce)):(O(t),j(Ce))}function xe(){return D(be,Ce)}function Ce(e,t){if("="==t)return j(L)}function De(e){if(","==e)return j(ke)}function je(e,t){if("keyword b"==e&&"else"==t)return j(N("form","else"),z,T)}function Me(e,t){return"await"==t?j(Me):"("==e?j(N(")"),Oe,T):void 0}function Oe(e){return"var"==e?j(ke,Ee):"variable"==e?j(Ee):D(Ee)}function Ee(e,t){return")"==e?j():";"==e?j(Ee):"in"==t||"of"==t?(C.marked="keyword",j(H,Ee)):D(H,Ee)}function Ve(e,t){return"*"==t?(C.marked="keyword",j(Ve)):"variable"==e?(O(t),j(Ve)):"("==e?j(U,N(")"),oe(Ue,")"),T,ue,z,I):u&&"<"==t?j(N(">"),oe(ve,">"),T,Ve):void 0}function Se(e,t){return"*"==t?(C.marked="keyword",j(Se)):"variable"==e?(O(t),j(Se)):"("==e?j(U,N(")"),oe(Ue,")"),T,ue,I):u&&"<"==t?j(N(">"),oe(ve,">"),T,Se):void 0}function Ae(e,t){return"keyword"==e||"variable"==e?(C.marked="type",j(Ae)):"<"==t?j(N(">"),oe(ve,">"),T):void 0}function Ue(e,t){return"@"==t&&j(H,Ue),"spread"==e?j(Ue):u&&E(t)?(C.marked="keyword",j(Ue)):u&&"this"==e?j(se,Ce):D(be,se,Ce)}function _e(e,t){return"variable"==e?Ie(e,t):Ne(e,t)}function Ie(e,t){if("variable"==e)return O(t),j(Ne)}function Ne(e,t){return"<"==t?j(N(">"),oe(ve,">"),T,Ne):"extends"==t||"implements"==t||u&&","==e?("implements"==t&&(C.marked="keyword"),j(u?pe:H,Ne)):"{"==e?j(N("}"),Te,T):void 0}function Te(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||u&&E(t))&&C.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(C.marked="keyword",j(Te)):"variable"==e||"keyword"==C.style?(C.marked="property",j(Pe,Te)):"number"==e||"string"==e?j(Pe,Te):"["==e?j(H,se,P("]"),Pe,Te):"*"==t?(C.marked="keyword",j(Te)):u&&"("==e?D(Se,Te):";"==e||","==e?j(Te):"}"==e?j():"@"==t?j(H,Te):void 0}function Pe(e,t){if("?"==t)return j(Pe);if(":"==e)return j(pe,Ce);if("="==t)return j(L);var r=C.state.lexical.prev;return D(r&&"interface"==r.info?Se:Ve)}function ze(e,t){return"*"==t?(C.marked="keyword",j($e,P(";"))):"default"==t?(C.marked="keyword",j(H,P(";"))):"{"==e?j(oe(Re,"}"),$e,P(";")):D(z)}function Re(e,t){return"as"==t?(C.marked="keyword",j(P("variable"))):"variable"==e?D(L,Re):void 0}function He(e){return"string"==e?j():"("==e?D(H):D(Le,qe,$e)}function Le(e,t){return"{"==e?ie(Le,"}"):("variable"==e&&O(t),"*"==t&&(C.marked="keyword"),j(Be))}function qe(e){if(","==e)return j(Le,qe)}function Be(e,t){if("as"==t)return C.marked="keyword",j(Le)}function $e(e,t){if("from"==t)return C.marked="keyword",j(H)}function Ke(e){return"]"==e?j():D(oe(L,"]"))}function We(){return D(N("form"),be,P("{"),N("}"),oe(Fe,"}"),T,T)}function Fe(){return D(be,Ce)}function Ge(e,t,r){return t.tokenize==m&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}return I.lex=!0,T.lex=!0,{startState:function(e){var t={tokenize:m,lastType:"sof",cc:[],lexical:new w((e||0)-i,0,"block",!1),localVars:r.localVars,context:r.localVars&&new V(null,null,!1),indented:e||0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),k(e,t)),t.tokenize!=y&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==n?r:(t.lastType="operator"!=n||"++"!=o&&"--"!=o?n:"incdec",function(e,t,r,n,o){var i=e.cc;for(C.state=e,C.stream=o,C.marked=null,C.cc=i,C.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():c?H:z)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return C.marked?C.marked:"variable"==r&&x(e,n)?"variable-2":t}}(t,r,n,o,e))},indent:function(t,n){if(t.tokenize==y)return e.Pass;if(t.tokenize!=m)return 0;var o,s=n&&n.charAt(0),c=t.lexical;if(!/^\s*else\b/.test(n))for(var u=t.cc.length-1;u>=0;--u){var d=t.cc[u];if(d==T)c=c.prev;else if(d!=je)break}for(;("stat"==c.type||"form"==c.type)&&("}"==s||(o=t.cc[t.cc.length-1])&&(o==K||o==W)&&!/^[,\.=+\-*:?[\(]/.test(n));)c=c.prev;a&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev);var p=c.type,f=s==p;return"vardef"==p?c.indented+("operator"==t.lastType||","==t.lastType?c.info.length+1:0):"form"==p&&"{"==s?c.indented:"form"==p?c.indented+i:"stat"==p?c.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||l.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?a||i:0):"switch"!=c.info||f||0==r.doubleIndentSwitch?c.align?c.column+(f?0:1):c.indented+(f?0:i):c.indented+(/^(?:case|default)\b/.test(n)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:c?null:"/*",blockCommentEnd:c?null:"*/",blockCommentContinue:c?null:" * ",lineComment:c?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:c?"json":"javascript",jsonldMode:s,jsonMode:c,expressionAllowed:Ge,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=H&&t!=L||e.cc.pop()}}})),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}(r("VrN/"))},a2PE:function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.UnControlled=t.Controlled=void 0;var a,s=r("q1tI"),c="undefined"===typeof navigator||!0===e.PREVENT_CODEMIRROR_RENDER;c||(a=r("VrN/"));var u=function(){function e(){}return e.equals=function(e,t){var r=this,n=Object.keys,i=o(e),a=o(t);return e&&t&&"object"===i&&i===a?n(e).length===n(t).length&&n(e).every((function(n){return r.equals(e[n],t[n])})):e===t},e}(),d=function(){function e(e,t){this.editor=e,this.props=t}return e.prototype.delegateCursor=function(e,t,r){var n=this.editor.getDoc();r&&this.editor.focus(),t?n.setCursor(e):n.setCursor(e,null,{scroll:!1})},e.prototype.delegateScroll=function(e){this.editor.scrollTo(e.x,e.y)},e.prototype.delegateSelection=function(e,t){this.editor.getDoc().setSelections(e),t&&this.editor.focus()},e.prototype.apply=function(e){e&&e.selection&&e.selection.ranges&&this.delegateSelection(e.selection.ranges,e.selection.focus||!1),e&&e.cursor&&this.delegateCursor(e.cursor,e.autoScroll||!1,this.editor.getOption("autofocus")||!1),e&&e.scroll&&this.delegateScroll(e.scroll)},e.prototype.applyNext=function(e,t,r){e&&e.selection&&e.selection.ranges&&t&&t.selection&&t.selection.ranges&&!u.equals(e.selection.ranges,t.selection.ranges)&&this.delegateSelection(t.selection.ranges,t.selection.focus||!1),e&&e.cursor&&t&&t.cursor&&!u.equals(e.cursor,t.cursor)&&this.delegateCursor(r.cursor||t.cursor,t.autoScroll||!1,t.autoCursor||!1),e&&e.scroll&&t&&t.scroll&&!u.equals(e.scroll,t.scroll)&&this.delegateScroll(t.scroll)},e.prototype.applyUserDefined=function(e,t){t&&t.cursor&&this.delegateCursor(t.cursor,e.autoScroll||!1,this.editor.getOption("autofocus")||!1)},e.prototype.wire=function(e){var t=this;Object.keys(e||{}).filter((function(e){return/^on/.test(e)})).forEach((function(e){switch(e){case"onBlur":t.editor.on("blur",(function(e,r){t.props.onBlur(t.editor,r)}));break;case"onContextMenu":t.editor.on("contextmenu",(function(e,r){t.props.onContextMenu(t.editor,r)}));break;case"onCopy":t.editor.on("copy",(function(e,r){t.props.onCopy(t.editor,r)}));break;case"onCursor":t.editor.on("cursorActivity",(function(e){t.props.onCursor(t.editor,t.editor.getDoc().getCursor())}));break;case"onCursorActivity":t.editor.on("cursorActivity",(function(e){t.props.onCursorActivity(t.editor)}));break;case"onCut":t.editor.on("cut",(function(e,r){t.props.onCut(t.editor,r)}));break;case"onDblClick":t.editor.on("dblclick",(function(e,r){t.props.onDblClick(t.editor,r)}));break;case"onDragEnter":t.editor.on("dragenter",(function(e,r){t.props.onDragEnter(t.editor,r)}));break;case"onDragLeave":t.editor.on("dragleave",(function(e,r){t.props.onDragLeave(t.editor,r)}));break;case"onDragOver":t.editor.on("dragover",(function(e,r){t.props.onDragOver(t.editor,r)}));break;case"onDragStart":t.editor.on("dragstart",(function(e,r){t.props.onDragStart(t.editor,r)}));break;case"onDrop":t.editor.on("drop",(function(e,r){t.props.onDrop(t.editor,r)}));break;case"onFocus":t.editor.on("focus",(function(e,r){t.props.onFocus(t.editor,r)}));break;case"onGutterClick":t.editor.on("gutterClick",(function(e,r,n,o){t.props.onGutterClick(t.editor,r,n,o)}));break;case"onInputRead":t.editor.on("inputRead",(function(e,r){t.props.onInputRead(t.editor,r)}));break;case"onKeyDown":t.editor.on("keydown",(function(e,r){t.props.onKeyDown(t.editor,r)}));break;case"onKeyHandled":t.editor.on("keyHandled",(function(e,r,n){t.props.onKeyHandled(t.editor,r,n)}));break;case"onKeyPress":t.editor.on("keypress",(function(e,r){t.props.onKeyPress(t.editor,r)}));break;case"onKeyUp":t.editor.on("keyup",(function(e,r){t.props.onKeyUp(t.editor,r)}));break;case"onMouseDown":t.editor.on("mousedown",(function(e,r){t.props.onMouseDown(t.editor,r)}));break;case"onPaste":t.editor.on("paste",(function(e,r){t.props.onPaste(t.editor,r)}));break;case"onRenderLine":t.editor.on("renderLine",(function(e,r,n){t.props.onRenderLine(t.editor,r,n)}));break;case"onScroll":t.editor.on("scroll",(function(e){t.props.onScroll(t.editor,t.editor.getScrollInfo())}));break;case"onSelection":t.editor.on("beforeSelectionChange",(function(e,r){t.props.onSelection(t.editor,r)}));break;case"onTouchStart":t.editor.on("touchstart",(function(e,r){t.props.onTouchStart(t.editor,r)}));break;case"onUpdate":t.editor.on("update",(function(e){t.props.onUpdate(t.editor)}));break;case"onViewportChange":t.editor.on("viewportChange",(function(e,r,n){t.props.onViewportChange(t.editor,r,n)}))}}))},e}(),p=function(e){function t(t){var r=e.call(this,t)||this;return c?r:(r.applied=!1,r.appliedNext=!1,r.appliedUserDefined=!1,r.deferred=null,r.emulating=!1,r.hydrated=!1,r.initCb=function(){r.props.editorDidConfigure&&r.props.editorDidConfigure(r.editor)},r.mounted=!1,r)}return i(t,e),t.prototype.hydrate=function(e){var t=this,r=e&&e.options?e.options:{},o=n({},a.defaults,this.editor.options,r);Object.keys(o).some((function(e){return t.editor.getOption(e)!==o[e]}))&&Object.keys(o).forEach((function(e){r.hasOwnProperty(e)&&t.editor.getOption(e)!==o[e]&&(t.editor.setOption(e,o[e]),t.mirror.setOption(e,o[e]))})),this.hydrated||(this.deferred?this.resolveChange(e.value):this.initChange(e.value||"")),this.hydrated=!0},t.prototype.initChange=function(e){this.emulating=!0;var t=this.editor.getDoc(),r=t.lastLine(),n=t.getLine(t.lastLine()).length;t.replaceRange(e||"",{line:0,ch:0},{line:r,ch:n}),this.mirror.setValue(e),t.clearHistory(),this.mirror.clearHistory(),this.emulating=!1},t.prototype.resolveChange=function(e){this.emulating=!0;var t=this.editor.getDoc();if("undo"===this.deferred.origin?t.undo():"redo"===this.deferred.origin?t.redo():t.replaceRange(this.deferred.text,this.deferred.from,this.deferred.to,this.deferred.origin),e&&e!==t.getValue()){var r=t.getCursor();t.setValue(e),t.setCursor(r)}this.emulating=!1,this.deferred=null},t.prototype.mirrorChange=function(e){var t=this.editor.getDoc();return"undo"===e.origin?(t.setHistory(this.mirror.getHistory()),this.mirror.undo()):"redo"===e.origin?(t.setHistory(this.mirror.getHistory()),this.mirror.redo()):this.mirror.replaceRange(e.text,e.from,e.to,e.origin),this.mirror.getValue()},t.prototype.componentDidMount=function(){var e=this;c||(this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&a.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=a(this.ref,this.props.options),this.shared=new d(this.editor,this.props),this.mirror=a((function(){}),this.props.options),this.editor.on("electricInput",(function(){e.mirror.setHistory(e.editor.getDoc().getHistory())})),this.editor.on("cursorActivity",(function(){e.mirror.setCursor(e.editor.getDoc().getCursor())})),this.editor.on("beforeChange",(function(t,r){if(!e.emulating){r.cancel(),e.deferred=r;var n=e.mirrorChange(e.deferred);e.props.onBeforeChange&&e.props.onBeforeChange(e.editor,e.deferred,n)}})),this.editor.on("change",(function(t,r){e.mounted&&e.props.onChange&&e.props.onChange(e.editor,r,e.editor.getValue())})),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getOption("autofocus")&&this.editor.focus(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},t.prototype.componentDidUpdate=function(e){if(!c){var t={cursor:null};this.props.value!==e.value&&(this.hydrated=!1),this.props.autoCursor||void 0===this.props.autoCursor||(t.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.appliedNext||(this.shared.applyNext(e,this.props,t),this.appliedNext=!0),this.shared.applyUserDefined(e,t),this.appliedUserDefined=!0}},t.prototype.componentWillUnmount=function(){c||this.props.editorWillUnmount&&this.props.editorWillUnmount(a)},t.prototype.shouldComponentUpdate=function(e,t){return!c},t.prototype.render=function(){var e=this;if(c)return null;var t=this.props.className?"react-codemirror2 "+this.props.className:"react-codemirror2";return s.createElement("div",{className:t,ref:function(t){return e.ref=t}})},t}(s.Component);t.Controlled=p;var l=function(e){function t(t){var r=e.call(this,t)||this;return c?r:(r.applied=!1,r.appliedUserDefined=!1,r.continueChange=!1,r.detached=!1,r.hydrated=!1,r.initCb=function(){r.props.editorDidConfigure&&r.props.editorDidConfigure(r.editor)},r.mounted=!1,r.onBeforeChangeCb=function(){r.continueChange=!0},r)}return i(t,e),t.prototype.hydrate=function(e){var t=this,r=e&&e.options?e.options:{},o=n({},a.defaults,this.editor.options,r);if(Object.keys(o).some((function(e){return t.editor.getOption(e)!==o[e]}))&&Object.keys(o).forEach((function(e){r.hasOwnProperty(e)&&t.editor.getOption(e)!==o[e]&&t.editor.setOption(e,o[e])})),!this.hydrated){var i=this.editor.getDoc(),s=i.lastLine(),c=i.getLine(i.lastLine()).length;i.replaceRange(e.value||"",{line:0,ch:0},{line:s,ch:c})}this.hydrated=!0},t.prototype.componentDidMount=function(){var e=this;c||(this.detached=!0===this.props.detach,this.props.defineMode&&this.props.defineMode.name&&this.props.defineMode.fn&&a.defineMode(this.props.defineMode.name,this.props.defineMode.fn),this.editor=a(this.ref,this.props.options),this.shared=new d(this.editor,this.props),this.editor.on("beforeChange",(function(t,r){e.props.onBeforeChange&&e.props.onBeforeChange(e.editor,r,e.editor.getValue(),e.onBeforeChangeCb)})),this.editor.on("change",(function(t,r){e.mounted&&e.props.onChange&&(e.props.onBeforeChange?e.continueChange&&e.props.onChange(e.editor,r,e.editor.getValue()):e.props.onChange(e.editor,r,e.editor.getValue()))})),this.hydrate(this.props),this.shared.apply(this.props),this.applied=!0,this.mounted=!0,this.shared.wire(this.props),this.editor.getDoc().clearHistory(),this.props.editorDidMount&&this.props.editorDidMount(this.editor,this.editor.getValue(),this.initCb))},t.prototype.componentDidUpdate=function(e){if(this.detached&&!1===this.props.detach&&(this.detached=!1,e.editorDidAttach&&e.editorDidAttach(this.editor)),this.detached||!0!==this.props.detach||(this.detached=!0,e.editorDidDetach&&e.editorDidDetach(this.editor)),!c&&!this.detached){var t={cursor:null};this.props.value!==e.value&&(this.hydrated=!1,this.applied=!1,this.appliedUserDefined=!1),e.autoCursor||void 0===e.autoCursor||(t.cursor=this.editor.getDoc().getCursor()),this.hydrate(this.props),this.applied||(this.shared.apply(e),this.applied=!0),this.appliedUserDefined||(this.shared.applyUserDefined(e,t),this.appliedUserDefined=!0)}},t.prototype.componentWillUnmount=function(){c||this.props.editorWillUnmount&&this.props.editorWillUnmount(a)},t.prototype.shouldComponentUpdate=function(e,t){var r=!0;return c&&(r=!1),this.detached&&e.detach&&(r=!1),r},t.prototype.render=function(){var e=this;if(c)return null;var t=this.props.className?"react-codemirror2 "+this.props.className:"react-codemirror2";return s.createElement("div",{className:t,ref:function(t){return e.ref=t}})},t}(s.Component);t.UnControlled=l}).call(this,r("yLpj"))},joC6:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("a2PE"),a=(r("+dQi"),r("p77/"),r("0ujT"),o.a.createElement),s=function(e){return a(i.Controlled,e)};t.default=s},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r}}]);