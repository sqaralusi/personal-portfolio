const services = [
    {
        id: 'web-development',
        title: 'The Future of Professional Skills in an AI-Dominant Workplace',
        description: 'TEAM PRESENTATION',
        details: 'My team and I explored how AI is reshaping the job market, identified essential future-proof skills, and proposed strategies for adaptation. I coordinated our efforts, ensuring clarity of roles and a cohesive, engaging presentation. Presenting to peers strengthened my communication, collaboration, and adaptability in an evolving professional landscape.',
        pdfUrl: 'Assets/Images/Works/The Future of Professional Skills in an AI-Dominant Workplace.pdf',
        imageUrl: 'Assets/Images/screenshot.png',
    },
    {
        id: 'vaccine-hesitancy',
        title: 'Addressing Vaccine Hesitancy in the Digital Age',
        description: 'Our group conducted a qualitative study on vaccine hesitancy in India, analyzing how Twitter, Instagram, and YouTube influence public sentiment through platform-specific features. <p> By examining user demographics, content trends, and sentiment analysis, we identified how each platform contributes to the spread of misinformation. The findings offer insights for improving digital health communication and addressing vaccine misinformation globally. Our research highlights the need for platform-specific strategies to counter misinformation and build public trust in health campaigns.',
        pdfUrl: 'Assets/Images/Addressing Vaccine Hesitancy in the Digital Age.pdf',
        imageUrl: 'Assets/Images/vaccine.png'
    },
    {
        id: 'healing-hands',
        title: '"Her Healing Hands" - An Anthology',
        description: 'Her Healing Hands was more than just a project; it celebrated the groundbreaking contributions of women in medicine. <p> Through this anthology, pioneers who have transformed healthcare and medical research were honored, highlighting how their achievements continue to inspire progress, inclusivity, and future generations. <p> The project not only recognized the historical barriers women have overcome but also shed light on the diverse and innovative ways they have shaped modern healthcare.',
        pdfUrl: 'Assets/Images/Works/Her Healing Hands (1).pdf',
        imageUrl: 'Assets/Images/Works/overview.png',
    },
    {
        id: 'data-tracking',
        title: 'Data Tracking Activity',
        description: 'In this activity, I collected and analyzed daily step count data using the iPhone Health app for a month. While the app generally provided reliable results, I became aware of limitations, such as times I didn’t have my phone with me, which could skew accuracy. Logging the data in a clean, sequential format revealed a wide range from a low of 1,006 steps (Day 13) to a high of 13,945 steps (Day 30), highlighting daily variability and helping to identify both typical and anomalous days. <p> To better understand the data, I created a scatter plot that visually revealed patterns not obvious in raw numbers. Peaks on Days 14, 29, and 30 suggested bursts of high activity, while Days 5, 13, and 27 reflected significantly lower movement. By analyzing the data, I found that activity levels fluctuated widely and were influenced by situational factors, with extreme highs and lows affecting the overall trend and average.',
        imageUrl: 'Assets/Images/Works/data.png',
    },
    {
        id: 'email-activity',
        title: 'Email Activity',
        description: 'In this assignment, I provided feedback on an email draft written by my supervisor, Suzanne Padilla, regarding the development of a new office policy. <p> I provided detailed feedback using tracked changes in a Word document, pointing out areas where the message could be condensed, clarified, and formatted more effectively. I also restructured the email to improve the flow of ideas, emphasized clarity, and removed jargon that could confuse the recipients. <p> In addition to the feedback, I rewrote the email in a clearer and more concise format while maintaining the key ideas. This experience highlighted the importance of adjusting communication to fit the audience, ensuring the tone and content align with business goals.',
        pdfUrl: 'Assets/Images/Works/Track Changes (1).pdf',
        imageUrl: 'Assets/Images/Works/mail.png',

    },
    {
        id: 'feedback-activity',
        title: 'Feedback',
        description: 'This section highlights the feedback exchanged during BCOM 3300. I provided constructive critiques on the communication of my peers, focusing on clarity and engagement, and received valuable input that helped me strengthen my own skills. The experience reinforced the value of feedback in professional growth. <p>  Through peer reviews and class discussions, I gained new perspectives on how to tailor messages for different audiences. This process also taught me how to give feedback that is both honest and supportive.',
        pdfUrl: 'Assets/Images/Works/Feedback.pdf',
        imageUrl: 'Assets/Images/feedback-icon-style-free-vector.jpg'
    },
];

function createAccordionItem(service, index) {
    return `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                    ${service.title}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#services-accordion">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-md-6">
                            ${service.description ? `<p>${service.description}</p>` : ''}
                            ${service.details ? `<p>${service.details.replace(/\n/g, '<br>')}</p>` : ''}
                        </div>
                        <div class="col-md-6 mt-3 mt-md-0">
                            ${service.imageUrl ? `<img src="${service.imageUrl}" alt="${service.title}" class="service-image img-fluid">` : ''}
                        </div>
                    </div>
                    ${service.pdfUrl ? `
                        <div class="mt-3">
                            <embed src="${service.pdfUrl}" type="application/pdf" width="100%" height="500px" />
                        </div>` : ''}
                </div>
            </div>
        </div>
    `;
}

function initAccordion() {
    const accordionContainer = document.getElementById('services-accordion');
    if (accordionContainer) {
        accordionContainer.className = 'accordion';
        accordionContainer.innerHTML = services.map((service, index) => createAccordionItem(service, index)).join('');
    }
}

document.addEventListener('DOMContentLoaded', initAccordion);
