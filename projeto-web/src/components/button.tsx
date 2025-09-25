interface ButtonProps {
    page: number;
    setPage: (page: number) => void;
    name: string;
    disabled?: boolean;
    className: string;
}

export function ButtonComponent({page, setPage, name, disabled, className}: ButtonProps) {
    return (
    <button
        disabled={disabled}
        className={className}
        onClick={() => setPage(page - 1)}
      >{name}</button>
    )
}