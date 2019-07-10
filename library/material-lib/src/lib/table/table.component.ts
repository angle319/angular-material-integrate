import {
  Component, OnInit, Input, Output, EventEmitter, TemplateRef, AfterContentInit,
  QueryList, ContentChildren, Directive, ContentChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Directive({
  selector: '[mvbCol]'
})
// tslint:disable-next-line:directive-class-suffix
export class PrimeTemplate {
  @Input() cell: string;
  @Input() styleClass: string;
  constructor(public template: TemplateRef<any>) { }
  getCellPosition(): string {
    return this.cell;
  }
  getStyleClass(): string {
    return this.styleClass;
  }
}
@Component({
  selector: 'mvb-list',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentInit {
  alias_multi = '_select';
  alias__editor = '_editor';
  pre_select_index;
  mode_single = 1;
  mode_multi = 2;
  cell_index = 1;
  cellTemplate = {};
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25];
  tableEvent = {
    first: 0,
    rows: this.pageSizeOptions[0],
    sortField: undefined,
    sortOrder: undefined,
    filters: undefined,
    globalFilter: '',
  };
  icon_edit = true;
  icon_del = true;
  select_mode;
  filterInputControl = new FormControl();
  @Input() dataSource: any[] = [];
  @Input() columnHeaders: any[] = [];
  @Input() editParams = ['edit', 'del'];
  @Input() total = 0;
  @Input() isRipple = true;
  @Input() isMultiSelect = false;
  @Input() isFilter = false;
  @Input() isEdit = false;
  @Output() onRowSelect: EventEmitter<any> = new EventEmitter();
  @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();
  @Output() onCreate: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @ContentChildren(PrimeTemplate) templates: QueryList<PrimeTemplate>;
  constructor() {
    if (this.isMultiSelect) {
      this.cell_index = 0;
    }

    // this.dataSource = [{ position: '1234', filename: '45545', filesize: '1234' }]
  }

  ngOnInit() {
    this.select_mode = (this.isMultiSelect) ? this.mode_multi : this.mode_single;
    if (this.onLazyLoad.observers.length === 0) {
      // TODO auto add onlazy observers
    }
    this.filterInputControl.valueChanges.pipe(debounceTime(500))
      .subscribe(
        value => {
          this.filterGlobal(value);
        }
      );
    if (!this.editParams.includes('edit')) {
      this.icon_edit = false;
    }
    if (!this.editParams.includes('del')) {
      this.icon_del = false;
    }
  }
  onClickRow(row, index) {
    const key = this.alias_multi;
    if (!this.isMultiSelect) {
      if (this.pre_select_index !== undefined) {
        const pre_index = this.pre_select_index;
        this.dataSource[pre_index][key] = !this.dataSource[pre_index][key];
      }
      this.pre_select_index = index;
      row[key] = !row[key];
    }
    this.onRowSelect.emit([row]);

    console.log(`component-row-select:`, row);
  }
  ngAfterContentInit() {
    const key_mutli = this.alias_multi;
    const key_editor = this.alias__editor;
    if (this.isMultiSelect || this.isEdit) {
      this.dataSource = this.dataSource.map(x => {
        if (this.isMultiSelect) { x[key_mutli] = false; }
        if (this.isEdit) { x[key_editor] = true; }
        return x;
      });
      if (this.isMultiSelect) { this.columnHeaders.unshift(key_mutli); }
      if (this.isEdit) { this.columnHeaders.push(key_editor); }
    }
    if (this.columnHeaders) {
      this.columnHeaders.map((header, index) => {
        this.cellTemplate[index + this.cell_index] = {
          name: `cell_${index + this.cell_index}`,
          template: null,
          class: null
        };
      });
    }
    this.templates.forEach((item) => {
      const index = item.getCellPosition();
      this.cellTemplate[index].template = item.template;
      this.cellTemplate[index].class = item.getStyleClass();
    });
  }
  sortData(event) {
    this.tableEvent = Object.assign(this.tableEvent, { sortField: event.active, sortOrder: event.direction });
    this.onLazyLoad.emit(this.tableEvent);
  }
  changePage(event) {
    this.tableEvent = Object.assign(this.tableEvent, { first: event.pageIndex, rows: event.pageSize });
    this.onLazyLoad.emit(this.tableEvent);
  }
  createLazyLoadMetadata(): any {
    return {
      first: 0,
      rows: this.pageSizeOptions[0],
      sortField: undefined,
      sortOrder: undefined,
      filters: undefined,
      globalFilter: '',
    };
  }
  changeAllMultiSelect(event) {
    const key = this.alias_multi;
    this.dataSource = this.dataSource.map(x => {
      x[key] = event.checked;
      return x;
    });
    this.onRowSelect.emit(this.dataSource);
  }
  changeMultiSelect(event, row) {
    const key = this.alias_multi;
    row[key] = !row[key];
    this.onRowSelect.emit(this.dataSource.filter(x => x[key] === true));
  }
  filterGlobal(event, field_name = 'filterString') {
    let target_value = '';
    const search_object = {};
    if (typeof event === 'string') {
      target_value = event;
    } else {
      target_value = event.taget.value;
    }
    search_object[field_name] = target_value;
    this.tableEvent.filters = Object.assign(this.tableEvent.filters || {}, search_object);
    this.onLazyLoad.emit(this.tableEvent);
  }
  createDate(event) {
    this.onCreate.emit(event);
  }
  editData(event) {
    this.onEdit.emit(event);
  }
  deleteData(event) {
    this.onDelete.emit(event);
  }
}
