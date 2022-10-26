## useState :
  Hooks helps in adding state variable to the component.
  ```javascript
  const [state,setState] = useState(intialState);
  ```
  **State** - 
  Here, State holds the data or information of the particular state.
  
  **setState**
  + setState can be direct value 
  ```javascript
    setState(20)
  ```
  + setState can be fn also 
  ```javascript
     setState(()=>setState(false))
  ``` 
  + every setState as the props of previous state 
  ```javascript
     setState(prev=>[...prev,currData]);
  ``` 
  
  + So whenever setState triggers there is process of re-rendering will be occur.
  
  useState takes intialState which is current state while creation.
  ex: 
  ```javascript
    useState(false);
  ```

  useState hook itself returns state and setState.
  
  
## useEffect :
  Hooks helps in synchronize a component with external system(SideEffects).
  ```javascript  
  useEffect(setupCbFn,dependecies);
  ```
  
  Every Re-Render Effect:
  Without Dependency array thus effect runs on every render.
   ```javascript
    useEffect(() => {
      // ...
    }); //  No dependency array: re-runs after every render!
   ```
  Intial Render Effect(ComponentDidMount):
   ```javascript
    useEffect(() => {
      // ...
    },[]); //  Empty dependency array: runs only in intial render of the component !
   ```
  
  Renders on Every Update(componentDidUpdate):
   ```javascript
      useEffect(()=>{
        /// ...
        },[id]);
        // on every id update component runs.
   ```
  Cleanup When Component Unmounts(componentWillUnmount):
   ```javascript
      useEffect(()=>{
      const connection  = createConnection(url);
      connection.connect();
      return ()=> connection.disconnect();
      },[id]);
   
      // so whenever component gets unmounted we are closing the established connection(clean up)
   ```
  
## useReducer :
   Hook helps in using reducer to the component
   
   ```javascript
   const [state,dispatch] = useReducer(reducer,initialArg,init?);
   ```
   
   **state** - holds reactive data
  
   //Example reducer function
   ```javascript
     function reducer (state,action) {
       switch(action.type){
         case 'inc': {
            return state.count+=1;
           }
         default: {
            throw Error("unknown Action"); 
           }
         }
       }
   ``` 
   **dispatch** - function reponsible for interaction
   
  Triggering action by dispatch
   ```javascript
     dispatch({type:"inc"});
   ```
     
     
