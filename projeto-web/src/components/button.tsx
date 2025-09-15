interface ButtonProps {
    page: number;
    setPage: (page: number) => void;
    name: string;
    disabled?: boolean;
}

export function ButtonComponent({page, setPage, name, disabled}: ButtonProps) {
    return (
    <button
        disabled={disabled}
        className="cursor-pointer w-full bg-gray-50 p-2 my-4 text-black disabled:bg-transparent disabled:cursor-default"
        onClick={() => setPage(page - 1)}
      >{name}</button>
    )
}