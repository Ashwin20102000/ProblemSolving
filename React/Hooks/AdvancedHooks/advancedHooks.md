
## useRef

  + Hook used for reference a value that's not for rendering.
  + Avoids recreating ref content
  + Manipulated DOM with Ref

  ```javascript
       const inputRef = useRef(intialValue);
  ```
  Input Element referencing by ref property

  ```javascript
       return <input ref={inputRef} />
  ```
    Now we can access this DOM Node ease.
  

  ```javascript
       inputRef.current = 0059;
       inputRef.current.focus();
  ```
  While passing the props(ref) down to the CustomComponent(For Dom Operation). it's good to use forwardRef to avoid error.
  
  ## useImperlativeHandle
  + Hook used to customize handle exposed as ref
  + Exposing a custom ref handle to the parent component
  + Exposing your own imperative methods
  
   ```javascript
     useImperativeHandle(ref, createHandle, dependencies?)
   ```
   Example
   ```javascript
       useImperativeHandle(ref, () => {
          return {
            // ... your methods ...
          };
        }, []);
   ```
   
   ## useMemo
   + Hook cache the calculated value between re-renders
   + Prevents Re-Rendering of the Component
   + Skips expensive re-calculations
   ```javascript
     useMemo(calculateValue, dependencies)
   ```
   
   Mostly it helps when we have re-renders that should not affect another methods
