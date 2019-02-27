import React, { useState, useEffect } from 'react'

function componentNotReadyFn() {
  return _ => null
}

export function useLazyBundle(bundle, timeout, placeholder) {
  const [LoadedBundle, setLoadedBundle] = useState(componentNotReadyFn)

  useEffect(() => {
    bundle(bundleModule => {
      setLoadedBundle(_ => bundleModule.default)
    })
    setTimeout(() => {
      if (LoadedBundle.toString() !== componentNotReadyFn().toString()) {
        setLoadedBundle(_ => placeholder)
      }
    }, timeout)
  }, [])

  return [LoadedBundle]
}

export default useLazyBundle
