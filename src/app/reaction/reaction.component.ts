import { Component, OnInit } from '@angular/core';
import { ReactionService } from '../reaction.service';
import {ImagesService} from '../images.service';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})

export class ReactionComponent implements OnInit {

  Wah=""
  LGU=""
  Happy = ""
  Sad = ""
  val_reaction = "";

  setReaction(i){
    this.ReactionService.val_reaction = i;
  }

  getImages() {
    this.Happy=this.ImagesService.Happy;
    this.Sad=this.ImagesService.Sad;
    this.Wah = this.ImagesService.Wah;
    this.LGU = this.ImagesService.LGU;
  }
  
  constructor(private ReactionService: ReactionService,private ImagesService: ImagesService){  }

  ngOnInit() {
    this.getImages();
  }

} 
