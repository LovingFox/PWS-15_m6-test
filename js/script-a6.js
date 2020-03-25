const maxAllowedChecks = 2;

function dummy(arg) {
   console.log(arg);
}

function trackChecks() {
   let checkCount = $("input[type=checkbox]:checked").length;
   console.log("Выбрано флажков: " + checkCount);
   if (checkCount >= maxAllowedChecks) {
      console.log("это много");
      $("input[type=checkbox]:not(:checked)").prop("disabled", true);
   } else {
      console.log("это нормально");
      $("input[type=checkbox]:not(:checked)").prop("disabled", false);
   }
}

function trackRadios() {
   $("input[type=radio]").prop("disabled", true);
}

function init() {
   $("input[type=checkbox]").change(trackChecks);
   $("input[type=radio]").change(trackRadios);

   trackChecks();
   // trackRadios();
   console.log("скрипт подгрузился");
}

$(document).ready(init);

