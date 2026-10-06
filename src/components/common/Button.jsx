const Button = ({children,className})=>{
    return(
        <div className={`font-mont font-bold text-[25px] text-white ${className}`}>{children}</div>
    )
}
export default Button