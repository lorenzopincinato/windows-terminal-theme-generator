_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("QeBL")}])},"2qu3":function(n,e,t){"use strict";var r=t("lSNA"),i=t("lwsE"),I=t("W8MJ");function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){var t;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var I,a=!0,o=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return a=n.done,n},e:function(n){o=!0,I=n},f:function(){try{a||null==t.return||t.return()}finally{if(o)throw I}}}}function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}e.__esModule=!0,e.default=void 0;var g,u=(g=t("q1tI"))&&g.__esModule?g:{default:g},C=t("8L3h"),d=t("jwwS");var A=[],m=[],b=!1;function p(n){var e=n(),t={loading:!0,loaded:null,error:null};return t.promise=e.then((function(n){return t.loading=!1,t.loaded=n,n})).catch((function(n){throw t.loading=!1,t.error=n,n})),t}function s(n){var e={loading:!1,loaded:{},error:null},t=[];try{Object.keys(n).forEach((function(r){var i=p(n[r]);i.loading?e.loading=!0:(e.loaded[r]=i.loaded,e.error=i.error),t.push(i.promise),i.promise.then((function(n){e.loaded[r]=n})).catch((function(n){e.error=n}))}))}catch(r){e.error=r}return e.promise=Promise.all(t).then((function(n){return e.loading=!1,n})).catch((function(n){throw e.loading=!1,n})),e}function Z(n,e){return u.default.createElement(function(n){return n&&n.__esModule?n.default:n}(n),e)}function y(n,e){var t=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:Z,webpack:null,modules:null},e),r=null;function i(){if(!r){var e=new v(n,t);r={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return r.promise()}if(!b&&"function"===typeof t.webpack){var I=t.webpack();m.push((function(n){var e,t=c(I);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(-1!==n.indexOf(r))return i()}}catch(a){t.e(a)}finally{t.f()}}))}var a=function(n,e){i();var I=u.default.useContext(d.LoadableContext),a=(0,C.useSubscription)(r);return u.default.useImperativeHandle(e,(function(){return{retry:r.retry}}),[]),I&&Array.isArray(t.modules)&&t.modules.forEach((function(n){I(n)})),u.default.useMemo((function(){return a.loading||a.error?u.default.createElement(t.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?t.render(a.loaded,n):null}),[n,a])};return a.preload=function(){return i()},a.displayName="LoadableComponent",u.default.forwardRef(a)}var v=function(){function n(e,t){i(this,n),this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return I(n,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var n=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,t=this._opts;e.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){n._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){n._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){n._update({}),n._clearTimeouts()})).catch((function(e){n._update({}),n._clearTimeouts()})),this._update({})}},{key:"_update",value:function(n){this._state=o(o({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},n),this._callbacks.forEach((function(n){return n()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(n){var e=this;return this._callbacks.add(n),function(){e._callbacks.delete(n)}}}]),n}();function f(n){return y(p,n)}function h(n,e){for(var t=[];n.length;){var r=n.pop();t.push(r(e))}return Promise.all(t).then((function(){if(n.length)return h(n,e)}))}f.Map=function(n){if("function"!==typeof n.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return y(s,n)},f.preloadAll=function(){return new Promise((function(n,e){h(A).then(n,e)}))},f.preloadReady=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var t=function(){return b=!0,e()};h(m,n).then(t,t)}))},window.__NEXT_PRELOADREADY=f.preloadReady;var G=f;e.default=G},QeBL:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),i=t.n(r),I=t("h4VS"),a=t("vOnD");function o(){var n=Object(I.a)(["\n  display: flex;\n\n  height: 100vh;\n\n  justify-content: center;\n  align-items: center;\n"]);return o=function(){return n},n}var c=a.c.div(o());function l(){var n=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n  width: 100%;\n\n  padding: 0.75rem;\n  padding-top: 0.55rem;\n\n  background-color: ",";\n  color: ",";\n\n  font-family: 'Cascadia Code';\n  font-size: 14px;\n"]);return l=function(){return n},n}function g(){var n=Object(I.a)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n\n  width: 2.65rem;\n  height: 100%;\n\n  transition: 0.2s ease-out;\n\n  background: ",";\n\n  &:hover {\n    background: ",";\n    transition: 0.1s ease-in;\n  }\n"]);return g=function(){return n},n}function u(){var n=Object(I.a)(["\n  display: flex;\n\n  align-self: flex-end;\n\n  width: auto;\n  height: 100%;\n"]);return u=function(){return n},n}function C(){var n=Object(I.a)(["\n  display: flex;\n\n  flex-direction: column;\n\n  height: 2rem;\n  width: 100%;\n\n  background-color: #333333ff;\n"]);return C=function(){return n},n}function d(){var n=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n\n  height: 36rem;\n  width: 64rem;\n\n  border-style: solid;\n  border-width: 1px;\n\n  border-color: #333333ff;\n\n  box-shadow: 0px 0px 14px -3px rgba(0, 0, 0, 0.49);\n"]);return d=function(){return n},n}var A=a.c.div(d()),m=a.c.div(C()),b=a.c.div(u()),p=Object(a.c)("div")(g(),(function(n){return n.isClose?"rgba(255, 0, 0, 0)":"rgba(255, 255, 255, 0)"}),(function(n){return n.isClose?"rgba(215, 16, 32, 1)":"rgba(255, 255, 255, 0.3)"})),s=a.c.div(l(),(function(n){return n.theme.terminal.background}),(function(n){return n.theme.terminal.foreground}));function Z(){var n=Object(I.a)(["\n  color: ",";\n"]);return Z=function(){return n},n}function y(){var n=Object(I.a)(["\n  color: ",";\n"]);return y=function(){return n},n}function v(){var n=Object(I.a)(["\n  color: ",";\n"]);return v=function(){return n},n}function f(){var n=Object(I.a)(["\n  color: ",";\n"]);return f=function(){return n},n}function h(){var n=Object(I.a)(["\n  animation: 1s "," step-end infinite;\n"]);return h=function(){return n},n}function G(){var n=Object(I.a)(["\n  from, to {\n    color: transparent;\n  }\n  50% {\n    color: ",";\n  }\n}"]);return G=function(){return n},n}function j(){var n=Object(I.a)(["\n  display: flex;\n  flex-direction: row;\n\n  margin-top: 0.2rem;\n\n  width: 100%;\n"]);return j=function(){return n},n}var w=a.c.div(j()),N=a.c.span(h(),(function(n){return function(n){return Object(a.d)(G(),n.theme.terminal.foreground)}(n)})),W=a.c.span(f(),(function(n){return n.theme.terminal.green})),O=a.c.span(v(),(function(n){return n.theme.terminal.yellow})),M=a.c.span(y(),(function(n){return n.theme.terminal.purple})),Y=a.c.span(Z(),(function(n){return n.theme.terminal.cyan})),z=i.a.createElement,R=function(){return z(i.a.Fragment,null,z(w,null,z(W,null,"guest@browser"),"\xa0",z(M,null,"MING64"),"\xa0",z(O,null,"~/www/lorenzopincinato/terminal-theme-editor"),"\xa0",z(Y,null,"(master)")),z(w,null,"$\xa0",z(N,null,"|")))},k=i.a.createElement,S=function(){return k(A,null,k(m,null,k(b,null,k(p,{isClose:!1},k("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibWluaW1pemVfaWNvbi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMCAoNDAzNWE0ZmI0OSwgMjAyMC0wNS0wMSkiCiAgIGlkPSJzdmc5OTIiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDIwLjAwMDAwMSAyMC4wMDAwMDEiCiAgIGhlaWdodD0iMTBtbSIKICAgd2lkdGg9IjEwbW0iPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM5ODYiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjeT0iMzAuNzk2MTkyIgogICAgIGlua3NjYXBlOmN4PSIzMy4zNDU4ODkiCiAgICAgaW5rc2NhcGU6em9vbT0iMTEuMiIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBpZD0iYmFzZSIKICAgICB2aWV3Ym94LWhlaWdodD0iMiIKICAgICB2aWV3Ym94LXdpZHRoPSIxZS0wNSIKICAgICBzY2FsZS14PSIyIgogICAgIHNob3dndWlkZXM9InRydWUiCiAgICAgaW5rc2NhcGU6Z3VpZGUtYmJveD0idHJ1ZSI+CiAgICA8c29kaXBvZGk6Z3VpZGUKICAgICAgIHBvc2l0aW9uPSItMC4wNDcyNDcwMjUsLTAuMDMyNzM3OTk0IgogICAgICAgb3JpZW50YXRpb249IjAsLTEiCiAgICAgICBpZD0iZ3VpZGU4IiAvPgogICAgPHNvZGlwb2RpOmd1aWRlCiAgICAgICBwb3NpdGlvbj0iMCwyMCIKICAgICAgIG9yaWVudGF0aW9uPSIwLC0xIgogICAgICAgaWQ9Imd1aWRlMTAiIC8+CiAgICA8c29kaXBvZGk6Z3VpZGUKICAgICAgIHBvc2l0aW9uPSItMS42NTM2NDU5LDEwLjAzMDg3OCIKICAgICAgIG9yaWVudGF0aW9uPSIwLC0xIgogICAgICAgaWQ9Imd1aWRlMTIiIC8+CiAgICA8c29kaXBvZGk6Z3VpZGUKICAgICAgIHBvc2l0aW9uPSIxMC4wMTYzNjksMTIuMzkzMjI5IgogICAgICAgb3JpZW50YXRpb249IjEsMCIKICAgICAgIGlkPSJndWlkZTE0IiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTk4OSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGUgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpZD0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuNztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAxLjU4MzI3MzMsOS45NjkxMjI0IEggMTguMzQ2MDkzIgogICAgICAgaWQ9InBhdGg5NzUiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogIDwvZz4KPC9zdmc+Cg==",alt:"",width:"12px",height:"12px"})),k(p,{isClose:!1},k("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibWF4aW1pemVfaWNvbi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMCAoNDAzNWE0ZmI0OSwgMjAyMC0wNS0wMSkiCiAgIGlkPSJzdmc5NDMiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDIwLjAwMDAwMSAyMC4wMDAwMDEiCiAgIGhlaWdodD0iMTBtbSIKICAgd2lkdGg9IjEwbW0iPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM5MzciIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjeT0iNTEuMzQxNTkyIgogICAgIGlua3NjYXBlOmN4PSI4Ni40NzUyNTUiCiAgICAgaW5rc2NhcGU6em9vbT0iMy45NTk3OTgiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgaWQ9ImJhc2UiCiAgICAgc2NhbGUteD0iMiIKICAgICBzaG93Z3VpZGVzPSJ0cnVlIgogICAgIGlua3NjYXBlOmd1aWRlLWJib3g9InRydWUiPgogICAgPHNvZGlwb2RpOmd1aWRlCiAgICAgICBwb3NpdGlvbj0iOS45NjkxMjIzLDE4LjIwNDYxMyIKICAgICAgIG9yaWVudGF0aW9uPSIxLDAiCiAgICAgICBpZD0iZ3VpZGU4IiAvPgogICAgPHNvZGlwb2RpOmd1aWRlCiAgICAgICBwb3NpdGlvbj0iNC41ODI5NjE0LDEwLjAzMDg3OCIKICAgICAgIG9yaWVudGF0aW9uPSIwLC0xIgogICAgICAgaWQ9Imd1aWRlMTAiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhOTQwIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZSAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlkPSJsYXllcjEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSI+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg2OCIKICAgICAgIGQ9Ik0gMi40MzAyNywyLjQ1MDczOTkgViAxNy41MzQ3NTEgSCAxNy41NTUyMjEgViAyLjQ1MDczOTkgWiIKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuNzY1O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgPC9nPgo8L3N2Zz4K",alt:"",width:"11px",height:"12px"})),k(p,{isClose:!0},k("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iY2xvc2VfaWNvbi5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMCAoNDAzNWE0ZmI0OSwgMjAyMC0wNS0wMSkiCiAgIGlkPSJzdmc0MiIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMjAgMTkuOTk5OTk5IgogICBoZWlnaHQ9IjEwbW0iCiAgIHdpZHRoPSIxMG1tIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzYiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtcm90YXRpb249IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjeT0iOS44MzQ0MTI2IgogICAgIGlua3NjYXBlOmN4PSIzOC45NDgyMDgiCiAgICAgaW5rc2NhcGU6em9vbT0iNy45MTk1OTYiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgaWQ9ImJhc2UiCiAgICAgc2hvd2d1aWRlcz0idHJ1ZSIKICAgICBpbmtzY2FwZTpndWlkZS1iYm94PSJ0cnVlIj4KICAgIDxzb2RpcG9kaTpndWlkZQogICAgICAgcG9zaXRpb249IjkuOTg5MTk4MywxNS4zNTYxOTEiCiAgICAgICBvcmllbnRhdGlvbj0iMSwwIgogICAgICAgaWQ9Imd1aWRlOSIgLz4KICAgIDxzb2RpcG9kaTpndWlkZQogICAgICAgcG9zaXRpb249IjIuMDA0NTIxNCw5Ljk3NzM5MjIiCiAgICAgICBvcmllbnRhdGlvbj0iMCwtMSIKICAgICAgIGlkPSJndWlkZTExIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTM5Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZSAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlkPSJsYXllcjEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2VjZWNlYztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS43O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDE3LjUzNDIzMSwyLjQ3NzMyOSAyLjQzNDgyMTMsMTcuNTYxMzQgdiAwIgogICAgICAgaWQ9InBhdGg5NTEiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2VjZWNlYztzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS43O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDE3LjUzNDIzMSwxNy41NjEzNCAyLjQzNDgyMTMsMi40NzczMjkgdiAwIgogICAgICAgaWQ9InBhdGg5NTMiIC8+CiAgPC9nPgo8L3N2Zz4K",alt:"",width:"11.5px",height:"12px"})))),k(s,null,k(R,null)))};function P(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var D=t("a6RD"),X=t.n(D);function T(){var n=Object(I.a)(["\n  display: flex;\n\n  height: 36rem;\n  width: 20rem;\n\n  margin-left: 4rem;\n"]);return T=function(){return n},n}var L=a.c.div(T()),x=i.a.createElement;function B(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?B(Object(t),!0).forEach((function(e){P(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var J=X()((function(){return Promise.all([t.e(5),t.e(4),t.e(11)]).then(t.bind(null,"joC6"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["joC6"]},modules:["./CodeMirror"]}}),V=function(n){var e=n.setTheme,t=n.theme,i=Object(r.useState)(JSON.stringify(t.terminal,void 0,4)),I=i[0],a=i[1];return x(L,null,x(J,{value:I,options:{theme:"default",height:"auto",viewportMargin:1/0,lineWrapping:!0,mode:{name:"javascript",json:!0,statementIndent:2},lineNumbers:!1,indentWithTabs:!0,tabSize:2},onChange:function(n,r,i){a(i);try{var I=E({},t);I.terminal=E(E({},t.terminal),JSON.parse(i)),e(I)}catch(o){console.log("Invalid json")}}}))},F=i.a.createElement;e.default=function(n){var e=n.setTheme,t=n.theme;return F(c,null,F(S,null),F(V,{setTheme:e,theme:t}))}},a6RD:function(n,e,t){"use strict";var r=t("lSNA");function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.__esModule=!0,e.noSSR=g,e.default=function(n,e){var t=o.default,r={loading:function(n){n.error,n.isLoading;return n.pastDelay,null}};n instanceof Promise?r.loader=function(){return n}:"function"===typeof n?r.loader=n:"object"===typeof n&&(r=I(I({},r),n));if(r=I(I({},r),e),"object"===typeof n&&!(n instanceof Promise)&&(n.render&&(r.render=function(e,t){return n.render(t,e)}),n.modules)){t=o.default.Map;var i={},a=n.modules();Object.keys(a).forEach((function(n){var e=a[n];"function"!==typeof e.then?i[n]=e:i[n]=function(){return e.then((function(n){return n.default||n}))}})),r.loader=i}r.loadableGenerated&&delete(r=I(I({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,g(t,r);delete r.ssr}return t(r)};var a=c(t("q1tI")),o=c(t("2qu3"));function c(n){return n&&n.__esModule?n:{default:n}}var l=!1;function g(n,e){if(delete e.webpack,delete e.modules,!l)return n(e);var t=e.loading;return function(){return a.default.createElement(t,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}},jwwS:function(n,e,t){"use strict";var r;e.__esModule=!0,e.LoadableContext=void 0;var i=((r=t("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.LoadableContext=i},lSNA:function(n,e){n.exports=function(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}}},[["/EDR",0,1,2]]]);