import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleTableComponent implements OnInit {
  @Input() data: any[] = new Array<any>();
  @Output() rowClick = new EventEmitter<any>();

  displayedColumns = ['name', 'created', 'edited'];

  ngOnInit(): void {}

  onRowClick(row: any): void {
    console.log(row);
    this.rowClick.emit(row);
  }
}
