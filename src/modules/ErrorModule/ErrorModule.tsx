import './ErrorModule.scss';

interface colors {
    main: string;
    timer: string;
}

interface Error {
    position: string; // Позиция (слева, справа) откуда выходит
    time: string; // Длительность ошибки, либо пока пользователь не закроет (в секундах, либо infinity)
    colors: colors,
    type: string; // symbol || text (! или Error)
}

const ErrorModule = (props: any) => {
    const { children } = props;

    const {
        position,
        time,
        colors,
        type
    }: Error = props;

    return(
        <div className="ErrorWindow">
            <div className='Error'>
                <span className='ErrorType'>!</span>
                <span className="ErrorMessage">{children}</span>
            </div>
        </div>
    )
}

export default ErrorModule;