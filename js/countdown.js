const days = document.querySelector(".days");
const formBtn = document.querySelector(".subscribe-btn");

const launchDate = new Date("10/4/2021");
const today = new Date();
const oneDay = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((launchDate.getTime() - today.getTime()) / oneDay);

days.textContent = daysLeft;

formBtn.addEventListener("click", async function (e) {
  const formInput = document.querySelector("#email").value;

  e.preventDefault();

  await axios
    .post("https://spasora-api.herokuapp.com/api/v1/subscribes", {
      email: formInput,
    })
    .then(function (response) {
      if (response.data.status === "success") {
        document.querySelector(".form").style.display = "none";
        document.querySelector(".thanks").style.display = "block";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
});

if ((today.getHours() = 24)) {
  location.reload();
}
