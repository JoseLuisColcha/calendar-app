import { Navbar } from '../ui/Navbar'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import 'moment/locale/es'
import { messages } from '../helpers/calendar-messages-es'

moment.locale('es')
const localizer = momentLocalizer(moment)

const events = [
	{
		title: 'Cumpleaños del jefe',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		bgcolor: '#fafafa',
		notes: 'Comprar el pastel',
	},
]

export const CaledarPage = (event, start, end, isSelected) => {
	
	const evenStyleGetter = () => {

		const style = {
			backgroundColor: '#367CF7',
			borderRadius: '0px',
			opacity: 0.8,
			display: 'block',
			color: 'white',
		}

		return {
			style,
		}
	}

	return (
		<div className='calendar-page'>
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccessor='start'
				endAccessor='end'
				messages={messages}
				eventPropGetter={evenStyleGetter}
			/>
		</div>
	)
}
