"use strict";

const dinosaurs = [
  {
    dinoType: "t-rex",
    name: "wrex",
  },
  {
    dinoType: "stegosaurus",
    name: "steve",
  },
  {
    dinoType: "velociraptor",
    name: "Ted",
  },
];
const assignments = [
  {
    title: "product cards",
    dueDate: "03/05/2019",
    topic: "HTML/CSS",
    notes: "Use flexbox",
    assignmentUrl: "http://www.google.com",
  },
  {
    title: "product cards2",
    dueDate: "03/05/2019",
    topic: "HTML/CSS",
    notes: "Use flexbox",
    assignmentUrl: "http://www.google.com",
  },
  {
    title: "product cards3",
    dueDate: "03/05/2019",
    topic: "HTML/CSS",
    notes: "Use flexbox",
    assignmentUrl: "http://www.google.com",
  },
  {
    title: "product cards4",
    dueDate: "03/05/2019",
    topic: "HTML/CSS",
    notes: "Use flexbox",
    assignmentUrl: "http://www.google.com",
  },
  {
    title: "product cards5",
    dueDate: "03/05/2019",
    topic: "HTML/CSS",
    notes: "Use flexbox",
    assignmentUrl: "http://www.google.com",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
  let domString = "";
  for (let i = 0; i < dinosaurs.length; i++) {
    domString += `<div class="dinosaur">
        <h3>${dinosaurs[i].dinoType}</h3>
        <p>${dinosaurs[i].name}</p>
    </div>`;
  }
  printToDom("dino-barn", domString);
};

buildDinosaurs();
