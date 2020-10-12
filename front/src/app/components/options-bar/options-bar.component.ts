import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faAddressCard, faCogs, faDice, faImage, faMap, faMusic, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.scss']
})
export class OptionsBarComponent implements OnInit {

  faAdressCard = faAddressCard;
  faMusic = faMusic;
  faImage = faImage;
  faDice = faDice;
  faMap = faMap;
  faCogs = faCogs;
  faUsers = faUsers;

  @Output() characterDetailClick:EventEmitter<any>=new EventEmitter()
  @Output() myCharactersClick:EventEmitter<any>=new EventEmitter()
  @Output() soundClick:EventEmitter<any>=new EventEmitter()
  @Output() backgroundClick:EventEmitter<any>=new EventEmitter()
  @Output() diceClick:EventEmitter<any>=new EventEmitter()
  @Output() mapClick:EventEmitter<any>=new EventEmitter()
  @Output() settingsClick:EventEmitter<any>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onCharacterDetailsButtonClick(){

    this.characterDetailClick.emit();

  }
  onMyCharactersButtonClick(){

    this.myCharactersClick.emit();

  }
  onSoundButtonClick(){

    this.soundClick.emit();

  }
  onBackgroundButtonClick(){

    this.backgroundClick.emit();

  }
  onDiceButtonClick(){

    this.diceClick.emit();

  }
  onMapButtonClick(){

    this.mapClick.emit();

  }
  onSettingsButtonClick(){

    this.settingsClick.emit();

  }

}
