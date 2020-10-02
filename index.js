
$(function() {
  
  //adding item
  $("form").submit((event) => {
    event.preventDefault();

    let item = $("#shopping-list-entry").val();
    //this if statement prevents blank entries
    if (item) {
      $("#shopping-list-entry").val("");
      //this creates the <div> to add to <li>
      html = 
      `
        <li>
          <span class="shopping-item">${item}</span>
          <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
          </div>
        </li>
      `;
      //This adds the new item with buttons
      $(".shopping-list").append(html);
    }
  });
  
  //delete button - delete this <li>
  $(".shopping-list").on("click", ".shopping-item-delete", function() {
    //want to remove the <li> item
    //selects closest <li> item to button to remove
      $(this).closest("li").remove();
  });

  //check button - toggles shopping-item to shopping-item_checked
  $(".shopping-list").on("click", ".shopping-item-toggle", function () {
    $(this)
      //finds closest class with shopping-item to change
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });
});


