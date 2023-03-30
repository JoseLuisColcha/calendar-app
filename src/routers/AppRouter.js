import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/LoginPage'
import { CaledarPage } from '../calendar/CaledarPage'

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
