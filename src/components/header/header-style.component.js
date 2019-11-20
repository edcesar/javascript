export class HeaderStyleComponent {
  static setStyle() {
    document.querySelector(".header-container").insertAdjacentHTML(
      "beforebegin",
      `
      <style type="text/css">
          header {
            border: 1px solid #ccc;
            background-color: yellow;
          }
			</style>
		`
    );
  }
}
