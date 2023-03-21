import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import MetaTitle from "../components/MetaTitle";
import Iframe from 'react-iframe'
import SendEmail from "../Helper/Emailjs/SendEmail";
import { BsFillHouseFill, BsFillTelephoneFill, BsFillEnvelopeFill, BsInfoLg } from 'react-icons/bs'

const Contact = () => {
    return (
        <>
            <MetaTitle title="Contact Us" />
            <BreadCrumb title="Contact Us" />

            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <Iframe
                                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6912.98172182094!2d31.1048908!3d29.9653202!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1677933832396!5m2!1sen!2seg"
                                width="600"
                                height="450"
                                className="border-0 w-100 p-3"
                                allowFullScreen=""
                                loading="lazy"
                                refererPolicy="no-referrer-when-downgrade"
                            ></Iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h3 className="contact-title">Contact</h3>
                                    <SendEmail />
                                </div>
                                <div>
                                    <h3 className="contact-title">Get In Touch With Us </h3>
                                    <div className="d-flex flex-column align-items-start" style={{ color: 'var(--color-777777)' }}>
                                        <p className="mt-3"><span className="me-2 fs-5"><BsFillHouseFill /></span> 179h Hadeek El-Ahram,
                                            Sixth Of October,Giza, 12559 </p>

                                        <p className="mt-2"><span className="me-2 fs-5"><BsFillTelephoneFill /></span> +2 01278374798</p>
                                        <p className="mt-2"><span className="me-2 fs-5"><BsFillEnvelopeFill /></span> haithammoreda@gmail.com</p>
                                        <p className="mt-2"><span className="me-2 fs-5"><BsInfoLg /></span> Sunday – Thursday 9 AM – 5 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
