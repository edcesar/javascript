export class UserComponentStyle {
  static setStyle() {
    document.querySelector("#css").insertAdjacentHTML(
      "beforeend",
      `
      <style type="text/css">
					table {
						width: 100%;
					}
					
					table td {
						border: 1px solid #ccc;
					}
		
					table tr:hover {
						background: #ccc;
					}
			</style>
		`
    );
  }
}
