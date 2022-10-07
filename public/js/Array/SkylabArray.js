class SkylabArray {
  length;

  constructor(...arrayElements) {
    arrayElements.forEach((arrayElement, arrayIndex) => {
      this[arrayIndex] = arrayElement;
      this.length = arrayIndex + 1;
    });
  }

  push(newArrayElement) {
    this[this.length] = newArrayElement;
    this.length += 1;
    return this;
  }
}

export default SkylabArray;
