window.addEventListener("load", () => {
  performance.getEntriesByType("resource").forEach((resource) => {
    console.log(`Resource: ${resource.name}, Load time: ${resource.duration.toFixed(1)}ms`);
  });
});
