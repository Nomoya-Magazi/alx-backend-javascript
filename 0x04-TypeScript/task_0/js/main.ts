interface Student {
	firstName: string,
	lastName: string,
	age: Number,
	location: string
}

const student1: student = {
	firstName: "Naruto",
	lastName: "Uzumaki",
	age: 25,
	location: "Leaf Village"
}

const student2: student = {
	firstName: "Sasuke",
	lastName: "Utchia",
	age: 25,
	location: "Utchia Village"
}

const studentlist:Araay<Student> = [ student1, student2 ];

//render a table
const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);

cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";
table.append(thead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tbody);
body.append(table);
