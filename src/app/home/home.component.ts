import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ImagesService} from '../images.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Wah = "";
  LGU = "";
  displayText = "";

  getImages(){
    this.Wah = this.ImagesService.Wah;
    this.LGU = this.ImagesService.LGU;
  }

  getNum(i){
    if (this.displayText.length<=5){
      this.displayText += i;
  }}
  
  clear(){
    this.displayText = this.displayText.substring(0,this.displayText.length-1);
  }

  constructor(private ImagesService: ImagesService){  }

  ngOnInit() {
    this.getImages();
  }

}
