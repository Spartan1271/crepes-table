$(".fold-icon").click(function() {
    var $this = $(this),
      $baseRow = $this.closest(".base-row"),
      $detailsRow = $baseRow.next(".details-row"),
      $details = $detailsRow.find(".details");
    $this.toggleClass("open");
    $baseRow.toggleClass("open");
    if ($detailsRow.find("td").is(":visible")) {
      $details.first().slideUp(300, function() {
        $detailsRow.find("td").hide();
      });
    } else {
      $detailsRow.find("td").toggle();
      $details.first().slideToggle(300);
    }
  });
  $(".sortable-table>tbody").sortable();
  