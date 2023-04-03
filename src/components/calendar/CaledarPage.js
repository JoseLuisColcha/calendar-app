import { Navbar } from '../ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import 'moment/locale/es'
import { CalendarEvent } from './CalendarEvent'
import { useState } from 'react'
import { CalendarModal } from './CalendarModal'
import { messages } from '../../helpers/calendar-messages-es'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import { eventSetActive, eventUpdated } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'

moment.locale('es')
const localizer = momentLocalizer(moment)

export const CaledarPage = (event, start, end, isSelected) => {
	const dispatch = useDispatch()
	const { events } = useSelector(state => state.calendar)

	const [lastView, setLastView] = useState(
		localStorage.getItem('lastView') || 'month'
	)

	const onDoubleClick = e => {
		dispatch(uiOpenModal())
		
	}

	const onSelectEvent = e => {
		dispatch(eventSetActive(e))
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
			<AddNewFab />
			<CalendarModal />
		</div>
	)
}
