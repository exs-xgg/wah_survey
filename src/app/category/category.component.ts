import { Component, OnInit } from '@angular/core';
import { ReactionService } from '../reaction.service';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  Wah= "";
  LGU = "";
  Time = ""
  Staff = ""
  Facility= ""
  val_reaction=""
  title="" 
 
  getReaction(){
    var val;
    val=parseInt(this.ReactionService.val_reaction);
    if (val==0){
      this.title="Ano ang hindi ninyo nagustuhan"
    }else{
      this.title="Ano ang nagustuhan ninyo"
    }
  }

  getImages(){
    this.Wah = this.ImagesService.Wah;
    this.LGU = this.ImagesService.LGU;
    this.Staff=this.ImagesService.Staff;
    this.Time=this.ImagesService.Time;
    this.Facility=this.ImagesService.Facility;
  }

  constructor(private ReactionService: ReactionService, private ImagesService: ImagesService) {   }
 
  ngOnInit() {
    this.getReaction()
    this.getImages()
  }

}
