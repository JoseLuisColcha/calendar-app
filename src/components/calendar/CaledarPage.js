import moment from 'moment'
import 'moment/locale/es'
import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useDispatch, useSelector } from 'react-redux'
import { eventClearActiveEvent, eventSetActive } from '../../actions/events'
import { uiOpenModal } from '../../actions/ui'
import { messages } from '../../helpers/calendar-messages-es'
import { AddNewFab } from '../ui/AddNewFab'
import { DeleteEventFab } from '../ui/DeleteEventFab'
import { Navbar } from '../ui/Navbar'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'

moment.locale('es')
const localizer = momentLocalizer(moment)

export const CaledarPage = (event, start, end, isSelected) => {
	const dispatch = useDispatch()
	const { events, activeEvent } = useSelector(state => state.calendar)

	const [lastView, setLastView] = useState(
		localStorage.getItem('lastView') || 'month'
	)

	const onDoubleClick = () => {
		dispatch(uiOpenModal())
	}
	
	const onSelectEvent = e => {
		dispatch(eventSetActive(e))
	}

	const onSelectSlot = () => {
		dispatch(eventClearActiveEvent())
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
				onSelectSlot={onSelectSlot}
				onSelectEvent={onSelectEvent}
				onView={onViewChange}
				selectable={true}
				view={lastView}
				components={{ event: CalendarEvent }}
			/>
			<AddNewFab />
			{activeEvent && <DeleteEventFab />}
			<CalendarModal />
		</div>
	)
}
