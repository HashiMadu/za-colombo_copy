google.maps.__gjsload__('geometry', function(_){var nra=function(a,b){return Math.abs(_.Jj(b-a,-180,180))},ora=function(a,b,c,d,e){if(!d){c=nra(a.lng(),c)/nra(a.lng(),b.lng());if(!e)return e=Math.sin(_.jj(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.jj(b.lat())),_.kj(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.Il(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.jj(a.lat());a=_.jj(a.lng());d=_.jj(b.lat());b=_.jj(b.lng());c=_.jj(c);return _.Jj(_.kj(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},pra=function(a,b){a=new _.sk(a,!1);b=new _.sk(b,!1);return a.equals(b)},qra=function(a,b,c){a=_.wk(a);c=c||1E-9;const d=_.Jj(a.lng(),-180,180),e=b instanceof _.$n,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(let t=0,u=g.getLength();t<u;++t){const w=g.getAt(t),y=w.getLength(),z=e?y:y-1;for(let B=0;B<z;++B){var h=w.getAt(B);const D=w.getAt((B+
1)%y);if(pra(h,a)||pra(D,a))return!0;var k=_.Jj(h.lng(),-180,180),m=_.Jj(D.lng(),-180,180);const G=Math.max(k,m),I=Math.min(k,m);if(k=Math.abs(_.Jj(k-m,-180,180))<=1E-9&&(Math.abs(_.Jj(k-d,-180,180))<=c||Math.abs(_.Jj(m-d,-180,180))<=c)){k=a.lat();m=Math.min(h.lat(),D.lat())-c;var p=Math.max(h.lat(),D.lat())+c;k=k>=m&&k<=p}if(k)return!0;if(G-I>180?d+c>=G||d-c<=I:d+c>=I&&d-c<=G)if(h=ora(h,D,d,f,b),Math.abs(h-a.lat())<c)return!0}}return!1},sra=function(a,b){const c=[];let d=[0,0],e;for(let f=0,g=_.Fj(a);f<
g;++f)e=b?b(a[f]):[a[f].lat(),a[f].lng()],rra(e[0]-d[0],c),rra(e[1]-d[1],c),d=e;return c.join("")},rra=function(a,b){for(a=a<0?~(a<<1):a<<1;a>=32;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63))},mz=class{};mz.isLocationOnEdge=qra;
mz.containsLocation=function(a,b){a=_.wk(a);const c=_.Jj(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs");var f=b.get("map");f=!d&&f?f.getProjection():null;let g=!1;for(let k=0,m=e.getLength();k<m;++k){const p=e.getAt(k);for(let t=0,u=p.getLength();t<u;++t){const w=p.getAt(t),y=p.getAt((t+1)%u);var h=_.Jj(w.lng(),-180,180);const z=_.Jj(y.lng(),-180,180),B=Math.max(h,z);h=Math.min(h,z);(B-h>180?c>=B||c<h:c<B&&c>=h)&&ora(w,y,c,d,f)<a.lat()&&(g=!g)}}return g||qra(a,b)};var nz=class{};nz.encodePath=function(a){a instanceof _.ym&&(a=a.getArray());a=(0,_.$k)(a);return sra(a,function(b){return[Math.round(b.lat()*1E5),Math.round(b.lng()*1E5)]})};nz.decodePath=function(a){const b=_.Fj(a),c=Array(Math.floor(a.length/2));let d=0,e=0,f=0,g;for(g=0;d<b;++g){let h=1,k=0,m;do m=a.charCodeAt(d++)-63-1,h+=m<<k,k+=5;while(m>=31);e+=h&1?~(h>>1):h>>1;h=1;k=0;do m=a.charCodeAt(d++)-63-1,h+=m<<k,k+=5;while(m>=31);f+=h&1?~(h>>1):h>>1;c[g]=new _.sk(e*1E-5,f*1E-5,!0)}c.length=g;return c};var tra={encoding:nz,spherical:_.nq,poly:mz};_.ra.google.maps.geometry=tra;_.xj("geometry",tra);});
