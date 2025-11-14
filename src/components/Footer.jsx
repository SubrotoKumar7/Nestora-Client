import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-black text-white px-10 pt-10 pb-5">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <div>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="flex gap-1 flex-col md:flex-row">
                            <input
                            type="text"
                            placeholder="username@site.com"
                            className="input text-black w-full" />
                            <button className="btn btn-primary w-fit">Subscribe</button>
                        </div>
                        </fieldset>
                    </form>
                    <h6 className="footer-title mt-2">Social Links</h6>
                    <ul className='flex items-center gap-5'>
                        <li><Link target='_blank' to={'https://www.facebook.com/subrotokumar17'}><FaFacebookSquare className='text-2xl'/></Link></li>
                        <li><Link target='_blank' to={'https://www.linkedin.com/in/subrotokumar7'}><FaLinkedin className='text-2xl'/></Link></li>
                        <li><Link target='_blank' to={'https://github.com/SubrotoKumar7'}><FaGithubSquare className='text-2xl'/></Link></li>
                    </ul>
                </div>
            </footer>
            <div className='bg-black text-center text-white pb-5'>
                    <Link to={'/'} className='text-2xl font-bold'>Nestora</Link>
                    <p className='text-sm mt-3'>Copyright © {new Date().getFullYear()} - All right reserved by Nestora</p>
            </div>
        </div>
    );
};

export default Footer;