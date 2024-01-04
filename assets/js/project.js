const projects = []

function addProject(e) {
    e.preventDefault()
    const projectName = document.getElementById('project-name').value
    const description = document.getElementById('description').value
    const starDates   = document.getElementById('start-date').value
    const endDates    = document.getElementById('end-date').value
    const nodejs      = document.getElementById('nodejs').value
    const vuejs       = document.getElementById('vuejs').value
    const reactjs     = document.getElementById('reactjs').value
    const golang      = document.getElementById('golang').value
    const img         = document.getElementById('project-image').files
    const linkImage   = URL.createObjectURL(img[0])
    
    const date      = new Date()
    const year      = date.getFullYear()
    const starDate  = new Date(starDates)
    const endDate   = new Date(endDates)


    let duration  = (endDate - starDate) / (1000 * 60 * 60 * 24)   
    
    let durationResult = ''
    if(duration > 30){
        duration = Math.floor(duration / 30)
        durationResult = `${duration} Bulan`
    }else{
        durationResult = `${duration} Hari`
    }

        let iconTech = ''

        if (nodejs.checked) {
            iconTech += `<i class="fa-brands fa-node-js"></i>`
        }
        
        if (vuejs.checked) {
            iconTech += `<i class="fa-brands fa-vuejs"></i>`
        }
        if (reactjs.checked) {
            iconTech += `<i class="fa-brands fa-react"></i>`
        }

        if (golang.checked) {
            iconTech += `<i class="fa-brands fa-golang"></i>`
        }
    

    const project = {
        projectName,
        duration,
        durationResult,
        year,
        description,
        nodejs,
        vuejs,
        reactjs,
        golang,
        linkImage,
        iconTech,
    }
    
    projects.unshift(project)
    renderProject()

}

function renderProject() {
    let html = ''
    for (let index = 0; index < projects.length; index++) {
        html += `
            <div class="project-list-item">
                <div class="project-image">
                    <img src="${projects[index].linkImage}" alt="${projects[index].projectName}" />
                </div>
                <div class="project-content">
                    <h3>
                        <a href="project-detail.html" target="_blank">${projects[index].projectName} - ${projects[index].year} </a>
                    </h3>
                    <div class="detail-project-content">
                        Durasi : ${projects[index].durationResult} 
                    </div>
                    <p>
                        ${projects[index].description}
                    </p>
                    <div class="icon">
                        ${projects[index].iconTech}
                    </div>
                    <div class="btn-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-post">Delete</button>
                    </div>
                </div>
            </div>
        `
    }

    document.getElementById("contents").innerHTML = html
}

renderProject()
