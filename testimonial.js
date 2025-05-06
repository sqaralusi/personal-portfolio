const testimonials = [
    {
        text: "Shereen is able to advocate for herself and what she needs and communicates well with her professors.",
    },
    {
        text: "Shereen is more than prepared to begin her higher education career, and I haven’t encountered a more dedicated student to date.",
    },
    {
        text: "She goes above and beyond in her work, and is consistent in her performance.",
    },


    {
        text: "Shereen is a wonderful, genuine young woman with much to offer the world.",
    },
    {
        text: "She is committed to her beliefs and to sharing who she is and what she has with others.",
    },
    {
        text: "When making decisions regarding important matters, Shereen is completely devoted. Her integrity is an extremely important part of her life.",
    },
    {
        text: "One thing that makes her special is her unwavering decision to uphold her moral character and to maintain her integrity at all times.",
    },
];

function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <p>"${testimonial.text}"</p>
        </div>
    `;
}


function populateTestimonials() {
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    for (let i = 0; i < testimonials.length; i++) {
        const card = createTestimonialCard(testimonials[i]);
        if (i < 4) {
            row1.innerHTML += card;
        } else {
            row2.innerHTML += card;
        }
    }

    // Duplicate cards for seamless scrolling
    row1.innerHTML += row1.innerHTML;
    row2.innerHTML += row2.innerHTML;
}

// Call the function when the page loads
window.addEventListener('load', populateTestimonials);

// Pause animation on hover
const rows = document.querySelectorAll('.testimonial-row');
rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.animationPlayState = 'paused';
    });
    row.addEventListener('mouseleave', () => {
        row.style.animationPlayState = 'running';
    });
});