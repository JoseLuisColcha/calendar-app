import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CaledarPage } from '../components/calendar/CaledarPage'
import { LoginPage } from '../components/auth/LoginPage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { startChecking } from '../actions/auth'

export const AppRouter = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(startChecking())
	}, [dispatch])

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />} />

				<Route path='/' element={<CaledarPage />} />
			</Routes>
		</BrowserRouter>
	)
}
