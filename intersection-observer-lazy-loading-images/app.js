const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = "https://source.unsplash.com/random";
      observer.unobserve(img);
    }
  });
});

const images = document.querySelectorAll("img");
images.forEach((img) => observer.observe(img));
