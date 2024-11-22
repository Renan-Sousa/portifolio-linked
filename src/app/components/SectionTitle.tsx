import styleTitle from "@/app/styles/sectionTitle.module.css"
import { outfit } from "@/app/fonts/fonts";

export default function SectionTitle({subheading = 'Need Subheading', heading = 'need heading',}) { 
    return (
        <div className={`${outfit.className} ${styleTitle.sectionTitle}`}>
            <p className={styleTitle.subheading}>{subheading}</p>
            <h2 className={styleTitle.heading}>{heading}</h2>
        </div>
    );
}