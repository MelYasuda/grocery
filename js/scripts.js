var items = [];
$(document).ready(function() {
  $("#grocery").submit(function(event) {
    event.preventDefault();
    $("#foodList").empty();
    var food = $("#food").val();
    items.push(food);
    var itemsCapped = items.map(function(item){
      return item.toUpperCase();
    });
    var itemsOrganized = itemsCapped.sort();
    itemsOrganized.forEach(function(flavor) {
    $("#foodList").append("<li>" + flavor + "</li>");

    });
  });
});
