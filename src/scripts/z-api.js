function getData() {
  $.ajax({
    dataType: "json",
    url: "http://localhost:5000/api/v1/customer",
    data: {},
  }).done(function (data) {
    console.log(data);
    insertItens(data);
  });
}

function insertItens(data) {
  $("#content").empty();
  data.forEach(function (item) {
    $("#content").append(
      '<div class="accordion-item">' +
        '<div class="accordion-header">' +
        '<button class="toggle-accordion" onclick="handleAccordion(this);"> + </button>' +
        '<img src="https://picsum.photos/200/300" alt="">' +
        '<div class="accor-about">' +
        "<p><b>Name:</b><span>" +
        item.name.first +
        " " +
        item.name.last +
        "</span> </p>" +
        "<p><b>Age:</b><span>" +
        item.age +
        "</span> </p>" +
        "<p><b>E-mail:</b><span>" +
        item.email +
        "</span></p>" +
        "<p><b>Company:</b><span>" +
        item.company +
        "a</span> </p>" +
        "<p><b>Budget:</b><span>" +
        item.budget +
        " </span> </p>" +
        "</div>" +
        "</div>" +
        '<div class="accordion-body">' +
        '<div class="accor-about">' +
        "<p><b>phone:</b><span>" +
        item.phone +
        "</span> </p>" +
        "<p><b>address:</b><span>" +
        item.address +
        "</span> </p>" +
        "<p><b>about:</b><span>" +
        item.about +
        "</span></p>" +
        "<p><b>latitude:</b><span>" +
        item.latitude +
        "</span> </p>" +
        "<p><b>longitude:</b><span>" +
        item.longitude +
        "</span> </p>" +
        "<p><b>channel:</b><span>" +
        item.channel +
        "</span> </p>" +
        "<p><b>registered:</b><span>" +
        item.registered +
        "</span> </p>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
  });
}

$("#filter").on("change", function () {
  var valor = $(this).val();
  var url = "";
  switch (valor) {
    case "menor-budget":
      url = "http://localhost:5000/api/v1/customer/search/budget/asc";
      break;

    case "maior-budget":
      url = "http://localhost:5000/api/v1/customer/search/budget/desc";
      break;

    case "asc":
      url = "http://localhost:5000/api/v1/customer/search/az";
      break;

    case "desc":
      url = "http://localhost:5000/api/v1/customer/search/za";
      break;
  }

  if (url != "") {
    $.ajax({
      dataType: "json",
      url: url,
      data: {},
    }).done(function (data) {
      console.log(data);
      insertItens(data);
    });
  }
});

$("#search-date").on("click", function () {
  var start = $('#date-start').val()
  var end = $('#date-end').val()
  if(start == '' || end == ''){
    alert('Por favor digite as duas datas!')
    return false;
  }

  console.log('teste')
  $.ajax({
    dataType: "json",
    url: 'http://localhost:5000/api/v1/customer/search/registered',
    data: {
      start_date: start,
      end_date: end
    },
  }).done(function (data) {
    console.log(data);
    insertItens(data);
  });
  return true 

});
