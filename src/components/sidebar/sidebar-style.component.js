export class SidebarStyleComponent {
  static setStyle() {
    document.querySelector(".sidebar-container").insertAdjacentHTML(
      "beforebegin",
      `
      <style type="text/css">
					.sidebar {
            float: left;
            width: 10%;
            height: 700px;
            border: 1px solid #ccc;
            background-color: #ccc;
            margin-right: 10px;
          }
			</style>
		`
    );
  }
}
