import React from 'react'

function FrequentlyAsked() {
    const CardData3 = [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetur',
          content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast',
        },
        {
          id: 2,
          title: 'adipiscing elit. Ut elit tellus, luctus',
          content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast',
        },
        // Add more card data objects as needed
      ];

    return (
        <div>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3497f86b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="3497f86b"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5fa2204c elementor-invisible"
                        data-id="5fa2204c"
                        data-element_type="column"
                        data-settings='{"animation":"fadeInLeft"}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-30fefb27 elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                                data-id="30fefb27"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                            >
                                <div className="elementor-widget-container">
                                    <p>Common questions</p>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-505cdab1 elementor-widget elementor-widget-heading"
                                data-id="505cdab1"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Frequently Ask Question
                                    </h2>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-4eb062e0 elementor-widget elementor-widget-elementskit-accordion"
                                data-id="4eb062e0"
                                data-element_type="widget"
                                data-widget_type="elementskit-accordion.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="ekit-wid-con">
                                        <div
                                            className="elementskit-accordion accoedion-primary"
                                            id="accordion-6604237b980c6"
                                        >
                                            {CardData3.map(card => (
                                                <div key={card.id} className="elementskit-card">
                                                    <div className="elementskit-card-header" id={`primaryHeading-${card.id}-4eb062e0`}>
                                                        <a
                                                            href={`#collapse-${card.id}`}
                                                            className="ekit-accordion--toggler elementskit-btn-link collapsed"
                                                            data-ekit-toggle="collapse"
                                                            data-target={`#Collapse-${card.id}`}
                                                            aria-expanded="false"
                                                            aria-controls={`Collapse-${card.id}`}
                                                        >
                                                            <span className="ekit-accordion-title">{card.title}</span>
                                                            <div className="ekit_accordion_icon_group">
                                                                <div className="ekit_accordion_normal_icon">
                                                                    <i aria-hidden="true" className="icon-open icon-right icon icon-down-arrow1" />
                                                                </div>
                                                                <div className="ekit_accordion_active_icon">
                                                                    <i aria-hidden="true" className="icon-closed icon-right icon icon-up-arrow1" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div id={`Collapse-${card.id}`} className="collapse" aria-labelledby={`primaryHeading-${card.id}-4eb062e0`} data-parent="#accordion-6604237b980c6">
                                                        <div className="elementskit-card-body ekit-accordion--content">
                                                            {card.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-68506b7c jkit-sticky-element--enabled jkit-sticky-element-on--down jkit-sticky-position--sticky elementor-invisible"
                        data-id="68506b7c"
                        data-element_type="column"
                        data-settings='{"animation":"fadeInLeft","jkit_sticky_device":["desktop","tablet","mobile"],"jkit_sticky_top_position":{"unit":"px","size":0,"sizes":[]}}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-c650f0a jkit-sticky-element--enabled elementor-section-boxed elementor-section-height-default elementor-section-height-default jkit-sticky-element-on--down jkit-sticky-position--sticky"
                                data-id="c650f0a"
                                data-element_type="section"
                                data-settings='{"jkit_sticky_top_position":{"unit":"px","size":20,"sizes":[]},"jkit_sticky_device":"desktop"}'
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                    <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7de5f357"
                                        data-id="7de5f357"
                                        data-element_type="column"
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div
                                                className="elementor-element elementor-element-20ee547c elementor-widget-tablet__width-initial animated-fast jkit-equal-height-disable elementor-invisible elementor-widget elementor-widget-jkit_icon_box"
                                                data-id="20ee547c"
                                                data-element_type="widget"
                                                data-settings='{"_animation":"fadeInUp"}'
                                                data-widget_type="jkit_icon_box.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation- jeg_module_61_23_6604237b991c8">
                                                        <div className="jkit-icon-box-wrapper hover-from-left">
                                                            <div className="icon-box icon-box-header elementor-animation-">
                                                                <div className="icon style-color" />
                                                            </div>
                                                            <div className="icon-box icon-box-body">
                                                                <h2 className="title">
                                                                    Don't find what you're looking for?
                                                                </h2>
                                                                <p className="icon-box-description">
                                                                    {" "}
                                                                    Send us a query Lorem ipsum dolor sit amet,
                                                                    consectetur{" "}
                                                                </p>
                                                                <div className="icon-box-button ">
                                                                    <div className="btn-wrapper icon-position-after">
                                                                        <a href="" className="icon-box-link">
                                                                            Contact Us
                                                                            <i
                                                                                aria-hidden="true"
                                                                                className="jki jki-arrow-right-solid"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="hover-watermark">
                                                                <i
                                                                    aria-hidden="true"
                                                                    className="fas fa-question-circle"
                                                                />
                                                            </div>
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

export default FrequentlyAsked
