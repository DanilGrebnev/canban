import { TChildren } from "@/shared/types/Children"
import s from "./s.module.scss"

const SignLayout = ({ children }: TChildren) => {
    return <div className={s.layout}>{children}</div>
}

export default SignLayout
