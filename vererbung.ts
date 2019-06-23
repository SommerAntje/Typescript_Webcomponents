class Tier  {
  laufen(): void {
    console.log('omw');
  }
  bellen(): void {
    console.log('bark');
  }
}

class Hund extends Tier {
  beine: number = 4;
  bellen(): void {
    console.log('wuff')
  }
}

class Dalmatiner extends Hund {
  laufen(): void {
    console.log('running fast."')
  }
}

class Schaeferhund extends Hund {

}

const rex:Hund = new Dalmatiner();
const rexi: Hund = new Schaeferhund();
const hunde: Hund[] = [rex, rexi];

hunde.forEach(function (hunde) {
  console.log(hunde);
});

for (var i = 0; i < 2; i++) {
  hunde[i].laufen();
}

console.log(rex.beine);
rex.bellen();
rex.laufen();