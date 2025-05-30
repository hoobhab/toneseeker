import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import Layout from './routes/Layout'
import MissingPage from './routes/MissingPage'
import New from './routes/New'
import Update from './routes/Update'
import DetailView from './routes/DetailView.jsx'
import About from './routes/About'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
      <Route index={false} path="/new" element={<New />} />
      <Route index={false} path="/update/:id" element={<Update/>} />
      <Route index={false} path="/details/:id" element={<DetailView/>} />
      <Route index={false} path="*" element={<MissingPage />} />
      <Route index={false} path="/about" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>
)
