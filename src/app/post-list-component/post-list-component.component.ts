import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
    this.loveIts = 0;
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  onLove() {
    console.log ('On love:' + this.loveIts );
    this.loveIts += 1;
    console.log ('On love:' + this.loveIts );
  }

  onDontLove() {
    console.log ('On love pas:' + this.loveIts );
    this.loveIts -= 1;
    console.log ('On love pas:' + this.loveIts );
  }


}
