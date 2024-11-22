'use client';

import { useState, useEffect } from "react";
import { outfit } from "../fonts/fonts";
import styles from '@/app/styles/projects.module.css';
import SectionTitle from "./SectionTitle";
import projects from "@/app/data/projectsData"

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2); 
            } else {
                setItemsPerPage(1); 
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const maxIndex = Math.ceil(projects.length / itemsPerPage);

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const translateX = `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;

    return (
        <div id="projectsSection" className="fullHeight">
            <SectionTitle subheading="alguns dos meus projetos mais recentes" heading="Projetos" />

            <div className={styles.projectsSection}>
                <div className={styles.arrowsContainer}>
                    <button
                        className={styles.arrow}
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                    >
                        &#8249;
                    </button>
                    <button
                        className={styles.arrow}
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                    >
                        &#8250;
                    </button>
                </div>

                <div className={styles.carousel}>
                    <div className={styles.carouselWrapper}>
                        <div
                            className={styles.carouselContent}
                            style={{ transform: translateX }}
                        >
                            {projects.map((project, index) => (
                                <div
                                    className={`${styles.card} ${outfit.className}`}
                                    key={index}
                                    style={{
                                        flex: `0 0 calc(${100 / itemsPerPage}% - 1rem)`, 
                                    }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={styles.image}
                                    />
                                    
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.link} className={styles.link} target="_blank">
                                        Ver Mais
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
