let genBtn, genList, under13, zeros, theRest, genListDiv, tempZeros, tempUnder13, tempRest, tempStats, patternPick, totalGenList, missA10;
let mainCount = {
  '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0, '10':0,
  '11':0, '12':0, '13':0, '14':0, '15':0, '16':0, '17':0, '18':0, '19':0, '20':0,
  '21':0, '22':0, '23':0, '24':0, '25':0, '26':0, '27':0, '28':0, '29':0, '30':0,
  '31':0, '32':0, '33':0, '34':0, '35':0, '36':0, '37':0, '38':0, '39':0, '40':0,
  '41':0, '42':0, '43':0, '44':0, '45':0, '46':0, '47':0, '48':0, '49':0, '50':0
}
let mainFreq = JSON.parse(JSON.stringify(mainCount)); //this makes a deep copy
let tempCount = JSON.parse(JSON.stringify(mainCount));

window.onload = function() {

  totalGenList = [];
  genBtn = document.getElementById('genButton');
  genListDiv = document.getElementById('genList');
  patternPick = document.getElementById('patternDrop');
  missA10 = document.getElementById('missA10Drop');
  //checkBtn = document.getElementById('checkButton');

  maxHistory.reverse();
  //console.log(maxHistory);

  //calculate number overdue status
  for (var i = 0; i < maxHistory.length; i++) {
    //main numbers
    var seq = maxHistory[i].main.split(" ");
    for (var el in mainCount) {
      mainCount[el]++;
    }
    for (var j=0; j < seq.length; j++) {
      mainCount[seq[j]] = 0;
      mainFreq[seq[j]]++;
    }
  }

  tempStats = [];

  for (var k = (maxHistory.length - 240); k < maxHistory.length; k++) {
    var seq = maxHistory[k].main.split(" ");

    if (k > (maxHistory.length - 201)) {
      tempZeros = [];
      tempUnder13 = [];
      tempRest = [];

      for (var el in tempCount) {
        if (tempCount[el] === 0) tempZeros.push(el);
        else if (tempCount[el] < 13) tempUnder13.push(el);
        else tempRest.push(el);
      }
      var grA = 0;
      var grB = 0;
      var grC = 0;
      for (var j = 0; j < seq.length; j++) {
        if (tempZeros.includes(seq[j])) grA++;
        else if (tempUnder13.includes(seq[j])) grB++;
        else grC++;
      }
      let newStat = {date: maxHistory[k].date, zeros: grA, under13: grB, aboveIn13: grC};
      tempStats.push(newStat);
    }

    for (var el in tempCount) {
        tempCount[el]++;
    }
    for (var j=0; j < seq.length; j++) {
      tempCount[seq[j]] = 0;
    }
  }

  //print number overdue status
  console.log("main number overdue status: ");
  console.log(mainCount);
  console.log("main numbers frequencies: ");
  console.log(mainFreq);

  zeros = [];
  under13 = [];
  theRest = [];

  for (var el in mainCount) {
    if (mainCount[el] === 0) zeros.push(el);
    else if (mainCount[el] < 13) under13.push(el);
    else theRest.push(el);
  }

  var seq151 = 0;
  var seq061 = 0;
  var seq160 = 0;
  var seq070 = 0;
  var seq241 = 0;
  var seq250 = 0;
  var seq142 = 0;
  var seq052 = 0;

  for (var el in tempStats) {
    if ((tempStats[el].zeros === 1) && (tempStats[el].under13 === 5) && (tempStats[el].aboveIn13 === 1)) seq151++;
    else if ((tempStats[el].zeros === 0) && (tempStats[el].under13 === 6) && (tempStats[el].aboveIn13 === 1)) seq061++;
    else if ((tempStats[el].zeros === 1) && (tempStats[el].under13 === 6) && (tempStats[el].aboveIn13 === 0)) seq160++;
    else if ((tempStats[el].zeros === 0) && (tempStats[el].under13 === 7) && (tempStats[el].aboveIn13 === 0)) seq070++;
    else if ((tempStats[el].zeros === 2) && (tempStats[el].under13 === 4) && (tempStats[el].aboveIn13 === 1)) seq241++;
    else if ((tempStats[el].zeros === 2) && (tempStats[el].under13 === 5) && (tempStats[el].aboveIn13 === 0)) seq250++;
    else if ((tempStats[el].zeros === 1) && (tempStats[el].under13 === 4) && (tempStats[el].aboveIn13 === 2)) seq142++;
    else if ((tempStats[el].zeros === 0) && (tempStats[el].under13 === 5) && (tempStats[el].aboveIn13 === 2)) seq052++;
  }

  console.log("numbers with overdue of 0: ");
  console.log(zeros);
  console.log(("numbers with overdue of under 13: "));
  console.log(under13);
  console.log("numbers with overdue of 13 and above: ");
  console.log(theRest);
  console.log("main number overdue patterns by date: ");
  console.log(tempStats.reverse());
  console.log("main number frequency for overdue pattern 1 5 1: " + seq151);
  console.log("main number frequency for overdue pattern 0 6 1: " + seq061);
  console.log("main number frequency for overdue pattern 1 6 0: " + seq160);
  console.log("main number frequency for overdue pattern 0 7 0: " + seq070);
  console.log("main number frequency for overdue pattern 2 4 1: " + seq241);
  console.log("main number frequency for overdue pattern 2 5 0: " + seq250);
  console.log("main number frequency for overdue pattern 1 4 2: " + seq142);
  console.log("main number frequency for overdue pattern 0 5 2: " + seq052);

  genBtn.onclick = function() {
    genList = [];
    let patternSeq = patternPick.value.split("-");
    while (genList.length < 15) {
      //console.log("genList length: " + genList.length);
      var newSeq = [];
      //add number with overdue status of 0
      for (i = 0; i < (+patternSeq[0]); i++) {
        var newNum = +zeros[Math.floor(Math.random() * zeros.length)];
        if (!newSeq.includes(newNum)) newSeq.push(newNum);
        else i--;
      }
      //add number with overdue status of under 13
      for (i = 0; i < (+patternSeq[1]); i++) {
        var newNum = +under13[Math.floor(Math.random() * under13.length)];
        if (!newSeq.includes(newNum)) newSeq.push(newNum);
        else i--;
      }
      //add number with overdue status of 13 and above
      for (i = 0; i < (+patternSeq[2]); i++) {
        var newNum = +theRest[Math.floor(Math.random() * theRest.length)];
        if (!newSeq.includes(newNum)) newSeq.push(newNum);
        else i--;
      }

      //check odd-even ratio in newSeq
      var even = 0;
      var goodRatio = false;
      for (var numVal in newSeq) {
        //console.log(newSeq[numVal]);
        if (newSeq[numVal]%2 === 0) even++;
      }
      //console.log(even);
      if ((even > 2) && (even < 5)) goodRatio = true;

      //check consecutive numbers in newSeq
      var noCons = true;
      if ((newSeq[3] - newSeq[2] === 1) && (newSeq[2] - newSeq[1] === 1) && (newSeq[1] - newSeq[0] === 1)) noCons = false;
      else if ((newSeq[4] - newSeq[3] === 1) && (newSeq[3] - newSeq[2] === 1) && (newSeq[2] - newSeq[1] === 1)) noCons = false;
      else if ((newSeq[5] - newSeq[4] === 1) && (newSeq[4] - newSeq[3] === 1) && (newSeq[3] - newSeq[2] === 1)) noCons = false;
      else if ((newSeq[6] - newSeq[5] === 1) && (newSeq[5] - newSeq[4] === 1) && (newSeq[4] - newSeq[3] === 1)) noCons = false;

      newSeq.sort(function(a, b){return a-b});

      //check if more than 3-4 numbers in newSeq have shown up before
      var goodRep = true;
      //var rep3Count = 0;
      var rep4Count = 0;
      for (var i = 0; i < maxHistory.length; i++) {
        var oldSeq = maxHistory[i].main.split(" ");
        var repCount = 0;
        for (var j=0; j < oldSeq.length; j++) {
          var seqNum = +oldSeq[j];
          if (newSeq.includes(seqNum)) repCount++;
        }
        if (repCount > 4) {
          goodRep = false;
          break;
        }
        //else if (repCount === 3) rep3Count++;
        else if (repCount === 4) {
          rep4Count++;
          if (rep4Count > 2) {
            goodRep = false;
            break;
          }
        }
      }

      //check if numbers are in all 10s (eg. under 10, 10s, 20s, 30s, etc.)
      var condition10s = false;
      var missing10s = true;
      var inTheZeros = false;
      var inThe10s = false;
      var inThe20s = false;
      var inThe30s = false;
      var inThe40s = false; //includes 50
      for (var numVal in newSeq) {
        if (newSeq[numVal] < 10) inTheZeros = true;
        else if ((newSeq[numVal] > 9) && (newSeq[numVal] < 20)) inThe10s = true;
        else if ((newSeq[numVal] > 19) && (newSeq[numVal] < 30)) inThe20s = true;
        else if ((newSeq[numVal] > 29) && (newSeq[numVal] < 40)) inThe30s = true;
        else if ((newSeq[numVal] > 39) && (newSeq[numVal] < 51)) inThe40s = true;
      }

      if (inTheZeros && inThe10s && inThe20s && inThe30s && inThe40s) missing10s = false;

      //check condition10s according to user selection
      if ((missA10.value == "Yes") && missing10s) condition10s = true;
      else if ((missA10.value == "No") && !missing10s) condition10s = true;

      //add newSeq to genList
      if (goodRatio && noCons && goodRep && condition10s && !genList.includes(newSeq) && !totalGenList.includes(newSeq)) { // && (rep3Count < 25)) { // && !newSeq.includes(50)) {
        genList.push(newSeq);
        totalGenList.push(newSeq);
        //console.log("matches of 3 for " + newSeq + " : " + rep3Count);
        console.log("matches of 4 for " + newSeq + " : " + rep4Count);
      }
    }
    console.log("number sequences generated: ");
    console.log(genList);

    //display generated list
    genListDiv.innerHTML = "";
    for (var el in genList) {
      var seq = genList[el];

      for (var num in seq) {
        genListDiv.innerHTML += (" " + seq[num]);
      }
      genListDiv.innerHTML += '<br>';
    }
  }


  //this code is to find sequences with up to 6 numbers that haven't shown up together
  /*checkBtn.onclick = function() {

    for (var a = 1; a < 51; a++) {
      console.log(a);
      for (var b = a+1; b < 51; b++) {
        for (var c = b+1; c < 51; c++) {
          for (var d = c+1; d < 51; d++) {
            for (var e = d+1; e < 51; e++) {
              for (var f = e+1; f < 51; f++) {

                  for (var i = 0; i < maxHistory.length; i++) {
                    //main numbers
                    var seq = maxHistory[i].main.split(" ");
                    var count = 0;
                    for (var j=0; j < seq.length; j++) {
                      var num = +seq[j];
                      if ((num === a) || (num === b) || (num === c) || (num === d) || (num === e) || (num === f)) count++;
                    }
                    if (count > 2) break;
                    else if (i === (maxHistory.length-1)) console.log("seq not shown before: " + a + " " + b + " " + c + " " + d + " " + e + " " + f);
                  }

              }
            }
          }
        }
      }
    }

    let sumList = [];
    //calculate number frequencies sums
    for (var i = 0; i < maxHistory.length; i++) {
      //main numbers
      var seq = maxHistory[i].main.split(" ");
      var currentSum = 0;
      for (var j=0; j < seq.length; j++) {
        currentSum += +seq[j];
      }
      sumList.push(currentSum);
    }
    console.log(sumList);
    let average = (array) => array.reduce((a, b) => a + b) / array.length;
    console.log(Math.floor(average(sumList)));
  }*/
};
