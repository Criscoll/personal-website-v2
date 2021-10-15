

interface ImageBtnProps {
    imgUrl: string;
    altText: string;
    projectTitle: string;
    href: string;
}

const ImageBtn = ({ imgUrl, altText, projectTitle, href }: ImageBtnProps) => {
    return <>
        <div className="img-btn-container">
            <a href={href} target="_blank" rel=" noopener noreferrer">
                <img className="img-btn"
                    src={imgUrl}
                    alt={altText}
                    width="250px"
                    height="250px"
                />
            </a>
            <div className="img-btn-overlay text-green text-size-large">
                {projectTitle}
            </div>
        </div>
    </>


}

export default ImageBtn;