import React from 'react'

function Ratings() {
    const CardData = [
        {
            id: 1,
            title: 'Cico Ltd',
            location: 'Doha, Qatar',
            imageUrl: 'https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/Logomark.png'
        },
        {
            id: 2,
            title: 'Bimber Ltd',
            location: 'Doha, Qatar',
            imageUrl: 'https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/Logomark-3.png'
        },
        {
            id: 3,
            title: 'Atlassian CO',
            location: 'Doha, Qatar',
            imageUrl: 'https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/Logomark-2.png'
        },
        // Add more card data objects as needed
    ];

    return (
        <div>
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3cb26da9 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="3cb26da9"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-83af906 elementor-invisible"
                        data-id="83af906"
                        data-element_type="column"
                        data-settings='{"animation":"fadeInLeft"}'
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-1ce96c42 elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                                data-id="1ce96c42"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                            >
                                <div className="elementor-widget-container">
                                    <p>Company rating</p>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-708c28a3 elementor-widget elementor-widget-heading"
                                data-id="708c28a3"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                        Companies that trust us
                                    </h2>
                                </div>
                            </div>
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-d360c83 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="d360c83"
                                data-element_type="section"
                            >
                                <div className="elementor-container elementor-column-gap-default">

                                    {CardData.map(card => (
                                        <div key={card.id} className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-687d921a"
                                        data-id="687d921a"
                                        data-element_type="column"
                                        data-settings='{"background_background":"classic"}'>
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-element-f36430 elementor-position-top elementor-widget elementor-widget-image-box">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-image-box-wrapper">
                                                            <figure className="elementor-image-box-img">
                                                                <img
                                                                    width={44}
                                                                    height={44}
                                                                    src={card.imageUrl}
                                                                    className="attachment-full size-full wp-image-373"
                                                                    alt=""
                                                                    decoding="async"
                                                                    loading="lazy"
                                                                />
                                                            </figure>
                                                            <div className="elementor-image-box-content">
                                                                <h3 className="elementor-image-box-title">
                                                                    {card.title}
                                                                </h3>
                                                                <p className="elementor-image-box-description">
                                                                    {card.location}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-60d0770a elementor-star-rating--align-center elementor-star-rating-tablet--align-left elementor-widget__width-inherit elementor--star-style-star_fontawesome elementor-widget elementor-widget-star-rating">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-star-rating__wrapper">
                                                            <div
                                                                className="elementor-star-rating"
                                                                title="5/5"
                                                                itemType="http://schema.org/Rating"
                                                                itemScope=""
                                                                itemProp="reviewRating"
                                                            >
                                                                <i className="elementor-star-full"></i>
                                                                <i className="elementor-star-full"></i>
                                                                <i className="elementor-star-full"></i>
                                                                <i className="elementor-star-full"></i>
                                                                <i className="elementor-star-full"></i>{" "}
                                                                <span
                                                                    itemProp="ratingValue"
                                                                    className="elementor-screen-only"
                                                                >
                                                                    5/5
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-124ca30 elementor-widget__width-initial elementor-widget elementor-widget-text-editor">
                                                    <div className="elementor-widget-container">
                                                        <p>5 star review</p>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-1328d3b4 elementor-align-center elementor-tablet-align-justify elementor-widget elementor-widget-button">
                                                    <div className="elementor-widget-container">
                                                        <div className="elementor-button-wrapper">
                                                            <a
                                                                className="elementor-button elementor-button-link elementor-size-sm"
                                                                href="#"
                                                            >
                                                                <span className="elementor-button-content-wrapper">
                                                                    <span className="elementor-button-text">
                                                                        View Jobs
                                                                    </span>
                                                                </span>
                                                            </a>
                                                        </div>
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

            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-45dc9d8 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="45dc9d8"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fa942ab"
                        data-id="fa942ab"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <section
                                className="elementor-section elementor-inner-section elementor-element elementor-element-bc6aba0 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible"
                                data-id="bc6aba0"
                                data-element_type="section"
                                data-settings='{"animation":"fadeInUp"}'
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                    <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7f10ba7"
                                        data-id="7f10ba7"
                                        data-element_type="column"
                                        data-settings='{"background_background":"classic"}'
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div
                                                className="elementor-element elementor-element-fec7187 elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                                                data-id="fec7187"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <p>featured blog</p>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-element elementor-element-ef3746d elementor-widget elementor-widget-heading"
                                                data-id="ef3746d"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <h2 className="elementor-heading-title elementor-size-default">
                                                        Read our awesome blog
                                                    </h2>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-element elementor-element-33b13a4 elementor-widget elementor-widget-jkit_post_block"
                                                data-id="33b13a4"
                                                data-element_type="widget"
                                                data-widget_type="jkit_post_block.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div
                                                        className="jeg-elementor-kit jkit-postblock postblock-type-2 jkit-pagination-disable post-element jeg_module_61_21_6604237b8e6f7"
                                                        data-id="jeg_module_61_21_6604237b8e6f7"
                                                        data-settings='{"post_type":"post","number_post":{"unit":"px","size":1,"sizes":[]},"post_offset":0,"unique_content":"disable","include_post":"","exclude_post":"","include_category":"","exclude_category":"","include_author":"","include_tag":"","exclude_tag":"","sort_by":"latest","pagination_mode":"disable","pagination_loadmore_text":"Load More","pagination_loading_text":"Loading...","pagination_number_post":{"unit":"px","size":3,"sizes":[]},"pagination_scroll_limit":0,"pagination_icon":{"value":"","library":""},"pagination_icon_position":"before","st_category_position":"left","sg_content_postblock_type":"type-2","sg_content_element_order":"title,meta,excerpt,read","sg_content_breakpoint":"tablet","sg_content_title_html_tag":"h3","sg_content_category_enable":"","sg_content_excerpt_enable":"yes","sg_content_excerpt_length":{"unit":"px","size":10,"sizes":[]},"sg_content_excerpt_more":"...","sg_content_readmore_enable":"","sg_content_readmore_icon":{"value":"fas fa-arrow-right","library":"fa-solid"},"sg_content_readmore_icon_position":"after","sg_content_readmore_text":"Read More","sg_content_comment_enable":"","sg_content_comment_icon":{"value":"fas fa-comment","library":"fa-solid"},"sg_content_comment_icon_position":"before","sg_content_meta_enable":"yes","sg_content_meta_author_enable":"","sg_content_meta_author_by_text":"by","sg_content_meta_author_icon":{"value":"fas fa-user","library":"fa-solid"},"sg_content_meta_author_icon_position":"before","sg_content_meta_date_enable":"yes","sg_content_meta_date_type":"published","sg_content_meta_date_format":"default","sg_content_meta_date_format_custom":"F j, Y","sg_content_meta_date_icon":{"value":"","library":""},"sg_content_meta_date_icon_position":"before","sg_content_image_size_imagesize_size":"medium_large","paged":1,"class":"jkit_post_block"}'
                                                    >
                                                        <div className="jkit-block-container">
                                                            <div className="jkit-posts jkit-ajax-flag">
                                                                <article className="jkit-post post-1003 post type-post status-publish format-standard has-post-thumbnail hentry category-career">
                                                                    <div className="jkit-thumb">
                                                                        <a href="https://advanture.icu/jobmart/2023/02/18/remote-work-revolution-how-to-hire-and-succeed-in-a-virtual-environment/">
                                                                            <div className="thumbnail-container ">
                                                                                <img
                                                                                    loading="lazy"
                                                                                    width={768}
                                                                                    height={768}
                                                                                    src="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-768x768.jpg"
                                                                                    className="attachment-medium_large size-medium_large wp-post-image"
                                                                                    alt=""
                                                                                    decoding="async"
                                                                                    srcSet="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-768x768.jpg 768w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-300x300.jpg 300w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-1024x1024.jpg 1024w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-150x150.jpg 150w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-800x800.jpg 800w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06.jpg 1200w"
                                                                                    sizes="(max-width: 768px) 100vw, 768px"
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="jkit-postblock-content">
                                                                        <h3 className="jkit-post-title">
                                                                            <a href="https://advanture.icu/jobmart/2023/02/18/remote-work-revolution-how-to-hire-and-succeed-in-a-virtual-environment/">
                                                                                Remote Work Revolution: How to Hire and
                                                                                Succeed in a Virtual Environment
                                                                            </a>
                                                                        </h3>
                                                                        <div className="jkit-post-meta">
                                                                            <div className="jkit-meta-date icon-position-before">
                                                                                February 18, 2023
                                                                            </div>
                                                                        </div>
                                                                        <div className="jkit-post-excerpt">
                                                                            <p>
                                                                                Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit, sed do...
                                                                            </p>
                                                                        </div>
                                                                        <div className="jkit-post-meta-bottom"></div>
                                                                    </div>
                                                                </article>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d737881"
                                        data-id="d737881"
                                        data-element_type="column"
                                    >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                            <div
                                                className="elementor-element elementor-element-aed84e9 elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                                                data-id="aed84e9"
                                                data-element_type="widget"
                                                data-widget_type="text-editor.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <p>our benefits</p>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-element elementor-element-75d6701 elementor-widget elementor-widget-heading"
                                                data-id="75d6701"
                                                data-element_type="widget"
                                                data-widget_type="heading.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <h2 className="elementor-heading-title elementor-size-default">
                                                        Recent Posts
                                                    </h2>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-element elementor-element-f8881c4 elementor-widget elementor-widget-jkit_post_block"
                                                data-id="f8881c4"
                                                data-element_type="widget"
                                                data-widget_type="jkit_post_block.default"
                                            >
                                                <div className="elementor-widget-container">
                                                    <div
                                                        className="jeg-elementor-kit jkit-postblock postblock-type-1 jkit-pagination-disable post-element jeg_module_61_22_6604237b920ab"
                                                        data-id="jeg_module_61_22_6604237b920ab"
                                                        data-settings='{"post_type":"post","number_post":{"unit":"px","size":4,"sizes":[]},"post_offset":0,"unique_content":"disable","include_post":"","exclude_post":"","include_category":"","exclude_category":"","include_author":"","include_tag":"","exclude_tag":"","sort_by":"latest","pagination_mode":"disable","pagination_loadmore_text":"Load More","pagination_loading_text":"Loading...","pagination_number_post":{"unit":"px","size":3,"sizes":[]},"pagination_scroll_limit":0,"pagination_icon":{"value":"","library":""},"pagination_icon_position":"before","st_category_position":"left","sg_content_postblock_type":"type-1","sg_content_element_order":"title,meta,excerpt,read","sg_content_breakpoint":"tablet","sg_content_title_html_tag":"h3","sg_content_category_enable":"","sg_content_excerpt_enable":"","sg_content_excerpt_length":{"unit":"px","size":20,"sizes":[]},"sg_content_excerpt_more":"...","sg_content_readmore_enable":"","sg_content_readmore_icon":{"value":"fas fa-arrow-right","library":"fa-solid"},"sg_content_readmore_icon_position":"after","sg_content_readmore_text":"Read More","sg_content_comment_enable":"","sg_content_comment_icon":{"value":"fas fa-comment","library":"fa-solid"},"sg_content_comment_icon_position":"before","sg_content_meta_enable":"yes","sg_content_meta_author_enable":"","sg_content_meta_author_by_text":"by","sg_content_meta_author_icon":{"value":"fas fa-user","library":"fa-solid"},"sg_content_meta_author_icon_position":"before","sg_content_meta_date_enable":"yes","sg_content_meta_date_type":"published","sg_content_meta_date_format":"default","sg_content_meta_date_format_custom":"F j, Y","sg_content_meta_date_icon":{"value":"","library":""},"sg_content_meta_date_icon_position":"before","sg_content_image_size_imagesize_size":"medium_large","paged":1,"class":"jkit_post_block"}'
                                                    >
                                                        <div className="jkit-block-container">
                                                            <div className="jkit-posts jkit-ajax-flag">
                                                                <article className="jkit-post post-1003 post type-post status-publish format-standard has-post-thumbnail hentry category-career">
                                                                    <div className="jkit-thumb">
                                                                        <a href="https://advanture.icu/jobmart/2023/02/18/remote-work-revolution-how-to-hire-and-succeed-in-a-virtual-environment/">
                                                                            <div className="thumbnail-container ">
                                                                                <img
                                                                                    width={768}
                                                                                    height={768}
                                                                                    src="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-768x768.jpg"
                                                                                    className="attachment-medium_large size-medium_large wp-post-image"
                                                                                    alt=""
                                                                                    decoding="async"
                                                                                    loading="lazy"
                                                                                    srcSet="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-768x768.jpg 768w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-300x300.jpg 300w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-1024x1024.jpg 1024w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-150x150.jpg 150w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06-800x800.jpg 800w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog06.jpg 1200w"
                                                                                    sizes="(max-width: 768px) 100vw, 768px"
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="jkit-postblock-content">
                                                                        <h3 className="jkit-post-title">
                                                                            <a href="https://advanture.icu/jobmart/2023/02/18/remote-work-revolution-how-to-hire-and-succeed-in-a-virtual-environment/">
                                                                                Remote Work Revolution: How to Hire and
                                                                                Succeed in a Virtual Environment
                                                                            </a>
                                                                        </h3>
                                                                        <div className="jkit-post-meta">
                                                                            <div className="jkit-meta-date icon-position-before">
                                                                                February 18, 2023
                                                                            </div>
                                                                        </div>
                                                                        <div className="jkit-post-meta-bottom"></div>
                                                                    </div>
                                                                </article>
                                                                <article className="jkit-post post-1001 post type-post status-publish format-standard has-post-thumbnail hentry category-hiring">
                                                                    <div className="jkit-thumb">
                                                                        <a href="https://advanture.icu/jobmart/2023/02/18/the-dos-and-donts-of-job-interviews-how-to-make-a-positive-impression/">
                                                                            <div className="thumbnail-container ">
                                                                                <img
                                                                                    width={768}
                                                                                    height={768}
                                                                                    src="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog05-768x768.jpg"
                                                                                    className="attachment-medium_large size-medium_large wp-post-image"
                                                                                    alt=""
                                                                                    decoding="async"
                                                                                    loading="lazy"
                                                                                    srcSet="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog05-768x768.jpg 768w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog05-300x300.jpg 300w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog05-1024x1024.jpg 1024w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog05-150x150.jpg 150w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog05-800x800.jpg 800w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog05.jpg 1200w"
                                                                                    sizes="(max-width: 768px) 100vw, 768px"
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="jkit-postblock-content">
                                                                        <h3 className="jkit-post-title">
                                                                            <a href="https://advanture.icu/jobmart/2023/02/18/the-dos-and-donts-of-job-interviews-how-to-make-a-positive-impression/">
                                                                                The Dos and Don’ts of Job Interviews:
                                                                                How to Make a Positive Impression
                                                                            </a>
                                                                        </h3>
                                                                        <div className="jkit-post-meta">
                                                                            <div className="jkit-meta-date icon-position-before">
                                                                                February 18, 2023
                                                                            </div>
                                                                        </div>
                                                                        <div className="jkit-post-meta-bottom"></div>
                                                                    </div>
                                                                </article>
                                                                <article className="jkit-post post-999 post type-post status-publish format-standard has-post-thumbnail hentry category-job">
                                                                    <div className="jkit-thumb">
                                                                        <a href="https://advanture.icu/jobmart/2023/02/18/hiring-in-the-post-pandemic-world-challenges-and-opportunities/">
                                                                            <div className="thumbnail-container ">
                                                                                <img
                                                                                    width={768}
                                                                                    height={768}
                                                                                    src="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog03-768x768.jpg"
                                                                                    className="attachment-medium_large size-medium_large wp-post-image"
                                                                                    alt=""
                                                                                    decoding="async"
                                                                                    loading="lazy"
                                                                                    srcSet="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog03-768x768.jpg 768w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog03-300x300.jpg 300w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog03-1024x1024.jpg 1024w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog03-150x150.jpg 150w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog03-800x800.jpg 800w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog03.jpg 1200w"
                                                                                    sizes="(max-width: 768px) 100vw, 768px"
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="jkit-postblock-content">
                                                                        <h3 className="jkit-post-title">
                                                                            <a href="https://advanture.icu/jobmart/2023/02/18/hiring-in-the-post-pandemic-world-challenges-and-opportunities/">
                                                                                Hiring in the Post-Pandemic World:
                                                                                Challenges and Opportunities
                                                                            </a>
                                                                        </h3>
                                                                        <div className="jkit-post-meta">
                                                                            <div className="jkit-meta-date icon-position-before">
                                                                                February 18, 2023
                                                                            </div>
                                                                        </div>
                                                                        <div className="jkit-post-meta-bottom"></div>
                                                                    </div>
                                                                </article>
                                                                <article className="jkit-post post-997 post type-post status-publish format-standard has-post-thumbnail hentry category-hiring">
                                                                    <div className="jkit-thumb">
                                                                        <a href="https://advanture.icu/jobmart/2023/02/18/from-job-search-to-offer-strategies-for-making-a-lasting-impression/">
                                                                            <div className="thumbnail-container ">
                                                                                <img
                                                                                    width={768}
                                                                                    height={769}
                                                                                    src="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog02-768x769.jpg"
                                                                                    className="attachment-medium_large size-medium_large wp-post-image"
                                                                                    alt=""
                                                                                    decoding="async"
                                                                                    loading="lazy"
                                                                                    srcSet="https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog02-768x769.jpg 768w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog02-300x300.jpg 300w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog02-1024x1024.jpg 1024w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog02-150x150.jpg 150w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog02-800x801.jpg 800w, https://advanture.icu/jobmart/wp-content/uploads/sites/8/2023/02/blog02.jpg 1200w"
                                                                                    sizes="(max-width: 768px) 100vw, 768px"
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="jkit-postblock-content">
                                                                        <h3 className="jkit-post-title">
                                                                            <a href="https://advanture.icu/jobmart/2023/02/18/from-job-search-to-offer-strategies-for-making-a-lasting-impression/">
                                                                                From Job Search to Offer: Strategies for
                                                                                Making a Lasting Impression
                                                                            </a>
                                                                        </h3>
                                                                        <div className="jkit-post-meta">
                                                                            <div className="jkit-meta-date icon-position-before">
                                                                                February 18, 2023
                                                                            </div>
                                                                        </div>
                                                                        <div className="jkit-post-meta-bottom"></div>
                                                                    </div>
                                                                </article>
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

export default Ratings
