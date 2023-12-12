$(document).ready(function () {
  // dropdown option
  const options = {
    // sp option
    "FAIL SP - SP": [
      "SD - 100",
      "GR - 101",
      "AQ - 102",
      "LA - 103",
      "RP - 104",
      "PT - 105",
      "BR - 106",
      "TL - 107",
      "GT - 108",
      "MS - 109",
      "JB - 110",
      "HK - 111",
      "FC - 112",
      "GS - 113",
      "HY - 114",
      "AS - 115",
      "PL - 116",
      "PY - 117",
      "RK - 118",
      "SC - 119",
      "MC - 120",
      "ST - 121",
      "OL - 122",
      "SK - 123",
      "DP - 124",
      "CL - 125",
      "CC - 126",
      "TG - 127",
    ],
    // pelen option
    PELAN: [
      "CP - 200",
      "GP - 201",
      "TL - 202",
      "JUA - 203",
      "MP - 204",
      "ST - 205",
      "GT - 206",
      "KA - 207",
    ],
    BUKU: ["DB - 300", "FB - 301", "TLB - 302", "SSC - 303", "SFD - 304"],
    "CD - SP": [
      "SD - 400",
      "GR - 401",
      "AQ - 402",
      "LA - 403",
      "RP - 404",
      "PT - 405",
      "BR - 406",
      "TL - 407",
      "GT - 408",
      "MS - 408",
      "JB - 410",
      "HK - 411",
      "FC - 412",
      "GS - 413",
      "HY - 414",
      "AS - 415",
      "PL - 416",
      "PY - 417",
      "RK - 418",
      "SC - 419",
      "MC - 420",
      "ST - 421",
      "OL - 422",
      "SK - 423",
      "DP - 424",
      "CL - 425",
      "CC - 426",
    ],
    HDD: ["GST - 500", "GSM - 600"],
  };

  // global selector
  const firstDropdown = document.getElementById("first-dropdown");
  const secondDropdown = document.getElementById("second-dropdown");

  $("#digiInput").attr("disabled", "disabled");
  $("#second-dropdown").attr("disabled", "disabled");
  $("#digiInput").attr("type", "text");
  $("#digiInput").attr("value", "Select type first");

  // populate second dropdown depend on type
  function populateSecondDropdown() {
    const selectedValue = firstDropdown.value;

    secondDropdown.innerHTML = ""; // Clear existing options

    if (selectedValue === "") {
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "Select a type first";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      secondDropdown.appendChild(defaultOption);
    } else {
      secondDropdown.innerHTML =
        '<option value="" disabled selected>Select option</option>';
      options[selectedValue].forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        optionElement.selectedIndex = 0;
        secondDropdown.appendChild(optionElement);
      });
    }
  }
  firstDropdown.addEventListener("change", function () {
    populateSecondDropdown();
    localStorage.removeItem("digiInput");
    localStorage.removeItem("second-dropdown");
    localStorage.removeItem("gp");
    localStorage.removeItem("dareah");
    const digiInputField = $("#digiInput");
    digiInputField.val(null);
    $("#digiInput").removeAttr("disabled");
    $("#second-dropdown").removeAttr("disabled");
    $("#digiInput").attr("type", "number");
    $("#digiInput").removeAttr("value");
    $("#seconddropCode").html("-");
    $("#seconddropCode2").html("-");
    $("#draCode").html("-");
    $("#draCode2").html("-");
    $("#gpCode").html("-");
    $("#itemCodeFinal").val("-");
  });

  function displayRealTimeData() {
    // Function to update displayed data
    function updateData() {
      const storedData = localStorage.getItem("digiInput");
      // Check if there's new data in localStorage
      if (storedData !== null) {
        $("#digitCode").html(storedData);
        $("#digitCode2").html(storedData);
      } else {
        $("#digitCode").html("-");
        $("#digitCode2").html("-");
      }
    }

    // Initial display
    updateData();

    // Check for updates periodically (every 2 seconds in this example)
    setInterval(updateData, 1000);
  }
  displayRealTimeData();

  // form handle chnage
  const form = document.getElementById("myForm");
  form.addEventListener("input", function (event) {
    const digitLabel = $("#Dlabel");
    const kodLabel = $("#kodLabel");
    const digiInputField = $("#digiInput");

    const inputField = event.target;
    const inputValue = inputField.value;
    const inputId = inputField.id;

    localStorage.setItem(inputId, inputValue);

    const type = localStorage.getItem("first-dropdown");
    const year = localStorage.getItem("year");
    const digiInput = localStorage.getItem("digiInput");
    const firstdropdown = localStorage.getItem("first-dropdown");
    const seconddropdown = localStorage.getItem("second-dropdown");
    const dareah = localStorage.getItem("dareah");
    const gp = localStorage.getItem("gp");

    // for type fall sp
    if (type == "FAIL SP - SP") {
      digitLabel.html("SP No. (4 Digits)");
      digiInputField.attr(
        "onKeyPress",
        "if(this.value.length==4) return false;"
      );
      digiInputField.attr("onblur", "checklength(4,this.value,this.id)");
      kodLabel.html("Kod Fail");
    }
    // for type PELAN
    if (type == "PELAN") {
      digitLabel.html("No Pelan (6 Digits)");
      digiInputField.attr(
        "onKeyPress",
        "if(this.value.length==6) return false;"
      );
      digiInputField.attr("onblur", "checklength(6,this.value,this.id)");
      kodLabel.html("Kod Info");
    }
    // for type PELAN
    if (type == "BUKU") {
      digitLabel.html("No Buku (6 Digits)");
      digiInputField.attr(
        "onKeyPress",
        "if(this.value.length==6) return false;"
      );
      digiInputField.attr("onblur", "checklength(6,this.value,this.id)");
      kodLabel.html("Kod Info");
    }
    // for type CD
    if (type == "CD") {
      digitLabel.html("No. CD (4 Digits)");
      digiInputField.attr(
        "onKeyPress",
        "if(this.value.length==4) return false;"
      );
      digiInputField.attr("onblur", "checklength(4,this.value,this.id)");
      kodLabel.html("Kod CD Fail SP");
    }
    // for type HDD
    if (type == "HDD") {
      digitLabel.html("No. Siri HDD (6 Digits)");
      digiInputField.attr(
        "onKeyPress",
        "if(this.value.length==6) return false;"
      );
      digiInputField.attr("onblur", "checklength(6,this.value,this.id)");
      kodLabel.html("Kod Info");
    }

    // right side value
    if (type == "FAIL SP - SP" || type == "CD - SP") {
      $("#typeCode").html("SP");
      $("#yearCode").html(year.slice(-2));
      $("#yearCode2").html(year.slice(-2));
      if (gp != null) {
        $("#gpCode").html(gp);
      }
    } else {
      $("#typeCode").html("-");
      $("#yearCode").html("-");
      $("#yearCode2").html("-");
      $("#gpCode").html("-");
    }
    if (seconddropdown != null) {
      $("#seconddropCode").html(BeforeHyphen(seconddropdown));
      $("#seconddropCode2").html(AfterHyphen(seconddropdown));
    } else {
      $("#seconddropCode").html("-");
      $("#seconddropCode2").html("-");
    }

    if (dareah != null) {
      $("#draCode").html(BeforeHyphen(dareah));
      $("#draCode2").html(AfterHyphen(dareah));
    } else {
      $("#draCode").html("-");
      $("#draCode2").html("-");
    }

    // final output
    if (type == "FAIL SP - SP" || type == "CD - SP") {
      if (
        type != null &&
        year != null &&
        firstdropdown != null &&
        digiInput != null &&
        seconddropdown != null &&
        dareah != null &&
        gp != null
      ) {
        $("#itemCodeFinal").val(
          removeSpace(
            `SP${year.slice(-2)}/${digiInput}/${BeforeHyphen(
              seconddropdown
            )}/${BeforeHyphen(dareah)}/${gp}`
          )
        );
        $("#barCodeFinal").val(
          removeSpace(
            `${AfterHyphen(dareah)}${AfterHyphen(seconddropdown)}${year.slice(
              -2
            )}${digiInput}`
          )
        );
      }
    }
    if (type == "PELAN" || type == "BUKU" || type == "HDD") {
      $("#gp").attr("disabled", "disabled");
      $("#barCodeFinal").val(
        removeSpace(
          `${AfterHyphen(dareah)}${AfterHyphen(seconddropdown)}${year.slice(
            -2
          )}${digiInput}`
        )
      );
    } else {
      $("#gp").removeAttr("disabled");
    }

    // if pelan
    if (type == "PELAN") {
      if (digiInput != null && seconddropdown != null && dareah != null) {
        $("#itemCodeFinal").val(
          removeSpace(
            `${BeforeHyphen(seconddropdown)}${digiInput}${BeforeHyphen(dareah)}`
          )
        );
      } else {
        $("#itemCodeFinal").val("-");
      }
    }
    // if BUKu
    if (type == "BUKU") {
      $("#dareah").attr("disabled", "disabled");
      if (digiInput != null && seconddropdown != null) {
        $("#itemCodeFinal").val(
          removeSpace(`${BeforeHyphen(seconddropdown)}${digiInput}`)
        );
      } else {
        $("#itemCodeFinal").val("-");
      }
    } else {
      $("#dareah").removeAttr("disabled");
    }
    // if sdd
    if (type == "HDD") {
      $("#dareah").attr("disabled", "disabled");
      if (digiInput != null && seconddropdown != null) {
        $("#itemCodeFinal").val(
          removeSpace(`${BeforeHyphen(seconddropdown)}${digiInput}`)
        );
      } else {
        $("#itemCodeFinal").val("-");
      }
    } else {
      $("#dareah").removeAttr("disabled");
    }
  });
  // end form change handle
  function removeSpace(value) {
    return value.replace(/\s/g, "");
  }
  function BeforeHyphen(value) {
    return value.substring(0, value.indexOf("-"));
  }
  function AfterHyphen(value) {
    return value.substring(value.indexOf("-") + 1);
  }

  // defaulr year
  const YearField = document.getElementById("year");
  const now = new Date();
  const currentYear = now.getFullYear();
  YearField.value = currentYear;
  localStorage.setItem("year", currentYear);

  YearField.addEventListener("input", function (event) {
    if (event.target.value < 4) {
      event.target.value = currentYear;
    }
  });

  // remove all default value
  localStorage.removeItem("first-dropdown");
  localStorage.removeItem("digiInput");
  localStorage.removeItem("second-dropdown");
  localStorage.removeItem("dareah");
  localStorage.removeItem("gp");
}); // jquery main end
