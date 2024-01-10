const testimonials = [
    {
        author: "Roronoa Zoro",
        description: "Jika aku bahkan tidak bisa melindungi kapten, ambisi apapun tidak ada artinya!",
        image: "https://w.wallhaven.cc/full/45/wallhaven-45gk65.jpg",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        author: "Monkey D. Luffy",
        description: "Aku akan menghancurkan siapa saja yang menyakiti teman-temanku.",
        image: "https://w.wallhaven.cc/full/0p/wallhaven-0pkxvj.jpg",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        author: "Vinsmoke Sanji",
        description: "Jangan harap aku akan memaafkanmu jika kau menyakiti seorang temanku.",
        image: "https://w.wallhaven.cc/full/j3/wallhaven-j38x15.png",
        rating: "⭐⭐⭐⭐"
    },
    {
        author: "Brook",
        description: "Ketika kamu merasa takut maka harus menyanyikan sebuah lagu untuk menenangkan pikiran.",
        image: "https://w.wallhaven.cc/full/kx/wallhaven-kxr73q.jpg",
        rating: "⭐⭐"
    },
    {
        author: "Tony Chopper",
        description: "Aku bukan manusia atau rusa, aku adalah salah satu pejuang bajak laut yang baik!",
        image: "https://w.wallhaven.cc/full/0w/wallhaven-0w5r9q.jpg",
        rating: "⭐⭐"
    },
    {
        author: "Usopp",
        description: "Karena satu tujuan dan satu impian, membuat kita berada di sini melintasi berbagai masalah.",
        image: "https://w.wallhaven.cc/full/e7/wallhaven-e7ox9w.png",
        rating: "⭐⭐"
    },
    {
        author: "Franky",
        description: "Namaku “Cyborg” Franky! Seranganmu tidak berarti apa-apa bagi tubuh bajaku!",
        image: "https://cdn.idntimes.com/content-images/duniaku/post/20200824/franky-one-piece-488432631fd987199787c01f9ab6266a.jpg",
        rating: "⭐⭐⭐⭐"
    },
    {
        author: "Nami",
        description: "Aku anggota paling cerdas dalam kelompok Topi Jerami.",
        image: "https://w.wallhaven.cc/full/m9/wallhaven-m9p311.png",
        rating: "⭐⭐"
    },
    {
        author: "Nico Robin",
        description: "Jika kamu miliki waktu yang sulit, jangan lupa tertawa.",
        image: "https://w.wallhaven.cc/full/4y/wallhaven-4yoqo7.jpg",
        rating: "⭐⭐⭐⭐"
    },
]

function allTestimonial() {
    let testimonialHTML = ""
    
    testimonials.forEach((value) => {
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

function filterTestimonial(rating) {

    const filteredTestimonial = testimonials.filter((value) => value.rating === rating)
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