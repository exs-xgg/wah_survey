import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { delay } from 'q';
import {ImagesService} from '../images.service'
 
@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})

export class ThanksComponent implements OnInit{

  Wah = "";
  LGU  = "";
  Logo  = "";
  TSU = "";
  intervalId = 0;
  seconds = 10;
  
  constructor(private router: Router,private ImagesService: ImagesService) { }

  clearTimer() { clearInterval(this.intervalId); }

  getImages(){
    this.Wah = this.ImagesService.Wah;
    this.LGU = this.ImagesService.LGU;
    this.Logo = this.ImagesService.Logo;
    this.TSU = this.ImagesService.TSU;
  }

  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.router.navigate(['home']);
      }
    }, 375);
  }
  
  ngOnInit() {
    this.start();
    this.getImages();
  }
}
