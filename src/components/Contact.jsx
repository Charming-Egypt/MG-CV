import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contactBgVideo from '../assets/contact_assets/contact_bg.mp4';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const formRef = useRef();
    const infoRef = useRef();
    const formContainerRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

    useEffect(() => {
        if (infoRef.current) {
            gsap.fromTo(
                infoRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: infoRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }

        if (formContainerRef.current) {
            gsap.fromTo(
                formContainerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: formContainerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        
        const formData = new FormData(formRef.current);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            setStatusMessage({ text: 'Please fill in all required fields.', type: 'error' });
            return;
        }

        const { VITE_EMAILJS_SERVICE_ID: sid, VITE_EMAILJS_TEMPLATE_ID: tid, VITE_EMAILJS_PUBLIC_KEY: key } = import.meta.env;
        if (!sid || !tid || !key) {
            // No EmailJS configured: open the visitor's email app with the message pre-filled.
            const subject = formData.get('subject') || `Message from ${name}`;
            const phone = formData.get('phone');
            const body = `${message}\n\n— ${name}\n${email}${phone ? `\n${phone}` : ''}`;
            window.location.href = `mailto:gm@discover-sharm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setStatusMessage({ text: 'Opening your email app...', type: 'success' });
            return;
        }

        setIsSubmitting(true);
        setStatusMessage({ text: '', type: '' });

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatusMessage({ text: 'Message sent successfully!', type: 'success' });
            formRef.current.reset();
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            setStatusMessage({ text: 'Failed to send message. Please try again later.', type: 'error' });
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div id="contact" className="relative min-h-screen text-white font-sans flex items-center overflow-hidden [clip-path:inset(0)]">
            
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="fixed top-0 left-0 w-full h-[100vh] object-cover z-0"
            >
                <source src={contactBgVideo} type="video/mp4" />
            </video>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">
                
                {/* Left Side: Contact Info */}
                <div ref={infoRef} className="w-full lg:w-5/12 flex flex-col justify-start">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl mb-16">
                        Get in touch
                    </h2>

                    <div className="flex flex-col gap-8 md:gap-10">
                        {/* Email */}
                        <div className="block">
                            <p className="text-gray-400 text-sm mb-2">Email:</p>
                            <a href="mailto:gm@discover-sharm.com" className="text-lg md:text-xl tracking-wide hover:text-[#ff7a1a] transition-colors break-all">gm@discover-sharm.com</a>
                        </div>

                        {/* Phone */}
                        <div className="block">
                            <p className="text-gray-400 text-sm mb-2">Phone:</p>
                            <a href="tel:+201061693679" className="text-lg md:text-xl tracking-wide hover:text-[#ff7a1a] transition-colors">+20 106 169 3679</a>
                        </div>

                        {/* Role / Location */}
                        <div className="block">
                            <p className="text-gray-400 text-sm mb-2">Role:</p>
                            <p className="text-lg md:text-xl tracking-wide">Guest Services &amp; Front Office Professional</p>
                            <p className="text-gray-400 text-sm mt-1">Sharm El Sheikh, Egypt</p>
                        </div>

                        {/* Follow Us */}
                        <div className="mt-2 md:mt-4 flex flex-col items-start">
                            <p className="text-gray-400 text-sm mb-4">Find me online</p>
                            <div className="flex items-center justify-start gap-3">
                                <a href="https://www.discover-sharm.com" target="_blank" rel="noopener noreferrer" aria-label="Discover Sharm website" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M2 12h20"/>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                    </svg>
                                </a>
                                <a href="tel:+201061693679" aria-label="Call" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.19a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </a>
                                <a href="/Mohamed-Gamal-CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV" className="h-10 px-4 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium hover:bg-white/20 transition-colors">
                                    CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div ref={formContainerRef} className="w-full lg:w-7/12 flex flex-col lg:pt-4">
                    <form ref={formRef} className="flex flex-col gap-5 w-full" onSubmit={sendEmail}>
                        
                        {/* Name and Email Row */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Your full name" 
                                    required
                                    className="w-full bg-[#111] text-white text-base md:text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Email address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Your email address" 
                                    required
                                    className="w-full bg-[#111] text-white text-base md:text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />
                            </div>
                        </div>

                        {/* Phone and Subject Row */}
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Phone</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    placeholder="Your phone number" 
                                    className="w-full bg-[#111] text-white text-base md:text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5 w-full md:w-1/2">
                                <label className="text-xs text-gray-400 font-medium">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    placeholder="Subject" 
                                    className="w-full bg-[#111] text-white text-base md:text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5 w-full">
                            <label className="text-xs text-gray-400 font-medium">Message</label>
                            <textarea 
                                name="message"
                                placeholder="Write something...." 
                                rows="5"
                                required
                                className="w-full bg-[#111] text-white text-base md:text-sm rounded-lg px-4 py-3.5 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-gray-600 border border-transparent resize-none"
                            ></textarea>
                        </div>

                        {/* Status Message */}
                        {statusMessage.text && (
                            <div className={`text-sm px-4 py-3 rounded-lg border ${statusMessage.type === 'success' ? 'bg-green-500/10 border-green-500/50 text-green-400' : 'bg-red-500/10 border-red-500/50 text-red-400'}`}>
                                {statusMessage.text}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-white text-black text-sm font-semibold rounded-lg py-3 hover:bg-gray-200 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactSection;
