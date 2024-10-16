
import './App.css';
import HookuseState from './AllHooks/useStateHook.jsx'
import HookuseEffect from './AllHooks/useEffectHook';
import HookuseMemo from './AllHooks/useMemoHook';
import HookuseCallback from './AllHooks/useCallbackHook';
import HookuseRef from './AllHooks/useRefHook';
import HookuseContext from './AllHooks/useContextHook';
import HookuseReducer from './AllHooks/useReducerHook';
import HookuseImperativeHandle from './AllHooks/useImperativeHandle';

function App() {
  return (
   
        <div className="App">
          {/* <HookuseState/> */}
          {/* <HookuseEffect/> */}
          {/* <HookuseMemo/> */}
          {/* <HookuseCallback/> */}
          {/* <HookuseRef/> */}
          {/* <HookuseContext/> */}
          {/* <HookuseReducer/> */}
          <HookuseImperativeHandle/>
        </div>
 
    );
}

export default App;
