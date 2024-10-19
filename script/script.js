const Body = document.querySelector("body");
(Toggle = Body.querySelector("#ToggleNav")),
  (list = Body.querySelectorAll(".btnContainer p")),
  (itemBox = Body.querySelectorAll(".ContnaerWorkInfo")),
  (containerWork = Body.querySelector(".imgsContainer")),
  (imgsClick = Body.querySelectorAll("#clickInfo")),
  (CloseINfoimg = Body.querySelectorAll(".CloseINfoimg")),
  (animationBtn = Body.querySelectorAll(".animationBtn")),
  (imagesbtn = Body.querySelectorAll(".imagesbtn")),
  (checkbox = Body.querySelector("#checkbox")),
  (SubmitFrom = Body.querySelector("#SubmitFrom")),
  (ErrorClick = Body.querySelector("#ErrorClick")),
  (label = Body.querySelectorAll(".inputfield input")),
  (textarea = Body.querySelector("textarea")),
  (inputV = Body.querySelectorAll(".inputfield input")),
  (inputname = Body.querySelector("#fname")),
  (inputPhone = Body.querySelector("#phone")),
  (inputemail = Body.querySelector("#email")),
  (inputinstagram = Body.querySelector("#instagram")),
  (inputMassage = Body.querySelector("#message")),
  (btnTeam = Body.querySelectorAll(".moreinfoBtn")),
  (ContainerLanguages = Body.querySelector(".ContainerLanguages")),
  (LoadingContainer = Body.querySelector(".LoadingContainer"));
// scroll animation
function reveal() {
  var reveals = document.querySelectorAll(".ScrollingAnimation");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("ScrollingAnimationEf");
    }else{
      reveals[i].classList.remove("ScrollingAnimationEf");
    }
  }
}

window.addEventListener("scroll", reveal);

// Loading
if (true == true) {
  setTimeout( (eo) => {
    LoadingContainer.classList.add("LodingDone");
  }, 1 * 1000);
}
// Language Selector
ContainerLanguages.addEventListener("click", () => {
  Body.classList.toggle("Opencontainerlanguages");
});

// Team Card
btnTeam.forEach((btnsInTeam) => {
  btnsInTeam.addEventListener("click", function () {
    this.parentElement.parentElement.classList.toggle("InfoTeamActive");
    if (this.innerHTML == "Read More!") {
      this.innerHTML = "Read less!";
    } else if (this.innerHTML == "اقراء المزيد") {
      this.innerHTML = "اقراء اقل";
    } else if (this.innerHTML == "Read less!") {
      this.innerHTML = "Read More!";
    } else if (this.innerHTML == "اقراء اقل") {
      this.innerHTML = "اقراء المزيد";
    }
  });
});

// NavBar
Toggle.addEventListener("click", () => {
  Body.classList.toggle("NavBarActive");
});

// scroll Fun

function scrollFunction() {
  if (Body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    Body.classList.add("imgScrollActive");
  } else {
    Body.classList.remove("imgScrollActive");
  }
}
window.onscroll = function () {
  scrollFunction();
};

// work Js
imgsClick.forEach(function (imgs) {
  imgs.addEventListener("click", function (eo) {
    this.parentElement.parentElement.parentElement.classList.add(
      "imgActiveClick"
    );
  });
});

CloseINfoimg.forEach(function (icon) {
  icon.addEventListener("click", function (eo) {
    this.parentElement.parentElement.classList.remove("imgActiveClick");
    this.parentElement.classList.remove("animationVeiw");
  });
});

animationBtn.forEach(function (AnmBtn) {
  AnmBtn.addEventListener("click", function (eo) {
    this.parentElement.parentElement.classList.add("animationVeiw");
  });
});

imagesbtn.forEach(function (imgBtn) {
  imgBtn.addEventListener("click", function (eo) {
    this.parentElement.parentElement.classList.remove("animationVeiw");
  });
});

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");
    let dataFilter = this.getAttribute("data-filter");
    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");
      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "All"
      ) {
        itemBox[k].classList.remove("hide");
      }
    }
  });
}
// Start (From)
// Froms Errors
ErrorClick.addEventListener("click", function () {
  if ((SubmitFrom.disabled = true)) {
    checkbox.parentElement.parentElement.classList.add("checkboxNotActive");
  }
});
checkbox.addEventListener("change", function () {
  let checkboxThis = this.checked;
  checkboxThis ? (SubmitFrom.disabled = false) : (SubmitFrom.disabled = true);
  checkbox.parentElement.parentElement.classList.remove("checkboxNotActive");
});
SubmitFrom.addEventListener("click", function (eo) {
  if (inputname.value == "") {
    eo.preventDefault();
    inputname.parentElement.classList.add("nameEqNull");
  } else if (inputname.value !== "") {
    inputname.parentElement.classList.remove("nameEqNull");
  }
});
SubmitFrom.addEventListener("click", function (eo) {
  if (inputemail.value == "") {
    eo.preventDefault();
    inputemail.parentElement.classList.add("EmailEqNull");
  } else if (inputemail.value !== "") {
    inputemail.parentElement.classList.remove("EmailEqNull");
  }
});
SubmitFrom.addEventListener("click", function (eo) {
  if (inputMassage.value == "") {
    eo.preventDefault();
    inputMassage.parentElement.classList.add("nameEqNull");
  } else if (inputMassage.value !== "") {
    inputMassage.parentElement.classList.remove("nameEqNull");
  }
});
SubmitFrom.addEventListener("click", function (eo) {
  if (inputPhone.value == "") {
    eo.preventDefault();
    inputPhone.parentElement.classList.add("nameEqNull");
  } else {
    inputPhone.parentElement.classList.remove("nameEqNull");
  }
});
SubmitFrom.addEventListener("click", function (eo) {
  if (inputinstagram.value == "") {
    eo.preventDefault();
    inputinstagram.parentElement.classList.add("nameEqNull");
  } else {
    inputinstagram.parentElement.classList.remove("nameEqNull");
  }
});
// From animation
label.forEach(function (labels) {
  inputV.forEach(function (inputs) {
    labels.addEventListener("focus", function () {
      this.parentElement.classList.add("ActiveInput");
    });
    labels.addEventListener("blur", function () {
      if (inputs.value == "") {
        inputs.parentElement.classList.remove("ActiveInput");
      } else {
        this.parentElement.classList.add("ActiveInput");
      }
    });
  });
});
textarea.addEventListener("focus", function () {
  textarea.parentElement.classList.add("ActiveInput");
});
textarea.addEventListener("blur", function () {
  if (textarea.value == "") {
    textarea.parentElement.classList.remove("ActiveInput");
  } else {
    textarea.parentElement.classList.add("ActiveInput");
  }
});

window.addEventListener('scroll', () => {
  const features = document.querySelector('.features');
  const team = document.querySelector('.team');
  const scrollY = window.scrollY;

  if (scrollY > features.offsetTop - window.innerHeight + 100) {
      features.classList.add('fade-in');
  }

  if (scrollY > team.offsetTop - window.innerHeight + 100) {
      team.classList.add('fade-in');
  }
});
document.querySelectorAll('.slide').forEach(slide => {
  slide.addEventListener('click', () => {
      slide.classList.toggle('active');
  });
});
function sendApplication() {
  const formData = new FormData(document.getElementById("applicationForm"));
  
  fetch('/submit-answers', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('تم إرسال التقديم بنجاح!');
      closeModal(); // إغلاق النافذة بعد التقديم
    } else {
      alert('حدث خطأ أثناء التقديم.');
    }
  })
  .catch(error => console.error('Error:', error));
}
// تأكد من أن الكود يتم تشغيله بعد تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {

  // تعريف دالة التقديم
  function submitApplication(departmentId, departmentName) {
      console.log(`تم النقر على زر التقديم للقسم: ${departmentName}`);

      // البحث عن القسم المختار بناءً على الـ id
      const department = departmentsData.find(dep => dep.id === departmentId);

      if (!department) {
          console.error(`القسم ذو المعرف ${departmentId} غير موجود`);
          return;
      }

      // بناء الأسئلة بناءً على القسم المختار
      let questionsHtml = '';
      department.questions.forEach(function(question) {
          questionsHtml += `
            <div class="form-group">
              <label for="question-${question.id}">${question.question}</label>
              <input type="text" id="question-${question.id}" name="question-${question.id}" required>
            </div>
          `;
      });

      // إضافة الأسئلة إلى النافذة المنبثقة
      document.getElementById("questionsContainer").innerHTML = questionsHtml;

      // تحديث رابط الإرسال إلى القسم المختار
      document.getElementById("applicationForm").action = `/submit-answers/${departmentId}`;

      // إظهار النافذة المنبثقة
      document.getElementById("questionsModal").style.display = "block";
  }

  // تأكد من جعل الدالة متاحة في النطاق العام حتى يتمكن HTML من الوصول إليها
  window.submitApplication = submitApplication;
});