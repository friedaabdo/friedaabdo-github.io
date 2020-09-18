

let sheetUrl = 'https://docs.google.com/spreadsheets/d/1NMkwZDoi2gYti0rTHXRwh-TLFi3_k3FzFTCb4H-UdOA/edit?usp=sharing'
let sheetID = '1NMkwZDoi2gYti0rTHXRwh-TLFi3_k3FzFTCb4H-UdOA'
let sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/1NMkwZDoi2gYti0rTHXRwh-TLFi3_k3FzFTCb4H-UdOA/od6/public/values?alt=json'

const render = (projectsArr) => {
    console.log('this is projectsArr', projectsArr)
    console.log('will this console the titles', projectsArr[0]) 
    //this function will add the project to the dom
    // they will look amazing
  
  
  
    projectsArr.forEach(project => {
        console.log()
         $('.gridContainer').append(`
         <div class="card">
            <img class="projectPics" src=${project.image} alt="">
            <div class="projTextArea">
                <h3 class="projTitle">${project.title}</h3>
                <p class="projDescription">${project.description}</p>
                <a href=${project.link} target="_blank"><button class="button">View Project</button></a>
            </div>
        </div>`)
         
         
         


     })
    
}






$.ajax({url:sheetAsJSON})
    .then( data => {
        console.log(data)
            //plural                            singular
        const projects = data.feed.entry.map( project => {
            return {
                title: project.gsx$title.$t,
                image: project.gsx$image.$t,
                description: project.gsx$description.$t,
                link: project.gsx$link.$t
            }
        })
        render(projects)
        console.log('this is data -', data.feed.entry[0].gsx$title.$t)
        
        
        

    })



$('#menuArrow').on('click', (event) => {
    if($(window).width() < 768) {
        $('nav').slideToggle()
        console.log('inside on.click')
    } else {
        $('nav').css('display', 'block')
    }
    
})


    

const firstName = (name) => {
    return name.split(' ')[0]
}

$('#submitBtn').on('click', (event) => {
    if(event){
        event.preventDefault()
        const $thankYou = $('<p>')
         $('.contactMe').append($thankYou)
         $thankYou.text(`Thank you ${firstName($('#nameBar').val())}, I will contact you soon!`)
    $('form').hide()
    }
    
})

