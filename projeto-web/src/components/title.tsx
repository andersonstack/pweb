interface TitleProps {
    title: string
}

export function Title({...props}: TitleProps){
    return (<h1>{props.title}</h1>)
}