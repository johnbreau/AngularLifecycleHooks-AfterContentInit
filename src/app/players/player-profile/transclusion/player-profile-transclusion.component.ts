import { Component, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'player-profile',
  templateUrl: './player-profile-transclusion.component.html',
  styleUrls: ['./player-profile-transclusion.component.css']
})
export class PlayerProfileTransclusionComponent implements AfterContentInit, AfterContentChecked{

  ngAfterContentInit() {
    console.log('PlayerProfileTransclusionComponent ngAfterContentInit called')
  }

  ngAfterContentChecked(){
    console.log('PlayerProfileTransclusionComponent AfterContentChecked called')
  }

}
