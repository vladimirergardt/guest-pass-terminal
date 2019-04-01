/**
 * Created by Ergardt.Vladimir on 29.03.2019
 */

export default class Alphabet {

  /**
   * Получение массива доступных символов
   */
  static getLetters(options) {
    const alphabet = [];
    options.map((item) => {
      const letter = item.name.substring(0,1);
      alphabet.indexOf(letter) === -1
        ? alphabet.push(letter)
        : false;
    });
    return alphabet;
  }

  /**
   * Создание алфавитного списка организаций
   */
  static createList(letters, params) {
    const alphabetList = [];
    letters.map((letter) => {
      alphabetList.push({
        id: 0,
        name: letter,
        rated: false,
        score: 0,
        letter: letter,
        type: `title`,
      });

      const list = params.filter((el) => {
        el.letter = el.name.substring(0,1);
        el.type = `letter`;
        return el.name.substring(0,1) === letter;
      });
      list.map((el => alphabetList.push(el)));
    });
    return alphabetList;
  }

  /**
   * Получение списка
   */
  static getAlphabetList(params) {
    const letters = this.getLetters(params);
    return this.createList(letters, params);
  }
}
