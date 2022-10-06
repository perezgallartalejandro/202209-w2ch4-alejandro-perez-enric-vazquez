class SkylabArray {
  length;

  constructor(...arrayElements) {
    let counter = 0;

    for (const arrayElement of arrayElements) {
      this[counter] = arrayElement;
      counter += 1;
    }

    this.length = counter;
  }

  push(newArrayElement) {
    this[this.length] = newArrayElement;
    this.length += 1;
  }
}

export default SkylabArray;
