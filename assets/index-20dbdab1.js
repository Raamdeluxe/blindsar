(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bu="151",q_=0,Fh=1,j_=2,Rp=1,$_=2,Fr=3,ci=0,un=1,zn=2,bi=0,Vs=1,kh=2,Bh=3,Vh=4,X_=5,Us=100,K_=101,Y_=102,zh=103,Hh=104,Q_=200,J_=201,Z_=202,ev=203,Ip=204,Lp=205,tv=206,nv=207,iv=208,sv=209,rv=210,ov=0,av=1,cv=2,Ul=3,lv=4,uv=5,hv=6,dv=7,Dp=0,fv=1,pv=2,oi=0,mv=1,gv=2,_v=3,vv=4,yv=5,Pp=300,Ks=301,Ys=302,Ol=303,Fl=304,Za=306,Qs=1e3,Mn=1001,Na=1002,Dt=1003,kl=1004,Ca=1005,ln=1006,Np=1007,Ji=1008,Zi=1009,xv=1010,Sv=1011,Up=1012,Mv=1013,qi=1014,Mi=1015,Yr=1016,wv=1017,bv=1018,zs=1020,Ev=1021,wn=1023,Tv=1024,Av=1025,Yi=1026,Js=1027,Cv=1028,Rv=1029,Iv=1030,Lv=1031,Dv=1033,Uc=33776,Oc=33777,Fc=33778,kc=33779,Gh=35840,Wh=35841,qh=35842,jh=35843,Pv=36196,$h=37492,Xh=37496,Kh=37808,Yh=37809,Qh=37810,Jh=37811,Zh=37812,ed=37813,td=37814,nd=37815,id=37816,sd=37817,rd=37818,od=37819,ad=37820,cd=37821,Bc=36492,Nv=36283,ld=36284,ud=36285,hd=36286,Qr=2300,Zs=2301,Vc=2302,dd=2400,fd=2401,pd=2402,Uv=2500,Ov=0,Op=1,Bl=2,es=3e3,Ye=3001,Fv=3200,kv=3201,Fp=0,Bv=1,kn="srgb",Jr="srgb-linear",kp="display-p3",zc=7680,Vv=519,Vl=35044,md="300 es",zl=1035;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gd=1234567;const Gr=Math.PI/180,er=180/Math.PI;function Dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function Eu(i,e){return(i%e+e)%e}function zv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hv(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function Gv(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function Wv(i,e=1){return e-Math.abs(Eu(i,e*2)-e)}function qv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $v(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xv(i,e){return i+Math.random()*(e-i)}function Kv(i){return i*(.5-Math.random())}function Yv(i){i!==void 0&&(gd=i);let e=gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qv(i){return i*Gr}function Jv(i){return i*er}function Hl(i){return(i&i-1)===0&&i!==0}function Bp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zv(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const e0={DEG2RAD:Gr,RAD2DEG:er,generateUUID:Dn,clamp:qt,euclideanModulo:Eu,mapLinear:zv,inverseLerp:Hv,lerp:Wr,damp:Gv,pingpong:Wv,smoothstep:qv,smootherstep:jv,randInt:$v,randFloat:Xv,randFloatSpread:Kv,seededRandom:Yv,degToRad:Qv,radToDeg:Jv,isPowerOfTwo:Hl,ceilPowerOfTwo:Bp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Zv,normalize:st,denormalize:ii};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],w=s[1],x=s[4],v=s[7],E=s[2],A=s[5],I=s[8];return r[0]=o*_+a*w+c*E,r[3]=o*m+a*x+c*A,r[6]=o*f+a*v+c*I,r[1]=l*_+u*w+h*E,r[4]=l*m+u*x+h*A,r[7]=l*f+u*v+h*I,r[2]=d*_+p*w+g*E,r[5]=d*m+p*x+g*A,r[8]=d*f+p*v+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hc=new We;function zp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const t0=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),n0=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function i0(i){return i.convertSRGBToLinear().applyMatrix3(n0)}function s0(i){return i.applyMatrix3(t0).convertLinearToSRGB()}const r0={[Jr]:i=>i,[kn]:i=>i.convertSRGBToLinear(),[kp]:i0},o0={[Jr]:i=>i,[kn]:i=>i.convertLinearToSRGB(),[kp]:s0},fn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Jr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=r0[e],s=o0[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ds;class Hp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Zr("canvas")),ds.width=e.width,ds.height=e.height;const n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hs(t[n]/255)*255):t[n]=Hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gp{constructor(e=null){this.isSource=!0,this.uuid=Dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wc(s[o].image)):r.push(Wc(s[o]))}else r=Wc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a0=0;class Pt extends hr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Mn,s=Mn,r=ln,o=Ji,a=wn,c=Zi,l=Pt.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Dn(),this.name="",this.source=new Gp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qs:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qs:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Pp;Pt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(p+1)/2,E=(f+1)/2,A=(u+d)/4,I=(h+_)/4,P=(g+m)/4;return x>v&&x>E?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=I/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=I/r,s=P/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ts extends hr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Pt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ln,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wp extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c0 extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*_,w=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,f*w);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const v=a*w;if(c=c*m+d*v,l=l*m+p*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-a*p,e[t+2]=l*g+u*p+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*s-a*n,u=c*n+a*t-r*s,h=c*s+r*n-o*t,d=-r*t-o*n-a*s;return this.x=l*c+d*-r+u*-a-h*-o,this.y=u*c+d*-o+h*-r-l*-a,this.z=h*c+d*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qc=new C,_d=new Di;class Xn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox),fs.applyMatrix4(e.matrixWorld),this.union(fs);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Qn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else s.boundingBox===null&&s.computeBoundingBox(),fs.copy(s.boundingBox),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),zo.subVectors(this.max,wr),ps.subVectors(e.a,wr),ms.subVectors(e.b,wr),gs.subVectors(e.c,wr),mi.subVectors(ms,ps),gi.subVectors(gs,ms),ki.subVectors(ps,gs);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-ki.z,ki.y,mi.z,0,-mi.x,gi.z,0,-gi.x,ki.z,0,-ki.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-ki.y,ki.x,0];return!jc(t,ps,ms,gs,zo)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,ps,ms,gs,zo))?!1:(Ho.crossVectors(mi,gi),t=[Ho.x,Ho.y,Ho.z],jc(t,ps,ms,gs,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new C,new C,new C,new C,new C,new C,new C,new C],Qn=new C,fs=new Xn,ps=new C,ms=new C,gs=new C,mi=new C,gi=new C,ki=new C,wr=new C,zo=new C,Ho=new C,Bi=new C;function jc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),c=e.dot(Bi),l=t.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const l0=new Xn,br=new C,$c=new C;class fi{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):l0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add($c)),this.expandByPoint(br.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new C,Xc=new C,Go=new C,_i=new C,Kc=new C,Wo=new C,Yc=new C;class Tu{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xc.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Xc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Go),a=_i.dot(this.direction),c=-_i.dot(Go),l=_i.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xc).addScaledVector(Go,d),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,s,r){Kc.subVectors(t,e),Wo.subVectors(n,e),Yc.crossVectors(Kc,Wo);let o=this.direction.dot(Yc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const c=a*this.direction.dot(Wo.crossVectors(_i,Wo));if(c<0)return null;const l=a*this.direction.dot(Kc.cross(_i));if(l<0||c+l>o)return null;const u=-a*_i.dot(Yc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u0,e,h0)}lookAt(e,t,n){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),vi.crossVectors(n,pn),vi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),vi.crossVectors(n,pn)),vi.normalize(),qo.crossVectors(pn,vi),s[0]=vi.x,s[4]=qo.x,s[8]=pn.x,s[1]=vi.y,s[5]=qo.y,s[9]=pn.y,s[2]=vi.z,s[6]=qo.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],x=n[7],v=n[11],E=n[15],A=s[0],I=s[4],P=s[8],S=s[12],T=s[1],$=s[5],W=s[9],D=s[13],U=s[2],F=s[6],Z=s[10],Q=s[14],q=s[3],ne=s[7],ee=s[11],Re=s[15];return r[0]=o*A+a*T+c*U+l*q,r[4]=o*I+a*$+c*F+l*ne,r[8]=o*P+a*W+c*Z+l*ee,r[12]=o*S+a*D+c*Q+l*Re,r[1]=u*A+h*T+d*U+p*q,r[5]=u*I+h*$+d*F+p*ne,r[9]=u*P+h*W+d*Z+p*ee,r[13]=u*S+h*D+d*Q+p*Re,r[2]=g*A+_*T+m*U+f*q,r[6]=g*I+_*$+m*F+f*ne,r[10]=g*P+_*W+m*Z+f*ee,r[14]=g*S+_*D+m*Q+f*Re,r[3]=w*A+x*T+v*U+E*q,r[7]=w*I+x*$+v*F+E*ne,r[11]=w*P+x*W+v*Z+E*ee,r[15]=w*S+x*D+v*Q+E*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=h*m*l-_*d*l+_*c*p-a*m*p-h*c*f+a*d*f,x=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,v=u*_*l-g*h*l+g*a*p-o*_*p-u*a*f+o*h*f,E=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,A=t*w+n*x+s*v+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/A;return e[0]=w*I,e[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*f-n*d*f)*I,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*I,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*p-n*c*p)*I,e[4]=x*I,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*I,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*I,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*p+t*c*p)*I,e[8]=v*I,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*I,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*I,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*I,e[12]=E*I,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*I,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*I,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,_=o*u,m=o*h,f=a*h,w=c*l,x=c*u,v=c*h,E=n.x,A=n.y,I=n.z;return s[0]=(1-(_+f))*E,s[1]=(p+v)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(d+f))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+x)*I,s[9]=(m-w)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const l=1/r,u=1/o,h=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),d=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,c=1/(t-e),l=1/(n-s),u=1/(o-r),h=(t+e)*c,d=(n+s)*l,p=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _s=new C,An=new ke,u0=new C(0,0,0),h0=new C(1,1,1),vi=new C,qo=new C,pn=new C,vd=new ke,yd=new Di;class ec{constructor(e=0,t=0,n=0,s=ec.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yd.setFromEuler(this),this.setFromQuaternion(yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ec.DEFAULT_ORDER="XYZ";class qp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d0=0;const xd=new C,vs=new Di,Zn=new ke,jo=new C,Er=new C,f0=new C,p0=new Di,Sd=new C(1,0,0),Md=new C(0,1,0),wd=new C(0,0,1),m0={type:"added"},bd={type:"removed"};class ct extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new C,t=new ec,n=new Di,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new We}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(Md,e)}rotateZ(e){return this.rotateOnAxis(wd,e)}translateOnAxis(e,t){return xd.copy(e).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(Md,e)}translateZ(e){return this.translateOnAxis(wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jo.copy(e):jo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Er,jo,this.up):Zn.lookAt(jo,Er,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(Zn),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(m0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,f0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,p0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ct.DEFAULT_UP=new C(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new C,ei=new C,Qc=new C,ti=new C,ys=new C,xs=new C,Ed=new C,Jc=new C,Zc=new C,el=new C;let $o=!1;class Sn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),ei.subVectors(n,t),Qc.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(ei),c=Cn.dot(Qc),l=ei.dot(ei),u=ei.dot(Qc),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,s,r,o,a,c){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ti),c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),ei.subVectors(e,t),Cn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),Sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,n),xs.subVectors(r,n),Jc.subVectors(e,n);const c=ys.dot(Jc),l=xs.dot(Jc);if(c<=0&&l<=0)return t.copy(n);Zc.subVectors(e,s);const u=ys.dot(Zc),h=xs.dot(Zc);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ys,o);el.subVectors(e,r);const p=ys.dot(el),g=xs.dot(el);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(xs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Ed.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Ed,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(ys,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let g0=0;class Pn extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Vs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ip,this.blendDst=Lp,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zc,this.stencilZFail=zc,this.stencilZPass=zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function tl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=fn.workingColorSpace){return this.r=e,this.g=t,this.b=n,fn.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=fn.workingColorSpace){if(e=Eu(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tl(o,r,e+1/3),this.g=tl(o,r,e),this.b=tl(o,r,e-1/3)}return fn.toWorkingColorSpace(this,s),this}setStyle(e,t=kn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,fn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,fn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){const n=jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return fn.fromWorkingColorSpace(Ht.copy(this),e),qt(Ht.r*255,0,255)<<16^qt(Ht.g*255,0,255)<<8^qt(Ht.b*255,0,255)<<0}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fn.workingColorSpace){fn.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=fn.workingColorSpace){return fn.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=kn){fn.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,s=Ht.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${s*255|0})`}offsetHSL(e,t,n){return this.getHSL(Rn),Rn.h+=e,Rn.s+=t,Rn.l+=n,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(Xo);const n=Wr(Rn.h,Xo.h,t),s=Wr(Rn.s,Xo.s,t),r=Wr(Rn.l,Xo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ne;Ne.NAMES=jp;class si extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new C,Ko=new Ue;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $p extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xp extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _0=0;const vn=new ke,nl=new ct,Ss=new C,mn=new Xn,Tr=new Xn,It=new C;class hn extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zp(e)?Xp:$p)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(mn.min,Tr.min),mn.expandByPoint(It),It.addVectors(mn.max,Tr.max),mn.expandByPoint(It)):(mn.expandByPoint(Tr.min),mn.expandByPoint(Tr.max))}mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)It.fromBufferAttribute(a,l),c&&(Ss.fromBufferAttribute(e,l),It.add(Ss)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new C,u[T]=new C;const h=new C,d=new C,p=new C,g=new Ue,_=new Ue,m=new Ue,f=new C,w=new C;function x(T,$,W){h.fromArray(s,T*3),d.fromArray(s,$*3),p.fromArray(s,W*3),g.fromArray(o,T*2),_.fromArray(o,$*2),m.fromArray(o,W*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const D=1/(_.x*m.y-m.x*_.y);isFinite(D)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(D),w.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(D),l[T].add(f),l[$].add(f),l[W].add(f),u[T].add(w),u[$].add(w),u[W].add(w))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,$=v.length;T<$;++T){const W=v[T],D=W.start,U=W.count;for(let F=D,Z=D+U;F<Z;F+=3)x(n[F+0],n[F+1],n[F+2])}const E=new C,A=new C,I=new C,P=new C;function S(T){I.fromArray(r,T*3),P.copy(I);const $=l[T];E.copy($),E.sub(I.multiplyScalar(I.dot($))).normalize(),A.crossVectors(P,$);const D=A.dot(u[T])<0?-1:1;c[T*4]=E.x,c[T*4+1]=E.y,c[T*4+2]=E.z,c[T*4+3]=D}for(let T=0,$=v.length;T<$;++T){const W=v[T],D=W.start,U=W.count;for(let F=D,Z=D+U;F<Z;F+=3)S(n[F+0]),S(n[F+1]),S(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new on(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Td=new ke,Fn=new Tu,Yo=new fi,Ad=new C,Ms=new C,ws=new C,bs=new C,il=new C,Qo=new C,Jo=new Ue,Zo=new Ue,ea=new Ue,Cd=new C,Rd=new C,Id=new C,ta=new C,na=new C;class sn extends ct{constructor(e=new hn,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(il.fromBufferAttribute(h,e),o?Qo.addScaledVector(il,u):Qo.addScaledVector(il.sub(t),u))}t.add(Qo)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(r),Fn.copy(e.ray).recast(e.near),Yo.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(Yo,Ad)===null||Fn.origin.distanceToSquared(Ad)>(e.far-e.near)**2))||(Td.copy(r).invert(),Fn.copy(e.ray).applyMatrix4(Td),n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,d=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=s[m.materialIndex],w=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,E=x;v<E;v+=3){const A=a.getX(v),I=a.getX(v+1),P=a.getX(v+2);o=ia(this,f,e,Fn,l,u,h,A,I,P),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);o=ia(this,s,e,Fn,l,u,h,w,x,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=s[m.materialIndex],w=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=w,E=x;v<E;v+=3){const A=v,I=v+1,P=v+2;o=ia(this,f,e,Fn,l,u,h,A,I,P),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=m,x=m+1,v=m+2;o=ia(this,s,e,Fn,l,u,h,w,x,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function v0(i,e,t,n,s,r,o,a){let c;if(e.side===un?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ci,a),c===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:i}}function ia(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ms),i.getVertexPosition(c,ws),i.getVertexPosition(l,bs);const u=v0(i,e,t,n,Ms,ws,bs,ta);if(u){s&&(Jo.fromBufferAttribute(s,a),Zo.fromBufferAttribute(s,c),ea.fromBufferAttribute(s,l),u.uv=Sn.getInterpolation(ta,Ms,ws,bs,Jo,Zo,ea,new Ue)),r&&(Jo.fromBufferAttribute(r,a),Zo.fromBufferAttribute(r,c),ea.fromBufferAttribute(r,l),u.uv2=Sn.getInterpolation(ta,Ms,ws,bs,Jo,Zo,ea,new Ue)),o&&(Cd.fromBufferAttribute(o,a),Rd.fromBufferAttribute(o,c),Id.fromBufferAttribute(o,l),u.normal=Sn.getInterpolation(ta,Ms,ws,bs,Cd,Rd,Id,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new C,materialIndex:0};Sn.getNormal(Ms,ws,bs,h.normal),u.face=h}return u}class Mo extends hn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(h,2));function g(_,m,f,w,x,v,E,A,I,P,S){const T=v/I,$=E/P,W=v/2,D=E/2,U=A/2,F=I+1,Z=P+1;let Q=0,q=0;const ne=new C;for(let ee=0;ee<Z;ee++){const Re=ee*$-D;for(let ie=0;ie<F;ie++){const z=ie*T-W;ne[_]=z*w,ne[m]=Re*x,ne[f]=U,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[f]=A>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(ie/I),h.push(1-ee/P),Q+=1}}for(let ee=0;ee<P;ee++)for(let Re=0;Re<I;Re++){const ie=d+Re+F*ee,z=d+Re+F*(ee+1),j=d+(Re+1)+F*(ee+1),ae=d+(Re+1)+F*ee;c.push(ie,z,ae),c.push(z,j,ae),q+=6}a.addGroup(p,q,S),p+=q,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=tr(i[t]);for(const s in n)e[s]=n[s]}return e}function y0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kp(i){return i.getRenderTarget()===null&&i.outputEncoding===Ye?kn:Jr}const x0={clone:tr,merge:tn};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yp extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends Yp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class w0 extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new nn(Es,Ts,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new nn(Es,Ts,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new nn(Es,Ts,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new nn(Es,Ts,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new nn(Es,Ts,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new nn(Es,Ts,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=oi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Qp extends Pt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b0 extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mo(5,5,5),r=new ns({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:bi});r.uniforms.tEquirect.value=t;const o=new sn(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=ln),new w0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const sl=new C,E0=new C,T0=new We;class zi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=sl.subVectors(n,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||T0.getNormalMatrix(e),s=this.coplanarPoint(sl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new fi,sa=new C;class Au{constructor(e=new zi,t=new zi,n=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],f=n[13],w=n[14],x=n[15];return t[0].setComponents(a-s,h-c,_-d,x-m).normalize(),t[1].setComponents(a+s,h+c,_+d,x+m).normalize(),t[2].setComponents(a+r,h+l,_+p,x+f).normalize(),t[3].setComponents(a-r,h-l,_-p,x-f).normalize(),t[4].setComponents(a-o,h-u,_-g,x-w).normalize(),t[5].setComponents(a+o,h+u,_+g,x+w).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(sa.x=s.normal.x>0?e.max.x:e.min.x,sa.y=s.normal.y>0?e.max.y:e.min.y,sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function A0(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,p=u.updateRange;i.bindBuffer(h,l),p.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,s(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class Cu extends hn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const w=f*d-o;for(let x=0;x<l;x++){const v=x*h-r;g.push(v,-w,0),_.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){const x=w+l*f,v=w+l*(f+1),E=w+1+l*(f+1),A=w+1+l*f;p.push(x,v,A),p.push(v,E,A)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.widthSegments,e.heightSegments)}}var C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0="vec3 transformed = vec3( position );",U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,k0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,K0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ty=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_y=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,My=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,wy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,by=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ny=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,By=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ix=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:C0,alphamap_pars_fragment:R0,alphatest_fragment:I0,alphatest_pars_fragment:L0,aomap_fragment:D0,aomap_pars_fragment:P0,begin_vertex:N0,beginnormal_vertex:U0,bsdfs:O0,iridescence_fragment:F0,bumpmap_pars_fragment:k0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:H0,color_fragment:G0,color_pars_fragment:W0,color_pars_vertex:q0,color_vertex:j0,common:$0,cube_uv_reflection_fragment:X0,defaultnormal_vertex:K0,displacementmap_pars_vertex:Y0,displacementmap_vertex:Q0,emissivemap_fragment:J0,emissivemap_pars_fragment:Z0,encodings_fragment:ey,encodings_pars_fragment:ty,envmap_fragment:ny,envmap_common_pars_fragment:iy,envmap_pars_fragment:sy,envmap_pars_vertex:ry,envmap_physical_pars_fragment:_y,envmap_vertex:oy,fog_vertex:ay,fog_pars_vertex:cy,fog_fragment:ly,fog_pars_fragment:uy,gradientmap_pars_fragment:hy,lightmap_fragment:dy,lightmap_pars_fragment:fy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:vy,lights_toon_pars_fragment:yy,lights_phong_fragment:xy,lights_phong_pars_fragment:Sy,lights_physical_fragment:My,lights_physical_pars_fragment:wy,lights_fragment_begin:by,lights_fragment_maps:Ey,lights_fragment_end:Ty,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Cy,logdepthbuf_pars_vertex:Ry,logdepthbuf_vertex:Iy,map_fragment:Ly,map_pars_fragment:Dy,map_particle_fragment:Py,map_particle_pars_fragment:Ny,metalnessmap_fragment:Uy,metalnessmap_pars_fragment:Oy,morphcolor_vertex:Fy,morphnormal_vertex:ky,morphtarget_pars_vertex:By,morphtarget_vertex:Vy,normal_fragment_begin:zy,normal_fragment_maps:Hy,normal_pars_fragment:Gy,normal_pars_vertex:Wy,normal_vertex:qy,normalmap_pars_fragment:jy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:Xy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Yy,output_fragment:Qy,packing:Jy,premultiplied_alpha_fragment:Zy,project_vertex:ex,dithering_fragment:tx,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:sx,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:ox,shadowmap_vertex:ax,shadowmask_pars_fragment:cx,skinbase_vertex:lx,skinning_pars_vertex:ux,skinning_vertex:hx,skinnormal_vertex:dx,specularmap_fragment:fx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:_x,transmission_pars_fragment:vx,uv_pars_fragment:yx,uv_pars_vertex:xx,uv_vertex:Sx,worldpos_vertex:Mx,background_vert:wx,background_frag:bx,backgroundCube_vert:Ex,backgroundCube_frag:Tx,cube_vert:Ax,cube_frag:Cx,depth_vert:Rx,depth_frag:Ix,distanceRGBA_vert:Lx,distanceRGBA_frag:Dx,equirect_vert:Px,equirect_frag:Nx,linedashed_vert:Ux,linedashed_frag:Ox,meshbasic_vert:Fx,meshbasic_frag:kx,meshlambert_vert:Bx,meshlambert_frag:Vx,meshmatcap_vert:zx,meshmatcap_frag:Hx,meshnormal_vert:Gx,meshnormal_frag:Wx,meshphong_vert:qx,meshphong_frag:jx,meshphysical_vert:$x,meshphysical_frag:Xx,meshtoon_vert:Kx,meshtoon_frag:Yx,points_vert:Qx,points_frag:Jx,shadow_vert:Zx,shadow_frag:eS,sprite_vert:tS,sprite_frag:nS},se={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}}},Vn={basic:{uniforms:tn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:tn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:tn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:tn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:tn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:tn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:tn([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:tn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:tn([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:tn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:tn([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:tn([se.common,se.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:tn([se.lights,se.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Vn.physical={uniforms:tn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ra={r:0,b:0,g:0};function iS(i,e,t,n,s,r,o){const a=new Ne(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(m,f){let w=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x));const v=i.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?_(a,c):x&&x.isColor&&(_(x,1),w=!0),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Za)?(u===void 0&&(u=new sn(new Mo(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:tr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.encoding!==Ye,(h!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new sn(new Cu(2,2),new ns({name:"BackgroundMaterial",uniforms:tr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=x.encoding!==Ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(ra,Kp(i)),n.buffers.color.setClear(ra.r,ra.g,ra.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function sS(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function h(U,F,Z,Q,q){let ne=!1;if(o){const ee=_(Q,Z,F);l!==ee&&(l=ee,p(l.object)),ne=f(U,Q,Z,q),ne&&w(U,Q,Z,q)}else{const ee=F.wireframe===!0;(l.geometry!==Q.id||l.program!==Z.id||l.wireframe!==ee)&&(l.geometry=Q.id,l.program=Z.id,l.wireframe=ee,ne=!0)}q!==null&&t.update(q,34963),(ne||u)&&(u=!1,P(U,F,Z,Q),q!==null&&i.bindBuffer(34963,t.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function _(U,F,Z){const Q=Z.wireframe===!0;let q=a[U.id];q===void 0&&(q={},a[U.id]=q);let ne=q[F.id];ne===void 0&&(ne={},q[F.id]=ne);let ee=ne[Q];return ee===void 0&&(ee=m(d()),ne[Q]=ee),ee}function m(U){const F=[],Z=[],Q=[];for(let q=0;q<s;q++)F[q]=0,Z[q]=0,Q[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:Q,object:U,attributes:{},index:null}}function f(U,F,Z,Q){const q=l.attributes,ne=F.attributes;let ee=0;const Re=Z.getAttributes();for(const ie in Re)if(Re[ie].location>=0){const j=q[ie];let ae=ne[ie];if(ae===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),j===void 0||j.attribute!==ae||ae&&j.data!==ae.data)return!0;ee++}return l.attributesNum!==ee||l.index!==Q}function w(U,F,Z,Q){const q={},ne=F.attributes;let ee=0;const Re=Z.getAttributes();for(const ie in Re)if(Re[ie].location>=0){let j=ne[ie];j===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(j=U.instanceColor));const ae={};ae.attribute=j,j&&j.data&&(ae.data=j.data),q[ie]=ae,ee++}l.attributes=q,l.attributesNum=ee,l.index=Q}function x(){const U=l.newAttributes;for(let F=0,Z=U.length;F<Z;F++)U[F]=0}function v(U){E(U,0)}function E(U,F){const Z=l.newAttributes,Q=l.enabledAttributes,q=l.attributeDivisors;Z[U]=1,Q[U]===0&&(i.enableVertexAttribArray(U),Q[U]=1),q[U]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,F),q[U]=F)}function A(){const U=l.newAttributes,F=l.enabledAttributes;for(let Z=0,Q=F.length;Z<Q;Z++)F[Z]!==U[Z]&&(i.disableVertexAttribArray(Z),F[Z]=0)}function I(U,F,Z,Q,q,ne){n.isWebGL2===!0&&(Z===5124||Z===5125)?i.vertexAttribIPointer(U,F,Z,q,ne):i.vertexAttribPointer(U,F,Z,Q,q,ne)}function P(U,F,Z,Q){if(n.isWebGL2===!1&&(U.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=Q.attributes,ne=Z.getAttributes(),ee=F.defaultAttributeValues;for(const Re in ne){const ie=ne[Re];if(ie.location>=0){let z=q[Re];if(z===void 0&&(Re==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),Re==="instanceColor"&&U.instanceColor&&(z=U.instanceColor)),z!==void 0){const j=z.normalized,ae=z.itemSize,ue=t.get(z);if(ue===void 0)continue;const O=ue.buffer,De=ue.type,Ae=ue.bytesPerElement;if(z.isInterleavedBufferAttribute){const re=z.data,we=re.stride,Je=z.offset;if(re.isInstancedInterleavedBuffer){for(let _e=0;_e<ie.locationSize;_e++)E(ie.location+_e,re.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let _e=0;_e<ie.locationSize;_e++)v(ie.location+_e);i.bindBuffer(34962,O);for(let _e=0;_e<ie.locationSize;_e++)I(ie.location+_e,ae/ie.locationSize,De,j,we*Ae,(Je+ae/ie.locationSize*_e)*Ae)}else{if(z.isInstancedBufferAttribute){for(let re=0;re<ie.locationSize;re++)E(ie.location+re,z.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let re=0;re<ie.locationSize;re++)v(ie.location+re);i.bindBuffer(34962,O);for(let re=0;re<ie.locationSize;re++)I(ie.location+re,ae/ie.locationSize,De,j,ae*Ae,ae/ie.locationSize*re*Ae)}}else if(ee!==void 0){const j=ee[Re];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(ie.location,j);break;case 3:i.vertexAttrib3fv(ie.location,j);break;case 4:i.vertexAttrib4fv(ie.location,j);break;default:i.vertexAttrib1fv(ie.location,j)}}}}A()}function S(){W();for(const U in a){const F=a[U];for(const Z in F){const Q=F[Z];for(const q in Q)g(Q[q].object),delete Q[q];delete F[Z]}delete a[U]}}function T(U){if(a[U.id]===void 0)return;const F=a[U.id];for(const Z in F){const Q=F[Z];for(const q in Q)g(Q[q].object),delete Q[q];delete F[Z]}delete a[U.id]}function $(U){for(const F in a){const Z=a[F];if(Z[U.id]===void 0)continue;const Q=Z[U.id];for(const q in Q)g(Q[q].object),delete Q[q];delete Z[U.id]}}function W(){D(),u=!0,l!==c&&(l=c,p(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:W,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:$,initAttributes:x,enableAttribute:v,disableUnusedAttributes:A}}function rS(i,e,t,n){const s=n.isWebGL2;let r;function o(l){r=l}function a(l,u){i.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,p;if(s)d=i,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function oS(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),d=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),_=i.getParameter(34921),m=i.getParameter(36347),f=i.getParameter(36348),w=i.getParameter(36349),x=d>0,v=o||e.has("OES_texture_float"),E=x&&v,A=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:A}}function aS(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new zi,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const w=r?0:n,x=w*4;let v=f.clippingState||null;c.value=v,v=u(g,d,x,p);for(let E=0;E!==x;++E)v[E]=t[E];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cS(i){let e=new WeakMap;function t(o,a){return a===Ol?o.mapping=Ks:a===Fl&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ol||a===Fl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new b0(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ru extends Yp{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ks=4,Ld=[.125,.215,.35,.446,.526,.582],Wi=20,rl=new Ru,Dd=new Ne;let ol=null;const Hi=(1+Math.sqrt(5))/2,As=1/Hi,Pd=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Hi,As),new C(0,Hi,-As),new C(As,0,Hi),new C(-As,0,Hi),new C(Hi,As,0),new C(-Hi,As,0)];class Nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ol=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol),e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Yr,format:wn,encoding:es,depthBuffer:!1},s=Ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lS(r)),this._blurMaterial=uS(r,e,t)}return s}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,rl)}_sceneToCubeUV(e,t,n,s){const a=new nn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Dd),u.toneMapping=oi,u.autoClear=!1;const p=new si({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new sn(new Mo,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Dd),_=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):w===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;oa(s,w*x,f>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ks||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;oa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,rl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Pd[(s-1)%Pd.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new sn(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Wi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Wi;m>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const f=[];let w=0;for(let I=0;I<Wi;++I){const P=I/_,S=Math.exp(-P*P/2);f.push(S),I===0?w+=S:I<m&&(w+=2*S)}for(let I=0;I<f.length;I++)f[I]=f[I]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],E=3*v*(s>x-ks?s-x+ks:0),A=4*(this._cubeSize-v);oa(t,E,A,3*v,2*v),c.setRenderTarget(t),c.render(h,rl)}}function lS(i){const e=[],t=[],n=[];let s=i;const r=i-ks+1+Ld.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ks?c=Ld[o-i+ks-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let A=0;A<p;A++){const I=A%3*2/3-1,P=A>2?0:-1,S=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];w.set(S,_*g*A),x.set(d,m*g*A);const T=[A,A,A,A,A,A];v.set(T,f*g*A)}const E=new hn;E.setAttribute("position",new on(w,_)),E.setAttribute("uv",new on(x,m)),E.setAttribute("faceIndex",new on(v,f)),e.push(E),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ud(i,e,t){const n=new ts(i,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function uS(i,e,t){const n=new Float32Array(Wi),s=new C(0,1,0);return new ns({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Od(){return new ns({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Fd(){return new ns({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hS(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ol||c===Fl,u=c===Ks||c===Ys;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Nd(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Nd(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function dS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fS(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],34962)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let x=0,v=w.length;x<v;x+=3){const E=w[x+0],A=w[x+1],I=w[x+2];d.push(E,A,A,I,I,E)}}else{const w=g.array;_=g.version;for(let x=0,v=w.length/3-1;x<v;x+=3){const E=x+0,A=x+1,I=x+2;d.push(E,A,A,I,I,E)}}const m=new(zp(d)?Xp:$p)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function pS(i,e,t,n){const s=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){i.drawElements(r,p,a,d*c),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let _,m;if(s)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,d*c,g),t.update(p,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function mS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gS(i,e){return i[0]-e[0]}function _S(i,e){return Math.abs(e[1])-Math.abs(i[1])}function vS(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new rt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let F=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),E===!0&&(S=3);let T=u.attributes.position.count*S,$=1;T>e.maxTextureSize&&($=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const W=new Float32Array(T*$*4*_),D=new Wp(W,T,$,_);D.type=Mi,D.needsUpdate=!0;const U=S*4;for(let Z=0;Z<_;Z++){const Q=A[Z],q=I[Z],ne=P[Z],ee=T*$*4*Z;for(let Re=0;Re<Q.count;Re++){const ie=Re*U;x===!0&&(o.fromBufferAttribute(Q,Re),W[ee+ie+0]=o.x,W[ee+ie+1]=o.y,W[ee+ie+2]=o.z,W[ee+ie+3]=0),v===!0&&(o.fromBufferAttribute(q,Re),W[ee+ie+4]=o.x,W[ee+ie+5]=o.y,W[ee+ie+6]=o.z,W[ee+ie+7]=0),E===!0&&(o.fromBufferAttribute(ne,Re),W[ee+ie+8]=o.x,W[ee+ie+9]=o.y,W[ee+ie+10]=o.z,W[ee+ie+11]=ne.itemSize===4?o.w:1)}}m={count:_,texture:D,size:new Ue(T,$)},r.set(u,m),u.addEventListener("dispose",F)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const w=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<g;v++){const E=_[v];E[0]=v,E[1]=d[v]}_.sort(_S);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(gS);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let w=0;for(let v=0;v<8;v++){const E=a[v],A=E[0],I=E[1];A!==Number.MAX_SAFE_INTEGER&&I?(m&&u.getAttribute("morphTarget"+v)!==m[A]&&u.setAttribute("morphTarget"+v,m[A]),f&&u.getAttribute("morphNormal"+v)!==f[A]&&u.setAttribute("morphNormal"+v,f[A]),s[v]=I,w+=I):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),f&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const x=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function yS(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Zp=new Pt,em=new Wp,tm=new c0,nm=new Qp,kd=[],Bd=[],Vd=new Float32Array(16),zd=new Float32Array(9),Hd=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tc(i,e){let t=Bd[e];t===void 0&&(t=new Int32Array(e),Bd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function SS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function MS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function wS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function bS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Hd.set(n),i.uniformMatrix2fv(this.addr,!1,Hd),Tt(t,n)}}function ES(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;zd.set(n),i.uniformMatrix3fv(this.addr,!1,zd),Tt(t,n)}}function TS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Vd.set(n),i.uniformMatrix4fv(this.addr,!1,Vd),Tt(t,n)}}function AS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function CS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function RS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function IS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function LS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function DS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function PS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function NS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function US(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Zp,s)}function OS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tm,s)}function FS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nm,s)}function kS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||em,s)}function BS(i){switch(i){case 5126:return xS;case 35664:return SS;case 35665:return MS;case 35666:return wS;case 35674:return bS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return AS;case 35667:case 35671:return CS;case 35668:case 35672:return RS;case 35669:case 35673:return IS;case 5125:return LS;case 36294:return DS;case 36295:return PS;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return kS}}function VS(i,e){i.uniform1fv(this.addr,e)}function zS(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function HS(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function GS(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function WS(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qS(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jS(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $S(i,e){i.uniform1iv(this.addr,e)}function XS(i,e){i.uniform2iv(this.addr,e)}function KS(i,e){i.uniform3iv(this.addr,e)}function YS(i,e){i.uniform4iv(this.addr,e)}function QS(i,e){i.uniform1uiv(this.addr,e)}function JS(i,e){i.uniform2uiv(this.addr,e)}function ZS(i,e){i.uniform3uiv(this.addr,e)}function eM(i,e){i.uniform4uiv(this.addr,e)}function tM(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zp,r[o])}function nM(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tm,r[o])}function iM(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nm,r[o])}function sM(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||em,r[o])}function rM(i){switch(i){case 5126:return VS;case 35664:return zS;case 35665:return HS;case 35666:return GS;case 35674:return WS;case 35675:return qS;case 35676:return jS;case 5124:case 35670:return $S;case 35667:case 35671:return XS;case 35668:case 35672:return KS;case 35669:case 35673:return YS;case 5125:return QS;case 36294:return JS;case 36295:return ZS;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return sM}}class oM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=BS(t.type)}}class aM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=rM(t.type)}}class cM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const al=/(\w+)(\])?(\[|\.)?/g;function Gd(i,e){i.seq.push(e),i.map[e.id]=e}function lM(i,e,t){const n=i.name,s=n.length;for(al.lastIndex=0;;){const r=al.exec(n),o=al.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Gd(t,l===void 0?new oM(a,i,e):new aM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new cM(a),Gd(t,h)),t=h}}}class Ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);lM(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Wd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let uM=0;function hM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function dM(i){switch(i){case es:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function qd(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hM(i.getShaderSource(e),o)}else return s}function fM(i,e){const t=dM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function pM(i,e){let t;switch(e){case mv:t="Linear";break;case gv:t="Reinhard";break;case _v:t="OptimizedCineon";break;case vv:t="ACESFilmic";break;case yv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kr).join(`
`)}function gM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _M(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function kr(i){return i!==""}function jd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(vM,yM)}function yM(i,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gl(t)}const xM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(i){return i.replace(xM,SM)}function SM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ks:case Ys:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function EM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dp:e="ENVMAP_BLENDING_MULTIPLY";break;case fv:e="ENVMAP_BLENDING_MIX";break;case pv:e="ENVMAP_BLENDING_ADD";break}return e}function TM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function AM(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=MM(t),l=wM(t),u=bM(t),h=EM(t),d=TM(t),p=t.isWebGL2?"":mM(t),g=gM(r),_=s.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(kr).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(kr).join(`
`),f.length>0&&(f+=`
`)):(m=[Kd(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),f=[p,Kd(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==oi?pM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,fM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=Gl(o),o=jd(o,t),o=$d(o,t),a=Gl(a),a=jd(a,t),a=$d(a,t),o=Xd(o),a=Xd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=w+m+o,v=w+f+a,E=Wd(s,35633,x),A=Wd(s,35632,v);if(s.attachShader(_,E),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),i.debug.checkShaderErrors){const S=s.getProgramInfoLog(_).trim(),T=s.getShaderInfoLog(E).trim(),$=s.getShaderInfoLog(A).trim();let W=!0,D=!0;if(s.getProgramParameter(_,35714)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,A);else{const U=qd(s,E,"vertex"),F=qd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,35715)+`

Program Info Log: `+S+`
`+U+`
`+F)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||$==="")&&(D=!1);D&&(this.diagnostics={runnable:W,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:$,prefix:f}})}s.deleteShader(E),s.deleteShader(A);let I;this.getUniforms=function(){return I===void 0&&(I=new Ra(s,_)),I};let P;return this.getAttributes=function(){return P===void 0&&(P=_M(s,_)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let CM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new IM(e),t.set(e,n)),n}}class IM{constructor(e){this.id=CM++,this.code=e,this.usedTimes=0}}function LM(i,e,t,n,s,r,o){const a=new qp,c=new RM,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===1?"uv2":"uv"}function m(S,T,$,W,D){const U=W.fog,F=D.geometry,Z=S.isMeshStandardMaterial?W.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),q=Q&&Q.mapping===Za?Q.image.height:null,ne=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Re=ee!==void 0?ee.length:0;let ie=0;F.morphAttributes.position!==void 0&&(ie=1),F.morphAttributes.normal!==void 0&&(ie=2),F.morphAttributes.color!==void 0&&(ie=3);let z,j,ae,ue;if(ne){const le=Vn[ne];z=le.vertexShader,j=le.fragmentShader}else z=S.vertexShader,j=S.fragmentShader,c.update(S),ae=c.getVertexShaderID(S),ue=c.getFragmentShaderID(S);const O=i.getRenderTarget(),De=D.isInstancedMesh===!0,Ae=!!S.map,re=!!S.matcap,we=!!Q,Je=!!S.aoMap,_e=!!S.lightMap,ze=!!S.bumpMap,At=!!S.normalMap,Ot=!!S.displacementMap,Ct=!!S.emissiveMap,Mt=!!S.metalnessMap,Ze=!!S.roughnessMap,pt=S.clearcoat>0,cn=S.iridescence>0,b=S.sheen>0,y=S.transmission>0,k=pt&&!!S.clearcoatMap,Y=pt&&!!S.clearcoatNormalMap,te=pt&&!!S.clearcoatRoughnessMap,ce=cn&&!!S.iridescenceMap,be=cn&&!!S.iridescenceThicknessMap,de=b&&!!S.sheenColorMap,H=b&&!!S.sheenRoughnessMap,pe=!!S.specularMap,ye=!!S.specularColorMap,Me=!!S.specularIntensityMap,he=y&&!!S.transmissionMap,me=y&&!!S.thicknessMap,qe=!!S.gradientMap,nt=!!S.alphaMap,gt=S.alphaTest>0,R=!!S.extensions,V=!!F.attributes.uv2;return{isWebGL2:u,shaderID:ne,shaderName:S.type,vertexShader:z,fragmentShader:j,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:De,instancingColor:De&&D.instanceColor!==null,supportsVertexTextures:d,outputEncoding:O===null?i.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:es,map:Ae,matcap:re,envMap:we,envMapMode:we&&Q.mapping,envMapCubeUVHeight:q,aoMap:Je,lightMap:_e,bumpMap:ze,normalMap:At,displacementMap:d&&Ot,emissiveMap:Ct,normalMapObjectSpace:At&&S.normalMapType===Bv,normalMapTangentSpace:At&&S.normalMapType===Fp,decodeVideoTexture:Ae&&S.map.isVideoTexture===!0&&S.map.encoding===Ye,metalnessMap:Mt,roughnessMap:Ze,clearcoat:pt,clearcoatMap:k,clearcoatNormalMap:Y,clearcoatRoughnessMap:te,iridescence:cn,iridescenceMap:ce,iridescenceThicknessMap:be,sheen:b,sheenColorMap:de,sheenRoughnessMap:H,specularMap:pe,specularColorMap:ye,specularIntensityMap:Me,transmission:y,transmissionMap:he,thicknessMap:me,gradientMap:qe,opaque:S.transparent===!1&&S.blending===Vs,alphaMap:nt,alphaTest:gt,combine:S.combine,mapUv:Ae&&_(S.map.channel),aoMapUv:Je&&_(S.aoMap.channel),lightMapUv:_e&&_(S.lightMap.channel),bumpMapUv:ze&&_(S.bumpMap.channel),normalMapUv:At&&_(S.normalMap.channel),displacementMapUv:Ot&&_(S.displacementMap.channel),emissiveMapUv:Ct&&_(S.emissiveMap.channel),metalnessMapUv:Mt&&_(S.metalnessMap.channel),roughnessMapUv:Ze&&_(S.roughnessMap.channel),clearcoatMapUv:k&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Y&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:H&&_(S.sheenRoughnessMap.channel),specularMapUv:pe&&_(S.specularMap.channel),specularColorMapUv:ye&&_(S.specularColorMap.channel),specularIntensityMapUv:Me&&_(S.specularIntensityMap.channel),transmissionMapUv:he&&_(S.transmissionMap.channel),thicknessMapUv:me&&_(S.thicknessMap.channel),alphaMapUv:nt&&_(S.alphaMap.channel),vertexTangents:At&&!!F.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs2:V,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Ae||nt),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:S.toneMapped?i.toneMapping:oi,useLegacyLights:i.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:R&&S.extensions.derivatives===!0,extensionFragDepth:R&&S.extensions.fragDepth===!0,extensionDrawBuffers:R&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:R&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const $ in S.defines)T.push($),T.push(S.defines[$]);return S.isRawShaderMaterial===!1&&(w(T,S),x(T,S),T.push(i.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function w(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUvs2&&a.enable(13),T.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.decodeVideoTexture&&a.enable(17),T.opaque&&a.enable(18),T.pointsUvs&&a.enable(19),S.push(a.mask)}function v(S){const T=g[S.type];let $;if(T){const W=Vn[T];$=x0.clone(W.uniforms)}else $=S.uniforms;return $}function E(S,T){let $;for(let W=0,D=l.length;W<D;W++){const U=l[W];if(U.cacheKey===T){$=U,++$.usedTimes;break}}return $===void 0&&($=new AM(i,T,S,r),l.push($)),$}function A(S){if(--S.usedTimes===0){const T=l.indexOf(S);l[T]=l[l.length-1],l.pop(),S.destroy()}}function I(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:I,programs:l,dispose:P}}function DM(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function PM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qd(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||PM),n.length>1&&n.sort(d||Yd),s.length>1&&s.sort(d||Yd)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function NM(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qd,i.set(n,[o])):s>=r.length?(o=new Qd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function UM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ne};break;case"SpotLight":t={position:new C,direction:new C,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function OM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let FM=0;function kM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function BM(i,e){const t=new UM,n=OM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new C);const r=new C,o=new ke,a=new ke;function c(u,h){let d=0,p=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let _=0,m=0,f=0,w=0,x=0,v=0,E=0,A=0,I=0,P=0;u.sort(kM);const S=h===!0?Math.PI:1;for(let $=0,W=u.length;$<W;$++){const D=u[$],U=D.color,F=D.intensity,Z=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=U.r*F*S,p+=U.g*F*S,g+=U.b*F*S;else if(D.isLightProbe)for(let q=0;q<9;q++)s.probe[q].addScaledVector(D.sh.coefficients[q],F);else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const ne=D.shadow,ee=n.get(D);ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,s.directionalShadow[_]=ee,s.directionalShadowMap[_]=Q,s.directionalShadowMatrix[_]=D.shadow.matrix,v++}s.directional[_]=q,_++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(U).multiplyScalar(F*S),q.distance=Z,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,s.spot[f]=q;const ne=D.shadow;if(D.map&&(s.spotLightMap[I]=D.map,I++,ne.updateMatrices(D),D.castShadow&&P++),s.spotLightMatrix[f]=ne.matrix,D.castShadow){const ee=n.get(D);ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,s.spotShadow[f]=ee,s.spotShadowMap[f]=Q,A++}f++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(U).multiplyScalar(F),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),s.rectArea[w]=q,w++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*S),q.distance=D.distance,q.decay=D.decay,D.castShadow){const ne=D.shadow,ee=n.get(D);ee.shadowBias=ne.bias,ee.shadowNormalBias=ne.normalBias,ee.shadowRadius=ne.radius,ee.shadowMapSize=ne.mapSize,ee.shadowCameraNear=ne.camera.near,ee.shadowCameraFar=ne.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=Q,s.pointShadowMatrix[m]=D.shadow.matrix,E++}s.point[m]=q,m++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(F*S),q.groundColor.copy(D.groundColor).multiplyScalar(F*S),s.hemi[x]=q,x++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==_||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==w||T.hemiLength!==x||T.numDirectionalShadows!==v||T.numPointShadows!==E||T.numSpotShadows!==A||T.numSpotMaps!==I)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=w,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=A+I-P,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=P,T.directionalLength=_,T.pointLength=m,T.spotLength=f,T.rectAreaLength=w,T.hemiLength=x,T.numDirectionalShadows=v,T.numPointShadows=E,T.numSpotShadows=A,T.numSpotMaps=I,s.version=FM++)}function l(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let w=0,x=u.length;w<x;w++){const v=u[w];if(v.isDirectionalLight){const E=s.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),d++}else if(v.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),g++}else if(v.isRectAreaLight){const E=s.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(v.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function Jd(i,e){const t=new BM(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function VM(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Jd(i,e),t.set(r,[c])):o>=a.length?(c=new Jd(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class zM extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HM extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qM(i,e,t){let n=new Au;const s=new Ue,r=new Ue,o=new rt,a=new zM({depthPacking:kv}),c=new HM,l={},u=t.maxTextureSize,h={[ci]:un,[un]:ci,[zn]:zn},d=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new sn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rp,this.render=function(v,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const I=i.getRenderTarget(),P=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),T=i.state;T.setBlending(bi),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let $=0,W=v.length;$<W;$++){const D=v[$],U=D.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const F=U.getFrameExtents();if(s.multiply(F),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/F.x),s.x=r.x*F.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/F.y),s.y=r.y*F.y,U.mapSize.y=r.y)),U.map===null){const Q=this.type!==Fr?{minFilter:Dt,magFilter:Dt}:{};U.map=new ts(s.x,s.y,Q),U.map.texture.name=D.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const Z=U.getViewportCount();for(let Q=0;Q<Z;Q++){const q=U.getViewport(Q);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),T.viewport(o),U.updateMatrices(D,Q),n=U.getFrustum(),x(E,A,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===Fr&&f(U,A),U.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(I,P,S)};function f(v,E){const A=e.update(_);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ts(s.x,s.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,A,d,_,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,A,p,_,null)}function w(v,E,A,I){let P=null;const S=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(S!==void 0)P=S;else if(P=A.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const T=P.uuid,$=E.uuid;let W=l[T];W===void 0&&(W={},l[T]=W);let D=W[$];D===void 0&&(D=P.clone(),W[$]=D),P=D}if(P.visible=E.visible,P.wireframe=E.wireframe,I===Fr?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:h[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const T=i.properties.get(P);T.light=A}return P}function x(v,E,A,I,P){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===Fr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const $=e.update(v),W=v.material;if(Array.isArray(W)){const D=$.groups;for(let U=0,F=D.length;U<F;U++){const Z=D[U],Q=W[Z.materialIndex];if(Q&&Q.visible){const q=w(v,Q,I,P);i.renderBufferDirect(A,null,$,q,v,Z)}}}else if(W.visible){const D=w(v,W,I,P);i.renderBufferDirect(A,null,$,D,v,null)}}const T=v.children;for(let $=0,W=T.length;$<W;$++)x(T[$],E,A,I,P)}}function jM(i,e,t){const n=t.isWebGL2;function s(){let R=!1;const V=new rt;let K=null;const le=new rt(0,0,0,0);return{setMask:function(ge){K!==ge&&!R&&(i.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){R=ge},setClear:function(ge,ot,dt,Vt,pi){pi===!0&&(ge*=Vt,ot*=Vt,dt*=Vt),V.set(ge,ot,dt,Vt),le.equals(V)===!1&&(i.clearColor(ge,ot,dt,Vt),le.copy(V))},reset:function(){R=!1,K=null,le.set(-1,0,0,0)}}}function r(){let R=!1,V=null,K=null,le=null;return{setTest:function(ge){ge?O(2929):De(2929)},setMask:function(ge){V!==ge&&!R&&(i.depthMask(ge),V=ge)},setFunc:function(ge){if(K!==ge){switch(ge){case ov:i.depthFunc(512);break;case av:i.depthFunc(519);break;case cv:i.depthFunc(513);break;case Ul:i.depthFunc(515);break;case lv:i.depthFunc(514);break;case uv:i.depthFunc(518);break;case hv:i.depthFunc(516);break;case dv:i.depthFunc(517);break;default:i.depthFunc(515)}K=ge}},setLocked:function(ge){R=ge},setClear:function(ge){le!==ge&&(i.clearDepth(ge),le=ge)},reset:function(){R=!1,V=null,K=null,le=null}}}function o(){let R=!1,V=null,K=null,le=null,ge=null,ot=null,dt=null,Vt=null,pi=null;return{setTest:function(_t){R||(_t?O(2960):De(2960))},setMask:function(_t){V!==_t&&!R&&(i.stencilMask(_t),V=_t)},setFunc:function(_t,_n,On){(K!==_t||le!==_n||ge!==On)&&(i.stencilFunc(_t,_n,On),K=_t,le=_n,ge=On)},setOp:function(_t,_n,On){(ot!==_t||dt!==_n||Vt!==On)&&(i.stencilOp(_t,_n,On),ot=_t,dt=_n,Vt=On)},setLocked:function(_t){R=_t},setClear:function(_t){pi!==_t&&(i.clearStencil(_t),pi=_t)},reset:function(){R=!1,V=null,K=null,le=null,ge=null,ot=null,dt=null,Vt=null,pi=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,w=null,x=null,v=null,E=null,A=null,I=null,P=null,S=!1,T=null,$=null,W=null,D=null,U=null;const F=i.getParameter(35661);let Z=!1,Q=0;const q=i.getParameter(7938);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=Q>=2);let ne=null,ee={};const Re=i.getParameter(3088),ie=i.getParameter(2978),z=new rt().fromArray(Re),j=new rt().fromArray(ie);function ae(R,V,K){const le=new Uint8Array(4),ge=i.createTexture();i.bindTexture(R,ge),i.texParameteri(R,10241,9728),i.texParameteri(R,10240,9728);for(let ot=0;ot<K;ot++)i.texImage2D(V+ot,0,6408,1,1,0,6408,5121,le);return ge}const ue={};ue[3553]=ae(3553,3553,1),ue[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),O(2929),c.setFunc(Ul),Ot(!1),Ct(Fh),O(2884),ze(bi);function O(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function De(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function Ae(R,V){return p[R]!==V?(i.bindFramebuffer(R,V),p[R]=V,n&&(R===36009&&(p[36160]=V),R===36160&&(p[36009]=V)),!0):!1}function re(R,V){let K=_,le=!1;if(R)if(K=g.get(V),K===void 0&&(K=[],g.set(V,K)),R.isWebGLMultipleRenderTargets){const ge=R.texture;if(K.length!==ge.length||K[0]!==36064){for(let ot=0,dt=ge.length;ot<dt;ot++)K[ot]=36064+ot;K.length=ge.length,le=!0}}else K[0]!==36064&&(K[0]=36064,le=!0);else K[0]!==1029&&(K[0]=1029,le=!0);le&&(t.isWebGL2?i.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function we(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const Je={[Us]:32774,[K_]:32778,[Y_]:32779};if(n)Je[zh]=32775,Je[Hh]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Je[zh]=R.MIN_EXT,Je[Hh]=R.MAX_EXT)}const _e={[Q_]:0,[J_]:1,[Z_]:768,[Ip]:770,[rv]:776,[iv]:774,[tv]:772,[ev]:769,[Lp]:771,[sv]:775,[nv]:773};function ze(R,V,K,le,ge,ot,dt,Vt){if(R===bi){f===!0&&(De(3042),f=!1);return}if(f===!1&&(O(3042),f=!0),R!==X_){if(R!==w||Vt!==S){if((x!==Us||A!==Us)&&(i.blendEquation(32774),x=Us,A=Us),Vt)switch(R){case Vs:i.blendFuncSeparate(1,771,1,771);break;case kh:i.blendFunc(1,1);break;case Bh:i.blendFuncSeparate(0,769,0,1);break;case Vh:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Vs:i.blendFuncSeparate(770,771,1,771);break;case kh:i.blendFunc(770,1);break;case Bh:i.blendFuncSeparate(0,769,0,1);break;case Vh:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}v=null,E=null,I=null,P=null,w=R,S=Vt}return}ge=ge||V,ot=ot||K,dt=dt||le,(V!==x||ge!==A)&&(i.blendEquationSeparate(Je[V],Je[ge]),x=V,A=ge),(K!==v||le!==E||ot!==I||dt!==P)&&(i.blendFuncSeparate(_e[K],_e[le],_e[ot],_e[dt]),v=K,E=le,I=ot,P=dt),w=R,S=!1}function At(R,V){R.side===zn?De(2884):O(2884);let K=R.side===un;V&&(K=!K),Ot(K),R.blending===Vs&&R.transparent===!1?ze(bi):ze(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const le=R.stencilWrite;l.setTest(le),le&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ze(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?O(32926):De(32926)}function Ot(R){T!==R&&(R?i.frontFace(2304):i.frontFace(2305),T=R)}function Ct(R){R!==q_?(O(2884),R!==$&&(R===Fh?i.cullFace(1029):R===j_?i.cullFace(1028):i.cullFace(1032))):De(2884),$=R}function Mt(R){R!==W&&(Z&&i.lineWidth(R),W=R)}function Ze(R,V,K){R?(O(32823),(D!==V||U!==K)&&(i.polygonOffset(V,K),D=V,U=K)):De(32823)}function pt(R){R?O(3089):De(3089)}function cn(R){R===void 0&&(R=33984+F-1),ne!==R&&(i.activeTexture(R),ne=R)}function b(R,V,K){K===void 0&&(ne===null?K=33984+F-1:K=ne);let le=ee[K];le===void 0&&(le={type:void 0,texture:void 0},ee[K]=le),(le.type!==R||le.texture!==V)&&(ne!==K&&(i.activeTexture(K),ne=K),i.bindTexture(R,V||ue[R]),le.type=R,le.texture=V)}function y(){const R=ee[ne];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(R){z.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),z.copy(R))}function me(R){j.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),j.copy(R))}function qe(R,V){let K=h.get(V);K===void 0&&(K=new WeakMap,h.set(V,K));let le=K.get(R);le===void 0&&(le=i.getUniformBlockIndex(V,R.name),K.set(R,le))}function nt(R,V){const le=h.get(V).get(R);u.get(V)!==le&&(i.uniformBlockBinding(V,le,R.__bindingPointIndex),u.set(V,le))}function gt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ne=null,ee={},p={},g=new WeakMap,_=[],m=null,f=!1,w=null,x=null,v=null,E=null,A=null,I=null,P=null,S=!1,T=null,$=null,W=null,D=null,U=null,z.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:O,disable:De,bindFramebuffer:Ae,drawBuffers:re,useProgram:we,setBlending:ze,setMaterial:At,setFlipSided:Ot,setCullFace:Ct,setLineWidth:Mt,setPolygonOffset:Ze,setScissorTest:pt,activeTexture:cn,bindTexture:b,unbindTexture:y,compressedTexImage2D:k,compressedTexImage3D:Y,texImage2D:ye,texImage3D:Me,updateUBOMapping:qe,uniformBlockBinding:nt,texStorage2D:H,texStorage3D:pe,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:be,compressedTexSubImage3D:de,scissor:he,viewport:me,reset:gt}}function $M(i,e,t,n,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,y){return f?new OffscreenCanvas(b,y):Zr("canvas")}function x(b,y,k,Y){let te=1;if((b.width>Y||b.height>Y)&&(te=Y/Math.max(b.width,b.height)),te<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ce=y?Vp:Math.floor,be=ce(te*b.width),de=ce(te*b.height);_===void 0&&(_=w(be,de));const H=k?w(be,de):_;return H.width=be,H.height=de,H.getContext("2d").drawImage(b,0,0,be,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+be+"x"+de+")."),H}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function v(b){return Hl(b.width)&&Hl(b.height)}function E(b){return a?!1:b.wrapS!==Mn||b.wrapT!==Mn||b.minFilter!==Dt&&b.minFilter!==ln}function A(b,y){return b.generateMipmaps&&y&&b.minFilter!==Dt&&b.minFilter!==ln}function I(b){i.generateMipmap(b)}function P(b,y,k,Y,te=!1){if(a===!1)return y;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=y;return y===6403&&(k===5126&&(ce=33326),k===5131&&(ce=33325),k===5121&&(ce=33321)),y===33319&&(k===5126&&(ce=33328),k===5131&&(ce=33327),k===5121&&(ce=33323)),y===6408&&(k===5126&&(ce=34836),k===5131&&(ce=34842),k===5121&&(ce=Y===Ye&&te===!1?35907:32856),k===32819&&(ce=32854),k===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function S(b,y,k){return A(b,k)===!0||b.isFramebufferTexture&&b.minFilter!==Dt&&b.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function T(b){return b===Dt||b===kl||b===Ca?9728:9729}function $(b){const y=b.target;y.removeEventListener("dispose",$),D(y),y.isVideoTexture&&g.delete(y)}function W(b){const y=b.target;y.removeEventListener("dispose",W),F(y)}function D(b){const y=n.get(b);if(y.__webglInit===void 0)return;const k=b.source,Y=m.get(k);if(Y){const te=Y[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&U(b),Object.keys(Y).length===0&&m.delete(k)}n.remove(b)}function U(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const k=b.source,Y=m.get(k);delete Y[y.__cacheKey],o.memory.textures--}function F(b){const y=b.texture,k=n.get(b),Y=n.get(y);if(Y.__webglTexture!==void 0&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)i.deleteFramebuffer(k.__webglFramebuffer[te]),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[te]);else{if(i.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,ce=y.length;te<ce;te++){const be=n.get(y[te]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(y[te])}n.remove(y),n.remove(b)}let Z=0;function Q(){Z=0}function q(){const b=Z;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),Z+=1,b}function ne(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.encoding),y.join()}function ee(b,y){const k=n.get(b);if(b.isVideoTexture&&pt(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const Y=b.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(k,b,y);return}}t.bindTexture(3553,k.__webglTexture,33984+y)}function Re(b,y){const k=n.get(b);if(b.version>0&&k.__version!==b.version){De(k,b,y);return}t.bindTexture(35866,k.__webglTexture,33984+y)}function ie(b,y){const k=n.get(b);if(b.version>0&&k.__version!==b.version){De(k,b,y);return}t.bindTexture(32879,k.__webglTexture,33984+y)}function z(b,y){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Ae(k,b,y);return}t.bindTexture(34067,k.__webglTexture,33984+y)}const j={[Qs]:10497,[Mn]:33071,[Na]:33648},ae={[Dt]:9728,[kl]:9984,[Ca]:9986,[ln]:9729,[Np]:9985,[Ji]:9987};function ue(b,y,k){if(k?(i.texParameteri(b,10242,j[y.wrapS]),i.texParameteri(b,10243,j[y.wrapT]),(b===32879||b===35866)&&i.texParameteri(b,32882,j[y.wrapR]),i.texParameteri(b,10240,ae[y.magFilter]),i.texParameteri(b,10241,ae[y.minFilter])):(i.texParameteri(b,10242,33071),i.texParameteri(b,10243,33071),(b===32879||b===35866)&&i.texParameteri(b,32882,33071),(y.wrapS!==Mn||y.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,10240,T(y.magFilter)),i.texParameteri(b,10241,T(y.minFilter)),y.minFilter!==Dt&&y.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Dt||y.minFilter!==Ca&&y.minFilter!==Ji||y.type===Mi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Yr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function O(b,y){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",$));const Y=y.source;let te=m.get(Y);te===void 0&&(te={},m.set(Y,te));const ce=ne(y);if(ce!==b.__cacheKey){te[ce]===void 0&&(te[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[ce].usedTimes++;const be=te[b.__cacheKey];be!==void 0&&(te[b.__cacheKey].usedTimes--,be.usedTimes===0&&U(y)),b.__cacheKey=ce,b.__webglTexture=te[ce].texture}return k}function De(b,y,k){let Y=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=35866),y.isData3DTexture&&(Y=32879);const te=O(b,y),ce=y.source;t.bindTexture(Y,b.__webglTexture,33984+k);const be=n.get(ce);if(ce.version!==be.__version||te===!0){t.activeTexture(33984+k),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const de=E(y)&&v(y.image)===!1;let H=x(y.image,de,!1,u);H=cn(y,H);const pe=v(H)||a,ye=r.convert(y.format,y.encoding);let Me=r.convert(y.type),he=P(y.internalFormat,ye,Me,y.encoding,y.isVideoTexture);ue(Y,y,pe);let me;const qe=y.mipmaps,nt=a&&y.isVideoTexture!==!0,gt=be.__version===void 0||te===!0,R=S(y,H,pe);if(y.isDepthTexture)he=6402,a?y.type===Mi?he=36012:y.type===qi?he=33190:y.type===zs?he=35056:he=33189:y.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Yi&&he===6402&&y.type!==Up&&y.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=qi,Me=r.convert(y.type)),y.format===Js&&he===6402&&(he=34041,y.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=zs,Me=r.convert(y.type))),gt&&(nt?t.texStorage2D(3553,1,he,H.width,H.height):t.texImage2D(3553,0,he,H.width,H.height,0,ye,Me,null));else if(y.isDataTexture)if(qe.length>0&&pe){nt&&gt&&t.texStorage2D(3553,R,he,qe[0].width,qe[0].height);for(let V=0,K=qe.length;V<K;V++)me=qe[V],nt?t.texSubImage2D(3553,V,0,0,me.width,me.height,ye,Me,me.data):t.texImage2D(3553,V,he,me.width,me.height,0,ye,Me,me.data);y.generateMipmaps=!1}else nt?(gt&&t.texStorage2D(3553,R,he,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,ye,Me,H.data)):t.texImage2D(3553,0,he,H.width,H.height,0,ye,Me,H.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){nt&&gt&&t.texStorage3D(35866,R,he,qe[0].width,qe[0].height,H.depth);for(let V=0,K=qe.length;V<K;V++)me=qe[V],y.format!==wn?ye!==null?nt?t.compressedTexSubImage3D(35866,V,0,0,0,me.width,me.height,H.depth,ye,me.data,0,0):t.compressedTexImage3D(35866,V,he,me.width,me.height,H.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(35866,V,0,0,0,me.width,me.height,H.depth,ye,Me,me.data):t.texImage3D(35866,V,he,me.width,me.height,H.depth,0,ye,Me,me.data)}else{nt&&gt&&t.texStorage2D(3553,R,he,qe[0].width,qe[0].height);for(let V=0,K=qe.length;V<K;V++)me=qe[V],y.format!==wn?ye!==null?nt?t.compressedTexSubImage2D(3553,V,0,0,me.width,me.height,ye,me.data):t.compressedTexImage2D(3553,V,he,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(3553,V,0,0,me.width,me.height,ye,Me,me.data):t.texImage2D(3553,V,he,me.width,me.height,0,ye,Me,me.data)}else if(y.isDataArrayTexture)nt?(gt&&t.texStorage3D(35866,R,he,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,ye,Me,H.data)):t.texImage3D(35866,0,he,H.width,H.height,H.depth,0,ye,Me,H.data);else if(y.isData3DTexture)nt?(gt&&t.texStorage3D(32879,R,he,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,ye,Me,H.data)):t.texImage3D(32879,0,he,H.width,H.height,H.depth,0,ye,Me,H.data);else if(y.isFramebufferTexture){if(gt)if(nt)t.texStorage2D(3553,R,he,H.width,H.height);else{let V=H.width,K=H.height;for(let le=0;le<R;le++)t.texImage2D(3553,le,he,V,K,0,ye,Me,null),V>>=1,K>>=1}}else if(qe.length>0&&pe){nt&&gt&&t.texStorage2D(3553,R,he,qe[0].width,qe[0].height);for(let V=0,K=qe.length;V<K;V++)me=qe[V],nt?t.texSubImage2D(3553,V,0,0,ye,Me,me):t.texImage2D(3553,V,he,ye,Me,me);y.generateMipmaps=!1}else nt?(gt&&t.texStorage2D(3553,R,he,H.width,H.height),t.texSubImage2D(3553,0,0,0,ye,Me,H)):t.texImage2D(3553,0,he,ye,Me,H);A(y,pe)&&I(Y),be.__version=ce.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ae(b,y,k){if(y.image.length!==6)return;const Y=O(b,y),te=y.source;t.bindTexture(34067,b.__webglTexture,33984+k);const ce=n.get(te);if(te.version!==ce.__version||Y===!0){t.activeTexture(33984+k),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const be=y.isCompressedTexture||y.image[0].isCompressedTexture,de=y.image[0]&&y.image[0].isDataTexture,H=[];for(let V=0;V<6;V++)!be&&!de?H[V]=x(y.image[V],!1,!0,l):H[V]=de?y.image[V].image:y.image[V],H[V]=cn(y,H[V]);const pe=H[0],ye=v(pe)||a,Me=r.convert(y.format,y.encoding),he=r.convert(y.type),me=P(y.internalFormat,Me,he,y.encoding),qe=a&&y.isVideoTexture!==!0,nt=ce.__version===void 0||Y===!0;let gt=S(y,pe,ye);ue(34067,y,ye);let R;if(be){qe&&nt&&t.texStorage2D(34067,gt,me,pe.width,pe.height);for(let V=0;V<6;V++){R=H[V].mipmaps;for(let K=0;K<R.length;K++){const le=R[K];y.format!==wn?Me!==null?qe?t.compressedTexSubImage2D(34069+V,K,0,0,le.width,le.height,Me,le.data):t.compressedTexImage2D(34069+V,K,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(34069+V,K,0,0,le.width,le.height,Me,he,le.data):t.texImage2D(34069+V,K,me,le.width,le.height,0,Me,he,le.data)}}}else{R=y.mipmaps,qe&&nt&&(R.length>0&&gt++,t.texStorage2D(34067,gt,me,H[0].width,H[0].height));for(let V=0;V<6;V++)if(de){qe?t.texSubImage2D(34069+V,0,0,0,H[V].width,H[V].height,Me,he,H[V].data):t.texImage2D(34069+V,0,me,H[V].width,H[V].height,0,Me,he,H[V].data);for(let K=0;K<R.length;K++){const ge=R[K].image[V].image;qe?t.texSubImage2D(34069+V,K+1,0,0,ge.width,ge.height,Me,he,ge.data):t.texImage2D(34069+V,K+1,me,ge.width,ge.height,0,Me,he,ge.data)}}else{qe?t.texSubImage2D(34069+V,0,0,0,Me,he,H[V]):t.texImage2D(34069+V,0,me,Me,he,H[V]);for(let K=0;K<R.length;K++){const le=R[K];qe?t.texSubImage2D(34069+V,K+1,0,0,Me,he,le.image[V]):t.texImage2D(34069+V,K+1,me,Me,he,le.image[V])}}}A(y,ye)&&I(34067),ce.__version=te.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function re(b,y,k,Y,te){const ce=r.convert(k.format,k.encoding),be=r.convert(k.type),de=P(k.internalFormat,ce,be,k.encoding);n.get(y).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,de,y.width,y.height,y.depth,0,ce,be,null):t.texImage2D(te,0,de,y.width,y.height,0,ce,be,null)),t.bindFramebuffer(36160,b),Ze(y)?d.framebufferTexture2DMultisampleEXT(36160,Y,te,n.get(k).__webglTexture,0,Mt(y)):(te===3553||te>=34069&&te<=34074)&&i.framebufferTexture2D(36160,Y,te,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(b,y,k){if(i.bindRenderbuffer(36161,b),y.depthBuffer&&!y.stencilBuffer){let Y=33189;if(k||Ze(y)){const te=y.depthTexture;te&&te.isDepthTexture&&(te.type===Mi?Y=36012:te.type===qi&&(Y=33190));const ce=Mt(y);Ze(y)?d.renderbufferStorageMultisampleEXT(36161,ce,Y,y.width,y.height):i.renderbufferStorageMultisample(36161,ce,Y,y.width,y.height)}else i.renderbufferStorage(36161,Y,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,b)}else if(y.depthBuffer&&y.stencilBuffer){const Y=Mt(y);k&&Ze(y)===!1?i.renderbufferStorageMultisample(36161,Y,35056,y.width,y.height):Ze(y)?d.renderbufferStorageMultisampleEXT(36161,Y,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,b)}else{const Y=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let te=0;te<Y.length;te++){const ce=Y[te],be=r.convert(ce.format,ce.encoding),de=r.convert(ce.type),H=P(ce.internalFormat,be,de,ce.encoding),pe=Mt(y);k&&Ze(y)===!1?i.renderbufferStorageMultisample(36161,pe,H,y.width,y.height):Ze(y)?d.renderbufferStorageMultisampleEXT(36161,pe,H,y.width,y.height):i.renderbufferStorage(36161,H,y.width,y.height)}}i.bindRenderbuffer(36161,null)}function Je(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ee(y.depthTexture,0);const Y=n.get(y.depthTexture).__webglTexture,te=Mt(y);if(y.depthTexture.format===Yi)Ze(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,te):i.framebufferTexture2D(36160,36096,3553,Y,0);else if(y.depthTexture.format===Js)Ze(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,te):i.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function _e(b){const y=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Je(y.__webglFramebuffer,b)}else if(k){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]=i.createRenderbuffer(),we(y.__webglDepthbuffer[Y],b,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),we(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function ze(b,y,k){const Y=n.get(b);y!==void 0&&re(Y.__webglFramebuffer,b,b.texture,36064,3553),k!==void 0&&_e(b)}function At(b){const y=b.texture,k=n.get(b),Y=n.get(y);b.addEventListener("dispose",W),b.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,ce=b.isWebGLMultipleRenderTargets===!0,be=v(b)||a;if(te){k.__webglFramebuffer=[];for(let de=0;de<6;de++)k.__webglFramebuffer[de]=i.createFramebuffer()}else{if(k.__webglFramebuffer=i.createFramebuffer(),ce)if(s.drawBuffers){const de=b.texture;for(let H=0,pe=de.length;H<pe;H++){const ye=n.get(de[H]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ze(b)===!1){const de=ce?y:[y];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let H=0;H<de.length;H++){const pe=de[H];k.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(36161,k.__webglColorRenderbuffer[H]);const ye=r.convert(pe.format,pe.encoding),Me=r.convert(pe.type),he=P(pe.internalFormat,ye,Me,pe.encoding,b.isXRRenderTarget===!0),me=Mt(b);i.renderbufferStorageMultisample(36161,me,he,b.width,b.height),i.framebufferRenderbuffer(36160,36064+H,36161,k.__webglColorRenderbuffer[H])}i.bindRenderbuffer(36161,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),we(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,Y.__webglTexture),ue(34067,y,be);for(let de=0;de<6;de++)re(k.__webglFramebuffer[de],b,y,36064,34069+de);A(y,be)&&I(34067),t.unbindTexture()}else if(ce){const de=b.texture;for(let H=0,pe=de.length;H<pe;H++){const ye=de[H],Me=n.get(ye);t.bindTexture(3553,Me.__webglTexture),ue(3553,ye,be),re(k.__webglFramebuffer,b,ye,36064+H,3553),A(ye,be)&&I(3553)}t.unbindTexture()}else{let de=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?de=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,Y.__webglTexture),ue(de,y,be),re(k.__webglFramebuffer,b,y,36064,de),A(y,be)&&I(de),t.unbindTexture()}b.depthBuffer&&_e(b)}function Ot(b){const y=v(b)||a,k=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Y=0,te=k.length;Y<te;Y++){const ce=k[Y];if(A(ce,y)){const be=b.isWebGLCubeRenderTarget?34067:3553,de=n.get(ce).__webglTexture;t.bindTexture(be,de),I(be),t.unbindTexture()}}}function Ct(b){if(a&&b.samples>0&&Ze(b)===!1){const y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],k=b.width,Y=b.height;let te=16384;const ce=[],be=b.stencilBuffer?33306:36096,de=n.get(b),H=b.isWebGLMultipleRenderTargets===!0;if(H)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),i.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){ce.push(36064+pe),b.depthBuffer&&ce.push(be);const ye=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ye===!1&&(b.depthBuffer&&(te|=256),b.stencilBuffer&&(te|=1024)),H&&i.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[pe]),ye===!0&&(i.invalidateFramebuffer(36008,[be]),i.invalidateFramebuffer(36009,[be])),H){const Me=n.get(y[pe]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Me,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,te,9728),p&&i.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+pe,36161,de.__webglColorRenderbuffer[pe]);const ye=n.get(y[pe]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),i.framebufferTexture2D(36009,36064+pe,3553,ye,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function Mt(b){return Math.min(h,b.samples)}function Ze(b){const y=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function pt(b){const y=o.render.frame;g.get(b)!==y&&(g.set(b,y),b.update())}function cn(b,y){const k=b.encoding,Y=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===zl||k!==es&&(k===Ye?a===!1?e.has("EXT_sRGB")===!0&&Y===wn?(b.format=zl,b.minFilter=ln,b.generateMipmaps=!1):y=Hp.sRGBToLinear(y):(Y!==wn||te!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),y}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.setTexture2D=ee,this.setTexture2DArray=Re,this.setTexture3D=ie,this.setTextureCube=z,this.rebindTextures=ze,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ze}function XM(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Zi)return 5121;if(r===wv)return 32819;if(r===bv)return 32820;if(r===xv)return 5120;if(r===Sv)return 5122;if(r===Up)return 5123;if(r===Mv)return 5124;if(r===qi)return 5125;if(r===Mi)return 5126;if(r===Yr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ev)return 6406;if(r===wn)return 6408;if(r===Tv)return 6409;if(r===Av)return 6410;if(r===Yi)return 6402;if(r===Js)return 34041;if(r===zl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Cv)return 6403;if(r===Rv)return 36244;if(r===Iv)return 33319;if(r===Lv)return 33320;if(r===Dv)return 36249;if(r===Uc||r===Oc||r===Fc||r===kc)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gh||r===Wh||r===qh||r===jh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Gh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$h||r===Xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===$h)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kh||r===Yh||r===Qh||r===Jh||r===Zh||r===ed||r===td||r===nd||r===id||r===sd||r===rd||r===od||r===ad||r===cd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Kh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zh)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ed)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===td)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===id)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===od)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ad)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Bc)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Nv||r===ld||r===ud||r===hd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Bc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ld)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ud)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class KM extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ji extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class QM extends Pt{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:Yi,u!==Yi&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Yi&&(n=qi),n===void 0&&u===Js&&(n=zs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1}}class JM extends hr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const w=[],x=[],v=new Set,E=new Map,A=new nn;A.layers.enable(1),A.viewport=new rt;const I=new nn;I.layers.enable(2),I.viewport=new rt;const P=[A,I],S=new KM;S.layers.enable(1),S.layers.enable(2);let T=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=w[z];return j===void 0&&(j=new cl,w[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=w[z];return j===void 0&&(j=new cl,w[z]=j),j.getGripSpace()},this.getHand=function(z){let j=w[z];return j===void 0&&(j=new cl,w[z]=j),j.getHandSpace()};function W(z){const j=x.indexOf(z.inputSource);if(j===-1)return;const ae=w[j];ae!==void 0&&ae.dispatchEvent({type:z.type,data:z.inputSource})}function D(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",U);for(let z=0;z<w.length;z++){const j=x[z];j!==null&&(x[z]=null,w[z].disconnect(j))}T=null,$=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",D),s.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:p}),f=new ts(p.framebufferWidth,p.framebufferHeight,{format:wn,type:Zi,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let j=null,ae=null,ue=null;_.depth&&(ue=_.stencil?35056:33190,j=_.stencil?Js:Yi,ae=_.stencil?zs:qi);const O={colorFormat:32856,depthFormat:ue,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(O),s.updateRenderState({layers:[d]}),f=new ts(d.textureWidth,d.textureHeight,{format:wn,type:Zi,depthTexture:new QM(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const De=e.properties.get(f);De.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(z){for(let j=0;j<z.removed.length;j++){const ae=z.removed[j],ue=x.indexOf(ae);ue>=0&&(x[ue]=null,w[ue].disconnect(ae))}for(let j=0;j<z.added.length;j++){const ae=z.added[j];let ue=x.indexOf(ae);if(ue===-1){for(let De=0;De<w.length;De++)if(De>=x.length){x.push(ae),ue=De;break}else if(x[De]===null){x[De]=ae,ue=De;break}if(ue===-1)break}const O=w[ue];O&&O.connect(ae)}}const F=new C,Z=new C;function Q(z,j,ae){F.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const ue=F.distanceTo(Z),O=j.projectionMatrix.elements,De=ae.projectionMatrix.elements,Ae=O[14]/(O[10]-1),re=O[14]/(O[10]+1),we=(O[9]+1)/O[5],Je=(O[9]-1)/O[5],_e=(O[8]-1)/O[0],ze=(De[8]+1)/De[0],At=Ae*_e,Ot=Ae*ze,Ct=ue/(-_e+ze),Mt=Ct*-_e;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Mt),z.translateZ(Ct),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ze=Ae+Ct,pt=re+Ct,cn=At-Mt,b=Ot+(ue-Mt),y=we*re/pt*Ze,k=Je*re/pt*Ze;z.projectionMatrix.makePerspective(cn,b,y,k,Ze,pt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function q(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;S.near=I.near=A.near=z.near,S.far=I.far=A.far=z.far,(T!==S.near||$!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,$=S.far);const j=z.parent,ae=S.cameras;q(S,j);for(let ue=0;ue<ae.length;ue++)q(ae[ue],j);ae.length===2?Q(S,A,I):S.projectionMatrix.copy(A.projectionMatrix),ne(z,S,j)};function ne(z,j,ae){ae===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(ae.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const ue=z.children;for(let O=0,De=ue.length;O<De;O++)ue[O].updateMatrixWorld(!0);z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=er*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.getPlanes=function(){return v};let ee=null;function Re(z,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ue=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let O=0;O<ae.length;O++){const De=ae[O];let Ae=null;if(p!==null)Ae=p.getViewport(De);else{const we=h.getViewSubImage(d,De);Ae=we.viewport,O===0&&(e.setRenderTargetTextures(f,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(f))}let re=P[O];re===void 0&&(re=new nn,re.layers.enable(O),re.viewport=new rt,P[O]=re),re.matrix.fromArray(De.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(De.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),O===0&&(S.matrix.copy(re.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(re)}}for(let ae=0;ae<w.length;ae++){const ue=x[ae],O=w[ae];ue!==null&&O!==void 0&&O.update(ue,j,l||o)}if(ee&&ee(z,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let ae=null;for(const ue of v)j.detectedPlanes.has(ue)||(ae===null&&(ae=[]),ae.push(ue));if(ae!==null)for(const ue of ae)v.delete(ue),E.delete(ue),n.dispatchEvent({type:"planeremoved",data:ue});for(const ue of j.detectedPlanes)if(!v.has(ue))v.add(ue),E.set(ue,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ue});else{const O=E.get(ue);ue.lastChangedTime>O&&(E.set(ue,ue.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ue}))}}g=null}const ie=new Jp;ie.setAnimationLoop(Re),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}}function ZM(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Kp(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,w,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ew(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function c(w,x){const v=x.program;n.uniformBlockBinding(w,v)}function l(w,x){let v=s[w.id];v===void 0&&(g(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(w,E);const A=e.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function u(w){const x=h();w.__bindingPointIndex=x;const v=i.createBuffer(),E=w.__size,A=w.usage;return i.bindBuffer(35345,v),i.bufferData(35345,E,A),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,v),v}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=s[w.id],v=w.uniforms,E=w.__cache;i.bindBuffer(35345,x);for(let A=0,I=v.length;A<I;A++){const P=v[A];if(p(P,A,E)===!0){const S=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let W=0;W<T.length;W++){const D=T[W],U=_(D);typeof D=="number"?(P.__data[0]=D,i.bufferSubData(35345,S+$,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,$),$+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,S,P.__data)}}i.bindBuffer(35345,null)}function p(w,x,v){const E=w.value;if(v[x]===void 0){if(typeof E=="number")v[x]=E;else{const A=Array.isArray(E)?E:[E],I=[];for(let P=0;P<A.length;P++)I.push(A[P].clone());v[x]=I}return!0}else if(typeof E=="number"){if(v[x]!==E)return v[x]=E,!0}else{const A=Array.isArray(v[x])?v[x]:[v[x]],I=Array.isArray(E)?E:[E];for(let P=0;P<A.length;P++){const S=A[P];if(S.equals(I[P])===!1)return S.copy(I[P]),!0}}return!1}function g(w){const x=w.uniforms;let v=0;const E=16;let A=0;for(let I=0,P=x.length;I<P;I++){const S=x[I],T={boundary:0,storage:0},$=Array.isArray(S.value)?S.value:[S.value];for(let W=0,D=$.length;W<D;W++){const U=$[W],F=_(U);T.boundary+=F.boundary,T.storage+=F.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,I>0){A=v%E;const W=E-A;A!==0&&W-T.boundary<0&&(v+=E-A,S.__offset=v)}v+=T.storage}return A=v%E,A>0&&(v+=E-A),w.__size=v,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}function tw(){const i=Zr("canvas");return i.style.display="block",i}class im{constructor(e={}){const{canvas:t=tw(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=es,this.useLegacyLights=!0,this.toneMapping=oi,this.toneMappingExposure=1;const f=this;let w=!1,x=0,v=0,E=null,A=-1,I=null;const P=new rt,S=new rt;let T=null,$=t.width,W=t.height,D=1,U=null,F=null;const Z=new rt(0,0,$,W),Q=new rt(0,0,$,W);let q=!1;const ne=new Au;let ee=!1,Re=!1,ie=null;const z=new ke,j=new C,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return E===null?D:1}let O=n;function De(M,N){for(let B=0;B<M.length;B++){const L=M[B],G=t.getContext(L,N);if(G!==null)return G}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",nt,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&N.shift(),O=De(N,M),O===null)throw De(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ae,re,we,Je,_e,ze,At,Ot,Ct,Mt,Ze,pt,cn,b,y,k,Y,te,ce,be,de,H,pe,ye;function Me(){Ae=new dS(O),re=new oS(O,Ae,e),Ae.init(re),H=new XM(O,Ae,re),we=new jM(O,Ae,re),Je=new mS,_e=new DM,ze=new $M(O,Ae,we,_e,re,H,Je),At=new cS(f),Ot=new hS(f),Ct=new A0(O,re),pe=new sS(O,Ae,Ct,re),Mt=new fS(O,Ct,Je,pe),Ze=new yS(O,Mt,Ct,Je),ce=new vS(O,re,ze),k=new aS(_e),pt=new LM(f,At,Ot,Ae,re,pe,k),cn=new ZM(f,_e),b=new NM,y=new VM(Ae,re),te=new iS(f,At,Ot,we,Ze,d,c),Y=new qM(f,Ze,re),ye=new ew(O,Je,re,we),be=new rS(O,Ae,Je,re),de=new pS(O,Ae,Je,re),Je.programs=pt.programs,f.capabilities=re,f.extensions=Ae,f.properties=_e,f.renderLists=b,f.shadowMap=Y,f.state=we,f.info=Je}Me();const he=new JM(f,O);this.xr=he,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=Ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(M){M!==void 0&&(D=M,this.setSize($,W,!1))},this.getSize=function(M){return M.set($,W)},this.setSize=function(M,N,B=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,W=N,t.width=Math.floor(M*D),t.height=Math.floor(N*D),B===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set($*D,W*D).floor()},this.setDrawingBufferSize=function(M,N,B){$=M,W=N,D=B,t.width=Math.floor(M*B),t.height=Math.floor(N*B),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,N,B,L){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,N,B,L),we.viewport(P.copy(Z).multiplyScalar(D).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,N,B,L){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,N,B,L),we.scissor(S.copy(Q).multiplyScalar(D).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(M){we.setScissorTest(q=M)},this.setOpaqueSort=function(M){U=M},this.setTransparentSort=function(M){F=M},this.getClearColor=function(M){return M.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(M=!0,N=!0,B=!0){let L=0;M&&(L|=16384),N&&(L|=256),B&&(L|=1024),O.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),b.dispose(),y.dispose(),_e.dispose(),At.dispose(),Ot.dispose(),Ze.dispose(),pe.dispose(),ye.dispose(),pt.dispose(),he.dispose(),he.removeEventListener("sessionstart",ge),he.removeEventListener("sessionend",ot),ie&&(ie.dispose(),ie=null),dt.stop()};function me(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=Je.autoReset,N=Y.enabled,B=Y.autoUpdate,L=Y.needsUpdate,G=Y.type;Me(),Je.autoReset=M,Y.enabled=N,Y.autoUpdate=B,Y.needsUpdate=L,Y.type=G}function nt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function gt(M){const N=M.target;N.removeEventListener("dispose",gt),R(N)}function R(M){V(M),_e.remove(M)}function V(M){const N=_e.get(M).programs;N!==void 0&&(N.forEach(function(B){pt.releaseProgram(B)}),M.isShaderMaterial&&pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,B,L,G,xe){N===null&&(N=ae);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,Ie=z_(M,N,B,L,G);we.setMaterial(L,Ee);let Oe=B.index,Be=1;L.wireframe===!0&&(Oe=Mt.getWireframeAttribute(B),Be=2);const Ve=B.drawRange,He=B.attributes.position;let it=Ve.start*Be,Jt=(Ve.start+Ve.count)*Be;xe!==null&&(it=Math.max(it,xe.start*Be),Jt=Math.min(Jt,(xe.start+xe.count)*Be)),Oe!==null?(it=Math.max(it,0),Jt=Math.min(Jt,Oe.count)):He!=null&&(it=Math.max(it,0),Jt=Math.min(Jt,He.count));const Tn=Jt-it;if(Tn<0||Tn===1/0)return;pe.setup(G,L,Ie,B,Oe);let Ui,vt=be;if(Oe!==null&&(Ui=Ct.get(Oe),vt=de,vt.setIndex(Ui)),G.isMesh)L.wireframe===!0?(we.setLineWidth(L.wireframeLinewidth*ue()),vt.setMode(1)):vt.setMode(4);else if(G.isLine){let je=L.linewidth;je===void 0&&(je=1),we.setLineWidth(je*ue()),G.isLineSegments?vt.setMode(1):G.isLineLoop?vt.setMode(2):vt.setMode(3)}else G.isPoints?vt.setMode(0):G.isSprite&&vt.setMode(4);if(G.isInstancedMesh)vt.renderInstances(it,Tn,G.count);else if(B.isInstancedBufferGeometry){const je=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Lc=Math.min(B.instanceCount,je);vt.renderInstances(it,Tn,Lc)}else vt.render(it,Tn)},this.compile=function(M,N){function B(L,G,xe){L.transparent===!0&&L.side===zn&&L.forceSinglePass===!1?(L.side=un,L.needsUpdate=!0,Vo(L,G,xe),L.side=ci,L.needsUpdate=!0,Vo(L,G,xe),L.side=zn):Vo(L,G,xe)}g=y.get(M),g.init(),m.push(g),M.traverseVisible(function(L){L.isLight&&L.layers.test(N.layers)&&(g.pushLight(L),L.castShadow&&g.pushShadow(L))}),g.setupLights(f.useLegacyLights),M.traverse(function(L){const G=L.material;if(G)if(Array.isArray(G))for(let xe=0;xe<G.length;xe++){const Ee=G[xe];B(Ee,M,L)}else B(G,M,L)}),m.pop(),g=null};let K=null;function le(M){K&&K(M)}function ge(){dt.stop()}function ot(){dt.start()}const dt=new Jp;dt.setAnimationLoop(le),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(M){K=M,he.setAnimationLoop(M),M===null?dt.stop():dt.start()},he.addEventListener("sessionstart",ge),he.addEventListener("sessionend",ot),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),M.isScene===!0&&M.onBeforeRender(f,M,N,E),g=y.get(M,m.length),g.init(),m.push(g),z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ne.setFromProjectionMatrix(z),Re=this.localClippingEnabled,ee=k.init(this.clippingPlanes,Re),p=b.get(M,_.length),p.init(),_.push(p),Vt(M,N,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(U,F),ee===!0&&k.beginShadows();const B=g.state.shadowsArray;if(Y.render(B,M,N),ee===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(p,M),g.setupLights(f.useLegacyLights),N.isArrayCamera){const L=N.cameras;for(let G=0,xe=L.length;G<xe;G++){const Ee=L[G];pi(p,M,Ee,Ee.viewport)}}else pi(p,M,N);E!==null&&(ze.updateMultisampleRenderTarget(E),ze.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(f,M,N),pe.resetDefaultState(),A=-1,I=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Vt(M,N,B,L){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ne.intersectsSprite(M)){L&&j.setFromMatrixPosition(M.matrixWorld).applyMatrix4(z);const Ee=Ze.update(M),Ie=M.material;Ie.visible&&p.push(M,Ee,Ie,B,j.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Je.render.frame&&(M.skeleton.update(),M.skeleton.frame=Je.render.frame),!M.frustumCulled||ne.intersectsObject(M))){L&&j.setFromMatrixPosition(M.matrixWorld).applyMatrix4(z);const Ee=Ze.update(M),Ie=M.material;if(Array.isArray(Ie)){const Oe=Ee.groups;for(let Be=0,Ve=Oe.length;Be<Ve;Be++){const He=Oe[Be],it=Ie[He.materialIndex];it&&it.visible&&p.push(M,Ee,it,B,j.z,He)}}else Ie.visible&&p.push(M,Ee,Ie,B,j.z,null)}}const xe=M.children;for(let Ee=0,Ie=xe.length;Ee<Ie;Ee++)Vt(xe[Ee],N,B,L)}function pi(M,N,B,L){const G=M.opaque,xe=M.transmissive,Ee=M.transparent;g.setupLightsView(B),ee===!0&&k.setGlobalState(f.clippingPlanes,B),xe.length>0&&_t(G,xe,N,B),L&&we.viewport(P.copy(L)),G.length>0&&_n(G,N,B),xe.length>0&&_n(xe,N,B),Ee.length>0&&_n(Ee,N,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function _t(M,N,B,L){if(ie===null){const Ie=re.isWebGL2;ie=new ts(1024,1024,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Yr:Zi,minFilter:Ji,samples:Ie&&a===!0?4:0})}const G=f.getRenderTarget();f.setRenderTarget(ie),f.clear();const xe=f.toneMapping;f.toneMapping=oi,_n(M,B,L),ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie);let Ee=!1;for(let Ie=0,Oe=N.length;Ie<Oe;Ie++){const Be=N[Ie],Ve=Be.object,He=Be.geometry,it=Be.material,Jt=Be.group;if(it.side===zn&&Ve.layers.test(L.layers)){const Tn=it.side;it.side=un,it.needsUpdate=!0,On(Ve,B,L,He,it,Jt),it.side=Tn,it.needsUpdate=!0,Ee=!0}}Ee===!0&&(ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie)),f.setRenderTarget(G),f.toneMapping=xe}function _n(M,N,B){const L=N.isScene===!0?N.overrideMaterial:null;for(let G=0,xe=M.length;G<xe;G++){const Ee=M[G],Ie=Ee.object,Oe=Ee.geometry,Be=L===null?Ee.material:L,Ve=Ee.group;Ie.layers.test(B.layers)&&On(Ie,N,B,Oe,Be,Ve)}}function On(M,N,B,L,G,xe){M.onBeforeRender(f,N,B,L,G,xe),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(f,N,B,L,M,xe),G.transparent===!0&&G.side===zn&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,f.renderBufferDirect(B,N,L,G,M,xe),G.side=ci,G.needsUpdate=!0,f.renderBufferDirect(B,N,L,G,M,xe),G.side=zn):f.renderBufferDirect(B,N,L,G,M,xe),M.onAfterRender(f,N,B,L,G,xe)}function Vo(M,N,B){N.isScene!==!0&&(N=ae);const L=_e.get(M),G=g.state.lights,xe=g.state.shadowsArray,Ee=G.state.version,Ie=pt.getParameters(M,G.state,xe,N,B),Oe=pt.getProgramCacheKey(Ie);let Be=L.programs;L.environment=M.isMeshStandardMaterial?N.environment:null,L.fog=N.fog,L.envMap=(M.isMeshStandardMaterial?Ot:At).get(M.envMap||L.environment),Be===void 0&&(M.addEventListener("dispose",gt),Be=new Map,L.programs=Be);let Ve=Be.get(Oe);if(Ve!==void 0){if(L.currentProgram===Ve&&L.lightsStateVersion===Ee)return Nh(M,Ie),Ve}else Ie.uniforms=pt.getUniforms(M),M.onBuild(B,Ie,f),M.onBeforeCompile(Ie,f),Ve=pt.acquireProgram(Ie,Oe),Be.set(Oe,Ve),L.uniforms=Ie.uniforms;const He=L.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=k.uniform),Nh(M,Ie),L.needsLights=G_(M),L.lightsStateVersion=Ee,L.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix);const it=Ve.getUniforms(),Jt=Ra.seqWithValue(it.seq,He);return L.currentProgram=Ve,L.uniformsList=Jt,Ve}function Nh(M,N){const B=_e.get(M);B.outputEncoding=N.outputEncoding,B.instancing=N.instancing,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function z_(M,N,B,L,G){N.isScene!==!0&&(N=ae),ze.resetTextureUnits();const xe=N.fog,Ee=L.isMeshStandardMaterial?N.environment:null,Ie=E===null?f.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:es,Oe=(L.isMeshStandardMaterial?Ot:At).get(L.envMap||Ee),Be=L.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ve=!!L.normalMap&&!!B.attributes.tangent,He=!!B.morphAttributes.position,it=!!B.morphAttributes.normal,Jt=!!B.morphAttributes.color,Tn=L.toneMapped?f.toneMapping:oi,Ui=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,vt=Ui!==void 0?Ui.length:0,je=_e.get(L),Lc=g.state.lights;if(ee===!0&&(Re===!0||M!==I)){const dn=M===I&&L.id===A;k.setState(L,M,dn)}let Rt=!1;L.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Lc.state.version||je.outputEncoding!==Ie||G.isInstancedMesh&&je.instancing===!1||!G.isInstancedMesh&&je.instancing===!0||G.isSkinnedMesh&&je.skinning===!1||!G.isSkinnedMesh&&je.skinning===!0||je.envMap!==Oe||L.fog===!0&&je.fog!==xe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==k.numPlanes||je.numIntersection!==k.numIntersection)||je.vertexAlphas!==Be||je.vertexTangents!==Ve||je.morphTargets!==He||je.morphNormals!==it||je.morphColors!==Jt||je.toneMapping!==Tn||re.isWebGL2===!0&&je.morphTargetsCount!==vt)&&(Rt=!0):(Rt=!0,je.__version=L.version);let Oi=je.currentProgram;Rt===!0&&(Oi=Vo(L,N,G));let Uh=!1,Mr=!1,Dc=!1;const Zt=Oi.getUniforms(),Fi=je.uniforms;if(we.useProgram(Oi.program)&&(Uh=!0,Mr=!0,Dc=!0),L.id!==A&&(A=L.id,Mr=!0),Uh||I!==M){if(Zt.setValue(O,"projectionMatrix",M.projectionMatrix),re.logarithmicDepthBuffer&&Zt.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),I!==M&&(I=M,Mr=!0,Dc=!0),L.isShaderMaterial||L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshStandardMaterial||L.envMap){const dn=Zt.map.cameraPosition;dn!==void 0&&dn.setValue(O,j.setFromMatrixPosition(M.matrixWorld))}(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&Zt.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial||L.isShadowMaterial||G.isSkinnedMesh)&&Zt.setValue(O,"viewMatrix",M.matrixWorldInverse)}if(G.isSkinnedMesh){Zt.setOptional(O,G,"bindMatrix"),Zt.setOptional(O,G,"bindMatrixInverse");const dn=G.skeleton;dn&&(re.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Zt.setValue(O,"boneTexture",dn.boneTexture,ze),Zt.setValue(O,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pc=B.morphAttributes;if((Pc.position!==void 0||Pc.normal!==void 0||Pc.color!==void 0&&re.isWebGL2===!0)&&ce.update(G,B,Oi),(Mr||je.receiveShadow!==G.receiveShadow)&&(je.receiveShadow=G.receiveShadow,Zt.setValue(O,"receiveShadow",G.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Fi.envMap.value=Oe,Fi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Mr&&(Zt.setValue(O,"toneMappingExposure",f.toneMappingExposure),je.needsLights&&H_(Fi,Dc),xe&&L.fog===!0&&cn.refreshFogUniforms(Fi,xe),cn.refreshMaterialUniforms(Fi,L,D,W,ie),Ra.upload(O,je.uniformsList,Fi,ze)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Ra.upload(O,je.uniformsList,Fi,ze),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&Zt.setValue(O,"center",G.center),Zt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Zt.setValue(O,"normalMatrix",G.normalMatrix),Zt.setValue(O,"modelMatrix",G.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const dn=L.uniformsGroups;for(let Nc=0,W_=dn.length;Nc<W_;Nc++)if(re.isWebGL2){const Oh=dn[Nc];ye.update(Oh,Oi),ye.bind(Oh,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function H_(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function G_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,N,B){_e.get(M.texture).__webglTexture=N,_e.get(M.depthTexture).__webglTexture=B;const L=_e.get(M);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=B===void 0,L.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,N){const B=_e.get(M);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,B=0){E=M,x=N,v=B;let L=!0,G=null,xe=!1,Ee=!1;if(M){const Oe=_e.get(M);Oe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(36160,null),L=!1):Oe.__webglFramebuffer===void 0?ze.setupRenderTarget(M):Oe.__hasExternalTextures&&ze.rebindTextures(M,_e.get(M.texture).__webglTexture,_e.get(M.depthTexture).__webglTexture);const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ee=!0);const Ve=_e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(G=Ve[N],xe=!0):re.isWebGL2&&M.samples>0&&ze.useMultisampledRTT(M)===!1?G=_e.get(M).__webglMultisampledFramebuffer:G=Ve,P.copy(M.viewport),S.copy(M.scissor),T=M.scissorTest}else P.copy(Z).multiplyScalar(D).floor(),S.copy(Q).multiplyScalar(D).floor(),T=q;if(we.bindFramebuffer(36160,G)&&re.drawBuffers&&L&&we.drawBuffers(M,G),we.viewport(P),we.scissor(S),we.setScissorTest(T),xe){const Oe=_e.get(M.texture);O.framebufferTexture2D(36160,36064,34069+N,Oe.__webglTexture,B)}else if(Ee){const Oe=_e.get(M.texture),Be=N||0;O.framebufferTextureLayer(36160,36064,Oe.__webglTexture,B||0,Be)}A=-1},this.readRenderTargetPixels=function(M,N,B,L,G,xe,Ee){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){we.bindFramebuffer(36160,Ie);try{const Oe=M.texture,Be=Oe.format,Ve=Oe.type;if(Be!==wn&&H.convert(Be)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ve===Yr&&(Ae.has("EXT_color_buffer_half_float")||re.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ve!==Zi&&H.convert(Ve)!==O.getParameter(35738)&&!(Ve===Mi&&(re.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-L&&B>=0&&B<=M.height-G&&O.readPixels(N,B,L,G,H.convert(Be),H.convert(Ve),xe)}finally{const Oe=E!==null?_e.get(E).__webglFramebuffer:null;we.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(M,N,B=0){const L=Math.pow(2,-B),G=Math.floor(N.image.width*L),xe=Math.floor(N.image.height*L);ze.setTexture2D(N,0),O.copyTexSubImage2D(3553,B,0,0,M.x,M.y,G,xe),we.unbindTexture()},this.copyTextureToTexture=function(M,N,B,L=0){const G=N.image.width,xe=N.image.height,Ee=H.convert(B.format),Ie=H.convert(B.type);ze.setTexture2D(B,0),O.pixelStorei(37440,B.flipY),O.pixelStorei(37441,B.premultiplyAlpha),O.pixelStorei(3317,B.unpackAlignment),N.isDataTexture?O.texSubImage2D(3553,L,M.x,M.y,G,xe,Ee,Ie,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(3553,L,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,Ee,N.mipmaps[0].data):O.texSubImage2D(3553,L,M.x,M.y,Ee,Ie,N.image),L===0&&B.generateMipmaps&&O.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(M,N,B,L,G=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=M.max.x-M.min.x+1,Ee=M.max.y-M.min.y+1,Ie=M.max.z-M.min.z+1,Oe=H.convert(L.format),Be=H.convert(L.type);let Ve;if(L.isData3DTexture)ze.setTexture3D(L,0),Ve=32879;else if(L.isDataArrayTexture)ze.setTexture2DArray(L,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,L.flipY),O.pixelStorei(37441,L.premultiplyAlpha),O.pixelStorei(3317,L.unpackAlignment);const He=O.getParameter(3314),it=O.getParameter(32878),Jt=O.getParameter(3316),Tn=O.getParameter(3315),Ui=O.getParameter(32877),vt=B.isCompressedTexture?B.mipmaps[0]:B.image;O.pixelStorei(3314,vt.width),O.pixelStorei(32878,vt.height),O.pixelStorei(3316,M.min.x),O.pixelStorei(3315,M.min.y),O.pixelStorei(32877,M.min.z),B.isDataTexture||B.isData3DTexture?O.texSubImage3D(Ve,G,N.x,N.y,N.z,xe,Ee,Ie,Oe,Be,vt.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Ve,G,N.x,N.y,N.z,xe,Ee,Ie,Oe,vt.data)):O.texSubImage3D(Ve,G,N.x,N.y,N.z,xe,Ee,Ie,Oe,Be,vt),O.pixelStorei(3314,He),O.pixelStorei(32878,it),O.pixelStorei(3316,Jt),O.pixelStorei(3315,Tn),O.pixelStorei(32877,Ui),G===0&&L.generateMipmaps&&O.generateMipmap(Ve),we.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ze.setTextureCube(M,0):M.isData3DTexture?ze.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ze.setTexture2DArray(M,0):ze.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){x=0,v=0,E=null,we.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class nw extends im{}nw.prototype.isWebGL1Renderer=!0;class iw extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class sm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new C;class eo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),s=st(s,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rm extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Cs;const Ar=new C,Rs=new C,Is=new C,Ls=new Ue,Cr=new Ue,om=new ke,aa=new C,Rr=new C,ca=new C,Zd=new Ue,ll=new Ue,ef=new Ue;class sw extends ct{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sm(t,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new eo(n,3,0,!1)),Cs.setAttribute("uv",new eo(n,2,3,!1))}this.geometry=Cs,this.material=e!==void 0?e:new rm,this.center=new Ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),om.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Is.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;la(aa.set(-.5,-.5,0),Is,o,Rs,s,r),la(Rr.set(.5,-.5,0),Is,o,Rs,s,r),la(ca.set(.5,.5,0),Is,o,Rs,s,r),Zd.set(0,0),ll.set(1,0),ef.set(1,1);let a=e.ray.intersectTriangle(aa,Rr,ca,!1,Ar);if(a===null&&(la(Rr.set(-.5,.5,0),Is,o,Rs,s,r),ll.set(0,1),a=e.ray.intersectTriangle(aa,ca,Rr,!1,Ar),a===null))return;const c=e.ray.origin.distanceTo(Ar);c<e.near||c>e.far||t.push({distance:c,point:Ar.clone(),uv:Sn.getInterpolation(Ar,aa,Rr,ca,Zd,ll,ef,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function la(i,e,t,n,s,r){Ls.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Cr.x=r*Ls.x-s*Ls.y,Cr.y=s*Ls.x+r*Ls.y):Cr.copy(Ls),i.copy(e),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(om)}const tf=new C,nf=new rt,sf=new rt,rw=new C,rf=new ke,Ds=new C;class ow extends sn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ds.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ds),this.boundingBox.expandByPoint(Ds)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ds.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ds),this.boundingSphere.expandByPoint(Ds)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;nf.fromBufferAttribute(s.attributes.skinIndex,e),sf.fromBufferAttribute(s.attributes.skinWeight,e),tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=sf.getComponent(r);if(o!==0){const a=nf.getComponent(r);rf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(rw.copy(tf).applyMatrix4(rf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class am extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class aw extends Pt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Dt,u=Dt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const of=new ke,cw=new ke;class Lu{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:cw;of.multiplyMatrices(a,t[r]),of.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Lu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Bp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new aw(t,e,e,wn,Mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new am),this.bones.push(o),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class af extends on{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new ke,cf=new ke,ua=[],lf=new Xn,lw=new ke,Ir=new sn,Lr=new fi;class uw extends sn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new af(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),lf.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(lf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Lr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),e.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),cf.multiplyMatrices(n,Ps),Ir.matrixWorld=cf,Ir.raycast(e,ua);for(let o=0,a=ua.length;o<a;o++){const c=ua[o];c.instanceId=r,c.object=this,t.push(c)}ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new af(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Du extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uf=new C,hf=new C,df=new ke,ul=new Tu,ha=new fi;class nc extends ct{constructor(e=new hn,t=new Du){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)uf.fromBufferAttribute(t,s-1),hf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=uf.distanceTo(hf);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;df.copy(s).invert(),ul.copy(e.ray).applyMatrix4(df);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,u=new C,h=new C,d=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let x=f,v=w-1;x<v;x+=p){const E=g.getX(x),A=g.getX(x+1);if(l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,A),ul.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),w=Math.min(m.count,o.start+o.count);for(let x=f,v=w-1;x<v;x+=p){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),ul.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ff=new C,pf=new C;class hw extends nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ff.fromBufferAttribute(t,s),pf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ff.distanceTo(pf);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dw extends nc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cm extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mf=new ke,Wl=new Tu,da=new fi,fa=new C;class fw extends ct{constructor(e=new hn,t=new cm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;mf.copy(s).invert(),Wl.copy(e.ray).applyMatrix4(mf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);fa.fromBufferAttribute(h,m),gf(fa,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)fa.fromBufferAttribute(h,g),gf(fa,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gf(i,e,t,n,s,r,o){const a=Wl.distanceSqToPoint(i);if(a<t){const c=new C;Wl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class pw extends Pt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pu extends hn{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,p=new C,g=new Ue;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const w=f+m,x=w,v=w+n+1,E=w+n+2,A=w+1;a.push(x,v,A),a.push(v,E,A)}}this.setIndex(a),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(l,3)),this.setAttribute("uv",new an(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Nu extends hn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new C,d=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const w=[],x=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const A=E/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+v,1-x),w.push(l++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const x=u[f][w+1],v=u[f][w],E=u[f+1][w],A=u[f+1][w+1];(f!==0||o>0)&&p.push(x,v,A),(f!==n-1||c<Math.PI)&&p.push(v,E,A)}this.setIndex(p),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uu extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fp,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cs extends Uu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function yi(i,e,t){return lm(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function pa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mw(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _f(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function um(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class wo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gw extends wo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dd,endingEnd:dd}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fd:r=e,a=2*t-n;break;case pd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fd:o=e,c=2*n-t;break;case pd:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,w=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let E=0;E!==a;++E)r[E]=f*o[u+E]+w*o[l+E]+x*o[c+E]+v*o[h+E];return r}}class _w extends wo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class vw extends wo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _w(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case Vc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return Vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=yi(n,r,o),this.values=yi(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&lm(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=yi(this.times),t=yi(this.values),n=this.getValueSize(),s=this.getInterpolation()===Vc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=yi(e,0,o),this.values=yi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=yi(this.times,0),t=yi(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Zs;class fr extends Kn{}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Qr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class hm extends Kn{}hm.prototype.ValueTypeName="color";class to extends Kn{}to.prototype.ValueTypeName="number";class yw extends wo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Di.slerpFlat(r,0,o,l-a,o,l,c);return r}}class is extends Kn{InterpolantFactoryMethodLinear(e){return new yw(this.times,this.values,this.getValueSize(),e)}}is.prototype.ValueTypeName="quaternion";is.prototype.DefaultInterpolation=Zs;is.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends Kn{}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Qr;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends Kn{}no.prototype.ValueTypeName="vector";class xw{constructor(e,t=-1,n,s=Uv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Mw(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=mw(c);c=_f(c,1,u),l=_f(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new to(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,_){if(p.length!==0){const m=[],f=[];um(p,m,f,g),m.length!==0&&_.push(new h(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let w=0;w!==d[g].morphTargets.length;++w){const x=d[g];m.push(x.time),f.push(x.morphTarget===_?1:0)}s.push(new to(".morphTargetInfluence["+_+"]",m,f))}c=p.length*o}else{const p=".bones["+t[h].name+"]";n(no,p+".position",d,"pos",s),n(is,p+".quaternion",d,"rot",s),n(no,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Sw(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return to;case"vector":case"vector2":case"vector3":case"vector4":return no;case"color":return hm;case"quaternion":return is;case"bool":case"boolean":return fr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Mw(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sw(i.type);if(i.times===void 0){const t=[],n=[];um(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const nr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ww{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const bw=new ww;class bo{constructor(e){this.manager=e!==void 0?e:bw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ni={};class Ew extends Error{constructor(e,t){super(e),this.response=t}}class dm extends bo{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=nr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:s});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ni[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){w();function w(){h.read().then(({done:x,value:v})=>{if(x)f.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,I=u.length;A<I;A++){const P=u[A];P.onProgress&&P.onProgress(E)}f.enqueue(v),w()}})}}});return new Response(m)}else throw new Ew(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{nr.add(e,l);const u=ni[e];delete ni[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Tw extends bo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=nr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Zr("img");function c(){u(),nr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Aw extends bo{constructor(e){super(e)}load(e,t,n,s){const r=new Pt,o=new Tw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ic extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Cw extends ic{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hl=new ke,vf=new C,yf=new C;class Ou{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(vf),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rw extends Ou{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Iw extends ic{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xf=new ke,Dr=new C,dl=new C;class Lw extends Ou{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dr),dl.copy(n.position),dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dl),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),xf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf)}}class Dw extends ic{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pw extends Ou{constructor(){super(new Ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nw extends ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Pw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ql{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Uw extends bo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=nr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){nr.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Fu="\\[\\]\\.:\\/",Ow=new RegExp("["+Fu+"]","g"),ku="[^"+Fu+"]",Fw="[^"+Fu.replace("\\.","")+"]",kw=/((?:WC+[\/:])*)/.source.replace("WC",ku),Bw=/(WCOD+)?/.source.replace("WCOD",Fw),Vw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ku),zw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ku),Hw=new RegExp("^"+kw+Bw+Vw+zw+"$"),Gw=["material","materials","bones","map"];class Ww{constructor(e,t,n){const s=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ow,"")}static parseTrackName(e){const t=Hw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Gw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=Ww;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);class qw{static createButton(e,t={}){const n=document.createElement("button");function s(){if(t.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){l.end()}),d.appendChild(p);const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),g.setAttribute("stroke","#fff"),g.setAttribute("stroke-width",2),p.appendChild(g),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:d}}let l=null;async function u(d){d.addEventListener("end",h),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),n.textContent="STOP AR",t.domOverlay.root.style.display="",l=d}function h(){l.removeEventListener("end",h),n.textContent="START AR",t.domOverlay.root.style.display="none",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-ar",t).then(u):l.end()}}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){r(),n.textContent="AR NOT SUPPORTED"}function a(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="AR NOT ALLOWED"}function c(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",c(n),navigator.xr.isSessionSupported("immersive-ar").then(function(l){l?s():o()}).catch(a),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",c(l),l}}}function Sf(i,e){if(e===Ov)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Bl||e===Op){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Bl)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class jw extends bo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qw(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new Zw(t)}),this.register(function(t){return new eb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new Yw(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new Jw(t)}),this.register(function(t){return new Xw(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new cb(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=ql.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new dm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===fm){try{o[Xe.KHR_BINARY_GLTF]=new lb(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Mb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:o[h]=new Kw;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[h]=new ub(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[h]=new hb;break;case Xe.KHR_MESH_QUANTIZATION:o[h]=new db;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function $w(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Xw{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ne(16777215);c.color!==void 0&&u.fromArray(c.color);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Nw(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Dw(u),l.distance=h;break;case"spot":l=new Iw(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Kw{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){const s=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ye))}return Promise.all(s)}}class Yw{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Qw{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cs}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(r)}}class Jw{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cs}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Zw{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cs}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ye)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class eb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cs}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class tb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cs}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne(a[0],a[1],a[2]),Promise.all(r)}}class nb{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cs}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ib{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:cs}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ye)),Promise.all(r)}}class sb{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class rb{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ob{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ab{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}}class cb{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==yn.TRIANGLES&&l.mode!==yn.TRIANGLE_STRIP&&l.mode!==yn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const g of h){const _=new ke,m=new C,f=new Di,w=new C(1,1,1),x=new uw(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&w.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,_.compose(m,f,w));for(const v in c)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);ct.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const fm="glTF",Pr=12,Mf={JSON:1313821514,BIN:5130562};class lb{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Pr,r=new DataView(e,Pr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Mf.JSON){const l=new Uint8Array(e,Pr+o,a);this.content=n.decode(l)}else if(c===Mf.BIN){const l=Pr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ub{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=jl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=jl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=Gs[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],_=c[p];_!==void 0&&(g.normalized=_)}h(d)},a,l)})})}}class hb{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class db{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class pm extends wo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,p=d*h,g=e*l,_=g-l,m=-2*p+3*d,f=p-d,w=1-m,x=f-d+h;for(let v=0;v!==a;v++){const E=o[_+v+a],A=o[_+v+c]*u,I=o[g+v+a],P=o[g+v]*u;r[v]=w*E+x*A+m*I+f*P}return r}}const fb=new Di;class pb extends pm{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return fb.fromArray(r).normalize().toArray(r),r}}const yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wf={9728:Dt,9729:ln,9984:kl,9985:Np,9986:Ca,9987:Ji},bf={33071:Mn,33648:Na,10497:Qs},fl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mb={CUBICSPLINE:void 0,LINEAR:Zs,STEP:Qr},pl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Uu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function Nr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _b(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function vb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yb(i){const e=i.extensions&&i.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Ef(e.attributes):t=i.indices+":"+Ef(i.attributes)+":"+i.mode,t}function Ef(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $l(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Sb=new ke;class Mb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $w,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Aw(this.options.manager):this.textureLoader=new Uw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};Nr(r,a,s),Si(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(ql.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=fl[s.type],a=Gs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new on(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=fl[s.type],l=Gs[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(d/p),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let x=t.cache.get(w);x||(_=new l(a,f*p,s.count*p/u),x=new sm(_,p/u),t.cache.add(w,x)),m=new eo(x,c,d%p/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new on(_,c,g);if(s.sparse!==void 0){const f=fl.SCALAR,w=Gs[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new w(o[1],x,s.sparse.count*f),A=new l(o[2],v,s.sparse.count*c);a!==null&&(m=new on(m.array.slice(),m.itemSize,m.normalized));for(let I=0,P=E.length;I<P;I++){const S=E[I];if(m.setX(S,A[I*c]),c>=2&&m.setY(S,A[I*c+1]),c>=3&&m.setZ(S,A[I*c+2]),c>=4&&m.setW(S,A[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=wf[d.magFilter]||ln,u.minFilter=wf[d.minFilter]||Ji,u.wrapS=bf[d.wrapS]||Qs,u.wrapT=bf[d.wrapT]||Qs,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Pt(_);m.needsUpdate=!0,d(m)}),t.load(ql.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||xb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new cm,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Du,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Uu}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Xe.KHR_MATERIALS_UNLIT]){const h=s[Xe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Ye)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=zn);const u=r.alphaMode||pl.OPAQUE;if(u===pl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===pl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==si&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==si&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==si&&(a.emissive=new Ne().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==si&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ye)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Si(h,r),t.associations.set(h,{materials:e}),r.extensions&&Nr(s,h,r),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Tf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=yb(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Tf(new hn,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?gb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let f;const w=l[p];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new ow(_,w):new sn(_,w),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?f.geometry=Sf(f.geometry,Op):m.mode===yn.TRIANGLE_FAN&&(f.geometry=Sf(f.geometry,Bl));else if(m.mode===yn.LINES)f=new hw(_,w);else if(m.mode===yn.LINE_STRIP)f=new nc(_,w);else if(m.mode===yn.LINE_LOOP)f=new dw(_,w);else if(m.mode===yn.POINTS)f=new fw(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&vb(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Si(f,r),m.extensions&&Nr(s,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new ji;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(e0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ru(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new ke;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Lu(a,c)})}loadAnimation(e){const n=this.json.animations[e],s=n.name?n.name:"animation_"+e,r=[],o=[],a=[],c=[],l=[];for(let u=0,h=n.channels.length;u<h;u++){const d=n.channels[u],p=n.samplers[d.sampler],g=d.target,_=g.node,m=n.parameters!==void 0?n.parameters[p.input]:p.input,f=n.parameters!==void 0?n.parameters[p.output]:p.output;g.node!==void 0&&(r.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",f)),c.push(p),l.push(g))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l)]).then(function(u){const h=u[0],d=u[1],p=u[2],g=u[3],_=u[4],m=[];for(let f=0,w=h.length;f<w;f++){const x=h[f],v=d[f],E=p[f],A=g[f],I=_[f];if(x===void 0)continue;x.updateMatrix();let P;switch(xi[I.path]){case xi.weights:P=to;break;case xi.rotation:P=is;break;case xi.position:case xi.scale:default:P=no;break}const S=x.name?x.name:x.uuid,T=A.interpolation!==void 0?mb[A.interpolation]:Zs,$=[];xi[I.path]===xi.weights?x.traverse(function(D){D.morphTargetInfluences&&$.push(D.name?D.name:D.uuid)}):$.push(S);let W=E.array;if(E.normalized){const D=$l(W.constructor),U=new Float32Array(W.length);for(let F=0,Z=W.length;F<Z;F++)U[F]=W[F]*D;W=U}for(let D=0,U=$.length;D<U;D++){const F=new P($[D]+"."+xi[I.path],v.array,W,T);A.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(Q){const q=this instanceof is?pb:pm;return new q(this.times,this.values,this.getValueSize()/3,Q)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(F)}}return new xw(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Sb)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new am:l.length>1?u=new ji:l.length===1?u=l[0]:u=new ct,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Si(u,r),r.extensions&&Nr(n,u,r),r.matrix!==void 0){const h=new ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ji;n.name&&(r.name=s.createUniqueName(n.name)),Si(r,n),n.extensions&&Nr(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Pn||d instanceof Pt)&&h.set(d,p);return u.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=l(r),r})}}function wb(i,e,t){const n=e.attributes,s=new Xn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){const u=$l(Gs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,c=new C;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=$l(Gs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new fi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Tf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=jl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Si(i,e),wb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?_b(i,e.targets,t):i})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let s=i.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bb=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const s=i[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const r=i[t++];e[n++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=i[t++],o=i[t++],a=i[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const r=i[t++],o=i[t++];e[n++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},gm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<i.length;s+=3){const r=i[s],o=s+1<i.length,a=o?i[s+1]:0,c=s+2<i.length,l=c?i[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),n.push(t[u],t[h],t[d],t[p])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(mm(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):bb(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<i.length;){const r=t[i.charAt(s++)],a=s<i.length?t[i.charAt(s)]:0;++s;const l=s<i.length?t[i.charAt(s)]:64;++s;const h=s<i.length?t[i.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new Eb;const d=r<<2|a>>4;if(n.push(d),l!==64){const p=a<<4&240|l>>2;if(n.push(p),h!==64){const g=l<<6&192|h;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Eb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tb=function(i){const e=mm(i);return gm.encodeByteArray(e,!0)},Ua=function(i){return Tb(i).replace(/\./g,"")},Ab=function(i){try{return gm.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=()=>Cb().__FIREBASE_DEFAULTS__,Ib=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i={}.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Lb=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ab(i[1]);return e&&JSON.parse(e)},_m=()=>{try{return Rb()||Ib()||Lb()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Db=i=>{var e,t;return(t=(e=_m())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Pb=i=>{const e=Db(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},vm=()=>{var i;return(i=_m())===null||i===void 0?void 0:i.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=i.iat||0,r=i.sub||i.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},i),a="";return[Ua(JSON.stringify(t)),Ua(JSON.stringify(o)),a].join(".")}function Ob(){try{return typeof indexedDB=="object"}catch{return!1}}function Fb(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="FirebaseError";class mr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=kb,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ym.prototype.create)}}class ym{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Bb(r,n):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new mr(s,a,n)}}function Bb(i,e){return i.replace(Vb,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Vb=/\{\$([^}]+)}/g;function Xl(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const r=i[s],o=e[s];if(Af(r)&&Af(o)){if(!Xl(r,o))return!1}else if(r!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Af(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(i){return i&&i._delegate?i._delegate:i}class so{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Nb;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gb(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});n.resolve(r)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);n===a&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),r=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Hb(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hb(i){return i===Gi?void 0:i}function Gb(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zb(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Qe||(Qe={}));const qb={debug:Qe.DEBUG,verbose:Qe.VERBOSE,info:Qe.INFO,warn:Qe.WARN,error:Qe.ERROR,silent:Qe.SILENT},jb=Qe.INFO,$b={[Qe.DEBUG]:"log",[Qe.VERBOSE]:"log",[Qe.INFO]:"info",[Qe.WARN]:"warn",[Qe.ERROR]:"error"},Xb=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),s=$b[e];if(s)console[s](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xm{constructor(e){this.name=e,this._logLevel=jb,this._logHandler=Xb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Qe.DEBUG,...e),this._logHandler(this,Qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Qe.VERBOSE,...e),this._logHandler(this,Qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Qe.INFO,...e),this._logHandler(this,Qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Qe.WARN,...e),this._logHandler(this,Qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Qe.ERROR,...e),this._logHandler(this,Qe.ERROR,...e)}}const Kb=(i,e)=>e.some(t=>i instanceof t);let Cf,Rf;function Yb(){return Cf||(Cf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qb(){return Rf||(Rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sm=new WeakMap,Kl=new WeakMap,Mm=new WeakMap,ml=new WeakMap,Bu=new WeakMap;function Jb(i){const e=new Promise((t,n)=>{const s=()=>{i.removeEventListener("success",r),i.removeEventListener("error",o)},r=()=>{t(Ei(i.result)),s()},o=()=>{n(i.error),s()};i.addEventListener("success",r),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Sm.set(t,i)}).catch(()=>{}),Bu.set(e,i),e}function Zb(i){if(Kl.has(i))return;const e=new Promise((t,n)=>{const s=()=>{i.removeEventListener("complete",r),i.removeEventListener("error",o),i.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",r),i.addEventListener("error",o),i.addEventListener("abort",o)});Kl.set(i,e)}let Yl={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Kl.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Mm.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ei(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function eE(i){Yl=i(Yl)}function tE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(gl(this),e,...t);return Mm.set(n,e.sort?e.sort():[e]),Ei(n)}:Qb().includes(i)?function(...e){return i.apply(gl(this),e),Ei(Sm.get(this))}:function(...e){return Ei(i.apply(gl(this),e))}}function nE(i){return typeof i=="function"?tE(i):(i instanceof IDBTransaction&&Zb(i),Kb(i,Yb())?new Proxy(i,Yl):i)}function Ei(i){if(i instanceof IDBRequest)return Jb(i);if(ml.has(i))return ml.get(i);const e=nE(i);return e!==i&&(ml.set(i,e),Bu.set(e,i)),e}const gl=i=>Bu.get(i);function iE(i,e,{blocked:t,upgrade:n,blocking:s,terminated:r}={}){const o=indexedDB.open(i,e),a=Ei(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Ei(o.result),c.oldVersion,c.newVersion,Ei(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const sE=["get","getKey","getAll","getAllKeys","count"],rE=["put","add","delete","clear"],_l=new Map;function If(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(_l.get(e))return _l.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=rE.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||sE.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return n&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return _l.set(e,r),r}eE(i=>({...i,get:(e,t,n)=>If(e,t)||i.get(e,t,n),has:(e,t)=>!!If(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aE(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function aE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ql="@firebase/app",Lf="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new xm("@firebase/app"),cE="@firebase/app-compat",lE="@firebase/analytics-compat",uE="@firebase/analytics",hE="@firebase/app-check-compat",dE="@firebase/app-check",fE="@firebase/auth",pE="@firebase/auth-compat",mE="@firebase/database",gE="@firebase/database-compat",_E="@firebase/functions",vE="@firebase/functions-compat",yE="@firebase/installations",xE="@firebase/installations-compat",SE="@firebase/messaging",ME="@firebase/messaging-compat",wE="@firebase/performance",bE="@firebase/performance-compat",EE="@firebase/remote-config",TE="@firebase/remote-config-compat",AE="@firebase/storage",CE="@firebase/storage-compat",RE="@firebase/firestore",IE="@firebase/firestore-compat",LE="firebase",DE="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="[DEFAULT]",PE={[Ql]:"fire-core",[cE]:"fire-core-compat",[uE]:"fire-analytics",[lE]:"fire-analytics-compat",[dE]:"fire-app-check",[hE]:"fire-app-check-compat",[fE]:"fire-auth",[pE]:"fire-auth-compat",[mE]:"fire-rtdb",[gE]:"fire-rtdb-compat",[_E]:"fire-fn",[vE]:"fire-fn-compat",[yE]:"fire-iid",[xE]:"fire-iid-compat",[SE]:"fire-fcm",[ME]:"fire-fcm-compat",[wE]:"fire-perf",[bE]:"fire-perf-compat",[EE]:"fire-rc",[TE]:"fire-rc-compat",[AE]:"fire-gcs",[CE]:"fire-gcs-compat",[RE]:"fire-fst",[IE]:"fire-fst-compat","fire-js":"fire-js",[LE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Map,Zl=new Map;function NE(i,e){try{i.container.addComponent(e)}catch(t){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Fa(i){const e=i.name;if(Zl.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;Zl.set(e,i);for(const t of Oa.values())NE(t,i);return!0}function UE(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ti=new ym("app","Firebase",OE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new so("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=DE;function wm(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Jl,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ti.create("bad-app-name",{appName:String(s)});if(t||(t=vm()),!t)throw Ti.create("no-options");const r=Oa.get(s);if(r){if(Xl(t,r.options)&&Xl(n,r.config))return r;throw Ti.create("duplicate-app",{appName:s})}const o=new Wb(s);for(const c of Zl.values())o.addComponent(c);const a=new FE(t,n,o);return Oa.set(s,a),a}function BE(i=Jl){const e=Oa.get(i);if(!e&&i===Jl&&vm())return wm();if(!e)throw Ti.create("no-app",{appName:i});return e}function Ws(i,e,t){var n;let s=(n=PE[i])!==null&&n!==void 0?n:i;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(a.join(" "));return}Fa(new so(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="firebase-heartbeat-database",zE=1,ro="firebase-heartbeat-store";let vl=null;function bm(){return vl||(vl=iE(VE,zE,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(ro)}}}).catch(i=>{throw Ti.create("idb-open",{originalErrorMessage:i.message})})),vl}async function HE(i){try{return await(await bm()).transaction(ro).objectStore(ro).get(Em(i))}catch(e){if(e instanceof mr)ss.warn(e.message);else{const t=Ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(t.message)}}}async function Df(i,e){try{const n=(await bm()).transaction(ro,"readwrite");await n.objectStore(ro).put(e,Em(i)),await n.done}catch(t){if(t instanceof mr)ss.warn(t.message);else{const n=Ti.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ss.warn(n.message)}}}function Em(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=1024,WE=30*24*60*60*1e3;class qE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $E(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Pf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=WE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pf(),{heartbeatsToSend:t,unsentEntries:n}=jE(this._heartbeatsCache.heartbeats),s=Ua(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Pf(){return new Date().toISOString().substring(0,10)}function jE(i,e=GE){const t=[];let n=i.slice();for(const s of i){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Nf(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nf(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class $E{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ob()?Fb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Df(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Df(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nf(i){return Ua(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(i){Fa(new so("platform-logger",e=>new oE(e),"PRIVATE")),Fa(new so("heartbeat",e=>new qE(e),"PRIVATE")),Ws(Ql,Lf,i),Ws(Ql,Lf,"esm2017"),Ws("fire-js","")}XE("");var KE="firebase",YE="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ws(KE,YE,"app");var QE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},oe,Vu=Vu||{},Ce=QE||self;function sc(i){var e=typeof i;return e=e!="object"?e:i?Array.isArray(i)?"array":e:"null",e=="array"||e=="object"&&typeof i.length=="number"}function Eo(i){var e=typeof i;return e=="object"&&i!=null||e=="function"}function JE(i){return Object.prototype.hasOwnProperty.call(i,yl)&&i[yl]||(i[yl]=++ZE)}var yl="closure_uid_"+(1e9*Math.random()>>>0),ZE=0;function eT(i,e,t){return i.call.apply(i.bind,arguments)}function tT(i,e,t){if(!i)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,n),i.apply(e,s)}}return function(){return i.apply(e,arguments)}}function Xt(i,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xt=eT:Xt=tT,Xt.apply(null,arguments)}function ma(i,e){var t=Array.prototype.slice.call(arguments,1);return function(){var n=t.slice();return n.push.apply(n,arguments),i.apply(this,n)}}function Ut(i,e){function t(){}t.prototype=e.prototype,i.$=e.prototype,i.prototype=new t,i.prototype.constructor=i,i.ac=function(n,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(n,o)}}function Pi(){this.s=this.s,this.o=this.o}var nT=0;Pi.prototype.s=!1;Pi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),nT!=0)&&JE(this)};Pi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tm=Array.prototype.indexOf?function(i,e){return Array.prototype.indexOf.call(i,e,void 0)}:function(i,e){if(typeof i=="string")return typeof e!="string"||e.length!=1?-1:i.indexOf(e,0);for(let t=0;t<i.length;t++)if(t in i&&i[t]===e)return t;return-1};function zu(i){const e=i.length;if(0<e){const t=Array(e);for(let n=0;n<e;n++)t[n]=i[n];return t}return[]}function Uf(i,e){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(sc(n)){const s=i.length||0,r=n.length||0;i.length=s+r;for(let o=0;o<r;o++)i[s+o]=n[o]}else i.push(n)}}function Kt(i,e){this.type=i,this.g=this.target=e,this.defaultPrevented=!1}Kt.prototype.h=function(){this.defaultPrevented=!0};var iT=function(){if(!Ce.addEventListener||!Object.defineProperty)return!1;var i=!1,e=Object.defineProperty({},"passive",{get:function(){i=!0}});try{Ce.addEventListener("test",()=>{},e),Ce.removeEventListener("test",()=>{},e)}catch{}return i}();function oo(i){return/^[\s\xa0]*$/.test(i)}function rc(){var i=Ce.navigator;return i&&(i=i.userAgent)?i:""}function Hn(i){return rc().indexOf(i)!=-1}function Hu(i){return Hu[" "](i),i}Hu[" "]=function(){};function sT(i,e){var t=YT;return Object.prototype.hasOwnProperty.call(t,i)?t[i]:t[i]=e(i)}var rT=Hn("Opera"),ir=Hn("Trident")||Hn("MSIE"),Am=Hn("Edge"),eu=Am||ir,Cm=Hn("Gecko")&&!(rc().toLowerCase().indexOf("webkit")!=-1&&!Hn("Edge"))&&!(Hn("Trident")||Hn("MSIE"))&&!Hn("Edge"),oT=rc().toLowerCase().indexOf("webkit")!=-1&&!Hn("Edge");function Rm(){var i=Ce.document;return i?i.documentMode:void 0}var tu;e:{var xl="",Sl=function(){var i=rc();if(Cm)return/rv:([^\);]+)(\)|;)/.exec(i);if(Am)return/Edge\/([\d\.]+)/.exec(i);if(ir)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(i);if(oT)return/WebKit\/(\S+)/.exec(i);if(rT)return/(?:Version)[ \/]?(\S+)/.exec(i)}();if(Sl&&(xl=Sl?Sl[1]:""),ir){var Ml=Rm();if(Ml!=null&&Ml>parseFloat(xl)){tu=String(Ml);break e}}tu=xl}var nu;if(Ce.document&&ir){var Of=Rm();nu=Of||parseInt(tu,10)||void 0}else nu=void 0;var aT=nu;function ao(i,e){if(Kt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var t=this.type=i.type,n=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=e,e=i.relatedTarget){if(Cm){e:{try{Hu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=i.fromElement:t=="mouseout"&&(e=i.toElement);this.relatedTarget=e,n?(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:cT[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ao.$.h.call(this)}}Ut(ao,Kt);var cT={2:"touch",3:"pen",4:"mouse"};ao.prototype.h=function(){ao.$.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var To="closure_listenable_"+(1e6*Math.random()|0),lT=0;function uT(i,e,t,n,s){this.listener=i,this.proxy=null,this.src=e,this.type=t,this.capture=!!n,this.la=s,this.key=++lT,this.fa=this.ia=!1}function oc(i){i.fa=!0,i.listener=null,i.proxy=null,i.src=null,i.la=null}function Gu(i,e,t){for(const n in i)e.call(t,i[n],n,i)}function hT(i,e){for(const t in i)e.call(void 0,i[t],t,i)}function Im(i){const e={};for(const t in i)e[t]=i[t];return e}const Ff="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lm(i,e){let t,n;for(let s=1;s<arguments.length;s++){n=arguments[s];for(t in n)i[t]=n[t];for(let r=0;r<Ff.length;r++)t=Ff[r],Object.prototype.hasOwnProperty.call(n,t)&&(i[t]=n[t])}}function ac(i){this.src=i,this.g={},this.h=0}ac.prototype.add=function(i,e,t,n,s){var r=i.toString();i=this.g[r],i||(i=this.g[r]=[],this.h++);var o=su(i,e,n,s);return-1<o?(e=i[o],t||(e.ia=!1)):(e=new uT(e,this.src,r,!!n,s),e.ia=t,i.push(e)),e};function iu(i,e){var t=e.type;if(t in i.g){var n=i.g[t],s=Tm(n,e),r;(r=0<=s)&&Array.prototype.splice.call(n,s,1),r&&(oc(e),i.g[t].length==0&&(delete i.g[t],i.h--))}}function su(i,e,t,n){for(var s=0;s<i.length;++s){var r=i[s];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==n)return s}return-1}var Wu="closure_lm_"+(1e6*Math.random()|0),wl={};function Dm(i,e,t,n,s){if(n&&n.once)return Nm(i,e,t,n,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Dm(i,e[r],t,n,s);return null}return t=$u(t),i&&i[To]?i.O(e,t,Eo(n)?!!n.capture:!!n,s):Pm(i,e,t,!1,n,s)}function Pm(i,e,t,n,s,r){if(!e)throw Error("Invalid event type");var o=Eo(s)?!!s.capture:!!s,a=ju(i);if(a||(i[Wu]=a=new ac(i)),t=a.add(e,t,n,o,r),t.proxy)return t;if(n=dT(),t.proxy=n,n.src=i,n.listener=t,i.addEventListener)iT||(s=o),s===void 0&&(s=!1),i.addEventListener(e.toString(),n,s);else if(i.attachEvent)i.attachEvent(Om(e.toString()),n);else if(i.addListener&&i.removeListener)i.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return t}function dT(){function i(t){return e.call(i.src,i.listener,t)}const e=fT;return i}function Nm(i,e,t,n,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Nm(i,e[r],t,n,s);return null}return t=$u(t),i&&i[To]?i.P(e,t,Eo(n)?!!n.capture:!!n,s):Pm(i,e,t,!0,n,s)}function Um(i,e,t,n,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Um(i,e[r],t,n,s);else n=Eo(n)?!!n.capture:!!n,t=$u(t),i&&i[To]?(i=i.i,e=String(e).toString(),e in i.g&&(r=i.g[e],t=su(r,t,n,s),-1<t&&(oc(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete i.g[e],i.h--)))):i&&(i=ju(i))&&(e=i.g[e.toString()],i=-1,e&&(i=su(e,t,n,s)),(t=-1<i?e[i]:null)&&qu(t))}function qu(i){if(typeof i!="number"&&i&&!i.fa){var e=i.src;if(e&&e[To])iu(e.i,i);else{var t=i.type,n=i.proxy;e.removeEventListener?e.removeEventListener(t,n,i.capture):e.detachEvent?e.detachEvent(Om(t),n):e.addListener&&e.removeListener&&e.removeListener(n),(t=ju(e))?(iu(t,i),t.h==0&&(t.src=null,e[Wu]=null)):oc(i)}}}function Om(i){return i in wl?wl[i]:wl[i]="on"+i}function fT(i,e){if(i.fa)i=!0;else{e=new ao(e,this);var t=i.listener,n=i.la||i.src;i.ia&&qu(i),i=t.call(n,e)}return i}function ju(i){return i=i[Wu],i instanceof ac?i:null}var bl="__closure_events_fn_"+(1e9*Math.random()>>>0);function $u(i){return typeof i=="function"?i:(i[bl]||(i[bl]=function(e){return i.handleEvent(e)}),i[bl])}function Nt(){Pi.call(this),this.i=new ac(this),this.S=this,this.J=null}Ut(Nt,Pi);Nt.prototype[To]=!0;Nt.prototype.removeEventListener=function(i,e,t,n){Um(this,i,e,t,n)};function Bt(i,e){var t,n=i.J;if(n)for(t=[];n;n=n.J)t.push(n);if(i=i.S,n=e.type||e,typeof e=="string")e=new Kt(e,i);else if(e instanceof Kt)e.target=e.target||i;else{var s=e;e=new Kt(n,i),Lm(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=ga(o,n,!0,e)&&s}if(o=e.g=i,s=ga(o,n,!0,e)&&s,s=ga(o,n,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=ga(o,n,!1,e)&&s}Nt.prototype.N=function(){if(Nt.$.N.call(this),this.i){var i=this.i,e;for(e in i.g){for(var t=i.g[e],n=0;n<t.length;n++)oc(t[n]);delete i.g[e],i.h--}}this.J=null};Nt.prototype.O=function(i,e,t,n){return this.i.add(String(i),e,!1,t,n)};Nt.prototype.P=function(i,e,t,n){return this.i.add(String(i),e,!0,t,n)};function ga(i,e,t,n){if(e=i.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&iu(i.i,o),s=a.call(c,n)!==!1&&s}}return s&&!n.defaultPrevented}var Xu=Ce.JSON.stringify;class pT{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function mT(){var i=Ku;let e=null;return i.g&&(e=i.g,i.g=i.g.next,i.g||(i.h=null),e.next=null),e}class gT{constructor(){this.h=this.g=null}add(e,t){const n=Fm.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Fm=new pT(()=>new _T,i=>i.reset());class _T{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function vT(i){var e=1;i=i.split(":");const t=[];for(;0<e&&i.length;)t.push(i.shift()),e--;return i.length&&t.push(i.join(":")),t}function yT(i){Ce.setTimeout(()=>{throw i},0)}let co,lo=!1,Ku=new gT,km=()=>{const i=Ce.Promise.resolve(void 0);co=()=>{i.then(xT)}};var xT=()=>{for(var i;i=mT();){try{i.h.call(i.g)}catch(t){yT(t)}var e=Fm;e.j(i),100>e.h&&(e.h++,i.next=e.g,e.g=i)}lo=!1};function cc(i,e){Nt.call(this),this.h=i||1,this.g=e||Ce,this.j=Xt(this.qb,this),this.l=Date.now()}Ut(cc,Nt);oe=cc.prototype;oe.ga=!1;oe.T=null;oe.qb=function(){if(this.ga){var i=Date.now()-this.l;0<i&&i<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-i):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Bt(this,"tick"),this.ga&&(Yu(this),this.start()))}};oe.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yu(i){i.ga=!1,i.T&&(i.g.clearTimeout(i.T),i.T=null)}oe.N=function(){cc.$.N.call(this),Yu(this),delete this.g};function Qu(i,e,t){if(typeof i=="function")t&&(i=Xt(i,t));else if(i&&typeof i.handleEvent=="function")i=Xt(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Ce.setTimeout(i,e||0)}function Bm(i){i.g=Qu(()=>{i.g=null,i.i&&(i.i=!1,Bm(i))},i.j);const e=i.h;i.h=null,i.m.apply(null,e)}class ST extends Pi{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bm(this)}N(){super.N(),this.g&&(Ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function uo(i){Pi.call(this),this.h=i,this.g={}}Ut(uo,Pi);var kf=[];function Vm(i,e,t,n){Array.isArray(t)||(t&&(kf[0]=t.toString()),t=kf);for(var s=0;s<t.length;s++){var r=Dm(e,t[s],n||i.handleEvent,!1,i.h||i);if(!r)break;i.g[r.key]=r}}function zm(i){Gu(i.g,function(e,t){this.g.hasOwnProperty(t)&&qu(e)},i),i.g={}}uo.prototype.N=function(){uo.$.N.call(this),zm(this)};uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function lc(){this.g=!0}lc.prototype.Ea=function(){this.g=!1};function MT(i,e,t,n,s,r){i.info(function(){if(i.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+n+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function wT(i,e,t,n,s,r,o){i.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function Bs(i,e,t,n){i.info(function(){return"XMLHTTP TEXT ("+e+"): "+ET(i,t)+(n?" "+n:"")})}function bT(i,e){i.info(function(){return"TIMEOUT: "+e})}lc.prototype.info=function(){};function ET(i,e){if(!i.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(i=0;i<t.length;i++)if(Array.isArray(t[i])){var n=t[i];if(!(2>n.length)){var s=n[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Xu(t)}catch{return e}}var ls={},Bf=null;function uc(){return Bf=Bf||new Nt}ls.Ta="serverreachability";function Hm(i){Kt.call(this,ls.Ta,i)}Ut(Hm,Kt);function ho(i){const e=uc();Bt(e,new Hm(e))}ls.STAT_EVENT="statevent";function Gm(i,e){Kt.call(this,ls.STAT_EVENT,i),this.stat=e}Ut(Gm,Kt);function rn(i){const e=uc();Bt(e,new Gm(e,i))}ls.Ua="timingevent";function Wm(i,e){Kt.call(this,ls.Ua,i),this.size=e}Ut(Wm,Kt);function Ao(i,e){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return Ce.setTimeout(function(){i()},e)}var hc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ju(){}Ju.prototype.h=null;function Vf(i){return i.h||(i.h=i.i())}function jm(){}var Co={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Zu(){Kt.call(this,"d")}Ut(Zu,Kt);function eh(){Kt.call(this,"c")}Ut(eh,Kt);var ru;function dc(){}Ut(dc,Ju);dc.prototype.g=function(){return new XMLHttpRequest};dc.prototype.i=function(){return{}};ru=new dc;function Ro(i,e,t,n){this.l=i,this.j=e,this.m=t,this.W=n||1,this.U=new uo(this),this.P=TT,i=eu?125:void 0,this.V=new cc(i),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $m}function $m(){this.i=null,this.g="",this.h=!1}var TT=45e3,ou={},ka={};oe=Ro.prototype;oe.setTimeout=function(i){this.P=i};function au(i,e,t){i.L=1,i.v=pc(li(e)),i.s=t,i.S=!0,Xm(i,null)}function Xm(i,e){i.G=Date.now(),Io(i),i.A=li(i.v);var t=i.A,n=i.W;Array.isArray(n)||(n=[String(n)]),ng(t.i,"t",n),i.C=0,t=i.l.J,i.h=new $m,i.g=wg(i.l,t?e:null,!i.s),0<i.O&&(i.M=new ST(Xt(i.Pa,i,i.g),i.O)),Vm(i.U,i.g,"readystatechange",i.nb),e=i.I?Im(i.I):{},i.s?(i.u||(i.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",i.g.ha(i.A,i.u,i.s,e)):(i.u="GET",i.g.ha(i.A,i.u,null,e)),ho(),MT(i.j,i.u,i.A,i.m,i.W,i.s)}oe.nb=function(i){i=i.target;const e=this.M;e&&Gn(i)==3?e.l():this.Pa(i)};oe.Pa=function(i){try{if(i==this.g)e:{const u=Gn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||eu||this.g&&(this.h.h||this.g.ja()||Wf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ho(3):ho(2)),fc(this);var t=this.g.da();this.ca=t;t:if(Km(this)){var n=Wf(this.g);i="";var s=n.length,r=Gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$i(this),qr(this);var o="";break t}this.h.i=new Ce.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,i+=this.h.i.decode(n[e],{stream:r&&e==s-1});n.splice(0,s),this.h.g+=i,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,wT(this.j,this.u,this.A,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oo(a)){var l=a;break t}}l=null}if(t=l)Bs(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cu(this,t);else{this.i=!1,this.o=3,rn(12),$i(this),qr(this);break e}}this.S?(Ym(this,u,o),eu&&this.i&&u==3&&(Vm(this.U,this.V,"tick",this.mb),this.V.start())):(Bs(this.j,this.m,o,null),cu(this,o)),u==4&&$i(this),this.i&&!this.J&&(u==4?yg(this.l,this):(this.i=!1,Io(this)))}else $T(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,rn(12)):(this.o=0,rn(13)),$i(this),qr(this)}}}catch{}finally{}};function Km(i){return i.g?i.u=="GET"&&i.L!=2&&i.l.Ha:!1}function Ym(i,e,t){let n=!0,s;for(;!i.J&&i.C<t.length;)if(s=AT(i,t),s==ka){e==4&&(i.o=4,rn(14),n=!1),Bs(i.j,i.m,null,"[Incomplete Response]");break}else if(s==ou){i.o=4,rn(15),Bs(i.j,i.m,t,"[Invalid Chunk]"),n=!1;break}else Bs(i.j,i.m,s,null),cu(i,s);Km(i)&&s!=ka&&s!=ou&&(i.h.g="",i.C=0),e!=4||t.length!=0||i.h.h||(i.o=1,rn(16),n=!1),i.i=i.i&&n,n?0<t.length&&!i.ba&&(i.ba=!0,e=i.l,e.g==i&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),oh(e),e.M=!0,rn(11))):(Bs(i.j,i.m,t,"[Invalid Chunked Response]"),$i(i),qr(i))}oe.mb=function(){if(this.g){var i=Gn(this.g),e=this.g.ja();this.C<e.length&&(fc(this),Ym(this,i,e),this.i&&i!=4&&Io(this))}};function AT(i,e){var t=i.C,n=e.indexOf(`
`,t);return n==-1?ka:(t=Number(e.substring(t,n)),isNaN(t)?ou:(n+=1,n+t>e.length?ka:(e=e.slice(n,n+t),i.C=n+t,e)))}oe.cancel=function(){this.J=!0,$i(this)};function Io(i){i.Y=Date.now()+i.P,Qm(i,i.P)}function Qm(i,e){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ao(Xt(i.lb,i),e)}function fc(i){i.B&&(Ce.clearTimeout(i.B),i.B=null)}oe.lb=function(){this.B=null;const i=Date.now();0<=i-this.Y?(bT(this.j,this.A),this.L!=2&&(ho(),rn(17)),$i(this),this.o=2,qr(this)):Qm(this,this.Y-i)};function qr(i){i.l.H==0||i.J||yg(i.l,i)}function $i(i){fc(i);var e=i.M;e&&typeof e.sa=="function"&&e.sa(),i.M=null,Yu(i.V),zm(i.U),i.g&&(e=i.g,i.g=null,e.abort(),e.sa())}function cu(i,e){try{var t=i.l;if(t.H!=0&&(t.g==i||lu(t.i,i))){if(!i.K&&lu(t.i,i)&&t.H==3){try{var n=t.Ja.g.parse(e)}catch{n=null}if(Array.isArray(n)&&n.length==3){var s=n;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<i.G)za(t),_c(t);else break e;rh(t),rn(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=Ao(Xt(t.ib,t),6e3));if(1>=rg(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Xi(t,11)}else if((i.K||t.g==i)&&za(t),!oo(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(n=1.5*d,t.L=n,t.l.info("backChannelRequestTimeoutMs_="+n)),n=t;const p=i.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=n.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(th(r,r.h),r.h=null))}if(n.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(n.Da=_,at(n.I,n.F,_))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-i.G,t.l.info("Handshake RTT: "+t.S+"ms")),n=t;var o=i;if(n.wa=Mg(n,n.J?n.pa:null,n.Y),o.K){og(n.i,o);var a=o,c=n.L;c&&a.setTimeout(c),a.B&&(fc(a),Io(a)),n.g=o}else _g(n);0<t.j.length&&vc(t)}else l[0]!="stop"&&l[0]!="close"||Xi(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Xi(t,7):sh(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}ho(4)}catch{}}function CT(i){if(i.Z&&typeof i.Z=="function")return i.Z();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(sc(i)){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n]);return e}e=[],t=0;for(n in i)e[t++]=i[n];return e}function RT(i){if(i.ta&&typeof i.ta=="function")return i.ta();if(!i.Z||typeof i.Z!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(sc(i)||typeof i=="string"){var e=[];i=i.length;for(var t=0;t<i;t++)e.push(t);return e}e=[],t=0;for(const n in i)e[t++]=n;return e}}}function Jm(i,e){if(i.forEach&&typeof i.forEach=="function")i.forEach(e,void 0);else if(sc(i)||typeof i=="string")Array.prototype.forEach.call(i,e,void 0);else for(var t=RT(i),n=CT(i),s=n.length,r=0;r<s;r++)e.call(void 0,n[r],t&&t[r],i)}var Zm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IT(i,e){if(i){i=i.split("&");for(var t=0;t<i.length;t++){var n=i[t].indexOf("="),s=null;if(0<=n){var r=i[t].substring(0,n);s=i[t].substring(n+1)}else r=i[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qi(i){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,i instanceof Qi){this.h=i.h,Ba(this,i.j),this.s=i.s,this.g=i.g,Va(this,i.m),this.l=i.l;var e=i.i,t=new fo;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),zf(this,t),this.o=i.o}else i&&(e=String(i).match(Zm))?(this.h=!1,Ba(this,e[1]||"",!0),this.s=Br(e[2]||""),this.g=Br(e[3]||"",!0),Va(this,e[4]),this.l=Br(e[5]||"",!0),zf(this,e[6]||"",!0),this.o=Br(e[7]||"")):(this.h=!1,this.i=new fo(null,this.h))}Qi.prototype.toString=function(){var i=[],e=this.j;e&&i.push(Vr(e,Hf,!0),":");var t=this.g;return(t||e=="file")&&(i.push("//"),(e=this.s)&&i.push(Vr(e,Hf,!0),"@"),i.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&i.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&i.push("/"),i.push(Vr(t,t.charAt(0)=="/"?PT:DT,!0))),(t=this.i.toString())&&i.push("?",t),(t=this.o)&&i.push("#",Vr(t,UT)),i.join("")};function li(i){return new Qi(i)}function Ba(i,e,t){i.j=t?Br(e,!0):e,i.j&&(i.j=i.j.replace(/:$/,""))}function Va(i,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);i.m=e}else i.m=null}function zf(i,e,t){e instanceof fo?(i.i=e,OT(i.i,i.h)):(t||(e=Vr(e,NT)),i.i=new fo(e,i.h))}function at(i,e,t){i.i.set(e,t)}function pc(i){return at(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Br(i,e){return i?e?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Vr(i,e,t){return typeof i=="string"?(i=encodeURI(i).replace(e,LT),t&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function LT(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Hf=/[#\/\?@]/g,DT=/[#\?:]/g,PT=/[#\?]/g,NT=/[#\?@]/g,UT=/#/g;function fo(i,e){this.h=this.g=null,this.i=i||null,this.j=!!e}function Ni(i){i.g||(i.g=new Map,i.h=0,i.i&&IT(i.i,function(e,t){i.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}oe=fo.prototype;oe.add=function(i,e){Ni(this),this.i=null,i=gr(this,i);var t=this.g.get(i);return t||this.g.set(i,t=[]),t.push(e),this.h+=1,this};function eg(i,e){Ni(i),e=gr(i,e),i.g.has(e)&&(i.i=null,i.h-=i.g.get(e).length,i.g.delete(e))}function tg(i,e){return Ni(i),e=gr(i,e),i.g.has(e)}oe.forEach=function(i,e){Ni(this),this.g.forEach(function(t,n){t.forEach(function(s){i.call(e,s,n,this)},this)},this)};oe.ta=function(){Ni(this);const i=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let n=0;n<e.length;n++){const s=i[n];for(let r=0;r<s.length;r++)t.push(e[n])}return t};oe.Z=function(i){Ni(this);let e=[];if(typeof i=="string")tg(this,i)&&(e=e.concat(this.g.get(gr(this,i))));else{i=Array.from(this.g.values());for(let t=0;t<i.length;t++)e=e.concat(i[t])}return e};oe.set=function(i,e){return Ni(this),this.i=null,i=gr(this,i),tg(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[e]),this.h+=1,this};oe.get=function(i,e){return i?(i=this.Z(i),0<i.length?String(i[0]):e):e};function ng(i,e,t){eg(i,e),0<t.length&&(i.i=null,i.g.set(gr(i,e),zu(t)),i.h+=t.length)}oe.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var n=e[t];const r=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var s=r;o[n]!==""&&(s+="="+encodeURIComponent(String(o[n]))),i.push(s)}}return this.i=i.join("&")};function gr(i,e){return e=String(e),i.j&&(e=e.toLowerCase()),e}function OT(i,e){e&&!i.j&&(Ni(i),i.i=null,i.g.forEach(function(t,n){var s=n.toLowerCase();n!=s&&(eg(this,n),ng(this,s,t))},i)),i.j=e}var FT=class{constructor(i,e){this.g=i,this.map=e}};function ig(i){this.l=i||kT,Ce.PerformanceNavigationTiming?(i=Ce.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(Ce.g&&Ce.g.Ka&&Ce.g.Ka()&&Ce.g.Ka().ec),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kT=10;function sg(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function rg(i){return i.h?1:i.g?i.g.size:0}function lu(i,e){return i.h?i.h==e:i.g?i.g.has(e):!1}function th(i,e){i.g?i.g.add(e):i.h=e}function og(i,e){i.h&&i.h==e?i.h=null:i.g&&i.g.has(e)&&i.g.delete(e)}ig.prototype.cancel=function(){if(this.i=ag(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ag(i){if(i.h!=null)return i.i.concat(i.h.F);if(i.g!=null&&i.g.size!==0){let e=i.i;for(const t of i.g.values())e=e.concat(t.F);return e}return zu(i.i)}var BT=class{stringify(i){return Ce.JSON.stringify(i,void 0)}parse(i){return Ce.JSON.parse(i,void 0)}};function VT(){this.g=new BT}function zT(i,e,t){const n=t||"";try{Jm(i,function(s,r){let o=s;Eo(s)&&(o=Xu(s)),e.push(n+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(n+"type="+encodeURIComponent("_badmap")),s}}function HT(i,e){const t=new lc;if(Ce.Image){const n=new Image;n.onload=ma(_a,t,n,"TestLoadImage: loaded",!0,e),n.onerror=ma(_a,t,n,"TestLoadImage: error",!1,e),n.onabort=ma(_a,t,n,"TestLoadImage: abort",!1,e),n.ontimeout=ma(_a,t,n,"TestLoadImage: timeout",!1,e),Ce.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=i}else e(!1)}function _a(i,e,t,n,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(n)}catch{}}function Lo(i){this.l=i.fc||null,this.j=i.ob||!1}Ut(Lo,Ju);Lo.prototype.g=function(){return new mc(this.l,this.j)};Lo.prototype.i=function(i){return function(){return i}}({});function mc(i,e){Nt.call(this),this.F=i,this.u=e,this.m=void 0,this.readyState=nh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ut(mc,Nt);var nh=0;oe=mc.prototype;oe.open=function(i,e){if(this.readyState!=nh)throw this.abort(),Error("Error reopening a connection");this.C=i,this.B=e,this.readyState=1,po(this)};oe.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};i&&(e.body=i),(this.F||Ce).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};oe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Do(this)),this.readyState=nh};oe.$a=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Ce.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cg(this)}else i.text().then(this.Za.bind(this),this.ka.bind(this))};function cg(i){i.j.read().then(i.Xa.bind(i)).catch(i.ka.bind(i))}oe.Xa=function(i){if(this.g){if(this.u&&i.value)this.response.push(i.value);else if(!this.u){var e=i.value?i.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!i.done}))&&(this.response=this.responseText+=e)}i.done?Do(this):po(this),this.readyState==3&&cg(this)}};oe.Za=function(i){this.g&&(this.response=this.responseText=i,Do(this))};oe.Ya=function(i){this.g&&(this.response=i,Do(this))};oe.ka=function(){this.g&&Do(this)};function Do(i){i.readyState=4,i.l=null,i.j=null,i.A=null,po(i)}oe.setRequestHeader=function(i,e){this.v.append(i,e)};oe.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""};oe.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,i.push(t[0]+": "+t[1]),t=e.next();return i.join(`\r
`)};function po(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(mc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});var GT=Ce.JSON.parse;function mt(i){Nt.call(this),this.headers=new Map,this.u=i||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lg,this.L=this.M=!1}Ut(mt,Nt);var lg="",WT=/^https?$/i,qT=["POST","PUT"];oe=mt.prototype;oe.Oa=function(i){this.M=i};oe.ha=function(i,e,t,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+i);e=e?e.toUpperCase():"GET",this.I=i,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ru.g(),this.C=this.u?Vf(this.u):Vf(ru),this.g.onreadystatechange=Xt(this.La,this);try{this.G=!0,this.g.open(e,String(i),!0),this.G=!1}catch(r){Gf(this,r);return}if(i=t||"",t=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var s in n)t.set(s,n[s]);else if(typeof n.keys=="function"&&typeof n.get=="function")for(const r of n.keys())t.set(r,n.get(r));else throw Error("Unknown input type for opt_headers: "+String(n));n=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),s=Ce.FormData&&i instanceof Ce.FormData,!(0<=Tm(qT,e))||n||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{dg(this),0<this.B&&((this.L=jT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xt(this.ua,this)):this.A=Qu(this.ua,this.B,this)),this.v=!0,this.g.send(i),this.v=!1}catch(r){Gf(this,r)}};function jT(i){return ir&&typeof i.timeout=="number"&&i.ontimeout!==void 0}oe.ua=function(){typeof Vu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Bt(this,"timeout"),this.abort(8))};function Gf(i,e){i.h=!1,i.g&&(i.l=!0,i.g.abort(),i.l=!1),i.j=e,i.m=5,ug(i),gc(i)}function ug(i){i.F||(i.F=!0,Bt(i,"complete"),Bt(i,"error"))}oe.abort=function(i){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=i||7,Bt(this,"complete"),Bt(this,"abort"),gc(this))};oe.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gc(this,!0)),mt.$.N.call(this)};oe.La=function(){this.s||(this.G||this.v||this.l?hg(this):this.kb())};oe.kb=function(){hg(this)};function hg(i){if(i.h&&typeof Vu<"u"&&(!i.C[1]||Gn(i)!=4||i.da()!=2)){if(i.v&&Gn(i)==4)Qu(i.La,0,i);else if(Bt(i,"readystatechange"),Gn(i)==4){i.h=!1;try{const o=i.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var n;if(n=o===0){var s=String(i.I).match(Zm)[1]||null;!s&&Ce.self&&Ce.self.location&&(s=Ce.self.location.protocol.slice(0,-1)),n=!WT.test(s?s.toLowerCase():"")}t=n}if(t)Bt(i,"complete"),Bt(i,"success");else{i.m=6;try{var r=2<Gn(i)?i.g.statusText:""}catch{r=""}i.j=r+" ["+i.da()+"]",ug(i)}}finally{gc(i)}}}}function gc(i,e){if(i.g){dg(i);const t=i.g,n=i.C[0]?()=>{}:null;i.g=null,i.C=null,e||Bt(i,"ready");try{t.onreadystatechange=n}catch{}}}function dg(i){i.g&&i.L&&(i.g.ontimeout=null),i.A&&(Ce.clearTimeout(i.A),i.A=null)}oe.isActive=function(){return!!this.g};function Gn(i){return i.g?i.g.readyState:0}oe.da=function(){try{return 2<Gn(this)?this.g.status:-1}catch{return-1}};oe.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};oe.Wa=function(i){if(this.g){var e=this.g.responseText;return i&&e.indexOf(i)==0&&(e=e.substring(i.length)),GT(e)}};function Wf(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.K){case lg:case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function $T(i){const e={};i=(i.g&&2<=Gn(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let n=0;n<i.length;n++){if(oo(i[n]))continue;var t=vT(i[n]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[s]||[];e[s]=r,r.push(t)}hT(e,function(n){return n.join(", ")})}oe.Ia=function(){return this.m};oe.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fg(i){let e="";return Gu(i,function(t,n){e+=n,e+=":",e+=t,e+=`\r
`}),e}function ih(i,e,t){e:{for(n in t){var n=!1;break e}n=!0}n||(t=fg(t),typeof i=="string"?t!=null&&encodeURIComponent(String(t)):at(i,e,t))}function Ur(i,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[i]||e}function pg(i){this.Ga=0,this.j=[],this.l=new lc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ur("failFast",!1,i),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ur("baseRetryDelayMs",5e3,i),this.hb=Ur("retryDelaySeedMs",1e4,i),this.eb=Ur("forwardChannelMaxRetries",2,i),this.xa=Ur("forwardChannelRequestTimeoutMs",2e4,i),this.va=i&&i.xmlHttpFactory||void 0,this.Ha=i&&i.dc||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.i=new ig(i&&i.concurrentRequestLimit),this.Ja=new VT,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=i&&i.bc||!1,i&&i.Ea&&this.l.Ea(),i&&i.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&i&&i.detectBufferingProxy||!1,this.qa=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.qa=i.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}oe=pg.prototype;oe.ra=8;oe.H=1;function sh(i){if(mg(i),i.H==3){var e=i.W++,t=li(i.I);if(at(t,"SID",i.K),at(t,"RID",e),at(t,"TYPE","terminate"),Po(i,t),e=new Ro(i,i.l,e),e.L=2,e.v=pc(li(t)),t=!1,Ce.navigator&&Ce.navigator.sendBeacon)try{t=Ce.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&Ce.Image&&(new Image().src=e.v,t=!0),t||(e.g=wg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Io(e)}Sg(i)}function _c(i){i.g&&(oh(i),i.g.cancel(),i.g=null)}function mg(i){_c(i),i.u&&(Ce.clearTimeout(i.u),i.u=null),za(i),i.i.cancel(),i.m&&(typeof i.m=="number"&&Ce.clearTimeout(i.m),i.m=null)}function vc(i){if(!sg(i.i)&&!i.m){i.m=!0;var e=i.Na;co||km(),lo||(co(),lo=!0),Ku.add(e,i),i.C=0}}function XT(i,e){return rg(i.i)>=i.i.j-(i.m?1:0)?!1:i.m?(i.j=e.F.concat(i.j),!0):i.H==1||i.H==2||i.C>=(i.cb?0:i.eb)?!1:(i.m=Ao(Xt(i.Na,i,e),xg(i,i.C)),i.C++,!0)}oe.Na=function(i){if(this.m)if(this.m=null,this.H==1){if(!i){this.W=Math.floor(1e5*Math.random()),i=this.W++;const s=new Ro(this,this.l,i);let r=this.s;if(this.U&&(r?(r=Im(r),Lm(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var n=this.j[t];if("__data__"in n.map&&(n=n.map.__data__,typeof n=="string")){n=n.length;break t}n=void 0}if(n===void 0)break;if(e+=n,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=gg(this,s,e),t=li(this.I),at(t,"RID",i),at(t,"CVER",22),this.F&&at(t,"X-HTTP-Session-Id",this.F),Po(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(fg(r)))+"&"+e:this.o&&ih(t,this.o,r)),th(this.i,s),this.bb&&at(t,"TYPE","init"),this.P?(at(t,"$req",e),at(t,"SID","null"),s.aa=!0,au(s,t,null)):au(s,t,e),this.H=2}}else this.H==3&&(i?qf(this,i):this.j.length==0||sg(this.i)||qf(this))};function qf(i,e){var t;e?t=e.m:t=i.W++;const n=li(i.I);at(n,"SID",i.K),at(n,"RID",t),at(n,"AID",i.V),Po(i,n),i.o&&i.s&&ih(n,i.o,i.s),t=new Ro(i,i.l,t,i.C+1),i.o===null&&(t.I=i.s),e&&(i.j=e.F.concat(i.j)),e=gg(i,t,1e3),t.setTimeout(Math.round(.5*i.xa)+Math.round(.5*i.xa*Math.random())),th(i.i,t),au(t,n,e)}function Po(i,e){i.na&&Gu(i.na,function(t,n){at(e,n,t)}),i.h&&Jm({},function(t,n){at(e,n,t)})}function gg(i,e,t){t=Math.min(i.j.length,t);var n=i.h?Xt(i.h.Va,i.h,i):null;e:{var s=i.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{zT(u,o,"req"+l+"_")}catch{n&&n(u)}}if(a){n=o.join("&");break e}}}return i=i.j.splice(0,t),e.F=i,n}function _g(i){if(!i.g&&!i.u){i.ba=1;var e=i.Ma;co||km(),lo||(co(),lo=!0),Ku.add(e,i),i.A=0}}function rh(i){return i.g||i.u||3<=i.A?!1:(i.ba++,i.u=Ao(Xt(i.Ma,i),xg(i,i.A)),i.A++,!0)}oe.Ma=function(){if(this.u=null,vg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var i=2*this.S;this.l.info("BP detection timer enabled: "+i),this.B=Ao(Xt(this.jb,this),i)}};oe.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rn(10),_c(this),vg(this))};function oh(i){i.B!=null&&(Ce.clearTimeout(i.B),i.B=null)}function vg(i){i.g=new Ro(i,i.l,"rpc",i.ba),i.o===null&&(i.g.I=i.s),i.g.O=0;var e=li(i.wa);at(e,"RID","rpc"),at(e,"SID",i.K),at(e,"AID",i.V),at(e,"CI",i.G?"0":"1"),!i.G&&i.qa&&at(e,"TO",i.qa),at(e,"TYPE","xmlhttp"),Po(i,e),i.o&&i.s&&ih(e,i.o,i.s),i.L&&i.g.setTimeout(i.L);var t=i.g;i=i.pa,t.L=1,t.v=pc(li(e)),t.s=null,t.S=!0,Xm(t,i)}oe.ib=function(){this.v!=null&&(this.v=null,_c(this),rh(this),rn(19))};function za(i){i.v!=null&&(Ce.clearTimeout(i.v),i.v=null)}function yg(i,e){var t=null;if(i.g==e){za(i),oh(i),i.g=null;var n=2}else if(lu(i.i,e))t=e.F,og(i.i,e),n=1;else return;if(i.H!=0){if(e.i)if(n==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var s=i.C;n=uc(),Bt(n,new Wm(n,t)),vc(i)}else _g(i);else if(s=e.o,s==3||s==0&&0<e.ca||!(n==1&&XT(i,e)||n==2&&rh(i)))switch(t&&0<t.length&&(e=i.i,e.i=e.i.concat(t)),s){case 1:Xi(i,5);break;case 4:Xi(i,10);break;case 3:Xi(i,6);break;default:Xi(i,2)}}}function xg(i,e){let t=i.ab+Math.floor(Math.random()*i.hb);return i.isActive()||(t*=2),t*e}function Xi(i,e){if(i.l.info("Error code "+e),e==2){var t=null;i.h&&(t=null);var n=Xt(i.pb,i);t||(t=new Qi("//www.google.com/images/cleardot.gif"),Ce.location&&Ce.location.protocol=="http"||Ba(t,"https"),pc(t)),HT(t.toString(),n)}else rn(2);i.H=0,i.h&&i.h.za(e),Sg(i),mg(i)}oe.pb=function(i){i?(this.l.info("Successfully pinged google.com"),rn(2)):(this.l.info("Failed to ping google.com"),rn(1))};function Sg(i){if(i.H=0,i.ma=[],i.h){const e=ag(i.i);(e.length!=0||i.j.length!=0)&&(Uf(i.ma,e),Uf(i.ma,i.j),i.i.i.length=0,zu(i.j),i.j.length=0),i.h.ya()}}function Mg(i,e,t){var n=t instanceof Qi?li(t):new Qi(t);if(n.g!="")e&&(n.g=e+"."+n.g),Va(n,n.m);else{var s=Ce.location;n=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Qi(null);n&&Ba(r,n),e&&(r.g=e),s&&Va(r,s),t&&(r.l=t),n=r}return t=i.F,e=i.Da,t&&e&&at(n,t,e),at(n,"VER",i.ra),Po(i,n),n}function wg(i,e,t){if(e&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&i.Ha&&!i.va?new mt(new Lo({ob:!0})):new mt(i.va),e.Oa(i.J),e}oe.isActive=function(){return!!this.h&&this.h.isActive(this)};function bg(){}oe=bg.prototype;oe.Ba=function(){};oe.Aa=function(){};oe.za=function(){};oe.ya=function(){};oe.isActive=function(){return!0};oe.Va=function(){};function Ha(){if(ir&&!(10<=Number(aT)))throw Error("Environmental error: no available transport.")}Ha.prototype.g=function(i,e){return new gn(i,e)};function gn(i,e){Nt.call(this),this.g=new pg(e),this.l=i,this.h=e&&e.messageUrlParams||null,i=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.s=i,i=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(i?i["X-WebChannel-Content-Type"]=e.messageContentType:i={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(i?i["X-WebChannel-Client-Profile"]=e.Ca:i={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=i,(i=e&&e.cc)&&!oo(i)&&(this.g.o=i),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oo(e)&&(this.g.F=e,i=this.h,i!==null&&e in i&&(i=this.h,e in i&&delete i[e])),this.j=new _r(this)}Ut(gn,Nt);gn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var i=this.g,e=this.l,t=this.h||void 0;rn(0),i.Y=e,i.na=t||{},i.G=i.aa,i.I=Mg(i,null,i.Y),vc(i)};gn.prototype.close=function(){sh(this.g)};gn.prototype.u=function(i){var e=this.g;if(typeof i=="string"){var t={};t.__data__=i,i=t}else this.v&&(t={},t.__data__=Xu(i),i=t);e.j.push(new FT(e.fb++,i)),e.H==3&&vc(e)};gn.prototype.N=function(){this.g.h=null,delete this.j,sh(this.g),delete this.g,gn.$.N.call(this)};function Eg(i){Zu.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var e=i.__sm__;if(e){e:{for(const t in e){i=t;break e}i=void 0}(this.i=i)&&(i=this.i,e=e!==null&&i in e?e[i]:void 0),this.data=e}else this.data=i}Ut(Eg,Zu);function Tg(){eh.call(this),this.status=1}Ut(Tg,eh);function _r(i){this.g=i}Ut(_r,bg);_r.prototype.Ba=function(){Bt(this.g,"a")};_r.prototype.Aa=function(i){Bt(this.g,new Eg(i))};_r.prototype.za=function(i){Bt(this.g,new Tg)};_r.prototype.ya=function(){Bt(this.g,"b")};function KT(){this.blockSize=-1}function Un(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ut(Un,KT);Un.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function El(i,e,t){t||(t=0);var n=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)n[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)n[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=i.g[0],t=i.g[1],s=i.g[2];var r=i.g[3],o=e+(r^t&(s^r))+n[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+n[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+n[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+n[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+n[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+n[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+n[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+n[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+n[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+n[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+n[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+n[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+n[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+n[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+n[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+n[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(t^s))+n[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+n[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+n[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+n[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+n[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+n[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+n[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+n[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+n[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+n[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+n[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+n[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+n[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+n[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+n[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+n[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^r)+n[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+n[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+n[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+n[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+n[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+n[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+n[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+n[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+n[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+n[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+n[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+n[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+n[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+n[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+n[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+n[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~r))+n[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+n[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+n[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+n[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+n[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+n[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+n[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+n[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+n[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+n[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+n[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+n[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+n[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+n[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+n[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+n[9]+3951481745&4294967295,i.g[0]=i.g[0]+e&4294967295,i.g[1]=i.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,i.g[2]=i.g[2]+s&4294967295,i.g[3]=i.g[3]+r&4294967295}Un.prototype.j=function(i,e){e===void 0&&(e=i.length);for(var t=e-this.blockSize,n=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=t;)El(this,i,r),r+=this.blockSize;if(typeof i=="string"){for(;r<e;)if(n[s++]=i.charCodeAt(r++),s==this.blockSize){El(this,n),s=0;break}}else for(;r<e;)if(n[s++]=i[r++],s==this.blockSize){El(this,n),s=0;break}}this.h=s,this.i+=e};Un.prototype.l=function(){var i=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);i[0]=128;for(var e=1;e<i.length-8;++e)i[e]=0;var t=8*this.i;for(e=i.length-8;e<i.length;++e)i[e]=t&255,t/=256;for(this.j(i),i=Array(16),e=t=0;4>e;++e)for(var n=0;32>n;n+=8)i[t++]=this.g[e]>>>n&255;return i};function tt(i,e){this.h=e;for(var t=[],n=!0,s=i.length-1;0<=s;s--){var r=i[s]|0;n&&r==e||(t[s]=r,n=!1)}this.g=t}var YT={};function ah(i){return-128<=i&&128>i?sT(i,function(e){return new tt([e|0],0>e?-1:0)}):new tt([i|0],0>i?-1:0)}function Wn(i){if(isNaN(i)||!isFinite(i))return qs;if(0>i)return kt(Wn(-i));for(var e=[],t=1,n=0;i>=t;n++)e[n]=i/t|0,t*=uu;return new tt(e,0)}function Ag(i,e){if(i.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(i.charAt(0)=="-")return kt(Ag(i.substring(1),e));if(0<=i.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Wn(Math.pow(e,8)),n=qs,s=0;s<i.length;s+=8){var r=Math.min(8,i.length-s),o=parseInt(i.substring(s,s+r),e);8>r?(r=Wn(Math.pow(e,r)),n=n.R(r).add(Wn(o))):(n=n.R(t),n=n.add(Wn(o)))}return n}var uu=4294967296,qs=ah(0),hu=ah(1),jf=ah(16777216);oe=tt.prototype;oe.ea=function(){if(bn(this))return-kt(this).ea();for(var i=0,e=1,t=0;t<this.g.length;t++){var n=this.D(t);i+=(0<=n?n:uu+n)*e,e*=uu}return i};oe.toString=function(i){if(i=i||10,2>i||36<i)throw Error("radix out of range: "+i);if(ri(this))return"0";if(bn(this))return"-"+kt(this).toString(i);for(var e=Wn(Math.pow(i,6)),t=this,n="";;){var s=Wa(t,e).g;t=Ga(t,s.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(i);if(t=s,ri(t))return r+n;for(;6>r.length;)r="0"+r;n=r+n}};oe.D=function(i){return 0>i?0:i<this.g.length?this.g[i]:this.h};function ri(i){if(i.h!=0)return!1;for(var e=0;e<i.g.length;e++)if(i.g[e]!=0)return!1;return!0}function bn(i){return i.h==-1}oe.X=function(i){return i=Ga(this,i),bn(i)?-1:ri(i)?0:1};function kt(i){for(var e=i.g.length,t=[],n=0;n<e;n++)t[n]=~i.g[n];return new tt(t,~i.h).add(hu)}oe.abs=function(){return bn(this)?kt(this):this};oe.add=function(i){for(var e=Math.max(this.g.length,i.g.length),t=[],n=0,s=0;s<=e;s++){var r=n+(this.D(s)&65535)+(i.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(i.D(s)>>>16);n=o>>>16,r&=65535,o&=65535,t[s]=o<<16|r}return new tt(t,t[t.length-1]&-2147483648?-1:0)};function Ga(i,e){return i.add(kt(e))}oe.R=function(i){if(ri(this)||ri(i))return qs;if(bn(this))return bn(i)?kt(this).R(kt(i)):kt(kt(this).R(i));if(bn(i))return kt(this.R(kt(i)));if(0>this.X(jf)&&0>i.X(jf))return Wn(this.ea()*i.ea());for(var e=this.g.length+i.g.length,t=[],n=0;n<2*e;n++)t[n]=0;for(n=0;n<this.g.length;n++)for(var s=0;s<i.g.length;s++){var r=this.D(n)>>>16,o=this.D(n)&65535,a=i.D(s)>>>16,c=i.D(s)&65535;t[2*n+2*s]+=o*c,va(t,2*n+2*s),t[2*n+2*s+1]+=r*c,va(t,2*n+2*s+1),t[2*n+2*s+1]+=o*a,va(t,2*n+2*s+1),t[2*n+2*s+2]+=r*a,va(t,2*n+2*s+2)}for(n=0;n<e;n++)t[n]=t[2*n+1]<<16|t[2*n];for(n=e;n<2*e;n++)t[n]=0;return new tt(t,0)};function va(i,e){for(;(i[e]&65535)!=i[e];)i[e+1]+=i[e]>>>16,i[e]&=65535,e++}function Or(i,e){this.g=i,this.h=e}function Wa(i,e){if(ri(e))throw Error("division by zero");if(ri(i))return new Or(qs,qs);if(bn(i))return e=Wa(kt(i),e),new Or(kt(e.g),kt(e.h));if(bn(e))return e=Wa(i,kt(e)),new Or(kt(e.g),e.h);if(30<i.g.length){if(bn(i)||bn(e))throw Error("slowDivide_ only works with positive integers.");for(var t=hu,n=e;0>=n.X(i);)t=$f(t),n=$f(n);var s=Ns(t,1),r=Ns(n,1);for(n=Ns(n,2),t=Ns(t,2);!ri(n);){var o=r.add(n);0>=o.X(i)&&(s=s.add(t),r=o),n=Ns(n,1),t=Ns(t,1)}return e=Ga(i,s.R(e)),new Or(s,e)}for(s=qs;0<=i.X(e);){for(t=Math.max(1,Math.floor(i.ea()/e.ea())),n=Math.ceil(Math.log(t)/Math.LN2),n=48>=n?1:Math.pow(2,n-48),r=Wn(t),o=r.R(e);bn(o)||0<o.X(i);)t-=n,r=Wn(t),o=r.R(e);ri(r)&&(r=hu),s=s.add(r),i=Ga(i,o)}return new Or(s,i)}oe.gb=function(i){return Wa(this,i).h};oe.and=function(i){for(var e=Math.max(this.g.length,i.g.length),t=[],n=0;n<e;n++)t[n]=this.D(n)&i.D(n);return new tt(t,this.h&i.h)};oe.or=function(i){for(var e=Math.max(this.g.length,i.g.length),t=[],n=0;n<e;n++)t[n]=this.D(n)|i.D(n);return new tt(t,this.h|i.h)};oe.xor=function(i){for(var e=Math.max(this.g.length,i.g.length),t=[],n=0;n<e;n++)t[n]=this.D(n)^i.D(n);return new tt(t,this.h^i.h)};function $f(i){for(var e=i.g.length+1,t=[],n=0;n<e;n++)t[n]=i.D(n)<<1|i.D(n-1)>>>31;return new tt(t,i.h)}function Ns(i,e){var t=e>>5;e%=32;for(var n=i.g.length-t,s=[],r=0;r<n;r++)s[r]=0<e?i.D(r+t)>>>e|i.D(r+t+1)<<32-e:i.D(r+t);return new tt(s,i.h)}Ha.prototype.createWebChannel=Ha.prototype.g;gn.prototype.send=gn.prototype.u;gn.prototype.open=gn.prototype.m;gn.prototype.close=gn.prototype.close;hc.NO_ERROR=0;hc.TIMEOUT=8;hc.HTTP_ERROR=6;qm.COMPLETE="complete";jm.EventType=Co;Co.OPEN="a";Co.CLOSE="b";Co.ERROR="c";Co.MESSAGE="d";Nt.prototype.listen=Nt.prototype.O;mt.prototype.listenOnce=mt.prototype.P;mt.prototype.getLastError=mt.prototype.Sa;mt.prototype.getLastErrorCode=mt.prototype.Ia;mt.prototype.getStatus=mt.prototype.da;mt.prototype.getResponseJson=mt.prototype.Wa;mt.prototype.getResponseText=mt.prototype.ja;mt.prototype.send=mt.prototype.ha;mt.prototype.setWithCredentials=mt.prototype.Oa;Un.prototype.digest=Un.prototype.l;Un.prototype.reset=Un.prototype.reset;Un.prototype.update=Un.prototype.j;tt.prototype.add=tt.prototype.add;tt.prototype.multiply=tt.prototype.R;tt.prototype.modulo=tt.prototype.gb;tt.prototype.compare=tt.prototype.X;tt.prototype.toNumber=tt.prototype.ea;tt.prototype.toString=tt.prototype.toString;tt.prototype.getBits=tt.prototype.D;tt.fromNumber=Wn;tt.fromString=Ag;var QT=function(){return new Ha},JT=function(){return uc()},Tl=hc,ZT=qm,eA=ls,Xf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},tA=Lo,ya=jm,nA=mt,iA=Un,js=tt;const Kf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new xm("@firebase/firestore");function Yf(){return rs.logLevel}function fe(i,...e){if(rs.logLevel<=Qe.DEBUG){const t=e.map(ch);rs.debug(`Firestore (${vr}): ${i}`,...t)}}function ui(i,...e){if(rs.logLevel<=Qe.ERROR){const t=e.map(ch);rs.error(`Firestore (${vr}): ${i}`,...t)}}function sr(i,...e){if(rs.logLevel<=Qe.WARN){const t=e.map(ch);rs.warn(`Firestore (${vr}): ${i}`,...t)}}function ch(i){if(typeof i=="string")return i;try{return e=i,JSON.stringify(e)}catch{return i}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(i="Unexpected state"){const e=`FIRESTORE (${vr}) INTERNAL ASSERTION FAILED: `+i;throw ui(e),new Error(e)}function lt(i,e){i||Te()}function Pe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends mr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Wt.UNAUTHENTICATED))}shutdown(){}}class rA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oA{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const s=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let r=new Ai;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ai,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ai)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(lt(typeof n.accessToken=="string"),new Cg(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string"),new Wt(e)}}class aA{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class cA{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new aA(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uA{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=r=>{r.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,fe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>n(r))};const s=r=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(lt(typeof t.token=="string"),this.T=t.token,new lA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<i;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=hA(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<t&&(n+=e.charAt(s[r]%e.length))}return n}}function Ke(i,e){return i<e?-1:i>e?1:0}function rr(i,e,t){return i.length===e.length&&i.every((n,s)=>t(n,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ve(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ve(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ve(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new bt(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ke(this.nanoseconds,e.nanoseconds):Ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Le(e)}static min(){return new Le(new bt(0,0))}static max(){return new Le(new bt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,n){t===void 0?t=0:t>e.length&&Te(),n===void 0?n=e.length-t:n>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return mo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mo?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ht extends mo{construct(e,t,n){return new ht(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ve(X.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ht(t)}static emptyPath(){return new ht([])}}const dA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends mo{construct(e,t,n){return new $t(e,t,n)}static isValidIdentifier(e){return dA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const r=()=>{if(n.length===0)throw new ve(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ve(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ve(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(r(),s++)}if(r(),o)throw new ve(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(t)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(ht.fromString(e))}static fromName(e){return new Se(ht.fromString(e).popFirst(5))}static empty(){return new Se(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ht.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ht.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new ht(e.slice()))}}function fA(i,e){const t=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,s=Le.fromTimestamp(n===1e9?new bt(t+1,0):new bt(t,n));return new Ri(s,Se.empty(),e)}function pA(i){return new Ri(i.readTime,i.key,-1)}class Ri{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ri(Le.min(),Se.empty(),-1)}static max(){return new Ri(Le.max(),Se.empty(),-1)}}function mA(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=Se.comparator(i.documentKey,e.documentKey),t!==0?t:Ke(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _A{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(i){if(i.code!==X.FAILED_PRECONDITION||i.message!==gA)throw i;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((n,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(n,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,n)=>{t(e)})}static reject(e){return new J((t,n)=>{n(e)})}static waitFor(e){return new J((t,n)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},c=>n(c))}),o=!0,r===s&&t()})}static or(e){let t=J.resolve(!1);for(const n of e)t=t.next(s=>s?J.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,r)=>{n.push(t.call(this,s,r))}),this.waitFor(n)}static mapArray(e,t){return new J((n,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&n(o)},u=>s(u))}})}static doWhile(e,t){return new J((n,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):n()};r()})}}function Uo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ot(n),this.ut=n=>t.writeSequenceNumber(n))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}lh.ct=-1;function yc(i){return i==null}function qa(i){return i===0&&1/i==-1/0}function vA(i){return typeof i=="number"&&Number.isInteger(i)&&!qa(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function yr(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Ig(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.comparator=e,this.root=t||Ft.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xa(this.root,e,this.comparator,!0)}}class xa{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=n??Ft.RED,this.left=s??Ft.EMPTY,this.right=r??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,r){return new Ft(e??this.key,t??this.value,n??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,n),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(i,e,t,n,s){return this}insert(i,e,t){return new Ft(i,e)}remove(i,e){return this}isEmpty(){return!0}inorderTraversal(i){return!1}reverseTraversal(i){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jf(this.data.getIterator())}getIteratorFrom(e){return new Jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=n.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Yt(this.comparator);return t.data=e,t}}class Jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new Ln([])}unionWith(e){let t=new Yt($t.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Lg("Invalid base64 string: "+s):s}}(e);return new Qt(t)}static fromUint8Array(e){const t=function(n){let s="";for(let r=0;r<n.length;++r)s+=String.fromCharCode(n[r]);return s}(e);return new Qt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const yA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ii(i){if(lt(!!i),typeof i=="string"){let e=0;const t=yA.exec(i);if(lt(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:St(i.seconds),nanos:St(i.nanos)}}function St(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function os(i){return typeof i=="string"?Qt.fromBase64String(i):Qt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function hh(i){const e=i.mapValue.fields.__previous_value__;return uh(e)?hh(e):e}function go(i){const e=Ii(i.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,t,n,s,r,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class _o{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new _o("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _o&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function as(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?uh(i)?4:SA(i)?9007199254740991:10:Te()}function jn(i,e){if(i===e)return!0;const t=as(i);if(t!==as(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return go(i).isEqual(go(e));case 3:return function(n,s){if(typeof n.timestampValue=="string"&&typeof s.timestampValue=="string"&&n.timestampValue.length===s.timestampValue.length)return n.timestampValue===s.timestampValue;const r=Ii(n.timestampValue),o=Ii(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(n,s){return os(n.bytesValue).isEqual(os(s.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(n,s){return St(n.geoPointValue.latitude)===St(s.geoPointValue.latitude)&&St(n.geoPointValue.longitude)===St(s.geoPointValue.longitude)}(i,e);case 2:return function(n,s){if("integerValue"in n&&"integerValue"in s)return St(n.integerValue)===St(s.integerValue);if("doubleValue"in n&&"doubleValue"in s){const r=St(n.doubleValue),o=St(s.doubleValue);return r===o?qa(r)===qa(o):isNaN(r)&&isNaN(o)}return!1}(i,e);case 9:return rr(i.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:return function(n,s){const r=n.mapValue.fields||{},o=s.mapValue.fields||{};if(Qf(r)!==Qf(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!jn(r[a],o[a])))return!1;return!0}(i,e);default:return Te()}}function vo(i,e){return(i.values||[]).find(t=>jn(t,e))!==void 0}function or(i,e){if(i===e)return 0;const t=as(i),n=as(e);if(t!==n)return Ke(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ke(i.booleanValue,e.booleanValue);case 2:return function(s,r){const o=St(s.integerValue||s.doubleValue),a=St(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(i,e);case 3:return Zf(i.timestampValue,e.timestampValue);case 4:return Zf(go(i),go(e));case 5:return Ke(i.stringValue,e.stringValue);case 6:return function(s,r){const o=os(s),a=os(r);return o.compareTo(a)}(i.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=Ke(o[c],a[c]);if(l!==0)return l}return Ke(o.length,a.length)}(i.referenceValue,e.referenceValue);case 8:return function(s,r){const o=Ke(St(s.latitude),St(r.latitude));return o!==0?o:Ke(St(s.longitude),St(r.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=or(o[c],a[c]);if(l)return l}return Ke(o.length,a.length)}(i.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Sa.mapValue&&r===Sa.mapValue)return 0;if(s===Sa.mapValue)return 1;if(r===Sa.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=Ke(a[u],l[u]);if(h!==0)return h;const d=or(o[a[u]],c[l[u]]);if(d!==0)return d}return Ke(a.length,l.length)}(i.mapValue,e.mapValue);default:throw Te()}}function Zf(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ke(i,e);const t=Ii(i),n=Ii(e),s=Ke(t.seconds,n.seconds);return s!==0?s:Ke(t.nanos,n.nanos)}function ar(i){return du(i)}function du(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const s=Ii(n);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?os(i.bytesValue).toBase64():"referenceValue"in i?(t=i.referenceValue,Se.fromName(t).toString()):"geoPointValue"in i?`geo(${(e=i.geoPointValue).latitude},${e.longitude})`:"arrayValue"in i?function(n){let s="[",r=!0;for(const o of n.values||[])r?r=!1:s+=",",s+=du(o);return s+"]"}(i.arrayValue):"mapValue"in i?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${du(n.fields[a])}`;return r+"}"}(i.mapValue):Te();var e,t}function fu(i){return!!i&&"integerValue"in i}function dh(i){return!!i&&"arrayValue"in i}function ep(i){return!!i&&"nullValue"in i}function tp(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Ia(i){return!!i&&"mapValue"in i}function jr(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return yr(i.mapValue.fields,(t,n)=>e.mapValue.fields[t]=jr(n)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jr(i.arrayValue.values[t]);return e}return Object.assign({},i)}function SA(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ia(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(t)}setAll(e){let t=$t.emptyPath(),n={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=jr(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,s)}delete(e){const t=this.field(e.popLast());Ia(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Ia(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){yr(t,(s,r)=>e[s]=r);for(const s of n)delete e[s]}clone(){return new En(jr(this.value))}}function Dg(i){const e=[];return yr(i.fields,(t,n)=>{const s=new $t([t]);if(Ia(n)){const r=Dg(n.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new Ln(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,n,s,r,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new jt(e,0,Le.min(),Le.min(),Le.min(),En.empty(),0)}static newFoundDocument(e,t,n,s){return new jt(e,1,t,Le.min(),n,s,0)}static newNoDocument(e,t){return new jt(e,2,t,Le.min(),Le.min(),En.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,Le.min(),Le.min(),En.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.position=e,this.inclusive=t}}function np(i,e,t){let n=0;for(let s=0;s<i.position.length;s++){const r=e[s],o=i.position[s];if(r.field.isKeyField()?n=Se.comparator(Se.fromName(o.referenceValue),t.key):n=or(o,t.data.field(r.field)),r.dir==="desc"&&(n*=-1),n!==0)break}return n}function ip(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!jn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,t="asc"){this.field=e,this.dir=t}}function MA(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{}class wt extends Pg{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new bA(e,t,n):t==="array-contains"?new AA(e,n):t==="in"?new CA(e,n):t==="not-in"?new RA(e,n):t==="array-contains-any"?new IA(e,n):new wt(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new EA(e,n):new TA(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(or(t,this.value)):t!==null&&as(this.value)===as(t)&&this.matchesComparison(or(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $n extends Pg{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new $n(e,t)}matches(e){return Ng(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ng(i){return i.op==="and"}function Ug(i){return wA(i)&&Ng(i)}function wA(i){for(const e of i.filters)if(e instanceof $n)return!1;return!0}function pu(i){if(i instanceof wt)return i.field.canonicalString()+i.op.toString()+ar(i.value);if(Ug(i))return i.filters.map(e=>pu(e)).join(",");{const e=i.filters.map(t=>pu(t)).join(",");return`${i.op}(${e})`}}function Og(i,e){return i instanceof wt?function(t,n){return n instanceof wt&&t.op===n.op&&t.field.isEqual(n.field)&&jn(t.value,n.value)}(i,e):i instanceof $n?function(t,n){return n instanceof $n&&t.op===n.op&&t.filters.length===n.filters.length?t.filters.reduce((s,r,o)=>s&&Og(r,n.filters[o]),!0):!1}(i,e):void Te()}function Fg(i){return i instanceof wt?function(e){return`${e.field.canonicalString()} ${e.op} ${ar(e.value)}`}(i):i instanceof $n?function(e){return e.op.toString()+" {"+e.getFilters().map(Fg).join(" ,")+"}"}(i):"Filter"}class bA extends wt{constructor(e,t,n){super(e,t,n),this.key=Se.fromName(n.referenceValue)}matches(e){const t=Se.comparator(e.key,this.key);return this.matchesComparison(t)}}class EA extends wt{constructor(e,t){super(e,"in",t),this.keys=kg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class TA extends wt{constructor(e,t){super(e,"not-in",t),this.keys=kg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function kg(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>Se.fromName(n.referenceValue))}class AA extends wt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dh(t)&&vo(t.arrayValue,this.value)}}class CA extends wt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vo(this.value.arrayValue,t)}}class RA extends wt{constructor(e,t){super(e,"not-in",t)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!vo(this.value.arrayValue,t)}}class IA extends wt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>vo(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t=null,n=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function sp(i,e=null,t=[],n=[],s=null,r=null,o=null){return new LA(i,e,t,n,s,r,o)}function fh(i){const e=Pe(i);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>pu(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),yc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ar(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ar(n)).join(",")),e.dt=t}return e.dt}function ph(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!MA(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Og(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!ip(i.startAt,e.startAt)&&ip(i.endAt,e.endAt)}function mu(i){return Se.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t=null,n=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function DA(i,e,t,n,s,r,o,a){return new xc(i,e,t,n,s,r,o,a)}function Bg(i){return new xc(i)}function rp(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function PA(i){return i.explicitOrderBy.length>0?i.explicitOrderBy[0].field:null}function NA(i){for(const e of i.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function UA(i){return i.collectionGroup!==null}function $s(i){const e=Pe(i);if(e.wt===null){e.wt=[];const t=NA(e),n=PA(e);if(t!==null&&n===null)t.isKeyField()||e.wt.push(new $r(t)),e.wt.push(new $r($t.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new $r($t.keyField(),r))}}}return e.wt}function hi(i){const e=Pe(i);if(!e._t)if(e.limitType==="F")e._t=sp(e.path,e.collectionGroup,$s(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of $s(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new $r(r.field,o))}const n=e.endAt?new ja(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ja(e.startAt.position,e.startAt.inclusive):null;e._t=sp(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e._t}function gu(i,e,t){return new xc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Sc(i,e){return ph(hi(i),hi(e))&&i.limitType===e.limitType}function Vg(i){return`${fh(hi(i))}|lt:${i.limitType}`}function _u(i){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>Fg(n)).join(", ")}]`),yc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ar(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ar(n)).join(",")),`Target(${t})`}(hi(i))}; limitType=${i.limitType})`}function Mc(i,e){return e.isFoundDocument()&&function(t,n){const s=n.key.path;return t.collectionGroup!==null?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):Se.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(i,e)&&function(t,n){for(const s of $s(t))if(!s.field.isKeyField()&&n.data.field(s.field)===null)return!1;return!0}(i,e)&&function(t,n){for(const s of t.filters)if(!s.matches(n))return!1;return!0}(i,e)&&function(t,n){return!(t.startAt&&!function(s,r,o){const a=np(s,r,o);return s.inclusive?a<=0:a<0}(t.startAt,$s(t),n)||t.endAt&&!function(s,r,o){const a=np(s,r,o);return s.inclusive?a>=0:a>0}(t.endAt,$s(t),n))}(i,e)}function OA(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function zg(i){return(e,t)=>{let n=!1;for(const s of $s(i)){const r=FA(s,e,t);if(r!==0)return r;n=n||s.field.isKeyField()}return 0}}function FA(i,e,t){const n=i.field.isKeyField()?Se.comparator(e.key,t.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?or(a,c):Te()}(i.field,e,t);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,r]of n)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(t,n)=>{for(const[s,r]of n)e(s,r)})}isEmpty(){return Ig(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=new ft(Se.comparator);function di(){return kA}const Hg=new ft(Se.comparator);function zr(...i){let e=Hg;for(const t of i)e=e.insert(t.key,t);return e}function Gg(i){let e=Hg;return i.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ki(){return Xr()}function Wg(){return Xr()}function Xr(){return new xr(i=>i.toString(),(i,e)=>i.isEqual(e))}const BA=new ft(Se.comparator),VA=new Yt(Se.comparator);function Ge(...i){let e=VA;for(const t of i)e=e.add(t);return e}const zA=new Yt(Ke);function HA(){return zA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function jg(i){return{integerValue:""+i}}function GA(i,e){return vA(e)?jg(e):qg(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this._=void 0}}function WA(i,e,t){return i instanceof $a?function(n,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return s&&uh(s)&&(s=hh(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):i instanceof yo?Xg(i,e):i instanceof xo?Kg(i,e):function(n,s){const r=$g(n,s),o=op(r)+op(n.gt);return fu(r)&&fu(n.gt)?jg(o):qg(n.serializer,o)}(i,e)}function qA(i,e,t){return i instanceof yo?Xg(i,e):i instanceof xo?Kg(i,e):t}function $g(i,e){return i instanceof Xa?fu(t=e)||function(n){return!!n&&"doubleValue"in n}(t)?e:{integerValue:0}:null;var t}class $a extends wc{}class yo extends wc{constructor(e){super(),this.elements=e}}function Xg(i,e){const t=Yg(e);for(const n of i.elements)t.some(s=>jn(s,n))||t.push(n);return{arrayValue:{values:t}}}class xo extends wc{constructor(e){super(),this.elements=e}}function Kg(i,e){let t=Yg(e);for(const n of i.elements)t=t.filter(s=>!jn(s,n));return{arrayValue:{values:t}}}class Xa extends wc{constructor(e,t){super(),this.serializer=e,this.gt=t}}function op(i){return St(i.integerValue||i.doubleValue)}function Yg(i){return dh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function jA(i,e){return i.field.isEqual(e.field)&&function(t,n){return t instanceof yo&&n instanceof yo||t instanceof xo&&n instanceof xo?rr(t.elements,n.elements,jn):t instanceof Xa&&n instanceof Xa?jn(t.gt,n.gt):t instanceof $a&&n instanceof $a}(i.transform,e.transform)}class $A{constructor(e,t){this.version=e,this.transformResults=t}}class ai{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ai}static exists(e){return new ai(void 0,e)}static updateTime(e){return new ai(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function La(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class bc{}function Qg(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Zg(i.key,ai.none()):new Oo(i.key,i.data,ai.none());{const t=i.data,n=En.empty();let s=new Yt($t.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?n.delete(r):n.set(r,o),s=s.add(r)}return new us(i.key,n,new Ln(s.toArray()),ai.none())}}function XA(i,e,t){i instanceof Oo?function(n,s,r){const o=n.value.clone(),a=cp(n.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(i,e,t):i instanceof us?function(n,s,r){if(!La(n.precondition,s))return void s.convertToUnknownDocument(r.version);const o=cp(n.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(Jg(n)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(i,e,t):function(n,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Kr(i,e,t,n){return i instanceof Oo?function(s,r,o,a){if(!La(s.precondition,r))return o;const c=s.value.clone(),l=lp(s.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(i,e,t,n):i instanceof us?function(s,r,o,a){if(!La(s.precondition,r))return o;const c=lp(s.fieldTransforms,a,r),l=r.data;return l.setAll(Jg(s)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(i,e,t,n):function(s,r,o){return La(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(i,e,t)}function KA(i,e){let t=null;for(const n of i.fieldTransforms){const s=e.data.field(n.field),r=$g(n.transform,s||null);r!=null&&(t===null&&(t=En.empty()),t.set(n.field,r))}return t||null}function ap(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(t,n){return t===void 0&&n===void 0||!(!t||!n)&&rr(t,n,(s,r)=>jA(s,r))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Oo extends bc{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class us extends bc{constructor(e,t,n,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Jg(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=i.data.field(t);e.set(t,n)}}),e}function cp(i,e,t){const n=new Map;lt(i.length===t.length);for(let s=0;s<t.length;s++){const r=i[s],o=r.transform,a=e.data.field(r.field);n.set(r.field,qA(o,a,t[s]))}return n}function lp(i,e,t){const n=new Map;for(const s of i){const r=s.transform,o=t.data.field(s.field);n.set(s.field,WA(r,o,e))}return n}class Zg extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YA extends bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&XA(r,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Kr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Kr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Wg();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(s.key)?null:a;const c=Qg(o,a);c!==null&&n.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Le.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ge())}isEqual(e){return this.batchId===e.batchId&&rr(this.mutations,e.mutations,(t,n)=>ap(t,n))&&rr(this.baseMutations,e.baseMutations,(t,n)=>ap(t,n))}}class mh{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){lt(e.mutations.length===n.length);let s=BA;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,n[o].version);return new mh(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt,$e;function e1(i){switch(i){default:return Te();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0}}function e_(i){if(i===void 0)return ui("GRPC error has no .code"),X.UNKNOWN;switch(i){case xt.OK:return X.OK;case xt.CANCELLED:return X.CANCELLED;case xt.UNKNOWN:return X.UNKNOWN;case xt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case xt.INTERNAL:return X.INTERNAL;case xt.UNAVAILABLE:return X.UNAVAILABLE;case xt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case xt.NOT_FOUND:return X.NOT_FOUND;case xt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case xt.ABORTED:return X.ABORTED;case xt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case xt.DATA_LOSS:return X.DATA_LOSS;default:return Te()}}($e=xt||(xt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ma}static getOrCreateInstance(){return Ma===null&&(Ma=new gh),Ma}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ma=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new js([4294967295,4294967295],0);function up(i){const e=t1().encode(i),t=new iA;return t.update(e),new Uint8Array(t.digest())}function hp(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new js([t,n],0),new js([s,r],0)]}class _h{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Hr(`Invalid padding: ${t}`);if(n<0)throw new Hr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Hr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Hr(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=js.fromNumber(this.It)}Et(e,t,n){let s=e.add(t.multiply(js.fromNumber(n)));return s.compare(n1)===1&&(s=new js([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=up(e),[n,s]=hp(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(n,s,r);if(!this.At(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new _h(r,s,t);return n.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=up(e),[n,s]=hp(t);for(let r=0;r<this.hashCount;r++){const o=this.Et(n,s,r);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t,n,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ec(Le.min(),s,new ft(Ke),di(),Ge())}}class Fo{constructor(e,t,n,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Fo(n,t,Ge(),Ge(),Ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,n,s){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=s}}class t_{constructor(e,t){this.targetId=e,this.Vt=t}}class n_{constructor(e,t,n=Qt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class dp{constructor(){this.St=0,this.Dt=pp(),this.Ct=Qt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Ge(),t=Ge(),n=Ge();return this.Dt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:Te()}}),new Fo(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=pp()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class i1{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=di(),this.zt=fp(),this.Wt=new ft(Ke)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((n,s)=>{this.te(s)&&t(s)})}ne(e){var t;const n=e.targetId,s=e.Vt.count,r=this.se(n);if(r){const o=r.target;if(mu(o))if(s===0){const a=new Se(o.path);this.Yt(n,a,jt.newNoDocument(a,Le.min()))}else lt(s===1);else{const a=this.ie(n);if(a!==s){const c=this.re(e,a);if(c!==0){this.ee(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,l)}(t=gh.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(l,u,h){var d,p,g,_,m,f;const w={localCacheCount:u,existenceFilterCount:h.count},x=h.unchangedNames;return x&&(w.bloomFilter={applied:l===0,hashCount:(d=x==null?void 0:x.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(_=(g=(p=x==null?void 0:x.bits)===null||p===void 0?void 0:p.bitmap)===null||g===void 0?void 0:g.length)!==null&&_!==void 0?_:0,padding:(f=(m=x==null?void 0:x.bits)===null||m===void 0?void 0:m.padding)!==null&&f!==void 0?f:0}),w}(c,a,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:s}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=n;let c,l;try{c=os(r).toUint8Array()}catch(u){if(u instanceof Lg)return sr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new _h(c,o,a)}catch(u){return sr(u instanceof Hr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:s!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let s=0;return n.forEach(r=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.vt(a)||(this.Yt(e,r,null),s++)}),s}ce(e){const t=new Map;this.Qt.forEach((r,o)=>{const a=this.se(o);if(a){if(r.current&&mu(a.target)){const c=new Se(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,jt.newNoDocument(c,e))}r.Mt&&(t.set(o,r.Ot()),r.Ft())}});let n=Ge();this.zt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(n=n.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const s=new Ec(e,t,this.Wt,this.jt,n);return this.jt=di(),this.zt=fp(),this.Wt=new ft(Ke),s}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,t)?s.Bt(t,1):s.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new dp,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Yt(Ke),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new dp),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function fp(){return new ft(Se.comparator)}function pp(){return new ft(Se.comparator)}const s1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),r1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),o1=(()=>({and:"AND",or:"OR"}))();class a1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vu(i,e){return i.useProto3Json||yc(e)?e:{value:e}}function Ka(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function i_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function c1(i,e){return Ka(i,e.toTimestamp())}function qn(i){return lt(!!i),Le.fromTimestamp(function(e){const t=Ii(e);return new bt(t.seconds,t.nanos)}(i))}function vh(i,e){return function(t){return new ht(["projects",t.projectId,"databases",t.database])}(i).child("documents").child(e).canonicalString()}function s_(i){const e=ht.fromString(i);return lt(c_(e)),e}function yu(i,e){return vh(i.databaseId,e.path)}function Al(i,e){const t=s_(e);if(t.get(1)!==i.databaseId.projectId)throw new ve(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ve(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Se(r_(t))}function xu(i,e){return vh(i.databaseId,e)}function l1(i){const e=s_(i);return e.length===4?ht.emptyPath():r_(e)}function Su(i){return new ht(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function r_(i){return lt(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function mp(i,e,t){return{name:yu(i,e),fields:t.value.mapValue.fields}}function u1(i,e){let t;if("targetChange"in e){e.targetChange;const n=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(c,l){return c.useProto3Json?(lt(l===void 0||typeof l=="string"),Qt.fromBase64String(l||"")):(lt(l===void 0||l instanceof Uint8Array),Qt.fromUint8Array(l||new Uint8Array))}(i,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?X.UNKNOWN:e_(c.code);return new ve(l,c.message||"")}(o);t=new n_(n,s,r,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Al(i,n.document.name),r=qn(n.document.updateTime),o=n.document.createTime?qn(n.document.createTime):Le.min(),a=new En({mapValue:{fields:n.document.fields}}),c=jt.newFoundDocument(s,r,o,a),l=n.targetIds||[],u=n.removedTargetIds||[];t=new Da(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Al(i,n.document),r=n.readTime?qn(n.readTime):Le.min(),o=jt.newNoDocument(s,r),a=n.removedTargetIds||[];t=new Da([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Al(i,n.document),r=n.removedTargetIds||[];t=new Da([],r,s,null)}else{if(!("filter"in e))return Te();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:r}=n,o=new ZA(s,r),a=n.targetId;t=new t_(a,o)}}return t}function h1(i,e){let t;if(e instanceof Oo)t={update:mp(i,e.key,e.value)};else if(e instanceof Zg)t={delete:yu(i,e.key)};else if(e instanceof us)t={update:mp(i,e.key,e.data),updateMask:x1(e.fieldMask)};else{if(!(e instanceof YA))return Te();t={verify:yu(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,r){const o=r.transform;if(o instanceof $a)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof yo)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xo)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xa)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw Te()}(0,n))),e.precondition.isNone||(t.currentDocument=function(n,s){return s.updateTime!==void 0?{updateTime:c1(n,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Te()}(i,e.precondition)),t}function d1(i,e){return i&&i.length>0?(lt(e!==void 0),i.map(t=>function(n,s){let r=n.updateTime?qn(n.updateTime):qn(s);return r.isEqual(Le.min())&&(r=qn(s)),new $A(r,n.transformResults||[])}(t,e))):[]}function f1(i,e){return{documents:[xu(i,e.path)]}}function p1(i,e){const t={structuredQuery:{}},n=e.path;e.collectionGroup!==null?(t.parent=xu(i,n),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=xu(i,n.popLast()),t.structuredQuery.from=[{collectionId:n.lastSegment()}]);const s=function(c){if(c.length!==0)return a_($n.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Os(u.field),direction:_1(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=vu(i,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function m1(i){let e=l1(i.parent);const t=i.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){lt(n===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=o_(u);return h instanceof $n&&Ug(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new $r(Fs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,yc(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new ja(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new ja(d,h)}(t.endAt)),DA(e,s,o,r,a,"F",c,l)}function g1(i,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function o_(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Fs(e.unaryFilter.field);return wt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Fs(e.unaryFilter.field);return wt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fs(e.unaryFilter.field);return wt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Fs(e.unaryFilter.field);return wt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(i):i.fieldFilter!==void 0?function(e){return wt.create(Fs(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return $n.create(e.compositeFilter.filters.map(t=>o_(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Te()}}(e.compositeFilter.op))}(i):Te()}function _1(i){return s1[i]}function v1(i){return r1[i]}function y1(i){return o1[i]}function Os(i){return{fieldPath:i.canonicalString()}}function Fs(i){return $t.fromServerFormat(i.fieldPath)}function a_(i){return i instanceof wt?function(e){if(e.op==="=="){if(tp(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NAN"}};if(ep(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(tp(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NOT_NAN"}};if(ep(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(e.field),op:v1(e.op),value:e.value}}}(i):i instanceof $n?function(e){const t=e.getFilters().map(n=>a_(n));return t.length===1?t[0]:{compositeFilter:{op:y1(e.op),filters:t}}}(i):Te()}function x1(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function c_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,n,s,r=Le.min(),o=Le.min(),a=Qt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.fe=e}}function M1(i){const e=m1({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?gu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.rn=new b1}addToCollectionParentIndex(e,t){return this.rn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Ri.min())}updateCollectionGroup(e,t,n){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class b1{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Yt(ht.comparator),r=!s.has(n);return this.index[t]=s.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Yt(ht.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new cr(0)}static Mn(){return new cr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(){this.changes=new xr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?J.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Kr(n.mutation,s,Ln.empty(),bt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Ge()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Ge()){const s=Ki();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(r=>{let o=zr();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Ki();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Ge()))}populateOverlays(e,t,n){const s=[];return n.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,n,s){let r=di();const o=Xr(),a=Xr();return t.forEach((c,l)=>{const u=n.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof us)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Kr(u.mutation,l,u.mutation.getFieldMask(),bt.now())):o.set(l.key,Ln.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new T1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const n=Xr();let s=new ft((o,a)=>o-a),r=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=n.get(c)||Ln.empty();u=a.applyToLocalView(l,u),n.set(c,u);const h=(s.get(a.batchId)||Ge()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Wg();u.forEach(d=>{if(!r.has(d)){const p=Qg(t.get(d),n.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return J.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n){return function(s){return Se.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):UA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-r.size):J.resolve(Ki());let a=-1,c=r;return o.next(l=>J.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?J.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,Ge())).next(u=>({batchId:a,changes:Gg(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Se(t)).next(n=>{let s=zr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n){const s=t.collectionGroup;let r=zr();return this.indexManager.getCollectionParents(e,s).next(o=>J.forEach(o,a=>{const c=function(l,u){return new xc(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,n).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s))).next(r=>{s.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,jt.newInvalidDocument(l)))});let o=zr();return r.forEach((a,c)=>{const l=s.get(a);l!==void 0&&Kr(l.mutation,c,Ln.empty(),bt.now()),Mc(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return J.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:qn(n.createTime)}),J.resolve()}getNamedQuery(e,t){return J.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(n){return{name:n.name,query:M1(n.bundledQuery),readTime:qn(n.readTime)}}(t)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.overlays=new ft(Se.comparator),this.ls=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ki();return J.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&n.set(s,r)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,r)=>{this.we(e,t,r)}),J.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.ls.get(n);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(n)),J.resolve()}getOverlaysForCollection(e,t,n){const s=Ki(),r=t.length+1,o=new Se(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>n&&s.set(c.getKey(),c)}return J.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let r=new ft((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>n){let u=r.get(l.largestBatchId);u===null&&(u=Ki(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ki(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return J.resolve(a)}we(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(n.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new JA(t,n));let r=this.ls.get(t);r===void 0&&(r=Ge(),this.ls.set(t,r)),this.ls.set(t,r.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.fs=new Yt(Lt.ds),this.ws=new Yt(Lt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new Lt(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.ys(new Lt(e,t))}ps(e,t){e.forEach(n=>this.removeReference(n,t))}Is(e){const t=new Se(new ht([])),n=new Lt(t,e),s=new Lt(t,e+1),r=[];return this.ws.forEachInRange([n,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Se(new ht([])),n=new Lt(t,e),s=new Lt(t,e+1);let r=Ge();return this.ws.forEachInRange([n,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new Lt(e,0),n=this.fs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Lt{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Se.comparator(e.key,t.key)||Ke(e.As,t.As)}static _s(e,t){return Ke(e.As,t.As)||Se.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Yt(Lt.ds)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QA(r,t,n,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Lt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return J.resolve(o)}lookupMutationBatch(e,t){return J.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.bs(n),r=s<0?0:s;return J.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Lt(t,0),s=new Lt(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([n,s],o=>{const a=this.Ps(o.As);r.push(a)}),J.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yt(Ke);return t.forEach(s=>{const r=new Lt(s,0),o=new Lt(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{n=n.add(a.As)})}),J.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let r=n;Se.isDocumentKey(r)||(r=r.child(""));const o=new Lt(new Se(r),0);let a=new Yt(Ke);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!n.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),J.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(n=>{const s=this.Ps(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){lt(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Rs;return J.forEach(t.mutations,s=>{const r=new Lt(s.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=n})}Cn(e){}containsKey(e,t){const n=new Lt(t,0),s=this.Rs.firstAfterOrEqual(n);return J.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.Ds=e,this.docs=new ft(Se.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),r=s?s.size:0,o=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return J.resolve(n?n.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let n=di();return t.forEach(s=>{const r=this.docs.get(s);n=n.insert(s,r?r.document.mutableCopy():jt.newInvalidDocument(s))}),J.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let r=di();const o=t.path,a=new Se(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||mA(pA(u),n)<=0||(s.has(u.key)||Mc(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return J.resolve(r)}getAllFromCollectionGroup(e,t,n,s){Te()}Cs(e,t){return J.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new D1(this)}getSize(e){return J.resolve(this.size)}}class D1 extends E1{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.os.addEntry(e,s)):this.os.removeEntry(n)}),J.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.persistence=e,this.xs=new xr(t=>fh(t),ph),this.lastRemoteSnapshotVersion=Le.min(),this.highestTargetId=0,this.Ns=0,this.ks=new yh,this.targetCount=0,this.Ms=cr.kn()}forEachTarget(e,t){return this.xs.forEach((n,s)=>t(s)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),J.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new cr(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.Fn(t),J.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,n){let s=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),J.waitFor(r).next(()=>s)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return J.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),J.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),J.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),J.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return J.resolve(n)}containsKey(e,t){return J.resolve(this.ks.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,t){this.$s={},this.overlays={},this.Os=new lh(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new P1(this),this.indexManager=new w1,this.remoteDocumentCache=function(n){return new L1(n)}(n=>this.referenceDelegate.Ls(n)),this.serializer=new S1(t),this.qs=new C1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new R1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new I1(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){fe("MemoryPersistence","Starting transaction:",e);const s=new U1(this.Os.next());return this.referenceDelegate.Us(),n(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(e,t){return J.or(Object.values(this.$s).map(n=>()=>n.containsKey(e,t)))}}class U1 extends _A{constructor(e){super(),this.currentSequenceNumber=e}}class xh{constructor(e){this.persistence=e,this.Qs=new yh,this.js=null}static zs(e){return new xh(e)}get Ws(){if(this.js)return this.js;throw Te()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),J.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),J.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(s=>this.Ws.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>n.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.Ws,n=>{const s=Se.fromPath(n);return this.Hs(e,s).next(r=>{r||t.removeEntry(s,Le.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(n=>{n?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return J.or([()=>J.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=s}static Li(e,t){let n=Ge(),s=Ge();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Sh(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,s){return this.Ki(e,t).next(r=>r||this.Gi(e,t,s,n)).next(r=>r||this.Qi(e,t))}Ki(e,t){if(rp(t))return J.resolve(null);let n=hi(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=gu(t,null,"F"),n=hi(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const o=Ge(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,n).next(c=>{const l=this.ji(t,a);return this.zi(t,l,o,c.readTime)?this.Ki(e,gu(t,null,"F")):this.Wi(e,l,t,c)}))})))}Gi(e,t,n,s){return rp(t)||s.isEqual(Le.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next(r=>{const o=this.ji(t,r);return this.zi(t,o,n,s)?this.Qi(e,t):(Yf()<=Qe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_u(t)),this.Wi(e,o,t,fA(s,-1)))})}ji(e,t){let n=new Yt(zg(e));return t.forEach((s,r)=>{Mc(e,r)&&(n=n.add(r))}),n}zi(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,t){return Yf()<=Qe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",_u(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ri.min())}Wi(e,t,n,s){return this.Ui.getDocumentsMatchingQuery(e,n,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,t,n,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new ft(Ke),this.Yi=new xr(r=>fh(r),ph),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new A1(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function k1(i,e,t,n){return new F1(i,e,t,n)}async function l_(i,e){const t=Pe(i);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(r=>(s=r,t.tr(e),t.mutationQueue.getAllMutationBatches(n))).next(r=>{const o=[],a=[];let c=Ge();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(n,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function B1(i,e){const t=Pe(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),r=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=J.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(g=>{const _=c.docVersions.get(p);lt(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,n,e,r).next(()=>r.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(o){let a=Ge();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function u_(i){const e=Pe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function V1(i,e){const t=Pe(i),n=e.snapshotVersion;let s=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});s=t.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Qt.EMPTY_BYTE_STRING,Le.min()).withLastLimboFreeSnapshotVersion(Le.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,n)),s=s.insert(h,p),function(g,_,m){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,u)&&a.push(t.Bs.updateTargetData(r,p))});let c=di(),l=Ge();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(z1(r,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!n.isEqual(Le.min())){const u=t.Bs.getLastRemoteSnapshotVersion(r).next(h=>t.Bs.setTargetsMetadata(r,r.currentSequenceNumber,n));a.push(u)}return J.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.Ji=s,r))}function z1(i,e,t){let n=Ge(),s=Ge();return t.forEach(r=>n=n.add(r)),e.getEntries(i,n).next(r=>{let o=di();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Le.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):fe("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:s}})}function H1(i,e){const t=Pe(i);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function G1(i,e){const t=Pe(i);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Bs.getTargetData(n,e).next(r=>r?(s=r,J.resolve(s)):t.Bs.allocateTargetId(n).next(o=>(s=new wi(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Bs.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.Ji.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(n.targetId,n),t.Yi.set(e,n.targetId)),n})}async function Mu(i,e,t){const n=Pe(i),s=n.Ji.get(e),r=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",r,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Uo(o))throw o;fe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ji=n.Ji.remove(e),n.Yi.delete(s.target)}function gp(i,e,t){const n=Pe(i);let s=Le.min(),r=Ge();return n.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Pe(a),h=u.Yi.get(l);return h!==void 0?J.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(n,o,hi(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>n.Hi.getDocumentsMatchingQuery(o,e,t?s:Le.min(),t?r:Ge())).next(a=>(W1(n,OA(e),a),{documents:a,ir:r})))}function W1(i,e,t){let n=i.Xi.get(e)||Le.min();t.forEach((s,r)=>{r.readTime.compareTo(n)>0&&(n=r.readTime)}),i.Xi.set(e,n)}class _p{constructor(){this.activeTargetIds=HA()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q1{constructor(){this.Hr=new _p,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new _p,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){fe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){fe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa=null;function Cl(){return wa===null?wa=268435456+Math.round(2147483648*Math.random()):wa++,"0x"+wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="WebChannelConnection";class K1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,s,r){const o=Cl(),a=this.To(e,t);fe("RestConnection",`Sending RPC '${e}' ${o}:`,a,n);const c={};return this.Eo(c,s,r),this.Ao(e,a,c,n).then(l=>(fe("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw sr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",n),l})}vo(e,t,n,s,r,o){return this.Io(e,t,n,s,r)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+vr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,r)=>e[r]=s),n&&n.headers.forEach((s,r)=>e[r]=s)}To(e,t){const n=$1[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,s){const r=Cl();return new Promise((o,a)=>{const c=new nA;c.setWithCredentials(!0),c.listenOnce(ZT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Tl.NO_ERROR:const u=c.getResponseJson();fe(Gt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Tl.TIMEOUT:fe(Gt,`RPC '${e}' ${r} timed out`),a(new ve(X.DEADLINE_EXCEEDED,"Request time out"));break;case Tl.HTTP_ERROR:const h=c.getStatus();if(fe(Gt,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(_){const m=_.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(m)>=0?m:X.UNKNOWN}(p.status);a(new ve(g,p.message))}else a(new ve(X.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ve(X.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{fe(Gt,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);fe(Gt,`RPC '${e}' ${r} sending request:`,s),c.send(t,"POST",l,n,15)})}Ro(e,t,n){const s=Cl(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=QT(),a=JT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new tA({})),this.Eo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const u=r.join("");fe(Gt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const g=new X1({ro:m=>{p?fe(Gt,`Not sending because RPC '${e}' stream ${s} is closed:`,m):(d||(fe(Gt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),fe(Gt,`RPC '${e}' stream ${s} sending:`,m),h.send(m))},oo:()=>h.close()}),_=(m,f,w)=>{m.listen(f,x=>{try{w(x)}catch(v){setTimeout(()=>{throw v},0)}})};return _(h,ya.EventType.OPEN,()=>{p||fe(Gt,`RPC '${e}' stream ${s} transport opened.`)}),_(h,ya.EventType.CLOSE,()=>{p||(p=!0,fe(Gt,`RPC '${e}' stream ${s} transport closed`),g.wo())}),_(h,ya.EventType.ERROR,m=>{p||(p=!0,sr(Gt,`RPC '${e}' stream ${s} transport errored:`,m),g.wo(new ve(X.UNAVAILABLE,"The operation could not be completed")))}),_(h,ya.EventType.MESSAGE,m=>{var f;if(!p){const w=m.data[0];lt(!!w);const x=w,v=x.error||((f=x[0])===null||f===void 0?void 0:f.error);if(v){fe(Gt,`RPC '${e}' stream ${s} received error:`,v);const E=v.status;let A=function(P){const S=xt[P];if(S!==void 0)return e_(S)}(E),I=v.message;A===void 0&&(A=X.INTERNAL,I="Unknown error status: "+E+" with message "+v.message),p=!0,g.wo(new ve(A,I)),h.close()}else fe(Gt,`RPC '${e}' stream ${s} received:`,w),g._o(w)}}),_(a,eA.STAT_EVENT,m=>{m.stat===Xf.PROXY?fe(Gt,`RPC '${e}' stream ${s} detected buffering proxy`):m.stat===Xf.NOPROXY&&fe(Gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function Rl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(i){return new a1(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t,n=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),s=Math.max(0,t-n);s>0&&fe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t,n,s,r,o,a,c){this.ii=e,this.$o=n,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new h_(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(ui(t.toString()),ui("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Fo===t&&this.Zo(n,s)},n=>{e(()=>{const s=new ve(X.UNKNOWN,"Fetching auth token failed: "+n.message);return this.tu(s)})})}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{n(()=>this.tu(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return fe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(fe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y1 extends d_{constructor(e,t,n,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=u1(this.serializer,e),n=function(s){if(!("targetChange"in s))return Le.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?Le.min():r.readTime?qn(r.readTime):Le.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Su(this.serializer),t.addTarget=function(s,r){let o;const a=r.target;if(o=mu(a)?{documents:f1(s,a)}:{query:p1(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=i_(s,r.resumeToken);const c=vu(s,r.expectedCount);c!==null&&(o.expectedCount=c)}else if(r.snapshotVersion.compareTo(Le.min())>0){o.readTime=Ka(s,r.snapshotVersion.toTimestamp());const c=vu(s,r.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const n=g1(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Su(this.serializer),t.removeTarget=e,this.Wo(t)}}class Q1 extends d_{constructor(e,t,n,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(lt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=d1(e.writeResults,e.commitTime),n=qn(e.commitTime);return this.listener.cu(n,t)}return lt(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Su(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>h1(this.serializer,n))};this.Wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1 extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new ve(X.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(e,t,n,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ve(X.UNKNOWN,s.toString())})}vo(e,t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,t,n,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ve(X.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Z1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ui(t),this.mu=!1):fe("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t,n,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{n.enqueueAndForget(async()=>{hs(this)&&(fe("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Pe(a);c.vu.add(4),await ko(c),c.bu.set("Unknown"),c.vu.delete(4),await Ac(c)}(this))})}),this.bu=new Z1(n,s)}}async function Ac(i){if(hs(i))for(const e of i.Ru)await e(!0)}async function ko(i){for(const e of i.Ru)await e(!1)}function f_(i,e){const t=Pe(i);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),bh(t)?wh(t):Sr(t).Ko()&&Mh(t,e))}function p_(i,e){const t=Pe(i),n=Sr(t);t.Au.delete(e),n.Ko()&&m_(t,e),t.Au.size===0&&(n.Ko()?n.jo():hs(t)&&t.bu.set("Unknown"))}function Mh(i,e){if(i.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Le.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sr(i).su(e)}function m_(i,e){i.Vu.qt(e),Sr(i).iu(e)}function wh(i){i.Vu=new i1({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),le:e=>i.Au.get(e)||null,ue:()=>i.datastore.serializer.databaseId}),Sr(i).start(),i.bu.gu()}function bh(i){return hs(i)&&!Sr(i).Uo()&&i.Au.size>0}function hs(i){return Pe(i).vu.size===0}function g_(i){i.Vu=void 0}async function tC(i){i.Au.forEach((e,t)=>{Mh(i,e)})}async function nC(i,e){g_(i),bh(i)?(i.bu.Iu(e),wh(i)):i.bu.set("Unknown")}async function iC(i,e,t){if(i.bu.set("Online"),e instanceof n_&&e.state===2&&e.cause)try{await async function(n,s){const r=s.cause;for(const o of s.targetIds)n.Au.has(o)&&(await n.remoteSyncer.rejectListen(o,r),n.Au.delete(o),n.Vu.removeTarget(o))}(i,e)}catch(n){fe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ya(i,n)}else if(e instanceof Da?i.Vu.Ht(e):e instanceof t_?i.Vu.ne(e):i.Vu.Xt(e),!t.isEqual(Le.min()))try{const n=await u_(i.localStore);t.compareTo(n)>=0&&await function(s,r){const o=s.Vu.ce(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Au.get(c);l&&s.Au.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach((a,c)=>{const l=s.Au.get(a);if(!l)return;s.Au.set(a,l.withResumeToken(Qt.EMPTY_BYTE_STRING,l.snapshotVersion)),m_(s,a);const u=new wi(l.target,a,c,l.sequenceNumber);Mh(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(i,t)}catch(n){fe("RemoteStore","Failed to raise snapshot:",n),await Ya(i,n)}}async function Ya(i,e,t){if(!Uo(e))throw e;i.vu.add(1),await ko(i),i.bu.set("Offline"),t||(t=()=>u_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{fe("RemoteStore","Retrying IndexedDB access"),await t(),i.vu.delete(1),await Ac(i)})}function __(i,e){return e().catch(t=>Ya(i,t,e))}async function Cc(i){const e=Pe(i),t=Li(e);let n=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;sC(e);)try{const s=await H1(e.localStore,n);if(s===null){e.Eu.length===0&&t.jo();break}n=s.batchId,rC(e,s)}catch(s){await Ya(e,s)}v_(e)&&y_(e)}function sC(i){return hs(i)&&i.Eu.length<10}function rC(i,e){i.Eu.push(e);const t=Li(i);t.Ko()&&t.ou&&t.uu(e.mutations)}function v_(i){return hs(i)&&!Li(i).Uo()&&i.Eu.length>0}function y_(i){Li(i).start()}async function oC(i){Li(i).hu()}async function aC(i){const e=Li(i);for(const t of i.Eu)e.uu(t.mutations)}async function cC(i,e,t){const n=i.Eu.shift(),s=mh.from(n,e,t);await __(i,()=>i.remoteSyncer.applySuccessfulWrite(s)),await Cc(i)}async function lC(i,e){e&&Li(i).ou&&await async function(t,n){if(s=n.code,e1(s)&&s!==X.ABORTED){const r=t.Eu.shift();Li(t).Qo(),await __(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,n)),await Cc(t)}var s}(i,e),v_(i)&&y_(i)}async function yp(i,e){const t=Pe(i);t.asyncQueue.verifyOperationInProgress(),fe("RemoteStore","RemoteStore received new credentials");const n=hs(t);t.vu.add(3),await ko(t),n&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Ac(t)}async function uC(i,e){const t=Pe(i);e?(t.vu.delete(2),await Ac(t)):e||(t.vu.add(2),await ko(t),t.bu.set("Unknown"))}function Sr(i){return i.Su||(i.Su=function(e,t,n){const s=Pe(e);return s.fu(),new Y1(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(i.datastore,i.asyncQueue,{uo:tC.bind(null,i),ao:nC.bind(null,i),nu:iC.bind(null,i)}),i.Ru.push(async e=>{e?(i.Su.Qo(),bh(i)?wh(i):i.bu.set("Unknown")):(await i.Su.stop(),g_(i))})),i.Su}function Li(i){return i.Du||(i.Du=function(e,t,n){const s=Pe(e);return s.fu(),new Q1(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(i.datastore,i.asyncQueue,{uo:oC.bind(null,i),ao:lC.bind(null,i),au:aC.bind(null,i),cu:cC.bind(null,i)}),i.Ru.push(async e=>{e?(i.Du.Qo(),await Cc(i)):(await i.Du.stop(),i.Eu.length>0&&(fe("RemoteStore",`Stopping write stream with ${i.Eu.length} pending writes`),i.Eu=[]))})),i.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t,n,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new Ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,n,s,r){const o=Date.now()+n,a=new Eh(e,t,o,s,r);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Th(i,e){if(ui("AsyncQueue",`${e}: ${i}`),Uo(i))return new ve(X.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Se.comparator(t.key,n.key):(t,n)=>Se.comparator(t.key,n.key),this.keyedMap=zr(),this.sortedSet=new ft(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=n.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Xs;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.Cu=new ft(Se.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?e.type!==0&&n.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&n.type!==1?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Cu=this.Cu.remove(t):e.type===1&&n.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):Te():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,n)=>{e.push(n)}),e}}class lr{constructor(e,t,n,s,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,s,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new lr(e,t,Xs.emptySet(t),o,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.Nu=void 0,this.listeners=[]}}class dC{constructor(){this.queries=new xr(e=>Vg(e),Sc),this.onlineState="Unknown",this.ku=new Set}}async function fC(i,e){const t=Pe(i),n=e.query;let s=!1,r=t.queries.get(n);if(r||(s=!0,r=new hC),s)try{r.Nu=await t.onListen(n)}catch(o){const a=Th(o,`Initialization of query '${_u(e.query)}' failed`);return void e.onError(a)}t.queries.set(n,r),r.listeners.push(e),e.Mu(t.onlineState),r.Nu&&e.$u(r.Nu)&&Ah(t)}async function pC(i,e){const t=Pe(i),n=e.query;let s=!1;const r=t.queries.get(n);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(n),t.onUnlisten(n)}function mC(i,e){const t=Pe(i);let n=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.$u(s)&&(n=!0);o.Nu=s}}n&&Ah(t)}function gC(i,e,t){const n=Pe(i),s=n.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);n.queries.delete(e)}function Ah(i){i.ku.forEach(e=>{e.next()})}class _C{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new lr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n=t!=="Offline";return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.key=e}}class S_{constructor(e){this.key=e}}class vC{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ge(),this.mutatedKeys=Ge(),this.tc=zg(e),this.ec=new Xs(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new xp,s=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Mc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;d&&p?d.data.isEqual(p.data)?g!==_&&(n.track({type:3,doc:p}),m=!0):this.rc(d,p)||(n.track({type:2,doc:p}),m=!0,(c&&this.tc(p,c)>0||l&&this.tc(p,l)<0)&&(a=!0)):!d&&p?(n.track({type:0,doc:p}),m=!0):d&&!p&&(n.track({type:1,doc:d}),m=!0,(c||l)&&(a=!0)),m&&(p?(o=o.add(p),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),n.track({type:1,doc:u})}return{ec:o,ic:n,zi:a,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((l,u)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return p(h)-p(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(n);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,r.length!==0||c?{snapshot:new lr(this.query,e.ec,s,r,e.mutatedKeys,a===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new xp,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Ge(),this.ec.forEach(n=>{this.ac(n.key)&&(this.Zu=this.Zu.add(n.key))});const t=[];return e.forEach(n=>{this.Zu.has(n)||t.push(new S_(n))}),this.Zu.forEach(n=>{e.has(n)||t.push(new x_(n))}),t}hc(e){this.Yu=e.ir,this.Zu=Ge();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return lr.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class yC{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class xC{constructor(e){this.key=e,this.fc=!1}}class SC{constructor(e,t,n,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new xr(a=>Vg(a),Sc),this._c=new Map,this.mc=new Set,this.gc=new ft(Se.comparator),this.yc=new Map,this.Ic=new yh,this.Tc={},this.Ec=new Map,this.Ac=cr.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function MC(i,e){const t=DC(i);let n,s;const r=t.wc.get(e);if(r)n=r.targetId,t.sharedClientState.addLocalQueryTarget(n),s=r.view.lc();else{const o=await G1(t.localStore,hi(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);n=o.targetId,s=await wC(t,e,n,a==="current",o.resumeToken),t.isPrimaryClient&&f_(t.remoteStore,o)}return s}async function wC(i,e,t,n,s){i.Rc=(h,d,p)=>async function(g,_,m,f){let w=_.view.sc(m);w.zi&&(w=await gp(g.localStore,_.query,!1).then(({documents:E})=>_.view.sc(E,w)));const x=f&&f.targetChanges.get(_.targetId),v=_.view.applyChanges(w,g.isPrimaryClient,x);return Mp(g,_.targetId,v.cc),v.snapshot}(i,h,d,p);const r=await gp(i.localStore,e,!0),o=new vC(e,r.ir),a=o.sc(r.documents),c=Fo.createSynthesizedTargetChangeForCurrentChange(t,n&&i.onlineState!=="Offline",s),l=o.applyChanges(a,i.isPrimaryClient,c);Mp(i,t,l.cc);const u=new yC(e,t,o);return i.wc.set(e,u),i._c.has(t)?i._c.get(t).push(e):i._c.set(t,[e]),l.snapshot}async function bC(i,e){const t=Pe(i),n=t.wc.get(e),s=t._c.get(n.targetId);if(s.length>1)return t._c.set(n.targetId,s.filter(r=>!Sc(r,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(n.targetId),t.sharedClientState.isActiveQueryTarget(n.targetId)||await Mu(t.localStore,n.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(n.targetId),p_(t.remoteStore,n.targetId),wu(t,n.targetId)}).catch(No)):(wu(t,n.targetId),await Mu(t.localStore,n.targetId,!0))}async function EC(i,e,t){const n=PC(i);try{const s=await function(r,o){const a=Pe(r),c=bt.now(),l=o.reduce((d,p)=>d.add(p.key),Ge());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=di(),g=Ge();return a.Zi.getEntries(d,l).next(_=>{p=_,p.forEach((m,f)=>{f.isValidDocument()||(g=g.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{u=_;const m=[];for(const f of o){const w=KA(f,u.get(f.key).overlayedDocument);w!=null&&m.push(new us(f.key,w,Dg(w.value.mapValue),ai.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,m,o)}).next(_=>{h=_;const m=_.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,_.batchId,m)})}).then(()=>({batchId:h.batchId,changes:Gg(u)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new ft(Ke)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(n,s.batchId,t),await Bo(n,s.changes),await Cc(n.remoteStore)}catch(s){const r=Th(s,"Failed to persist write");t.reject(r)}}async function M_(i,e){const t=Pe(i);try{const n=await V1(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.yc.get(r);o&&(lt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?lt(o.fc):s.removedDocuments.size>0&&(lt(o.fc),o.fc=!1))}),await Bo(t,n,e)}catch(n){await No(n)}}function Sp(i,e,t){const n=Pe(i);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=Pe(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Ah(a)}(n.eventManager,e),s.length&&n.dc.nu(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function TC(i,e,t){const n=Pe(i);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.yc.get(e),r=s&&s.key;if(r){let o=new ft(Se.comparator);o=o.insert(r,jt.newNoDocument(r,Le.min()));const a=Ge().add(r),c=new Ec(Le.min(),new Map,new ft(Ke),o,a);await M_(n,c),n.gc=n.gc.remove(r),n.yc.delete(e),Ch(n)}else await Mu(n.localStore,e,!1).then(()=>wu(n,e,t)).catch(No)}async function AC(i,e){const t=Pe(i),n=e.batch.batchId;try{const s=await B1(t.localStore,e);b_(t,n,null),w_(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Bo(t,s)}catch(s){await No(s)}}async function CC(i,e,t){const n=Pe(i);try{const s=await function(r,o){const a=Pe(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(lt(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(n.localStore,e);b_(n,e,t),w_(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Bo(n,s)}catch(s){await No(s)}}function w_(i,e){(i.Ec.get(e)||[]).forEach(t=>{t.resolve()}),i.Ec.delete(e)}function b_(i,e,t){const n=Pe(i);let s=n.Tc[n.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),n.Tc[n.currentUser.toKey()]=s}}function wu(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const n of i._c.get(e))i.wc.delete(n),t&&i.dc.Pc(n,t);i._c.delete(e),i.isPrimaryClient&&i.Ic.Is(e).forEach(n=>{i.Ic.containsKey(n)||E_(i,n)})}function E_(i,e){i.mc.delete(e.path.canonicalString());const t=i.gc.get(e);t!==null&&(p_(i.remoteStore,t),i.gc=i.gc.remove(e),i.yc.delete(t),Ch(i))}function Mp(i,e,t){for(const n of t)n instanceof x_?(i.Ic.addReference(n.key,e),RC(i,n)):n instanceof S_?(fe("SyncEngine","Document no longer in limbo: "+n.key),i.Ic.removeReference(n.key,e),i.Ic.containsKey(n.key)||E_(i,n.key)):Te()}function RC(i,e){const t=e.key,n=t.path.canonicalString();i.gc.get(t)||i.mc.has(n)||(fe("SyncEngine","New document in limbo: "+t),i.mc.add(n),Ch(i))}function Ch(i){for(;i.mc.size>0&&i.gc.size<i.maxConcurrentLimboResolutions;){const e=i.mc.values().next().value;i.mc.delete(e);const t=new Se(ht.fromString(e)),n=i.Ac.next();i.yc.set(n,new xC(t)),i.gc=i.gc.insert(t,n),f_(i.remoteStore,new wi(hi(Bg(t.path)),n,"TargetPurposeLimboResolution",lh.ct))}}async function Bo(i,e,t){const n=Pe(i),s=[],r=[],o=[];n.wc.isEmpty()||(n.wc.forEach((a,c)=>{o.push(n.Rc(c,e,t).then(l=>{if((l||t)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Sh.Li(c.targetId,l);r.push(u)}}))}),await Promise.all(o),n.dc.nu(s),await async function(a,c){const l=Pe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>J.forEach(c,h=>J.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>J.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Uo(u))throw u;fe("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,g)}}}(n.localStore,r))}async function IC(i,e){const t=Pe(i);if(!t.currentUser.isEqual(e)){fe("SyncEngine","User change. New user:",e.toKey());const n=await l_(t.localStore,e);t.currentUser=e,function(s,r){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new ve(X.CANCELLED,r))})}),s.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Bo(t,n.er)}}function LC(i,e){const t=Pe(i),n=t.yc.get(e);if(n&&n.fc)return Ge().add(n.key);{let s=Ge();const r=t._c.get(e);if(!r)return s;for(const o of r){const a=t.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function DC(i){const e=Pe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=M_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TC.bind(null,e),e.dc.nu=mC.bind(null,e.eventManager),e.dc.Pc=gC.bind(null,e.eventManager),e}function PC(i){const e=Pe(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CC.bind(null,e),e}class wp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return k1(this.persistence,new O1,e.initialUser,this.serializer)}createPersistence(e){return new N1(xh.zs,this.serializer)}createSharedClientState(e){return new q1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NC{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Sp(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=IC.bind(null,this.syncEngine),await uC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dC}createDatastore(e){const t=Tc(e.databaseInfo.databaseId),n=(s=e.databaseInfo,new K1(s));var s;return function(r,o,a,c){return new J1(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,s=e.asyncQueue,r=a=>Sp(this.syncEngine,a,0),o=vp.D()?new vp:new j1,new eC(t,n,s,r,o);var t,n,s,r,o}createSyncEngine(e,t){return function(n,s,r,o,a,c,l){const u=new SC(n,s,r,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Pe(e);fe("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await ko(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ui("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,t,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Wt.UNAUTHENTICATED,this.clientId=Rg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async r=>{fe("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(n,r=>(fe("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ve(X.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Th(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Il(i,e){i.asyncQueue.verifyOperationInProgress(),fe("FirestoreClient","Initializing OfflineComponentProvider");const t=await i.getConfiguration();await e.initialize(t);let n=t.initialUser;i.setCredentialChangeListener(async s=>{n.isEqual(s)||(await l_(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function bp(i,e){i.asyncQueue.verifyOperationInProgress();const t=await kC(i);fe("FirestoreClient","Initializing OnlineComponentProvider");const n=await i.getConfiguration();await e.initialize(t,n),i.setCredentialChangeListener(s=>yp(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,r)=>yp(e.remoteStore,r)),i._onlineComponents=e}function FC(i){return i.name==="FirebaseError"?i.code===X.FAILED_PRECONDITION||i.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}async function kC(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){fe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Il(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!FC(t))throw t;sr("Error using user provided cache. Falling back to memory cache: "+t),await Il(i,new wp)}}else fe("FirestoreClient","Using default OfflineComponentProvider"),await Il(i,new wp);return i._offlineComponents}async function T_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(fe("FirestoreClient","Using user provided OnlineComponentProvider"),await bp(i,i._uninitializedComponentsProvider._online)):(fe("FirestoreClient","Using default OnlineComponentProvider"),await bp(i,new NC))),i._onlineComponents}function BC(i){return T_(i).then(e=>e.syncEngine)}async function VC(i){const e=await T_(i),t=e.eventManager;return t.onListen=MC.bind(null,e.syncEngine),t.onUnlisten=bC.bind(null,e.syncEngine),t}function zC(i,e,t={}){const n=new Ai;return i.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,c){const l=new UC({next:h=>{r.enqueueAndForget(()=>pC(s,u)),h.fromCache&&a.source==="server"?c.reject(new ve(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new _C(o,l,{includeMetadataChanges:!0,Ku:!0});return fC(s,u)}(await VC(i),i.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(i,e,t){if(!t)throw new ve(X.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function HC(i,e,t,n){if(e===!0&&n===!0)throw new ve(X.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Tp(i){if(!Se.isDocumentKey(i))throw new ve(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Ap(i){if(Se.isDocumentKey(i))throw new ve(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Rh(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te()}function Qa(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ve(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rh(i);throw new ve(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A_((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ve(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ve(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ve(X.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Rc{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ve(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ve(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cp(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new sA;switch(t.type){case"firstParty":return new cA(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ve(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ep.get(e);t&&(fe("ComponentProvider","Removing Datastore"),Ep.delete(e),t.terminate())}(this),Promise.resolve()}}function GC(i,e,t,n={}){var s;const r=(i=Qa(i,Rc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&sr("Host has been set in both settings() and useEmulator(), emulator host will be used"),i._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),n.mockUserToken){let o,a;if(typeof n.mockUserToken=="string")o=n.mockUserToken,a=Wt.MOCK_USER;else{o=Ub(n.mockUserToken,(s=i._app)===null||s===void 0?void 0:s.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new ve(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Wt(c)}i._authCredentials=new rA(new Cg(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nn(this.firestore,e,this._key)}}class Ic{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ic(this.firestore,e,this._query)}}class Ci extends Ic{constructor(e,t,n){super(e,t,Bg(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nn(this.firestore,null,new Se(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}function WC(i,e,...t){if(i=io(i),C_("collection","path",e),i instanceof Rc){const n=ht.fromString(e,...t);return Ap(n),new Ci(i,null,n)}{if(!(i instanceof Nn||i instanceof Ci))throw new ve(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(ht.fromString(e,...t));return Ap(n),new Ci(i.firestore,null,n)}}function qC(i,e,...t){if(i=io(i),arguments.length===1&&(e=Rg.A()),C_("doc","path",e),i instanceof Rc){const n=ht.fromString(e,...t);return Tp(n),new Nn(i,null,new Se(n))}{if(!(i instanceof Nn||i instanceof Ci))throw new ve(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(ht.fromString(e,...t));return Tp(n),new Nn(i.firestore,i instanceof Ci?i.converter:null,new Se(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new h_(this,"async_queue_retry"),this.Xc=()=>{const t=Rl();t&&fe("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Rl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Rl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new Ai;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Uo(e))throw e;fe("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(n=>{this.Wc=n,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(n);throw ui("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.Hc=!1,n))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const s=Eh.createAndSchedule(this,e,t,n,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&Te()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class Ih extends Rc{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new jC,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||I_(this),this._firestoreClient.terminate()}}function $C(i,e){const t=typeof i=="object"?i:BE(),n=typeof i=="string"?i:e||"(default)",s=UE(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const r=Pb("firestore");r&&GC(s,...r)}return s}function R_(i){return i._firestoreClient||I_(i),i._firestoreClient.verifyNotTerminated(),i._firestoreClient}function I_(i){var e,t,n;const s=i._freezeSettings(),r=function(o,a,c,l){return new xA(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,A_(l.experimentalLongPollingOptions),l.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,s);i._firestoreClient=new OC(i._authCredentials,i._appCheckCredentials,i._queue,r),!((t=s.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.cache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(Qt.fromBase64String(e))}catch(t){throw new ve(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ur(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ve(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ve(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ve(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ke(this._lat,e._lat)||Ke(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/^__.*__$/;class KC{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oo(e,this.data,t,this.fieldTransforms)}}function D_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Ph{constructor(e,t,n,s,r,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.fa(e),s}da(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ja(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(D_(this.ca)&&XC.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class YC{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Tc(e)}ya(e,t,n,s=!1){return new Ph({ca:e,methodName:t,ga:n,path:$t.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function QC(i){const e=i._freezeSettings(),t=Tc(i._databaseId);return new YC(i._databaseId,!!e.ignoreUndefinedProperties,t)}function JC(i,e,t,n,s,r={}){const o=i.ya(r.merge||r.mergeFields?2:0,e,t,s);O_("Data must be an object, but it was:",o,n);const a=N_(n,o);let c,l;if(r.merge)c=new Ln(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ZC(e,h,t);if(!o.contains(d))throw new ve(X.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);t2(u,d)||u.push(d)}c=new Ln(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new KC(new En(a),c,l)}function P_(i,e){if(U_(i=io(i)))return O_("Unsupported field value:",e,i),N_(i,e);if(i instanceof L_)return function(t,n){if(!D_(n.ca))throw n._a(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n._a(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(n);s&&n.fieldTransforms.push(s)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,n){const s=[];let r=0;for(const o of t){let a=P_(o,n.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(i,e)}return function(t,n){if((t=io(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return GA(n.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=bt.fromDate(t);return{timestampValue:Ka(n.serializer,s)}}if(t instanceof bt){const s=new bt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ka(n.serializer,s)}}if(t instanceof Dh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ur)return{bytesValue:i_(n.serializer,t._byteString)};if(t instanceof Nn){const s=n.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw n._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vh(t.firestore._databaseId||n.databaseId,t._key.path)}}throw n._a(`Unsupported field value: ${Rh(t)}`)}(i,e)}function N_(i,e){const t={};return Ig(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(i,(n,s)=>{const r=P_(s,e.ha(n));r!=null&&(t[n]=r)}),{mapValue:{fields:t}}}function U_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof bt||i instanceof Dh||i instanceof ur||i instanceof Nn||i instanceof L_)}function O_(i,e,t){if(!U_(t)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(t)){const n=Rh(t);throw n==="an object"?e._a(i+" a custom object"):e._a(i+" "+n)}}function ZC(i,e,t){if((e=io(e))instanceof Lh)return e._internalPath;if(typeof e=="string")return F_(i,e);throw Ja("Field path arguments must be of type string or ",i,!1,void 0,t)}const e2=new RegExp("[~\\*/\\[\\]]");function F_(i,e,t){if(e.search(e2)>=0)throw Ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Lh(...e.split("."))._internalPath}catch{throw Ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Ja(i,e,t,n,s){const r=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${n}`),o&&(c+=` in document ${s}`),c+=")"),new ve(X.INVALID_ARGUMENT,a+i+c)}function t2(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t,n,s,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new n2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(B_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class n2 extends k_{data(){return super.data()}}function B_(i,e){return typeof e=="string"?F_(i,e):e instanceof Lh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ve(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class s2{convertValue(e,t="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return yr(e,(s,r)=>{n[s]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new Dh(St(e.latitude),St(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=hh(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const t=Ii(e);return new bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ht.fromString(e);lt(c_(n));const s=new _o(n.get(1),n.get(3)),r=new Se(n.popFirst(5));return s.isEqual(t)||ui(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(i,e,t){let n;return n=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class o2 extends k_{constructor(e,t,n,s,r,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(B_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Pa extends o2{data(e={}){return super.data(e)}}class a2{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ba(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Pa(this._firestore,this._userDataWriter,n.key,n,new ba(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ve(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,s){if(n._snapshot.oldDocs.isEmpty()){let r=0;return n._snapshot.docChanges.map(o=>{const a=new Pa(n._firestore,n._userDataWriter,o.doc.key,o.doc,new ba(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Pa(n._firestore,n._userDataWriter,o.doc.key,o.doc,new ba(n._snapshot.mutatedKeys.has(o.doc.key),n._snapshot.fromCache),n.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:c2(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function c2(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class l2 extends s2{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Nn(this.firestore,null,t)}}function u2(i){i=Qa(i,Ic);const e=Qa(i.firestore,Ih),t=R_(e),n=new l2(e);return i2(i._query),zC(t,i._query).then(s=>new a2(e,n,i,s))}function h2(i,e){const t=Qa(i.firestore,Ih),n=qC(i),s=r2(i.converter,e);return d2(t,[JC(QC(i.firestore),"addDoc",n._key,s,i.converter!==null,{}).toMutation(n._key,ai.exists(!1))]).then(()=>n)}function d2(i,e){return function(t,n){const s=new Ai;return t.asyncQueue.enqueueAndForget(async()=>EC(await BC(t),n,s)),s.promise}(R_(i),e)}(function(i,e=!0){(function(t){vr=t})(kE),Fa(new so("firestore",(t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),o=new Ih(new oA(t.getProvider("auth-internal")),new uA(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ve(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(a.options.projectId,c)}(r,n),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Ws(Kf,"3.12.1",i),Ws(Kf,"3.12.1","esm2017")})();const f2={apiKey:"AIzaSyDDI4r2J9s6_KIt4oSkRCOSEW_F9FbF1UM",authDomain:"blindsar-bf61b.firebaseapp.com",projectId:"blindsar-bf61b",storageBucket:"blindsar-bf61b.appspot.com",messagingSenderId:"123688707448",appId:"1:123688707448:web:4871c7daad023953d5d48d"};wm(f2);const p2=$C(),V_=WC(p2,"form");u2(V_).then(i=>{let e=[];i.docs.forEach(t=>{e.push({...t.data(),id:t.id})}),console.log(e)}).catch(i=>{console.log(i.message)});function m2(i){const e=document.createElement("div");e.classList.add("price-container");const t=document.createElement("button");return t.classList.add("price-button"),t.textContent="View Price",t.addEventListener("click",()=>{t.remove();const n=document.createElement("form");n.classList.add("price-form");const s=document.createElement("input");s.type="text",s.name="name",s.placeholder="Name",s.required=!1;const r=document.createElement("input");r.type="email",r.name="email",r.placeholder="Email",r.required=!1;const o=document.createElement("button");o.classList.add("price-form-submit-button"),o.type="submit",o.textContent="Submit",n.appendChild(s),n.appendChild(r),n.appendChild(o),n.addEventListener("submit",a=>{a.preventDefault();const c=new FormData(n),l=c.get("name"),u=c.get("email");h2(V_,{name:l,email:u,price:i}).then(()=>{console.log("Form data stored in Firestore")}).catch(h=>{console.error("Error storing form data: ",h)}),n.remove()}),e.appendChild(n)}),e.appendChild(t),e}let Ll,So,In,xn,Dl,Bn,Pl,Ea=null,Nl=!1,ut=[],Ta=0,Aa=0;g2();v2();function g2(){Ll=document.createElement("div"),document.body.appendChild(Ll),In=new iw,So=new nn(70,window.innerWidth/window.innerHeight,.01,20);const i=new Cw(16777215,12303359,1);i.position.set(.5,1,.25),In.add(i),xn=new im({antialias:!0,alpha:!0}),xn.setPixelRatio(window.devicePixelRatio),xn.setSize(window.innerWidth,window.innerHeight),xn.xr.enabled=!0,Ll.appendChild(xn.domElement),document.body.appendChild(qw.createButton(xn,{requiredFeatures:["hit-test"]})),Bn=new sn(new Pu(.15,.2,32).rotateX(-Math.PI/2),new si),Bn.matrixAutoUpdate=!1,Bn.visible=!1,In.add(Bn);const e=new Nu(.005,16,16),t=new si({color:16777215});Pl=new sn(e,t),Pl.position.set(0,0,0),Bn.add(Pl);function n(c,l){const u=document.createElement("canvas"),h=u.getContext("2d");h.font="bold 20px Arial",h.fillStyle=l,h.fillText(c,0,20);const d=new pw(u),p=new rm({map:d,transparent:!0}),g=new sw(p);return g.scale.set(.01*u.width,.01*u.height,1),g}const s=n("","white");In.add(s);function r(c,l,u,h){new jw().load("https://raw.githubusercontent.com/Raamdeluxe/blindsar/main/static/models/window_blinds/scene.gltf",p=>{const g=p.scene,_=new Xn().setFromObject(g),m=_.getSize(new C),f=c/m.x,w=l/m.y,x=Math.min(f,w);g.scale.set(f,w,x);const v=new C;_.getCenter(v),v.multiply(new C(f,w,x));const E=u.clone().sub(v);g.position.copy(E),In.add(g),document.body.appendChild(m2(h))})}async function o(c,l){try{const h=await(await fetch("https://raw.githubusercontent.com/Raamdeluxe/blindsar/main/data/price.json")).json(),d=c.toString(),p=l.toString();if(h[d]&&h[d][p]){const g=h[d][p];if(console.log(`Price: €${g}`),ut.length===3){const _=ut[0].distanceTo(ut[1]),m=ut[1].distanceTo(ut[2]),f=new C().addVectors(ut[0],ut[2]).multiplyScalar(.5);r(_,m,f,g)}}else console.log("Width or height not found in the price data")}catch(u){console.error("Error fetching price data:",u)}}function a(){if(Bn.visible){const c=new sn(e,t);Bn.matrix.decompose(c.position,c.quaternion,c.scale),In.add(c),ut.push(c.position.clone());let l=0;if(ut.length>=2){const u=new hn().setFromPoints(ut),h=new Du({color:16777215,linewidth:5,linecap:"round"}),d=new nc(u,h);In.add(d),l=ut[ut.length-2].distanceTo(ut[ut.length-1]);const p=(l*100).toFixed(2),g=Math.ceil(p/10)*10;In.remove(s),s.material.map.dispose(),s.material.dispose();const _=n(`${p} cm`,"white");_.position.copy(ut[ut.length-1]).add(new C(.05,.05,0));const f=.001*So.position.distanceTo(_.position);if(_.scale.set(f*_.material.map.image.width,f*_.material.map.image.height,1),ut.length%2==0?Ta=l:Aa=l,Ta!==0&&Aa!==0){const w=(Ta*Aa).toFixed(2);console.log(`Area: ${w} m²`);const x=Math.ceil(Ta*100/10)*10,v=Math.ceil(Aa*100/10)*10;o(x,v)}In.add(_),console.log(g)}ut.length===3&&(ut[0].distanceTo(ut[1]),ut[1].distanceTo(ut[2]),new C().addVectors(ut[0],ut[2]).multiplyScalar(.5))}}Dl=xn.xr.getController(0),Dl.addEventListener("select",a),In.add(Dl),window.addEventListener("resize",_2)}function _2(){So.aspect=window.innerWidth/window.innerHeight,So.updateProjectionMatrix(),xn.setSize(window.innerWidth,window.innerHeight)}function v2(){xn.setAnimationLoop(y2)}function y2(i,e){if(e){const t=xn.xr.getReferenceSpace(),n=xn.xr.getSession();if(Nl===!1&&(n.requestReferenceSpace("viewer").then(function(s){n.requestHitTestSource({space:s}).then(function(r){Ea=r})}),n.addEventListener("end",function(){Nl=!1,Ea=null}),Nl=!0),Ea){const s=e.getHitTestResults(Ea);if(s.length){const r=s[0];Bn.visible=!0,Bn.matrix.fromArray(r.getPose(t).transform.matrix)}else Bn.visible=!1}}xn.render(In,So)}
