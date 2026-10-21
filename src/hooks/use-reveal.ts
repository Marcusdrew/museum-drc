import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ajoute la classe `is-visible` aux éléments `.reveal` lorsqu'ils entrent
 * dans le viewport — animation d'apparition discrète, sans dépendance.
 */
export const useReveal = (contentKey?: string) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -20px 0px" },
    );

    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) el.classList.add("reveal-pending");
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("reveal-pending"));
    };
  }, [pathname, contentKey]);
};
