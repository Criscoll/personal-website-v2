
interface NavBtnProps {
    name: string;
    textSize: 'small' | 'medium' | 'large';
}

const NavBtn = ({ name, textSize }: NavBtnProps) => {

    return <>
        <button className={`nav-btn text-size-${textSize}`}>{name}</button>
    </>

}

export default NavBtn;