if(window.location.pathname === "/admin") {
  $('.modal-container').css('display', 'block');
  $('body').css('overflow', 'hidden');
  $('.close .modal').focus();
}
$(document).ready(function(){
  showModalOnFirstLoad();
	enabledDisableCompareBtn();
  preventSpam();
  if(window.location.pathname === "/") {
    initMaps();
  }
});

var formSubmitReady;
function preventSpam() {
  formSubmitReady = false;
  var formSubmitInterval = setInterval(function(){
      formSubmitReady = true;
      console.log(formSubmitReady);
      clearInterval(formSubmitInterval);
  },10000)
}

/* ------------------ Google Analytics Goal for sign up button -------------------*/
$('a button:contains(\'Sign Up Now\')').on('click',function(){
  //send to event details to Google to track the sign up goal
  // ga('send', {
  // hitType: 'event',
  // eventCategory: 'signUp',
  // eventAction: 'click',
  // eventLabel: 'sign up button click'
  // });

  (function handleOutboundLinkClicks(event) {
    ga('send', 'event', {
      eventCategory: 'Outbound signUp Link',
      eventAction: 'click',
      eventLabel: event.target.href,
      value: 1,
      transport: 'beacon'
    });
  })(event);
});

$('')

/* ----------- some UI stuff (smooth scrolling bookmarks) ---------------- */
$("#section-two > div.center-column.down-arrow > a, .multi-box-column a[href='#section-two']").click(function(){
	$('html, body').animate({
    	scrollTop: $("#section-two").offset().top
	}, 500);
});

$("#section-three > div.center-column.down-arrow > a").click(function(){
  $('html, body').animate({
      scrollTop: $("#section-three").offset().top
  }, 500);
});

$("#section-four > div.center-column.down-arrow > a").click(function(){
  $('html, body').animate({
      scrollTop: $("#section-four").offset().top
  }, 500);
});

/* --------------------- compare page -------------------------- */

//Dynamically add a new column to the table
$('#add').click(function(){
  var closeIndex = $(this).index(".close");
  if($(".close").length < 3){
    $("th:last-of-type").clone().appendTo("tr:first-of-type");
    /* $("tr td:last-of-type").clone().appendTo("tr:last-of-type"); */
   	$('table').find('tr').each(function(){
   	console.log(closeIndex);
        $(this).find('td').eq(closeIndex-1).after("<td>A new item</td>");
   });
    $('#slide-nav').toggleClass("menu-container menu-container-active");
  }else {
    //this block is not used but is for adding more services directly to compare page
    //alert('Cannot compare more than 3\nPlease remove one first');
    $('.modal-container').css('display', 'block');
    $('.modal-head h3').text('Alert');
    $('.modal-body p').text('Cannot compare more than 4\nPlease remove one first');
    $('#slide-nav').toggleClass("menu-container menu-container-active");
  }
});

//Remove from compare table - removes the entire column when user clicks the X button
$(document).on('click',".logo-container .close", function(event){
  var closeIndex = $(this).index(".logo-container .close");
  closeIndex++;
  console.log(closeIndex)
  if($(".logo-container .close").length > 2){
    //first remove the table heading with the selected index
    $("th:nth-of-type(" + closeIndex + ")").remove();
    $("tr:even td:nth-of-type(" + closeIndex + ")").remove();
    
    //this will make sure when browser back button is used after user removed a service, 
    //selected services on list page will reflect the remove one
    //get the id for the column we want to remove it's stored in the data-id attribute of the close link
    var removedId = $(this).data('id');
    var newSessionObj = getSessionObj();
    var re = /"/g;
    removedId = removedId.replace(re,'');
    console.log("Removing "+removedId);
    newSessionObj.selSrv = newSessionObj.selSrv.filter(function(value){
      //console.log(removedId, value);
      return removedId !== value;
    });
    console.log("After Removing: "+newSessionObj.selSrv);
    setSessionObject(newSessionObj);
  }else{
    //if user tries to remove when only two are left
    $('.modal-container').css('display', 'block');
    $('.modal-head h3').text('Alert');
    $('.modal-body p').text('Cannot compare less than two');
  }
});

/*----------------------------------------------- menu slider ------------------------------------*/
// (function(){
//   if(window.location.pathname === "/") {
//     $('.top-nav').css('display', 'none');
//     var lastScrollTop = 0;
//     $(window).on('scroll', function(){
//       var st = $(this).scrollTop();
//       if (st > lastScrollTop){
//         $('.top-nav').slideDown('fast');
//         // downscroll code
//       } else {
//         // upscroll code
//         // if($('.top-nav').css('display') == 'block') {
//           $('.top-nav').slideUp('fast');
//         // }
//       }
//       // if(st > 300) {
//       //   console.log("after 100")
//       //   $('.top-nav').slideUp('fast');
//       // }
//     lastScrollTop = st;
//     });
//   }
// })();
//find the scrollTop and the offset elem. has from top. then  we can calculate the distance relative to that element
//when the menu btn is close to the white section (section-two) change it to blue
if(window.location.pathname === "/") {
  $(window).on('scroll', function () {
      var scrollTop     = $(window).scrollTop(),
          elementOffset = $('#section-two').offset().top,
          distance      = (elementOffset - scrollTop);
      if(distance < 40 && distance > -870) {
        $("#openBtn > svg > rect").attr("fill", "#00BCD4")
      }else {
        $("#openBtn > svg > rect").attr("fill", "white")
      }
  });
}

//call this function on page load
(function setActiveNavLink() {
  var page = window.location.pathname;
  if(page !== "/") {
    page = page.replace("/","");
    page = page.replace(page.charAt(0),page.charAt(0).toUpperCase());
  }
  if(page === "/"){
    $(".desktop-nav li:contains(Home)").addClass("desktop-selected");
    $("#slide-nav > .nav-bar li:contains(Home)").addClass("selected");
  }
  if(page === "List"){
    $(".desktop-nav li:contains(Compare)").addClass("desktop-selected");
    $("#slide-nav > .nav-bar li:contains(Compare)").addClass("selected");
  }
  $("#slide-nav > .nav-bar li:contains("+page+")").addClass("selected");
  $(".desktop-nav li:contains("+page+")").addClass("desktop-selected");
})();

$('#closeBtn').click(function(){
  $("#openBtn").show();
  $("#closeBtn").hide();
  $('#slide-nav').toggleClass("menu-container menu-container-active");
  //$('body').css("overflow", "scroll");
});

$('#openBtn').click(function(e){
  /* console.log(e.target.tagName) */
      $("#openBtn").hide();
      $("#closeBtn").show();
      $('#slide-nav').toggleClass("menu-container menu-container-active");
     // $('body').css("overflow", "hidden");
//this is allow user to click outside of the slider window to close it. User can also close clicking the X
$(document).click(function(e) { //set event handler for click function and capture event param 
    console.log(e.target.tagName)
    if(e.target.id !== 'openBtn' //we want to toggle(close) the slide menu for any event not related to slide menu
      && e.target.tagName !== 'BUTTON' && e.target.tagName !== 'svg' 
      && e.target.tagName !== 'rect' && e.target.tagName !== 'line' 
      && e.target.tagName !== 'IMG' && e.target.tagName !== 'SELECT'
      && e.target.tagName !== 'OPTION' && e.target.tagName !== 'A'  && e.target.tagName !== 'LI' ){ // don't close the slide menu for events: menuBtn, form, INPUT & BUTTON
      $('#slide-nav').removeClass("menu-container menu-container-active").addClass("menu-container");
      $("#closeBtn").hide();
      $(".dropdownContent").hide();
      $("#openBtn").show();
    }
  });
});

$('.detail-page-dropdown').on('click', function(){
  var link = $(this).val();
  //console.log(x);
  if(link !== "more details")
    window.location="/detail/"+link;
});

//this will allow user to use esc key to close the menu slider
$(document).keydown(function(event) {
  var ESC_KEYCODE = 27;
  if (event.keyCode === ESC_KEYCODE && $('#slide-nav').attr('class', 'menu-container-active')) {
    $('#slide-nav').toggleClass("menu-container menu-container-active");
    $("#closeBtn").hide();
    $("#openBtn").show();
  }
});


/*-------------- dropdown menu for detail pages -------------------------*/

$(".dropdownBtn").on('click', function(event) {
  $(".dropdownContent").toggle();
  // console.log(event.target);
  // console.log(event.target.children[0]);
  // if(event.target.children[0].tagName !== "div.dropdownContent") {
  //   $(".dropdownContent").hide();
  // }
});


/*----------------------------- End menu slider ------------------------------------*/

/* --------------------------------- LIST PAGE --------------------- */

//maybe these shouldn't be in global namespace 
var restoredSession;

var srvObj = {
  count: 0, 
  selSrv: []
};

function setSessionObject(obj){
  return sessionStorage.setItem('session', JSON.stringify(obj));
};

function getSessionObj(){
  return restoredSession = JSON.parse(sessionStorage.getItem('session'));
};

//this will show the modal window on list page when session storage is empty
function showModalOnFirstLoad(){
if(window.location.pathname === '/list' && sessionStorage.length === 0){
    $('.modal-container').css('display', 'block');
    $('.modal-head h3').text('Let\'s Get Started...');
    $('.modal-body p').text('Use the check boxes to select services to compare, you can select up to 4 services. When you\'re finished, click compare at the top');
    $('body').css('overflow', 'hidden');
    return true;
  }
};

//this will show the count next to the compare button
function showCompareCount(){
  if(srvObj.selSrv.length > 1){
    $('#compareCounter').show().text(srvObj.selSrv.length);
    return true;
  }else{
    $('#compareCounter').hide();
    return false;
  }
}

//this will check to see if the selected services is 2 or more then enable the compare button
function enabledDisableCompareBtn(){
  showCompareCount();
  if(srvObj.selSrv.length > 1){
    $('#goToComparePage').prop('disabled',false);
    return true;
  }else
    $('#goToComparePage').prop('disabled',true);
    return false;
};

function addRemoveService(serviceName){
  if(srvObj.selSrv.includes(serviceName)){
    var index = srvObj.selSrv.indexOf(serviceName);
    if(index >= 0){
      srvObj.selSrv.splice(index, 1);
    }
  }else{
    srvObj.selSrv.push(serviceName);
  }
    //console.log(srvObj.selSrv);
    //srvObj.selSrv = serviceList;
    setSessionObject(srvObj);
    return srvObj;
};

//this will handle the user change event on check boxes
//it will set the count property on the object (srvObj)
//it will call enableDisableCompareBtn function to check if the compare button should be enabled
//it will also call function addRemoveService to appropriately add/remove the selected service from selSrv array in object (srvObj)
$('input[type=checkbox]').on('change', function(){
  //console.log(srvObj.selSrv.length+1);
	if($(this).is(':checked')){
    //user checked a box
		srvObj.count++;
    addRemoveService(this.parentNode.id);
    enabledDisableCompareBtn();
    //this part controls how many checkboxes user can select
		if(srvObj.selSrv.length < 5){
      //set a border around the service box to notify user it has been selected
			$(this).closest('.box').css('border', '3px solid rgba(0, 188, 212, .8)');//;  rgba(55, 66, 75, .7)
		}else{
			srvObj.count--;
      addRemoveService(this.parentNode.id);
      enabledDisableCompareBtn();
      $('.modal-container').css('display', 'block');
      $('.modal-head h3').text('Alert');
      $('.modal-body p').text('cannot compare more than 4 at a time');
			$(this).prop('checked', false);
		}
	}else{
		srvObj.count--;
    addRemoveService(this.parentNode.id);
    enabledDisableCompareBtn();
		$(this).closest('.box').css('border', '');
	}
});

//handles the close event for modal windows
$('.close.modal').on('click', function(){
  $('.modal-container').css('display', 'none');
  $('body').css('overflow','scroll');
});


/* ----------------------------------------------SEND JSON DATA TO COMPARE PAGE --------------------------------------- */

$('#goToComparePage').on('click', function(){
  $.ajax({
    type: 'POST',
    url: '/compare',
    data: srvObj
  }).done(function(results, textStatus){
    console.log("Ajax returned: " + textStatus);
    $.ajax({
      type: 'GET',
      url: '/compare'
    }).done(function(){
      window.location = '/compare';
    });
  }).fail(function(jqXHR, textStatus, err){
    console.log("Not Sent " + textStatus + " " + err);
  });
});


/* ---------------------------------------------- SAVE SELECTED SERVICES IN SESSION  --------------------------------------- */
//var sessData = sessionStorage.getItem('sessObj');
$(window).on("load",function(){
  if(this.location.pathname === '/list'){
    console.log("Session Data is " + JSON.stringify(getSessionObj()));
    JSON.stringify(getSessionObj());
    if(restoredSession && restoredSession.selSrv[0]){
      console.log("session is restored");
      srvObj = restoredSession;
      for(var i = 0; i < srvObj.selSrv.length; i++){
        $("#listChk-"+srvObj.selSrv[i]).prop('checked', true).closest('.box').css('border', '3px solid rgba(0, 188, 212, .8)');
      }
      enabledDisableCompareBtn();
    }
  }
});

/* ---------------------------------------------- Send Contact Form Data --------------------------------------- */
var Contact_Form = (function(){
  var error = {
    field: "",
    message: ""
  };

  function formSubmit(name, email, message, event) {
      showLoadingImage();
      var formData = {
        name: name,
        email: email,
        message: message
      }
      $("#contact-form").trigger("reset");
      $.ajax({
        type: 'post',
        url: '/contact',
        data: formData
      }).done(function(result) {
        console.log(result.header+result.body);
        $('.loader loader--style2').remove();
        showSuccessMessageModal(result);
        preventSpam();
      }).fail(function(jqXHR, textStatus, err) {
        console.log("Not Sent " + textStatus + " " + err);
      });
  }

  function showLoadingImage() {
    $('.modal-container').css('display', 'block');
    $('.modal-head h3').html('Sending...');
    $('.modal-body p').text('');
    $('.modal-body p').append('\
    <div class="loader loader--style2" title="1">\
    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
     width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\
    <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">\
    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>\
    </path></svg></div>');
    $('body').css('overflow', 'hidden');
  }

  //this will show the modal window on list page when session storage is empty
  function showSuccessMessageModal(msg){
      $('.modal-container').css('display', 'block');
      $('.modal-head h3').text(msg.header);
      $('.modal-body p').text(msg.body);
      $('body').css('overflow', 'hidden');
      return true;
  };
  function sendError(error) {
    //alert("Error in field " + error.field + " " + error.message)
    // $("#validation-summary").append("<li>Error in " + error.field + " field:  " + error.message+"</li>");
    $("#error-message-"+error.field).show();
    $("#form-"+error.field).addClass("input-invalid");
    $("#form-"+error.field).focus();
    $("#error-message-"+error.field).text(error.message);
  }

  function formValidateName(name, email, message, event, error) {
    if(name === '') {
      error.field = "name";
      error.message = "Please enter your name"
      sendError(error);
    }else if (isNaN(name) === false) {
      error.field = "name";
      error.message = "Please enter your name, no numbers...";
      sendError(error);
      return false;
    }
    formValidateEmail(name, email, message, event, error);
    return true;
  }
  function formValidateEmail(name, email, message, event, error) {
    var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
    var pattern = new RegExp(re);
    var result = pattern.exec(email);
    if(!result) {
      error.field = "email";
      error.message = "please enter a valid email";
      sendError(error);
      return false;
    }
    formValidateMessage(name, email, message, event, error);
    return true;
  }
  function formValidateMessage(name, email, message, event, error) {
    if(message === '' || isNaN(message) === false) {
      error.field = "message";
      error.message = "Please enter a message";
      sendError(error);
      return false;
    }
    formSubmit(name, email, message, event, error);
    return true;
  }

  function validateCaptcha(){
    var captcha_response = grecaptcha.getResponse();
    if(captcha_response.length == 0 || grecaptcha == undefined ){
        // Captcha is not Passed
        return false;
    }else{
      $.post('/captchaTest',{'response':captcha_response},function(response){
        if(response.responseCode === 0){
          console.log("Captcha Passed");
          grecaptcha.reset();
          return true;
        }else {
          return false;
        }
      });
      return true;
    }
  }

  return {
    validateForm: function(name, email, message, event) {
      formValidateName(name, email, message, event, error);
    },
    validateCaptcha: function() {
      if(validateCaptcha() === true){
        return true;
      }else {
        return false;
      }
    }
  }
})();

$("#contact-form").submit(function(event) {
  event.preventDefault();
  $("#validation-summary").html("");
  $("#error-message-name").text("");
  $("#error-message-email").text("");
  $("#error-message-message").text("");
  $("#form-name").removeClass("input-invalid");
  $("#form-email").removeClass("input-invalid");
  $("#form-message").removeClass("input-invalid");
  var name = $("#form-name").val();
  var email = $("#form-email").val();
  var message = $("#form-message").val();
  //if(Contact_Form.validateCaptcha() === true) {
  if(formSubmitReady){
    ga('send', 'event', 'Contact Form', 'submit', {
      hitCallback: function() {
        // alert("form submitting")
        Contact_Form.validateForm(name, email, message, event);
      }
    });
      } else {
        $('.modal-container').css('display', 'block');
        $('.modal-head h3').text("Just a sec...");
        $('.modal-body p').text("Please wait 10 seconds before submitting");
        $('body').css('overflow', 'hidden');
  }
  //}else{
    //alert("Captcha not valid");
  //}
});
/* ---------------------------------------------- Google Maps --------------------------------------- */

function initMaps() {
  console.log("starting maps")
  var center = new google.maps.LatLng(37.775,-122.42);
  var mapOptions = {
    zoom: 11,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var contentString = '<div><h2>Testing Info Windows</h2></div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var markers = [];
  var imgLogo = function(carShareName) { 
    switch (carShareName) {
      case 'Getaround':
        return '<span id="mapsLogo"><img src="/images/assets/logos/getaround.png" alt="getaround.com" /></span>'
        break;
      case 'Zipcar':
        return '<span id="mapsLogo"><img src="/images/assets/logos/zipcar.png" alt="zipcar.com" /></span>'
        break;
      case 'City CarShare':
        return '<span id="mapsLogo"><img src="/images/assets/logos/cityshare.png" alt="gocarma.com" /></span>'
        break;
      case 'Turo':
        return '<span id="mapsLogo"><img src="/images/assets/logos/turo.png" alt="turo.com" /></span>'
        break;
    }
  };
  function placeMarker(data, i) {
      var coords = data[i].geom.coordinates;
      var latLng = new google.maps.LatLng(coords[1],coords[0]);
      // console.log(coords[1],coords[0]);
      // console.log(data[i].carshare_organization)
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
      });
      google.maps.event.addListener(marker, 'click', function(){
        infowindow.close(); // Close previously opened infowindow
        infowindow.setContent( "<div id='infowindow'>" + imgLogo(data[i].carshare_organization) + data[i].carshare_organization + "</div>");
        infowindow.open(map, marker);
      })
    markers.push(marker)
    // console.log(markers)
    var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }

  $.ajax({
      type: "GET",
      url: "https://data.sfgov.org/resource/3an4-9rx4.json",
      data: {
        // "$limit" : 20,
        "$$app_token": "HGo4VdNPrnl94eNBpVtebfVJO"
      },
      dataType: "json",
      success: function(data){
        for(var i=0; i < data.length; i++){
          placeMarker(data, i);
        }
      }
    }).fail(function(jqXHR, status) { //if any error set an alert 
      alert("error: " + status);
    });

}