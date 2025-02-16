document.addEventListener("DOMContentLoaded", function () {
  const notch = document.querySelector(".notch");
  const notificationBar = document.querySelector(".notification-bar");

  let notificationVisible = true; // Track notification visibility status
  let notificationHiddenByClick = false; // Track if notification was hidden by click on notch

  function showNotification() {
    notificationBar.style.opacity = "1";
    notificationBar.style.transform = "translateY(0)";
    notificationVisible = true;
  }

  function hideNotification() {
    notificationBar.style.opacity = "0";
    notificationBar.style.transform = "translateY(-100%)";
    notificationVisible = false;
  }

  // Hide notification when hovering over notch
  notch.addEventListener("mouseover", function () {
    if (!notificationHiddenByClick) {
      hideNotification();
    }
  });

  // Prevent reappearing notification when clicking on notch
  notch.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    notificationHiddenByClick = true;
  });

  // Show notification when clicking outside
  document.addEventListener("click", function (event) {
    if (
      notificationHiddenByClick &&
      !notch.contains(event.target) &&
      !notificationBar.contains(event.target)
    ) {
      showNotification();
      notificationHiddenByClick = false; // Reset click state
    }
  });

  // Show notification when moving out of notch without clicking
  notch.addEventListener("mouseout", function () {
    if (!notificationHiddenByClick) {
      showNotification();
    }
  });

  // Prevent click event propagation on notification bar
  notificationBar.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
