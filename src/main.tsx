import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserContext } from './Context/UserContext.tsx'
import { AuthContext } from './Context/AuthContext.tsx'
createRoot(document.getElementById('root')!).render(
    <AuthContext> 
        <UserContext>
            <App />
        </UserContext>
    </AuthContext>
)
