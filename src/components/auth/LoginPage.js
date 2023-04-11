import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import { startLogin } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import './login.css'
import { useDispatch } from 'react-redux'

export const LoginPage = () => {
	const dispatch = useDispatch()

	const [formLoginValues, handleLoginInputChange] = useForm({
		lEmail: 'maria.conejo@epn.edu.ec',
		lPassword: '123drfrr',
	})

	const { lEmail, lPassword } = formLoginValues

	const handleLogin = e => {
		e.preventDefault()

		dispatch(startLogin(lEmail, lPassword))
	}

	return (
		<div className='container login-container'>
			<div className='row'>
				<div className='col-md-6 login-form-1'>
					<h3>Ingreso</h3>
					<form onSubmit={handleLogin}>
						<div className='form-group mb-2'>
							<input
								type='text'
								className='form-control'
								placeholder='Correo'
								name='lEmail'
								value={lEmail}
								onChange={handleLoginInputChange}
							/>
						</div>
						<div className='form-group mb-2'>
							<input
								type='password'
								className='form-control'
								placeholder='Contraseña'
								autoComplete='on'
								name='lPassword'
								value={lPassword}
								onChange={handleLoginInputChange}
							/>
						</div>
						<div className='form-group mb-2'>
							<input type='submit' className='btnSubmit' value='Login' />
						</div>
					</form>
				</div>

				<div className='col-md-6 login-form-2'>
					<h3>Registro</h3>
					<form>
						<div className='form-group mb-2'>
							<input
								type='text'
								className='form-control'
								placeholder='Nombre'
							/>
						</div>
						<div className='form-group mb-2'>
							<input
								type='email'
								className='form-control'
								placeholder='Correo'
							/>
						</div>
						<div className='form-group mb-2'>
							<input
								type='password'
								className='form-control'
								placeholder='Contraseña'
								autoComplete='on'
							/>
						</div>

						<div className='form-group mb-2'>
							<input
								type='password'
								className='form-control'
								placeholder='Repita la contraseña'
								autoComplete='on'
							/>
						</div>

						<div className='form-group mb-2'>
							<input type='submit' className='btnSubmit' value='Crear cuenta' />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
