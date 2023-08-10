let sheetUrl =
  "https://docs.google.com/spreadsheets/d/1NMkwZDoi2gYti0rTHXRwh-TLFi3_k3FzFTCb4H-UdOA/edit?usp=sharing";
let sheetID = "1NMkwZDoi2gYti0rTHXRwh-TLFi3_k3FzFTCb4H-UdOA";

let API_KEY = 'AIzaSyAIijrEqSAK87cKwKPAmiS4-4vW6mPfVCU'
console.log('this is apikey', API_KEY)

  let sheetAsJSON = ` https://sheets.googleapis.com/v4/spreadsheets/1NMkwZDoi2gYti0rTHXRwh-TLFi3_k3FzFTCb4H-UdOA?includeGridData=true&key=${API_KEY}&alt=json`;

  const hypotenuse = Math.sqrt(window.innerHeight**2 + window.innerWidth**2)
  // console.log('this is hypotenus pre sq root', hypotenuse)
  // hypotenuse = Math.sqrt(hypotenuse)
  console.log('this is hypotenus post sq root', hypotenuse)

 console.log('screen height', window.innerHeight, 'screen width', window.innerWidth)
  console.log('this is sheetAsJSON', sheetAsJSON)

const render = (projectsArr) => {
  console.log("this is projectsArr", projectsArr);
  //this function will add the project to the dom
  // they will look amazing

  projectsArr.forEach((project) => {
    console.log();
    $(".gridContainer").append(`
         <div class="card">
            <img class="projectPics" src=${project.image} alt="">
            <div class="projTextArea">
                <h3 class="projTitle">${project.title}</h3>
                <p class="projDescription">${project.description}</p>
                <a href=${project.link} target="_blank"><button class="button">View Project</button></a>
            </div>
        </div>`);
  });
};

$.ajax({ url: sheetAsJSON }).then((data) => {
  console.log('this is all data',data);
  //plural                            singular
  const projects = data.sheets[0].data[0].rowData.slice(1).map((project) => {
    return {
      title: project.values[0].formattedValue,
      image: project.values[1].formattedValue,
      description: project.values[2].formattedValue,
      link: project.values[3].formattedValue,
    };
  });
  render(projects);
  console.log("this is filtered data -", data.sheets[0].data[0].rowData[1].values);
});

$("#menuArrow").on("click", (event) => {
  if ($(window).width() < 768) {
    $("nav").slideToggle();
    console.log("inside on.click");
  } else {
    $("nav").css("display", "block");
  }
});

const firstName = (name) => {
  return name.split(" ")[0];
};

$("#submitBtn").on("click", (event) => {
  if (event) {
    event.preventDefault();
    const $thankYou = $("<p>");
    $(".contactMe").append($thankYou);
    $thankYou.text(
      `Thank you ${firstName($("#nameBar").val())}, I will contact you soon!`
    );
    $("form").hide();
  }
});
