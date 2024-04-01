import React from 'react'

function Jobs() {

    const CardData = [
        {
          id: 1,
          title: 'Website Developer',
          description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore',
          company: 'Cico Ltd',
          location: 'Doha, Qatar',
          salary: '$45k-56k',
          applyLink: '#',
          status: 'Actively Hiring',
          imageUrl: 'https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/Logomark.png'
        },
        
        {
            id: 1,
            title: 'Website Developer',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore',
            company: 'Cico Ltd',
            location: 'Doha, Qatar',
            salary: '$45k-56k',
            applyLink: '#',
            status: 'Actively Hiring',
            imageUrl: 'https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/Logomark.png'
          },
          
          // Add more card data objects 
      ];

    return (
        <div>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-dbb036d elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="dbb036d"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-806a3bb"
                        data-id="806a3bb"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-6dcd626 elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                                data-id="6dcd626"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                            >
                                <div className="elementor-widget-container">
                                    <p>featured jobs</p>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-d3e7247 elementor-widget elementor-widget-heading"
                                data-id="d3e7247"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Get hired by your dream company
                                    </h2>
                                </div>
                            </div>
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-9d80b84 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="9d80b84"
                                data-element_type="section"
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                    {CardData.map(card => (
                                        <div key={card.id} className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-bf04cde">
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-495718d elementor-widget__width-auto elementor-widget elementor-widget-text-editor">
                                                    <div className="elementor-widget-container">
                                                        <p>{card.status}</p>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-c936047 elementor-widget__width-auto elementor-widget elementor-widget-text-editor">
                                                    <div className="elementor-widget-container">
                                                        <p>Remote</p>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-d47220a elementor-widget__width-auto elementor-widget elementor-widget-text-editor">
                                                    <div className="elementor-widget-container">
                                                        <p>14 Applicants</p>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-3274685 elementor-widget elementor-widget-elementskit-heading">
                                                    <div className="elementor-widget-container">
                                                        <div className="ekit-wid-con">
                                                            <div className="ekit-heading elementskit-section-title-wraper text_left ekit_heading_tablet- ekit_heading_mobile-">
                                                                <h2 className="ekit-heading--title elementskit-section-title">{card.title}</h2>
                                                                <div className="ekit-heading__description">
                                                                    <p>{card.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-a9c6369 elementor-vertical-align-bottom elementor-position-left elementor-widget__width-initial elementor-widget elementor-widget-image-box">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-image-box-wrapper">
                                                            <figure className="elementor-image-box-img">
                                                                <img width="44" height="44" src={card.imageUrl} className="attachment-full size-full wp-image-373" alt="" decoding="async" loading="lazy" />
                                                            </figure>
                                                            <div className="elementor-image-box-content">
                                                                <h3 className="elementor-image-box-title">{card.company}</h3>
                                                                <p className="elementor-image-box-description">{card.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-84f6163 elementor-widget__width-auto elementor-widget elementor-widget-heading">
                                                    <div className="elementor-widget-container">
                                                        <h2 className="elementor-heading-title elementor-size-default">{card.salary}</h2>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-79bf031 elementor-tablet-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-button-wrapper">
                                                            <a className="elementor-button elementor-button-link elementor-size-sm" href={card.applyLink}>
                                                                <span className="elementor-button-content-wrapper">
                                                                    <span className="elementor-button-text">Apply Now</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-7f75ce2 elementor-widget__width-initial elementor-widget elementor-widget-text-editor">
                                                    <div className="elementor-widget-container">
                                                        <p>{card.status}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Jobs
