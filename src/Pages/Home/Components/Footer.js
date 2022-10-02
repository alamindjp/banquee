import React from 'react';

const Footer = () => {
    return (
        <div className='custom-container'>
            <div className='flex mt-14'>
                <div className='w-[550px]'><h4 className='text-3xl text-primary mt-8'>banquee.</h4></div>
                <footer className="footer p-10 text-base-content gap-20">
                    <div>
                        <a className="link link-hover text-lg">About</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Features</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Pricing</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Support</a>
                    </div>
                    <div>
                        <a className="link link-hover text-lg">Blog</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Products</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Technology</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Crypto</a>
                    </div>
                    <div>
                        <a className="link link-hover text-lg">Webflow</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Styleguide</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Licensing</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Changelog</a>
                    </div>
                    <div>
                        <a className="link link-hover text-lg">Social Media</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Twitter</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Facebook</a>
                        <a className="link link-hover text-base text-[#8c8b8e]">Instagram</a>
                    </div>
                </footer>
            </div>
            <footer className="footer py-4 border-t text-base-content border-base-300 mx-auto justify-between">
                <p className='flex'>©  Made by <span className='text-primary'>Pawel Gola</span> - Powered by <span className='text-primary'>Webflow</span></p>
                <p className='flex'>
                    <span className='mr-8 text-[#8c8b8e]'>Impressum</span>
                    <span className='text-[#8c8b8e]'>Datenschutz</span>
                </p>
            </footer>
        </div>
    );
};

export default Footer;