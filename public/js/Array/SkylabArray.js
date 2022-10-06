class SkylabArray {
  length;

  constructor(...arrayElements) {
    let counter = 0;

    for (const arrayElement of arrayElements) {
      this[counter] = arrayElement;
      counter++;
    }

    this.length = counter;
  }

  push(newArrayElement) {
    this[this.length] = newArrayElement;
    return ++this.length;
  }
}

export default SkylabArray;
