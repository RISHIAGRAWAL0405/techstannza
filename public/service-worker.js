self.addEventListener("push", async (event) => {
  data = event.data.json();
  const title = "Simple Title";
  const options = {
    body: "Simple piece of body text.\nSecond line of body text :)",
  };
  registration.showNotification(title, options);
});
