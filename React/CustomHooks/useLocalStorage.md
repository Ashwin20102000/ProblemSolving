## useLocalStorage
   + This is my custom hook for storing any type of data in the localStorage and retrieving that.
   + Hook is simply combination of useState and useEffect with window object localStorage 
   
   ```javascript
     const [storage, setStorage] = useLocalStorage(key,intialValue);
   ```
 
   ```console
     ashwin@jeyaraman:~/MyApp/src$ touch hooks/useLocalStorage.js
   ``` 
   useLocalStorage.js
   ```javascript
    import React from "react";
    import { keys } from "../utils/keys";

    const useLocalStorage = (key,intialVal) => {
      const prefixedKey = keys.localStorageKeysPrefix+key;
      const [state,setState] = React.useState(()=>{
        const getState = localStorage.getItem(prefixedKey);
        if(getState!=null)return JSON.parse(getState);
        if(typeof intialVal==='function'){
          intialVal();
        }
        else{
          return intialVal;
        }
      })

      React.useEffect(()=>{
        localStorage.setItem(prefixedKey,JSON.stringify(state));
      },[state,prefixedKey]);

      return [state,setState]
    }

    export default useLocalStorage;
   ``` 
