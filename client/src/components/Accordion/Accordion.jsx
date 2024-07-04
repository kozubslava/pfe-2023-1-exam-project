import React, { useState, useRef, useEffect } from 'react';
import styles from './Accordion.module.sass'
import { IoClose } from "react-icons/io5";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            // contentRef.current.style.padding = '10px';
        } else {
            contentRef.current.style.maxHeight = '0';
            // contentRef.current.style.padding = '0 10px';
        }
    }, [isOpen]);
    return (
        <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
            <div className={styles.accordionHeade} onClick={toggleAccordion}>
                <h3>{title}</h3>
                <IoClose className={styles.icon}/>
            </div>
            <div
                className={styles.accordionContent}
                ref={contentRef}
            >
                <div dangerouslySetInnerHTML={{ __html: content }}>
                    
                </div>
            </div>
        </div>
    );
};
export default Accordion;