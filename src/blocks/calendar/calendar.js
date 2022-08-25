(function(){
  const calendarElem = document.getElementById('calendar');
  //console.log(calendar);
  if (!calendarElem) return;

  const calendar = new HelloWeek({
    selector: calendarElem,
    lang: 'uk',
    langFolder: 'js/langs/',
    format: 'DD-MM-YYYY',
    weekShort: true,
    monthShort: false,
    multiplePick: false,
    defaultDate: null,
    todayHighlight: true,
    disablePastDays: false,
    disabledDaysOfWeek: null,
    disableDates: null,
    weekStart: 1, // week start on Sunday
    daysHighlight: null,
    daysSelected: null,
    range: false,
    rtl: false,
    locked: false,
    minDate: null,
    maxDate: null,
    //nav: ['◀', '▶'],
    onLoad: () => { /** callback function */ },
    onChange: () => { /** callback function */ },
    onSelect: () => { /** callback function */
      console.log( calendar.getDays() );
    },
    onClear: () => { /** callback function */ }
  });


}());
