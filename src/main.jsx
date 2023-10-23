
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthContextProvider from './contexts/AuthContext.jsx'
import ReserveRoomContextProvider from './contexts/ReserveRoomContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ReserveRoomContextProvider>
      <App />
    </ReserveRoomContextProvider>
  </AuthContextProvider>
  //  </React.StrictMode>, 
)
