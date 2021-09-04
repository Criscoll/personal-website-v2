interface IProps {
    introComplete?: boolean;
}

export default function LeftSideColumn({ introComplete }: IProps) {
    return (
        <>
            <div className="side-column-left-container"></div>
        </>
    );
}
