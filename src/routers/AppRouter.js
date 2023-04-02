import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CaledarPage } from '../components/calendar/CaledarPage'
import { LoginPage } from '../components/auth/LoginPage'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />} />

				<Route path='/' element={<CaledarPage />} />
			</Routes>
		</BrowserRouter>
	)
}
