interface ButtonComponentProps {
    onClick: (value: any) => void;
    name: string;
    disabled?: boolean;
    className: string;
}

export function ButtonComponent({onClick, name, disabled, className}: ButtonComponentProps) {
    return (
    <button
        disabled={disabled}
        className={className}
        onClick={onClick}
      >{name}</button>
    )
}