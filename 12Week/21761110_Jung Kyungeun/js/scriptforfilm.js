var R = 300 , dur = 5; 

var tl = new TimelineLite()
.staggerTo(".small_cookie", dur ,{
bezier:{curviness:1.5,values:[{x:0,y:0},{x:R/2,y:R/2},{x:0,y:R},{x:-R/2,y:R/2},{x:0,y:0}]}
,rotation:-720,repeat:-1,ease:Power0.easeNone},dur/6)
.to(".main_cookie", dur ,{rotation:-360,ease:Power0.easeNone,repeat:-1},0)
.time(dur);