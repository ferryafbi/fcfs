// created by ferryafbi
function FCFS(processes) {
  let inputElement1 = document.querySelector("input[name='input1']");
  let completionTime = Number(inputElement1.value);

  let inputElement2 = document.querySelector("input[name='input2']");
  let waitingTime = Number(inputElement2.value);

  let inputElement3 = document.querySelector("input[name='input3']");
  let turnAroundTime = Number(inputElement3.value);

  console.log(completionTime, turnAroundTime, waitingTime);

  // menentukan waktu selesai untuk setiap proses
  for (let i = 0; i < processes.length; i++) {
    completionTime += processes[i].burstTime;
    processes[i].completionTime = completionTime;
    processes[i].waitingTime = completionTime - processes[i].arrivalTime - processes[i].burstTime;
    processes[i].turnAroundTime = completionTime - processes[i].arrivalTime;
    waitingTime += processes[i].waitingTime;
    turnAroundTime += processes[i].turnAroundTime;
  }

  // menghitung rata-rata waktu tunggu dan waktu balik
  const avgWaitingTime = waitingTime / processes.length;
  const avgTurnAroundTime = turnAroundTime / processes.length;

  document.write(
    "<table border=1><tr><th>Name</th><th>Arrival Time</th><th>Burst Time</th><th>Completion Time</th><th>Waiting Time</th><th>Turn Around Time</th></tr>"
  );
  for (let i = 0; i < processes.length; i++) {
    document.write(
      `<tr><td>` +
        processes[i].name +
        `<td>` +
        processes[i].arrivalTime +
        `<td>` +
        processes[i].burstTime +
        `<td>` +
        processes[i].completionTime +
        `<td>` +
        processes[i].waitingTime +
        `<td>` +
        processes[i].turnAroundTime +
        `</td></tr>`
    );
  }
  document.writeln("Rata-rata Waktu Tunggu: " + avgWaitingTime + " second dan ");
  document.writeln("Rata-rata Waktu Balik: " + avgTurnAroundTime + " second");
  document.writeln("<br><button onclick=window.location.reload()>Back to home</button>");

}

let row11 = document.querySelector("#row11").value;
let row12 = document.querySelector("#row12").value;
let row13 = document.querySelector("#row13").value;
let row14 = document.querySelector("#row14").value;
let row15 = document.querySelector("#row15").value;
let row21 = document.querySelector("#row21").value;
let row22 = document.querySelector("#row22").value;
let row23 = document.querySelector("#row23").value;
let row24 = document.querySelector("#row24").value;
let row25 = document.querySelector("#row25").value;

const processes = [
  { name: "P1", arrivalTime: Number(row11), burstTime: Number(row21) },
  { name: "P2", arrivalTime: Number(row12), burstTime: Number(row22) },
  { name: "P3", arrivalTime: Number(row13), burstTime: Number(row23) },
  { name: "P4", arrivalTime: Number(row14), burstTime: Number(row24) },
  { name: "P5", arrivalTime: Number(row15), burstTime: Number(row25) },
];
