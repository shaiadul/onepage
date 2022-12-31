import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Schedule.css';
import clock from '../../images/clock-00.svg';
import TimezoneSelect from 'react-timezone-select';

const Schedule = () => {

    const [selectedTimezone, setSelectedTimezone] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )

    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {(selected, 'PP')}.</p>;
    }
    return (
        <div className='border-b pb-20'>
            <h1 className='head-schedule'>Schedule Call</h1>



            <div className='schedule-box grid grid-cols-2 border mx-2 '>


                {/* article */}
                <div className='schedule-article border'>

                    <div className='border-b'>
                        <img className='text-center schedule-logo ' src='https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/logo.svg' alt='logo' />
                    </div>

                    <div className='schedule-article-content'>
                        <p className='schedule-p'>Hyperlink Infosystem</p>
                        <h1 className='schedule-h1'>Introduction Call With Hyperlink Infosystem</h1>
                        <span className='schedule-span '><img className='svg-clock mr-4' src={clock} alt="clock" />30 min </span>
                        <p>Agenda:</p>
                        <ol type="1" className='schedule-ol'>
                            <li>1. Introduction of Hyperlink infosystem</li>
                            <li>2. Requirement understanding</li>
                            <li>3. Similar work showcase</li>
                            <li>4. Next actions</li>
                        </ol>

                        <p href='#' className=' schedule-link' >Cookie settings</p>
                    </div>


                </div>
                {/* daypicer */}
                <div>
                    <div className='schedule-day w-full text-center flex flex-col align-middle mx-8'>
                        <DayPicker
                            className='w-full mx-8'
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                    <p className='schedule-day-p '>Time zone</p>
                    <TimezoneSelect
                        className='schedule-time-select'
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                    />
                </div>



            </div>



        </div>
    );
};

export default Schedule;