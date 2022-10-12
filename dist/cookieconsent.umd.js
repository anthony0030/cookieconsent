/*!
* CookieConsent 3.0.0-rc.6
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',n='opt-out',o='show--consent',a='show--preferences',r='disable--interaction',i='data-category',c='div',s='button',l='consentModal',d='preferencesModal',f=e=>'function'==typeof e,_=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let n in e){let o=e[n];t[n]=_(o)}return t},u=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:t}))},p=(e,t,n)=>{const o=v.t,a=v.o,r={cookie:v.l.i};if(t){const r={modalName:t};return e===a._?f(o._)&&o._(r):e===a.u?f(o.u)&&o.u(r):(r.modal=n,f(o.p)&&o.p(r)),u(e,r)}e===a.m?f(o.m)&&o.m(_(r)):e===a.v?f(o.v)&&o.v(_(r)):(r.changedCategories=v.l.g,r.changedServices=v.l.h,f(o.C)&&o.C(_(r))),u(e,_(r))};class m{constructor(){this.k={mode:t,revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,lazyHtmlGeneration:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.l={S:null,T:'',M:{},A:null,i:null,B:[],D:null,H:null,V:null,F:'',N:!0,j:!1,I:!1,G:!1,P:!1,R:!1,O:!1,L:[],J:!1,U:!0,g:[],q:!1,K:'',W:!1,X:[],Y:[],Z:[],$:[],ee:!1,te:!1,ne:!1,oe:[],ae:[],re:[],ie:{},ce:{},se:{},h:{},le:{},de:[],fe:[]},this._e={ue:0,pe:0,me:0,ve:0,ge:0,be:0,ye:0,he:0,we:0,Ce:0,ke:0,xe:0,Se:0,Te:0,Me:0,Ae:0,Be:0,De:0,He:0,Ee:0,Ve:0,Fe:0,Ne:0,je:0,Ie:0,Ge:0,Pe:0,Re:0,Oe:0,Le:{},Je:{}},this.t={m:0,v:0,C:0,_:0,u:0,p:0},this.o={m:'cc:onFirstConsent',v:'cc:onConsent',C:'cc:onChange',_:'cc:onModalShow',u:'cc:onModalHide',p:'cc:onModalReady'}}}const v=new m,g=e=>Array.isArray(e),b=e=>!!e&&'object'==typeof e&&!g(e),y=(e,t)=>-1!==e.indexOf(t),h=e=>{const t=document.createElement(e);return e===s&&w(t,'type',e),t},w=(e,t,n)=>{e.setAttribute(t,n)},C=(e,t)=>{e.appendChild(t)},k=(e,t,n,o)=>{e.addEventListener(t,n),o&&v.l.B.push({Ue:e,ze:t,qe:n})},x=e=>Object.keys(e),S=(e,t)=>{e.classList.add(t)},T=(e,t)=>{S(e,'cm__'+t)},M=(e,t)=>{S(e,'pm__'+t)},A=(e,t)=>{e.classList.remove(t)},B=()=>{const e=v.k.cookie.expiresAfterDays;return f(e)?e(v.l.K):e},D=(e,t)=>e.filter((e=>!y(t,e))).concat(t.filter((t=>!y(e,t)))),H=()=>{v.l.K=(()=>{let e='custom',t=F().accepted;return t.length===v.l.X.length?e='all':t.length===v.l.Z.length&&(e='necessary'),e})()},E=(e,t,n,o)=>{const a='accept-',r=_('show-preferencesModal'),i=_('show-consentModal'),c=_(a+'all'),s=_(a+'necessary'),l=_(a+'custom'),d=!0===v.k.lazyHtmlGeneration;for(var f=0;f<r.length;f++)w(r[f],'aria-haspopup','dialog'),k(r[f],'click',(e=>{e.preventDefault(),t.showPreferences()}),!0),d&&k(r[f],'mouseover',(e=>{e.preventDefault(),v.l.P||n(t,o)}),!0);for(f=0;f<i.length;f++)w(i[f],'aria-haspopup','dialog'),k(i[f],'click',(e=>{e.preventDefault(),t.show(!0)}),!0);for(f=0;f<c.length;f++)k(c[f],'click',(e=>{u(e,'all')}),!0);for(f=0;f<l.length;f++)k(l[f],'click',(e=>{u(e)}),!0);for(f=0;f<s.length;f++)k(s[f],'click',(e=>{u(e,[])}),!0);function _(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function u(e,n){e.preventDefault(),t.acceptCategory(n),t.hidePreferences(),t.hide()}},V=e=>Array.from(new Set(e)),F=()=>{const e=v.l.X.filter((e=>!y(v.l.Y,e)));return{accepted:v.l.Y,rejected:e}},N=()=>{const e=v.l,t=['[href]',s,'input','details','[tabindex="0"]'].join(':not([tabindex="-1"]), '),n=(e,n)=>{const o=e&&e.querySelectorAll(t);n[0]=o[0],n[1]=o[o.length-1]};e.j&&n(v._e.be,e.oe),e.P&&n(v._e.He,e.ae)},j=e=>{const t=v.l,n=t.ce;if(t.X.forEach((e=>{(t.h[e]||t.ce[e]||[]).forEach((n=>{const o=t.ie[e][n];o&&(!o.enabled&&y(t.ce[e],n)&&f(o.onAccept)?(o.enabled=!0,o.onAccept()):o.enabled&&!y(t.ce[e],n)&&f(o.onReject)&&(o.enabled=!1,o.onReject()))}))})),!v.k.manageScriptTags)return;var o=t.de,a=e||t.i.categories||[];const r=(e,o)=>{if(o<e.length){var c=e[o],s=t.fe[o],l=s.Ke,d=s.Qe,f=y(a,l),_=!!d&&y(n[l],d);if(!s.We){var u=!d&&!s.Xe&&f,p=d&&!s.Xe&&_,m=!d&&s.Xe&&!f&&y(t.g,l),v=d&&s.Xe&&!_&&y(t.h[l]||[],d);if(u||m||p||v){s.We=!0,c.removeAttribute('type'),c.removeAttribute(i);let t=c.getAttribute('data-src');t&&c.removeAttribute('data-src');const n=h('script');if(n.textContent=c.innerHTML,((e,t)=>{for(var n=t.attributes,o=n.length,a=0;a<o;a++){var r=n[a].nodeName;w(e,r,t[r]||t.getAttribute(r))}})(n,c),t?n.src=t:t=c.src,t&&(n.onload=n.onerror=()=>{r(e,++o)}),c.replaceWith(n),t)return}}r(e,++o)}};r(o,0)},I=e=>{const t=v.l.S.guiOptions,n=t&&t.consentModal,o=t&&t.preferencesModal,a=(e,t,n,o,a,r)=>{var i=n&&n.layout,c=n&&n.position,s=n&&!0===n.flipButtons,l=n&&!1===n.equalWeightButtons,d=i&&i.split(' ')||[],f=c&&c.split(' ')||[],_=d[0],u=d[1],p=f[0],m='pm--'===o?f[0]:f[1],g=_,b=t[_];b||(b=t[a],g=a);var h=y(b.Ye,u)&&u,w=y(b.Ze,p)?p:b.$e,C=y(b.et,m)?m:b.tt;e.className=r,S(e,o+g),h&&S(e,o+h),w&&S(e,o+w),C&&S(e,o+C),s&&S(e,o+'flip');const k='btn--secondary',x=r+'__';if('cm'===r){const{Me:e,De:t}=v._e;e&&A(e,x+k),t&&A(t,x+k),l&&(e&&S(e,x+k),t&&S(t,x+k))}else{const{Re:e}=v._e;e&&A(e,x+k),l&&e&&S(e,x+k)}};if(0===e){const e=['middle','top','bottom'],t=['left','center','right'],o={box:{Ye:['wide','inline'],Ze:e,et:t,$e:'bottom',tt:'right'},cloud:{Ye:['inline'],Ze:e,et:t,$e:'bottom',tt:'center'},bar:{Ye:['inline'],Ze:e.slice(1),et:[],$e:'bottom',tt:''}};a(v._e.be,o,n,'cm--','box','cm')}if(1===e){const e={box:{Ye:[],Ze:[],et:[],$e:'',tt:''},bar:{Ye:['wide'],Ze:[],et:['left','right'],$e:'',tt:'left'}};a(v._e.He,e,o,'pm--','box','pm')}},G=(e,t)=>{const n=v.l,o=v._e,a=n.A&&n.A.preferencesModal;if(a){var r=a.title,i=a.closeIconLabel,l=a.acceptAllBtn,f=a.acceptNecessaryBtn,_=a.savePreferencesBtn,u=a.sections;if(o.ge)o.je=h(c),M(o.je,'body');else{o.ge=h(c),S(o.ge,'pm-wrapper'),o.He=h(c),o.He.style.visibility='hidden',S(o.He,'pm'),w(o.He,'role','dialog'),w(o.He,'aria-hidden',!0),w(o.He,'aria-modal',!0),k(o.pe,'keydown',(t=>{27===t.keyCode&&e.hidePreferences()}),!0),o.Ee=h(c),M(o.Ee,'header'),o.Ve=h(c),M(o.Ve,'title'),w(o.Ve,'role','heading'),o.Fe=h(s),M(o.Fe,'close-btn'),w(o.Fe,'aria-label',a.closeIconLabel||''),k(o.Fe,'click',e.hidePreferences),o.Ne=h(c),M(o.Ne,'body'),o.Ge=h(c),M(o.Ge,'footer');var m=h(c);S(m,'btns');var g=h(c),b=h(c);M(g,'btn-group'),M(b,'btn-group'),C(o.Ge,b),C(o.Ge,g),C(o.Ee,o.Ve),C(o.Ee,o.Fe),C(o.He,o.Ee),C(o.He,o.Ne),C(o.He,o.Ge),C(o.ge,o.He)}r&&(o.Ve.innerHTML=r,i&&w(o.Fe,'aria-label',i)),u&&u.forEach((e=>{var t=e.title,r=e.description,i=e.linkedCategory,l=i&&n.W[i],d=e.cookieTable,f=d&&d.body,_=f&&f.length>0,u=!!l,p=u&&n.ie[i]||!1,m=p&&x(p)||[],v=u&&(!!r||!!_||x(p).length>0),g=h(c);if(M(g,'section'),v||r){var b=h(c);M(b,'section-desc-wrapper')}if(v&&m.length>0){var y=h(c);M(y,'section-services'),m.forEach((e=>{var t=p[e].label||e,n=h(c),o=h(c),a=h(c),r=h(c);M(n,'service'),M(r,'service-title'),M(o,'service-header'),M(a,'service-icon');var s=P(t,e,l,!0,i);r.innerHTML=t,C(o,a),C(o,r),C(n,o),C(n,s),C(y,n)})),C(b,y)}if(t){var T=h(c),B=h(u?s:c);if(M(T,'section-title-wrapper'),M(B,'section-title'),B.innerHTML=t,C(T,B),u){var D=h('span');M(D,'section-arrow'),C(T,D),g.className+='--toggle';var H=P(t,i,l);if(m.length>0){var E=h('span');M(E,'badge'),M(E,'service-counter'),w(E,'aria-hidden',!0),w(E,'data-servicecounter',m.length);var V=a.serviceCounterLabel;V&&'string'==typeof V&&w(E,'data-counterlabel',V),C(B,E)}if(v){M(g,'section--expandable');var F=i+'-desc';w(B,'aria-expanded',!1),w(B,'aria-controls',F)}C(T,H)}else w(B,'role','heading'),w(B,'aria-level','3');C(g,T)}if(r){var N=h(c);M(N,'section-desc'),N.innerHTML=r,C(b,N)}if(v&&(w(b,'aria-hidden','true'),b.id=F,((e,t,n)=>{k(B,'click',(()=>{t.classList.contains('is-expanded')?(A(t,'is-expanded'),w(n,'aria-expanded','false'),w(e,'aria-hidden','true')):(S(t,'is-expanded'),w(n,'aria-expanded','true'),w(e,'aria-hidden','false'))}))})(b,g,B),_)){var j=h('table'),I=h('thead'),G=h('tbody');M(j,'section-table'),M(I,'table-head'),M(G,'table-body');var R=d.headers,O=x(R),L=o.ue.createDocumentFragment(),J=h('tr');w(J,'role','row');for(var U=0;U<O.length;U++){var z=R[O[U]],q=h('th');q.id='cc__row-'+z,w(q,'role','columnheader'),w(q,'scope','col'),M(q,'table-th'),q.innerHTML=z,C(L,q)}C(J,L),C(I,J);var K=o.ue.createDocumentFragment();for(U=0;U<f.length;U++){var Q=f[U],W=h('tr');w(W,'role','row'),M(W,'table-tr');for(var X=0;X<O.length;X++){var Y=O[X],Z=R[Y],$=Q[Y],ee=h('td'),te=h(c);M(ee,'table-td'),w(ee,'data-column',Z),w(ee,'headers','cc__row-'+Z),te.insertAdjacentHTML('beforeend',$),C(ee,te),C(W,ee)}C(K,W)}C(G,K),C(j,I),C(j,G),C(b,j)}(v||r)&&C(g,b),C(o.Ne,g),o.je?C(o.je,g):C(o.Ne,g)})),(l||f)&&(f&&(o.Re||(o.Re=h(s),M(o.Re,'btn'),w(o.Re,'data-role','necessary'),C(g,o.Re),k(o.Re,'click',(()=>{y([])}))),o.Re.innerHTML=f),l&&(o.Pe||(o.Pe=h(s),M(o.Pe,'btn'),w(o.Pe,'data-role','all'),C(g,o.Pe),k(o.Pe,'click',(()=>{y('all')}))),o.Pe.innerHTML=l)),_&&(o.Oe||(o.Oe=h(s),M(o.Oe,'btn'),M(o.Oe,'btn--secondary'),w(o.Oe,'data-role','save'),C(b,o.Oe),k(o.Oe,'click',(()=>{y()}))),o.Oe.innerHTML=_),o.je&&(o.He.replaceChild(o.je,o.Ne),o.Ne=o.je),I(1),n.P||(n.P=!0,p(v.o.p,d,o.He),N(),t(e),C(o.me,o.ge),setTimeout((()=>S(o.ge,'cc--anim')),100))}function y(t){e.acceptCategory(t),e.hidePreferences(),e.hide()}};function P(e,t,n,o,a){const r=v.l,c=v._e;var s=h('label'),l=h('input'),d=h('span'),f=h('span'),_=h('span'),u=h('span');if(l.type='checkbox',S(s,'section__toggle-wrapper'),S(l,'section__toggle'),S(_,'toggle__icon-on'),S(u,'toggle__icon-off'),S(d,'toggle__icon'),S(f,'toggle__label'),w(d,'aria-hidden','true'),o?(S(s,'toggle-service'),S(l,'toggle-service'),w(l,i,a),c.Je[a][t]=l):c.Le[t]=l,o?(e=>{k(l,'change',(()=>{var t=c.Je[e],n=c.Le[e];for(var o in r.se[e]=[],t){const n=t[o];n.checked&&r.se[e].push(n.value)}r.se[e].length>0?n.checked=!0:n.checked=!1}))})(a):(e=>{k(l,'click',(()=>{var t=c.Je[e];if(r.se[e]=[],l.checked)for(var n in t)t[n].checked=!0;else for(n in t)t[n].checked=!1}))})(t),l.value=t,f.textContent=e.replace(/<.*>.*<\/.*>/gm,''),C(d,u),C(d,_),r.N)(n.enabled||n.readOnly)&&(l.checked=!0);else if(o){var p=r.ce[a];(n.readOnly||y(p,t))&&(l.checked=!0)}else y(r.Y,t)&&(l.checked=!0);return n.readOnly&&(l.disabled=!0),C(s,l),C(s,d),C(s,f),s}const R=(e,t)=>{const n=v.l,o=v._e,a=n.A&&n.A.consentModal;if(a){!0===n.S.disablePageInteraction&&S(o.pe,r);var i=a.acceptAllBtn,d=a.acceptNecessaryBtn,f=a.showPreferencesBtn,_=a.closeIconLabel,u=a.footer;if(!o.ve){o.ve=h(c),o.be=h(c),o.ye=h(c),o.he=h(c),o.ke=h(c),S(o.ve,'cm-wrapper'),S(o.be,'cm'),T(o.ye,'body'),T(o.he,'texts'),T(o.ke,'btns'),w(o.be,'role','dialog'),w(o.be,'aria-modal','true'),w(o.be,'aria-hidden','false'),w(o.be,'aria-labelledby','cm__title'),w(o.be,'aria-describedby','cm__desc'),o.be.style.visibility='hidden';const t='box',a=n.S.guiOptions,r=a&&a.consentModal,l=(r&&r.layout||t).split(' ')[0]===t;_&&l&&(o.De||(o.De=h(s),T(o.De,'btn'),T(o.De,'btn--close'),k(o.De,'click',(()=>{e.hide(),e.acceptCategory([])})),C(o.ye,o.De)),w(o.De,'aria-label',_)),C(o.ye,o.he),(i||d||f)&&C(o.ye,o.ke),C(o.be,o.ye),C(o.ve,o.be)}var m=a.title;m&&(o.we||(o.we=h(c),o.we.className=o.we.id='cm__title',w(o.we,'role','heading'),w(o.we,'aria-level','2'),C(o.he,o.we)),o.we.innerHTML=m);var g=a.description;if(g&&(n.J&&(g=g.replace('{{revisionMessage}}',n.U?'':a.revisionMessage||'')),o.Ce||(o.Ce=h(c),o.Ce.className=o.Ce.id='cm__desc',C(o.he,o.Ce)),o.Ce.innerHTML=g),i&&(o.Te||(o.Te=h(s),T(o.Te,'btn'),w(o.Te,'data-role','all'),k(o.Te,'click',(()=>{e.hide(),e.acceptCategory('all')}))),o.Te.innerHTML=i),d&&(o.Me||(o.Me=h(s),T(o.Me,'btn'),w(o.Me,'data-role','necessary'),k(o.Me,'click',(()=>{e.hide(),e.acceptCategory([])}))),o.Me.innerHTML=d),f&&(o.Ae||(o.Ae=h(s),T(o.Ae,'btn'),T(o.Ae,'btn--secondary'),w(o.Ae,'data-role','show'),k(o.Ae,'mouseover',(()=>{G(e,t)})),k(o.Ae,'click',e.showPreferences)),o.Ae.innerHTML=f),!o.Se&&f&&(o.Se=h(c),T(o.Se,'btn-group'),C(o.Se,o.Ae),C(o.ke,o.Se)),o.xe||(o.xe=h(c),T(o.xe,'btn-group'),d&&C(o.xe,o.Me),i&&C(o.xe,o.Te),(i||d)&&C(o.ye,o.xe),C(o.ke,o.xe)),u){if(!o.Be){var b=h(c),y=h(c);o.Be=h(c),T(b,'footer'),T(y,'links'),T(o.Be,'link-group'),C(y,o.Be),C(b,y),C(o.be,b)}o.Be.innerHTML=u}I(0),n.j||(n.j=!0,p(v.o.p,l,o.be),N(),t(e),C(o.me,o.ve),setTimeout((()=>S(o.ve,'cc--anim')),100)),E(o.ye,e,G,t)}},O=e=>{const t=v._e;if(!t.me){t.me=h(c),t.me.id='cc-main',t.me.style.position='fixed',t.me.style.zIndex='2147483647';let n=v.l.S.root;n&&'string'==typeof n&&(n=document.querySelector(n)),C(n||t.ue.body,t.me),(e=>{const t=v._e;k(t.me,'click',(n=>{const o=v.l;o.O?t.He.contains(n.target)?o.R=!0:(e.hidePreferences(0),o.R=!1):o.I&&t.be.contains(n.target)&&(o.R=!0)}))})(e)}},L=e=>!!e&&y(x(v.l.M),e),J=()=>{const e=v.l;return e.T||e.S.language.default},U=e=>{e&&(v.l.T=e)},z=async e=>{const t=v.l;let n;n=e&&L(e)?e:J();let o=t.M[n];if(!o)return!1;if('string'==typeof o){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(o);if(!e)return!1;o=e}return t.A=o,U(n),!0},q=e=>{const{hostname:t,protocol:n}=window.location,{name:o,path:a,domain:r,sameSite:i}=v.k.cookie,c=encodeURIComponent(JSON.stringify(v.l.i)),s=e?(()=>{const e=v.l.V,t=e?new Date-e:0;return 864e5*B()-t})():864e5*B(),l=new Date;l.setTime(l.getTime()+s);let d=o+'='+c+(0!==s?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+i;y(t,'.')&&(d+='; Domain='+r),'https:'===n&&(d+='; Secure'),document.cookie=d,v.l.i},K=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},Q=(e,t,n)=>{const o=n||v.k.cookie.domain,a=t||v.k.cookie.path,r='www.'===o.slice(0,4),i=r&&o.substring(4),c=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};e.forEach((e=>{c(e),c(e,o),r&&c(e,i)}))},W=(e,t)=>{const n=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return n?t?n.pop():e:''},X=e=>{const t=document.cookie.split(/;\s*/),n=[];for(var o=0;o<t.length;o++){let a=t[o].split('=')[0];if(e)try{e.test(a)&&n.push(a)}catch(e){}else n.push(a)}return n},Y=e=>{e.dispatchEvent(new Event('change'))},Z=(e,o=[])=>{const a=v.l;let r=!1;var i=[];if(e)if('object'==typeof e&&'number'==typeof e.length)for(var c=0;c<e.length;c++)y(a.X,e[c])&&i.push(e[c]);else'string'==typeof e&&('all'===e?i=a.X.slice():y(a.X,e)&&i.push(e));else i=(()=>{let e=v._e.Le,t=[];if(e)for(var n in e)e[n].checked&&t.push(e[n].value);else a.N||(t=a.i.categories);for(let e in a.se)a.se[e].length>0&&(y(t,e)||t.push(e));return t})(),r=!0;if(o.length>=1)for(c=0;c<o.length;c++)i=i.filter((e=>e!==o[c]));for(c=0;c<a.Z.length;c++)y(i,a.Z[c])||i.push(a.Z[c]);a.Y=i,H(),r||(a.se={}),a.le=_(a.ce),a.X.forEach((e=>{const t=a.ie[e],n=x(t),o=a.ce;0!==n.length&&(o[e]=[],y(a.Z,e)?n.forEach((t=>{o[e].push(t)})):'all'===a.K?r&&a.se[e]&&a.se[e].length>0?a.se[e].forEach((t=>{o[e].push(t)})):n.forEach((t=>{o[e].push(t)})):'necessary'===a.K?o[e]=[]:r&&a.se[e]&&a.se[e].length>0?a.se[e].forEach((t=>{o[e].push(t)})):y(a.Y,e)&&x(t).forEach((t=>o[e].push(t))),o[e]=V(o[e]))})),(()=>{const e=v.l;v.k.mode===n&&e.N?e.g=D(e.$,e.Y):e.g=D(e.Y,e.i.categories||[]);let o=e.g.length>0,a=!1;e.X.forEach((t=>{e.h[t]=D(e.ce[t],e.le[t]||[]),e.h[t].length>0&&(a=!0)}));var r=v._e.Le;for(var i in r)y(e.Y,i)?r[i].checked=!0:r[i].checked=!1;e.X.forEach((t=>{var n=v._e.Je[t],o=e.ce[t];for(var a in n){const e=n[a];y(o,a)?e.checked=!0:e.checked=!1}})),e.H||(e.H=new Date),e.F||(e.F=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.i={categories:_(e.Y),revision:v.k.revision,data:e.D,consentTimestamp:e.H.toISOString(),consentId:e.F,services:_(e.ce)};var c=!1;(e.N||o||a)&&(e.N&&(e.N=!1,c=!0),H(),e.V?e.V=new Date:e.V=e.H,e.i.lastConsentTimestamp=e.V.toISOString(),q(),v.k.autoClearCookies&&(c||!e.N&&o)&&(e=>{const t=v.l,n=X();t.q=!1;let o=e?t.X:t.g;o=o.filter((e=>{let n=t.W[e];return!!n&&!n.readOnly&&!!n.autoClear})),o.forEach((o=>{const a=t.W[o].autoClear,r=a&&a.cookies||[],i=y(t.g,o),c=!y(t.Y,o),s=i&&c;(e&&c||!e&&s)&&(!0===a.reloadPage&&s&&(t.q=!0),r.forEach((e=>{let t=[];const o=e.name,a=e.domain,r=e.path;if(o instanceof RegExp)n.forEach((e=>{o.test(e)&&t.push(e)}));else{let e=(i=o,n.indexOf(i));e>-1&&t.push(n[e])}var i;t.length>0&&Q(t,r,a)})))}))})(c),j()),c&&(p(v.o.m),p(v.o.v),v.k.mode===t)||((o||a)&&p(v.o.C),e.q&&window.location.reload())})()},$=(e,t,n)=>{let o=[];const a=e=>{if('string'==typeof e){let t=W(e);''!==t&&o.push(t)}else o=o.concat(X(e))};if(g(e))for(var r=0;r<e.length;r++)a(e[r]);else a(e);Q(o,t,n)},ee=e=>{e&&!v.l.j&&R(ae,O),v.l.j&&(S(v._e.pe,o),w(v._e.be,'aria-hidden','false'),v.l.I=!0,setTimeout((()=>{v.l.te=v._e.ue.activeElement,v.l.L=v.l.oe}),200),p(v.o._,l))},te=()=>{v.l.j&&v.l.I&&(A(v._e.pe,o),w(v._e.be,'aria-hidden','true'),v.l.I=!1,setTimeout((()=>{v.l.te.focus(),v.l.L=[]}),200),p(v.o.u,l))},ne=()=>{const e=v.l;e.P&&e.G||(e.P||G(ae,O),S(v._e.pe,a),w(v._e.He,'aria-hidden','false'),e.G=!0,setTimeout((()=>{e.O=!0}),1),setTimeout((()=>{e.I?e.ne=v._e.ue.activeElement:e.te=v._e.ue.activeElement,0!==e.ae.length&&(e.ae[0].focus(),e.L=e.ae)}),200),p(v.o._,d))},oe=()=>{const e=v.l;e.G&&(A(v._e.pe,a),w(v._e.He,'aria-hidden','true'),e.G=!1,setTimeout((()=>{e.O=!1}),1),e.I?(e.ne&&e.ne.focus(),e.L=e.oe):(e.te&&e.te.focus(),e.L=[]),e.R=!1,p(v.o.u,d))};var ae={show:ee,hide:te,showPreferences:ne,hidePreferences:oe,acceptCategory:Z};const re=(e,t)=>{const n=K(W(t||v.k.cookie.name,!0));return e?n[e]:n};e.acceptCategory=Z,e.acceptService=(e,t)=>{const n=v.l;if(!e||!t||'string'!=typeof t||!y(n.X,t))return!1;const o=v._e.Je[t]||{},a=x(n.ie[t]);if(n.se[t]=[],'string'==typeof e)if('all'===e){for(let e in o)o[e].checked=!0,Y(o[e]);n.se[t]=[...a]}else{for(let t in o)o[t].checked=e===t,Y(o[t]);y(a,e)&&n.se[t].push(e)}else if(g(e)){for(let t in o)y(e,t)?o[t].checked=!0:o[t].checked=!1,Y(o[t]);a.forEach((o=>{y(e,o)&&n.se[t].push(o)}))}Z()},e.acceptedCategory=e=>{let n;return n=v.l.N&&v.k.mode!==t?v.l.$:F().accepted||[],y(n,e)},e.acceptedService=(e,t)=>y(v.l.ce[t]||[],e),e.eraseCookies=$,e.getConfig=e=>{const t=v.k,n=v.l.S;return e?t[e]||n[e]:{...t,...n,cookie:{...t.cookie}}},e.getCookie=re,e.getUserPreferences=()=>{const e=!v.l.N;var t,n=e&&F();return{acceptType:v.l.K,acceptedCategories:e?n.accepted:[],rejectedCategories:e?n.rejected:[],acceptedServices:e?v.l.ce:{},rejectedServices:e?(t={},v.l.X.forEach((e=>{t[e]=D(v.l.ce[e]||[],x(v.l.ie[e])||[])})),t):{}}},e.hide=te,e.hidePreferences=oe,e.loadScript=(e,t)=>{let n=document.querySelector('script[src="'+e+'"]');return new Promise(((o,a)=>{if(n)return o(!0);n=h('script'),g(t)&&t.forEach((e=>{w(n,e.name,e.value)})),n.onload=()=>o(!0),n.onerror=()=>{n.remove(),a(!1)},n.src=e,C(document.head,n)}))},e.reset=e=>{const t=v._e,n=v.k.cookie;!0===e&&$(n.name,n.path,n.domain),v.l.B.forEach((e=>{e.Ue.removeEventListener(e.ze,e.qe)})),t.me&&t.me.remove(),t.pe&&(A(t.pe,r),A(t.pe,a),A(t.pe,o));const i=new m;v.l=i.l,v._e=i._e,v.k=i.k,v.t=i.t,v.o=i.o,window.nt=!1},e.run=async e=>{const t=v.l,o=v.k,a=window;if(!a.nt){if(a.nt=!0,(e=>{!function(){const e=document;v._e.ue=e,v._e.pe=e.documentElement,v.k.cookie.domain=window.location.hostname}();const t=v.k,o=v.l,a=t.cookie,r=v.t,c=e.cookie,s=e.categories,l=x(s)||[],d=navigator;o.S=e,o.M=e.language.translations,o.W=s,o.X=l,r.m=e.onFirstConsent,r.v=e.onConsent,r.C=e.onChange,r.u=e.onModalHide,r._=e.onModalShow,r.p=e.onModalReady;const{mode:f,autoShow:_,autoClearCookies:u,revision:p,manageScriptTags:m,hideFromBots:g,lazyHtmlGeneration:h}=e;f===n&&(t.mode=f),'boolean'==typeof _&&(t.autoShow=_),'boolean'==typeof u&&(t.autoClearCookies=u),'boolean'==typeof m&&(t.manageScriptTags=m),'number'==typeof p&&p>=0&&(t.revision=p,o.J=!0),'boolean'==typeof h&&(t.lazyHtmlGeneration=h),!1===g&&(t.hideFromBots=!1),!0===t.hideFromBots&&d&&(o.ee=d.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(d.userAgent)||d.webdriver),b(c)&&(t.cookie={...a,...c}),t.autoClearCookies,o.J,t.manageScriptTags,function(e){const t=v.l;e.forEach((e=>{const n=t.W[e],o=n.services||{},a=o&&b(o)&&x(o)||[];t.ie[e]={},t.ce[e]=[],n.readOnly&&(t.Z.push(e),t.ce[e]=x(o)),v._e.Je[e]={},a.forEach((n=>{const a=o[n];a.enabled=!1,t.ie[e][n]=a}))}))}(l),(()=>{if(!v.k.manageScriptTags)return;const e=v.l;e.de=v._e.ue.querySelectorAll('script[data-category]'),e.fe=[],e.de.forEach((t=>{let n=t.getAttribute(i),o=t.dataset.service||'',a=!1;if(n&&'!'===n.charAt(0)&&(n=n.slice(1),a=!0),'!'===o.charAt(0)&&(o=o.slice(1),a=!0),y(e.X,n)&&(e.fe.push({We:!1,Xe:a,Ke:n,Qe:o}),o)){const t=e.ie[n];t[o]||(t[o]={enabled:!1})}}))})(),U((()=>{const e=v.l.S.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),L(t))return t}return J()})())})(e),t.ee)return;const c=K(W(o.cookie.name,!0)),s=c.categories,l=g(s);t.i=c,t.F=c.consentId;const d=!!t.F&&'string'==typeof t.F;t.H=c.consentTimestamp,t.H&&(t.H=new Date(t.H)),t.V=c.lastConsentTimestamp,t.V&&(t.V=new Date(t.V));const f=c.data;if(t.D=void 0!==f?f:null,t.J&&d&&c.revision!==o.revision&&(t.U=!1),t.N=!(d&&t.U&&t.H&&t.V&&l),t.N,t.N?o.mode===n&&(()=>{const e=v.l;e.X.forEach((t=>{if(e.W[t].enabled){e.$.push(t);const o=e.ie[t]||{};for(var n in o)e.ce[t].push(n)}}))})():(t.Y=V([...t.Z,...c.categories]),t.ce={...t.ce,...c.services},H()),!await z())return;r=ae,v.l.N&&R(r,O),v.k.lazyHtmlGeneration||G(r,O),E(null,r,G,O),o.autoShow&&t.N&&ee(!0),(()=>{const e=v._e;var t=!1,n=!1;k(e.pe,'keydown',(o=>{if('Tab'!==o.key)return;const a=v.l.L;if(a.length>0){const r=e.ue.activeElement;o.shiftKey?r===a[0]&&(a[1].focus(),o.preventDefault()):r===a[1]&&(a[0].focus(),o.preventDefault()),n||v.l.R||(n=!0,!t&&o.preventDefault(),o.shiftKey?a[1].focus():a[0].focus())}!n&&(t=!0)}),!0)})(),t.N?o.mode===n&&(o.mode,t.$,j(t.$)):(j(),p(v.o.v))}var r},e.setCookieData=e=>{let t,n=e.value,o=e.mode,a=!1;const r=v.l;if('update'===o){r.D=re('data'),t=re('data');const e=typeof t==typeof n;if(e&&'object'==typeof t)for(var i in!t&&(t={}),n)t[i]!==n[i]&&(t[i]=n[i],a=!0);else!e&&t||t===n||(t=n,a=!0)}else t=n,a=!0;return a&&(r.D=t,r.i.data=t,q(!0)),a},e.setLanguage=async(e,t)=>!(!L(e)||e===J()&&!0!==t||!await z(e)||(U(e),v.l.j&&R(ae,O),v.l.P&&G(ae,O),0)),e.show=ee,e.showPreferences=ne,e.validConsent=()=>!v.l.N,e.validCookie=e=>''!==W(e,!0),Object.defineProperty(e,'__esModule',{value:!0})},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
