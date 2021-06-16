let rangeinputmax = document.querySelector(".maxprice");
let filterSection = document.querySelector(".filtervalues");
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}
setRightValue();

inputLeft.addEventListener("input", () => {
  setLeftValue();

  actualForm.min.value = inputLeft.value;
  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    actualForm.min.style.border = "1px solid red";
  } else {
    actualForm.min.style.border = "none";
    actualForm.max.style.border = "none";
  }
});
inputRight.addEventListener("input", () => {
  setRightValue();
  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    actualForm.min.style.border = "1px solid red";
  } else {
    actualForm.min.style.border = "none";
    actualForm.max.style.border = "none";
  }

  actualForm.max.value = inputRight.value;
});

inputLeft.addEventListener("mouseover", () => {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", () => {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", () => {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", () => {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", () => {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", () => {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", () => {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", () => {
  thumbRight.classList.remove("active");
});

let actualForm = document.querySelector(".range-form");

actualForm.min.value = inputLeft.value;
actualForm.max.value = inputRight.value;

actualForm.min.addEventListener("input", (e) => {
  inputLeft.value = actualForm.min.value;
  setLeftValue();

  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    actualForm.min.style.border = "1px solid red";
  } else {
    actualForm.min.style.border = "none";
  }
});
actualForm.max.addEventListener("input", () => {
  inputRight.value = actualForm.max.value;
  setRightValue();
  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    actualForm.max.style.border = "1px solid red";
  } else {
    actualForm.max.style.border = "none";
  }
});

const validateMyForm = () => {
  if (parseInt(actualForm.min.value) > parseInt(actualForm.max.value)) {
    return false;
  }
};

let ratings = document.querySelectorAll(".rating");

ratings.forEach(async (e) => {
  let i = 0;
  window.addEventListener("scroll", () => {
    if (e.getBoundingClientRect().top <= 750) {
      if (i == 0) {
        var bar = new ProgressBar.Circle(e, {
          color: "#4D61FC",
          trailColor: "#dee2e6",
          trailWidth: 10,
          duration: 1400,
          easing: "easeInOut",
          strokeWidth: 10,
          from: { color: "#8DA5FD", a: 0 },
          to: { color: "#4D61FC", a: 1 },

          step: function (state, circle) {
            circle.path.setAttribute("stroke", state.color);
          },
        });
        bar.animate(0.7, { duration: 1500 });
        i++;
      }
    }
  });
});

let inputs = [];
let filteredResult = document.querySelector(".filteredresult");
let fake = document.querySelector(".fake");
let allinputs = document.querySelectorAll(".filtervalues input");
let brandSection = {
  redmi: false,
  "one plus": false,
  realme: false,
  apple: false,
  vivo: false,
  xiaomi: false,
  oppo: false,
  motorola: false,
  asus: false,
  huawei: false,
  samsung: false,
};
let ramSection = { 3: false, 4: false, 6: false, 8: false, 12: false };
let mcamera = {
  30: false,
  25: false,
  20: false,
  15: false,
  10: false,
  5: false,
};
let displaySize = {
  7.5: false,
  7: false,
  6.75: false,
  6.5: false,
  6.25: false,
  6: false,
  5.75: false,
  5.5: false,
};
let features = { nfc: false, IR: false, audio: false, fm: false };
let networkT = { "5G": false, "4G": false, "3G": false };

let cameData = [];
allinputs.forEach((input) => {
  input.addEventListener("input", () => {
    manipulate(input);
    sendData();

    setTimeout(() => {
      filteredResult.classList.add("animate");
    }, 100);

    filteredResult.classList.remove("animate");
  });
});

let manipulate = (input) => {
  if (input.classList[0] == "brand") {
    brandSection[input.id] = input.checked;
  }
  if (input.classList[0] == "ram") {
    ramSection[input.id] = input.checked;
  }
  if (input.classList[0] == "mcamera") {
    mcamera[input.id] = input.checked;
  }
  if (input.classList[0] == "screensize") {
    displaySize[input.id] = input.checked;
  }
  if (input.classList[0] == "features") {
    features[input.id] = input.checked;
  }
  if (input.classList[0] == "networkT") {
    networkT[input.id] = input.checked;
  }
  // console.log(mcamera);
  // console.log(brandSection);
  // console.log(ramSection);
  // console.log(features);
  console.log(networkT);
};
let mobiles;
let sendData = async () => {
  let res = await axios.post(
    "https://desolate-badlands-28322.herokuapp.com/range/filter",
    {
      brand: brandSection,
      ram: ramSection,
      mcamera: mcamera,
      features: features,
      displaySize: displaySize,
      networkT: networkT,
      min: actualForm.min.value,
      max: actualForm.max.value,
    }
  );
  let camedata = res.data;
  fillData(camedata);
  console.log(camedata);
  mobiles = [...camedata];
};

let fillData = (cameData) => {
  console.log(cameData);
  deleteChild(filteredResult);
  for (let i = 0; i < cameData.length; i++) {
    let newMobile = fake.cloneNode(true);
    newMobile.classList.remove("d-none");
    newMobile.childNodes[1].childNodes[1].childNodes[1].src = cameData[i].image;
    newMobile.childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText =
      cameData[i].name;
    newMobile.childNodes[1].childNodes[3].childNodes[1].childNodes[9].childNodes[1].href = `/${cameData[i]._id}`;
    newMobile.childNodes[1].childNodes[3].childNodes[1].childNodes[9].childNodes[3].href = `/compare/?mobile=${cameData[i]._id}`;
    newMobile.childNodes[1].childNodes[3].childNodes[1].childNodes[3].innerText +=
      cameData[i].price;

    filteredResult.append(newMobile);
  }
};

function deleteChild(e) {
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

let filtervalues = document.getElementsByTagName("main");

function myFunction() {
  var intElemScrollTop = filtervalues.scrollTop;
  console.log(intElemScrollTop);
}

let toggler = document.querySelector(".filter-toggler");
toggler.addEventListener("click", () => {
  document.querySelector("body").style.height = "100vh";
  document.querySelector("body").style.overflow = "hidden";
});
