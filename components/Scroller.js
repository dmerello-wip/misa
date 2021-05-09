import {useState, useEffect, useRef} from 'react';
import useRaf from '../hooks/useRaf';
import NormalizeWheel from 'normalize-wheel';

const Scroller = ({children, scrollType = 'vertical'}) => {

  /* --------------- */
  /* refs and params */
  /* --------------- */

  // dom elements
  const scroller = useRef();
  const inner = useRef();

  // events status
  const touchIsStarted = useRef(false);
  const touchStartPos = useRef();

  // scroll vars
  const speed = useRef(0);
  const direction = useRef('forward');

  // dom manipulation value
  const position = useRef(0);

  // behavioral constants
  const forceDecellerationFactor = 0.95;
  const decellerationFactor = 0.15;

  // parameters to use in controls and manipulation
  const controls = {
    vertical: {
      start: 'top',
      end: 'bottom',
      cssTransform: 'translateY'
    },
    horizontal: {
      start: 'left',
      end: 'right',
      cssTransform: 'translateX'
    }
  };

  /* ---------------------------- */
  /* request animation frame hook */
  /* ---------------------------- */


  useRaf((delta) => {

    // detect scroll movement direction
    direction.current = (speed.current > 0) ? 'forward' : 'back';

    // define the overscroll conditions:
    let overBackCondition = (
      direction.current === 'back' &&
      inner.current.getBoundingClientRect()[controls[scrollType].start] >= scroller.current.getBoundingClientRect()[controls[scrollType].start]
    );
    let overForwardCondition = (
      direction.current === 'forward' &&
      inner.current.getBoundingClientRect()[controls[scrollType].end] < scroller.current.getBoundingClientRect()[controls[scrollType].end]
    );

    // if we overscrolled, define the gap to fill:
    let gapToFill = 0;
    if (overBackCondition || overForwardCondition) {
      gapToFill = (overBackCondition) ? position.current : inner.current.getBoundingClientRect()[controls[scrollType].end] - scroller.current.getBoundingClientRect()[controls[scrollType].end];
    }

    // set the new position:
    position.current -= gapToFill + decellerationFactor * speed.current;

    // move DOM accordingly
    inner.current.style.transform = `${controls[scrollType].cssTransform}(${position.current}px)`;

    // decrement the force
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
    scroller.current.addEventListener('mousewheel', onWheel);
    scroller.current.addEventListener('touchstart', onTouchStart);
    scroller.current.addEventListener('touchmove', onTouchMove);
    scroller.current.addEventListener('touchend', onTouchEnd);
  }, []);


  /* ------ */
  /* render */
  /* ------ */

  let classes = `scroller scroller--${scrollType}`
  return (
    <div className={classes} ref={scroller}>
      <div className="scroller__inner" ref={inner}>
        {children}
      </div>
    </div>
  );
};

export default Scroller;