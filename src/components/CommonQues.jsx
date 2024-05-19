import React from 'react'

function CommonQues() {
    const CardData1 = [
        {
            id: 1,
            title: 'Interview Ready Profile',
            description: 'Craft a winning resume, elevate your profile on LinkedIn, Nauraki to stand out.',
            link: './services',
            icon: 'icon-trophy1',
            webpImage: './InterviewReadyProfile.webp'
        },
        {
            id: 2,
            title: 'Interview Preparation',
            description: 'Experience real interviews with tech experts to sharpen your skills and boost confidence.',
            link: './services',
            icon: 'icon-user1',
            webpImage: './InterviewPreparation.webp'
        },
        {
            id: 3,
            title: 'Ace the Interview',
            description: 'We guarantee interview calls through our extensive network and personalized coaching, ensuring your success.',
            link: './services',
            icon: 'icon-user1',
            webpImage: './AceTheInterview.webp'
        },
        // Add more card data as needed
    ];
    

    
    return (
        <div>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-715250c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="715250c"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f11878a elementor-invisible"
                        data-id="f11878a"
                        data-element_type="column"
                        data-settings='{"animation":"fadeInUp"}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-da649cb elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                                data-id="da649cb"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                            >
                                <div className="elementor-widget-container">
                                    <p>Our Commitment</p>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-a41c771 elementor-widget__width-initial elementor-widget elementor-widget-jkit_heading"
                                data-id="a41c771"
                                data-element_type="widget"
                                data-widget_type="jkit_heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-heading  align-center align-tablet- align-mobile- jeg_module_61_12_6604237b66204">
                                        <div className="heading-section-title  display-inline-block">
                                            <h2 className="heading-title">
                                            Elevate Your Career to the Next Level
                                            </h2>
                                        </div>
                                        <div className="heading-section-description">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-8cc507e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="8cc507e"
                                data-element_type="section"
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                {CardData1.map(card => (
        <div key={card.id} className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6478bc9">
            <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-7f059d2 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="7f059d2" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                    <div className="elementor-widget-container">
                        <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_61_13_6604237b6919e">
                            <div className="jkit-icon-box-wrapper hover-from-left">
                                <div className="icon-box icon-box-header elementor-animation-">
                                    {/* Use picture element or img tag with srcSet to specify WebP image */}
                                    <picture>
                                        <source srcSet={card.webpImage} type="image/webp" />
                                        <img src={card.image} alt="Card" style={{ width: '60px', height: 'auto' }} />
                                    </picture>
                                </div>
                                <div className="icon-box icon-box-body">
                                    <h2 className="title">{card.title}</h2>
                                    <p className="icon-box-description">{card.description}</p>
                                    <div className="icon-box-button ">
                                        <div className="btn-wrapper icon-position-after">
                                            <a href={card.link} className="icon-box-link">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
                                    <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0654bc8"
                                        data-id="0654bc8"
                                        data-element_type="column"
                                        data-settings='{"background_background":"classic"}'
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div className="elementor-background-overlay" />
                                            <div
                                                className="elementor-element elementor-element-db549a7 jkit-equal-height-enable elementor-widget elementor-widget-jkit_icon_box"
                                                data-id="db549a7"
                                                data-element_type="widget"
                                                data-widget_type="jkit_icon_box.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_61_18_6604237b6f53e">
                                                        <div className="jkit-icon-box-wrapper hover-from-left">
                                                            <div className="icon-box icon-box-header elementor-animation-">
                                                                <div className="icon style-color" />
                                                            </div>
                                                            <div className="icon-box icon-box-body">
                                                                <h2 className="title">
                                                                    Negotiate the Best Offer
                                                                </h2>
                                                                <div className="icon-box-button ">
                                                                    <div className="btn-wrapper icon-position-after">
                                                                        <a href="./services" className="icon-box-link">
                                                                            Learn More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="hover-watermark"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommonQues
