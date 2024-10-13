
import './App.css';
import HookuseState from './AllHooks/useStateHook.jsx'
import HookuseEffect from './AllHooks/useEffectHook';
import HookuseMemo from './AllHooks/useMemoHook';
import HookuseCallback from './AllHooks/useCallbackHook';

function App() {
  return (
    <div className="App">
      {/* <HookuseState/> */}
      {/* <HookuseEffect/> */}
      {/* <HookuseMemo/> */}
      <HookuseCallback/>
    </div>
  );
}

export default App;
