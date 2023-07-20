import { ICONS } from "./constants";

const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;
  function buttonClick({ target }) {
    if (target.classList.contains("lefy-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 % selectedIcon) % ICONS.lenght;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.lenght;
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
