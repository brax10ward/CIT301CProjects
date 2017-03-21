import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {
  @Input() document;
  @Input() documentIdx: number;

  constructor() { }

  ngOnInit() {
  }

}
