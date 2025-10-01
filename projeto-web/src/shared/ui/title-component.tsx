interface TitleComponentProps {
    title: string
}

export function TitleComponent({...props}: TitleComponentProps){
    return (<h1>{props.title}</h1>)
}