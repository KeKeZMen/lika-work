export default class Slider {
  constructor(
    carouselSelector,
    carouselElementsSelector,
    controllButtonsSelector,
    marginBetweenElements,
    firstControllButtonId,
    elementsFromClick
  ) {
    this.marginBetweenElements = marginBetweenElements;
    this.firstControllButtonId = firstControllButtonId;
    this.elementsFromClick = elementsFromClick;
    this.carousel = document.querySelector(carouselSelector);
    this.firstEl = document.querySelectorAll(carouselElementsSelector)[0];
    this.controllButtons = document.querySelectorAll(controllButtonsSelector);
  }

  sliderInit() {
    let isDragStart = false;
    let prevPageX;
    let prevScrollLeft;

    this.controllButtons.forEach((icon) =>
      icon.addEventListener("click", () => {
        let firstElWidth =
          this.firstEl.clientWidth + this.marginBetweenElements;
        this.carousel.scrollLeft +=
          icon.id == `${this.firstControllButtonId}`
            ? -firstElWidth * this.elementsFromClick
            : firstElWidth * this.elementsFromClick;
      })
    );

    this.carousel.addEventListener("mousedown", (e) => {
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = this.carousel.scrollLeft;
    });

    this.carousel.addEventListener("mousemove", (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      this.carousel.classList.add("dragging");
      let positionDiff = e.pageX - prevPageX;
      this.carousel.scrollLeft = prevScrollLeft - positionDiff;
    });

    this.carousel.addEventListener("mouseup", (e) => {
      isDragStart = false;
      this.carousel.classList.remove("dragging");
    });

    this.carousel.addEventListener("mouseleave", (e) => {
      isDragStart = false;
      this.carousel.classList.remove("dragging");
    });
  }
}
