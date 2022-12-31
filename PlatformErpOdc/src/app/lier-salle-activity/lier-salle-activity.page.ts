import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lier-salle-activity',
  templateUrl: './lier-salle-activity.page.html',
  styleUrls: ['./lier-salle-activity.page.scss'],
})
export class LierSalleActivityPage implements OnInit {
 p:number = 1;
  constructor() { }
  salleactivites=[
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    },
    {
      titre:"Python",
      type:"Formation",
      status:"à venir"
    }

  ]

  ngOnInit() {
  }

}
