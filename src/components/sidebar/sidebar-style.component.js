export class SidebarStyleComponent {
  static setStyle() {
    document.querySelector("#css").insertAdjacentHTML(
      "beforeend",
      `
      <style type="text/css">
					
				</style>
		`
    );
  }
}
