(function() {

    // Adjust here

    const friction = 0.92;
    const sensitivity = 0.1;   // Scroll speed multiplier
    
    let velocity = 0;
    let isScrolling = false;
    let activeContainer = null;

    const updateScrollPosition = () => {
        if (Math.abs(velocity) < 0.1 || !activeContainer) {
            velocity = 0;
            isScrolling = false;
            return;
        }

        activeContainer.scrollTop += velocity;
        velocity *= friction;

        requestAnimationFrame(updateScrollPosition);
    };

    const handleWheelEvent = (event) => {
        const scroller = event.target.closest('[class*="scrollerBase_"]');
        
        if (!scroller) return;

        event.preventDefault();

        if (activeContainer !== scroller) {
            activeContainer = scroller;
        }

        velocity += event.deltaY * sensitivity;

        if (!isScrolling) {
            isScrolling = true;
            updateScrollPosition();
        }
    };

       if (window.smoothScrollHandler) {
        window.removeEventListener('wheel', window.smoothScrollHandler);
    }

    window.smoothScrollHandler = handleWheelEvent;
    window.addEventListener('wheel', handleWheelEvent, { passive: false });

    console.log("%c[SmoothScroll]%c v2 by realmxrza enabled", "color: #5865F2; font-weight: bold;", "");
})();
