class Testimonial {
    constructor(image, description, author){
        this.image       = image
        this.description = description
        this.author      = author
    }
}

class TestimonialContent extends Testimonial {
    htmlTestimoni() {
        return `
                    <div class="testimonial-list">
                        <img src="${this.image}" alt="Image" class="image">
                        <div class="description">
                            <p>${this.description}</p>
                        </div>
                        <div class="author">
                            <p>${this.author}</p>
                        </div>
                    </div>
                `
    }   
}


const testimoni1 = new TestimonialContent("https://c4.wallpaperflare.com/wallpaper/673/950/395/anime-one-piece-zoro-roronoa-wallpaper-preview.jpg", "Jika aku bahkan tidak bisa melindungi kapten, ambisi apapun tidak ada artinya!", "Roronoa Zoro")
const testimoni2 = new TestimonialContent("https://c4.wallpaperflare.com/wallpaper/343/112/41/one-piece-monkey-d-luffy-anime-wallpaper-preview.jpg", "Aku akan menghancurkan siapa saja yang menyakiti teman-temanku.", "Monkey D. Luffy")
const testimoni3 = new TestimonialContent("https://c4.wallpaperflare.com/wallpaper/887/246/347/anime-one-piece-sanji-one-piece-wallpaper-preview.jpg", "Jangan harap aku akan memaafkanmu jika kau menyakiti seorang temanku. ", "Vinsmoke Sanji")

const testimonials =  [testimoni1,testimoni2, testimoni3,]
let testimonialHTML = ""

for (let i = 0; i < testimonials.length; i++) {
    testimonialHTML += testimonials[i].htmlTestimoni()    
}

document.getElementById("testimonial-content").innerHTML = testimonialHTML