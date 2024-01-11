function testimonials() {

    return new Promise((resolve, reject) => {
        const connection = new XMLHttpRequest() // yg menghubungkan ke server
        connection.open("GET", "https://api.npoint.io/53801022d6a68d18b67b", true) // ambil data server JSON
        connection.onload = () => {
            if (connection.status === 200) {
                const response = JSON.parse(connection.response)
                resolve(response)
            } else {
                reject('Loading Data Error')
            }
        }
        // error validation
        connection.onerror = () => {
            reject("Network Error!")
        }
        
        connection.send()
    })
}

async function allTestimonial() {

    document.getElementById("testimonial-content").innerHTML = "<h2>LOADING...</h2>"
    
    const contents = await testimonials()

    let testimonialHTML = ""
    
    contents.forEach((value) => {
        testimonialHTML +=
        `
            <div class="testimonial-list">
                <img src="${value.image}" alt="Image" class="image">
                <div class="description">
                    <p>${value.description}</p>
                </div>
                <div class="author">
                    <p class="author-rating">${value.rating}</p>
                    <p class="author-name">${value.author}</p>
                </div>
            </div>
        `
    });
    
    document.getElementById("testimonial-content").innerHTML = testimonialHTML
    
}

async function filterTestimonial(rating) {
    
    document.getElementById("testimonial-content").innerHTML = "<h2>LOADING...</h2>"

    const contents = await testimonials()

    const filteredTestimonial = contents.filter((value) => value.rating === rating)
    if (!filteredTestimonial.length) {
        return document.getElementById("testimonial-content").innerHTML = `<h2>Rating "${rating}" not found</h2>`
    }

    const filteredTestimonialHTML = filteredTestimonial.map((value) => {
        return `
                <div class="testimonial-list">
                    <img src="${value.image}" alt="Image" class="image">
                    <div class="description">
                        <p>${value.description}</p>
                    </div>
                    <div class="author">
                        <p class="author-rating">${value.rating}</p>
                        <p>${value.author}</p>
                    </div>
                </div>
        `
    })

    document.getElementById("testimonial-content").innerHTML = filteredTestimonialHTML.join(" ")
}

allTestimonial()