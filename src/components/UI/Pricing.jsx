import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
    return (
        <section className="section_pricing" id="pricing-plan">
            <div className="container">
                <div className="pricing_top">
                    <h2 className="section_title">
                        Gym <span className="highlights">Pricing</span> Plan
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Iste saepe perferendis, eos voluptatem earum alias.
                    </p>
                </div>

                {/*======= pricing card ======= */}
                <div className="pricing_wrapper">


                    <div className="pricing_item" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="pricing_card_top">
                            <h2 className="section_title">Regular Member</h2>
                            <h2 className="section_title">50$ <span>/month</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Unlimited acces to the gym
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Customer support
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Personal trainer
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Standard options
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    5 classes per week
                                </li>
                            </ul>

                            <button className="register_btn">Join Now</button>
                        </div>
                    </div>


                    <div className="pricing_item pricing_item-02" data-aos="fade-up"
                        data-aos-duration="1800">
                        <div className="pricing_card_top">
                            <h2 className="section_title">Premium Member</h2>
                            <h2 className="section_title">70$ <span>/month</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Unlimited acces to the gym
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Customer support
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Personal trainer
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Standard options
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    5 classes per week
                                </li>
                            </ul>

                            <button className="register_btn">Join Now</button>
                        </div>
                    </div>


                    <div className="pricing_item" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="pricing_card_top">
                            <h2 className="section_title">Standard Member</h2>
                            <h2 className="section_title">100$ <span>/month</span></h2>
                        </div>
                        <div className="services">
                            <ul>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Unlimited acces to the gym
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Customer support
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Personal trainer
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    Standard options
                                </li>
                                <li>
                                    <span><i class="ri-checkbox-blank-circle-fill"></i></span>
                                    5 classes per week
                                </li>
                            </ul>

                            <button className="register_btn">Join Now</button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Pricing