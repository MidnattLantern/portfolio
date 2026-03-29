import { Route, Routes } from 'react-router';
import './App.scss'
import { DisplayHomePage } from './pages/homePage';
import { DisplayIllustrationPage } from './pages/illustration/illustrationPage';
import { DisplayFrontendPage } from './pages/frontend/frontendPage';

function Footer() {
    function handleCopyDiscordUsername() {
        navigator.clipboard.writeText("midnatt_lantern");
    };

    return (
        <footer>
            <p>Alma Isaksson - 2026</p>
            <p>Email: <a href="mailto:MidnattLantern@proton.me" aria-label="developer's email address">MidnattLantern@proton.me</a></p>
            <p>Discord username: <span role="button" tabIndex={0} className="discord-username" onClick={handleCopyDiscordUsername}>midnatt_lantern</span></p>
            <p>GitHub: <a href="https://github.com/MidnattLantern" target="_blank">MidnattLantern</a></p>
        </footer>
    )
}

function App() {

    return (
        <>
            <main>
                <Routes>
                    <Route index element={<DisplayHomePage/>}/>
                    <Route path='/frontend/*' element={<DisplayFrontendPage/>}/>
                    <Route path='/illustration/*' element={<DisplayIllustrationPage/>}/>
                    <Route path='*' element={<h1>Page not found</h1>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App
