import { useEffect } from "react";

export default function useClickOutside(ref: any, callback: Function) {
  function handleClick(e: any) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
}
