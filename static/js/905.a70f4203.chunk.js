(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[905],{942:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});r(791);var n=r(892),s=r.n(n),i=r(184);const a=t=>{let{data:e}=t;return(0,i.jsx)("div",{className:"cell-container",children:(0,i.jsxs)("article",{className:"mini-post",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h3",{children:[(0,i.jsx)("a",{href:e.link,children:e.title}),(0,i.jsx)("br",{}),e.badge&&(0,i.jsxs)("span",{style:{color:"red"},children:[" ",e.badge," "]})]}),(0,i.jsx)("time",{className:"published",children:s()(e.date).format("MMMM, YYYY")})]}),(0,i.jsx)("a",{href:e.link,className:"image",children:(0,i.jsx)("img",{src:"".concat("/personal-site").concat(e.image),alt:e.title})}),(0,i.jsx)("div",{className:"description",children:(0,i.jsx)("p",{children:e.desc})})]})})}},905:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>o});r(791);var n=r(87),s=r(842),i=r(942);const a=[{title:"LearnIoTVR: An End-to-end Virtual Reality Environment Providing Authentic Learning Experiences for Internet of Things (CHI \u201823).",desc:"Association for Computing Machinery, New York, NY, USA, Article 447, 1\u201317.",link:"https://dl.acm.org/doi/10.1145/3544548.3581396",image:"/images/projects/learnIOT.jpg",badge:"Honorable Mentioned Award (top 5%)",date:"2023-04-19"},{title:"ClassMeta: Designing Interactive Virtual Classmate to Promote VR Classroom Participation",desc:"Association for Computing Machinery, New York, NY, USA, Article No.: 659, Pages 1 - 17.",link:"https://dl.acm.org/doi/full/10.1145/3613904.3642947",image:"/images/projects/chatGPT.jpg",badge:"Honorable Mentioned Award (top 5%)",date:"2024-05-11"}];var u=r(184);const o=()=>(0,u.jsx)(s.Z,{title:"Research",description:"Learn about Lijun Zhu's projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(n.rU,{to:"/Research",children:"Publications"})}),(0,u.jsx)("a",{href:"https://scholar.google.com/citations?user=2Dl5LowAAAAJ&hl=en&oi=sra",target:"_blank",rel:"noopener noreferrer",children:"Google Scholar Profile"})]})}),a.map((t=>(0,u.jsx)(i.Z,{data:t},t.title)))]})})},892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",a="hour",u="day",o="week",c="month",h="quarter",l="year",d="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},p=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},M={s:p,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+p(n,2,"0")+":"+p(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,c),i=r-s<0,a=e.clone().add(n+(i?-1:1),c);return+(-(n+(r-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:o,d:u,D:d,h:a,m:i,s:s,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=g;var D=function(t){return t instanceof j},S=function t(e,r,n){var s;if(!e)return v;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),r&&(y[i]=r,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!n&&s&&(v=s),s||!n&&v},w=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new j(r)},b=M;b.l=S,b.i=D,b.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function g(t){this.$L=S(t.locale,null,!0),this.parse(t)}var p=g.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return b},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},p.isAfter=function(t,e){return w(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<w(t)},p.$g=function(t,e,r){return b.u(t)?this[e]:this.set(r,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var r=this,n=!!b.u(e)||e,h=b.p(t),f=function(t,e){var s=b.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(u)},$=function(t,e){return b.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,g=this.$M,p=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case l:return n?f(1,0):f(31,11);case c:return n?f(1,g):f(0,g+1);case o:var v=this.$locale().weekStart||0,y=(m<v?m+7:m)-v;return f(n?p-y:p+(6-y),g);case u:case d:return $(M+"Hours",0);case a:return $(M+"Minutes",1);case i:return $(M+"Seconds",2);case s:return $(M+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var r,o=b.p(t),h="set"+(this.$u?"UTC":""),f=(r={},r[u]=h+"Date",r[d]=h+"Date",r[c]=h+"Month",r[l]=h+"FullYear",r[a]=h+"Hours",r[i]=h+"Minutes",r[s]=h+"Seconds",r[n]=h+"Milliseconds",r)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===l){var m=this.clone().set(d,1);m.$d[f]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[b.p(t)]()},p.add=function(n,h){var d,f=this;n=Number(n);var $=b.p(h),m=function(t){var e=w(f);return b.w(e.date(e.date()+Math.round(t*n)),f)};if($===c)return this.set(c,this.$M+n);if($===l)return this.set(l,this.$y+n);if($===u)return m(1);if($===o)return m(7);var g=(d={},d[i]=e,d[a]=r,d[s]=t,d)[$]||1,p=this.$d.getTime()+n*g;return b.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=b.z(this),i=this.$H,a=this.$m,u=this.$M,o=r.weekdays,c=r.months,h=r.meridiem,l=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},d=function(t){return b.s(i%12||12,t,"0")},$=h||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return u+1;case"MM":return b.s(u+1,2,"0");case"MMM":return l(r.monthsShort,u,c,3);case"MMMM":return l(c,u);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(r.weekdaysMin,e.$W,o,2);case"ddd":return l(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return b.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return b.s(a,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,d,f){var $,m=this,g=b.p(d),p=w(n),M=(p.utcOffset()-this.utcOffset())*e,v=this-p,y=function(){return b.m(m,p)};switch(g){case l:$=y()/12;break;case c:$=y();break;case h:$=y()/3;break;case o:$=(v-M)/6048e5;break;case u:$=(v-M)/864e5;break;case a:$=v/r;break;case i:$=v/e;break;case s:$=v/t;break;default:$=v}return f?$:b.a($)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},p.clone=function(){return b.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},g}(),x=j.prototype;return w.prototype=x,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",u],["$M",c],["$y",l],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,j,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=y[v],w.Ls=y,w.p={},w}()}}]);
//# sourceMappingURL=905.a70f4203.chunk.js.map