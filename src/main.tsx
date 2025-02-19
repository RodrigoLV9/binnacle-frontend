import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UserContext } from './Context/UserContext.tsx'
import { AuthContext } from './Context/AuthContext.tsx'
import { ModeContext } from './Context/ModeContext.tsx'
createRoot(document.getElementById('root')!).render(
    <UserContext>
        <AuthContext> 
            <ModeContext>
                <App />
            </ModeContext>
        </AuthContext>
    </UserContext>
)
