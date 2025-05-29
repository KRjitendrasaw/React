import { StrictMode } from 'react'
import { createRoot, RectDom } from 'react-dom/client'
import './index.css'
import UseEffectHooks from './Components/Hooks/UseEffectHooks.jsx'
import UseStateHooks from './Components/Hooks/UseStateHooks.jsx'
import UseRefsHooks from './Components/Hooks/UseRefsHooks.jsx'
import UseMemoHooks from './Components/Hooks/UseMemohooks.jsx'
import UseCallBackHooks from './Components/Hooks/UseCallbackHooks.jsx'
import  AppContext  from './Components/Context/AppContexts.jsx'
import CreateContexts from './Components/Context/AppContexts.jsx'
import Header from './Components/Context/Header.jsx'
import Footer from './Components/Context/Footer.jsx'
import UseReducer from './Components/Hooks/UseReducerHooks.jsx'
import UseLayoutEffects from './Components/Hooks/UseLayoutEffect.jsx'
import UseCustomhooks from './Components/Hooks/UseCustomhooks.jsx'



createRoot(document.getElementById('root')).render(
  <>
    {/* <App/> */}
    {/* <UseStateHooks/> */}
    {/* <UseEffectHooks /> */}
    {/* <UseRefsHooks/> */}
    {/* <UseMemoHooks/> */}
    {/* <UseCallBackHooks/> */}
     {/* <CreateContexts>
      <Header/>
      <Footer/>
    </CreateContexts> */}
    {/* <UseReducer/> */}
    {/* <UseLayoutEffects/> */}
    <UseCustomhooks/>
 </>
)
