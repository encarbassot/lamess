import { useEffect, useRef, useState } from "react";

/**
 * Hook para UI flotante: scrolled + idle + clicked + mounted
 * @param {Object} opts
 * @param {number} [opts.idleMs=5000]   - ms de inactividad para activar isIdle
 * @param {number} [opts.topThreshold=1] - px de scrollY para considerar "en top"
 * @param {any[]}  [opts.resetDeps=[]]   - deps que reinician el contador (e.g. [pathname])
 * @param {boolean}[opts.resetOnTop=true]- al volver a top reinicia idle timer
 */
export default function useAnimatedDiv(opts = {}) {
  const {
    idleMs = 5000,
    topThreshold = 1,
    resetDeps = [],
    resetOnTop = true,
  } = opts;

  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const idleTimerRef = useRef(null);

  const clearIdleTimer = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  };

  const startIdleTimer = () => {
    clearIdleTimer();
    setIsIdle(false);
    idleTimerRef.current = setTimeout(() => setIsIdle(true), idleMs);
  };

  const markActivity = () => {
    // Llamar cuando haya interacción del usuario para “despertar” y reiniciar el conteo
    startIdleTimer();
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll listener
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const atTop = window.scrollY <= topThreshold;
      setIsScrolled(!atTop);
      if (resetOnTop && atTop) {
        // al volver al top reiniciamos el idle
        startIdleTimer();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // init estado de scroll + arranque idle
    onScroll();
    startIdleTimer();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topThreshold, resetOnTop]);

  // Reiniciar idle al cambiar dependencias externas (ej. pathname)
  useEffect(() => {
    startIdleTimer();
    return clearIdleTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, resetDeps);

  // Limpieza global
  useEffect(() => clearIdleTimer, []);

  // Props de conveniencia para adjuntar a un botón/contendor y reiniciar idle en interacción
  const activityHandlers = {
    onMouseMove: markActivity,
    onMouseDown: markActivity,
    onMouseUp: markActivity,
    onTouchStart: markActivity,
    onTouchEnd: markActivity,
    onKeyDown: markActivity,
  };

  return {
    // estado
    isMounted,
    isScrolled,
    isIdle,
    isClicked,

    // setters / helpers
    setIsClicked,
    markActivity,
    startIdleTimer,
    clearIdleTimer,

    // para prop spreading en elementos interactivos
    activityHandlers,
  };
}
