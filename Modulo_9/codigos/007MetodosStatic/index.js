'use strict';

// create a class Music with atributes #title, #duration and methods convertSecondsToMinutes with math.floor
class Music {
  #title;
  #duration;
  constructor(title, duration) {
    this.#title = title;
    this.#duration = duration;
  }
  static convertSecondsToMinutes(duration) {
    const min = Math.floor(duration / 60);
    let sec = duration % 60;
    if (sec < 10 && sec > 0) {
      sec = `0${duration % 60}`;
    } else if (sec < 10) {
      sec = `00`;
    }
    return `${min}:${sec}`;
  }

  getDuration() {
    return this.#duration;
  }

  getTitle() {
    return this.#title;
  }
}

const music1 = new Music('Music 1', 180);
// console.log(music1.convertSecondsToMinutes(music1.getDuration()));
console.log(music1.getTitle());
console.log(Music.convertSecondsToMinutes(music1.getDuration()));
