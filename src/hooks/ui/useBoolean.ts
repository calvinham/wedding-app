import { useState, useCallback } from 'react';

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((v) => !v), []);

  return [value, { setTrue, setFalse, toggle }] as const;
}
