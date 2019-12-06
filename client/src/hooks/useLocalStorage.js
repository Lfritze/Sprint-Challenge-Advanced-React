import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const entry = window.localStorage.getItem(key);
    return entry ? JSON.parse(entry) : initialValue;
  });

  const setValue = value => {
    console.log(value); // logs true or false
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useLocalStorage;

// NOtes ****
// Although this isn’t something you will often do (storing input values in localStorage), this setup is quite powerful, and it effectively demonstrates how composable hooks can be; by combining the stateful logic of multiple custom hooks, you can compose a really nice custom hook with advanced stateful logic.

// One final thing to note is that we can employ the useLocalStorage custom hook in other places now as well. So, not only do we have an extra-powerful useInput created by composing multiple hooks together, we also have another custom hook available to us anytime we want to persist data in localStorage.
