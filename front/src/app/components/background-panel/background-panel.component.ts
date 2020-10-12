import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'background-panel',
  templateUrl: './background-panel.component.html',
  styleUrls: ['./background-panel.component.scss']
})
export class BackgroundPanelComponent implements OnInit {


  picturesList:string[]=[

    "https://www.worldanvil.com/media/cache/cover/uploads/images/2912e925202551b2f4a09253fd74aea5.jpg",
    "https://www.tomosygrapas.com/wp-content/uploads/2018/10/neverwinter_seascape.jpg",
    "https://i.pinimg.com/736x/78/49/a3/7849a3614feb701224b4a4d4888d9f39.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0052d15d-4c44-4d0f-aade-45074bff0633/dcasduj-6dec765f-3c38-4b58-9a56-5ba5922f7e38.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDA1MmQxNWQtNGM0NC00ZDBmLWFhZGUtNDUwNzRiZmYwNjMzXC9kY2FzZHVqLTZkZWM3NjVmLTNjMzgtNGI1OC05YTU2LTViYTU5MjJmN2UzOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.v2o4E_VJCsCH7XFpgHtgjkEl7NQizoMOhyeoctCgteM",
    "https://i.pinimg.com/originals/83/a9/09/83a9099d1240539a0ae208268dc12b2a.jpg",
    "https://i0.wp.com/nerdarchy.com/wp-content/uploads/2018/03/JeffBrown_GMINFLUENCE.jpg?fit=1200%2C776&ssl=1",
  ]

  selectedBackground:string;

  @Output() changeBackground:EventEmitter<string>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onBackgroundClick(backgroundUrl:string){

    this.selectedBackground = backgroundUrl

  }
  onChangeBackgroundClick(){

    if(this.selectedBackground){

      this.changeBackground.emit(this.selectedBackground)

    }

  }

}
