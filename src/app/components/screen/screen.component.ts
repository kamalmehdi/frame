import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-screen",
  templateUrl: "./screen.component.html",
  styleUrls: ["./screen.component.scss"]
})
export class ScreenComponent implements OnInit {
  public full: boolean = false;
  public data: Array<Array<number>> = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 340; i++) {
      let array = [];
      for (let j = 0; j < 40; j++) array.push(j * i);
      this.data.push(array);
    }
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Vérifie si la touche enfoncée est la touche "F"
    if (event.key === 'F' || event.key === 'f') {
      // Exécutez votre action ici
      this.click();
    }
  }

  click = () => {
    this.full = !this.full;
  };
}
