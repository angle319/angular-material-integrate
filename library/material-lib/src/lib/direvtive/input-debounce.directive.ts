import { fromEvent } from 'rxjs';
import {
  EventEmitter,
  ElementRef,
  Directive,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { map, debounceTime } from 'rxjs/operators';
@Directive({
  selector: '[inputDebounce]'
})
export class DebounceDirective implements OnInit {
  @Input() delay: number = 500;
  @Output() debounceFunc: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef, private model: NgModel) {
  }

  ngOnInit(): void {
    const eventStream = fromEvent(this.elementRef.nativeElement, 'keyup').pipe(
      map(() => {
        return this.model.value;
      }),
      debounceTime(this.delay)
    )
    eventStream.subscribe((input) => this.debounceFunc.emit(input));
  }

}