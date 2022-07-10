/*

You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

The constructor taking no arguments should assign 0 to Cube's Side property.

*/

export class Cube {
  constructor(side?: number) {
    this._side = side ? (side < 0 ? (side *= -1) : side) : 0;
  }

  private _side: number;

  public getSide(): number {
    return this._side;
  }

  public setSide(value: number) {
    this._side = Math.abs(value);
  }
}
