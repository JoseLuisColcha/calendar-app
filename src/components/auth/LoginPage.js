import Swal from 'sweetalert2'
import { startLogin, startRegister } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import './login.css'
import { useDispatch } from 'react-redux'

export const LoginPage = () => {
	const dispatch = useDispatch()

	const [formLoginValues, handleLoginInputChange] = useForm({
		lEmail: '',
		lPassword: '',
	})

	const { lEmail, lPassword } = formLoginValues

	const [formRegisterValues, handleRegisterInputChange] = useForm({
		rName: '',
		rEmail: '',
		rPassword1: '',
		rPassword2: '',
	})

	const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues

	const handleLogin = e => {
		e.preventDefault()

		dispatch(startLogin(lEmail, lPassword))
	}

	const handleRegister = e => {
		e.preventDefault()

		if (rPassword1 !== rPassword2) {
			return Swal.fire('Error', 'Las contraseñas deben de ser iguales', 'error')
		}

		dispatch(startRegister(rName, rEmail, rPassword1))
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
					<form onSubmit={handleRegister}>
						<div className='form-group mb-2'>
							<input
								type='text'
								className='form-control'
								placeholder='Nombre'
								name='rName'
								value={rName}
								onChange={handleRegisterInputChange}
							/>
						</div>
						<div className='form-group mb-2'>
							<input
								type='email'
								className='form-control'
								placeholder='Correo'
								name='rEmail'
								value={rEmail}
								onChange={handleRegisterInputChange}
							/>
						</div>
						<div className='form-group mb-2'>
							<input
								type='password'
								className='form-control'
								placeholder='Contraseña'
								autoComplete='on'
								name='rPassword1'
								value={rPassword1}
								onChange={handleRegisterInputChange}
							/>
						</div>

						<div className='form-group mb-2'>
							<input
								type='password'
								className='form-control'
								placeholder='Repita la contraseña'
								autoComplete='on'
								name='rPassword2'
								value={rPassword2}
								onChange={handleRegisterInputChange}
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
