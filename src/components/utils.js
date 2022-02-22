// A collection of reusable tools
import { useRef, useEffect } from "react"

export const usePrevious = value => {
  /**
   * Keeps a reference to the last value to prevent recursive
   * re-rendering. Used in combination with useEffect
   *
   * See Screen.js for example
   */
  const ref = useRef()
  useEffect(() => {
    ref.current = value //assign the value of ref to the argument
  }, [value]) //this code will run when the value of 'value' changes
  return ref.current //in the end, return the current ref value.
}
