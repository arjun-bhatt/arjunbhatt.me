var button = document.getElementById("myBtn");
var answer = document.getElementsByClassName("w3-container")[0]
var img = document.getElementsByTagName("img")
var imgs = Array.from(img);
var q1imgs = Array();
var q4imgs = Array();
var radios = document.querySelectorAll('input[type="radio"]')
var radio_list = Array.from(radios);
var num_rad = Array();
var cat_rad = Array();
var q6a_rad = Array();
var text_as = Array.from(document.querySelectorAll('label#q6a'))
var scroll_loc = document.getElementsByClassName("footer");
var sample_text = document.getElementById("event_title_input");
var notes = document.getElementById("long_response").value

console.log(text_as)

for (index = 0; index < imgs.length; index++) { 
    if (imgs[index].id == "q1a"){
        q1imgs.push(imgs[index])
    };
    if (imgs[index].id == "q4a"){
        q4imgs.push(imgs[index])
    };
}

for (index = 0; index < radio_list.length; index++) { 
    if (radio_list[index].id == "num"){
        num_rad.push(radio_list[index])
    };
    if (radio_list[index].id == "cat"){
        cat_rad.push(radio_list[index])
    };
    if (radio_list[index].id == "q6a"){
        q6a_rad.push(radio_list[index])
    }
}

/* Modal business was copied/adapted (it started off copied, but so many edits after who knows) from w3schools */
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function change_modal(){
  console.log("hi!")
  var choices = $("input[type='radio']:checked").map(function(i, radio) {
    return $(radio).val();
  }).toArray();
  var slide_choices = $("input[type='range']").map(function(i, range){
      return $(range).val();
  }).toArray();

  /* taken from https://dzone.com/articles/ways-to-combine-arrays-in-javascript */
  var full_choices = [...choices, ...slide_choices];
  console.log(full_choices)

  console.log(choices);
  console.log("hi!)");
  var disp_answer;
  var disp_img = document.createElement("IMG");  

  if (Array.isArray(choices) && choices.length === 0){
      disp_answer = "Are you trying to break my quiz by not answering all the questions? ERROR ERROR"
      disp_img.setAttribute("src", "reacc.jpg")
  }

  else if (choices.includes("Pro") && choices.includes("nightlife")){
      console.log("pro+nightlife triggered");
      disp_answer = "You're a professional clubber wow!";
      disp_img.setAttribute("src", "proclub.jpg")
  }
  else if (choices.includes("Casual") && choices.includes("sports")){
      console.log("casual+sports triggered");
      disp_answer = "You're bad at sports lol!";
      disp_img.setAttribute("src", "badsport.jpg")
  }
  else{
      console.log("neither two options triggered");
      disp_answer= "you're neither a pro clubber nor bad at sports";
      disp_img.setAttribute("src", "unown.jpeg")
  }
  console.log("This is what should be displayed:")
  console.log(disp_answer)
  console.log("This is what answer is:")
  console.log(answer)

  /*disp_img.setAttribute("width", "304");
  disp_img.setAttribute("height", "228");
  disp_img.setAttribute("alt", "The Pulpit Rock");  */
  answer.innerHTML = disp_answer;
  answer.appendChild(disp_img);

  window.scrollBy(0, 10000)

  /*scrollIt(scroll_loc)*/

}
button.addEventListener("click",change_modal);


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }  

  if (text_as.includes(event.target)){ // so if we've clicked the label
      eval_radio(text_as[text_as.indexOf(event.target)]) //send that clicked label over to eval_radio
      text_as[text_as.indexOf(event.target)].previousElementSibling.click();
  }

  if (Array.from(img).includes(event.target)){
    var clicked_img = imgs[imgs.indexOf(event.target)];
    eval_radio(clicked_img.previousElementSibling);
    /* much thanks to this: https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript-jquery-or-vanilla */
    clicked_img.previousElementSibling.click()
  }

}

eval_radio = function(radio_clicked){
    console.log("eval_radio called!")
    var radio_set;
    if (radio_clicked.id == "num"){
        radio_set = num_rad;
    }
    if (radio_clicked.id == "cat"){
        radio_set = cat_rad;
        sample_text.value = radio_clicked.value + " event with me!";
    }
    if (radio_clicked.id == "q6a"){
        radio_set = text_as;
    }

    for (index = 0; index < radio_set.length; index++) {
        if (radio_set[index].classList.contains("not_chosen")){
            radio_set[index].classList.remove("not_chosen")
        }
        if (!(radio_set[index] == radio_clicked)){
            radio_set[index].classList.add("not_chosen")
            
            /*console.log("just added a not_chosen!")
            console.log("Hopefully", radio_set[index])
            console.log("is not equal to", radio_clicked, "!")*/
        }
        console.log(radio_set[index])
    }

}


/*copied from https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/ */
/* honestly, I don't even use this below function, but I want to focus on my sliders instead of cleaning this code so it'll stay */

function scrollIt(destination, duration = 200, easing = 'linear') {

    const easings = {
      linear(t) {
        return t;
      },
      easeInQuad(t) {
        return t * t;
      },
      easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic(t) {
        return (--t) * t * t + 1;
      },
      easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
      },
      easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
      },
      easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint(t) {
        return 1 + (--t) * t * t * t * t;
      },
      easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
      }
    };
  
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }
  
    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
  
      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }
  
      requestAnimationFrame(scroll);
    }
  
    scroll();
  }


var slider = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2")
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2")
output.innerHTML = slider.value;
output2.innerHTML = slider2.value;

slider.oninput = function() {
  output.innerHTML = compute_start(this.value);
}

slider2.oninput = function() {
    output2.innerHTML = compute_duration(this.value);
}

function compute_duration(val){
    var time;
    if (val == 0){
        return "No time at all :O"
    }
    if (val == 100){
        return "5 hours (max time b/c arjun gets impatient)"
    }
    else{
        var hrs = Math.floor((val * 3)/60);
        time = String(hrs) + " hours"
        var min = val*3 - hrs*60
        if (min === 0){
            time = time + "."
            return time
        }
        else{
            time = time + ", " + String(min) + " minutes."
            return time
        }
    }

}

function compute_start(val){
    var today = new Date();
    var time;
    var min = today.getMinutes();
        if (val == 0){
            if (min < 10){
                min = "0" + String(min);
            }
            else{
                min = String(min)
            }

            time = today.getHours() + ":" + min;
            return ("Right now (" + String(time) + ")");
        }
        if (val == 1){
            var qtr = Math.ceil(today.getMinutes() / 15) * 15;
            var hr = today.getHours();
            if (qtr == 60){
                hr = hr + 1;
                qtr = "00";
            }
            time = String(hr) + ":" + String(qtr)
            return ("In just a few minutes (" + String(time) + ")")
        }
        else{
            var added_hr = Math.floor(val/4)
            var added_min = (val % 4)*15
            hr = today.getHours();
            min = Math.floor(today.getMinutes() / 15) * 15;
            if (min + added_min >= 60){
                min = min - 60;
                hr = hr + 1
            }
            if (hr + added_hr >= 24){
                hr = hr - 24
                time = "Tomorrow at "
            }
            else{
                time = "";
            }
            if (min + added_min < 10){
                min = "0" + String(min + added_min);
            }
            else{
                min = String(min + added_min)
            }
            time = time + String(hr + added_hr) + ":" + min + ".";
            }
            
            return (time)
        }

