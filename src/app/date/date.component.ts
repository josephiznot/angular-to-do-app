import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.scss"]
})
export class DateComponent implements OnInit {
  date: String = "Datestring. lol";
  constructor() {}

  ngOnInit() {
    this.date = new Date().toString().slice(0, 10);
  }
}
