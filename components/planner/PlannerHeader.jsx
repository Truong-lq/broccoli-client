import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useOutsideClick from '../../hooks/useOutsideClick';
import usePlanStore from '../../stores/planStore';

const PlannerHeader = ({ sizeClass }) => {
  const { setDate, date } = usePlanStore((state) => state);
  const [showCalendar, setShowCalendar] = useState(false);

  // Hide the calendar when clicking outside
  const ref = useRef(null);
  useOutsideClick(ref, () => setShowCalendar(false));

  // Handle the date change
  const handleChange = (date) => {
    setDate(date);
    setShowCalendar(false);
  };
  const setNextDate = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };
  const setPreviousDate = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  return (
    <div className={sizeClass}>
      <div className='flex gap-x-10 items-center h-full px-10'>
        {/* Calendar navigate group */}
        <div className='flex gap-x-5 items-center'>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className='text-gray-400 cursor-pointer'
            onClick={setPreviousDate}
          />

          <div className='relative'>
            <FontAwesomeIcon
              icon={faCalendar}
              onClick={() => setShowCalendar(true)}
              className='cursor-pointer'
            />
            <div
              className={showCalendar ? 'absolute left-0 -bottom-80' : 'hidden'}
              ref={ref}
            >
              <Calendar onChange={handleChange} value={date} />
            </div>
          </div>

          <FontAwesomeIcon
            icon={faArrowRight}
            className='text-gray-400 cursor-pointer'
            onClick={setNextDate}
          />
        </div>

        {/* Currently chosen date */}
        <span className='text-2xl font-medium'>
          {date.getDate() == new Date().getDate()
            ? 'Today'
            : date.toDateString()}
        </span>
      </div>
    </div>
  );
};

export default PlannerHeader;
