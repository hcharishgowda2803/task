import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  userScore = 0;
  compScore = 0;
  compSelected1:any
  compSelected:any
  action:any
  status:any
  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];
  compWeapons2=[
    'rock',
    'paper',
    'scissors'
  ]

  userPick() {
    setTimeout( () => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      console.log(this.compSelected);
      this.checkResult();
    }, 1000);
    setTimeout( () => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected1 = this.compWeapons2[randomNum];
      console.log(this.compSelected1);
      this.checkResult();
    }, 1000);

  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.compSelected1 = '';
      this.compSelected = '';
    }, 2000);
  }

  win(comp1: any, comp: any) {
    this.userScore ++;
    this.compSelected1 = comp1;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '..Computer1 wins!!';
    this.clearField();
  }


  lose(comp1: any, comp: any) {
    this.compScore ++;
    this.compSelected1 = comp1;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '..Computer2 wins!';
    this.clearField();
  }

  draw(comp1: any, comp: any) {
    this.compSelected1 = comp1;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. Draw!!!';
    this.clearField();
  }

  checkResult() {
    const compChoice2 = this.compSelected1;
    const compChoice = this.compSelected;
    switch (compChoice2 + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.win(compChoice2, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.lose(compChoice2, compChoice);
        break;
      default:
        this.draw(compChoice2, compChoice);
        break;
    }
  }
}



 