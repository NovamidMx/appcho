import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState, useEffect } from 'react';
import { convertEventsToDateEvents } from '../helpers';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } from '../store';
import axios from 'axios';

const baseUrlLogin = 'http://localhost:3001/api/events';


export const useCalendarStore = () => {
    const [calendar, setCalendar] = useState({});

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
        // TODO: llegar al backend
        setCalendar({
            ...calendarEvent,
            user: '63bcfdb71d1b1aeb3f7b2d3f'
        })
        console.log(calendar);
        const config = {
            method: 'post',
            url: baseUrlLogin,
            headers: {
                'Content-Type': 'application/json'
            },
            data: calendar
        };

        // Todo bien
        if (calendarEvent._id) {
            // Actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            // Creando
            const { data } = await axios(config);
            console.log(data);
            dispatch(onAddNewEvent({ ...calendar, id: data.evento.id }));
        }
    }

    const startLoadingEvents = async () => {

        const config = {
            method: 'get',
            url: baseUrlLogin,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {

            const { data } = await axios(config);
            console.log(data);
            const events = convertEventsToDateEvents(data.eventos);
            dispatch(onLoadEvents(events));


        } catch (error) {
            console.log('Error cargando eventos');
            console.log(error)
        }
    }

    const startDeletingEvent = () => {
        // Todo: Llegar al backend


        dispatch(onDeleteEvent());
    }


    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLoadingEvents,
    }
}
