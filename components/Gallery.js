import {useRef, useEffect} from "react";
import Work from '@/components/Work';
import useRaf from '../hooks/useRaf';
import NormalizeWheel from 'normalize-wheel';

const Gallery = ({contents}) => {

  const radius = 12;
  const gallery = useRef();

  // events status
  const touchIsStarted = useRef(false);
  const touchStartPos = useRef();

  // scroll vars
  const speed = useRef(0);
  const direction = useRef('forward');

  // dom manipulation value
  const rotationY = useRef(0);

  // behavioral constants
  const forceDecellerationFactor = 0.9;
  const decellerationFactor = 0.0003;

  /* -------------------------------------------------- */
  /* request animation frame using ref rotation         */
  /* -------------------------------------------------- */

  useRaf((delta)=>{
    // set the new rotationY:
    rotationY.current -= decellerationFactor * speed.current;

    // move three accordingly
    gallery.current.rotation.y = rotationY.current;

    // decrement the force
    direction.current = (speed.current > 0) ? 'forward' : 'back';
    speed.current = (direction.current === 'forward') ? Math.floor(speed.current * forceDecellerationFactor) : Math.ceil(speed.current * forceDecellerationFactor);
  });

  /* -------------------------------------------------- */
  /* speed management as per mouse or touch interaction */
  /* -------------------------------------------------- */

  const onWheel = () => {
    const normalized = NormalizeWheel(event);
    speed.current = Math.round(normalized.pixelY);
  };
  const onTouchStart = (event) => {
    // start touch behavior
    touchIsStarted.current = true;
    touchStartPos.current = event.touches ? event.touches[0].clientY : event.clientY;
  };

  const onTouchMove = (event) => {
    if (!touchIsStarted.current) return;
    const newPosition = event.touches ? event.touches[0].clientY : event.clientY;
    const distance = touchStartPos.current - newPosition;
    speed.current = Math.round(distance);
  };

  const onTouchEnd = (event) => {
    touchIsStarted.current = false;
  };

  useEffect(() => {
    let scrollTgtElement = document.querySelector('.stage');
    scrollTgtElement.addEventListener('mousewheel', onWheel);
    scrollTgtElement.addEventListener('touchstart', onTouchStart);
    scrollTgtElement.addEventListener('touchmove', onTouchMove);
    scrollTgtElement.addEventListener('touchend', onTouchEnd);
  }, []);


  /* -------------------------------------------------- */
  /* ------------------ render ------------------------ */
  /* -------------------------------------------------- */

  const renderWorks = () => {
    let baseDegrees = (2*Math.PI) / contents.length;
    return contents.map((el, i) => {
      let x = radius * Math.cos(i * baseDegrees);
      let z = radius * Math.sin(i * baseDegrees);
      let rot = - (baseDegrees*i + Math.PI/2);
      return <Work
        key={`work-${i}`}
        picture={el.picture}
        title={el.title}
        position={[x, 0, z]}
        rotation={[0, rot, 0]}
      />;
    });
  };

  return (
    <group ref={gallery} position={[0,1,0]} >
      {renderWorks()}
    </group>
  )
};


export default Gallery;

