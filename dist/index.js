"use strict";var p=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(t){throw a=0,t}}};var T=p(function(Z,N){"use strict";var l=require("@stdlib/number-float64-base-to-float32");function R(r){return r===0?1:l(1+l(r*l(-.24673981964588165+l(r*l(.028184890747070312+l(r*l(-.001604381832294166+l(r*l(5387223427533172e-20+l(r*l(-11572313951546676e-22+l(r*14168024975447224e-24))))))))))))}N.exports=R});var I=p(function($,A){"use strict";var n=require("@stdlib/number-float64-base-to-float32");function S(r){return r===0?2.999401807785034:n(2.999401807785034+n(r*n(-103.28775787353516+n(r*n(8560.515625+n(r*n(-873235.6875+n(r*n(73438488+n(r*n(-4158143232+n(r*n(135594237952+n(r*-1903009857536))))))))))))))}A.exports=S});var b=p(function(d,P){"use strict";var u=require("@stdlib/number-float64-base-to-float32");function _(r){return r===0?.9999842047691345:u(.9999842047691345+u(r*u(-14.934393882751465+u(r*u(860.2931518554688+u(r*u(-77877.8984375+u(r*u(64926115e-1+u(r*u(-377938784+u(r*u(12783506432+u(r*-186084392960))))))))))))))}P.exports=_});var w=p(function(x,m){"use strict";var s=require("@stdlib/number-float64-base-to-float32");function h(r){return r===0?.5235987901687622:s(.5235987901687622+s(r*s(-.0922805592417717+s(r*s(.007244727574288845+s(r*s(-.00031206931453198195+s(r*s(8424748557445128e-21+s(r*s(-15227547578433587e-23+s(r*164762947729713e-23))))))))))))}m.exports=h});var g=p(function(rr,G){"use strict";var j=require("@stdlib/constants-float32-half-pi"),C=require("@stdlib/constants-float32-pi"),k=require("@stdlib/math-base-assert-is-nanf"),z=require("@stdlib/math-base-special-absf"),B=require("@stdlib/math-base-special-sincosf").assign,e=require("@stdlib/number-float64-base-to-float32"),D=T(),E=I(),J=b(),K=w(),o=[0,0];function M(r,a,t,v){var q,c,F,f,i,y;return k(r)?(a[v]=NaN,a[v+t]=NaN,a):(r=e(r),c=z(r),q=e(c*c),q<2.5625?(i=e(q*q),a[v]=e(e(c*q)*K(i)),a[v+t]=e(c*D(i))):c>36974?(a[v]=.5,a[v+t]=.5):(i=e(C*q),y=e(1/e(i*i)),i=e(1/i),F=e(1-e(y*E(y))),f=e(i*J(y)),i=e(j*q),B(i,o,1,0),i=e(C*c),a[v+t]=e(.5+e(e(e(F*o[0])-e(f*o[1]))/i)),a[v]=e(.5-e(e(e(F*o[1])+e(f*o[0]))/i))),r<0&&(a[v]=-a[v],a[v+t]=-a[v+t]),a)}G.exports=M});var L=p(function(er,H){"use strict";var Q=require("@stdlib/array-float32"),U=g();function V(r){return U(r,new Q(2),1,0)}H.exports=V});var W=require("@stdlib/utils-define-nonenumerable-read-only-property"),O=L(),X=g();W(O,"assign",X);module.exports=O;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/
//# sourceMappingURL=index.js.map
