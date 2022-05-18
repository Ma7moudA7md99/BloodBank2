// show selected table
function displayStaff() {
  $("#staffDiv").css("display", "block");
  $("#usersDiv").css("display", "none");
  $("#quantitiesDiv").css("display", "none");
  $(".btn-staff").addClass("active");
  $(".btn-user").removeClass("active");
  $(".btn-quantity").removeClass("active");
}
function displayUser() {
  $("#staffDiv").css("display", "none");
  $("#quantitiesDiv").css("display", "none");
  $("#usersDiv").css("display", "block");
  $(".btn-user").addClass("active");
  $(".btn-staff").removeClass("active");
  $(".btn-quantity").removeClass("active");
}
function displayQuantities() {
  $("#staffDiv").css("display", "none");
  $("#usersDiv").css("display", "none");
  $("#quantitiesDiv").css("display", "block");
  $(".btn-quantity").addClass("active");
  $(".btn-staff").removeClass("active");
  $(".btn-user").removeClass("active");
}
// update value from admin
function updateQuantities() {
  const bloodQ = document.querySelector("#quantity").value;
  var select = document.querySelector("#typeChoice").value;
  var tableTd = document.querySelectorAll(".quantities table td");
  for (var i = 0; i < tableTd.length; i++) {
    if (tableTd[i].id === select) {
      tableTd[i].textContent = bloodQ + " L";
    }
  }
}
// update or add staff
let process;
var email = document.querySelector("#mail");
var phoneNumber = document.querySelector("#phoneNumber");
var bloodGroup = document.querySelector("#bloodEdit");
var role = document.querySelector("#role");
var salary = document.querySelector("#salary");
var controlToolsDiv = document.querySelector(".control-tools");
var updateBtn = document.querySelector("#updateBtn");
var addBtn = document.querySelector("#addBtn");
function addTools() {
  $(controlToolsDiv).css("display", "flex");
  $(email).css("display", "block");
  $(phoneNumber).css("display", "block");
  $(bloodGroup).css("display", "block");
  $(role).css("display", "block");
  $(salary).css("display", "block");
  $(addBtn).css("display", "block");
  $(updateBtn).css("display", "none");
  $(".staff .control-staff .control-tools").css("left", "-1%");
  $(".staff .control-staff .control-tools button").css("margin-left", "0");
}
function updateTools() {
  $(controlToolsDiv).css("display", "flex");
  $(role).css("display", "block");
  $(salary).css("display", "block");
  $(email).css("display", "block");
  $(updateBtn).css("display", "block");
  // make sure they are not displayed
  $(addBtn).css("display", "none");
  $(phoneNumber).css("display", "none");
  $(bloodGroup).css("display", "none");
  const width = window.innerWidth;
  if (width <= "767") {
    $(".staff .control-staff .control-tools").css("left", "-0.5%");
  } else {
    $(".staff .control-staff .control-tools").css("left", "17.5%");
  }
  $(".staff .control-staff .control-tools button").css("margin-left", "3.6%");
}
var tableEmail = document.querySelectorAll("table td.email");
var tablePhone = document.querySelectorAll("table td.tablePhone");
var tableSalary = document.querySelectorAll("table td.tableSalary");
var tableRole = document.querySelectorAll("table td.tableRole");

function update() {
  for (let i = 0; i < tableEmail.length; i++) {
    if (tableEmail[i].textContent === email.value) {
      tableRole[i].innerText = role.value;
      tableSalary[i].innerText = salary.value;
    }
  }
}
function add() {
  var mainTable = document.querySelector("#staffDiv table");
  var row = mainTable.insertRow(4);
  var cel1 = row.insertCell(0);
  var cel2 = row.insertCell(1);
  var cel3 = row.insertCell(2);
  var cel4 = row.insertCell(3);
  var cel5 = row.insertCell(4);
  cel1.innerHTML = email.value;
  cel2.innerHTML = phoneNumber.value;
  cel3.innerHTML = bloodGroup.value;
  cel4.innerHTML = role.value;
  cel5.innerHTML = salary.value;
}
