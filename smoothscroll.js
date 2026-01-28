//smooth scroll by realmxrza
(function() {
    let velocity = 0;
    let scrolling = false;
    
    // adjust
    const friction = 0.92;   
    const sensitivity = 0.1;   

    const runScroll = (el) => {
        if (Math.abs(velocity) < 0.1) {
            velocity = 0;
            scrolling = false;
            return;
        }

        el.scrollTop += velocity;
        velocity *= friction;
        requestAnimationFrame(() => runScroll(el));
    };

    const onWheel = (e) => {
        const container = e.target.closest('[class*="scrollerBase_"]');
        if (!container) return;

        e.preventDefault();
        velocity += e.deltaY * sensitivity;

        if (!scrolling) {
            scrolling = true;
            runScroll(container);
        }
    };

    // kill
    if (window.smoothScrollHandler) {
        window.removeEventListener('wheel', window.smoothScrollHandler);
    }

    window.smoothScrollHandler = onWheel;
    window.addEventListener('wheel', onWheel, { passive: false });

    console.log("Smooth Scroll Enabled");
})();
