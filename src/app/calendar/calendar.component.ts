import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy
} from '@angular/core';

import { Subject } from 'rxjs/Subject';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss',
              '../../../node_modules/angular-calendar/scss/angular-calendar.scss'] //TODO: Fix this so its not loaded in the index page
})
export class CalendarComponent implements OnInit {

  showNewDateEntry  :boolean = false;
  view :string = 'month'

  viewDate :Date = new Date()

  events: CalendarEvent[] = [
    {
      title: 'Dragggggg',
      color: colors.yellow,
      start: new Date(),
      draggable: true
    },
    {
      title: 'Simple event',
      color: colors.blue,
      start: new Date(),
      draggable: true
    }
  ];

  refresh: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  toggleDateEntry() {
    this.showNewDateEntry = true;
  }
 
  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
  
}
