interface TextFieldViewProps {
    children?: string
    className?: string
}

export const TextFieldView = (props: TextFieldViewProps) => {
    return <textarea className={props.className}>{props.children}</textarea>
}
