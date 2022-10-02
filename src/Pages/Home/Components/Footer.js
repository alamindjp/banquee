import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='custom-container'>
            <div className='flex mt-14'>
                <div className='w-[550px]'><h4 className='text-3xl text-primary mt-8'>banquee.</h4></div>
                <footer className="footer p-10 text-base-content gap-20">
                    <div>
                        <Link to='#' className="link link-hover text-lg">About</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Features</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Pricing</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Support</Link>
                    </div>
                    <div>
                        <Link to='#' className="link link-hover text-lg">Blog</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Products</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Technology</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Crypto</Link>
                    </div>
                    <div>
                        <Link to='#' className="link link-hover text-lg">Webflow</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Styleguide</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Licensing</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Changelog</Link>
                    </div>
                    <div>
                        <Link to='#' className="link link-hover text-lg">Social Media</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Twitter</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Facebook</Link>
                        <Link to='#' className="link link-hover text-base text-[#8c8b8e]">Instagram</Link>
                    </div>
                </footer>
            </div>
            <footer className="footer py-4 border-t text-base-content border-base-300 mx-auto justify-between">
                <p className='flex'>©  Made by <Link to='#' className='text-primary'>Pawel Gola</Link> - Powered by <Link to='#' className='text-primary'>Webflow</Link></p>
                <p className='flex'>
                    <Link to='#' className='mr-8 text-[#8c8b8e]'>Impressum</Link>
                    <Link to='#' className='text-[#8c8b8e]'>Datenschutz</Link>
                </p>
            </footer>
        </div>
    );
};

export default Footer;