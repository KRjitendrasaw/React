import { StrictMode } from 'react'
import { createRoot, RectDom } from 'react-dom/client'
import './index.css'
import UseEffectHooks from './Components/UseEffectHooks.jsx'
import UseStateHooks from './Components/UseStateHooks.jsx'
import UseRefsHooks from './Components/UseRefsHooks.jsx'
import UseMemoHooks from './Components/UseMemohooks.jsx'
import UseCallBackHooks from './Components/UseCallbackHooks.jsx'
import  AppContext  from './Components/Context/AppContexts.jsx'
import CreateContexts from './Components/Context/AppContexts.jsx'
import Header from './Components/Context/Header.jsx'
import Footer from './Components/Context/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App/> */}
    {/* <UseStateHooks/> */}
    {/* <UseEffectHooks /> */}
    {/* <UseRefsHooks/> */}
    {/* <UseMemoHooks/> */}
    {/* <UseCallBackHooks/> */}
     <CreateContexts>
      <Header/>
      <Footer/>
    </CreateContexts>
 </>
)
