import { useRef , useEffect, ReactNode, useCallback } from "react";
import { store } from "store"
import {useInView} from "framer-motion"
import { isKeyObject } from "util/types";
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
function isInViewport(el  : Element) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

export const useActiveLink = (id  : string  ) => {
  let elementNav = document.querySelector(
    `.not-responsive [href ='#${id}']`
  );
  // const sectionEle = document.getElementById(id)
  const ref = useRef(null);
  const isInView = useInView(ref  , {amount :0});
  useEffect(() => {
    if(elementNav) {
      if (isInView) {
        elementNav.classList.add("active");
      } else {
         elementNav.classList.remove("active");
      }
    }
  }, [isInView]);
  return {ref}
}
