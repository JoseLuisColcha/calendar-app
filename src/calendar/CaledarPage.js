import { Navbar } from '../ui/Navbar'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import 'moment/locale/es'
import { messages } from '../helpers/calendar-messages-es'
import { CalendarEvent } from './CalendarEvent'
import { useState } from 'react'
import { CalendarModal } from './CalendarModal'

moment.locale('es')
const localizer = momentLocalizer(moment)

const events = [
	{
		title: 'Cumpleaños del jefe',
		start: moment().toDate(),
		end: moment().add(2, 'hours').toDate(),
		bgcolor: '#fafafa',
		notes: 'Comprar el pastel',
		user: {
			_id: '123',
			name: 'José Luis',
		},
	},
]

export const CaledarPage = (event, start, end, isSelected) => {
	const [lastView, setLastView] = useState(
		localStorage.getItem('lastView') || 'month'
	)

	const onDoubleClick = e => {
		console.log(e)
	}

	const onSelectEvent = e => {
		console.log(e)
	}

	const onViewChange = e => {
		setLastView(e)
		localStorage.setItem('lastView', e)
	}

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
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelectEvent}
				onView={onViewChange}
				view={lastView}
				components={{ event: CalendarEvent }}
			/>

			<CalendarModal />
		</div>
	)
}
