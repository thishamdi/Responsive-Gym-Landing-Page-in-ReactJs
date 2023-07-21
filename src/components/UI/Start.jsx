import React from 'react'
import '../../styles/start.css'
import startImg from '../../assets/img/trainer.png'

const Start = () => {
    return (
        <section id ="classes">
            <div className="container">
                <div className="start_wrapper">
                    <div className="start_img">
                        <img src={startImg} alt="" data-aos="fade-left"
                        data-aos-duration="1500" />
                    </div>

                    <div className="start_content" data-aos="fade-right"
                        data-aos-duration="1500">
                        <h2 className="section_title">
                            Ready to make a <span className="highlights">change?</span>
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Iusto assumenda, quos at, iste asperiores saepe provident
                            aut molestias distinctio a neque totam nulla nisi vitae rem,
                            ab nihil id laboriosam?
                        </p>
                        <button className="register_btn">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Start