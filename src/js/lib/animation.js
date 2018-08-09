import {TimelineMax} from 'gsap';

let tl1 = new TimelineMax();
let tl2 = new TimelineMax();
let tl3 = new TimelineMax();
let tl4 = new TimelineMax();

tl1
  .staggerFromTo('.categories__link',0.3,{y: 100,opacity:0},{y:0,opacity:1}, 0.2)
  .staggerFromTo('.categories__count',0.3,{y: 100,opacity:0},{y:0,opacity:1}, 0.2);
 
tl2
  .staggerFromTo('.data__caption',0.3,{x: 100,opacity:0},{x:0,opacity:1}, 0.2)
  .staggerFromTo('.data__description', 0.3,{y: 100, opacity:0},{y:0,opacity:1}, 0.2);
	
tl3
  .staggerFromTo('.gallery__photo',0.3,{x: 100,opacity:0},{x:0,opacity:1}, 0.2);

  
$( '.nav-button').click(function() {
  tl4
    .staggerFromTo('.nav--is-visible', 0.8, { x: -100},{ ease: Circ.easeOut, x: 0})
    .staggerFromTo('.nav__link',0.3,{x: -50, opacity: 0},{x: 0, opacity: 1} ,0.2);
    
});







