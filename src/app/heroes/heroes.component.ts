import { Component, OnInit } from "@angular/core";

//metadata
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
//always EXPORT class so the component can be IMPORTED later
export class HeroesComponent implements OnInit {
  hero = "Soldier 76";
  constructor() {}

  //called on create. Good for initialization logic
  ngOnInit() {}
}
