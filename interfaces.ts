interface Tier  {
  beine: number;
  //laufen: () => void;
  //bellen: () => void;
}

interface Cute {
  //laufen: () => void;
}

class Hund implements Tier, Cute {
  beine:number = 4;
  static anzahlAllerHunde:number = 10;
  private head:number = 1;
  public setHead(head:number):void {
    //this.head = head;
    if (head < 0) {
      console.log('error');
    } else {
      this.head = head;
    }
  }
  public getHead(): number {
    return this.head;
  }
  protected laufen(): void {
    console.log("omw");
  }
  bellen(): void {
    this.laufen();
    console.log("wuff");
  }
}

class Dalmatiner extends Hund {
  bellen(): void {
    console.log("running fast!");
  }
}

class Schaeferhund extends Hund {

}

let rex: Hund = new Dalmatiner();
let rexi: Hund = new Schaeferhund();
//let hunde: Tier[] = [rex, rexi];
//Hund.anzahlAllerHunde = 5;
console.log(Hund.anzahlAllerHunde);
/*for (var i = 0; i < 2; i++) {
  hunde[i].laufen();
}*/

rex.setHead(-1);
console.log(rex.getHead());

