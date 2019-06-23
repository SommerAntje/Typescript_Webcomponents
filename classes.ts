class Wohnung {
  zimmer: number;
  groesse: number;
  balkon: boolean;

  constructor(z: number, g: number, b: boolean) {
    this.zimmer = z;
    this.groesse = g;
    this.balkon = b;
  }
  preis(): number {
    if (this.balkon) {
      return 5 * this.groesse * this.zimmer;
    } else {
      return 2 * this.groesse * this.zimmer;
    }
  }
}

const meineWohnung: Wohnung = new Wohnung(2, 40, true);
const meineZweitWohnung: Wohnung = new Wohnung( 1.5, 60, false);

console.log(meineWohnung);
console.log(meineWohnung.preis());
console.log(meineZweitWohnung);
console.log(meineZweitWohnung.preis())
