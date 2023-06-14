!function(){"use strict";function e(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function t(e,t){for(var r,n="",i=0,o=-1,a=0,l=0;l<=e.length;++l){if(l<e.length)r=e.charCodeAt(l);else{if(47===r)break;r=47}if(47===r){if(o===l-1||1===a);else if(o!==l-1&&2===a){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var c=n.lastIndexOf("/");if(c!==n.length-1){-1===c?(n="",i=0):i=(n=n.slice(0,c)).length-1-n.lastIndexOf("/"),o=l,a=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=l,a=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,l):n=e.slice(o+1,l),i=l-o-1;o=l,a=0}else 46===r&&-1!==a?++a:a=-1}return n}var r={resolve:function(){for(var r,n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a;o>=0?a=arguments[o]:(void 0===r&&(r=process.cwd()),a=r),e(a),0!==a.length&&(n=a+"/"+n,i=47===a.charCodeAt(0))}return n=t(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(r){if(e(r),0===r.length)return".";var n=47===r.charCodeAt(0),i=47===r.charCodeAt(r.length-1);return 0!==(r=t(r,!n)).length||n||(r="."),r.length>0&&i&&(r+="/"),n?"/"+r:r},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var t,n=0;n<arguments.length;++n){var i=arguments[n];e(i),i.length>0&&(void 0===t?t=i:t+="/"+i)}return void 0===t?".":r.normalize(t)},relative:function(t,n){if(e(t),e(n),t===n)return"";if((t=r.resolve(t))===(n=r.resolve(n)))return"";for(var i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var o=t.length,a=o-i,l=1;l<n.length&&47===n.charCodeAt(l);++l);for(var c=n.length-l,f=a<c?a:c,h=-1,s=0;s<=f;++s){if(s===f){if(c>f){if(47===n.charCodeAt(l+s))return n.slice(l+s+1);if(0===s)return n.slice(l+s)}else a>f&&(47===t.charCodeAt(i+s)?h=s:0===s&&(h=0));break}var u=t.charCodeAt(i+s);if(u!==n.charCodeAt(l+s))break;47===u&&(h=s)}var d="";for(s=i+h+1;s<=o;++s)s!==o&&47!==t.charCodeAt(s)||(0===d.length?d+="..":d+="/..");return d.length>0?d+n.slice(l+h):(l+=h,47===n.charCodeAt(l)&&++l,n.slice(l))},_makeLong:function(e){return e},dirname:function(t){if(e(t),0===t.length)return".";for(var r=t.charCodeAt(0),n=47===r,i=-1,o=!0,a=t.length-1;a>=1;--a)if(47===(r=t.charCodeAt(a))){if(!o){i=a;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"//":t.slice(0,i)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');e(t);var n,i=0,o=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return"";var l=r.length-1,c=-1;for(n=t.length-1;n>=0;--n){var f=t.charCodeAt(n);if(47===f){if(!a){i=n+1;break}}else-1===c&&(a=!1,c=n+1),l>=0&&(f===r.charCodeAt(l)?-1==--l&&(o=n):(l=-1,o=c))}return i===o?o=c:-1===o&&(o=t.length),t.slice(i,o)}for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!a){i=n+1;break}}else-1===o&&(a=!1,o=n+1);return-1===o?"":t.slice(i,o)},extname:function(t){e(t);for(var r=-1,n=0,i=-1,o=!0,a=0,l=t.length-1;l>=0;--l){var c=t.charCodeAt(l);if(47!==c)-1===i&&(o=!1,i=l+1),46===c?-1===r?r=l:1!==a&&(a=1):-1!==r&&(a=-1);else if(!o){n=l+1;break}}return-1===r||-1===i||0===a||1===a&&r===i-1&&r===n+1?"":t.slice(r,i)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(t){e(t);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return r;var n,i=t.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var a=-1,l=0,c=-1,f=!0,h=t.length-1,s=0;h>=n;--h)if(47!==(i=t.charCodeAt(h)))-1===c&&(f=!1,c=h+1),46===i?-1===a?a=h:1!==s&&(s=1):-1!==a&&(s=-1);else if(!f){l=h+1;break}return-1===a||-1===c||0===s||1===s&&a===c-1&&a===l+1?-1!==c&&(r.base=r.name=0===l&&o?t.slice(1,c):t.slice(l,c)):(0===l&&o?(r.name=t.slice(1,a),r.base=t.slice(1,c)):(r.name=t.slice(l,a),r.base=t.slice(l,c)),r.ext=t.slice(a,c)),l>0?r.dir=t.slice(0,l-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r;var n=r;window.MF_MODULE_LOADER=window.MF_MODULE_LOADER||{config:{domain:window.location.hostname,path:"/libmfelivemakeup-web/",version:"stable",tutorialLibPath:"",optimize:!1},loadScript:function(e,t){var r=document.createElement("script");r.type="text/javascript",r.src=e,r.onreadystatechange=t,r.onload=t,document.body.appendChild(r)},getUrlPath:function(){var e=MF_MODULE_LOADER.config,t=e.domain,r=e.path,i=e.version;return"".concat(window.location.protocol,"//").concat(n.join(t,r,i,"/"))},init:function(e,t,r){Object.keys(e).forEach((function(t){MF_MODULE_LOADER.config[t]=e[t]})),MF_MODULE_LOADER.config.shouldLoadTutorial=!1,e.tutorialLibPath&&(MF_MODULE_LOADER.config.shouldLoadTutorial=!0);var n="".concat(MF_MODULE_LOADER.getUrlPath(),"sdk-modiface/dist/import.min.js");MF_MODULE_LOADER.loadScript(n,(function(){return MF_MODULE_LOADER.load(t,r)}))},load:function(){console.log("WARN: please call MF_MODULE_LOADER.init first and wait for it to complete")},getGitVersion:function(){return"lite-2.1.8"}}}();