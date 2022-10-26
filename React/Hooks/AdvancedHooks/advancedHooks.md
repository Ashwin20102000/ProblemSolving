
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
   
   Mostly it helps when we have to re-renders component that should not affect another function action

## useContext
   + From React Context API, helps in avoiding props-drilling.
   + Passing data into deep tree
 **Setup**
  ColorModeProvider.js
```javascript
    
    import React from 'react'
    import useMediaQuery from '@mui/material/useMediaQuery';
    import { keys } from '../utils/keys';
    import useLocalStorage from '../hooks/useLocalStorage';
    import { createTheme, ThemeProvider } from '@mui/material';

    const ColorModeContext = React.createContext();

    const ColorModeProvider = ({children}) => {
      // For Intial Os based Theme
      const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
      const [mode, setMode] = useLocalStorage(keys.themeKey,prefersDarkMode?'dark':'light');
      const colorMode = React.useMemo(() => ({toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }}),[setMode]);
      const theme = React.useMemo(() =>createTheme({palette: {mode}}),[mode]);

      return (
       <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
       </ColorModeContext.Provider>
      )
    }
    export const useColorMode = () => React.useContext(ColorModeContext);

    export default ColorModeProvider;
  ```
 **Desired Level** 
 
 ```javascript
    <ColorModeProvider>
    <!-- Your Child Component Goes Here        -->
    </ColorModeProvider>
 ```
 **useColorMode(useContext)**
 ```javascript
   const { colorMode } = useColorMode();
 ```
 
 ## useId
  + Hooks used for generation uniques Ids that can be passed as the accesability attributes
  + Generating IDs for several related elements

 ```javascript
   const id = useId()
 ```
 using with elements
 ```javascript
    <label>
      Password:
      <input
        type="password"
        id={id}
      />
    </label>
    <p id={id}>
      There is a password
    </p>

  ```
  Now there will be unique ids  so they won't clash each other with element (unique key)
  
