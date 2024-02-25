import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
export function checkIfNumber(event) {
  /**
   * Allowing: Integers | Backspace | Tab | Delete | Left & Right arrow keys
   **/

  const regex = new RegExp(
    /(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)|\./
  );

  return !event.key.match(regex) && event.preventDefault();
}
