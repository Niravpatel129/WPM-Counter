import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  demoTextArray =
    `Hello this is a sample text the weather is great today`.split(' ');

  interval: any;

  typedText = '';

  timerInSeconds = 0;

  getWPM = () => {
    if (this.typedText.split(' ').length === this.demoTextArray.length) {
      clearInterval(this.interval);
    }

    const correctWords = this.typedText
      .split(' ')
      .filter((word, index) => word === this.demoTextArray[index]).length;

    const minutes = this.timerInSeconds / 60;
    const wpm = correctWords / minutes;
    return wpm || 0;
  };

  ngOnInit() {
    this.interval = setInterval(() => {
      this.timerInSeconds++;
    }, 1000);
  }

  doesTextMatch(str1: string, indexOfTypedText: number) {
    if (
      !this.typedText.split(' ')[indexOfTypedText] ||
      str1.length !== this.typedText.split(' ')[indexOfTypedText].length
    )
      return 'NoMatchYet';

    return str1 === this.typedText.split(' ')[indexOfTypedText]
      ? 'Match'
      : 'NoMatch';
  }
}
