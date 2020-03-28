let genBtn, genList, under15, under7, theRest, genListDiv, tempUnder15, tempRest, tempUnder7, tempStats;
let mainCount = {
  '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0, '10':0,
  '11':0, '12':0, '13':0, '14':0, '15':0, '16':0, '17':0, '18':0, '19':0, '20':0,
  '21':0, '22':0, '23':0, '24':0, '25':0, '26':0, '27':0, '28':0, '29':0, '30':0,
  '31':0, '32':0, '33':0, '34':0, '35':0, '36':0, '37':0, '38':0, '39':0, '40':0,
  '41':0, '42':0, '43':0, '44':0, '45':0, '46':0, '47':0, '48':0, '49':0
}
let grandCount = {
  '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0
};
let mainFreq = JSON.parse(JSON.stringify(mainCount)); //this makes a deep copy
let grandFreq = JSON.parse(JSON.stringify(grandCount));
let tempCount = JSON.parse(JSON.stringify(mainCount));

window.onload = function() {

  genBtn = document.getElementById('genButton');
  genListDiv = document.getElementById('genList');
  genGrDiv = document.getElementById('genGrand');

  dgHistory.reverse();
  //console.log(dgHistory);

  var evenR0 = evenR1 = evenR2 = evenR3 = evenR4 = evenR5 = 0;

  //calculate number overdue status
  for (var i = 0; i < dgHistory.length; i++) {
    //main numbers
    var seq = dgHistory[i].main.split("-");
    for (var el in mainCount) {
      mainCount[el]++;
    }
    var seqEven = 0;
    for (var j=0; j < seq.length; j++) {
      mainCount[seq[j]] = 0;
      mainFreq[seq[j]]++;
      var seqEl = +seq[j];
      if ((seqEl%2) === 0) seqEven++;
    }
    if (seqEven === 0) evenR0++;
    else if (seqEven === 1) evenR1++;
    else if (seqEven === 2) evenR2++;
    else if (seqEven === 3) evenR3++;
    else if (seqEven === 4) evenR4++;
    else evenR5++;

    //grand numbers
    var gn = dgHistory[i].grand;
    for (var el in grandCount) {
      grandCount[el]++;
    }
    grandCount[gn] = 0;
    grandFreq[gn]++;
  }

  tempStats = [];

  for (var k = (dgHistory.length - 340); k < dgHistory.length; k++) {
    var seq = dgHistory[k].main.split("-");

    if (k > (dgHistory.length - 301)) {
      tempUnder7 = [];
      tempUnder15 = [];
      tempRest = [];

      for (var el in tempCount) {
        if (tempCount[el] < 7) tempUnder7.push(el);
        else if (tempCount[el] < 15) tempUnder15.push(el);
        else tempRest.push(el);
      }
      var grA = 0;
      var grB = 0;
      var grC = 0;
      for (var j = 0; j < seq.length; j++) {
        if (tempUnder7.includes(seq[j])) grA++;
        else if (tempUnder15.includes(seq[j])) grB++;
        else grC++;
      }
      let newStat = {date: dgHistory[k].date, under7: grA, under15: grB, aboveIn15: grC};
      tempStats.push(newStat);
    }

    for (var el in tempCount) {
        tempCount[el]++;
    }
    for (var j=0; j < seq.length; j++) {
      tempCount[seq[j]] = 0;
    }
  }

  var seq311 = 0;
  var seq302 = 0;
  var seq320 = 0;
  var seq410 = 0;
  var seq401 = 0;
  var seq230 = 0;
  var seq221 = 0;
  var seq212 = 0;

  for (var el in tempStats) {
    if ((tempStats[el].under7 === 3) && (tempStats[el].under15 === 1) && (tempStats[el].aboveIn15 === 1)) seq311++;
    else if ((tempStats[el].under7 === 3) && (tempStats[el].under15 === 0) && (tempStats[el].aboveIn15 === 2)) seq302++;
    else if ((tempStats[el].under7 === 3) && (tempStats[el].under15 === 2) && (tempStats[el].aboveIn15 === 0)) seq320++;
    else if ((tempStats[el].under7 === 4) && (tempStats[el].under15 === 1) && (tempStats[el].aboveIn15 === 0)) seq410++;
    else if ((tempStats[el].under7 === 4) && (tempStats[el].under15 === 0) && (tempStats[el].aboveIn15 === 1)) seq401++;
    else if ((tempStats[el].under7 === 2) && (tempStats[el].under15 === 3) && (tempStats[el].aboveIn15 === 0)) seq230++;
    else if ((tempStats[el].under7 === 2) && (tempStats[el].under15 === 2) && (tempStats[el].aboveIn15 === 1)) seq221++;
    else if ((tempStats[el].under7 === 2) && (tempStats[el].under15 === 1) && (tempStats[el].aboveIn15 === 2)) seq212++;
  }

  //print number overdue status
  console.log("main number overdue status: ");
  console.log(mainCount);
  console.log("grand number overdue status: ");
  console.log(grandCount);
  console.log("main numbers frequencies: ");
  console.log(mainFreq);
  console.log("grand numbers frequencies: ");
  console.log(grandFreq);

  console.log("even/odd ratio 0/5: " + evenR0);
  console.log("even/odd ratio 1/4: " + evenR1);
  console.log("even/odd ratio 2/3: " + evenR2);
  console.log("even/odd ratio 3/2: " + evenR3);
  console.log("even/odd ratio 4/1: " + evenR4);
  console.log("even/odd ratio 5/0: " + evenR5);


  under7 = [];
  under15 = [];
  theRest = [];

  for (var el in mainCount) {
    if (mainCount[el] < 7) under7.push(el);
    else if (mainCount[el] < 15) under15.push(el);
    else theRest.push(el);
  }

  console.log("numbers with overdue of under 7: ");
  console.log(under7);
  console.log(("numbers with overdue of under 15: "));
  console.log(under15);
  console.log("numbers with overdue of 15 and above: ");
  console.log(theRest);
  console.log("main number overdue statuses by date: ");
  console.log(tempStats.reverse());
  console.log("main number overdue pattern 3 1 1: " + seq311);
  console.log("main number overdue pattern 3 0 2: " + seq302);
  console.log("main number overdue pattern 3 2 0: " + seq320);
  console.log("main number overdue pattern 4 1 0: " + seq410);
  console.log("main number overdue pattern 4 0 1: " + seq401);
  console.log("main number overdue pattern 2 3 0: " + seq230);
  console.log("main number overdue pattern 2 2 1: " + seq221);
  console.log("main number overdue pattern 2 1 2: " + seq212);


  genBtn.onclick = function() {
    genList = [];

    while (genList.length < 20) {
      //console.log("genList length: " + genList.length);
      var newSeq = [];
      //add number with overdue status between 7-14 to sequence
      newSeq.push(+under15[Math.floor(Math.random() * under15.length)])

      //add number with overdue status above 14 to sequence
      newSeq.push(+theRest[Math.floor(Math.random() * theRest.length)])

      //add numbers with overdue status under 7
      while (newSeq.length < 5) {
        var newNum = +under7[Math.floor(Math.random() * under7.length)]
        if (!newSeq.includes(newNum)) newSeq.push(newNum);
      }

      //check odd-even ratio in newSeq
      var even = 0;
      var goodRatio = false;
      for (var numVal in newSeq) {
        //console.log(newSeq[numVal]);
        if (newSeq[numVal]%2 === 0) even++;
      }
      //console.log(even);
      if ((even > 1) && (even < 4)) goodRatio = true;

      //check consecutive numbers in newSeq
      var noCons = true;
      if ((newSeq[3] - newSeq[2] === 1) && (newSeq[2] - newSeq[1] === 1) && (newSeq[1] - newSeq[0] === 1)) noCons = false;
      else if ((newSeq[4] - newSeq[3] === 1) && (newSeq[3] - newSeq[2] === 1) && (newSeq[2] - newSeq[1] === 1)) noCons = false;

      newSeq.sort(function(a, b){return a-b});

      //check if more than 3 numbers in newSeq have shown up before
      var goodRep = true;
      for (var i = 0; i < dgHistory.length; i++) {
        var oldSeq = dgHistory[i].main.split("-");
        var repCount = 0;
        for (var j=0; j < oldSeq.length; j++) {
          var seqNum = +oldSeq[j];
          if (newSeq.includes(seqNum)) repCount++;
        }
        if (repCount > 2) {
          goodRep = false;
          break;
        }
      }

      //add newSeq to genList
      if (goodRatio && noCons && goodRep && !genList.includes(newSeq)) genList.push(newSeq);
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

    //display grand numbers with 2 highest overdue status
    var grandNums = [];
    for (var el in grandCount) {
      grandNums.push(grandCount[el]);
    }
    grandNums.sort(function(a, b){return a-b});
    var grand1 = grandNums[6];
    var grand2 = grandNums[5];
    for (var el in grandCount) {
      if (grand1 === grandCount[el]) grand1 = el;
      else if (grand2 === grandCount[el]) grand2 = el;
    }
    genGrDiv.innerHTML = "GN: " + grand1 + " or " + grand2;
  }
};
