

interface ImageBtnProps {
    imgUrl: string;
    altText: string;
    projectTitle: string;
    href: string;
}

const ImageBtn = ({ imgUrl, altText, projectTitle, href }: ImageBtnProps) => {
    return <>
        <div className="img-btn-container">
            <h2>{projectTitle}</h2>
            <a href={href} target="_blank" rel=" noopener noreferrer">
                <img className="img-btn"
                    src={imgUrl}
                    alt={altText}
                    width="100%"
                    height="250px"
                />
            </a>
        </div>
    </>


}

export default ImageBtn;