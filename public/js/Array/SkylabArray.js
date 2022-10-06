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
}

export default SkylabArray;
