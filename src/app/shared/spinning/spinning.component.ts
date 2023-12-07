import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinning',
  templateUrl: './spinning.component.html',
  styleUrls: ['./spinning.component.scss']
})
export class SpinningComponent implements OnInit {
  @Input() spinnerBollean!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
