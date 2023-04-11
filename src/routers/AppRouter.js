import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CaledarPage } from '../components/calendar/CaledarPage'
import { LoginPage } from '../components/auth/LoginPage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { startChecking } from '../actions/auth'
import { PublicRoute } from './PublicRouter'
import { PrivateRoute } from './PrivateRouter'

export const AppRouter = () => {
	const dispatch = useDispatch()

	const { checking } = useSelector(state => state.auth)

	useEffect(() => {
		dispatch(startChecking())
	}, [dispatch])

	if (checking) {
		return <h5>Espere...</h5>
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>

				<Route
					path='/'
					element={
						<PrivateRoute>
							<CaledarPage />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
