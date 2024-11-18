
const CustomButton = (props)=>{
    const {style, onClick, type, textContent} = props
    return (
        // <> //this is called a fragment,
        <>
            <button onClick={onClick} className={style} type={type}>{textContent}</button>
        </>
    ) 
}

export default CustomButton;



//one thing with props is that you cannot pass data from child to child , it can only go from child to parent 
//first to  use the component is the parent 
//you can distructure together with function