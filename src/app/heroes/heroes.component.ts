import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";

//metadata
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
//always EXPORT class so the component can be IMPORTED later
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Soldier 76"
  };
  constructor() {}

  //called on create. Good for initialization logic
  ngOnInit() {}
}
