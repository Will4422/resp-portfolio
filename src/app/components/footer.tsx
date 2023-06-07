import React from 'react';
import Image from 'next/image';

import HomeSVG from '/public/footer/home.svg';
import CodeSVG from '/public/footer/code.svg';
import ClipboardSVG from '/public/footer/clipboard.svg';
import MailSVG from '/public/footer/mail.svg';

const Footer = () => {
    return (
        <footer>
            <div id='footer-row-1'>
                <ul>
                    {/* TODO: add links */}
                    <li><a href='#'><Image src={HomeSVG} alt='' className='footer-item-svg'></Image>Home</a></li>
                    <li><a href='#'><Image src={CodeSVG} alt='' className='footer-item-svg'></Image>Resume</a></li>
                    <li><a href='#'><Image src={ClipboardSVG} alt='' className='footer-item-svg'></Image>Projects</a></li>
                    <li><a href='#'><Image src={MailSVG} alt='' className='footer-item-svg'></Image>Contact</a></li>
                </ul>
                <h2>Thanks for visiting! 👋</h2>
            </div>
            {/* TODO: add links */}
            <p id='footer-row-2'>This site was made with Next.JS, React, HTML, CSS, and Typescript</p>
        </footer>
    );
}

export default Footer;