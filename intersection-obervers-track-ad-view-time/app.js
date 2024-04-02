const adViewTimes = [];
let adVisibleStartTime;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;

      if (isIntersecting) {
        adVisibleStartTime = Date.now();
      } else {
        let adViewDuration = Date.now() - adVisibleStartTime;
        if (adViewDuration) {
          adViewTimes.push(adViewDuration);
          console.log(`View time: ${(adViewDuration / 1000).toFixed(1)}s`);
        }
        adVisibleStartTime = null;
        console.log("Total time: ", (adViewTimes.reduce((a, b) => a + b, 0) / 1000).toFixed(1) + "s");
        console.log("====================================");
      }
    });
  },
  // threshold is set to 0.5, which means that the callback will be called when the ad is 50% visible
  { threshold: 0.5 },
);

const ad = document.querySelector(".ad");
observer.observe(ad);
